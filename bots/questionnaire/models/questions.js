import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Questions = new Schema({
    question_id: {type: Number, required: true, index: true, unique: true},
    question: {type: String, required: true}
});

export const Question = mongoose.model('Questions', Questions);