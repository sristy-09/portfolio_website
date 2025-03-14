const projects = [
  {
    title: "BookStore Management",
    description:
      "A fully functional bookstore management system which have feature like user authentication where user can access their own favourite books and author can manage their books. These all operation can be managed by admin which oversees the whole process. ",
    image: null,
    technologies: ["MongoDB", "ExpressJS", "ReactJs", "NodeJS", "Tailwind CSS"],
    githubUrl: "https://github.com/sristy-09/book_mngmt.git",
  },
  {
    title: "E-commerce website",
    description:
      "A comprehensive, full stack E-commerce website where user can buy and pay for the things online.",
    image: null,
    technologies: ["MongoDB", "ExpressJS", "ReactJs", "NodeJS", "Tailwind CSS"],
    githubUrl: "https://github.com/sristy-09",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen p-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8" data-aos="fade-down">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {/* <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Live Demo
                  </a> */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
