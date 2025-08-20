import cors from "cors";
import { connectDB } from "./config/db";
import authRoutes from './routes/auth'
import express from 'express'
import dotenv from 'dotenv'


const app = express();

dotenv.config();
app.use(cors({origin: '*', credentials: true}))
app.use(express.json());

app.use('/api/auth', authRoutes);

connectDB();
app.listen(5000, () => {
    console.log('http://localhost:5000');
})