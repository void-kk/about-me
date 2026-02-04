import { motion } from "framer-motion";
import { Code2, Palette, Terminal, Zap, ExternalLink, Briefcase } from "lucide-react";

export default function About() {
  const experiences = [
    {
      company: "테크 스타트업 A",
      role: "Senior FE Dev",
      period: "2022 - Present",
      description: "React/TS 기반 디자인 시스템 구축 및 렌더링 성능 30% 개선",
      tags: ["React", "System Design"]
    },
    {
      company: "웹 에이전시 B",
      role: "Web Developer",
      period: "2019 - 2022",
      description: "20+ 개 이상의 반응형 웹사이트 제작 및 인터랙션 구현",
      tags: ["Next.js", "GSAP"]
    }
  ];

  const skillCategories = [
    {
      title: "Main Stack",
      icon: Code2,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Tools & DevOps",
      icon: Terminal,
      skills: ["Git", "GitHub Actions", "Docker", "Vite"],
      color: "bg-gray-50 text-gray-700"
    },
    {
      title: "Design & UX",
      icon: Palette,
      skills: ["Figma", "Framer Motion", "UI/UX", "Accessibility"],
      color: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-gray-50 relative" id="projects">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Experience (Bento Grid Style) - Span 7 */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-2 mb-2">
               <Briefcase className="w-5 h-5 text-gray-400" />
               <h3 className="text-xl font-bold text-gray-800">Projects & Experience</h3>
            </div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">{exp.role}</h4>
                    <p className="text-gray-500 font-medium">{exp.company}</p>
                  </div>
                  <span className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm font-semibold text-gray-600">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex gap-2">
                   {exp.tags.map(tag => (
                     <span key={tag} className="text-xs font-bold text-primary bg-primary/5 px-3 py-1 rounded-md">
                        #{tag}
                     </span>
                   ))}
                </div>
              </motion.div>
            ))}
            
            {/* CTA Card */}
            <motion.div
               whileHover={{ scale: 1.02 }}
               className="bg-primary p-8 rounded-3xl text-white flex items-center justify-between cursor-pointer group"
            >
               <div>
                 <h4 className="text-2xl font-bold mb-1">Download Resume</h4>
                 <p className="text-white/70 text-sm">PDF Format, Last updated Feb 2026</p>
               </div>
               <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-colors">
                  <ExternalLink className="w-6 h-6" />
               </div>
            </motion.div>
          </div>

          {/* Right Column: Skills (Bento Grid Style) - Span 5 */}
          <div className="lg:col-span-5 flex flex-col gap-6">
             <div className="flex items-center gap-2 mb-2">
               <Zap className="w-5 h-5 text-gray-400" />
               <h3 className="text-xl font-bold text-gray-800">Tech Stack</h3>
            </div>

            <div className="grid gap-4">
              {skillCategories.map((cat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`w-10 h-10 ${cat.color} rounded-xl flex items-center justify-center mb-4`}>
                    <cat.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{cat.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map(skill => (
                      <span key={skill} className="px-3 py-1.5 bg-gray-50 text-gray-600 text-sm rounded-lg font-medium border border-gray-100">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote Card */}
            <div className="bg-secondary p-8 rounded-3xl mt-auto relative overflow-hidden">
               <div className="relative z-10">
                 <p className="text-primary font-bold text-xl leading-snug mb-4">
                   "Good design is obvious. Great design is transparent."
                 </p>
                 <p className="text-primary/70 text-sm font-medium">- Joe Sparano</p>
               </div>
               <div className="absolute -bottom-4 -right-4 text-primary/10">
                  <Code2 className="w-32 h-32" />
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
