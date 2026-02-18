import { ArrowRight, ExternalLink, X } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "ResumeMatch",
    description: "An AI-driven recruitment platform powered by Google Gemini AI. It analyzes resumes to provide instant match scores. Role: I designed the frontend interface and integrated the Google Gemini API for real-time resume analysis.",
    fullDescription: "ResumeMatch is a revolutionary tool that bridges the gap between job seekers and employers. Using the power of Google Gemini AI, it performs deep semantic analysis of resumes against job descriptions. This allows candidates to see exactly how well they match a role before applying, saving time and increasing success rates.",
    features: [
      "Real-time AI Resume Scoring",
      "Semantic Analysis matching skills and experience",
      "Instant feedback on how to improve",
      "Job Description parsing"
    ],
    image: "/projects/resume-match.png",
    tags: ["CSS", "Google Gemini AI", "Custom API"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Orbit Analytics",
    description:
      "Interactive analytics dashboard built for IT1x25 Web Development. Features data visualization and filtering capable of processing large datasets. Role: I developed the reusable chart components using D3.js and optimized the data fetching pipeline.",
    fullDescription: "Orbit Analytics is a comprehensive dashboard solution designed for visualizing complex datasets. Created as my final project for the IT1x25 Web Development module, it enables users to upload raw data and transform it into actionable insights through interactive charts and graphs.",
    features: [
      "Real-time data visualization with D3.js",
      "CSV/JSON Data Import",
      "Customizable widgets and layout",
      "Exportable PDF reports"
    ],
    image: "/projects/project2.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "EcoShop E-commerce",
    description:
      "Full-featured sustainable e-commerce platform. Includes user authentication, product search, and payment processing. Role: I built the backend API with Node.js and integrated the Stripe payment gateway for secure transactions.",
    fullDescription: "EcoShop is a modern e-commerce solution built for scalability and performance. This project focuses on sustainable products and features a robust backend to handle inventory management, user profiles, and secure order processing.",
    features: [
      "User Authentication & Profiles",
      "Secure Stripe Payment Integration",
      "Shopping Cart & Wishlist",
      "Admin Dashboard for Order Management"
    ],
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer"
                      title="View Project Details"
                    >
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-card w-full max-w-2xl rounded-xl shadow-2xl border border-border max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1 rounded-full hover:bg-secondary transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-primary">Overview</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.fullDescription || selectedProject.description}
                    </p>
                  </div>

                  {selectedProject.features && (
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-primary">Key Features</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}


      </div>
    </section>
  );
};