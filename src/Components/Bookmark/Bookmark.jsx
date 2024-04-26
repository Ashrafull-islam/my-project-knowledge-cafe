import Sbookmark from "../../Sbookmark/Sbookmark";

const Bookmark = ({bookmarks,readingTime}) => {
    return (
        <div className="w-1/3">
            <div className="m-6 p-6 bg-gray-300 rounded-lg text-3xl font-bold">
                <h2>Spent time on read :{readingTime}</h2>
            </div>
            <div className="bg-gray-300 m-6 p-6 rounded-lg -mt-[2px]">
            <div className="">
                <h2 className="text-3xl font-semibold">Bookmarked Blogs : {bookmarks.length}</h2>
            </div>
            {
                bookmarks.map((bookmark)=><Sbookmark key={bookmark.id} bookmark={bookmark}></Sbookmark>)
            }
            </div>
        </div>
    );
};

export default Bookmark;