"use client"
import { request } from "@/utils/api"
import { useState, useRef } from "react"
import { BsSearch } from "react-icons/bs";
import Bookshelf from "../Bookshelf";

export default () => {
  const [keywords, setKeywords] = useState("")
  const [books, setBooks] = useState([])
  const inputRef = useRef(null)

  const searchBooks = async (keywords) => {
    const { data } = await request("/api/search", {
      method: "POST",
      body: { keywords: keywords.trim() }
    })
    setBooks(data)
  }

  const handleEnter = e => {
    if (e.code === "Enter" && !e.shiftKey) {
      if (e.keyCode !== 229) {
        e.preventDefault()
        searchBooks(keywords)
      }
    }
  }



  return (
    <>
      <div className="text-center p-8 w-full">
        <div className="flex justify-center items-center">
          <input
            ref={inputRef}
            value={keywords}
            className="form-input mt-1 block w-full md:w-[600px] p-2 border rounded-lg input-bordered input-primary custom-orange-50"
            placeholder="Enter a book name..."
            onKeyDown={handleEnter}
            onChange={(e) => setKeywords(e.target.value)}
          />
          <button
            className="btn btn-neutral py-2 px-4 ml-2"
            onClick={async () => searchBooks(keywords)}
          >
            <BsSearch />
          </button>
        </div>
        <div className="h-[700px] overflow-auto mt-5">
          <Bookshelf books={books} />
        </div>
      </div>
    </>
  )
}
