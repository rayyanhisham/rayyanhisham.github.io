import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Cog, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const Index = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="container py-24 md:py-32">
        <div className="max-w-3xl animate-fade-in">
          <p className="text-primary font-medium mb-4">Mechanical Engineer</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Rayyan Hisham — Precision Engineering & Prototyping
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            Mechanical engineering graduate from Cal Poly Pomona specializing in CAD, FEA, and product development. I design and prototype solutions for real-world problems.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link to="/resume">
                View Resume
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button asChild size="lg">
              <Link to="/projects">
                View Projects
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="bg-secondary/50 py-16">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-8">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-card rounded-lg border">
              <Wrench className="text-primary mb-4" size={28} />
              <h3 className="font-semibold mb-2">Mechanical Design</h3>
              <p className="text-sm text-muted-foreground">
                CAD modeling, FEA analysis, and design optimization for 
                manufacturing and assembly.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border">
              <Cog className="text-primary mb-4" size={28} />
              <h3 className="font-semibold mb-2">Prototyping</h3>
              <p className="text-sm text-muted-foreground">
                Rapid prototyping using 3D printing, CNC machining, and 
                traditional fabrication methods.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border">
              <Lightbulb className="text-primary mb-4" size={28} />
              <h3 className="font-semibold mb-2">Problem Solving</h3>
              <p className="text-sm text-muted-foreground">
                Analyzing complex engineering challenges and developing 
                practical, innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <Link
            to="/projects"
            className="text-sm text-primary font-medium hover:underline flex items-center"
          >
            View All
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Interested in working together?
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas, 
            or opportunities to be part of your vision.
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link to="/contact">Let's Connect</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
