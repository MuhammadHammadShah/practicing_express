import { Request, Response } from "express";
import Content from "../models/content.model";
import Course from "../models/courses.model";

// naya content create krne k liye
export const createContent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { courseId, title, videoUrl } = req.body;
    const newContent = new Content({
      courseId,
      title,
      videoUrl,
    });

    newContent.save(); // Content DB me save ho gaya

    // **Step 2: Ab uska ID course me push karo**

    await Course.findByIdAndUpdate(
      courseId,
      {
        $push: {
          content: newContent._id,
        },
      },
      { new: true }
    );

    res.status(201).json({
      success: true,
      newContent,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating content",
    });
  }
};

// specific content lana by courseId

export const getContentById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const content = await Content.findById(req.params.id).populate("courseId");
    if (!content) {
      res.status(404).json({
        message: "Content not Found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      content,
    });

    //
  } catch (error) {
    res.status(500).json({
      message: "Error fetching content",
    });
  }
};

/*  Get Specific Content By CourseId   */

export const getContentByCourseId = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { courseId } = req.params;
    const content = await Content.findOne({ courseId: courseId });
    if (!content) {
      res.status(404).json({ message: "No content found for this course" });
      return;
    }
    res.status(200).json({ success: true, content });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching content by courseId",
    });
  }
};

/*  Get All Contents By CourseId   */

export const getAllContentByCourseId = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { courseId } = req.params;
    const content = await Content.find({ courseId: courseId });
    if (content.length === 0) {
      res.status(404).json({ message: "No content found for this course" });
      return;
    }
    res.status(200).json({ success: true, content });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching content by courseId",
    });
  }
};
