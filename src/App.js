import React, { useEffect, useState } from "react";

const App = () => {
  const [advice, setAdvice] = useState("Please click below to get advice!");
  const [count, setCount] = useState(0);

  const getAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");

    const data = await response.json();

    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen flex-col bg-green-950 text-slate-100 text-center">
      <h1 className="text-3xl mb-14">{advice}</h1>
      <button
        className="bg-green-500 px-4 py-2 rounded-md text-green-950 hover:shadow-green-800 shadow-md"
        onClick={getAdvice}
      >
        Get Advice
      </button>
      <p className="mt-10 text-xl">
        You have read{" "}
        <b className="text-yellow-500 bg-green-800 p-2 rounded-full">{count}</b>{" "}
        pieces of advice
      </p>
    </div>
  );
};

export default App;
