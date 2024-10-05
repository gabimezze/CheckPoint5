import Image from "next/image"
import book from "@/img/book.jpg"
import bookum from "@/img/bookum.jpg"
import bookdois from "@/img/bookdois.jpg"

export default function Home() {

  return (
    <div className="img-home">
       <a><Image src={book} alt="book" width={400} height={270} /></a>
       <a><Image src={bookum} alt="book" width={400} height={270} /></a>
       <a><Image src={bookdois} alt="book" width={400} height={270} /></a>
    </div>

  )
}