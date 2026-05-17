import { create } from 'zustand';

export const useProjectStore = create((set) => ({
  projects: [
    {
      id: 1,
      name: 'Chat-App',
      github: 'https://github.com/vishnu2k5/chat-app.git',
      image: 'https://res.cloudinary.com/dtujitvpy/image/upload/v1760798218/Screenshot_2025-10-18_200627_v8yf7a.png',
      description:
        'A real-time chat application with secure authentication, online status tracking, and instant messaging using WebSockets. Built with Node.js, Express, MongoDB, and React for responsive communication. Deployed on Sevalla Cloud for production scalability.',
      
    },
    {
      id: 2,
      name: 'Trending Movie Search App',
      github: 'https://github.com/vishnu2k5/movie_search_page.git',
      image: 'https://res.cloudinary.com/dtujitvpy/image/upload/v1760798068/movie_search_page_kylldb.png',
      description:
        'A movie discovery platform powered by TMDb API with real-time search, genre filters, and responsive design. Built with React and TailwindCSS for a sleek, interactive experience.',
    },
    {
      id: 3,
      name: 'Blog Application',
      github: 'https://github.com/vishnu2k5/blog-application.git',
      image: 'https://res.cloudinary.com/dtujitvpy/image/upload/v1760798366/Screenshot_2025-10-18_200857_xo73yi.png',
      description:
        'A full-stack blog platform supporting user authentication and complete CRUD operations. Developed using Node.js, Express, MongoDB, and React. Deployed on Render Cloud with live hosting support.',
      live: 'https://blogit-rfxo.onrender.com/',
    },
    {
      id: 4,
      name: 'URL Shortener',
      github: 'https://github.com/vishnu2k5/urlshortener.git',
      image: 'https://res.cloudinary.com/dtujitvpy/image/upload/v1760798486/Screenshot_2025-10-18_201051_vq3dkn.png',
      description:
        'A lightweight and efficient URL shortener application built with React, Node.js, and NanoID. Generates unique short links instantly and manages redirects with analytics-ready architecture.',
    },
    {
      id: 5,
      name: 'Portfolio Website',
      github: 'https://github.com/vishnu2k5/portfolio.git',
      image: 'https://res.cloudinary.com/dtujitvpy/image/upload/v1760801711/Screenshot_2025-10-18_210425_jopmrm.png',
      description:
        'A modern, fully responsive developer portfolio built with React and Vite. Features sections for About, Projects, and Contact with smooth scrolling and aesthetic dark-mode design.',
      live:
        'https://portfolio-jhsc-h8aguez01-mvishnuvardhan156-gmailcoms-projects.vercel.app/',
    },
    {
      id: 6,
      name: 'Self-Healing Infrastructure MonitorSelf-Healing Infrastructure Monitor',
      github: 'https://github.com/vishnu2k5/self-Healing-Service-Monitor.git',
      image: 'https://res.cloudinary.com/dtujitvpy/image/upload/v1779002149/Screenshot_2026-05-17_124403_jbbq4y.png',
      description:
        'A lightweight DevOps monitoring and self-healing tool built with Bash that automatically detects failures in services, containers, processes, and HTTP endpoints and attempts to recover them This project demonstrates core Site Reliability Engineering (SRE) concepts such as monitoring, automated recovery, configuration-driven infrastructure, and logging',
      
    },
  ],
}));
