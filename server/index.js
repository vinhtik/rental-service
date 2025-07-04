import express from 'express';
import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import sequelize from './config/database.js';
import { User } from './models/user.js';
import { Offer } from './models/offer.js';
import { Review } from './models/review.js';
import cors from 'cors';
import path from 'path'
import {router} from './routes/index.js';
import ErrorHandlingMiddleware from './middleware/ErrorHandlingMiddleware.js';
import { fileURLToPath } from 'url'

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/static', express.static(path.resolve(__dirname, 'static')));
app.use('/', router);
app.use(ErrorHandlingMiddleware)

app.get('/', (req, res) => {
    res.status(200).json({ message:'Работает' })
})

const start = async () => {
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Сервер запущен на порте ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

start();