import express from "express";
import {
  createCourse,
  getAllCourses,
  getCourseById,
} from "../controllers/course.controller";

const router = express.Router();

router.post("/createCourse", createCourse); // naya course create krne k liye
router.get("/getCourses", getAllCourses); // sare courses fetch krne k liye
router.get("/getCourse/:id", getCourseById); // aik specific course by id fetch krne k liye

export default router;
