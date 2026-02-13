export interface BlogPost {
  id: number;
  image: string;
  date: string;
  title: string;
  hasOverlay?: boolean;
  overlayText?: string;
}

export const blogData: BlogPost[] = [
  {
    id: 1,
    image: "/blog1.png",
    date: "Oct 18, 2025",
    title: "How to Choose the Right School for Your Child",
    hasOverlay: true,
    overlayText: "Choosing a school for your child"
  },
  {
    id: 2,
    image: "/blog2.png",
    date: "Dec 10, 2025",
    title: "How Teachers Can Monetize Their Passion"
  },
  {
    id: 3,
    image: "/blog3.png",
    date: "Oct 10, 2025",
    title: "Digital Admissions: A Game Changer for Schools"
  }
];

