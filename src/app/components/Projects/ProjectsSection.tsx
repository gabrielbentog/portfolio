import ProjectCard from "./ProjectCard";

const ProjectsSection: React.FC<{ id: string }> = ({ id }) => {
  const projects = [
    {
      title: "Projeto 1",
      description: "Uma breve descrição do primeiro projeto.",
      imageUrl: "/placeholder.svg",
      link: "#",
    },
    {
      title: "Projeto 2",
      description: "Uma breve descrição do segundo projeto.",
      imageUrl: "/placeholder.svg",
      link: "#",
    },
    {
      title: "Projeto 3",
      description: "Uma breve descrição do terceiro projeto.",
      imageUrl: "/placeholder.svg",
      link: "#",
    },
    {
      title: "Projeto 4",
      description: "Uma breve descrição do quarto projeto.",
      imageUrl: "/placeholder.svg",
      link: "#",
    },
  ];

  return (
    <section id={id} className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meus Projetos</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Confira alguns dos meus projetos desenvolvidos com as melhores tecnologias.
            </p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
