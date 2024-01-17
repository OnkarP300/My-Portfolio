import "./app.scss";
import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import { Parallax } from "./components/parallax/Parallax";
import { Projects } from "./components/projects/Projects";
import { Skills } from "./components/skills/Skills";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section>
        <Parallax type="skills" />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="Project">
        <Parallax type="project" />
      </section>
      <Projects />

      <section id="Contact">
        <a href="">Contact</a>
      </section>
    </div>
  );
};

export default App;
