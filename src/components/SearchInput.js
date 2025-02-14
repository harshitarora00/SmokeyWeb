"use client";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
const SearchInput = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  //form
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/web?searchTerm=${input}`);
  };

  //imfeelingLucky
  const handleLuckyButton = async () => {
    setLoading(true);
    const res = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);
    setLoading(false);
    if (!res) return;
    router.push(`/search/web?searchTerm=${res}`);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-[-117px] mx-auto max-w-[90%] border border-white hover:border-white hover:shadow-yellow-50 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadaw-md sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-white mr-3" />
        <input
          type="text"
          className="flex-grow font-mono focus:outline-none bg-transparent text-white"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <BsFillMicFill className="text-xl text-white" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row my-8 ">
        <button className="btn hover:bg-gray-400" onClick={handleSubmit}>
          Smokey Search
        </button>
        <button className="btn hover:bg-gray-400" onClick={handleLuckyButton}>
          {loading ? "loading..." : "Im Feeling Lucky"}
        </button>
      </div>
    </>
  );
};

export default SearchInput;
