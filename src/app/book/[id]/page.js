"use client"

import Book from "@/components/Book"
import { useEffect, useState } from "react"

export default ({ params }) => {
  const [book, setBook] = useState({})
  const [loading, setLoading] = useState(false)
  const [assistant, setAssistant] = useState({})

  const fetchBook = async () => {
    setLoading(true)
    const res = await fetch(`/api/book/${params.id}`)
    if (res) {
      const { data } = await res.json()
      setBook(data)
      fetchAssistant()
    }
    setLoading(false)
  }

  const deleteThread = async () => {
    const thread_id = window.localStorage.getItem(`thread_id_${book.id}`)
    if (!thread_id) {
      return
    }
    const res = await fetch(`/api/thread/${thread_id}`, {
      method: "DELETE"
    })
    if (res.ok) {
      window.localStorage.removeItem(`thread_id_${book.id}`)
    }
  }

  const fetchAssistant = async () => {
    const res = await fetch(`/api/assistant/${params.id}`)
    if (res.ok) {
      const { data } = await res.json()
      setAssistant(data)
    }
  }

  useEffect(() => {
    fetchBook()
    return () => deleteThread()
  }, [])

  return (
    <>
      <Book book={book} loading={loading} assistant={assistant}></Book>
    </>
  )
}
