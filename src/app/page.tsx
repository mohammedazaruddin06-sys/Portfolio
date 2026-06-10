import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="bg-slate-900 min-h-screen text-white selection:bg-amber-500/30 font-sans">
      <Hero />
      <Skills />
      <About />
      <Experience />
      <Projects />
      
      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 border-t border-slate-800 bg-slate-950">
        <p>© {new Date().getFullYear()} Mohammed Azaruddin. All rights reserved.</p>
      </footer>
    </main>
  );
}
