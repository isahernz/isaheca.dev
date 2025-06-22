import type { Project } from "@/types/project";

import Astro from "@/icons/astro.svg";
import Tailwind from "@/icons/tailwind.svg";
import TypeScript from "@/icons/typescript.svg";
import React from "@/icons/react.svg";
import Supabase from "@/icons/supabase.svg";
import Shadcn from "@/icons/shadcn-ui.svg";
import GoogleCalendar from "@/icons/google-calendar.svg";

export const projects: Project[] = [
  {
    title: "Membo",
    description: "A membership management system. 💸",
    tags: [
      { name: "React", icon: React },
      { name: "TypeScript", icon: TypeScript },
      { name: "Tailwind CSS", icon: Tailwind },
      { name: "Supabase", icon: Supabase },
      { name: "shadcn/ui", icon: Shadcn },
    ],
    icon: "https://raw.githubusercontent.com/pheralb/project-hackathon/main/public/images/phck.png",
    legend: "In Progress",
  },

  {
    title: "Thug Style Barber Shop",
    description:
      "A reservation system for Thug Style Barber Shop. It allows customers to book appointments online and manage their bookings. ✂️",
    tags: [
      { name: "React", icon: React },
      { name: "TypeScript", icon: TypeScript },
      { name: "Tailwind CSS", icon: Tailwind },
      { name: "Supabase", icon: Supabase },
      { name: "Google Calendar API", icon: GoogleCalendar },
    ],
    icon: "https://raw.githubusercontent.com/pheralb/project-hackathon/main/public/images/phck.png",
    legend: "In Production",
  },
];
