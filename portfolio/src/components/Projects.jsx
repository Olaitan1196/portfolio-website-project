import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <ProjectCard
        title="Student Management System"
        problem="Managing student data manually was slow and error-prone."
        solution="Built a full CRUD system using Node.js and MySQL to automate records."
        image="/project1.png"
        live="#"
        github="#"
      />

      <ProjectCard
        title="Admin Upload Dashboard"
        problem="Uploading and managing records was inefficient."
        solution="Created a dashboard to streamline uploads and data updates."
        image="/project1.png"
        live="#"
        github="#"
      />

      <ProjectCard
        title="Landing Page"
        problem="Businesses needed a fast and responsive online presence."
        solution="Designed a clean, mobile-first landing page."
        image="/project1.png"
        live="#"
        github="#"

      />

      <ProjectCard
        title="E-commerce API"
        problem="Lack of a robust backend for online stores."
        solution="Developed a RESTful API with Node.js and Express for product management."
        image="/project1.png"
        live="#"
        github="#"
      />
    </section>
  );
}