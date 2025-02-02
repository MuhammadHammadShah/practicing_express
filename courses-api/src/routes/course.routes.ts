import { Router } from "express";
import {
  createCourse,
  getCourses,
  getCourse,
  getCourseContent,
  updateCourse,
  deleteCourse,
} from "../controllers/course.controller";

const router: Router = Router();

router.post("/", createCourse); // Create course
router.get("/", getCourses); // Get all courses
router.get("/:id", getCourse); // Get one course
router.get("/:id/content", getCourseContent); // Get only course content
// Update Course
router.put("/:id", updateCourse); // Update course by ID

// Delete Course
router.delete("/:id", deleteCourse); // Delete course by ID

export default router;
