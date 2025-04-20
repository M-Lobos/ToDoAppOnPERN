import { Router } from "express";

import tasks from "./tasks.routes.js";

const router = Router();

router.use("", tasks);

export default router;