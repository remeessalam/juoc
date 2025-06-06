import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";

const Blogs = () => {
  return (
    <div className="pt-[10rem] pb-[4rem] bg-gradient-to-b from-secondary to-[#f5f5f5]">
      <div className="wrapper">
        <h1 data-aos="fade-up" className="section-heading text-center">
          Blogs
        </h1>
        <div className="max-w-5xl mx-auto mt-7 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {blogs.map((item, i) => (
            <div
              key={item}
              data-aos="fade-up"
              className="group space-y-2 p-5 rounded-xl border border-black/20"
            >
              <Link to={item.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.img}
                  alt={`blog-section-image${i}`}
                  loading="lazy"
                  className="group-hover:brightness-90 h-[15rem] max-h-[15rem] object-cover w-full rounded-xl transition-all duration-300"
                />
              </Link>
              <Link
                // to={`/blogs/${i + 1}`}
                to={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold line-clamp-2 group-hover:text-purpleColor transition-all duration-300"
              >
                {item.title}
              </Link>
              <p className="line-clamp-3">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
