import express from 'express';
import cors from 'cors';

import { serverInit } from './services/serverInit.js';

const app = express();
const PORT = process.env.PORT || 3000;

console.log("✅ Express initialized");

serverInit(app, PORT);


