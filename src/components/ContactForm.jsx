import React, { useContext, useState } from "react";
import img from "../assets/images/contact-form.webp";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { SpinnerContext } from "./SpinnerContext";
import { companyDetails, serviceDescriptions } from "../data/constant";
import ReCAPTCHA from "react-google-recaptcha";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ContactForm = ({ headline, id }) => {
  const { setSpinner } = useContext(SpinnerContext);
  const [selectedService, setSelectedService] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);
  const [phoneValue, setPhoneValue] = useState();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      countryCode: "",
    },
  });

  // handle form submit click
  const handleFormSubmit = async (values) => {
    if (!captchaValue) {
      toast.error("Please Accept the captch");
      return;
    }
    if (!phoneValue || !selectedService) {
      toast.error(
        "It seems you've forgotten to enter your phone number or select a service. Please provide the missing information."
      );
      return;
    }
    setSpinner(true);

    console.log(values, phoneValue, selectedService, "asdfasdfasfdsd");
    // return;
    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    values.company && (emailBody += "Company: " + values.company + "\n\n");
    emailBody += "Phone: " + phoneValue + "\n\n";
    emailBody += "Service " + selectedService + "\n\n";
    emailBody += "Message:\n" + values.message;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      subject: "Contact Form Submission - JUOC Solutions LLP",
      body: emailBody,
    };

    await fetch("https://smtp-api-tawny.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("Email sent successfully");
          reset();
          setPhoneValue(""); // Reset phone input
          navigate("/thank-you");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };

  const onServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  const onCaptchaChange = (value) => {
    console.log(value, "thisisvalue");
    setCaptchaValue(value);
  };

  return (
    <div
      id={id}
      className="wrapper rounded-2xl grid md:grid-cols-2 gap-3 py-[4rem]"
    >
      <div
        data-aos="fade-right"
        className="bg-purpleColor text-white p-8 sm:p-10 rounded-2xl"
      >
        <h3 className="section-heading">
          {headline ? headline : "Let's build something great together."}
        </h3>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="grid grid-cols-1 gap-4 mt-7"
        >
          <div className="grid lg:grid-cols-2 gap-5">
            <div className="">
              <input
                type="text"
                className="placeholder:text-white outline-none p-2 bg-transparent border-b w-full"
                placeholder="Full Name"
                {...register("name", {
                  required: "Full name is required",
                  validate: (val) => {
                    return val.trim() !== "" || "Full name is required";
                  },
                })}
              />
              <small className="text-primary">{errors.name?.message}</small>
            </div>
            <div className="">
              <input
                type="text"
                className="placeholder:text-white outline-none p-2 bg-transparent border-b w-full"
                placeholder="Company Name (Optional)"
                {...register("company")}
              />
            </div>
          </div>

          <div className="">
            <input
              type="email"
              className="placeholder:text-white outline-none p-2 bg-transparent border-b w-full"
              placeholder="Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Entered email is invalid",
                },
              })}
            />
            <small className="text-primary">{errors.email?.message}</small>
          </div>

          {/* Phone number with country code - Updated with react-phone-number-input */}
          <div className="">
            <PhoneInput
              international
              defaultCountry="IN"
              value={phoneValue}
              onChange={(value) => {
                setPhoneValue(value);
                setValue("phone", value);
              }}
              className="phone-input-custom"
              placeholder="Enter phone number"
            />
            <small className="text-primary">
              {errors.phone && "Valid phone number is required"}
            </small>
          </div>

          {/* Services Dropdown */}
          <div className="">
            <select
              className="placeholder:text-white outline-none p-2 bg-transparent border-b w-full"
              {...register("service")}
              onChange={onServiceChange}
            >
              <option value="">Select a Service</option>
              {Object.keys(serviceDescriptions).map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {selectedService && (
              <div className="bg-black/60 p-3 mt-2 rounded-xl">
                <small className="text-white mt-2 text-base">
                  <span className="font-semibold">{selectedService}: </span>
                  {serviceDescriptions[selectedService]}
                </small>
              </div>
            )}
          </div>

          <div className="">
            <textarea
              className="placeholder:text-white outline-none p-2 bg-transparent border-b w-full"
              placeholder="Message"
              {...register("message", {
                required: "Message is required",
                validate: (val) => {
                  return val.trim() !== "" || "Message is required";
                },
              })}
            />
            <small className="text-primary">{errors.message?.message}</small>
          </div>

          {/* Google reCAPTCHA */}
          <div className="mt-4">
            <ReCAPTCHA
              sitekey="6Lfo9gorAAAAACKIHEp0rGMxKQR8EOvcEBzRUXSm"
              onChange={onCaptchaChange}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            <button
              disabled={isSubmitting}
              className="btn rounded bg-white text-black w-full hover:bg-primary hover:text-white hover:shadow-primary/20"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div
        data-aos="fade-up"
        className="bg-[#F7F7F9] rounded-2xl md:block hidden overflow-hidden"
      >
        <img src={img} alt="Contact" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default ContactForm;
