import { create } from 'zustand';

export const useProjectStore = create((set) => ({
    projects: [
        { id: 1, name: 'chat-app', github: 'https://github.com/vishnu2k5/chat-app.git', image: 'https://res.cloudinary.com/dtujitvpy/image/upload/v1760798218/Screenshot_2025-10-18_200627_v8yf7a.png', description: 'Description for Project 1',live:'https://chat-app-wevyj.sevalla.app/' },
        { id: 2, name: 'movie_search_page', github: 'https://github.com/vishnu2k5/movie_search_page.git', image: 'https://res.cloudinary.com/dtujitvpy/image/upload/v1760798068/movie_search_page_kylldb.png', description: 'Description for Project 2', },
        { id: 3, name: 'blog-application', github: 'https://github.com/vishnu2k5/blog-application.git', image: 'https://res.cloudinary.com/dtujitvpy/image/upload/v1760798366/Screenshot_2025-10-18_200857_xo73yi.png', description: 'Description for Project 3',live:'https://blogit-rfxo.onrender.com/' },
        { id: 4, name: 'urlshortener', github: 'https://github.com/vishnu2k5/urlshortener.git', image: 'https://res.cloudinary.com/dtujitvpy/image/upload/v1760798486/Screenshot_2025-10-18_201051_vq3dkn.png', description: 'Description for Project 4' },
    ],
}));