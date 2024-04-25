
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header/Header'
import Bookmark from './Components/Bookmark/Bookmark';

function App() {
  const [Bookmarks, setBookmarks]=useState([]);
  const handleBook=blog=>{
    setBookmarks(blog);
    const newBookmarks=[...Bookmarks,blog];
    setBookmarks(newBookmarks);
    
  }
  return (
   <div className='w-10/12 mx-auto'>
    <Header></Header>
    <div className='flex'>
      <Blogs handleBook={handleBook}></Blogs>
      <Bookmark></Bookmark>
    </div>
   </div>
  )
}

export default App
