import React, { lazy, useContext, useRef, useState } from "react";
import banner from "../assets/images/contactus-banner.jpg";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import { companyDetails, serviceDescriptions } from "../data/constant";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { SpinnerContext } from "../components/SpinnerContext";
import ReCAPTCHA from "react-google-recaptcha";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { validateToken } from "../util/helper";

const MapComponent = lazy(() => import("../components/website/MapComponent"));

const ContactUs = () => {
  const [selectedService, setSelectedService] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);
  const [phoneValue, setPhoneValue] = useState();
  const recaptchaRef = useRef(null);

  const { setSpinner } = useContext(SpinnerContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
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
    if (!validatePhoneNumber(phoneValue)) {
      return;
    }
    setSpinner(true);
    const token = recaptchaRef.current.getValue();
    try {
      const res = await validateToken(token);
      const result = await res.json();
      if (result.data.success) {
        setCaptchaValue(true);
        toast.success("Verification successful!");
      } else {
        toast.error("Verification failed. Please try again.");
        setSpinner(false);
        return;
      }
    } catch (error) {
      toast.error("Verification failed. Please try again.");
      setSpinner(false);
      return;
    }

    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Phone: " + phoneValue + "\n\n";
    emailBody += "Service " + selectedService + "\n\n";
    emailBody += "Message:\n" + values.message;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      name: companyDetails.name,
      subject: values.subject || "Contact Form Submission - JUOC Solutions",
      body: emailBody,
    };

    await fetch(
      "https://send-mail-redirect-boostmysites.vercel.app/send-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    )
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("Email sent successfully");
          reset();
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

  const validatePhoneNumber = (phone) => {
    const digitsOnly = phone.replace(/\D/g, "");

    const formattedPhone = `+${digitsOnly}`;

    const phoneRegex = /^\+\d{10,17}$/;

    if (!phoneRegex.test(formattedPhone)) {
      toast.error(
        "Enter a valid phone number with country code (e.g., +91xxxxxxxxxx, 10–15 digits)."
      );
      return false;
    }

    return true;
  };

  return (
    <div className="pt-[4rem]">
      <img
        src={banner}
        className="w-full aspect-[5/3] md:aspect-[6/2] object-cover object-[30%_100%] md:object-top"
        alt="Contact Us Banner"
      />
      <div className="bg-gradient-to-r from-[#262731] to-[#757795]">
        <div className="wrapper py-[4rem]">
          <div
            data-aos="fade-up"
            className="grid sm:grid-cols-3 gap-7 text-white"
          >
            <div className="flex items-start sm:justify-center gap-3">
              <div className="w-[3.5rem] min-w-[3.5rem] flex items-center justify-center bg-gradient-to-r from-[#e5497c] to-[#495df3] rounded-full aspect-square">
                <MapPin className="text-white" size={25} />
              </div>
              <div className="space-y-2">
                <p className="font-semibold">Location</p>
                <p className="max-w-xs">{companyDetails.address}</p>
              </div>
            </div>
            <div className="flex items-start sm:justify-center gap-3">
              <div className="w-[3.5rem] min-w-[3.5rem] flex items-center justify-center bg-gradient-to-r from-[#e5497c] to-[#495df3] rounded-full aspect-square">
                <PhoneCall className="text-white" size={25} />
              </div>
              <div className="space-y-2">
                <p className="font-semibold">Phone Number</p>
                <Link to={`tel:${companyDetails.phone}`}>
                  {companyDetails.phone}
                </Link>
              </div>
            </div>
            <div className="flex items-start sm:justify-center gap-3">
              <div className="w-[3.5rem] min-w-[3.5rem] flex items-center justify-center bg-gradient-to-r from-[#e5497c] to-[#495df3] rounded-full aspect-square">
                <Mail className="text-white" size={25} />
              </div>
              <div className="space-y-2">
                <p className="font-semibold">Contact Support</p>
                <Link to={`mailto:${companyDetails.email}`}>
                  {companyDetails.email}
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-[4rem] text-white">
            <h2 data-aos="fade-up" className="section-heading">
              Let's Connect With Us!
            </h2>
            <p data-aos="fade-up" className="max-w-5xl mt-3">
              We’re excited to collaborate with you on your next big idea!
              Whether you need a cutting-edge website, a dynamic mobile app, or
              innovative blockchain solutions, our team is here to help. Let’s
              discuss your unique goals and create a strategy that drives real
              results. Reach out to us today and take the first step toward
              digital success!
            </p>
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              data-aos="fade-up"
              className="mt-10 p-5 sm:p-7 flex flex-col bg-gradient-to-r from-[#f9ece6] to-[#a4b5c5] rounded-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    className="placeholder:text-black/80 text-black p-3 bg-white outline-none w-full rounded-md"
                    placeholder="Full Name"
                    {...register("name", {
                      required: "Full name is required",
                      validate: (val) => {
                        if (val.trim() !== "") {
                          return true;
                        } else {
                          return "Full name is required";
                        }
                      },
                    })}
                  />
                  <small className="text-red-500">{errors.name?.message}</small>
                </div>
                <div>
                  <input
                    type="email"
                    className="placeholder:text-black/80 text-black p-3 bg-white outline-none w-full rounded-md"
                    placeholder="Email Address"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        message: "Entered email is invalid",
                      },
                    })}
                  />
                  <small className="text-red-500">
                    {errors.email?.message}
                  </small>
                </div>
                <div className="w-full">
                  {/* <PhoneInput
                    international
                    defaultCountry="IN"
                    value={phoneValue}
                    onChange={(value) => {
                      setPhoneValue(value);
                      setValue("phone", value);
                    }}
                    className="phone-input-custom2"
                    placeholder="Enter phone number"
                  /> */}
                  <PhoneInput
                    country={"in"}
                    value={phoneValue}
                    enableSearch={true}
                    onChange={(value) => {
                      setPhoneValue(value);
                      setValue("phone", value);
                    }}
                    className="phone-input-custom2"
                    placeholder="Enter phone number"
                  />
                  <small className="text-primary">
                    {errors.phone && "Valid phone number is required"}
                  </small>
                </div>
                {/* <div>
                  <input
                    type="tel"
                    className="placeholder:text-black/80 text-black p-3 bg-white outline-none w-full rounded-md"
                    placeholder="Phone Number"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^\+?[0-9]{10,15}$/,
                        message: "Entered phone number is invalid",
                      },
                    })}
                  />
                  <small className="text-red-500">
                    {errors.phone?.message}
                  </small>
                </div> */}
                {/* <div>
                  <input
                    type="text"
                    className="placeholder:text-black/80 text-black p-3 bg-white outline-none w-full rounded-md"
                    placeholder="Subject"
                    {...register("subject")}
                  />
                  <small className="text-red-500">
                    {errors.subject?.message}
                  </small>
                </div> */}
                {/* Services Dropdown */}
                <div className="bg-white rounded-md p-1   w-full ">
                  <select
                    className="placeholder:text-black text-black outline-none p-2 bg-transparent  w-full"
                    {...register("service")}
                    onChange={onServiceChange}
                  >
                    <option value="">Select a Service</option>
                    {Object.keys(serviceDescriptions).map((service) => (
                      <option
                        key={service}
                        value={service}
                        className="text-black"
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                  {selectedService && (
                    <div className="bg-black/60 p-3 mt-2 rounded-xl">
                      <small className="text-white mt-2 text-base">
                        <span className="font-semibold">
                          {selectedService}:{" "}
                        </span>
                        {serviceDescriptions[selectedService]}
                      </small>
                    </div>
                  )}
                </div>
                {/* <div className="md:col-span-2">
                  <textarea
                    className="placeholder:text-black/80 text-black p-3 bg-white outline-none w-full rounded-md"
                    placeholder="Message"
                    rows="5"
                    {...register("message")}
                  />
                  <small className="text-red-500">
                    {errors.message?.message}
                  </small>
                </div> */}
                {/* Google reCAPTCHA */}
                <div className="w-full flex md:flex-row flex-col justify-between md:col-span-2">
                  <div className="mt-4">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6Le7rwsrAAAAAGlbC7u0RziGOymN53Z1AsEjbeCw"
                      onChange={onCaptchaChange}
                    />
                  </div>
                  <button
                    disabled={isSubmitting}
                    className="btn rounded-full bg-white text-black hover:shadow-white/50 w-full sm:w-fit self-end mt-5"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <MapComponent />
    </div>
  );
};

export default ContactUs;
