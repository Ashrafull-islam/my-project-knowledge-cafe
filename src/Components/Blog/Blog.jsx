import { BsBookmarkFill } from "react-icons/bs";
import PropTypes from 'prop-types';
const Blog = ({blog,handleBook}) => {
    const { cover_image, author_img, author_name,publish_date,
        read_time_min,heading,hashtags}=blog;
    return (
        <div>
            <img src={cover_image} alt="" />
            <div className="flex justify-between items-center my-6">
                <div className="flex gap-4 items-center">
                    <img className="h-[60px] w-[60px] rounded-full" src={author_img} alt="author_image" />
                    <div>
                    <h2 className="text-xl font-semibold">{author_name}</h2>
                    <p className="text-xs text-gray-400">{publish_date}</p>
                    </div>
                    
                </div>
                <div>
                    <span className="text-gray-600">{read_time_min} min read  <button onClick={()=>handleBook(blog)}><BsBookmarkFill></BsBookmarkFill></button></span>
                </div>
            </div>
            <h2 className="text-3xl font-semibold w-[500px] break-keep my-2">{heading}</h2>
            <div className="my-6">
            {
                hashtags.map(hash=><span><a href=""></a> {hash} </span>)
            }
            </div>
            <div className="my-4">
            <a className="underline hover:text-orange-400" href="">Mark as read</a>

            </div>
           
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBook:PropTypes.func
  };
export default Blog;