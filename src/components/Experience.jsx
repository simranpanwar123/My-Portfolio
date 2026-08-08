import React from "react";
import {
  FileCode2,
  Palette,
  Braces,
  Atom,
  Wind,
  Boxes,
  CloudCog,
  Server,
  Database,
  Route,
  GitBranch,
  Code2,
  Globe,
  Terminal,
} from "lucide-react";

const Experience = () => {
  const skills = [
    // Frontend
    {
      id: 1,
      name: "HTML5",
      width: "90%",
      icon: FileCode2,
    },
    {
      id: 2,
      name: "CSS3",
      width: "90%",
      icon: Palette,
    },
    {
      id: 3,
      name: "JavaScript (ES6+)",
      width: "85%",
      icon: Braces,
    },
    {
      id: 4,
      name: "React.js",
      width: "82%",
      icon: Atom,
    },
    {
      id: 5,
      name: "Tailwind CSS",
      width: "90%",
      icon: Wind,
    },
    {
      id: 6,
      name: "Bootstrap",
      width: "85%",
      icon: Boxes,
    },
    {
      id: 7,
      name: "React Router",
      width: "80%",
      icon: Route,
    },
    {
      id: 8,
      name: "REST API Integration",
      width: "80%",
      icon: CloudCog,
    },

    // Programming Languages
    {
      id: 9,
      name: "Python",
      width: "80%",
      icon: Code2,
    },
    {
      id: 10,
      name: "PHP",
      width: "75%",
      icon: Terminal,
    },

    // Backend
    {
      id: 11,
      name: "Django",
      width: "78%",
      icon: Server,
    },
    {
      id: 12,
      name: "Django REST Framework",
      width: "75%",
      icon: CloudCog,
    },
    {
      id: 13,
      name: "Node.js",
      width: "65%",
      icon: Server,
    },
    {
      id: 14,
      name: "Express.js",
      width: "60%",
      icon: Server,
    },

    // Databases
    {
      id: 15,
      name: "MongoDB",
      width: "65%",
      icon: Database,
    },
    {
      id: 16,
      name: "MySQL",
      width: "80%",
      icon: Database,
    },

    // Tools
    {
      id: 18,
      name: "Git",
      width: "80%",
      icon: GitBranch,
    },
    {
      id: 19,
      name: "GitHub",
      width: "85%",
      icon: GitBranch,
    },
    {
      id: 20,
      name: "Vite",
      width: "80%",
      icon: Globe,
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-20 text-white"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-16">

        <div data-aos="fade-right">

          {/* Heading */}
          <h2 className="mb-6 text-center text-4xl font-extrabold md:text-5xl">
            Technical{" "}
            <span className="text-cyan-400">
              Skills
            </span>
          </h2>

          <p className="mx-auto mb-14 max-w-2xl text-center text-gray-400">
            Technologies and tools I use to build responsive,
            scalable, and user-friendly full-stack web applications.
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">

            {skills.map((skill) => {
              const SkillIcon = skill.icon;

              return (
                <div
                  key={skill.id}
                  className="
                    group
                    rounded-2xl
                    border
                    border-[#1f2937]
                    bg-[#111827]/40
                    p-5
                    shadow-lg
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-cyan-400
                    hover:shadow-cyan-500/10
                    sm:p-6
                  "
                >

                  {/* Skill Header */}
                  <div className="mb-4 flex items-center justify-between gap-4">

                    <div className="flex min-w-0 items-center gap-3 sm:gap-4">

                      {/* Icon */}
                      <div
                        className="
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-[#111a3e]
                          transition-all
                          duration-300
                          group-hover:bg-cyan-400
                        "
                      >
                        <SkillIcon
                          size={23}
                          className="
                            text-cyan-400
                            transition-colors
                            duration-300
                            group-hover:text-white
                          "
                        />
                      </div>

                      {/* Skill Name */}
                      <span className="truncate text-base font-semibold tracking-wide sm:text-lg">
                        {skill.name}
                      </span>

                    </div>

                    {/* Skill Level */}
                    <span className="shrink-0 text-sm font-bold text-cyan-400">
                      {skill.width}
                    </span>

                  </div>

                  {/* Progress Bar */}
                  <div className="h-3 w-full overflow-hidden rounded-full bg-[#1e293b]">

                    <div
                      className="
                        h-full
                        rounded-full
                        bg-gradient-to-r
                        from-cyan-500
                        to-blue-500
                        shadow-[0_0_15px_#06b6d4]
                        transition-all
                        duration-700
                      "
                      style={{
                        width: skill.width,
                      }}
                    />

                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;