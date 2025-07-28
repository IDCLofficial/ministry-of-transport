'use client'

import { useState, useEffect } from "react";
import Link from "next/link";

// Move newsList here or import from a shared location
const newsList = [
  {
    title: "Uzodimma Seeks Protection from Illegal Levies in Courtesy Visit to Transport Commissioner",
    description: "Governor Hope Uzodimma visited Imo Transport Commissioner Rex Anunobi, urging protection for private park owners against illegal levies and supporting regulatory reforms.",
    date: "9 July 2025",
    image: "/images/illegal_levies.png",
  },
  {
    title: "Imo Transport Company Staff Celebrate Salary Increment",
    description: "Staff of the Imo Transport Company (state-owned under the Ministry) received prompt June salary payments and significant increments under the new management led by GM Uche Obiozor.",
    date: "1 July 2025",
    image: "/images/itc_salary_increment.png",
  },
  {
    title: "Control Post Flyover Project Enters Final Phase",
    description: "The Control Post flyover construction reached its final phase under the supervision of the Ministry of Transport and the State Governor, with progress updates released via official media.",
    date: "Late June 2025",
    image: "/images/control_post_flyover.png",
  }
];



function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export default function NewsSearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(newsList);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions =
    query.length > 0
      ? newsList.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        )
      : [];

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const q = query.toLowerCase();
    setResults(
      newsList.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q)
      )
    );
    setShowSuggestions(false);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    setShowSuggestions(true);
  }

  function handleSuggestionClick(title: string) {
    setQuery(title);
    setShowSuggestions(false);
  }

  useEffect(() => {
    return () => {
      setQuery("");
      setResults(newsList);
      setShowSuggestions(false);
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center py-8 bg-white relative">
      <form className="flex w-full max-w-2xl" onSubmit={handleSearch} autoComplete="off">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 border border-gray-300 rounded-l px-4 py-2 focus:outline-none w-full"
            value={query}
            onChange={handleInputChange}
            onFocus={() => setShowSuggestions(true)}
          />
          {showSuggestions && suggestions.length > 0 && (
            <ul className="absolute left-0 right-0 bg-white border border-gray-200 rounded-b shadow z-10 max-h-48 overflow-y-auto">
              {suggestions.map((item, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm"
                  onClick={() => handleSuggestionClick(item.title)}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-8 py-2 rounded-r font-semibold"
        >
          Search
        </button>
      </form>
      {query.length > 0 && results.length > 0 && (
        <div className="w-full max-w-2xl mt-4">
          {results.map((item, idx) => (
            <Link key={idx} href={`/news/${slugify(item.title)}`} className="block border-b py-3 hover:bg-gray-50 transition">
              <div className="font-bold">{item.title}</div>
              <div className="text-xs text-gray-500 mb-1">{item.date}</div>
              <div className="text-sm text-gray-700 line-clamp-2">{item.description}</div>
            </Link>
          ))}
        </div>
      )}
      {query.length > 0 && results.length === 0 && (
        <div className="w-full max-w-2xl mt-4 text-center text-gray-500">No news found.</div>
      )}
    </div>
  );
} 