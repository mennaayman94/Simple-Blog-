import userEvent from "@testing-library/user-event";
import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from './useFetch';
const Home = () => {
  //use state render the dom  by passing the name argument and change it by using setname function
 
  // const handDelete=(id)=>{
  //     const newBlogs= blogs.filter(blog=>blog.id!==id)
  //     setBlogs(newBlogs)
  // }
 const{data:blogs,error,isPending}= useFetch("http://localhost:8000/blogs")
  return (
    //passing props
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>is loading...</div>}
     {blogs&&<BlogList blogs={blogs} title="All Blogs" />}
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's Blogs"
      />
    </div>
  );
};

export default Home;
