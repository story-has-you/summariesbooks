"use client"
import { useState, useRef } from "react"

export default ({ setBooks, setLoading }) => {
  const [keywords, setKeywords] = useState("")
  const inputRef = useRef(null)

  const handleInputChange = e => {
    setKeywords(e.target.value)
  }

  const handleEnter = e => {
    if (e.code === "Enter" && !e.shiftKey) {
      if (e.keyCode !== 229) {
        e.preventDefault()
        handleSearch()
      }
    }
  }

  const requestBody = {
    keywords: keywords.trim()
  }

  const handleSearch = async () => {
    setLoading(true)
    const res = await fetch("/api/search", {
      method: "POST",
      body: JSON.stringify(requestBody)
    })
    const { data } = await res.json()
    setBooks(data)
    setLoading(false)
  }

  return (
    <>
      <div className="text-center p-8">
        <div className="flex justify-center items-center">
          <input
            ref={inputRef}
            value={keywords}
            className="form-input mt-1 block w-[600px] p-2 border rounded-lg input-bordered input-primary"
            placeholder="Enter a book name..."
            onKeyDown={handleEnter}
            onChange={handleInputChange}
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
