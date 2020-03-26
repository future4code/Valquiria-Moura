import express, { Request, Response } from "express";
import {SignUpEndpoint} from './SignUpEndpoint'

const app = express();
app.use(express.json());

app.post('/signup', SignUpEndpoint)

export default app;
