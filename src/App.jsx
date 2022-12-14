import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/about";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Testimonial from "./components/testimonial/testimonial";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
