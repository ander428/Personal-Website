import React from "react";

const url = "www.joshuawanderson.com";

export const constants = {
  URL: url,
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
      id: "a",
      title: "Email",
      link: "ander428@mail.chapman.edu",
      icon: ""
    },
    {
      id: "b",
      title: "Github",
      link: "github.com/ander428",
      icon: ""
    },
    {
      id: "c",
      title: "LinkedIn",
      link: "linkedin.com/ander428",
      icon: ""
    }
  ],
  PORTFOLIO: {
    PERSONAL: [
      {
        name: "APA Formatter",
        image: "/imgs/portfolio/APA.png",
        link: "https://github.com/ander428/APA-Formatter",
        description:
          "APA Formatter is a desktop application similar to EasyBib.com that takes in information from a source and returns the bibliography " +
          "citation in the APA standard while requiring no internet connection. It is able to correctly cite eight common types of sources. I originally " +
          "started the project in C# but later created a Java version so it could be used on all platforms!"
      },
      {
        name: "True Vine",
        image: "/imgs/portfolio/truevine1.png",
        link: "https://github.com/madden-man/TrueVine-Android",
        description:
          "TrueVine is an app designed to help members of collegiate organizations communicate! By combiningthe messaging functionality of " +
          "Rocket Chat with a calendar (and Google Calendar integration), students can more effectively plan events and talk to each other about plans" +
          " for the club as a whole. I parntered with a small team of people on this project with the goal of solving communication issues in our clubs on campus!"
      }
    ],
    SCHOOL: [
      {
        name: "Denver Crime",
        image: "/imgs/portfolio/DensityMap.png",
        link: "https://github.com/ander428/Denver-Crime",
        description:
          "This project used three machine learning algorithms, Hierarchical Agglomerative Clustering, DBSCAN, and a first order Markov model. " +
          "I was mainly responsible for implementing the Markov model and graphing data on a map. The model uses all 400,000 data points with the most previous crime " +
          "as a reference point to predict the next crime in a given neighborhood in the city of Denver."
      },
      {
        name: "Financial Manager",
        image: "/imgs/portfolio/DBFinal1.png",
        link: "https://github.com/karlhickel/Database-Final-Project",
        description:
          "This project is a website built using Django. It is a database of financial information in a table of transactions records and analytics " +
          "showing useful visualizations using Google's visualizations API. Using MySQL as a backend, this project connected to a Google Cloud account " +
          "provided by Chapman to store the database and performs a list of required queries (listed on the README)."
      },
      {
        name: "Prison Break",
        image: "/imgs/portfolio/prisonbreak.png",
        link: url + "/resources/PB_GDD.pdf",
        description:
          "Prison Break is a 2.5D, 3D designed Action Side-Scroller in which the player is attempting to break out of the Max Security Prison " +
          "they wound up in. Work to complete the obstacles in your way, while avoiding traps, enemies, and being detected by The Tower. The game was a group " +
          "project where where my main responsibility was creating 3D assets and split level design."
      }
    ]
  },
  ICONS: {
    info: <i className="fas fa-info-circle" />
  }
};
