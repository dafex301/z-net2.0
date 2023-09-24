"use client";

import IQuestion from "@/interfaces/practice/IQuestion";
import fetcher from "@/utils/swr/fetcher";
import { useEffect, useState } from "react";
import useSWR from "swr";
import AnswerButton from "../practice/AnswerButton";
import IAnswer from "@/interfaces/practice/IAnswer";

export default function PracticeCard() {
  const { data } = useSWR<IQuestion[]>("/api/questions", fetcher);

  const [idx, setIdx] = useState(0);
  const [session, setSession] = useState<IQuestion>({
    id: 0,
    question: "Sek soalnya loading...",
    options: ["Loading...", "Loading...", "Loading...", "Loading..."],
  });
  const [answer, setAnswer] = useState("");
  const [progress, setProgress] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState<IAnswer | undefined>(undefined);

  useEffect(() => {
    if (data) {
      setSession(data[idx]);
      setProgress(((idx + 1) / data?.length) * 100);
    }
  }, [data, idx]);

  const handleSelectAnswer = async (ans: string) => {
    if (answer !== "") return;
    setAnswer(ans);

    fetch("/api/answer", {
      method: "POST",
      body: JSON.stringify({
        id: session.id,
        answer: ans,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setResult(res);
      })
      .catch((error) => console.error(error));
  };

  const handleNext = () => {
    // TODO
    if (idx + 1 === data?.length) return;

    setIdx(idx + 1);
    setAnswer("");
    setResult(undefined);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4 transition-all">
      <div className="grid grid-cols-12 items-center gap-4">
        <div className="col-span-11 w-full bg-gray-200 rounded-full h-2.5 ">
          <div
            className="bg-purple-600 h-2.5 rounded-full "
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-purple-700 text-sm">
          <span className="font-semibold text-lg">{idx + 1}</span>/
          {data ? data.length : "?"} soal
        </p>
      </div>

      <h2 className="text-lg">{session.question}</h2>

      <div className="flex flex-col gap-3">
        {session.options.map((option, index) => (
          <AnswerButton
            key={index}
            index={index}
            option={option}
            answer={answer}
            handler={handleSelectAnswer}
          />
        ))}
      </div>

      {result !== undefined && (
        <div
          className={`text-white p-4 rounded-xl ${
            result.result ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {result.result ? (
            <p className="">Hoki ini mah</p>
          ) : (
            <>
              <p className="">Coba lagi tahun depan</p>
              <p>
                Jawaban yang bener tuh{" "}
                <span className="font-bold">{result.answer}</span>
              </p>
            </>
          )}
        </div>
      )}

      <div className="flex justify-end gap-3">
        <button className="border-2 border-gray-400 text-gray-500 rounded-full py-2 px-4 hover:bg-gray-100 transition-all">
          Udahan
        </button>
        <button
          disabled={result === undefined}
          onClick={handleNext}
          className="bg-purple-700 text-white rounded-full py-2 px-4 hover:bg-purple-800 transition-all
          disabled:bg-gray-400 disabled:cursor-not-allowed
          "
        >
          Next!
        </button>
      </div>
    </div>
  );
}
