import express from "express";
import {
  createContent,
  getAllContentByCourseId,
  getContentByCourseId,
  getContentById,
} from "../controllers/content.controller";

const router = express.Router();

router.post("/createContent", createContent); // new content create krne k liye
router.get("/getContent/:id", getContentById); // specific content fetch krne k liye
router.get("/getContent/course/:courseId", getContentByCourseId); // specific content by course id fetch krne k liye
router.get("/getContent/course/:courseId/all", getAllContentByCourseId); // ALL content by course id fetch krne k liye

export default router;
