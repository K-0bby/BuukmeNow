// import React from 'react';
import Blog1 from "../assets/Blog1.jpeg";
import Blog2 from "../assets/Blog2.jpeg";
import { Link } from "react-router-dom";

const blogData = [
  {
    image: Blog1,
    alt: "Empower Your Business",
    title: "Blog title heading will go here",
    category: "Company news",
    readTime: "5 min read",
  },
  {
    image: Blog2,
    alt: "Keep friends and family here",
    title: "Blog title heading will go here",
    category: "Company news",
    readTime: "5 min read",
  },
  {
    image: Blog2,
    alt: "Direct clients here",
    title: "Blog title heading will go here",
    category: "Company news",
    readTime: "5 min read",
  },
];

const Blog = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-around  py-12">
      {blogData.map((blog, index) => (
        <div
          key={index}
          className="w-full lg:w-1/4 flex flex-col items-center rounded-lg overflow-hidden bg-white"
        >
          <img
            src={blog.image}
            alt={blog.alt}
            className="w-full sm:w-[360px] md:w-[480px] lg:w-[360px] aspect-[6/5] object-cover rounded-lg "
          />

          <div className="py-4 text-">
            <div className="flex items-center space-x-2 mb-2">
              <span className="bg-[#F0F0F0] text-[#2B3834] text-xs px-2 py-1 rounded-full">
                {blog.category}
              </span>
              <span className="text-xs text-[#00100B]">{blog.readTime}</span>
            </div>
            <h3 className="text-2xl font-medium text-[#00100B] mt-4">
              {blog.title}
            </h3>
            <p className="text-sm text-[#00100B] mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <Link to="/" className="text-[#004741] text-sm mt-10 inline-block ">
              Read more &gt;
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
