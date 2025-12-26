import { GraduationCap, MapPin, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">About Me</h1>

          {/* Bio Section */}
          <section className="mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a mechanical engineer with a passion for designing and building 
              things that solve real problems. My journey in engineering started 
              with taking apart toys as a kid and has evolved into designing 
              complex mechanical systems and prototyping innovative solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in the power of hands-on learning and approach every 
              project with curiosity and attention to detail. Whether it's 
              optimizing a heat exchanger or building a robotic arm, I'm driven 
              by the challenge of turning concepts into reality.
            </p>
          </section>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <GraduationCap className="text-primary" size={24} />
                <CardTitle className="text-lg">Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium">B.S. Mechanical Engineering</p>
                <p className="text-muted-foreground">Cal Poly Pomona</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Expected Graduation: December 2026
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <MapPin className="text-primary" size={24} />
                <CardTitle className="text-lg">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium">Southern California</p>
                <p className="text-muted-foreground">
                  Open to relocation for the right opportunity
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Experience Highlights */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Briefcase className="text-primary" size={24} />
              Experience Highlights
            </h2>
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-semibold">Formula SAE Team Lead</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Cal Poly Pomona Racing | 2022 - 2024
                </p>
                <p className="text-muted-foreground">
                  Led a team of 15 students in designing and manufacturing an 
                  electric race car. Managed project timeline, coordinated with 
                  sponsors, and oversaw chassis and suspension development.
                </p>
              </div>
              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-semibold">Mechanical Engineering Intern</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Engineering Firm | Summer 2023
                </p>
                <p className="text-muted-foreground">
                  Assisted in product development lifecycle from concept to 
                  prototyping. Created detailed CAD models and engineering 
                  drawings for manufacturing.
                </p>
              </div>
              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-semibold">Research Assistant</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Cal Poly Pomona | 2021 - 2022
                </p>
                <p className="text-muted-foreground">
                  Conducted research on thermal management systems. Performed 
                  CFD simulations and experimental validation of heat transfer 
                  models.
                </p>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "SolidWorks",
                "Fusion 360",
                "ANSYS",
                "MATLAB",
                "Python",
                "3D Printing",
                "CNC Machining",
                "GD&T",
                "FEA/CFD",
                "Arduino",
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-secondary rounded-lg px-4 py-3 text-sm font-medium text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;
