import { create } from 'zustand';

export const useOngoingStore = create((set) => ({
    ongoing: [
        {
      id: 1,
      name: 'AI EMS_BOM ',
      github: 'https://github.com/vishnu2k5/aiems.git',
      image: 'https://res.cloudinary.com/dtujitvpy/image/upload/v1779001634/ems_daeack.png',
      description:
         'Developed a full-stack automated quotation platform for Electronics Manufacturing Services (EMS) using React, Python (FastAPI), and Docker. Engineered an intelligent backend to parse Bills of Materials (BOMs) and automate complex pricing algorithms for PCB fabrication, assembly, and customs duties. Built interactive analytics dashboards for real-time margin analysis and deployed the containerized application on AWS using Nginx.',
      live:
        '',
    },
    ],
}));
