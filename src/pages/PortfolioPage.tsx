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

{/* 💼 EXPERIENCE SECTION */}
        {PORTFOLIO_INFO.experience && PORTFOLIO_INFO.experience.length > 0 && (
          <section id="experience" className="py-12 block">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white uppercase block pb-1 md:!text-slate-100" style={{ color: 'var(--brand-foreground, inherit)' }}>
              Experience
            </h2>
            <p className="mb-8 text-sm text-slate-600 dark:text-slate-300 mt-1 block opacity-90" style={{ color: 'var(--text-secondary, #cbd5e1)' }}>
              Professional journey and industry experience.
            </p>
            <div className="space-y-6 border-l-2 border-[var(--border)] pl-4 ml-2 block">
              {PORTFOLIO_INFO.experience.map((exp: any, index: number) => (
                <div key={exp.id || index} className="relative block group">
                  <div className="absolute -left-[22px] top-1.5 bg-[var(--brand)] h-3 w-3 rounded-full border-4 border-white dark:border-slate-950 group-hover:scale-125 transition-transform" />
                  <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--brand)] transition-all block">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white block" style={{ color: '#ffffff' }}>
                        {exp.title}
                      </h3>
                      <span className="text-xs text-slate-800 dark:text-gray-100 font-semibold bg-slate-200 dark:bg-slate-800 px-2.5 py-1 rounded-md w-fit border border-[var(--border)]" style={{ color: '#ffffff', backgroundColor: '#1e293b' }}>
                        {exp.date.start} — {exp.date.end || "Present"}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-[var(--brand)] mt-1 block">
                      {exp.company} • <span className="text-slate-400 font-normal" style={{ color: '#94a3b8' }}>{exp.location}</span>
                    </h4>
                    <p className="text-sm text-slate-300 mt-3 italic block leading-relaxed" style={{ color: '#cbd5e1' }}>
                      {exp.summary}
                    </p>
                    
                    {exp.bullets && exp.bullets.length > 0 && (
                      <ul className="mt-3 space-y-1.5 list-disc list-inside text-sm text-slate-300 block">
                        {exp.bullets.map((bullet: string, i: number) => (
                          <li key={i} className="text-slate-300" style={{ color: '#e2e8f0' }}>{bullet}</li>
                        ))}
                      </ul>
                    )}

                    {exp.tech && (
                      <div className="mt-4 flex flex-wrap gap-1.5 block">
                        {exp.tech.map((t: string, i: number) => (
                          <span 
                            key={i} 
                            className="text-xs bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-gray-100 px-2.5 py-1 rounded-full border border-[var(--border)] font-semibold transition-all duration-300 transform hover:-translate-y-0.5 hover:bg-purple-700 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white hover:border-purple-700 dark:hover:border-purple-600 cursor-default"
                            style={{ color: '#e2e8f0', backgroundColor: '#1e293b' }}
                          >
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

        {/* 📜 CERTIFICATIONS SECTION */}
        {PORTFOLIO_INFO.certifications && PORTFOLIO_INFO.certifications.length > 0 && (
          <section id="certificates" className="py-12 block">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white uppercase block pb-1" style={{ color: 'var(--brand-foreground, inherit)' }}>
              Certifications
            </h2>
            <p className="mb-8 text-sm text-slate-600 dark:text-slate-300 mt-1 block opacity-90" style={{ color: 'var(--text-secondary, #cbd5e1)' }}>
              Professional credentials and specialized training programs.
            </p>
            <div className="space-y-4 block">
              {PORTFOLIO_INFO.certifications.map((cert: any, index: number) => {
                const isDataAnalyst = cert.name.toLowerCase().includes("data analyst");
                
                return (
                  <div 
                    key={index} 
                    className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 relative overflow-hidden block ${
                      isDataAnalyst 
                        ? "bg-gradient-to-r from-[var(--surface)] to-emerald-500/[0.03] border-emerald-500 dark:border-emerald-500/50 shadow-md" 
                        : "bg-[var(--surface)] border-[var(--border)] hover:border-[var(--brand)]"
                    }`}
                  >
                    <div className="flex-1 block">
                      <div className="flex flex-wrap items-center gap-2 block">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white block" style={{ color: '#ffffff' }}>
                          {cert.name}
                        </h3>
                        {isDataAnalyst && (
                          <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2.5 py-0.5 rounded border border-emerald-500/30 font-bold tracking-wider uppercase" style={{ color: '#34d399' }}>
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-semibold text-[var(--brand)] mt-0.5 block">{cert.issuer}</p>
                      <p className="text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed block" style={{ color: '#cbd5e1' }}>
                        {cert.description}
                      </p>
                    </div>

                    <div className="text-left md:text-right shrink-0 border-t md:border-t-0 pt-3 md:pt-0 border-[var(--border)] block">
                      <span className="text-xs font-mono text-slate-300 bg-slate-200 dark:bg-slate-800 px-2.5 py-1 rounded-md border border-[var(--border)] font-medium" style={{ color: '#e2e8f0', backgroundColor: '#1e293b' }}>
                        {cert.date}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* 🎓 EDUCATION SECTION */}
        {PORTFOLIO_INFO.education && PORTFOLIO_INFO.education.length > 0 && (
          <section id="education" className="py-12 block">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white uppercase block pb-1" style={{ color: 'var(--brand-foreground, inherit)' }}>
              Education
            </h2>
            <p className="mb-6 text-sm text-slate-600 dark:text-slate-300 mt-1 block opacity-90" style={{ color: 'var(--text-secondary, #cbd5e1)' }}>
              Academic qualification and educational background.
            </p>
            
            <div className="max-w-4xl block">
              {PORTFOLIO_INFO.education
                .filter((edu: any) => edu.degree.includes("B.Sc."))
                .map((edu: any, index: number) => (
                  <div 
                    key={index} 
                    className="p-8 rounded-2xl bg-gradient-to-br from-[var(--surface)] via-[var(--surface)] to-[var(--brand)]/[0.02] border-2 border-[var(--border)] hover:border-[var(--brand)] shadow-lg transition-all duration-300 relative overflow-hidden block"
                  >
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 block">
                      <div className="block">
                        <div className="flex flex-wrap items-center gap-2 block">
                          <span className="text-[10px] font-mono tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20 font-bold uppercase" style={{ color: '#34d399' }}>
                            Degree Earned
                          </span>
                          <span className="text-[10px] font-mono tracking-widest text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/20 font-bold uppercase" style={{ color: '#c084fc' }}>
                            CGPA: 3.38
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-3 leading-tight tracking-tight block" style={{ color: '#ffffff' }}>
                          {edu.degree}
                        </h3>
                        
                        <p className="text-base font-semibold text-[var(--brand)] mt-1.5 block">
                          {edu.school}
                        </p>
                      </div>

                      <div className="shrink-0 block">
                        <span className="text-xs font-mono font-bold text-slate-300 bg-slate-200 dark:bg-slate-800 px-3 py-1.5 rounded-md border border-[var(--border)] shadow-sm" style={{ color: '#e2e8f0', backgroundColor: '#1e293b' }}>
                          {edu.date}
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 pt-5 border-t border-[var(--border)] block">
                      <p className="text-sm text-slate-300 leading-relaxed block" style={{ color: '#cbd5e1' }}>
                        Completed undergraduate program with a major in Computer Science & Engineering, building expertise across Software Quality Assurance, Data Analysis, and Frontend Technologies.
                      </p>
                    </div>

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
