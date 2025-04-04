import React from "react";
import { services } from "../../data/services";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ArrowLinkButton } from "../ArrowButtons";

const ServicesWeProvide = ({ title }) => {
  return (
    <div id="services" className="py-[4rem] wrapper">
      <h2 data-aos="fade-up" className="section-heading text-center">
        {title && title} Services We Provide
      </h2>
      <div data-aos="fade-up" className="mt-10 pb-5 grid md:grid-cols-2 gap-5">
        {services.map((item, i) => (
          <Link
            key={item.title}
            to={`/services/${item.title}`}
            className={`group h-full group overflow-hidden space-y-6 bg-primary/80 hover:bg-primary/20 p-5 rounded-xl transition-all duration-300 `}
          >
            {/* ${
              i === 2 ? "md:order-3 md:col-span-2 md:w-1/2 md:mx-auto" : ""
            } */}
            <div className="grid sm:grid-cols-[70%_auto] h-full items-center gap-4">
              <div className="h-full flex flex-col gap-3 justify-between">
                <div className="space-y-3">
                  <p className="text-xl font-medium text-white group-hover:text-black">
                    {item.title}
                  </p>
                  <item.image className="object-contain max-h-[5rem] fill-current !text-white group-hover:text-black w-1/2 block sm:hidden" />
                  {/* <img
                    src={item.image}
                    className="object-contain w-1/2 block sm:hidden"
                    alt={item.title}
                  /> */}
                  <p className="text-white group-hover:text-black">
                    {item.shortDesc}
                  </p>
                </div>
                <div className="mt-2 flex gap-2 flex-wrap">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white text-sm py-2 px-3 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <item.image
                className={`w-20 h-20 sm:block hidden  fill-current !text-white group-hover:!text-black`}
              />

              {/* <img
                src={item.image}
                className="object-contain sm:block hidden"
                alt={item.title}
              /> */}
            </div>
            <Link
              to={`/services/${item.title}`}
              className="btn rounded lg:translate-y-[5rem] group-hover:translate-y-0 bg-white/40 hover:bg-white hover:shadow-transparent gap-2 w-fit"
            >
              Read More <ArrowRight className="w-5 h-5" />
            </Link>
          </Link>
        ))}
      </div>
      <ArrowLinkButton to="/contact">Request a quote</ArrowLinkButton>
    </div>
  );
};

export default ServicesWeProvide;
