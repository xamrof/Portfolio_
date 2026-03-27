// src/data/index.ts
import type { ReactNode } from 'react';
import { Icons } from '../assets/icons';

// 1. DEFINIMOS LAS INTERFACES (Contratos de datos)
export interface PersonalInfo {
  name: string;
  role: string;
  description: string;
  email: string;
}

export interface Skill {
  id: number;
  name: string;
  category: string;
  icon: ReactNode; // ReactNode es el tipo correcto para un SVG o componente JSX
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

// 2. EXPORTAMOS LOS DATOS (Usando las interfaces para tipado estricto)
export const personalInfo: PersonalInfo = {
  name: "Maxwell Salazar",
  role: "Desarrollador Full Stack",
  description: "Especializado en Backend (Node.js, TS) y creando experiencias increíbles en el Frontend con React.",
  email: "maxwellworks23@gmail.com",
};

export const skills: Skill[] = [
  { id: 1, name: "Node.js", category: "Backend", icon: Icons.Server },
  { id: 2, name: "TypeScript", category: "Lenguaje", icon: Icons.Code },
  { id: 3, name: "JavaScript", category: "Lenguaje", icon: Icons.Terminal },
  { id: 4, name: "React", category: "Frontend", icon: Icons.Atom },
  { id: 5, name: "SQL / NoSQL", category: "Bases de Datos", icon: Icons.Database },
  { id: 6, name: "Docker", category: "DevOps", icon: Icons.Box },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "WhatsApp Bot AI",
    description: "Bot inteligente para atención al cliente con búsqueda vectorial y manejo de sesiones multi-usuario.",
    technologies: ["Node.js", "Vector DB", "OpenAI"],
    link: "#"
  },
  {
    id: 2,
    title: "Pizza Menu App",
    description: "Aplicación para gestión de menús con precios dinámicos y animaciones fluidas.",
    technologies: ["React", "Tailwind", "Vite"],
    link: "#"
  },
  {
    id: 3,
    title: "Private Web Chat",
    description: "Chat en tiempo real con salas privadas y mensajes efímeros utilizando WebSockets.",
    technologies: ["Socket.io", "Node.js", "Express"],
    link: "#"
  }
];
