
export type WebProject = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  website: string;
  technologies: string[];
};

export const webProjects: WebProject[] = [
  {
    id: 1,
    title: "Marielle Modest Clothing",
    category: "WEB & UX/UI",

    description:
      "Helped with the organization of products using figma and the development of a mini AI chatbot for FAQs.",

    image: `${import.meta.env.BASE_URL}projects/marielle.png`,

    website: "https://www.mariellemodestclothing.ca/",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Liquid",
      "Figma",
    ],
  },

  {
    id: 2,
    title: "Liyamah Collection",
    category: "WEB & UX/UI",

    description:
      "Added a layout with figma while also developing different sections.",

    image: `${import.meta.env.BASE_URL}projects/liyamah.png`,

    website: "https://www.liyamahcollection.com/",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Figma",
    ],
  },

  {
    id: 3,
    title: "Noor Al Haya",
    category: "WEB & UX/UI",

    description:
      "Helped improve and develop layout for better useability for customers.",

    image: `${import.meta.env.BASE_URL}projects/noor-al-haya.png`,

    website: "https://www.nooralhaya.co/en-ca",

    technologies: [
      "JavaScript",
      "CSS",
      "HTML",
      "Figma",
    ],
  },

  {
    id: 4,
    title: "Prototyp3",
    category: "WEB & UX/UI",

    description:
      "Helped develop and prototype certain parts of the website for students.",

    image: `${import.meta.env.BASE_URL}projects/prototyp3.png`,

    website: "https://prototyp3.org/",

    technologies: [
      "Figma",
      "TypeScript",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },

  {
    id: 5,
    title: "SSSC Carleton Meet Our Mentors Page",
    category: "WEB & UX/UI",

    description:
      "Helped maintain and add new students to the site during the start of the school years.",

    image: `${import.meta.env.BASE_URL}/projects/meet-our-mentors.png`,

    website: "https://sssc.carleton.ca/meet-our-mentors",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
];