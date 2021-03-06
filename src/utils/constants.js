const url = "www.joshuawanderson.com";

export const constants = {
  URL: url,
  HOME: {
    profile: "/imgs/grad.jpg"
  },
  MENU: [
    {
      id: "6dTjQLmaE2AprxRl",
      title: "Home",
      url: "/"
    },
    {
      id: "4JqBPKKRNbDHCvpc",
      title: "Portfolio",
      url: "/portfolio"
    },
    {
      id: "kF68xSAsUo5pjgU5",
      title: "Resume",
      url: "/resources/Resume.pdf"
    },
    {
      id: "kE28xSEsUo5pjgUl",
      title: "Contact",
      url: "/contact"
    }
  ],
  CONTACT: [
    {
      id: "b",
      name: "Github",
      text: "ander428",
      link: "https://www.github.com/ander428",
      icon: "fab fa-github-square fa-2x"
    },
    {
      id: "c",
      name: "LinkedIn",
      text: "ander428",
      link: "https://www.linkedin.com/in/ander428/",
      icon: "fab fa-linkedin fa-2x"
    },
    {
      id: "a",
      name: "Email",
      text: "ander428@mail.chapman.edu",
      link: "mailto:ander428@mail.chapman.edu",
      icon: "fas fa-envelope-square fa-2x"
    },
  ],
  PORTFOLIO: {
    PERSONAL: [
      {
        name: "COVID-19 Personal Research",
        image: "/imgs/portfolio/COVID-19.jpg",
        topic: "Data Science",
        dev: "Python/Jupyter Notebook",
        link: "https://ander428.github.io/JohnsHopkins_COVID-19/",
        description: 
        "I created a github pages site that is a compilation of my analysis on the Johns Hopkins COVID-19 database. " +
        "30 different variables were used to observe relating to the pandemic in both the US and as well as some internationally. " +
        "Technologies such as Jupyter Notebook, Github Pages, scikit-learn, and Bokeh were used. All data sources are well citeed." +
        "Currently this project consists of descriptive analytics along with documentation. I plan on adding predictive/causal " +
        "analytics in the future."
      },
      {
        name: "This website",
        image: "/imgs/portfolio/PW.jpeg",
        topic: "Web Development",
        dev: "React.js",
        link:
          "https://github.com/ander428/Personal-Website/tree/master/",
        description:
          "This website is made from scratch as a React.js project that replaces my old HTML/CSS site. It uses technologies " +
          "such as 'Hooks', React-Router and Material-UI on React v16. I was inspired to take on this task to improve " +
          "my web development skills and better learn React.js"
      },
      {
        name: "APA Formatter",
        image: "/imgs/portfolio/APA.png",
        topic: "Windows Forms",
        dev: "C#.NET / Java",
        link: "https://github.com/ander428/APA-Formatter",
        description:
          "APA Formatter is a desktop application similar to EasyBib.com that takes in information from a source and returns the bibliography " +
          "citation in the APA standard while requiring no internet connection. It is able to correctly cite eight common types of sources. I originally " +
          "started the project in C# but later created a Java version so it could be used on all platforms!"
      },
      {
        name: "True Vine",
        image: "/imgs/portfolio/truevine1.png",
        topic: "Mobile Development",
        dev: "Java/Android",
        link: "https://github.com/madden-man/TrueVine-Android",
        description:
          "TrueVine is a mobile app designed to help members of collegiate organizations communicate! By combining the messaging functionality of " +
          "Rocket Chat with a calendar (and Google Calendar integration), students can more effectively plan events and talk to each other about plans" +
          " for the club as a whole. I partnered with a small team of people on this project with the goal of solving communication issues in our clubs on campus!"
      }
    ],
    SCHOOL: [
      {
        name: "Denver Crime",
        image: "/imgs/portfolio/DensityMap.png",
        topic: "Data Science",
        dev: "Python",
        link: "https://github.com/ander428/Denver-Crime",
        description:
          "This project was my final project for my undergraduate machine learning course. The goal of this program is to predict crimes in Denver, CO " +
          "based on neighborhoods using three machine learning algorithms: HAC, DBSCAN, and a first order Markov model. " +
          "I was responsible for implementing the Markov model and graphing data on a map. The model uses all 400,000 data points with the most previous crime " +
          "as a point of reference."
      },
      {
        name: "Stanford MSA",
        image: "/imgs/portfolio/MSA.png",
        topic: "Data Science",
        dev: "R",
        link: "https://github.com/ander428/StanfordMSA",
        description:
          "An in depth analysis of mass shootings in America from 1966 to 2016, final project for my undergraduate statistical models course using the Stanford_MSA_Database. This project " +
          "uses the programming language R and implements three machine learning algorithms: ElasticNet, RandomForest, and K-Means Clustering to find significant " +
          "factors that affect the number of victims in a given mass shooting in America."
      },
      {
        name: "Financial Manager",
        image: "/imgs/portfolio/DBFinal1.png",
        topic: "Database Management",
        dev: "Python (Django) / Google Cloud",
        link: "https://github.com/karlhickel/Database-Final-Project",
        description:
          "This project is a website built using Django as a database of financial information in a table of transactions records and analytics " +
          "showing useful visualizations using Google's visualizations API. Using MySQL as a backend, this project connected to a Google Cloud account " +
          "provided by Chapman to store the database and performs a list of required queries (listed on the README).*NOTE: The google cloud database used " +
          "in this assignment has been cancelled and a different MySQL database must be used to run this project."
      },
      {
        name: "Prison Break",
        image: "/imgs/portfolio/prisonbreak.png",
        topic: "Game Development",
        dev: "Unreal 4",
        link: "/resources/PB_GDD.pdf",
        description:
          "Prison Break is a 2.5D, 3D designed Action Side-Scroller in which the player is attempting to break out of the Max Security Prison " +
          "they wound up in. Work to complete the obstacles in your way, while avoiding traps, enemies, and being detected by The Tower. The game was a group " +
          "project where where my main responsibility was creating 3D assets and split level design."
      }
    ]
  },
  GLOBAL_VARS: {
    windowSize: 1350
  }
};
