import { NextResponse } from "next/server";

import QuestionData from "@/data/questions.json";

export async function GET(request: Request) {
  const questionData = QuestionData;

  const questions = questionData.map(({ id, question, options }) => ({
    id,
    question,
    options,
  }));

  return NextResponse.json(questions);
}
