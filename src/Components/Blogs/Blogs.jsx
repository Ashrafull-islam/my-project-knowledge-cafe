import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'

const Blogs = ({handleBook,handleReadingTime}) => {
    const [blogs,setBlogs]=useState([]);
    useEffect(() =>{
        fetch('knowledge.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="w-2/3 rounded-lg">
            {
        blogs.map((blog)=><Blog key={blog.id} blog={blog} handleBook={handleBook} handleReadingTime={handleReadingTime}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes={
    handleBook:PropTypes.func
}
export default Blogs;