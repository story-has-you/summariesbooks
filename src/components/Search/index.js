"use client"
import { useState, useRef } from "react"

export default ({ searchBooks, books }) => {
  const [keywords, setKeywords] = useState("")
  const inputRef = useRef(null)

  const handleEnter = e => {
    if (e.code === "Enter" && !e.shiftKey) {
      if (e.keyCode !== 229) {
        e.preventDefault()
        handleSearch()
      }
    }
  }

  const handleSearch = async () => {
    searchBooks(keywords)
  }

  return (
    <>
      <div className="text-center p-8">
        <div className="flex justify-center items-center">
          <input
            ref={inputRef}
            value={keywords}
            className="form-input mt-1 block w-[600px] p-2 border rounded-lg input-bordered input-primary custom-orange-50"
            placeholder="Enter a book name..."
            onKeyDown={handleEnter}
            onChange={(e) => setKeywords(e.target.value)}
          />
          <button
            className="btn btn-neutral py-2 px-4 ml-2"
            onClick={handleSearch}
          >
            Summarize
          </button>
        </div>
      </div>
    </>
  )
}
