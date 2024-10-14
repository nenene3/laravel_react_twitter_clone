import React, { useEffect } from "react";
import { useGetBooksMarksQuery } from "../../services/Api";
import PostCard from "../Posts/PostCard";

const BookMarks = () => {
  const { data,isFetching } = useGetBooksMarksQuery();

  useEffect(()=>{
    console.log(data)
  },[data])


  return <div>
    {!isFetching && data.map((post,i)=><PostCard key={i} post={post}/>)}
    {/* <PostCard/> */}
  </div>;
};

export default BookMarks;
