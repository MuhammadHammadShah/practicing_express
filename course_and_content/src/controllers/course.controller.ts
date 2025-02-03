import { error } from "console";
import express, { Request, Response } from "express";
import Course from "../models/courses.model";

// course create krna
export const createCourse = async (req: Request, res: Response) => {
  try {
    const { title, description, price, content } = req.body;
    const newcourse = new Course({
      title,
      description,
      price,
      content,
    });
    await newcourse.save();
    res.status(201).json({
      success: true,
      newcourse,
    });
  } catch (err) {
    //
    res.status(500).json({
      message: "Error creating course",
      error,
    });
  }
};

// Sare courses lana/fetch krna

export const getAllCourses = async (req: Request, res: Response) => {
  try {
    const courses = await Course.find();
    res.status(200).json({
      success: true,
      courses,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error fetching all courses",
    });
  }
};

// aik course lana

export const getCourseById = async (req: Request, res: Response) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      res.status(404).json({
        message: "Course not Found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      course,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error fetching the course",
    });
  }
};
