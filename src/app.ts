import cors from 'cors';
import express from 'express';

import { notasRoutes } from './route/nota.route'

export const app = express()

app.use(cors())

app.use(express.json())

app.use(notasRoutes)

