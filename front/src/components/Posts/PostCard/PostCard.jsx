import React from "react";
import { MessageCircle, Heart, Repeat,Bookmark } from "lucide-react";
import { Link } from "react-router-dom";
import { useAddBookMarkMutation } from "../../../services/Api";

const PostCard = ({ post }) => {
  const [addBookMark] = useAddBookMarkMutation();
  const handleBookMark = async () => {
    try {
      const res = await addBookMark(post.id).unwrap();
      console.log(res)
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className=" border-2 bg-slate-400 p-4">
      <div className="flex gap-6">
        <img
          src={
            post.user.profile_pic
              ? `http://localhost:8000/storage/${post.user.profile_pic}`
              : "https://github.com/shadcn.png"
          }
          height={100}
          width={100}
          className="  rounded-full"
        />
        <div>
          <div>
            <div className="flex gap-7">
              <Link to={`/profile/${post.user.id}`}>{post.user.name}</Link>
              <h1>{new Date(post.created_at).toLocaleTimeString()}</h1>
            </div>
            <h1>{post.text}</h1>
          </div>
          <div className=" flex">
            <MessageCircle />{post.comments_count || 0}
            <Heart />
            <Repeat />
            <Bookmark onClick={handleBookMark}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
