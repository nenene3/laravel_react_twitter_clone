import React from "react";
import { MessageCircle, Heart, Repeat } from "lucide-react";
const PostCard = ({ post }) => {
  return (
    <div className=" border-2 bg-slate-400 p-4">
      <div className="flex gap-6">
        <img
          src={post.user.img || "https://github.com/shadcn.png"}
          height={100}
          width={100}
          className="  rounded-full"
        />
        <div>
          <div>
            <div className="flex gap-7">
              <h1>{post.user.name}</h1>
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
