import mongoose, { Schema, Document } from "mongoose";

export interface ICourse extends Document {
  title: string;
  description: string;
  price: number;
  content: mongoose.Types.ObjectId[];
}

const courseSchema = new Schema<ICourse>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    content: [
      {
        type: Schema.Types.ObjectId,
        ref: "Content",
      },
    ],
  },
  {
    timestamps: true,
  }
);

//                                       "DB ka name" , schema
const Course = mongoose.model<ICourse>("Course", courseSchema);

export default Course;
