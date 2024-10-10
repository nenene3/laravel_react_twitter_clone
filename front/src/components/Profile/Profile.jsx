import React from "react";
import { useGetProfileQuery } from "../../services/Api";
import { useSelector } from "react-redux";
import Button from "../Button";
import PostCard from "../Posts/PostCard";
const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const {
    data: posts,
    error,
    isLoading,
    isFetching,
  } = useGetProfileQuery(user.id);

  return (
    <div className="">
      {!isFetching && posts.map((post, i) => <PostCard post={post} key={i} />)}
    </div>
  );
};

export default Profile;
