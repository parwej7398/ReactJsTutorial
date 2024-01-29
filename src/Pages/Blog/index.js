import React from "react";
import { multiply } from "../../Helpers/Blog";
import BlogCard from "../../Components/Blog/BlogCard";

const Blog = () => {
  const value = multiply(5, 10);
  const value2 = multiply(10, 10);

  console.log(multiply(5, 10), "value");
  console.log(value2, "valu2e");

  return (
    <div>
      <BlogCard />
    </div>
  );
};

export default Blog;
