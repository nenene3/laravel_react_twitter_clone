import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const EditProfile = () => {
  const [banner, setBanner] = useState(null);
  const [prev_banner, setPrevBanner] = useState(null);
  const [profile_pic, setProfile_pic] = useState(null);
  const [prevProfile_pic, setPrevProfile_pic] = useState(null);

  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);

  const changeBanner = (e) => {
    setBanner(e.target.files[0]);
    const url = URL.createObjectURL(e.target.files[0]);
    setPrevBanner(url);
  };

  const changeProfilePic = (e) => {
    setProfile_pic(e.target.files[0]);
    const url = URL.createObjectURL(e.target.files[0]);
    setPrevProfile_pic(url);
  };

  const submitHandler = async (e) => {
    e.preventDefault()
    const formdata = new FormData();
    formdata.append('banner',banner)
    formdata.append('profile_pic',profile_pic)
    formdata.append('_method','PATCH');

    try {
      const response = await axios.post(`/api/profiles/${user.id}`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Accept": "application/json",
          // "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className=" bg-slate-500">
      <form onSubmit={submitHandler}>
        <input
          name="banner"
          type="file"
          placeholder="asdfasdfasdf"
          onChange={changeBanner}
        />
        {prev_banner && <img src={prev_banner} />}
        <input
          name="profile_pic"
          placeholder=""
          type="file"
          onChange={changeProfilePic}
        />
        {prevProfile_pic && <img src={prevProfile_pic} />}
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default EditProfile;
