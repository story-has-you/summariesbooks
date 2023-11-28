"use client"
import Book from "../../../components/Book"

import { useEffect, useState } from "react"

export default ({ params }) => {
  const [book, setBook] = useState({})
  const [loading, setLoading] = useState(false)

  const fetchBook = async () => {
    setLoading(true)
    const res = await fetch(`/api/book/${params.name}`, {
      next: { revalidate: 3600 }
    })
    if (res) {
      const { data } = await res.json()
      setBook(data)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchBook()
  }, [])

  return (
    <>
      <Book book={book} loading={loading}></Book>
    </>
  )
}
