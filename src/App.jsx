
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header/Header'
import Bookmark from './Components/Bookmark/Bookmark';

function App() {
  const [bookmarks, setBookmarks]=useState([]);
  const handleBook=blog=>{
    const newBookmarks=[...bookmarks,blog];
    setBookmarks(newBookmarks);
  }
  const [readingTime,setReadingTime]=useState(0);

  const handleReadingTime=time=>{
    const newReadingTime=time+readingTime;
    setReadingTime(newReadingTime);
  }
  return (
   <div className='w-10/12 mx-auto'>
    <Header></Header>
    <div className='flex gap-3'>
      <Blogs handleBook={handleBook} handleReadingTime={handleReadingTime}></Blogs>
      <Bookmark bookmarks={bookmarks} readingTime={readingTime}></Bookmark>
    </div>
   </div>
  )
}

export default App
