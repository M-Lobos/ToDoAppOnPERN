import { Router } from "express";

import helloworld from "./tasks.routes.js";

const router = Router();

router.use("", helloworld);

export default router;