import {
  About,
  Contact,
  Education,
  Experience,
  Hero,
  Projects,
  Skills,
} from "../components/home";

const Home = () => {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="Experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default Home;
