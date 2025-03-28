import { CodeXml, NotebookPen, Rocket } from "lucide-react";
import logo from "../assets/logo/logo.jpg";

export { logo };

// company
export const companyDetails = {
  name: "AI Company",
  address:
    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non voluptatem vero aut earum molestias recusandae.",
  phone: "+0000000000",
  email: "abc@example.com",
};

// working process
export const workingProcess = [
  {
    step: 1,
    title: "Requirement Gathering & Analysis",
    description:
      "We collaborate closely with clients to thoroughly understand their business goals, challenges, and technical requirements. By conducting detailed consultations and feasibility studies, we ensure that the project objectives are clear and achievable. Our team documents all requirements to create a solid foundation for the development process.",
    icon: NotebookPen,
  },
  {
    step: 2,
    title: "Design & Development",
    description:
      "Utilizing cutting-edge technologies and industry best practices, our team designs intuitive and user-centric solutions. We specialize in blockchain, AI, app development, RPA, cloud computing, and web solutions. Each solution is tailored to meet the unique needs of our clients, ensuring seamless performance and scalability.",
    icon: CodeXml,
  },
  {
    step: 3,
    title: "Testing & Deployment",
    description:
      "Before deployment, we conduct rigorous testing to identify and resolve any issues. Our quality assurance team performs comprehensive functional, performance, and security testing. Upon successful validation, we proceed with deployment and offer continuous support to ensure smooth operations and long-term success.",
    icon: Rocket,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    image: require("../assets/images/landingpage/ecommerce.webp"),
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    image: require("../assets/images/landingpage/socialmedia.webp"),
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    image: require("../assets/images/landingpage/landing.webp"),
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    image: require("../assets/images/landingpage/customweb.webp"),
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    image: require("../assets/images/landingpage/ios.webp"),
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    image: require("../assets/images/landingpage/android.webp"),
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    image: require("../assets/images/landingpage/flutter.webp"),
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    image: require("../assets/images/landingpage/hybrid.webp"),
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// testimonials
export const testimonials = [
  {
    name: "Priya R.",
    position: "Operations Head, SmartChain Solutions",
    desc: `Working with JUOC Solutions LLP was a game-changer for our blockchain integration. Their team delivered a secure and efficient blockchain solution that streamlined our operations. The transparency and reliability of the system have significantly improved our business processes. Highly recommended!`,
    img: require("../assets/images/testimonials/1.jpg"),
  },
  {
    name: "Arjun M.",
    position: "Product Manager, FinTech Innovations",
    desc: `JUOC Solutions LLP’s AI and Machine Learning solutions transformed our data analytics capabilities. Their predictive models provided invaluable insights, helping us make data-driven decisions with confidence. Their team’s expertise and dedication made all the difference.`,
    img: require("../assets/images/testimonials/2.jpg"),
  },
  {
    name: "Meera S.",
    position: "Creative Director, GameSphere Studios",
    desc: `Our experience with JUOC Solutions LLP in game development was fantastic. They brought our vision to life with a captivating 3D game that exceeded our expectations. The user experience is immersive, and player feedback has been overwhelmingly positive.`,
    img: require("../assets/images/testimonials/3.jpg"),
  },
  {
    name: "Ravi K.",
    position: "CEO, AutomateTech Solutions",
    desc: `JUOC Solutions LLP’s RPA implementation automated our repetitive tasks, saving us time and reducing human error. The efficiency gains were noticeable almost immediately, and their support throughout the process was exceptional.`,
    img: require("../assets/images/testimonials/4.jpg"),
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("../assets/images/web_projects/1.webp"),
    title: "FE-Finance",
  },
  {
    id: 2,
    img: require("../assets/images/web_projects/2.webp"),
    title: "Ocxee",
  },
  {
    id: 3,
    img: require("../assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
  },
  {
    id: 4,
    img: require("../assets/images/web_projects/4.webp"),
    title: "Gigzio",
  },
  {
    id: 5,
    img: require("../assets/images/web_projects/5.webp"),
    title: "FE Group",
  },
  {
    id: 6,
    img: require("../assets/images/web_projects/6.webp"),
    title: "V Talkz",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("../assets/images/app_projects/1.webp"),
    title: "PartEx",
  },
  {
    id: 2,
    img: require("../assets/images/app_projects/2.webp"),
    title: "Find A Driver",
  },
  {
    id: 3,
    img: require("../assets/images/app_projects/3.webp"),
    title: "Artisan Express",
  },
  {
    id: 4,
    img: require("../assets/images/app_projects/4.webp"),
    title: "House of Deliverance",
  },
];
