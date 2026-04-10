import { motion } from "framer-motion";

export default function ProjectCard({ title, problem, solution, image, live, github }) {
  return (
    <motion.div 
      className="card"
      whileHover={{ scale: 1.05 }}
    >
      {/* Project Image */}
      <img src={image} alt="project preview" className="project-img" />

      <h3>{title}</h3>

      <p><strong>Problem:</strong> {problem}</p>
      <p><strong>Solution:</strong> {solution}</p>

      {/* Buttons */}
      <div className="project-links">
        <a href={live} target="_blank" className="btn">Live Demo</a>
        <a href={github} target="_blank" className="btn">GitHub</a>
      </div>
    </motion.div>
  );
}