export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  tools: string[];
  specifications?: string[];
  images: string[];
  links?: {
    github?: string;
    video?: string;
    documentation?: string;
  };
}

export const projects: Project[] = [
  {
    id: "ice-cream-robot",
    title: "Autonomous Ice-Cream Scooping Robot",
    description: "Modular, vision-guided autonomous ice-cream scooping prototype (Project Hatchery).",
    fullDescription:
      "Developed a modular autonomous ice-cream scooping system with vision guidance and prototype assemblies built for simulation and testing. Designed the full mechanism in SolidWorks, iterated on a belt-driven optimized prototype for manufacturability, and prepared a production-version design targeted for 2026. Current work includes ROS2 motion programming and mechanical refinements such as belt tensioning and tolerance improvements.",
    tags: ["Robotics", "Vision", "Automation"],
    tools: ["SolidWorks", "ROS2", "Python", "C++", "3D Printing"],
    specifications: [
      "Prototype status: functional assembled prototype",
      "Planned production-version: before 2026-01-01",
      "Focus: manufacturability, belt tensioning, shaft alignment",
    ],
    images: ["/3.png"],
  },
  {
    id: "payload-retriever",
    title: "Remote Controlled Payload Retriever & Lift",
    description: "Lightweight, easy-to-manufacture lift and retriever robot for payload handling.",
    fullDescription:
      "Designed a remote-controlled payload retriever and lift focusing on weight optimization and center-of-gravity management. The lift supports the retriever robot while maintaining balance on table edges. Prototype demonstrated reliable load handling with lift ~7 lbs and retriever ~3 lbs.",
    tags: ["Robotics", "Mechanisms", "CAD"],
    tools: ["SolidWorks", "3D Printing", "Arduino"],
    specifications: ["Lift weight: ~7 lbs", "Retriever weight: ~3 lbs"],
    images: ["/4.png"],
  },
  {
    id: "thrust-vectored-rocket",
    title: "Thrust-Vectored Rocket",
    description: "Reusable rocket prototype with thrust vectoring gimbal mechanisms for controlled takeoff/landing.",
    fullDescription:
      "Built a thrust-vectored rocket prototype with a gimbaled thruster mechanism. Initial experiments were successful with working gimbal mechanisms and electronics. Next steps include redesigning the gimbal to support dual motors, addressing material limits of 3D-printed parts under high loads, and implementing quaternion-based control to avoid Gimbal Lock.",
    tags: ["Aerospace", "Mechanisms", "Control"],
    tools: ["3D Modeling", "Embedded Systems", "Flight Control"],
    specifications: ["Reusable prototype", "Gimbal improvements planned", "Control: quaternion-based orientation"],
    images: ["/5.png"],
  },
  {
    id: "matlab-truss",
    title: "MATLAB 2D Truss Analysis",
    description: "Custom MATLAB program to analyze 2D truss systems and visualize member forces.",
    fullDescription:
      "Implemented a MATLAB tool that accepts joint locations, member definitions, and external forces to compute internal forces for 2D truss structures. The program provides numeric results and a plotted visualization of the truss and applied loads to aid structural validation.",
    tags: ["Analysis", "MATLAB", "Structural"],
    tools: ["MATLAB"],
    specifications: ["2D truss analysis", "Graphical plot output"],
    images: ["/6.png"],
  },
  {
    id: "cnn-research",
    title: "Optimizing Convolutional Neural Networks",
    description: "Research into optimizations for efficient image recognition using CNN architectures.",
    fullDescription:
      "Research project focused on analyzing convolutional neural network architectures to identify optimization opportunities for faster image recognition with reduced computational load. The work explores architectural breakdowns and algorithmic improvements for efficient training and inference.",
    tags: ["Research", "Machine Learning"],
    tools: ["Python", "TensorFlow/PyTorch"],
    images: ["/placeholder.svg"],
  },
];
