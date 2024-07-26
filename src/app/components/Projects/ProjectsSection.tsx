import ProjectCard from "./ProjectCard";

const ProjectsSection: React.FC<{ id: string }> = ({ id }) => {
  const projects = [
    {
      title: "Projeto 1",
      description: "Uma breve descrição do primeiro projeto.ma breve descrição do primeiro projetoma breve descrição do primeiro projetoma breve descrição do primeiro projeto",
      imageUrl: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg?format=2500w",
      link: "https://github.com",
      gifUrl: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2N3ZGZ2b2k3ODR4bm4xanJrNGMwNncwbGJwbm03eWRtZnF5eGFsaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/07YXmuBuhQYBduC6pH/giphy.gif"
    },
    {
      title: "Projeto 2",
      description: "Uma breve descrição do segundo projeto.",
      imageUrl: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg?format=2500w",
      link: "#",
      gifUrl: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2N3ZGZ2b2k3ODR4bm4xanJrNGMwNncwbGJwbm03eWRtZnF5eGFsaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/07YXmuBuhQYBduC6pH/giphy.gif"
    },
    {
      title: "Projeto 3",
      description: "Uma breve descrição do terceiro projeto.",
      imageUrl: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg?format=2500w",
      link: "#",
      gifUrl: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2N3ZGZ2b2k3ODR4bm4xanJrNGMwNncwbGJwbm03eWRtZnF5eGFsaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/07YXmuBuhQYBduC6pH/giphy.gif"
    },
    {
      title: "Projeto 4",
      description: "Uma breve descrição do quarto projeto.",
      imageUrl: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg?format=2500w",
      link: "#",
      gifUrl: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2N3ZGZ2b2k3ODR4bm4xanJrNGMwNncwbGJwbm03eWRtZnF5eGFsaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/07YXmuBuhQYBduC6pH/giphy.gif"
    },
  ];

  return (
    <section id={id} className="w-full py-12 md:py-24 lg:py-32 from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-900 dark:to-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meus Projetos
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
              Confira alguns dos meus projetos desenvolvidos com as melhores tecnologias.
            </p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 text-white">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative transform transition duration-500 hover:scale-105 hover:shadow-xl"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                link={project.link}
                gifUrl={project.gifUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
