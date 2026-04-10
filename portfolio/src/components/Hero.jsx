import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <motion.h1 initial={{opacity:0, y:30}} animate={{opacity:1, y:0}}>
        I don’t just build websites, I build solutions that work.
      </motion.h1>
      <p>Fullstack Developer | Problem Solver</p>
      <a href="#contact" className="btn">Hire Me</a>
    </section>
  );
}