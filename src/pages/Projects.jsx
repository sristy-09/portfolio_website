import Ecommerce from "../assets/ecommerce.png";
import Inventory from "../assets/inventory.png";

const projects = [
  {
    title: "BookStore API",
    description:
      "The Bookstore API is a backend web application designed to manage books, authors, and customer records for an online bookstore. It provides a set of RESTful API endpoints that allow users to perform CRUD (Create, Read, Update, Delete) operations on book data efficiently.",
    image: null,
    technologies: ["MongoDB", "ExpressJS", "NodeJS"],
    githubUrl: "https://github.com/sristy-09/bookstore-api",
  },
  {
    title: "E-commerce website",
    description:
      "A comprehensive, full stack E-commerce website where user can buy and pay for the things online.",
    image: Ecommerce,
    technologies: [
      "MongoDB",
      "ExpressJS",
      "ReactJs",
      "NodeJS",
      "Tailwind CSS",
      "Redux Toolkit",
    ],
    githubUrl: "https://github.com/sristy-09/Mern-Ecommerce",
  },
  {
    title: "Inventory Management System",
    description:
      "A full-stack web application built using Next.js that helps businesses efficiently manage their product inventory, stock levels, and sales records in real-time. It allows admins to track items, update quantities, and monitor inventory status through an intuitive dashboard interface.",
    image: Inventory,
    technologies: ["NextJs", "Prisma", "Stack Auth"],
    githubUrl: "https://github.com/sristy-09/Inventory-management",
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
