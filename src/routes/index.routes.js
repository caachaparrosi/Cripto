import { Router } from "express";
import { renderIndex, renderAbout } from "../controllers/index.controller";

const router = Router();

router.get("/", renderIndex);


export default router;
