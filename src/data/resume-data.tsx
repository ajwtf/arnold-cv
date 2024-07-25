import { GitHubIcon, LinkedInIcon } from '@/components/icons';
import { MailIcon } from '@/components/icons/MailIcon';

export const RESUME_DATA = {
  websiteTitle: "aj",
  name: "aj southammavong",
  initials: "aj",
  location: "Oakland, CA, USA",
  locationLink: "https://www.google.com/maps/place/Oakland",
  about:
    "Analytical and data-driven Full Stack Engineer. Passion for building things that make people's lives easier.",
  summary:
    "As a Full Stack Engineer, I specialize in taking products from concept to launch. I excel in working with teams and creating environments where individuals perform at their best. Currently, I work mostly with Python, TypeScript, React, Node.js, and PostgreSQL.",
  avatarUrl:
    "https://github.com/ajwtf/arnold-cv/blob/main/src/app/glasses.gif?raw=true",
  websiteUrl: "https://arnold.rip",
  cvUrl:
    "https://drive.google.com/file/d/1YxssSR_6g5GyBPznG38MxSdjjLJiu0T2/view?usp=sharing",
  contact: {
    email: {
      emailAddress: "arnoldsouth@gmail.com",
      url: "mailto:arnoldsouth@gmail.com",
      icon: MailIcon,
    },
    // tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ajwtf",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/arnoldsouth/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Illinois at Chicago",
      degree: "Bachelors of Science in Accounting",
      // start: "",
      // end: "",
    },
  ],
  work: [
    {
      company: "Aronson Advertising",
      link: "https://www.aronsonads.com",
      badges: [],
      title: "Data and Web Analyst",
      start: "2023",
      end: null,
      description:
        "Analyzed and processed data from multiple sources to provide insights and recommendations to clients.",
    },
    {
      company: "Freelance Full Stack Developer",
      link: "https://arnold.rip",
      badges: [],
      title: "Full Stack Developer",
      start: "2021",
      end: null,
      description:
        "Analytical and data-driven Full Stack Engineer. Passion for building things that make people's lives easier.",
    },
    {
      company: "Curology",
      link: "https://curology.com/",
      badges: [],
      title: "Senior Accountant",
      start: "2019",
      end: "2021",
      description:
        "Created, implemented, and maintained initial cost accounting process to improve timeliness of monthend reporting and accurate financial reporting. Spearheaded NetSuite inventory implementation and migration to the new system from Quickbooks.",
    },
    {
      company: "Grant Thornton",
      link: "https://www.grantthornton.com/",
      badges: [],
      title: "Senior Audit Associate II",
      start: "2015",
      end: "2019",
      description:
        "Led multiple audit engagements for both public and private companies.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "PostgreSQL",
    "Python",
    "Django",
    "Google Analytics",
    "Google Tag Manager",
    "Google Ads",
  ],
  projects: [
    {
      title: "AI Budget Tracker",
      techStack: ["TypeScript", "React", "Node.js", "Express", "PostgreSQL"],
      description:
        "AI-powered budget tracking tool that helps users manage their finances.",
      link: {
        label: "https://github.com/ajwtf",
        href: "https://github.com/ajwtf",
      },
    },
  ],
} as const;
