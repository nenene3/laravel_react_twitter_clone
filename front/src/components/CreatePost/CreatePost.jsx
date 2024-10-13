import React, { useState } from "react";
import Button from "../Button/Button";
import { useCreatePostMutation } from "../../services/Api";

const CreatePost = () => {
  const [formData, setFormData] = useState({
    text: "",
  });

  const[addPost,results] = useCreatePostMutation();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submited");
    // console.log(formData);
    try{

     const res =  await addPost(formData).unwrap();
    //  console.log(res)

      setFormData({
        text: "",
      });
    }catch(e){
      console.error(e);
    }
  };

  return (
    <form
      className=" bg-red-800 border-4 h-44 border-black"
      method="post"
      onSubmit={handleSubmit}
    >
      
      <textarea name="text" onChange={handleChange} />
      <Button type="submit">submit</Button>
    </form>
  );
};

export default CreatePost;
