import { Router, type Request, type Response } from "express";
import { School } from "../models/School";

const router = Router();

router.get('/all', async (req: Request, res: Response) => {
    return res.json(await School.find({}));
})

router.get('/search', async (req: Request, res: Response) => {
    const { query } = req.query;

    return res.json(await School.find({
        $or: [
            { school_name: { $regex: query, $options: 'i' } },
            { 'location.city': { $regex: query, $options: 'i' } },
            {
                'location.street_address': { $regex: query, $options: 'i' }
            },
            {
                classProfiles: {
                    $in: [new RegExp(String(query), 'i')]
                }
            }
        ]
    }))
});

router.get('/view/:id', async (req: Request, res: Response) => {
    const { id } = req.params;

    return res.json(await School.findOne({
        _id: String(id)
    }));
})

export default router;