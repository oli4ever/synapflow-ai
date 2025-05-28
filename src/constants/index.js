import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  x,
  SynapFlow,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [SynapFlow , SynapFlow , SynapFlow , SynapFlow, SynapFlow];

export const synapflowServices = [
  "Image Creation • From Imagination",
  "Transform Imagery • Elevate Detail",
  "Effortless Harmony • Flawless Connection",
];

export const synapflowServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice-Powered Interaction",
    text: "Seamlessly interact through natural speech patterns, allowing for effortless hands-free operation while maintaining rich functionality and contextual awareness.",
    date: "Launched May 2025",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Engagement Rewards",
    text: "Transform daily interactions into rewarding experiences through strategic game mechanics—earn recognition, track progress, and unlock new capabilities as you engage.",
    date: "Coming May 2025",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Interface Personalization",
    text: "Create your ideal digital companion by personalizing visual elements, conversation style, and response patterns—building a uniquely engaging experience that reflects your preferences.",
    date: "Deployed May 2025",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Ecosystem Connectivity",
    text: "Expand capabilities through seamless connections with external data sources—delivering real-time weather updates, breaking news, and contextually relevant information within conversations.",
    date: "Arriving May 2025",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Where Security Meets Efficiency: The Future of Smart Teamwork";

export const collabContent = [
  {
    id: "0",
    title: "Integrated Elegance • Simplified Workflow",
  },
  {
    id: "1",
    title: "Adaptive Intelligence • Effortless Execution",
  },
  {
    id: "2",
    title: "Defense in Depth: Security Without Compromise",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Conversational AI companion with personalized insights",
    price: "0",
    features: [
      "Responsive AI assistant that interprets your requests",
      "Tailored suggestions aligned with your unique preferences",
      "Full platform exploration with zero financial commitment",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Sophisticated AI dialogue, priority assistance, visual insights",
    price: "9.99",
    features: [
      "Sophisticated AI engine that processes nuanced inquiries",
      "Interactive data visualization of your dialogue history",
      "Expedited assistance for swift problem resolution",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Customized intelligence, deep analytics, dedicated expertise",
    price: null,
    features: [
      "Custom-engineered AI system aligned with your business language",
      "Strategic insights calibrated to your business objectives",
      "Seamless deployment across your entire organizational ecosystem",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "AI-Powered Insights, Instantly Yours",
    text: "Unlock a smarter way to find information. Our AI swiftly delivers the answers you seek, eliminating the hassle of multiple searches.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Unlock Smarter Days",
    text: "Experience the power of AI that truly understands you. Our natural language processing delivers accurate and relevant responses, seamlessly enhancing your daily interactions.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "AI, Always Within Reach",
    text: "Your intelligent companion, accessible on any device, wherever you are. Seamlessly connect and experience the convenience of AI at your fingertips.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Instant Insights, Effortless Discovery",
    text: "Get the answers you need in a flash. Skip the endless search and unlock instant insights, empowering you with knowledge without the hassle.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discord.com",
  },
  {
    id: "1",
    title: "X",
    iconUrl: x,
    url: "https://x.com",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "https://telegram.org/",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://web.facebook.com",
  },
];
