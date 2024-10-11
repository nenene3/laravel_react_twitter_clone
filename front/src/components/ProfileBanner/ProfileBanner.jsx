import React, { useEffect } from "react";
import Button from "../Button";
import { Search } from "lucide-react";

const ProfileBanner = ({ profile }) => {
  return (
    <div className=" w-full  ">
      <>
        <img
          src="https://pbs.twimg.com/profile_banners/1589593626740494341/1709971123"
          className=" w-full h-[300px] relative bg-gray-950  z-10"
        />

        <div className=" mx-5">
          <div className="flex justify-between z-50 text-white items-start  ">
            <div className="relative bottom-12 z-50 ">
              <div className="   w-20 h-20 bg-red-900"></div>
              <h1>{profile.user.name} </h1>
              <h1>@{profile.user.email} </h1>
              <h1>{new Date(profile.user.created_at).toDateString()} </h1>
              <div className="flex gap-4">
                <h1>following 0</h1>
                <h1>followes 0</h1>
              </div>
            </div>
            <Button>follow</Button>
          </div>
        </div>
      </>
    </div>
  );
};

export default ProfileBanner;
