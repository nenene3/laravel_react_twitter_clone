import React from "react";
import { MessageCircle, Heart, Repeat } from "lucide-react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
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
            <MessageCircle />
            <Heart />
            <Repeat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
