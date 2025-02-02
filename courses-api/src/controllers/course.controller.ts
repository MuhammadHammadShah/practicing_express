import { Request, Response } from "express";
import { Course } from "../models/course.model";

// Create a new course
export const createCourse = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { title, description, price, content } = req.body;
    const newCourse = new Course({ title, description, price, content });
    await newCourse.save();
    res.status(201).json({ success: true, data: newCourse });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error creating course", error });
  }
};

// Get all courses
export const getCourses = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const courses = await Course.find();
    res.status(200).json({ success: true, data: courses });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching courses", error });
  }
};

// Get a specific course
export const getCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      res.status(404).json({ success: false, message: "Course not found" });
      return;
    }
    res.status(200).json({ success: true, data: course });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching course", error });
  }
};

// Get course content
export const getCourseContent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const course = await Course.findById(req.params.id).select("content");
    if (!course) {
      res.status(404).json({ success: false, message: "Course not found" });
      return;
    }
    res.status(200).json({ success: true, data: course.content });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching content", error });
  }
};

// Update Course
export const updateCourse = async (req: Request, res: Response): Promise<void> => {
    try {
      const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedCourse) {
        res.status(404).json({ success: false, message: "Course not found" });
        return;
      }
      res.status(200).json({ success: true, data: updatedCourse });
    } catch (error) {
      res.status(500).json({ success: false, message: "Error updating course", error });
    }
  };
  
  // Delete Course
  export const deleteCourse = async (req: Request, res: Response): Promise<void> => {
    try {
      const deletedCourse = await Course.findByIdAndDelete(req.params.id);
      if (!deletedCourse) {
        res.status(404).json({ success: false, message: "Course not found" });
        return;
      }
      res.status(200).json({ success: true, message: "Course deleted successfully" });
    } catch (error) {
      res.status(500).json({ success: false, message: "Error deleting course", error });
    }
  };
  