export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tags: string[];
  image: string;
  link?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  date: string;
  role: string;
  logoText: string;
}

export interface ToolIconItem {
  id: string;
  name: string;
  bgColor: string;
  textColor: string;
  symbol: string;
  positionClass: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  content: string;
  featured?: boolean;
}

export const CAREER_STATS: StatItem[] = [
  { id: "stat-1", value: "3+", label: "Years in Graphics" },
  { id: "stat-2", value: "2+", label: "Years UI/UX" },
  { id: "stat-3", value: "40+", label: "UI/UX Project" },
  { id: "stat-4", value: "40+", label: "UI/UX Project" },
];

export const WORK_PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Nuro App",
    tags: ["Fitness", "Mobile"],
    image: "/nuro_app_project.png",
  },
  {
    id: "proj-2",
    title: "Echo Fintech",
    tags: ["Finance", "SaaS"],
    image: "/echo_fintech_project.png",
  },
  {
    id: "proj-3",
    title: "Global Forma",
    tags: ["Branding", "Web"],
    image: "/global_forma_project.png",
  },
  {
    id: "proj-4",
    title: "Luno AI",
    tags: ["UX Design", "SaaS"],
    image: "/luno_ai_project.png",
  },
];

export const CAREER_EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "Softvence Agency",
    date: "September 2025 - Present",
    role: "Executive UI/UX Designer",
    logoText: "softvence",
  },
  {
    id: "exp-2",
    company: "Air Speed Pvt Ltd",
    date: "December 2024 - August 2025",
    role: "Executive Graphics Designer",
    logoText: "airspeed",
  },
  {
    id: "exp-3",
    company: "TMT Soft Company",
    date: "February 2024 - January 2025",
    role: "Junior UI/UX Designer",
    logoText: "tmt",
  },
  {
    id: "exp-4",
    company: "DRM Electronic Limited",
    date: "May 2022 - Nov 2024",
    role: "Executive Graphics Designer",
    logoText: "drm",
  },
];

export const EDUCATION_QUALIFICATIONS: ExperienceItem[] = [
  {
    id: "edu-1",
    company: "Softvence Agency",
    date: "September 2025 - Present",
    role: "Executive UI/UX Designer",
    logoText: "softvence",
  },
  {
    id: "edu-2",
    company: "Air Speed Pvt Ltd",
    date: "December 2024 - August 2025",
    role: "Executive Graphics Designer",
    logoText: "airspeed",
  },
  {
    id: "edu-3",
    company: "TMT Soft Company",
    date: "February 2024 - January 2025",
    role: "Junior UI/UX Designer",
    logoText: "tmt",
  },
];

export const INTEGRATION_TOOLS: ToolIconItem[] = [
  {
    id: "tool-1",
    name: "Figma",
    bgColor: "bg-gray-900 border border-white/20",
    textColor: "text-amber-400",
    symbol: "🦋",
    positionClass: "top-8 left-6 md:left-20",
  },
  {
    id: "tool-2",
    name: "Twitter",
    bgColor: "bg-sky-500",
    textColor: "text-white",
    symbol: "🐦",
    positionClass: "top-24 left-20 md:left-44",
  },
  {
    id: "tool-3",
    name: "ActiveCampaign",
    bgColor: "bg-blue-600",
    textColor: "text-white font-black text-xl",
    symbol: "≫",
    positionClass: "bottom-10 left-8 md:left-28",
  },
  {
    id: "tool-4",
    name: "Zapier",
    bgColor: "bg-orange-600",
    textColor: "text-white font-black text-2xl",
    symbol: "*",
    positionClass: "top-10 left-1/3 -translate-x-1/2",
  },
  {
    id: "tool-5",
    name: "Stripe",
    bgColor: "bg-indigo-600",
    textColor: "text-white font-black text-2xl",
    symbol: "S",
    positionClass: "top-4 left-1/2 -translate-x-1/2",
  },
  {
    id: "tool-6",
    name: "Slack",
    bgColor: "bg-gray-950 border border-white/20",
    textColor: "text-emerald-400 font-bold",
    symbol: "✦",
    positionClass: "top-10 right-1/3 translate-x-1/2",
  },
  {
    id: "tool-7",
    name: "Instagram",
    bgColor: "bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600",
    textColor: "text-white",
    symbol: "📷",
    positionClass: "top-12 right-20 md:right-48",
  },
  {
    id: "tool-8",
    name: "Facebook",
    bgColor: "bg-blue-600",
    textColor: "text-white font-black text-2xl",
    symbol: "f",
    positionClass: "top-28 right-12 md:right-32",
  },
  {
    id: "tool-9",
    name: "YouTube",
    bgColor: "bg-red-600",
    textColor: "text-white font-black text-xl",
    symbol: "▶",
    positionClass: "bottom-12 right-8 md:right-24",
  },
  {
    id: "tool-10",
    name: "iA Writer",
    bgColor: "bg-white text-black",
    textColor: "text-black font-extrabold text-lg",
    symbol: "iA",
    positionClass: "top-8 right-6 md:right-16",
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Jeremy McPeak",
    handle: "@jwmcpeak",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    content:
      "Joining Julian's community completely unlocked my modular production. The spatial depth research papers alone saved me months of tedious mono-compatibility testing.",
  },
  {
    id: "test-2",
    name: "Fabrizio Rinaldi",
    handle: "@linuz90",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    content:
      "The sound libraries are premium grade. No filler or generic loops—just pure, raw, analog, inspiring textures. The live feedback clinics have completely elevated my sonic choices. Highly recommended!",
    featured: true,
  },
  {
    id: "test-3",
    name: "Jonathan Simcoe",
    handle: "@jdsimcoe",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    content:
      "Symphony bridges high-level acoustic theory and world audio craft. The research shared in the tier is incredibly rigorous, which is rare to find on producer platforms.",
  },
  {
    id: "test-4",
    name: "Alex Rose",
    handle: "@arose",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    content:
      "Here completely changed how I craft. The production templates alone are worth the membership — I've used them on three major releases already.",
  },
  {
    id: "test-5",
    name: "Ryan Delk",
    handle: "@delk",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
    content:
      "Being part of this community gave me access to insights I couldn't find anywhere else. The behind-the-scenes content is unbelievably detailed and real.",
    featured: true,
  },
  {
    id: "test-6",
    name: "Demetria Giles",
    handle: "@drosewritings",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    content:
      "I've learned more in three months with ARIA than in two years of browsing YouTube tutorials. The educational materials are genuinely world-class.",
  },
];
