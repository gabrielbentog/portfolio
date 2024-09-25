import ProjectCard from "./ProjectCard";
const ProjectsSection: React.FC<{ id: string }> = ({ id }) => {
  const projects = [
    {
      title: "Sistema de Autenticação Completa: Solução Full Stack",
      description: "Um sistema de autenticação completo que cobre todas as necessidades de segurança e usabilidade de uma aplicação moderna. Este projeto full stack combina uma API robusta com uma interface de usuário intuitiva. Utilizando tecnologias avançadas e práticas recomendadas, a solução oferece um alto nível de proteção e uma experiência de usuário sem fricções.",
      imageUrl: "/images/auth_project.png",
      link: "",
      gifUrl: "",
      githubUrl: ""
    },
    {
      title: "Gerador de senhas",
      description: "Um aplicativo simples de gerador de senhas utilizando Tkinter em Python. Este programa permite aos usuários criar senhas seguras de forma fácil, personalizando os critérios de complexidade, como comprimento e tipos de caracteres.",
      imageUrl: "/images/password_generator.png",
      link: "",
      gifUrl: "/gifs/password_generator.gif",
      githubUrl: "https://github.com/gabrielbentog/password_geneartor"
    }
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
                githubUrl={project.githubUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
