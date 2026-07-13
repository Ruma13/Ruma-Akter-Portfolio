// PortfolioPage.tsx
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "../components/ThemeProvider";
import { Header } from "../components/shared/Header";
import { ProjectsGrid } from "../components/ProjectsGrid";
import { SkillsList } from "../components/SkillsList";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/shared/Footer";
import { PORTFOLIO_INFO } from "../config/portfolioData";
import { About } from "../components/About";
import { AppleHelloEnglishEffect } from "../components/HelloEffects";
import type { Project } from "../types/portfolio";
import { ProjectModal } from "../components/ProjectModal";
import { ScrollProgressBar } from "../components/shared/ScrollProgressBar";
import { ScrollToTop } from "../components/shared/ScrollToTop";
import CLIResume from "../components/CLIResume";

const PortfolioPage: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const [showCLI, setShowCLI] = useState(false);
  const [showHello, setShowHello] = useState(true);

  return (
    <ThemeProvider>
      <ScrollProgressBar />
      <Header
       links={[
          { href: "#about", label: "About" },
          { href: "#projects", label: "Projects" },
          { href: "#skills", label: "Skills" },
          { href: "#experience", label: "Experience" },
          { href: "#certificates", label: "Certifications" },
          { href: "#education", label: "Education" },
          { href: "#contact", label: "Contact" },
        ]}
        onTryCLI={() => setShowCLI(true)}
      />
      {/* CLI panel (docked / overlay) */}
      <CLIResume open={showCLI} onClose={() => setShowCLI(false)} />

      {/* About / hero: hidden while hello animation plays */}
      <AnimatePresence>
        {showHello && (
          <motion.div
            key="hello-overlay"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <AppleHelloEnglishEffect
              className="text-white"
              onAnimationComplete={() => setShowHello(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.section
        id="about"
        className="hero-panel relative h-screen min-h-screen w-full overflow-hidden"
        initial={{ opacity: 0, y: 8 }}
        animate={showHello ? { opacity: 0, y: 8 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="relative z-10 flex min-h-screen w-full items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl 2xl:max-w-7xl mx-auto">
            <About />
          </div>
        </div>
      </motion.section>

      <main className="max-w-6xl 2xl:max-w-9xl mx-auto px-6 py-15 sm:py-20 lg:py-32 relative z-20">
        <section id="projects" className="py-8">
          <h2 className="text-2xl font-semibold text-[var(--brand)]">Projects</h2>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 mt-1">
            Selected work — click a card for details.
          </p>
          <ProjectsGrid
            projects={PORTFOLIO_INFO.projects}
            onOpen={setSelected}
          />
        </section>

        <section id="skills" className="py-8">
          <h2 className="text-2xl font-semibold text-[var(--brand)]">Skills</h2>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 mt-1">
            Tools and technologies I use regularly.
          </p>
          <SkillsList skills={PORTFOLIO_INFO.skills} isBar={true} />
        </section>

{/* 💼 ১. EXPERIENCE SECTION */}
        {PORTFOLIO_INFO.experience && PORTFOLIO_INFO.experience.length > 0 && (
          <section id="experience" className="py-12 block">
            <h2 className="text-2xl font-bold tracking-wide uppercase block pb-1" style={{ color: 'var(--foreground)' }}>
              Experience
            </h2>
            <p className="mb-8 text-sm mt-1 block opacity-90" style={{ color: 'var(--muted-foreground)' }}>
              Professional journey and industry experience.
            </p>
            <div className="space-y-6 border-l-2 border-[var(--border)] pl-4 ml-2 block">
              {PORTFOLIO_INFO.experience.map((exp: any, index: number) => (
                <div key={exp.id || index} className="relative block group">
                  <div className="absolute -left-[22px] top-1.5 bg-[var(--brand)] h-3 w-3 rounded-full border-4 border-[var(--background)] group-hover:scale-125 transition-transform" />
                  <div className="p-6 rounded-2xl border transition-all duration-300 hover:border-[var(--brand)] hover:shadow-lg" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>{exp.title}</h3>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md" style={{ color: 'var(--foreground)', backgroundColor: 'var(--border)' }}>
                        {exp.date.start} — {exp.date.end || "Present"}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-[var(--brand)] mt-1">{exp.company} • <span style={{ color: 'var(--muted-foreground)' }}>{exp.location}</span></h4>
                    <p className="text-sm mt-3 italic leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>{exp.summary}</p>
                    
                    {exp.tech && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {exp.tech.map((t: string, i: number) => (
                          <span key={i} className="text-xs px-2.5 py-1 rounded-full border font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:bg-[var(--brand)] hover:text-white hover:border-[var(--brand)] cursor-default" 
                                style={{ color: 'var(--foreground)', borderColor: 'var(--border)', backgroundColor: 'var(--border)' }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 📜 ২. CERTIFICATIONS SECTION */}
        {PORTFOLIO_INFO.certifications && PORTFOLIO_INFO.certifications.length > 0 && (
          <section id="certificates" className="py-12 block">
            <h2 className="text-2xl font-bold tracking-wide uppercase block pb-1" style={{ color: 'var(--foreground)' }}>
              Certifications
            </h2>
            <p className="mb-8 text-sm mt-1 block opacity-90" style={{ color: 'var(--muted-foreground)' }}>
              Professional credentials and specialized training programs.
            </p>
            <div className="space-y-4 block">
              {PORTFOLIO_INFO.certifications.map((cert: any, index: number) => {
                const isDataAnalyst = cert.name.toLowerCase().includes("data analyst");
                return (
                  <div key={index} className={`p-6 rounded-2xl border transition-all duration-300 hover:border-[var(--brand)] ${isDataAnalyst ? "border-emerald-500 shadow-md" : ""}`} style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold" style={{ color: 'var(--foreground)' }}>{cert.name}</h3>
                        {isDataAnalyst && (
                          <span className="text-[10px] bg-emerald-500/20 text-emerald-600 px-2.5 py-0.5 rounded border border-emerald-500/30 font-bold uppercase">Featured</span>
                        )}
                    </div>
                    <p className="text-sm font-semibold text-[var(--brand)]">{cert.issuer}</p>
                    <p className="text-sm mt-2 leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>{cert.description}</p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* 🎓 ③. EDUCATION SECTION */}
        {PORTFOLIO_INFO.education && PORTFOLIO_INFO.education.length > 0 && (
          <section id="education" className="py-12 block">
            <h2 className="text-2xl font-bold tracking-wide uppercase block pb-1" style={{ color: 'var(--foreground)' }}>
              Education
            </h2>
            <div className="max-w-4xl block">
              {PORTFOLIO_INFO.education.filter((edu: any) => edu.degree.includes("B.Sc.")).map((edu: any, index: number) => (
                <div key={index} className="p-8 rounded-2xl border-2 transition-all duration-300 mt-4 hover:border-[var(--brand)] hover:shadow-lg" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}>
                  <span className="text-[10px] font-mono tracking-widest text-purple-500 bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/20 font-bold uppercase">CGPA: 3.38</span>
                  <h3 className="text-2xl font-extrabold mt-3" style={{ color: 'var(--foreground)' }}>{edu.degree} in Computer Science & Engineering</h3>
                  <p className="text-base font-semibold text-[var(--brand)] mt-1.5">{edu.school}</p>
                  <p className="text-sm mt-4 italic" style={{ color: 'var(--muted-foreground)' }}>
                    Completed undergraduate program with a major in Computer Science & Engineering, building expertise across Software Quality Assurance, Data Analysis, and Frontend Technologies.
                  </p>
                  <p className="text-xs font-mono mt-2" style={{ color: 'var(--muted-foreground)' }}>{edu.date}</p>
                </div>
              ))}
            </div>
          </section>
        )}
        <section id="contact" className="py-8">
          <h2 className="text-2xl font-semibold text-[var(--brand)]">Contact</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Tell me about your project, or just say hi.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
              <ContactForm />
            </div>

            <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] flex flex-col gap-4">
              <div>
                <div className="font-semibold">Let's collaborate</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  I'm available for freelance and contract work. My inbox is
                  open.
                </div>
              </div>
              <div className="mt-2">
                <div className="font-semibold">Quick contact</div>
                <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Email: rumapiasi13@gmail.com
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Location: Remote
                </div>
              </div>
              <div className="mt-auto">
                <div className="text-sm font-medium">Resume</div>
                <a
                  href="/"
                  className="block mt-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ScrollToTop />
      <Footer />

      <ProjectModal
        project={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
      />
    </ThemeProvider>
  );
};

export default PortfolioPage;
