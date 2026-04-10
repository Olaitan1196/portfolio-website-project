import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      
      {/* Your Image */}
      <img src="/profile.jpg" alt="Olaitan" className="profile-img" />

      <motion.h1 initial={{opacity:0, y:30}} animate={{opacity:1, y:0}}>
        I build fast, scalable web applications that solve real business problems.
      </motion.h1>

      <p>Fullstack Developer | Problem Solver</p>

      <a href="#contact" className="btn">Hire Me</a>
    </section>
  );
}