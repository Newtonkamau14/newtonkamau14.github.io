export type Content = [
  {
    personalDetails: {
      name: string;
      city: string;
      country: string;
      email: string;
      githubUrl: string;
      linkedInUrl: string;
      resumeUrl: string;
    };
  },
  {
    about: string;
  },
  {
    education: {
      school: string;
      program: string;
    }[];
  },
  {
    workHistory: {
      company: string;
      jobTitle: string;
      jobDescription: string;
      location: string;
      duration: string;
    }[];
  }
];
