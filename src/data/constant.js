import { CodeXml, NotebookPen, Rocket } from "lucide-react";
import logo from "../assets/logo/logo.jpg";
// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "../assets/web-development-portfolio/5ghomes.png";
import BayutImg from "../assets/web-development-portfolio/bayut.png";
import ColdCreekcapImg from "../assets/web-development-portfolio/cold creekcap.png";
import EmergencyMusicImg from "../assets/web-development-portfolio/emergency music .png";
import FlatiornImg from "../assets/web-development-portfolio/flatiorn.png";
import MavenImg from "../assets/web-development-portfolio/maven.png";
import MenissaCateringsImg from "../assets/web-development-portfolio/menissa caterings.png";
import MethodistImg from "../assets/web-development-portfolio/methodist.png";
import ThinkRealityImg from "../assets/web-development-portfolio/think reality.png";

// Import all images at the top (App Development)
import DubaiTravelGuideImg from "../assets/app-development-portfolio/dubai travel guide.png";
import EloraHairPalourImg from "../assets/app-development-portfolio/elora hair palour.png";
import EvansFrancisImg from "../assets/app-development-portfolio/evans francis.png";
import HouseOfDeliverenceImg from "../assets/app-development-portfolio/house of deliverence.png";
import MybitsShopImg from "../assets/app-development-portfolio/mybitsshop.png";
import NamazImg from "../assets/app-development-portfolio/namaz.png";
import PoteaImg from "../assets/app-development-portfolio/potea.png";
import RentopBikeAndCarImg from "../assets/app-development-portfolio/rentop bike and car.png";

export { logo };

// company
export const companyDetails = {
  name: "JUOC Solutions LLP",
  address:
    "UNIT 101 , OXFORD TOWERS , 139 HAL OLD AIRPORT RD, KODIHALLI BANGALORE, KARNATAKA INDIA , 560008",
  phone: "+91-8590971792",
  email: "juocsolutions@gmail.com",
  whatsapp:
    "https://api.whatsapp.com/send/?phone=918590971792&text=Hello%2C%20I%20want%20to%20inquire%20about%20the%20project.&type=phone_number&app_absent=0",
  instagram:
    "https://www.instagram.com/juoc_solutions_?igsh=MWg5dXhqdG1qaG02Zg==",
  linkedin:
    "https://www.linkedin.com/in/asif-rs-745121239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
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

export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: BayutImg,
    title: "Bayut",
    link: "https://www.bayut.com",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 4,
    img: EmergencyMusicImg,
    title: "Emergency Music",
    link: "https://www.figma.com/proto/GwlIMQuIuFevhOEp8moALy/emergence-music-distribuBon?page-id=6298%3A7215&type=design&node-id=6298-7776&viewport=407%2C314%2C0.11&t=QCtz7M4USn6gI1CG-1&scaling=min-zoom",
  },
  {
    id: 5,
    img: FlatiornImg,
    title: "Flatiorn",
    link: "",
  },
  {
    id: 6,
    img: MavenImg,
    title: "Maven",
    link: "",
  },
  {
    id: 7,
    img: MenissaCateringsImg,
    title: "Menissa Caterings",
    link: "https://messinascatering.com",
  },
  {
    id: 8,
    img: MethodistImg,
    title: "Methodist",
    link: "",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
];

export const appPortfolio = [
  {
    id: 1,
    img: DubaiTravelGuideImg,
    title: "Dubai Travel Guide",
    link: "https://play.google.com/store/apps/details?id=com.eBps.dubai.travel.guide&pcampaignid=web_share",
  },
  {
    id: 2,
    img: EloraHairPalourImg,
    title: "Elora Hair Palour",
    link: "https://play.google.com/store/apps/details?id=app.barbera.io&pcampaignid=web_share",
  },
  {
    id: 3,
    img: EvansFrancisImg,
    title: "Evans Francis",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.evansfrancis&pcampaignid=web_share",
  },
  {
    id: 4,
    img: HouseOfDeliverenceImg,
    title: "House of Deliverence",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.hod&pcampaignid=web_share",
  },
  {
    id: 5,
    img: MybitsShopImg,
    title: "Mybits Shop",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 6,
    img: NamazImg,
    title: "Namaz",
    link: "https://play.google.com/store/apps/details?id=com.iccbrossard.prayerBmes&pcampaignid=web_share",
  },
  {
    id: 7,
    img: PoteaImg,
    title: "Potea",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImg,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];

export const serviceDescriptions = {
  "Blockchain Development":
    "We offer blockchain development services to secure and decentralize your transactions.",
  "Game Development":
    "We create immersive and engaging game experiences for various platforms.",
  "App Development":
    "Our team develops scalable and user-friendly mobile applications.",
  "Robotic Process Automation (RPA)":
    "Streamline your processes with our intelligent automation solutions.",
  "Artificial Intelligence Development":
    "Innovative AI solutions designed to transform your business.",
  "Machine Learning Services":
    "Data-driven insights through advanced machine learning techniques.",
  "Cloud Computing Services":
    "Scalable and secure cloud services tailored to your needs.",
  "Web Development": "Modern web development to enhance your online presence.",
  "Data Science Services":
    "Unlock the power of your data with our data science expertise.",
  "Natural Language Processing (NLP)":
    "Transforming communication with state-of-the-art NLP solutions.",
  "Cloud Migration Services":
    "Seamlessly migrate your systems to the cloud with our expert guidance.",
  "UI/UX Design": "Designing intuitive and engaging user experiences.",
};
