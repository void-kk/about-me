import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <About />
      
      <footer className="bg-primary text-white py-8 text-center">
        <p className="text-white/60 text-sm">
          &copy; {new Date().getFullYear()} Olaolu. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

export default App;
