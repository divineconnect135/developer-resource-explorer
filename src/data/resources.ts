import type { Resource } from "../types/Resource";

export const resources: Resource[] = [
  {
    id: 1,
    name: "VS Code",
    category: "Editor",
    description: "A fast and popular code editor for developers.",
    image: "/images/vscode.png",
    website: "https://code.visualstudio.com",
    rating: 4.9,
  },
  {
    id: 2,
    name: "GitHub",
    category: "Development",
    description:
      "A platform for hosting and collaborating on Git repositories.",
    image: "/images/github.png",
    website: "https://github.com",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Figma",
    category: "Design",
    description: "A collaborative interface design and prototyping tool.",
    image: "/images/figma.png",
    website: "https://figma.com",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Postman",
    category: "API",
    description: "A tool for building, testing, and documenting APIs.",
    image: "/images/postman.png",
    website: "https://postman.com",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Vercel",
    category: "Hosting",
    description: "A deployment platform for modern frontend applications.",
    image: "/images/vercel.png",
    website: "https://vercel.com",
    rating: 4.8,
  },
  {
    id: 6,
    name: "React",
    category: "Frontend",
    description: "A JavaScript library for building user interfaces.",
    image: "/images/react.png",
    website: "https://react.dev",
    rating: 4.9,
  },
];
