export type SoftwareProject = {
  id: number;
  title: string;
  description: string;
  github: string;
  technologies: string[];
};

export const softwareProjects: SoftwareProject[] = [
  {
    id: 1,
    title: "Health & Fitness Sim",

    description:
      "A small Python-based health and fitness management application powered by a PostgreSQL database.",

    github: "https://github.com/yasminhersi/comp3005Final",

    technologies: ["Python", "SQL"],
  },

  {
    id: 2,
    title: "Software Prototype of AED",

    description:
      "A high-fidelity AED simulator built with C++ and Qt to help users practice emergency cardiac response.",

    github: "https://github.com/fabricem15/AED-Simulator",

    technologies: ["C++", "Qt"],
  },

  {
    id: 3,
    title: "SSSC iOS App",

    description:
      "An iOS application designed to connect Carleton University science students with academic resources and support services.",

    github:
      "https://github.com/ScienceStudentSuccessCentre/SSSC-iOS-App",

    technologies: ["Swift", "Ruby"],
  },
];