
export type ResearchProject = {
  id: number;
  title: string;
  description: string;
  driveFileId: string;
  tags: string[];
};

export const researchProjects: ResearchProject[] = [
  {
    id: 1,
    title: "RL Algorithms against Varying Enviroments",

    description:
      "How different algorithms can be implemented for an agent to navigate varying levels of complexity.",

    driveFileId: "1z916_P0wFLOIbzxWbUdsPUj7ekUzaTX6",

    tags: ["Research", "Document"],
  },

  {
    id: 2,
    title: "Comparative Analysis of Job Board Interface Designs",

    description:
      "A comparative usability study evaluating two co-op job board wireframes to improve navigation, readability, and overall user experience through user testing and feedback.",

    driveFileId: "1dvwkdLEFv6AeAsASDVZbCrs2iC00bCdz",

    tags: ["Research", "Document"],
  },
];