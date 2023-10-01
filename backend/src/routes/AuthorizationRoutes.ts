import { Router, type Request, type Response } from "express";
import { body, validationResult } from 'express-validator';
import { User } from "../models/User";
import { AuthorizationErrors, AuthorizationStatus } from "../types/ResponseTypeEnums";
import jwt from 'jsonwebtoken';
import { JwtSecret } from "../types/Constants";
const router = Router();

router.post('/login', body('email').isEmail().notEmpty(), body('password').notEmpty(), async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.json(
            {
                type: AuthorizationErrors.FormError,
                errors: errors.array()
            }
        )
    };

    const user = await User.findOne({ email });

    if (!user) {
        return res.json(
            {
                type: AuthorizationErrors.UserDoesNotExist
            }
        );
    }

    else if (user.password !== password) {
        return res.json(
            {
                type: AuthorizationErrors.InvalidPassword
            }
        );
    };

    const token = jwt.sign(
        {
            _id: user._id,
            email: user.email,
            displayName: user.displayName
        },
        JwtSecret
    )

    return res.json(
        {
            type: AuthorizationStatus.Authorized,
            token
        }
    )

});

router.post('/register', body('email').isEmail().notEmpty(), body('password').notEmpty(), body('displayName').isString().notEmpty().isLength({ min: 3, max: 15 }), async (req: Request, res: Response) => {
    const { email, password, displayName } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.json(
            {
                type: AuthorizationErrors.FormError,
                errors: errors.array()
            }
        )
    }

    const user = await User.findOne({ email });

    if (user) {
        return res.json(
            {
                type: AuthorizationErrors.UserAlreadyExists
            }
        );
    }

    const newUser = new User({
        email,
        password,
        displayName: displayName,
        banned: false
    });

    await newUser.save();

    const token = jwt.sign(
        {
            _id: newUser._id,
            email: newUser.email,
            displayName: newUser.displayName
        },
        JwtSecret
    );

    return res.json(
        {
            type: AuthorizationStatus.Authorized,
            token
        }
    )
})

router.get('/heartbeat', (req: Request, res: Response) => {
    return res.json({
        type: 'HeartbeatOk',
        value: 'Ok'
    })
})

export default router;