import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      
      {/* --- HERO SECTION --- */}
      <section className="flex flex-col items-center justify-center text-center h-[90vh] px-4">
        <div className="mb-6 relative w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg shadow-indigo-500/50">
          {/* Ganti src dengan foto profilmu nanti. Taruh file foto di folder /public */}
          <Image 
            src="/file.svg" 
            alt="Profile Picture" 
            fill 
            className="object-cover"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-linear-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text">
          I&apos;m Rey
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl">
          Informatics Student & <span className="text-indigo-400 font-semibold">Backend Developer</span>.
          Like to code with Go, Next.js.
        </p>

        <div className="flex gap-4">
          <a href="#projects" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full font-medium transition-all">
            Projects
          </a>
          <a href="https://github.com/raihanazzaidan" target="_blank" className="px-6 py-3 border border-slate-600 hover:border-slate-400 rounded-full font-medium transition-all">
            GitHub
          </a>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Project Terbaru</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Di sini nanti kita melooping data project */}
          <ProjectCard 
            title="Backend API Toko" 
            desc="Rest API menggunakan Golang Fiber dan PostgreSQL."
            tags={["Golang", "Fiber", "SQL"]}
          />
          <ProjectCard 
            title="Portfolio Website" 
            desc="Website statis menggunakan Next.js dan Tailwind CSS."
            tags={["Next.js", "React", "Tailwind"]}
          />
           <ProjectCard 
            title="Sistem IoT Smart Home" 
            desc="Prototype monitoring suhu menggunakan C++ dan ESP32."
            tags={["C++", "IoT", "Arduino"]}
          />
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-8 text-center text-slate-600 border-t border-slate-900">
        <p>© 2026 Raihan Azzaidan. Dibuat dengan Next.js</p>
      </footer>

    </main>
  );
}

// Komponen kecil untuk Kartu Project (Biar kodingan di atas gak kepanjangan)
function ProjectCard({ title, desc, tags }: { title: string, desc: string, tags: string[] }) {
  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-indigo-500 transition-all hover:-translate-y-1">
      <h3 className="text-xl font-bold mb-2 text-indigo-300">{title}</h3>
      <p className="text-slate-400 mb-4 text-sm">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="text-xs px-2 py-1 bg-slate-800 rounded text-slate-300">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}