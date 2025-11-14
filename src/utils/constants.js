import React from "react";

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
      id: "kG18sdxsUo5pjgUldd",
      title: "Publications",
      url: "/publications"
    },
    {
      id: "kT38sasdfaUo5pjgUldd",
      title: "Teaching",
      url: "/teaching"
    },
    {
      id: "kF68xSAsUo5pjgU5",
      title: "CV",
      url: "/resources/JoshuaAndersonCV.pdf"
    },
    // {
    //   id: "kE28xSEsUo5pjgUl",
    //   title: "Contact",
    //   url: "/contact"
    // },
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
      text: "jwa45@pitt.edu",
      link: "mailto:jwa45@pitt.edu",
      icon: "fas fa-envelope-square fa-2x"
    },
  ],
  PORTFOLIO: {
    HIGHLIGHTS: [
      {
        name: "UTICalc: Clinical Risk Prediciton Fairness",
        image: "/imgs/portfolio/UTICalc.png",
        topic: "Current Research",
        dev: "Python/Jupyter Notebook",
        link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11141814/",
        description: 
        "Clinical predictive models that include race as a predictor have the potential to exacerbate disparities in healthcare." +
        " Such models can be respecified to exclude race or optimized to reduce racial bias. We investigated the impact of such respecifications" +
        " in a predictive model – UTICalc – which was designed to reduce catheterizations in young children with suspected urinary tract infections."
      },
      {
        name: "Master's Thesis",
        image: "/imgs/portfolio/CADS.png",
        topic: "Statistical Software",
        dev: "R",
        link: "https://linktr.ee/ander428",
        description: 
        "An R library named 'CausalModels' that provides an array of statistical models common in causal inference such as standardization, " +
        "IP weighting, propensity matching, outcome regression, and doubly-robust estimators. " + 
        "Estimates of the average treatment effects from each model are given with the standard error and" +
        "a 95% Wald confidence interval."
      },
      {
        name: "COVID-19 Exploritory Analysis",
        image: "/imgs/portfolio/COVID-19.jpg",
        topic: "Data Science",
        dev: "Python/Jupyter Notebook",
        link: "https://ander428.github.io/JohnsHopkins_COVID-19/",
        description: 
        "I created a github pages site that is a compilation of my analysis on the Johns Hopkins COVID-19 database. " +
        "30 different variables were used to observe relating to the pandemic in both the US and as well as some internationally. " +
        "Technologies such as Jupyter Notebook, Github Pages, scikit-learn, and Bokeh were used. All data sources are well citeed. " +
        "Currently this project consists of descriptive analytics along with documentation."
      }
    ],
    PERSONAL: [
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
        name: "APA Formatter",
        image: "/imgs/portfolio/APA.png",
        topic: "Windows Forms",
        dev: "C#.NET / Java",
        link: "https://github.com/ander428/APA-Formatter",
        description:
          "APA Formatter is a desktop application similar to EasyBib.com that takes in information from a source and returns the bibliography " +
          "citation in the APA standard while requiring no internet connection. It is able to correctly cite eight common types of sources. I originally " +
          "started the project in C# but later created a Java version so it could be used on all platforms!"
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
  PUBLICATIONS: [
    {
      cite: (<p>Anderson, J. W., & Visweswaran, S. (2025). Algorithmic individual fairness and healthcare: a scoping review. <i>JAMIA open, 8</i>(1), ooae149.</p>)
    },
    { 
      cite: (<p>Anderson, J. W., Shaikh, N., & Visweswaran, S. (2024). Measuring and reducing racial bias in a pediatric urinary tract infection model. 
        <i>AMIA Summits on Translational Science Proceedings</i>, 2024, 488.</p>)
    },
    {
      cite: (<p>Anderson, J. W., Rakovski, C. (2022). 
        An R package for parametric estimation of causal effects. <i>arXiv e-prints, arXiv-2212.</i></p>)
    },
    {
      cite: (<p>Anderson, J. W., Iñaki Alberro Encina, L., Karippacheril, T. G., Hersh, J., & Stringer, C. (2022). 
        A Topic Modeling Approach to Classifying Open Street Map Health Clinics and Schools in Sub-Saharan Africa. <i>arXiv e-prints, arXiv-2212.</i></p>)
    },
    {
      cite: (<p>Anderson, J.W. (2022) "<i>CausalModels</i>: An R Library for Estimating Causal Effects,"
        M. S. thesis, Chapman University, Orange, CA.  
        <a href={"https://doi.org/10.36837/chapman.000379"}> https://doi.org/10.36837/chapman.000379</a></p>)
    },
    ],
  AWARDS: [
    {
      paper: "Assessing Racial Bias in Clinical Prediction for Urinary Tract Infections",
      award: "Distinguished Poster Award nomination",
      publisher: "AMIA Annual Symposium 2023"
    },
    {
      paper: "Measuring and Reducing Racial Bias in a Pediatric Urinary Tract Infection Model",
      award: "Student Paper Award nomination",
      publisher: "AMIA Informatics Summit 2024"
    }
  ],
  TEACHING: {
    TA: [
      {
        university: "Chapman University",
        location: "Orange, CA",
        course: "Data Structures and Algorithms",
        terms: "Fall 2021, Spring 2022"
      },
      {
        university: "Chapman University",
        location: "Online",
        course: "Machine Learning for Managers",
        terms: "Fall 2020"
      },
      {
        university: "Chapman University",
        location: "Online",
        course: "Statistical Models for Business",
        terms: "Fall 2020"
      },
    ],
    TALK: [
      {
        university: "Chapman University",
        location: "Online",
        event: "Machine Learning for Managers",
        terms: "Fall 2025",
        topic: "Topics in Machine Learning: Algorithmic Fairness"
      },
      {
        university: "Chapman University",
        location: "Orange, CA",
        event: "High Performance Computing",
        terms: "Fall 2025",
        topic: "Topics in Machine Learning: Mechanistic Interpretability"
      },
      {
        university: "Chapman University",
        location: "Online",
        event: "Machine Learning for Managers",
        terms: "Spring 2025",
        topic: "Topics in Machine Learning: Algorithmic Fairness"
      },
      {
        university: "University of Pittsburgh",
        location: "Pittsburgh, PA",
        event: "ISP Forum",
        terms: "Spring 2023",
        topic: "Using the SHAP Method to Produce Explanations of Predictions in Clinical Alerting Systems"
      },
      {
        university: "Chapman University",
        location: "Orange, CA",
        event: "Intro to Data Science",
        terms: "Spring 2022",
        topic: "Topics in Data Science: Causal Inference"
      }
    ]
  },
  GLOBAL_VARS: {
    windowSize: 1350,
    updated: "4/2025"
  }

};
