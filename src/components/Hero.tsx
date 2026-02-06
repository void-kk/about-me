import { motion } from "framer-motion";
import { Github, Mail, ArrowRight, BookOpen } from "lucide-react";

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/void-kk" },
    { icon: BookOpen, href: "https://void-kk.github.io/my-blog" }, 
    { icon: Mail, href: "mailto:juuyoung9575@gmail.com" },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full relative">
      {/* Left Side - Content (Purple) */}
      <div className="w-full md:w-1/2 bg-primary p-8 md:p-16 lg:p-24 flex flex-col justify-center relative overflow-hidden group z-10">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/5 rounded-full blur-xl group-hover:blur-2xl transition-all duration-700" />
        <div className="absolute bottom-20 right-20 w-64 h-64 border-[30px] border-white/5 rotate-12 blur-sm group-hover:rotate-45 transition-all duration-1000 ease-out" />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-12 bg-secondary" />
            <span className="text-secondary font-medium tracking-wider uppercase text-sm">Portfolio 2026</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tight">
            JUYOUNG
            <span className="block text-stroke text-transparent hover:text-secondary/20 transition-colors duration-500">
              KIM
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6 flex items-center gap-2">
            Frontend Developer
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
          </h2>
          
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 px-8 py-4 bg-secondary text-primary font-bold rounded-full hover:bg-white transition-all transform hover:scale-105 group mt-8"
          >
            Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Right Side - Introduction & Animation (Lime) */}
      <div className="w-full md:w-1/2 bg-[#E1F664] p-8 md:p-16 flex flex-col items-center justify-center relative overflow-hidden">
        
        

        {/* 1. Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#3B27BA 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
        />

        {/* 2. Geometric Animation (Background Layer) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 md:opacity-100">
             {/* Large Rotating Wireframe Circle */}
             <motion.div
               animate={{ rotate: 360 }}
               transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
               className="w-[400px] h-[400px] border border-primary/10 rounded-full absolute"
             />
             
             {/* Floating Cube (Visual Decoration) */}
             <motion.div
               animate={{ 
                 y: [0, -30, 0],
                 rotateZ: [0, 10, -10, 0],
               }}
               transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-20 right-20 w-16 h-16 border-2 border-primary/20 rounded-xl hidden md:block"
             />
        </div>

        {/* 3. Introduction Content (Foreground Layer) */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="relative z-20 max-w-md text-center md:text-left"
        >
           <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
             <span className="w-12 h-[2px] bg-primary/20" />
             <span className="text-primary font-bold uppercase tracking-widest text-sm">About Me</span>
           </div>
           
           <h3 className="text-4xl md:text-5xl font-black text-primary mb-8 leading-tight">
             Creative Developer <br />
             <span className="text-primary/60">Solving Problems.</span>
           </h3>
           
           <p className="text-lg text-primary/80 leading-relaxed font-medium break-keep">
             단순히 코드를 작성하는 것을 넘어, 사용자가 겪는 문제를 기술적으로 해결하는 과정에 몰입합니다.
             심미적인 디자인과 효율적인 로직 사이의 균형을 중요하게 생각합니다.
           </p>

           {/* Floating Juyoung Cube (Integrated here) */}
           <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="mt-12 w-full flex justify-center md:justify-start"
           >
              <div className="w-auto inline-flex items-center gap-3 px-6 py-3 bg-white border-2 border-primary rounded-xl shadow-[4px_4px_0px_#3B27BA] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-default">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <span className="font-bold text-primary">Juyoung Kim</span>
              </div>
           </motion.div>
        </motion.div>

        {/* Social Links */}
        <div className="flex flex-row md:flex-col gap-4 z-30 mt-8 md:mt-0 md:absolute md:bottom-12 md:right-12">
          {socialLinks.map((item, idx) => (
             <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/50 backdrop-blur-sm border border-primary/10 rounded-full hover:bg-primary hover:text-white transition-all duration-300 text-primary group shadow-sm hover:shadow-md">
                <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
             </a>
          ))}
        </div>

      </div>
    </div>
  );
}
