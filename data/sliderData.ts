export interface SliderItem {
  id: number;
  value: string; // The blue number/text (e.g., "100K+", "5,000+", "60%")
  description: string; // The black descriptive text
}

export const sliderData: SliderItem[] = [
  {
    id: 1,
    value: "100K+",
    description: "Students learning with flipbooks & videos"
  },
  {
    id: 2,
    value: "5,000+",
    description: "Job applications submitted via InupgroPaid to teachers"
  },
  {
    id: 3,
    value: "60%",
    description: "Success rate in student placements"
  },
  {
    id: 4,
    value: "50K+",
    description: "Active teachers on the platform"
  },
  {
    id: 5,
    value: "1,200+",
    description: "Schools and institutions registered"
  },
  {
    id: 6,
    value: "95%",
    description: "Student satisfaction rate"
  },
  {
    id: 7,
    value: "10M+",
    description: "Learning hours completed"
  },
  {
    id: 8,
    value: "2,500+",
    description: "Courses available for students"
  }
];

