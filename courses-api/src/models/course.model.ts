import { Schema, model, Document } from "mongoose";

// Course ka interface
export interface ICourse extends Document {
  title: string;
  description: string;
  price: number;
  content: string[];
  createdAt: Date;
}

// Course ka schema
const courseSchema = new Schema<ICourse>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    content: { type: [String], required: true }, // Array of strings (lectures, notes, etc.)
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Model export kar rahe hain
export const Course = model<ICourse>("Course", courseSchema);
