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
  nickname: "Riya Sharma",
  subTitle:
    "A passionate tech enthusiast trying to solve real world problems through technology.",
  resumeLink:
    "https://drive.google.com/drive/folders/1dFv0u0EtEzv6PgMyVqQAssknTTkIwKay?usp=sharing",
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
    name: "Medium",
    link: "https://medium.com/@theriyasharma24",
    fontAwesomeIcon: "fa-medium", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "black", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/theriyasharma_/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/theriyasharma_",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
];

const skills = {
  data: [
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },

    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //   ],
    // },
    {
      title: "Full Stack Development",
      fileName: "Projects_top.png",
      skills: [
        "⚡Crafting dynamic, responsive front-ends with React and Angular",
        "⚡Designing seamless mobile experiences with React Native",
        "⚡Engineering robust back-end systems using Node.js, Express, .NET Core, and Django",
        "⚡Expertly managing and optimizing databases with SQL, SQLite, and MongoDB",
        "⚡Utilizing Azure DevOps to facilitate seamless deployments and adopt agile methodologies",
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
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "logos:angular-icon",
          style: {
            backgroundColor: "transparent",
            color: "#DD0031",
          },
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "logos:typescript-icon",
          style: {
            backgroundColor: "transparent",
            color: "#DD0031",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "logos:nodejs-icon", // Alternative icon from the 'logos' collection
          style: {
            color: "#68A063", // Node.js green color
          },
        },
        // {
        //   skillName: "NPM",
        //   fontAwesomeClassname: "simple-icons:npm",
        //   style: {
        //     color: "#CB3837",
        //   },
        // },
        {
          skillName: ".NET Core",
          fontAwesomeClassname: "logos:dotnet",
          style: {
            color: "#512BD4", // .NET Core purple color
            backgroundColor: "transparent", // Ensure the background is transparent
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
            color: "#239120", // C# green color
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "fa-solid:database",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "SQLite",
          fontAwesomeClassname: "vscode-icons:file-type-sqlite",
          style: {
            color: "#003B57",
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
          skillName: "Django",
          fontAwesomeClassname: "logos:django-icon",
          style: {
            color: "#092E20",
          },
        },
        {
          skillName: "Azure DevOps",
          fontAwesomeClassname: "simple-icons:azuredevops", // Azure DevOps icon from the 'logos' collection
          style: {
            color: "#0078D4", // Azure DevOps blue color
            backgroundColor: "transparent", // Ensure the background is transparent
            // Adjust the size as needed
          },
        },
      ],
    },
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "simple-icons:microsoftazure",
    //       style: {
    //         color: "#0089D6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "Kubernetes",
    //       fontAwesomeClassname: "simple-icons:kubernetes",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },

    {
      title: "Software Enhancements",
      fileName: "working.png",
      skills: [
        "⚡ Leveraging SonarCloud to maintain high standards in code quality and security",
        "⚡ Implementing robust testing suites with Cypress for reliable web application performance",
      ],
      softwareSkills: [
        // {
        //   skillName: "Adobe XD",
        //   fontAwesomeClassname: "simple-icons:adobexd",
        //   style: {
        //     color: "#FF2BC2",
        //   },
        // },
        {
          skillName: "SonarCloud",
          fontAwesomeClassname: "simple-icons:sonarcloud", // SonarCloud icon from the 'simple-icons' collection
          style: {
            color: "#4E9BCD", // SonarCloud blue color
            backgroundColor: "transparent", // Ensure the background is transparent
          },
        },
        {
          skillName: "Cypress",
          fontAwesomeClassname: "simple-icons:cypress", // Cypress icon from the 'simple-icons' collection
          style: {
            color: "#17202A", // Cypress dark color
            backgroundColor: "transparent", // Ensure the background is transparent
          },
        },

        // {
        //   skillName: "Figma",
        //   fontAwesomeClassname: "simple-icons:figma",
        //   style: {
        //     color: "#F24E1E",
        //   },
        // },
        // {
        //   skillName: "Adobe Illustrator",
        //   fontAwesomeClassname: "simple-icons:adobeillustrator",
        //   style: {
        //     color: "#FF7C00",
        //   },
        // },
        // {
        //   skillName: "Inkscape",
        //   fontAwesomeClassname: "simple-icons:inkscape",
        //   style: {
        //     color: "#000000",
        //   },
        // },
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
      duration: "2020 - 2023",
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
      title: "Microsoft Data Analyst Associate (DA-100) ",
      subtitle: "- Honeywell",
      logo_path: "honeywell.jfif",
      certificate_link:
        "https://drive.google.com/file/d/1dBWhxJuzxhOKSAQj8Toz2k8EohDRVqwe/view",
      alt_name: "honeywell",
      color_code: "#fe152b",
    },

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

    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  // subtitle: "Internship and Volunteership",
  description:
    "I am an experienced Full Stack Developer, having begun my career with an evolving e-commerce startup and currently working with a well-established company. My expertise includes React, React Native, Angular, .NET Core, SQL, MongoDB, Python, Django, Git, SonarCloud, Cypress, and Azure DevOps. Additionally, I actively contribute to various open-source communities.",
  header_image_path: "working.png",
  sections: [
    // {
    //   title: "Work",
    //   experiences: [
    //     {
    //       title: "Associate AI Engineer",
    //       company: "Legato Health Technology",
    //       company_url: "https://legatohealthtech.com/",
    //       logo_path: "legato_logo.png",
    //       duration: "June 2020 - PRESENT",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
    //       color: "#0879bf",
    //     },
    //     {
    //       title: "Android and ML Developer",
    //       company: "Muffito Incorporation",
    //       company_url: "https://www.linkedin.com/company/muffito-inc/about/",
    //       logo_path: "muffito_logo.png",
    //       duration: "May 2018 - Oct 2018",
    //       location: "Pune, Maharashtra",
    //       description:
    //         "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
    //       color: "#9b1578",
    //     },
    //     {
    //       title: "Android Developer",
    //       company: "FreeCopy Pvt. Ltd.",
    //       company_url: "https://www.linkedin.com/company/freecopy/about/",
    //       logo_path: "freecopy_logo.png",
    //       duration: "Nov 2017 - Dec 2017",
    //       location: "Ahmedabad, Gujarat",
    //       description:
    //         "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
    //       color: "#fc1f20",
    //     },
    //   ],
    // },
    {
      title: "Full Time Roles",
      experiences: [
        {
          title: "Junior Engineer, Technology",
          company: "Kline & Company",
          company_url: "https://klinegroup.com/",
          logo_path: "klinecompany-logo.svg",
          duration: "July 2023 - Present",
          location: "Gurugram, Haryana",
          description:
            "Kline is an advisory consultancy and market research firm, that elevates industry expertise with technology to deliver highly predictive and actionable data, insights, and specialist advice. I am currently working on designing, developing, and maintaining the web applications at Kline using Angular, React, SQL, .NET Core, Cypress, Sonarcloud, and Azure DevOps.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Full Stack App Developer Intern",
          company: "Amygo Retail Pvt. Ltd.",
          company_url: "https://www.amygo.app/",
          logo_path: "amygologo.jpg",
          duration: "June 2022 - March 2023",
          location: "New Delhi",
          description:
            "Amygo is a video-led e-commerce platform that is committed to transforming e-commerce in India through immersive videos, customer-centricity, a diverse category landscape and a world-class supply chain. I have independently created new features and worked on improving the android and web applications of Amygo. Tech used was React Native, React, Django/Python, NodeJs, ExpressJs, MongoDb, Jira, and Git.",
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
          duration: "Aug 2021 - September 2022",
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

        // {
        //   title: "Developer Students Club Member",
        //   company: "DSC IIITDM Kurnool",
        //   company_url:
        //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //   logo_path: "dsc_logo.png",
        //   duration: "Jan 2018 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. I try to explore new tools and tech by experimenting with them. My best experience is to create Web Development and Data Science projects.",
  avatar_image_path: "Projects_top.png",
};

const publicationsHeader = {
  title: "Publications",
  // description: "Here is a published research paper on which I have worked.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Contactgirl.png",
    description:
      // "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
      "I am available on the following sites and mostly active on Linkedin. You can contact me anytime and I can help you with Full Stack Web and Android Development.",
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
