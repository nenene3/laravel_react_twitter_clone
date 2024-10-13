import React, { useEffect } from "react";
import { useGetProfileQuery } from "../../services/Api";
import { useSelector } from "react-redux";
import Button from "../Button";
import PostCard from "../Posts/PostCard";
import { useParams } from "react-router-dom";
import ProfileBanner from "../ProfileBanner";
import CreatePost from "../CreatePost/CreatePost";
const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const { userId } = useParams();

  const {
    data: profile,
    error,
    isLoading,
    isFetching,
  } = useGetProfileQuery(userId ?? user.id);

  useEffect(() => {
    console.log(profile);
  }, [profile]);
  return (
    <div className="">
      {!error && !isFetching && (
        <>
          <ProfileBanner profile={profile.profile} />
          
          {String(userId) ===String(user.id) && <CreatePost/> }
           
          {profile.posts.map((post, i) => (
            <PostCard post={post} key={i} />
          ))}
        </>
      )}
      {error && (error.data?.message || error.status)}
    </div>
  );
};

export default Profile;
