import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
const Access = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const codes = ["ellenkic7", "c7", "ellenki c7","elen c7"];
  const handleChecks = () => {
    const userInput = inputValue.trim().toLowerCase();

    if(codes.includes(userInput)) {
        navigate("/home");
    }else{
      alert("The code you entered is invalid!!");
    }
  }
  return (
    <div
      className="
        min-h-screen flex items-center justify-center
        bg-black
        bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.75)),url('/vault-bg.jpeg')]
        bg-no-repeat bg-center
        bg-[length:75%_auto]
      "
    >
      {/* Vault Card */}
      <div
        className="
          w-[360px] max-w-[90%]
          rounded-[18px]
          px-8 py-9
          text-center
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-[0_35px_70px_rgba(255,255,255,0.25)]
          shadow-[0_25px_50px_rgba(0,0,0,1)]
        "
      >
        {/* Title */}
        <h1 className="text-white text-[18px] tracking-[1.6px] mb-6">
          ENTER OUR COLLEGE CODE TO ACCESS
        </h1>

        {/* Input */}
        <div className="relative w-[90%] mx-auto mb-6">
          <img
            src="/lock.jpeg"
            alt="lock"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-6 pointer-events-none"
          />

          <input
            type="password"
            placeholder="••••••"
            className="
              w-full
              py-3 pl-14 pr-10
              rounded-full
              text-center
              outline-none
              shadow-[0_8px_20px_rgba(0,0,0,0.35)]
              placeholder:tracking-[9px]
            "
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
          />
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button
            className="
              w-10 h-10
              rounded-full
              bg-white text-black text-2xl
              flex items-center justify-center
              transition-transform duration-200
              hover:-translate-y-1 hover:scale-105
              active:translate-y-0
            "
            onClick={handleChecks}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Access;
