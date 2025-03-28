import React, { lazy } from "react";
import bannerImg from "../assets/images/services-banner.webp";
import { ArrowLinkButton } from "../components/ArrowButtons";

const ContactForm = lazy(() => import("../components/ContactForm"));
const ServicesWeProvide = lazy(() => import("../components/website/ServicesWeProvide"));

const Services = () => {
  return (
    <>
      <section
        className="min-h-screen relative flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 h-full w-full">
          <div
            data-aos="fade-up"
            className="pt-[10rem] pb-[3rem] h-full wrapper text-white z-10 flex flex-col gap-3 justify-center items-center"
          >
            <h1 className="heading-2 max-w-5xl text-center">
              Transforming Your Vision into Cutting-Edge Software Solutions with
              Expertise and Innovation
            </h1>
            <p className="max-w-5xl text-center text-[1.1rem]">
              We specialize in delivering innovative software solutions that
              empower businesses to succeed in the digital age. Our team
              combines years of industry experience, a deep understanding of
              market trends, and unmatched technical proficiency to develop
              cutting-edge web platforms, mobile applications, UI/UX designs,
              blockchain solutions, and immersive games. Whether you're looking
              to build scalable web services, launch a mobile app, or explore
              emerging technologies, we have the expertise to bring your vision
              to life.
            </p>
            <ArrowLinkButton to="/contact">Contact Us</ArrowLinkButton>
          </div>
        </div>
      </section>
      <ServicesWeProvide />
      <ContactForm />
    </>
  );
};

export default Services;
