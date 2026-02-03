import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full relative">
      {/* Left Side - Content */}
      <div className="w-full md:w-1/2 bg-primary p-8 md:p-16 flex flex-col justify-between relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/10 rounded-full" />
        <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-white/5 rotate-45" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl font-bold text-secondary mb-2">Ju Young</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="z-10"
        >
          <h2 className="text-5xl md:text-7xl font-black text-secondary leading-tight mb-6">
            프론트엔드
            <br />
            개발자.
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-md font-light leading-relaxed break-keep">
            사용자 경험을 최우선으로 생각하며, 견고하고 확장 가능한 웹 제품을 만드는 것을 좋아합니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 md:mt-0 grid grid-cols-2 gap-8 text-white/70 text-sm"
        >
          <div>
            <p className="mb-2 font-semibold text-white">Expertise</p>
            <p className="break-keep">반응형 웹 디자인, UI/UX 엔지니어링, 성능 최적화</p>
          </div>
          <div>
            <p className="mb-2 font-semibold text-white">Experience</p>
            <p className="break-keep">다양한 프로젝트 리딩 및 협업 경험 보유</p>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Image & Navigation */}
      <div className="w-full md:w-1/2 bg-secondary p-8 md:p-16 flex flex-col items-center justify-center relative">
        {/* Navigation - Top Right */}
        <div className="absolute top-8 right-8 flex gap-4">
          <div className="flex flex-col gap-1.5 cursor-pointer group">
            <div className="w-8 h-0.5 bg-primary group-hover:w-6 transition-all" />
            <div className="w-6 h-0.5 bg-primary group-hover:w-8 transition-all ml-auto" />
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 grid grid-cols-4 gap-2 opacity-50">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-primary rounded-full" />
          ))}
        </div>
        
        <div className="absolute bottom-20 left-20">
          <svg width="60" height="60" viewBox="0 0 100 100" className="text-primary opacity-50">
             <path d="M0 0 L20 20 M20 20 L0 40 M0 40 L20 60 M20 60 L0 80" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>

        <div className="absolute bottom-20 right-10 flex flex-col gap-4 text-primary">
            <Github className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
            <Twitter className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
            <Linkedin className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
            <Mail className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
        </div>

        {/* Hero Image Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-10"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-200 relative overflow-hidden group">
             {/* Placeholder Image - replace with actual photo */}
             <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 group-hover:bg-gray-400 transition-colors">
                <span className="text-sm">Profile Image</span>
             </div>
             <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary z-[-1]" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
