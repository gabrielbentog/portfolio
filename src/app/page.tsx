import Navbar from "./components/Navbar/Navbar";
import Biography from "./components/Biography/Biography";
import ProjectsSection from "./components/Projects/ProjectsSection";
import KnowledgeSection from "./components/KnowledgeSection/KnowledgeSection";

export default function Home() {
  return ( 
    <>
      <Navbar />
      <Biography id="biography" />
      <KnowledgeSection id="knowledge" />
      <ProjectsSection id="projects" />
    </>
  );
}
