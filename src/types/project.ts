export type Technologies = {
  name: "Astro" | "Tailwind CSS" | "TypeScript" | "React" | "Supabase" | "shadcn/ui" | "Google Calendar API";
  icon: astroHTML.JSX.Element;
};

export interface Project {
  title: string;
  description: string;
  tags: Technologies[];
  url?: string;
  githubUrl?: string;
  icon?: string;
  legend: string;
  latest?: boolean;
  updated?: boolean;
}
