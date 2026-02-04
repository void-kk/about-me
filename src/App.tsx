import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <main className="w-full overflow-hidden bg-gray-50">
      <div className="bg-noise" />
      
      <Hero />
      <About />
      
      <footer className="bg-primary text-white py-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <div className="relative z-10">
           <p className="text-white/60 text-sm">
             &copy; {new Date().getFullYear()} Juyoung Kim. All rights reserved.
           </p>
        </div>
      </footer>
    </main>
  );
}

export default App;
