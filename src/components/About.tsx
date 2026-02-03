import { motion } from "framer-motion";

export default function About() {
  const experiences = [
    {
      company: "테크 스타트업 A",
      role: "시니어 프론트엔드 개발자",
      period: "2022 - 현재",
      description: "React와 TypeScript를 도입하여 레거시 코드를 리팩토링하고, 디자인 시스템을 구축하여 개발 생산성을 30% 향상시켰습니다."
    },
    {
      company: "웹 에이전시 B",
      role: "웹 퍼블리셔 & 개발자",
      period: "2019 - 2022",
      description: "다양한 클라이언트의 브랜드 웹사이트를 제작하였으며, 웹 접근성 지침을 준수하여 프로젝트를 수행했습니다."
    }
  ];

  const skills = [
    "React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "GraphQL", "Framer Motion", "Git"
  ];

  return (
    <section className="py-20 px-8 bg-white" id="about">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-6">소개</h2>
          <p className="text-lg text-gray-600 leading-relaxed break-keep">
            안녕하세요! 저는 아름답고 기능적인 웹 경험을 만드는 것에 열정을 가진 개발자입니다.
            최신 프론트엔드 기술에 대한 깊은 이해를 바탕으로, 깔끔하고 유지보수 가능한 코드를 작성하여
            실질적인 문제를 해결하는 것을 목표로 합니다. 코딩을 하지 않을 때는 새로운 카페를 탐방하거나
            최신 기술 트렌드를 공부하며 시간을 보냅니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-secondary inline-block pb-2">
              경력
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-gray-100">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary border-4 border-white" />
                  <h4 className="text-xl font-bold text-gray-800 break-keep">{exp.role}</h4>
                  <p className="text-primary font-medium mb-2">{exp.company}</p>
                  <span className="text-sm text-gray-400 mb-3 block">{exp.period}</span>
                  <p className="text-gray-600 break-keep">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-secondary inline-block pb-2">
              기술 스택
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gray-50 text-primary rounded-full font-medium border border-gray-100 hover:border-secondary hover:bg-secondary/10 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
