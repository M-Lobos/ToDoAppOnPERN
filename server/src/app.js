import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import { serverInit } from './services/serverInit.js';

import routes from './routes/routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));

app.use("/api/v1/", routes);

serverInit(app, PORT);


