import mongoose, { Schema, Document } from "mongoose";

interface IContent extends Document {
  courseId: mongoose.Types.ObjectId; // Related course ID
  title: string;
  videoUrl: string;
}

const contentSchema = new Schema<IContent>(
  {
    courseId: {
      type: Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Content = mongoose.model<IContent>("Content", contentSchema);

export default Content;
export { IContent };
