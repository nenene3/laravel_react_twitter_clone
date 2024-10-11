import React, { useEffect } from "react";
import { useGetProfileQuery } from "../../services/Api";
import { useSelector } from "react-redux";
import Button from "../Button";
import PostCard from "../Posts/PostCard";
import { useParams } from "react-router-dom";
import ProfileBanner from "../ProfileBanner";
const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const { userId } = useParams();

  const {
    data: posts,
    error,
    isLoading,
    isFetching,
  } = useGetProfileQuery(userId ?? user.id);


  return (
    <div className="">
      <ProfileBanner/>
      {!error &&
        !isFetching &&
        posts.map((post, i) => <PostCard post={post} key={i} />)}
      {error && (error.data?.message || error.status )}
    </div>
  );
};

export default Profile;
