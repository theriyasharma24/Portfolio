/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Riya Sharma",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Riya Sharma Portfolio",
    type: "website",
    url: "https://riya-sharma-portfolio.netlify.app/#/home",
  },
};

//Home Page
const greeting = {
  title: "Riya Sharma",
  logo_name: "Riya Sharma",
  nickname: "layman_brother",
  subTitle:
    "A passionate tech enthusiast trying to solve real world problems through technology.",
  resumeLink:
    "https://drive.google.com/file/d/1zXQFUV8vEHqKbNkJ56pwf6XfTxJQCzMX/view?usp=sharing",
  portfolio_repository: "https://github.com/theriyasharma24/Portfolio",
  githubProfile: "https://github.com/theriyasharma24",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/theriyasharma24",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/riya-sharma-19500a182/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:theriyasharma24@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/theriyasharma_/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Twitter",
    link: "https://twitter.com/theriyasharma_",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },

        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/theriyasharma24?hr_r=1",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/riyasharma24",
    },
    {
      siteName: "Leetcode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://leetcode.com/riyasharma24/",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@riya1212",
    },
    {
      siteName: "StackOverflow",
      iconifyClassname: "simple-icons:stackoverflow",
      style: {
        color: "#345234",
      },
      profileLink: "https://stackoverflow.com/users/15662612/riya-sharma",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Delhi",
      subtitle: "BSc (H) Computer Science",
      logo_path: "du.jpg",
      alt_name: "du",
      duration: "2020 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DSA, DAA, DBMS, OS, SE, CN etc.",
        "⚡ Apart from this, I have done courses in Full Stack Web Development and Machine Learning.",
        "⚡ I have secured Second Position in the University for Part 1 examination and received scholarship for the same from Indraprastha College for Women, University of Delhi.",
      ],
      website_link: "https://www.du.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "CSS",
      subtitle: "- Kaifi Khan",
      logo_path: "edyoda_logo.PNG",
      certificate_link:
        "https://www.udemy.com/certificate/UC-2a8eb701-b5e1-40ea-8238-54bb7e144fb6/",
      alt_name: "Edyoda Digital University",
      color_code: "#a6cbf4",
    },
    {
      title: "Git",
      subtitle: "-  Andrii Piatakha",
      logo_path: "git_logo.jpg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-66ad75a6-88f9-4359-812c-a89e7ec91cd6/",
      alt_name: "Learn IT University",
      color_code: "#f6ada2",
    },
    {
      title: "Fundamentals of IoT",
      subtitle: "- Harish Kumar Maheshwari",
      logo_path: "Iot_logo.jpg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-d91adff1-a7ae-48ce-abe2-f5cc15311383/",
      alt_name: "Iot",
      color_code: "#d777df",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Volunteership",
  description:
    "Currently, I am working to enhance my web and android development skills. I am also closely involved with the Core Team of Science Society of IPCW as the Department Representative.",
  header_image_path: "working.png",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Full Stack App Developer Intern",
          company: "Amygo Retail Pvt. Ltd.",
          company_url: "https://www.amygo.app/",
          logo_path: "amygologo.jpg",
          duration: "June 2022 - present",
          location: "Work From Home",
          description:
            "Amygo is a video-led commerce platform that is committed to transforming e-commerce in India through immersive videos, customer-centricity, a diverse category landscape and a world-class supply chain. I am independently creating new features for the react-native application of Amygo. I have also created APIs in Django/Python and NodeJS language for the Backend.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Core Team Member",
          company: "Ananta- the science society of IPCW",
          company_url:
            "https://sites.google.com/view/ananta-thesciencesociety/home?authuser=0",
          logo_path: "ananta.png",
          duration: "Aug 2021 - present",
          location: "New Delhi",
          description:
            "Ananta is an academic society that acts as a torch of discovery for budding young 'scientists' to quench their thirst for knowledge. My responsibility was to work as a representative of the Computer Science Department of IPCW. I ensured maximum participation and awareness among students regarding contests, webinars, and quizzes organised by the society. I also volunteered to create graphic posters and videos for the society. ",
          color: "#000000",
        },
        {
          title: "Student Volunteer",
          company: "Girl Up Now",
          company_url: "https://girlup.org/",
          logo_path: "girluplogo.png",
          duration: "Aug 2021 - present",
          location: "Work From Home",
          description:
            "Girl Up Now is an affiliation to Girl Up Campaign recognised by the United Nations Foundation. It works towards women empowerment and upliftment. I participated and promoted the workshops and webinars organized by the campaign. I also volunteered to create graphic posters for the campaign.  ",
          color: "#D83B01",
        },
        {
          title: "Student Volunteer",
          company: "Visonaries",
          company_url: "https://www.facebook.com/visionariesdu/",
          logo_path: "visionarieslogo.jpg",
          duration: "March 2021 - present",
          location: "Work From Home",
          description:
            "Visionaries is a student initiative which aims to help students who are visually impaired by providing them scribes and audiobooks. I record audiobooks in Hindi and English language. To help the visually impaired students, I have also made a python program that converts any PDF text into an audiobook in seconds.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. I try to explore new tools and tech by experimenting with them. My best experience is to create Data Science and Web Development projects.",
  avatar_image_path: "Projects_top.png",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Contactgirl.png",
    description:
      // "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
      "I am almost on all social media sites and mostly active on Linkedin. You can contact me anytime and I can help you with AI, React, and Android.",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "I like to share whatever I have learned through my blogs.",
    link: "https://medium.com/@theriyasharma24",
    avatar_image_path: "blogs_image.png",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8320758513",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
