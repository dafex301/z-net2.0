import { NextResponse } from "next/server";

import QuestionData from "@/data/questions.json";

export async function POST(request: Request) {
  const questionData = QuestionData;
  const { answer, id } = await request.json();

  const question = questionData.find((question) => question.id === id);

  if (!question) {
    return NextResponse.json({ error: "Question not found" }, { status: 404 });
  }
  // Check if the answer is correct
  const isCorrect = question.answer === answer;

  // Return the result and correct answer
  return NextResponse.json({ result: isCorrect, answer: question?.answer });
}
