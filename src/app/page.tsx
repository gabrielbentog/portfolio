import Navbar from "./components/Navbar/Navbar";
import Biography from "./components/Biography/Biography";
import ProjectsSection from "./components/Projects/ProjectsSection";
import KnowledgeSection from "./components/KnowledgeSection/KnowledgeSection";
import CareerSection from "./components/CareerSection/CareerSection";
import ContactSection from "./components/ContactSection/ContactSection";

export default function Home() {
  return ( 
    <>
      <Navbar />
      <Biography id="biography" />
      <KnowledgeSection id="knowledge" />
      <ProjectsSection id="projects" />
      <CareerSection id="career" />
      <ContactSection id="contacts"/>
    </>
  );
}
