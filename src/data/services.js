import { ReactComponent as Blockchain } from "../assets/images/services/svg/Blockchain.svg";
import { ReactComponent as GameDevelopment } from "../assets/images/services/svg/gamedevelopment.svg";
import { ReactComponent as AppDevelopment } from "../assets/images/services/svg/appdevelopment.svg";
import { ReactComponent as RPA } from "../assets/images/services/svg/rpa.svg";
import { ReactComponent as AI } from "../assets/images/services/svg/ai.svg";
import { ReactComponent as MachineLearning } from "../assets/images/services/svg/machinelearning.svg";
import { ReactComponent as CloudComputing } from "../assets/images/services/svg/ccs.svg";
import { ReactComponent as WebDevelopment } from "../assets/images/services/svg/Web Development.svg";
import { ReactComponent as DataScience } from "../assets/images/services/svg/datascience.svg";
import { ReactComponent as NLP } from "../assets/images/services/svg/nlp.svg";
import { ReactComponent as CloudMigration } from "../assets/images/services/svg/cloudmigration.svg";
import { ReactComponent as UIUX } from "../assets/images/services/svg/uiux.svg";
// all services
export const services = [
  {
    id: 1,
    title: "Blockchain Development",
    image: Blockchain,
    color: "#3F51B5", // Added color
    shortDesc:
      "Secure, transparent, and scalable blockchain solutions tailored to empower your business.",
    technologies: ["Ethereum", "Solidity", "Hyperledger", "Node.js", "React"],
    detailsPageImages: {
      first: require("../assets/images/services/blockchain1.webp"),
      second: require("../assets/images/services/blockchain2.webp"),
      third: require("../assets/images/services/blockchain3.webp"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">Unlock the Power of Blockchain Technology</h2>
            <p class="mb-10">
              At JUOC Solutions LLP, we empower your business with secure, transparent, and decentralized solutions. Our customized blockchain systems enhance security and operational efficiency, enabling cryptocurrency integration, smart contracts, and decentralized applications.
            </p>`,
      secondSection: `<h2 class="text-xl font-semibold mb-4">Our Blockchain Development Services:</h2>
            <ul class="list-disc pl-6">
              <li class="mb-3"><span class="font-semibold">Custom Blockchain Development:</span> Tailored solutions built to scale.</li>
              <li class="mb-3"><span class="font-semibold">Smart Contract Creation:</span> Secure, automated agreements.</li>
              <li class="mb-3"><span class="font-semibold">Blockchain Consulting & Strategy:</span> Expert guidance from industry specialists.</li>
              <li class="mb-3"><span class="font-semibold">Cryptocurrency & Token Development:</span> Launch and manage digital currencies.</li>
              <li class="mb-3"><span class="font-semibold">Decentralized Applications (dApps):</span> Leverage the full potential of blockchain.</li>
              <li class=""><span class="font-semibold">Seamless Integration:</span> Integrate with your existing systems effortlessly.</li>
            </ul>`,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">Why Choose Our Blockchain Solutions?</h2>
            <ul class="list-disc pl-6">
              <li class="mb-3"><span class="font-semibold">Enhanced Security & Transparency:</span> Robust systems built with industry best practices.</li>
              <li class="mb-3"><span class="font-semibold">Scalable & Reliable:</span> Designed to grow with your business.</li>
              <li class="mb-3"><span class="font-semibold">Tailored to Your Needs:</span> Custom solutions for unique business challenges.</li>
              <li class="mb-3"><span class="font-semibold">Expert Guidance:</span> Experienced professionals at your service.</li>
            </ul>`,
    },
  },
  {
    id: 2,
    title: "Game Development",
    image: GameDevelopment,
    color: "#FF5722", // Added color
    shortDesc:
      "Creating immersive, engaging, and dynamic gaming experiences for mobile, PC, and consoles.",
    technologies: ["Unity", "Unreal Engine", "C#", "Blender", "JavaScript"],
    detailsPageImages: {
      first: require("../assets/images/services/gamedevelopment1.webp"),
      second: require("../assets/images/services/gamedevelopment2.webp"),
      third: require("../assets/images/services/gamedevelopment3.webp"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">Transforming Your Vision into Immersive Gaming Experiences</h2>
            <p class="mb-10">
              Our game development team combines creativity with cutting-edge technology to turn your ideas into high-quality games that captivate players across platforms.
            </p>`,
      secondSection: `<h2 class="text-xl font-semibold mb-4">Our Game Development Services:</h2>
            <ul class="list-disc pl-6">
              <li class="mb-3"><span class="font-semibold">2D/3D Game Development:</span> Engaging designs for every platform.</li>
              <li class="mb-3"><span class="font-semibold">Game Design & Concept Creation:</span> Innovative ideas brought to life.</li>
              <li class="mb-3"><span class="font-semibold">Cross-Platform Solutions:</span> Games that run seamlessly on mobile, PC, and consoles.</li>
              <li class="mb-3"><span class="font-semibold">AR/VR Game Development:</span> Immersive experiences using the latest tech.</li>
              <li class="mb-3"><span class="font-semibold">Game Monetization & Marketing:</span> Strategies to maximize your revenue.</li>
              <li class=""><span class="font-semibold">Post-launch Support:</span> Continuous updates and maintenance.</li>
            </ul>`,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">Why Partner with Us for Game Development?</h2>
            <ul class="list-disc pl-6">
              <li class="mb-3"><span class="font-semibold">Innovative Game Design:</span> Creative concepts that stand out.</li>
              <li class="mb-3"><span class="font-semibold">Cutting-Edge Technology:</span> Utilizing the latest tools and engines.</li>
              <li class="mb-3"><span class="font-semibold">Immersive Experiences:</span> Games that captivate and engage players.</li>
              <li class="mb-3"><span class="font-semibold">End-to-End Support:</span> From concept to post-launch updates.</li>
            </ul>`,
    },
  },
  {
    id: 3,
    title: "App Development",
    image: AppDevelopment,
    color: "#4CAF50", // Added color
    shortDesc:
      "Developing intuitive and powerful mobile apps for iOS, Android, and cross-platform solutions.",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin"],
    detailsPageImages: {
      first: require("../assets/images/services/appdevelopment1.webp"),
      second: require("../assets/images/services/appdevelopment2.webp"),
      third: require("../assets/images/services/appdevelopment3.webp"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">Empowering Your Business with Robust Mobile Solutions</h2>
            <p class="mb-10">
              In today's mobile-driven world, our expert team develops user-friendly mobile apps that seamlessly integrate with your business goals.
            </p>`,
      secondSection: `<h2 class="text-xl font-semibold mb-4">Our App Development Services:</h2>
            <ul class="list-disc pl-6">
              <li class="mb-3"><span class="font-semibold">Native App Development:</span> Custom solutions for iOS and Android.</li>
              <li class="mb-3"><span class="font-semibold">Cross-Platform Solutions:</span> Using React Native and Flutter for unified experiences.</li>
              <li class="mb-3"><span class="font-semibold">UI/UX Design:</span> Crafting intuitive and engaging interfaces.</li>
              <li class="mb-3"><span class="font-semibold">Backend Integration & API Development:</span> Ensuring seamless connectivity.</li>
              <li class="mb-3"><span class="font-semibold">Quality Assurance:</span> Rigorous testing for optimal performance.</li>
              <li class=""><span class="font-semibold">Ongoing Support:</span> Continuous updates and maintenance.</li>
            </ul>`,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">Benefits of Our App Development:</h2>
            <ul class="list-disc pl-6">
              <li class="mb-3"><span class="font-semibold">Seamless User Experience:</span> Apps that are intuitive and engaging.</li>
              <li class="mb-3"><span class="font-semibold">High Performance:</span> Optimized for speed and reliability.</li>
              <li class="mb-3"><span class="font-semibold">Customized Solutions:</span> Tailored to meet your specific business needs.</li>
              <li class="mb-3"><span class="font-semibold">End-to-End Support:</span> From strategy to launch and beyond.</li>
            </ul>`,
    },
  },
  {
    id: 4,
    title: "Robotic Process Automation (RPA)",
    image: RPA,
    color: "#673AB7", // Added color
    shortDesc:
      "Automating repetitive tasks to boost efficiency and reduce errors through tailored RPA solutions.",
    technologies: [
      "UiPath",
      "Automation Anywhere",
      "Blue Prism",
      "Pega",
      "Power Automate",
    ],
    detailsPageImages: {
      first: require("../assets/images/services/rpa1.webp"),
      second: require("../assets/images/services/rpa2.webp"),
      third: require("../assets/images/services/rpa3.webp"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">Streamline Your Operations with Intelligent Automation</h2>
            <p class="mb-10">
              Our RPA solutions automate repetitive tasks, freeing up valuable resources while enhancing overall efficiency.
            </p>`,
      secondSection: `<h2 class="text-xl font-semibold mb-4">Our RPA Services:</h2>
            <ul class="list-disc pl-6">
              <li class="mb-3"><span class="font-semibold">Process Assessment & Strategy:</span> Identifying automation opportunities.</li>
              <li class="mb-3"><span class="font-semibold">End-to-End RPA Implementation:</span> From planning to deployment.</li>
              <li class="mb-3"><span class="font-semibold">Bot Development & Integration:</span> Seamless automation integration.</li>
              <li class="mb-3"><span class="font-semibold">Ongoing Support & Monitoring:</span> Ensuring optimal performance.</li>
              <li class=""><span class="font-semibold">Performance Analytics:</span> Data-driven insights to optimize processes.</li>
            </ul>`,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">Why Choose Our RPA Solutions?</h2>
            <ul class="list-disc pl-6">
              <li class="mb-3"><span class="font-semibold">Boost Efficiency:</span> Automate processes to save time and resources.</li>
              <li class="mb-3"><span class="font-semibold">Reduce Errors:</span> Minimize manual mistakes through automation.</li>
              <li class="mb-3"><span class="font-semibold">Cost-Effective:</span> Lower operational costs with streamlined processes.</li>
              <li class="mb-3"><span class="font-semibold">Tailored Integration:</span> Customized to fit your unique business workflows.</li>
            </ul>`,
    },
  },
  {
    id: 5,
    title: "Artificial Intelligence Development",
    image: AI,
    color: "#2196F3", // Added color
    shortDesc:
      "Integrating intelligent AI solutions to transform decision-making and enhance customer engagement.",
    technologies: ["TensorFlow", "PyTorch", "Keras", "scikit-learn", "OpenCV"],
    detailsPageImages: {
      first: require("../assets/images/services/aidevelopment1.webp"),
      second: require("../assets/images/services/aidevelopment2.webp"),
      third: require("../assets/images/services/aidevelopment3.webp"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">Harness the Power of Artificial Intelligence</h2>
            <p class="mb-10">
              We design custom AI solutions—from chatbots to advanced predictive models—that transform your operations and improve customer experiences.
            </p>`,
      secondSection: `<h2 class="text-xl font-semibold mb-4">Our AI Development Services:</h2>
            <ul class="list-disc pl-6">
              <li class="mb-3"><span class="font-semibold">Custom AI System Development:</span> Tailored solutions to automate and optimize.</li>
              <li class="mb-3"><span class="font-semibold">AI-Powered Chatbots & Virtual Assistants:</span> Enhance customer interactions.</li>
              <li class="mb-3"><span class="font-semibold">Natural Language Processing:</span> Intelligent text and speech solutions.</li>
              <li class="mb-3"><span class="font-semibold">Computer Vision & Image Recognition:</span> Advanced visual data processing.</li>
              <li class="mb-3"><span class="font-semibold">Predictive Analytics & Forecasting:</span> Data-driven insights for smarter decisions.</li>
            </ul>`,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">Why Choose Our AI Solutions?</h2>
            <ul class="list-disc pl-6">
              <li class="mb-3"><span class="font-semibold">Tailored to Your Needs:</span> Custom-built to address your specific challenges.</li>
              <li class="mb-3"><span class="font-semibold">Enhanced Decision-Making:</span> Leverage data for smarter strategies.</li>
              <li class="mb-3"><span class="font-semibold">Improved Customer Engagement:</span> Build intelligent, responsive systems.</li>
              <li class="mb-3"><span class="font-semibold">Scalable & Innovative:</span> Future-proof AI solutions for growth.</li>
            </ul>`,
    },
  },
  {
    id: 6,
    title: "Machine Learning Services",
    image: MachineLearning,
    color: "#9C27B0", // Added color
    shortDesc:
      "Leveraging advanced machine learning models to unlock actionable insights from your data.",
    technologies: ["Python", "scikit-learn", "TensorFlow", "PyTorch", "Keras"],
    detailsPageImages: {
      first: require("../assets/images/services/machinelearning1.webp"),
      second: require("../assets/images/services/machinelearning2.webp"),
      third: require("../assets/images/services/machinelearning3.webp"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">Unlock the Potential of Your Data with Machine Learning</h2>
            <p class="mb-10">
              Our experts build sophisticated machine learning models that empower your business to make data-driven decisions.
            </p>`,
      secondSection: `<h2 class="text-xl font-semibold mb-4">Our Machine Learning Services:</h2>
            <ul class="list-disc pl-6">
              <li class="mb-3"><span class="font-semibold">Supervised & Unsupervised Learning:</span> Models tailored to your data.</li>
              <li class="mb-3"><span class="font-semibold">Deep Learning & Neural Networks:</span> Harnessing advanced algorithms for complex challenges.</li>
              <li class="mb-3"><span class="font-semibold">Predictive Modeling & Forecasting:</span> Anticipate trends with precision.</li>
              <li class="mb-3"><span class="font-semibold">Anomaly Detection Systems:</span> Identify irregularities to safeguard operations.</li>
              <li class="mb-3"><span class="font-semibold">Model Evaluation & Optimization:</span> Ensure optimal performance.</li>
            </ul>`,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">Advantages of Our Machine Learning Solutions:</h2>
            <ul class="list-disc pl-6">
              <li class="mb-3"><span class="font-semibold">Data-Driven Insights:</span> Transform raw data into strategic assets.</li>
              <li class="mb-3"><span class="font-semibold">Customized Models:</span> Tailored to your unique business challenges.</li>
              <li class="mb-3"><span class="font-semibold">Enhanced Forecasting Accuracy:</span> Make informed decisions with confidence.</li>
              <li class="mb-3"><span class="font-semibold">Scalable Solutions:</span> Grow seamlessly with your business.</li>
            </ul>`,
    },
  },
  {
    id: 7,
    title: "Cloud Computing Services",
    image: CloudComputing,
    color: "#194458", // Added color
    shortDesc:
      "Scalable, secure, and cost-effective cloud solutions designed to power your business growth.",
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
    detailsPageImages: {
      first: require("../assets/images/services/cloudcomputing1.webp"),
      second: require("../assets/images/services/cloudcomputing2.webp"),
      third: require("../assets/images/services/cloudcomputing3.webp"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">Empowering Your Business with Scalable Cloud Solutions</h2>
            <p class="mb-10">
              Our cloud computing services offer a secure, flexible, and cost-effective infrastructure so you can operate seamlessly from anywhere.
            </p>`,
      secondSection: `<h2 class="text-xl font-semibold mb-4">Our Cloud Computing Services:</h2>
            <ul class="list-disc pl-6">
              <li class="mb-3"><span class="font-semibold">Cloud Strategy & Consultation:</span> Customized cloud roadmaps for your business.</li>
              <li class="mb-3"><span class="font-semibold">Cloud Migration & Integration:</span> Smooth transition to the cloud.</li>
              <li class="mb-3"><span class="font-semibold">Infrastructure Management:</span> 24/7 monitoring and management.</li>
              <li class="mb-3"><span class="font-semibold">Cloud Security & Compliance:</span> Ensuring robust protection and adherence to standards.</li>
              <li class="mb-3"><span class="font-semibold">Disaster Recovery & Backup:</span> Safeguard your critical data.</li>
            </ul>`,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">Why Opt for Our Cloud Solutions?</h2>
            <ul class="list-disc pl-6">
              <li class="mb-3"><span class="font-semibold">Scalability & Flexibility:</span> Grow your business without limits.</li>
              <li class="mb-3"><span class="font-semibold">Cost-Effective:</span> Optimize your infrastructure expenses.</li>
              <li class="mb-3"><span class="font-semibold">Robust Security:</span> Protect your data with state-of-the-art measures.</li>
              <li class="mb-3"><span class="font-semibold">Expert Support:</span> Continuous management and assistance.</li>
            </ul>`,
    },
  },
  {
    id: 8,
    title: "Web Development",
    image: WebDevelopment,
    color: "#E91E63", // Added color
    shortDesc:
      "Building responsive, scalable, and modern websites tailored to your business needs.",
    technologies: ["React", "Angular", "Node", "Express", "MongoDB"],
    detailsPageImages: {
      first: require("../assets/images/services/webdevelopment1.webp"),
      second: require("../assets/images/services/webdevelopment2.webp"),
      third: require("../assets/images/services/webdevelopment3.webp"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">
              Create a Strong Online Presence with Our Tailored Web Solutions
            </h2>
            <p class="mb-10">
              In today's digital era, your website serves as the cornerstone of
              your online presence. It's more than just a digital storefront –
              it's your brand's first impression, your sales engine, and a
              platform to engage and inform your audience. At
              <span class="font-semibold">JUOC Solutions LLP</span>, we specialize
              in creating visually appealing, high-performing, and secure websites
              that deliver an exceptional user experience while aligning with your
              business goals.
            </p>`,
      secondSection: `<h2 class="text-xl font-semibold mb-4">
                  Our Development Process:
                </h2>
                <ul class="list-decimal pl-6 mb-6">
                  <li class="mb-3">
                    <span class="font-semibold">Discovery & Strategy:</span> We
                    begin by understanding your goals, target audience, and unique
                    requirements. Through in-depth research, we craft a
                    comprehensive strategy to guide the development process.
                  </li>
                  <li class="mb-3">
                    <span class="font-semibold">Design & Prototyping:</span> Our
                    designers create visually appealing prototypes and wireframes
                    that bring your vision to life. Every element is designed with
                    your brand identity and user experience in mind.
                  </li>
                  <li class="mb-3">
                    <span class="font-semibold">Development:</span> Using the
                    latest technologies and best practices, our developers turn
                    the designs into a fully functional website, ensuring seamless
                    performance and security.
                  </li>
                  <li class="mb-3">
                    <span class="font-semibold">
                      Testing & Quality Assurance:
                    </span>
                    We rigorously test your website across devices, browsers, and
                    operating systems to guarantee a flawless user experience.
                  </li>
                  <li class="mb-3">
                    <span class="font-semibold">Launch & Optimization:</span> Once
                    approved, your website goes live! We also provide post-launch
                    support and continuous optimization to ensure ongoing success.
                  </li>
                </ul>`,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">Why Choose Us?</h2>
                <ul class="list-disc pl-6 mb-6">
                  <li class="mb-3">
                    <span class="font-semibold">
                      Expertise Across Industries:
                    </span>
                    With experience spanning various domains, we understand what
                    it takes to create impactful websites tailored to diverse
                    audiences.
                  </li>
                  <li class="mb-3">
                    <span class="font-semibold">SEO-Friendly Development:</span>
                    Our websites are built with SEO best practices in mind,
                    ensuring better search engine rankings and increased organic
                    traffic.
                  </li>
                  <li class="mb-3">
                    <span class="font-semibold">Scalable Solutions:</span> Whether
                    you're a startup or an enterprise, our websites are designed
                    to grow with your business.
                  </li>
                  <li class="mb-3">
                    <span class="font-semibold">Cutting-Edge Technology:</span> We
                    use modern frameworks and technologies, such as React,
                    Angular, Node.js, and Laravel, to deliver robust solutions.
                  </li>
                  <li class="mb-3">
                    <span class="font-semibold">User-Centric Approach:</span> Your
                    users are at the center of everything we do. We design and
                    develop with their needs in mind, ensuring an intuitive and
                    engaging experience.
                  </li>
                </ul>`,
    },
  },
  {
    id: 9,
    title: "Data Science Services",
    image: DataScience,
    color: "#00BCD4", // Added color
    shortDesc:
      "Unlocking valuable insights from your data through advanced analytics and visualization techniques.",
    technologies: ["Python", "R", "SQL", "Pandas", "Tableau"],
    detailsPageImages: {
      first: require("../assets/images/services/datascience1.webp"),
      second: require("../assets/images/services/datascience2.webp"),
      third: require("../assets/images/services/datascience3.webp"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">Transform Your Data into Strategic Insights</h2>
            <p class="mb-10">
              Our data science experts help you turn raw data into actionable insights, driving informed decision-making and business growth.
            </p>`,
      secondSection: `<h2 class="text-xl font-semibold mb-4">Our Data Science Services:</h2>
            <ul class="list-disc pl-6">
              <li class="mb-3"><span class="font-semibold">Data Collection & Cleaning:</span> Prepare your data for analysis.</li>
              <li class="mb-3"><span class="font-semibold">Data Analytics & Visualization:</span> Uncover patterns and trends.</li>
              <li class="mb-3"><span class="font-semibold">Predictive Modeling & Forecasting:</span> Anticipate future trends with precision.</li>
              <li class="mb-3"><span class="font-semibold">Big Data Solutions:</span> Manage and analyze large datasets effectively.</li>
              <li class="mb-3"><span class="font-semibold">Business Intelligence Reporting:</span> Data-driven insights for smarter decisions.</li>
            </ul>`,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">Benefits of Our Data Science Solutions:</h2>
            <ul class="list-disc pl-6">
              <li class="mb-3"><span class="font-semibold">Actionable Insights:</span> Turn data into strategic business assets.</li>
              <li class="mb-3"><span class="font-semibold">Enhanced Decision-Making:</span> Leverage data for a competitive edge.</li>
              <li class="mb-3"><span class="font-semibold">Customized Solutions:</span> Tailored analytics to meet your unique needs.</li>
              <li class="mb-3"><span class="font-semibold">Improved BI:</span> Integrate business intelligence seamlessly.</li>
            </ul>`,
    },
  },
  {
    id: 10,
    title: "Natural Language Processing (NLP)",
    image: NLP,
    color: "#8BC34A", // Added color
    shortDesc:
      "Developing intelligent NLP solutions to automate customer interactions and derive insights from text data.",
    technologies: ["NLTK", "spaCy", "BERT", "GPT", "Transformers"],
    detailsPageImages: {
      first: require("../assets/images/services/nlp1.webp"),
      second: require("../assets/images/services/nlp2.webp"),
      third: require("../assets/images/services/nlp3.webp"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">Empower Your Business with Intelligent Language Solutions</h2>
            <p class="mb-10">
              Our NLP services enable machines to understand and process human language, driving automation and enhanced customer engagement.
            </p>`,
      secondSection: `<h2 class="text-xl font-semibold mb-4">Our NLP Services:</h2>
            <ul class="list-disc pl-6">
              <li class="mb-3"><span class="font-semibold">Sentiment Analysis & Opinion Mining:</span> Gauge customer sentiment effectively.</li>
              <li class="mb-3"><span class="font-semibold">Text Classification & Clustering:</span> Organize and analyze unstructured data.</li>
              <li class="mb-3"><span class="font-semibold">Speech Recognition Systems:</span> Convert speech to text with high accuracy.</li>
              <li class="mb-3"><span class="font-semibold">Chatbots & Virtual Assistants:</span> Automate customer interactions seamlessly.</li>
              <li class="mb-3"><span class="font-semibold">Named Entity Recognition (NER):</span> Extract valuable information from text.</li>
            </ul>`,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">Why Choose Our NLP Solutions?</h2>
            <ul class="list-disc pl-6">
              <li class="mb-3"><span class="font-semibold">Enhanced Engagement:</span> Improve customer communication and support.</li>
              <li class="mb-3"><span class="font-semibold">Efficient Processing:</span> Automate analysis of large text datasets.</li>
              <li class="mb-3"><span class="font-semibold">Tailored to Your Needs:</span> Customized solutions for your business challenges.</li>
              <li class="mb-3"><span class="font-semibold">Scalable Technology:</span> Designed to grow with your data needs.</li>
            </ul>`,
    },
  },
  {
    id: 11,
    title: "Cloud Migration Services",
    image: CloudMigration,
    color: "#6b18ff", // Added color
    shortDesc:
      "End-to-end cloud migration services to ensure a smooth and secure transition for your business.",
    technologies: ["AWS", "Azure", "Google Cloud", "VMware", "Docker"],
    detailsPageImages: {
      first: require("../assets/images/services/cloudmigration1.webp"),
      second: require("../assets/images/services/cloudmigration2.webp"),
      third: require("../assets/images/services/cloudmigration3.webp"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">Seamless Transition to the Cloud</h2>
               <p class="mb-10">
                 We offer comprehensive cloud migration services, ensuring your data, applications, and systems are transitioned securely and efficiently.
               </p>`,
      secondSection: `<h2 class="text-xl font-semibold mb-4">Our Cloud Migration Services:</h2>
               <ul class="list-disc pl-6">
                 <li class="mb-3"><span class="font-semibold">Cloud Readiness Assessment & Strategy:</span> Evaluate and plan your migration journey.</li>
                 <li class="mb-3"><span class="font-semibold">Application & Data Migration:</span> Securely transfer your assets to the cloud.</li>
                 <li class="mb-3"><span class="font-semibold">Post-Migration Optimization & Support:</span> Ensure your systems are running at peak performance.</li>
                 <li class="mb-3"><span class="font-semibold">Multi-Cloud & Hybrid Solutions:</span> Flexible strategies to suit your needs.</li>
                 <li class="mb-3"><span class="font-semibold">Infrastructure Monitoring & Management:</span> Proactive management for uninterrupted service.</li>
               </ul>`,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">Advantages of Our Cloud Migration:</h2>
               <ul class="list-disc pl-6">
                 <li class="mb-3"><span class="font-semibold">Smooth Transition:</span> Minimal downtime and disruption.</li>
                 <li class="mb-3"><span class="font-semibold">Enhanced Performance:</span> Optimized cloud environments for efficiency.</li>
                 <li class="mb-3"><span class="font-semibold">Secure Migration:</span> Data integrity and security are our top priorities.</li>
                 <li class="mb-3"><span class="font-semibold">Expert Guidance:</span> Support throughout your migration journey.</li>
               </ul>`,
    },
  },
  {
    id: 12,
    title: "UI/UX Design",
    image: UIUX,
    color: "#607D8B", // Added color
    shortDesc:
      "Designing visually appealing and user-friendly interfaces that enhance engagement and drive results.",
    technologies: ["Sketch", "Adobe XD", "Figma", "InVision", "Zeplin"],
    detailsPageImages: {
      first: require("../assets/images/services/uiux1.webp"),
      second: require("../assets/images/services/uiux2.webp"),
      third: require("../assets/images/services/uiux3.webp"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">Crafting Exceptional Digital Experiences with User-Centric Design</h2>
               <p class="mb-10">
                 Our UI/UX team focuses on creating intuitive interfaces that not only look great but also offer an exceptional user experience.
               </p>`,
      secondSection: `<h2 class="text-xl font-semibold mb-4">Our UI/UX Design Services:</h2>
               <ul class="list-disc pl-6">
                 <li class="mb-3"><span class="font-semibold">User Research & Persona Development:</span> Understand your audience deeply.</li>
                 <li class="mb-3"><span class="font-semibold">Wireframing, Prototyping & Interaction Design:</span> Bring your vision to life.</li>
                 <li class="mb-3"><span class="font-semibold">Visual Design & Branding:</span> Create a memorable brand identity.</li>
                 <li class="mb-3"><span class="font-semibold">Usability Testing & Feedback Analysis:</span> Refine designs through continuous testing.</li>
                 <li class="mb-3"><span class="font-semibold">Mobile & Web UI/UX Design:</span> Consistent experiences across all platforms.</li>
               </ul>`,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">Why Choose Our UI/UX Services?</h2>
               <ul class="list-disc pl-6">
                 <li class="mb-3"><span class="font-semibold">Engaging Interfaces:</span> Designs that captivate your users.</li>
                 <li class="mb-3"><span class="font-semibold">Enhanced User Experience:</span> Intuitive, user-focused design strategies.</li>
                 <li class="mb-3"><span class="font-semibold">Tailored to Your Audience:</span> Customized solutions that reflect your brand.</li>
                 <li class="mb-3"><span class="font-semibold">Continuous Improvement:</span> Ongoing support and design iteration.</li>
               </ul>`,
    },
  },
];
