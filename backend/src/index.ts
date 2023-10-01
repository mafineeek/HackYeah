import express from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import axios from 'axios';

const app = express();

app.use(cors({
    origin: '*'
}))
app.use(express.json());
connect('mongodb://localhost:27017/jakaszkola').then(() => console.log('[JAKASZKOLA.pl] MongoDB connected'));

import AuthorizationRoutes from './routes/AuthorizationRoutes';

app.use('/auth', AuthorizationRoutes);

import SchoolRoutes from './routes/SchoolRoutes';
import { School } from './models/School';
app.use('/school', SchoolRoutes);

(async () => {
    await School.create({
        school_name: 'Techniczne Zakłady Naukowe im. gen. Władysława Sikorskiego',
        studentCount: 1689,
        location: {
            city: "Czestochowa",
            street_address: 'ul. Jasnogórska 84/90'
        },
        awards: [
            'Sklasyfikowany w 300 najlepszych technikach w Polsce',
            'Sklasyfikowany w 200 najlepszych technikach w Polsce',
            'Tytul "Brązowej Szkoły 2016" w Rankingu Szkół Ponadgimnazjalnych'
        ],
        comments: [
            "Bardzo dobra szkoła, uwielbiam tam chodzić",
            "Bardzo wysoki poziom, w reszcie się czegoś nauczę!",
            "Najlepsze techniku? Tylko TZN!"
        ],
        classProfiles: [
            "technik programista",
            "technik mechanik",
            "technik mechanik-lotniczy",
            "technik elektronik",
            "technik informatyk"
        ],
        phone_number: '123456789',
        email: 'sekretariat@tzn.edu.pl'
    })
});

app.listen(2137, () => console.log('[JAKASZKOLA.pl] Backend listening on port 2137'));