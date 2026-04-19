import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Linkedin, MapPin, GraduationCap, Briefcase, ExternalLink, FileText, User, Camera, Library } from "lucide-react";

const profile = {
  name: "Heather Lu",
  role: "Product Manager | Strategy & Operations",
  summary: [
    "Product Manager specializing in 0→1 hardware-software synergy—driving growth through AI recommendation, privacy-first data collaboration, and scalable trust.",
    "Outside of product building, I am an avid hiker who has trekked across the French, Italian, and Swiss Alps, and I find constant inspiration in the rugged landscapes of the Scottish Highlands."
  ],
  location: "Palo Alto, CA", // Assuming based on Stanford context
  currentEducation: "Master of Data Science, UCLA",
  currently: [
    {
      title: "Hardware Product Manager",
      company: "Sensforge",
      link: "#",
      date: "Feb 2025 - Present",
      description: "Leading subscription monetization and hardware/software PRDs. Launched AI-generated video highlight reels. Managed end-to-end hardware production lifecycle including EVT, DVT, and PVT stages to ensure manufacturing readiness and product quality."
    },
    {
      title: "Research Assistant",
      company: "Stanford Graduate School of Business (GSB)",
      link: "#",
      date: "Aug 2025 - Present",
      isResearch: true,
      objective: "Investigating user trust and reliance on LLMs in decision-making contexts.",
      methodology: [
        "Iterative literature review across HCI, psychology, and AI ethics",
        "Mapping theoretical frameworks of human–AI trust",
        "Analyzing behavioral signals of reliance, skepticism, and calibration"
      ],
      results: "Identified factors shaping user trust formation and erosion (transparency cues, error exposure, task framing) to inform human-centered AI design."
    }
  ],
  previously: [
    {
      title: "Product Manager / Founding Member",
      company: "AltruData-UCLA Startup",
      date: "Jun 2024 - May 2025",
      link: "https://www.figma.com/slides/sjBoSQ1PLd9BT2y7LGWx5m/Altrudata-pitch-deck---241007--Copy-?node-id=4-15&t=6UZq1IJKrE4YS0fI-1",
      description: "Led 0→1 Enterprise Data Clean Room platform. Productized Privacy Enhancing Technologies (PETs)."
    },
    {
      title: "Product Manager Intern",
      company: "TikTok",
      date: "Jun 2021 - Aug 2021",
      link: "https://ads.tiktok.com/business/en-US/blog/introducing-business-creative-hub-content-inspiration-at-your-fingertips",
      description: "Monetization & User Growth. Improved feature adoption by 12% through A/B testing and funnel optimization."
    },
    {
      title: "Product Manager Intern",
      company: "Shopee",
      date: "Oct 2022 - Mar 2023",
      description: "E-Commerce Video Content Recommendation. Built telemetry to monitor conversion signals."
    },
    {
      title: "Product Manager Intern",
      company: "Tencent-WeChat",
      date: "Mar 2021 - Jun 2021",
      description: "Content Recommendation. Applied ML experimentation to optimize user activation and ecosystem integrity."
    }
  ],
  education: [
    {
      degree: "Master of Data Science",
      school: "University of California, Los Angeles",
      year: "2023 - 2025"
    },
    {
      degree: "Bachelor of Marketing",
      school: "University of Strathclyde, UK",
      year: "2019 - 2023"
    }
  ],
  skills: [
    "Growth & Experimentation",
    "A/B Testing",
    "LLMs & NLP",
    "Privacy & Compliance (GDPR/CCPA)",
    "SQL & Data Pipelines",
    "Product Strategy"
  ],
  contact: {
    email: "heatherlu99@ucla.edu",
    linkedin: "https://www.linkedin.com/in/heatherluuu",
  }
};

export default function App() {
  const [activeTab, setActiveTab] = useState<"portfolio" | "direction">("direction");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="w-full md:w-96 bg-white border-r border-brand-line p-10 flex flex-col shrink-0">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="font-serif text-3xl font-bold leading-tight mb-3 tracking-tight">
            {profile.name}
          </h1>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent mb-8">
            {profile.role}
          </p>
          <div className="space-y-6">
            {profile.summary.map((paragraph, i) => (
              <p key={i} className={`text-sm leading-relaxed ${i === 0 ? 'text-brand-ink font-medium' : 'text-brand-secondary italic border-l-2 border-brand-accent/20 pl-6'}`}>
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] uppercase tracking-widest font-bold text-brand-secondary">Navigation</span>
            <div className="h-px flex-1 bg-brand-line opacity-50"></div>
          </div>
          <div className="space-y-3">
            <button 
              onClick={() => setActiveTab("direction")}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer group relative overflow-hidden ${
                activeTab === "direction" 
                  ? "bg-brand-accent text-white shadow-lg shadow-brand-accent/20" 
                  : "bg-white text-brand-secondary hover:bg-brand-accent/5 hover:text-brand-accent border border-brand-line shadow-sm"
              }`}
            >
              {activeTab !== "direction" && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: [0.1, 0.3, 0.1],
                    scale: [0.8, 1.2, 0.8] 
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-brand-accent rounded-lg pointer-events-none"
                />
              )}
              <div className="flex items-center gap-3 whitespace-nowrap relative z-10">
                <FileText size={16} className={activeTab === "direction" ? "text-white" : "group-hover:text-brand-accent"} />
                Product Direction
              </div>
              <div className="flex items-center gap-2 relative z-10">
                {activeTab !== "direction" && (
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="flex items-center gap-1 text-brand-accent"
                  >
                    <span className="text-[10px] uppercase font-bold tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">Explore</span>
                    <ExternalLink size={12} className="opacity-60" />
                  </motion.div>
                )}
                {activeTab === "direction" && (
                  <motion.div layoutId="activeDot" className="w-1.5 h-1.5 bg-white rounded-full shadow-sm shrink-0" />
                )}
              </div>
            </button>
            <button 
              onClick={() => setActiveTab("portfolio")}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer group relative overflow-hidden ${
                activeTab === "portfolio" 
                  ? "bg-brand-accent text-white shadow-lg shadow-brand-accent/20" 
                  : "bg-white text-brand-secondary hover:bg-brand-accent/5 hover:text-brand-accent border border-brand-line shadow-sm"
              }`}
            >
              {activeTab !== "portfolio" && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: [0.1, 0.3, 0.1],
                    scale: [0.8, 1.2, 0.8] 
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-brand-accent rounded-lg pointer-events-none"
                />
              )}
              <div className="flex items-center gap-3 whitespace-nowrap relative z-10">
                <User size={16} className={activeTab === "portfolio" ? "text-white" : "group-hover:text-brand-accent"} />
                Experience Profile
              </div>
              <div className="flex items-center gap-2 relative z-10">
                {activeTab !== "portfolio" && (
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="flex items-center gap-1 text-brand-accent"
                  >
                    <span className="text-[10px] uppercase font-bold tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">Explore</span>
                    <ExternalLink size={12} className="opacity-60" />
                  </motion.div>
                )}
                {activeTab === "portfolio" && (
                  <motion.div layoutId="activeDot" className="w-1.5 h-1.5 bg-white rounded-full shadow-sm shrink-0" />
                )}
              </div>
            </button>
          </div>
          <p className="mt-4 text-[11px] text-brand-accent/60 italic font-medium">Dive into deep-case studies or view my professional experience profile.</p>
        </div>

        <div className="mt-auto space-y-1">
          <div className="nav-item">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-brand-secondary" />
              Location
            </div>
            <span>{profile.location}</span>
          </div>
          <div className="nav-item">
            <div className="flex items-center gap-2">
              <GraduationCap size={14} className="text-brand-secondary" />
              Education
            </div>
            <span>MSDS, UCLA</span>
          </div>
          <div className="nav-item">
            <div className="flex items-center gap-2">
              <Briefcase size={14} className="text-brand-secondary" />
              Focus
            </div>
            <span>Hardware & Software</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-14 bg-brand-bg overflow-y-auto">
        <AnimatePresence mode="wait">
          {activeTab === "portfolio" ? (
            <motion.div
              key="portfolio"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, x: 10 }}
              variants={containerVariants}
              className="max-w-3xl mx-auto space-y-12"
            >
              {/* Current Experience Section */}
              <section>
                <span className="section-label">Current Professional Focus</span>
                <div className="space-y-6">
                  {profile.currently.map((item, idx) => (
                    <motion.div key={idx} variants={itemVariants} className="exp-card">
                      <div className="flex justify-between items-start mb-5">
                        <div>
                          <h2 className="font-serif text-2xl text-brand-ink flex items-center gap-2">
                            {item.company === "Sensforge" && <Camera size={20} className="text-brand-accent shrink-0" />}
                            {item.company.includes("Stanford") && <Library size={20} className="text-brand-accent shrink-0" />}
                            {item.title}
                            {item.link && item.link !== "#" && (
                              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:opacity-70 transition-opacity">
                                <ExternalLink size={18} />
                              </a>
                            )}
                          </h2>
                          <div className="text-brand-accent font-medium mt-1">{item.company}</div>
                        </div>
                        <span className="text-[13px] text-brand-secondary">{item.date}</span>
                      </div>

                      {item.isResearch && (
                        <>
                          <div className="objective-box">
                            <p className="text-[15px] italic text-[#444] leading-relaxed">
                              <strong>Objective:</strong> {item.objective}
                            </p>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 text-sm">
                            <div>
                              <h4 className="text-[12px] uppercase font-bold text-brand-ink mb-3 tracking-wider">Methodology</h4>
                              <ul className="space-y-2 text-brand-secondary list-disc pl-4">
                                {item.methodology?.map((m, i) => (
                                  <li key={i}>{m}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-[12px] uppercase font-bold text-brand-ink mb-3 tracking-wider">Key Results</h4>
                              <p className="text-brand-secondary leading-relaxed italic">
                                {item.results}
                              </p>
                            </div>
                          </div>
                        </>
                      )}

                      {!item.isResearch && item.description && (
                        <p className="text-sm text-brand-secondary leading-relaxed mt-4">
                          {item.description}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Previous Experience */}
              <section>
                <span className="section-label">Previous Impact</span>
                <div className="grid grid-cols-1 gap-4">
                  {profile.previously.map((item, idx) => (
                    <motion.div key={idx} variants={itemVariants} className="bg-white border border-brand-line rounded-lg p-6 flex flex-col md:flex-row justify-between md:items-center gap-2">
                      <div>
                        <h3 className="font-serif text-lg text-brand-ink flex items-center gap-2">
                          {item.title}
                          {item.link && item.link !== "#" && (
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:opacity-70 transition-opacity">
                              <ExternalLink size={14} />
                            </a>
                          )}
                        </h3>
                        <div className="text-sm text-brand-accent">{item.company}</div>
                      </div>
                      <span className="text-[12px] text-brand-secondary whitespace-nowrap">{item.date}</span>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Education Section */}
              <section>
                <span className="section-label">Education</span>
                <div className="grid grid-cols-1 gap-4">
                  {profile.education.map((item, idx) => (
                    <motion.div key={idx} variants={itemVariants} className="bg-white border border-brand-line rounded-lg p-5 flex flex-col md:flex-row justify-between md:items-center gap-2">
                      <div>
                        <h3 className="font-serif text-brand-ink text-lg">{item.degree}</h3>
                        <div className="text-sm text-brand-accent font-medium">{item.school}</div>
                      </div>
                      <span className="text-[12px] text-brand-secondary">{item.year}</span>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Footer Contact */}
              <footer className="pt-10 border-t border-brand-line flex flex-wrap gap-6">
                <a 
                  href={`mailto:${profile.contact.email}`}
                  className="text-xs font-semibold text-brand-ink hover:text-brand-accent transition-colors flex items-center gap-2"
                >
                  <Mail size={14} /> Email Me
                </a>
                <a 
                  href={profile.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-brand-ink hover:text-brand-accent transition-colors flex items-center gap-2"
                >
                  <Linkedin size={14} /> LinkedIn
                </a>
              </footer>
            </motion.div>
          ) : (
            <motion.div
              key="direction"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="max-w-3xl mx-auto space-y-24"
            >
              {/* Internal Strategy Navigation */}
              <nav className="sticky top-0 z-20 bg-brand-bg/95 backdrop-blur-md py-6 border-b border-brand-line flex flex-wrap gap-x-8 gap-y-4">
                {[
                  { id: '01', title: 'Data Collaboration' },
                  { id: '02', title: 'Content Recommendation' },
                  { id: '03', title: 'Content Moderation' },
                  { id: '04', title: 'Hardware Development' },
                  { id: '05', title: 'AI Video' }
                ].map((item) => (
                  <a 
                    key={item.id} 
                    href={`#strategy-${item.id}`} 
                    className="group flex flex-col gap-1 transition-all"
                  >
                    <span className="text-[10px] font-bold tracking-[0.2em] text-brand-secondary group-hover:text-brand-accent">STRATEGY {item.id}</span>
                    <span className="text-xs font-serif italic text-brand-ink group-hover:text-brand-accent border-b border-transparent group-hover:border-brand-accent transition-all">{item.title}</span>
                  </a>
                ))}
              </nav>

              {/* Direction: altruData */}
              <article id="strategy-01">
                <div className="flex items-center gap-3 mb-4">
                  <span className="section-label mb-0">Strategy 01</span>
                  <div className="h-px flex-1 bg-brand-line opacity-30"></div>
                </div>
                
                <h2 className="font-serif text-4xl mb-6 text-brand-ink">Data Collaboration Relation: Bridging Silos with AI</h2>
                
                {/* Strategy Background */}
                <section className="bg-brand-accent/5 p-8 rounded-3xl border border-brand-accent/10 relative overflow-hidden mb-12">
                  <div className="relative z-10 space-y-4">
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-brand-accent mb-2">Context & Motivation</h3>
                    <h4 className="font-serif text-2xl text-brand-ink leading-tight">Navigating the Post-Cookie Privacy Frontier</h4>
                    <p className="text-sm opacity-80">
                      In the wake of third-party cookie deprecation and global privacy regulations like GDPR and CCPA, traditional data sharing is broken. I architected this strategy to bridge data silos through secure first-party collaboration that remains fully compliant while unlocking mutual value.
                    </p>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                </section>
                
                <div className="bg-brand-accent/5 border-l-4 border-brand-accent p-8 mb-10">
                  <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-brand-accent mb-4">Our Mission</h3>
                  <p className="font-serif text-2xl italic text-brand-ink leading-tight">
                    "Data collaboration as effortless as breathing. Bridge data silos to collaborate, grow, and create mutual value with AI."
                  </p>
                </div>

                <div className="prose prose-sm text-brand-secondary leading-relaxed space-y-6">
                  <p className="text-lg text-brand-ink font-medium">
                    The <strong>Data Clean House</strong> is a purpose-built infrastructure for trusted first-party data collaboration and mutual value generation in the age of 3P cookie deprecation.
                  </p>

                  <div className="my-12 space-y-6">
                    <div className="p-8 bg-gray-50 border border-brand-line rounded-2xl flex flex-col md:flex-row items-center gap-10">
                      <div className="flex-1 space-y-4">
                        <h4 className="font-serif text-xl text-brand-ink">The Collaboration Loop</h4>
                        <p className="text-xs">A closed-loop system where encrypted data assets are processed in TEEs, privacy-filtered via DP, and output as high-value insights without raw data movement.</p>
                      </div>
                      <img 
                        src="https://picsum.photos/seed/workflow_logic/400/300" 
                        alt="Workflow Diagram"
                        className="w-full md:w-64 rounded-lg shadow-sm grayscale opacity-60"
                      />
                    </div>
                    <div className="relative group">
                      <img 
                        src="https://picsum.photos/seed/altru_logic/1200/600" 
                        alt="Data Clean House Logic"
                        className="rounded-xl border border-brand-line w-full shadow-lg grayscale hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-brand-ink/5 group-hover:bg-transparent transition-colors rounded-xl flex items-center justify-center">
                        <span className="text-white text-xs font-bold uppercase tracking-[0.3em] bg-brand-accent px-4 py-2 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">Logical Architecture</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-6 bg-white border border-brand-line rounded-lg">
                        <h4 className="text-brand-accent font-bold text-xs uppercase tracking-wider mb-2">Thrust A</h4>
                        <p className="text-xs text-brand-ink"><strong>Data Collaboration</strong>: Seamlessly joining datasets without direct exposure.</p>
                      </div>
                      <div className="p-6 bg-white border border-brand-line rounded-lg">
                        <h4 className="text-brand-accent font-bold text-xs uppercase tracking-wider mb-2">Thrust B</h4>
                        <p className="text-xs text-brand-ink"><strong>Differential Privacy</strong>: Mathematical noise injection for guaranteed re-id protection.</p>
                      </div>
                      <div className="p-6 bg-white border border-brand-line rounded-lg">
                        <h4 className="text-brand-accent font-bold text-xs uppercase tracking-wider mb-2">Thrust C</h4>
                        <p className="text-xs text-brand-ink"><strong>Confidential Computing</strong>: Hardware-secure TEE environments for processing.</p>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-brand-ink mt-12 mb-4">Growth Strategy: From Niche to Global</h3>
                  <p>
                    By simplifying first-party data sharing, we enable a phased growth trajectory. We start with <strong>Digital Marketing</strong> where ROI is immediate, moving into <strong>Open Source Communities</strong>, and eventually scaling to a global <strong>Data Monetization</strong> ecosystem where data becomes an at-scale asset valuation.
                  </p>
                </div>
              </article>

              {/* Direction: Content Recommendation */}
              <article id="strategy-02">
                <div className="flex items-center gap-3 mb-4">
                  <span className="section-label mb-0">Strategy 02</span>
                  <div className="h-px flex-1 bg-brand-line opacity-30"></div>
                </div>

                <h2 className="font-serif text-4xl mb-6 text-brand-ink">Content Recommendation: ML-Driven Demographic Rejuvenation</h2>
                
                {/* Strategy Background */}
                <section className="bg-brand-accent/5 p-8 rounded-3xl border border-brand-accent/10 relative overflow-hidden mb-12">
                  <div className="relative z-10 space-y-4">
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-brand-accent mb-2">Context & Motivation</h3>
                    <h4 className="font-serif text-2xl text-brand-ink leading-tight">Beyond Echo Chambers: Engineering Product Vitality</h4>
                    <p className="text-sm opacity-80">
                      Platform stagnation often begins with "demographic lock-in"—where algorithms over-optimize for an aging core at the expense of future growth. My motivation was to bridge this gap, using ML not just for accuracy, but as a strategic tool to rejuvenate user bases and ensure long-term ecosystem health.
                    </p>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                </section>
                
                <div className="prose prose-sm text-brand-secondary leading-relaxed space-y-8">
                  <p>
                    My journey through <strong>RedNote (Xiaohongshu)</strong>, <strong>Shopee</strong>, and <strong>Tencent</strong> centered on architecting recommendation engines that don't just match content, but drive strategic user activation. The most significant challenge was the <strong>WeChat Channels</strong> growth phase.
                  </p>

                  <div className="relative my-8">
                    <img 
                      src="https://picsum.photos/seed/ml_rec/1200/500" 
                      alt="Recommendation Neural Logic"
                      className="rounded-xl border border-brand-line shadow-md opacity-80"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/90 p-4 rounded-lg shadow-sm border border-brand-line max-w-xs">
                      <h4 className="text-[10px] font-bold text-brand-accent uppercase tracking-widest mb-1">Model Architecture</h4>
                      <p className="text-[11px] text-brand-ink leading-tight">Leveraging Deep FM and Multi-Task Learning (MTL) to balance CTR vs. Long-term Retention.</p>
                    </div>
                  </div>

                  <div className="bg-brand-ink text-white p-8 rounded-xl shadow-xl">
                    <h3 className="font-serif text-2xl mb-6 text-brand-accent italic">The "Aging Feed" Crisis</h3>
                    <p className="opacity-80 mb-6">
                      Initially, WeChat Channels' user base biased heavily towards older demographics. Our goal was to leverage <strong>ML Rankers</strong> to pivot the content discovery toward quality youth segments.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="border border-white/10 p-6 rounded-lg bg-white/5">
                        <h4 className="text-brand-accent font-bold text-xs mb-3 uppercase tracking-widest">Phase 1: Feature Injection</h4>
                        <p className="text-xs opacity-70">Injecting hard-coded age features into the ranking model. Results were static and lacked cross-interest resonance.</p>
                      </div>
                      <div className="border border-brand-accent/30 p-6 rounded-lg bg-brand-accent/10 shadow-inner">
                        <h4 className="text-brand-accent font-bold text-xs mb-3 uppercase tracking-widest">Phase 2: Relational Affinity</h4>
                        <p className="text-xs opacity-90">Replacing age filters with <strong>Latent Affinity Vectors</strong>, identifying "Bridge Content" that appeals across age cohorts but retains youth-specific signatures.</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                    <div className="p-6 border border-brand-line rounded-xl">
                      <h4 className="font-bold text-brand-ink text-xs mb-2">1. Data Labeling</h4>
                      <p className="text-xs">Implemented a high-fidelity <strong>Human-in-the-loop Labeling</strong> system to define 'Youth Vitality' markers beyond simple tags.</p>
                    </div>
                    <div className="p-6 border border-brand-line rounded-xl">
                      <h4 className="font-bold text-brand-ink text-xs mb-2">2. ML Modeling</h4>
                      <p className="text-xs">Utilized <strong>Graph Neural Networks (GNN)</strong> to map community clusters and identify influential content nodes for rejuvenation.</p>
                    </div>
                    <div className="p-6 border border-brand-line rounded-xl">
                      <h4 className="font-bold text-brand-ink text-xs mb-2">3. Human Review</h4>
                      <p className="text-xs">Expert editorial review to calibrate ML weights, ensuring automated growth doesn't compromise platform aesthetic.</p>
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-brand-ink mt-12 mb-4">The Result Matrix</h3>
                  <p>
                    The breakthrough came when we optimized the <strong>Category-to-Tag-to-Age</strong> mapping. Instead of hard-coding age groups, we used A/B testing to identify content categories that acted as "bridge content." By fine-tuning the weights between specific video tags (e.g., 'visual-ASMR', 'indie-gaming') and inferred youth age signatures, we successfully shifted the distribution balance.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6">
                    <div className="p-6 bg-gray-50 border border-brand-line rounded-lg">
                      <h5 className="font-bold text-brand-ink mb-2">The Result</h5>
                      <p className="text-3xl font-serif text-brand-accent">+18%</p>
                      <p className="text-xs text-brand-secondary">Youth User Engagement</p>
                    </div>
                    <div className="p-6 bg-gray-50 border border-brand-line rounded-lg">
                      <h5 className="font-bold text-brand-ink mb-2">Precision Lift</h5>
                      <p className="text-3xl font-serif text-brand-accent">+12%</p>
                      <p className="text-xs text-brand-secondary">Tag-to-Click Confidence</p>
                    </div>
                  </div>
                </div>
              </article>

              {/* Direction: Content Moderation at RedNote */}
              <article id="strategy-03">
                <div className="flex items-center gap-3 mb-4">
                  <span className="section-label mb-0">Strategy 03</span>
                  <div className="h-px flex-1 bg-brand-line opacity-30"></div>
                </div>

                <h2 className="font-serif text-4xl mb-6 text-brand-ink">Content Moderation Strategy: AI & Machine Learning for Scalable Trust</h2>
                
                {/* Strategy Background */}
                <section className="bg-brand-accent/5 p-8 rounded-3xl border border-brand-accent/10 relative overflow-hidden mb-12">
                  <div className="relative z-10 space-y-4">
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-brand-accent mb-2">Context & Motivation</h3>
                    <h4 className="font-serif text-2xl text-brand-ink leading-tight">Trust at Scale: The Governance Challenge</h4>
                    <p className="text-sm opacity-80">
                      In the rapid transition from content platform to community, trust is a fragile asset. My goal was to move moderation from a reactive cost center to a proactive trust engine, leveraging AI to handle the nuances of sensitive verticals like medical aesthetics where safety is paramount.
                    </p>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                </section>
                
                <div className="prose prose-sm text-brand-secondary leading-relaxed space-y-8">
                  <p>
                    At <strong>RedNote (Xiaohongshu)</strong>, I lead the integration of <strong>LLM-as-a-Judge</strong> and custom <strong>CV Models</strong> to solve one of the most complex governance problems: distinguishing medical-grade clinical procedures from consumer-grade cosmetics.
                  </p>

                  <div className="relative my-10 border border-brand-line rounded-2xl overflow-hidden bg-brand-bg">
                    <div className="flex flex-col md:flex-row">
                      <img src="https://picsum.photos/seed/ml_moderation/800/600" alt="ML Risk Mapping" className="w-full md:w-1/2 object-cover grayscale" />
                      <div className="p-8 flex flex-col justify-center gap-4 bg-brand-ink text-white md:w-1/2">
                        <h4 className="text-brand-accent font-bold text-[10px] uppercase tracking-widest">ML Decision Engine</h4>
                        <p className="text-xs opacity-70 leading-relaxed italic">By combining text-based sentiment analysis with visual feature extraction, we reduced manual audit volume by 65% while increasing recall for medical violations by 40%.</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                    <div className="p-6 bg-red-50 border border-red-100 rounded-xl">
                      <h4 className="text-red-800 font-bold text-xs uppercase tracking-wider mb-2">The AI Blindspot</h4>
                      <p className="text-xs text-red-900/70">LLMs often fail on <strong>Visual-Context Conflation</strong>. A high-end serum photographed with professional lighting can trigger a 'CLINICAL' classification if the prompt isn't calibrated for product vs. procedure.</p>
                    </div>
                    <div className="p-6 bg-brand-accent/5 border border-brand-accent/10 rounded-xl">
                      <h4 className="text-brand-accent font-bold text-xs uppercase tracking-wider mb-2">Machine Learning Fix</h4>
                      <p className="text-xs text-brand-ink/70">We fine-tuned our judge model on a <strong>Contrastive Dataset</strong>, specifically targeting the "skincare/medical" boundary with synthetic negatives.</p>
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-brand-ink mt-12 mb-4 italic">The Architecture of Trust: A Tri-Layer Strategy</h3>
                  
                  <div id="trust-layers" className="space-y-12">
                    {/* Layer 1 */}
                    <div className="flex gap-6 items-start">
                      <div className="w-10 h-10 rounded-full bg-brand-ink text-white flex items-center justify-center shrink-0 font-serif">1</div>
                      <div>
                        <h4 className="font-bold text-brand-ink mb-2">Identity & Qualification (资质认证)</h4>
                        <p>We introduced a hard-gate for account qualifications. Medical claims are only permissible for verified institutions or professionals, instantly filtering out unqualified 0→1 accounts mimicking clinical authority.</p>
                      </div>
                    </div>

                    {/* Layer 2 */}
                    <div className="flex gap-6 items-start">
                      <div className="w-10 h-10 rounded-full bg-brand-ink text-white flex items-center justify-center shrink-0 font-serif">2</div>
                      <div>
                        <h4 className="font-bold text-brand-ink mb-2">Visual Action Context (行为识别)</h4>
                        <p>To solve the "Cream vs. Needle" dilemma, we optimized the computer vision model to detect <strong>Visual Action Cues</strong>. Does the image contain a medical setting, clinical tools, or a procedural 'action'? Identifying the presence of an operation (操作行为) vs. a static product shot reduced confusion between skincare and surgery.</p>
                      </div>
                    </div>

                    <img 
                      src="https://picsum.photos/seed/moderation_flow/1200/500" 
                      alt="Risk Control Workflow"
                      className="rounded-xl border border-brand-line w-full shadow-md my-6 grayscale"
                    />

                    {/* Layer 3 */}
                    <div className="flex gap-6 items-start">
                      <div className="w-10 h-10 rounded-full bg-brand-ink text-white flex items-center justify-center shrink-0 font-serif">3</div>
                      <div>
                        <h4 className="font-bold text-brand-ink mb-2">Hybrid Loop: The "Gray Area" Handler</h4>
                        <p>We recognized that LLMs have limits in contextual nuance (con-condition). For cases where the model confidence score fell into a predefined 'ambiguous' range, we implemented an automated <strong>Human Review Pipeline</strong>. This human-in-the-loop approach ensured that edge cases—like professional-grade skincare—were not accidentally silenced by overly aggressive automation.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-brand-accent/5 p-8 rounded-xl border border-brand-accent/10 italic text-center mt-12">
                    "By decoupling 'Product' from 'Procedure,' we achieved a balance where safety and growth coexist, ensuring the community remains inspired without being misled."
                  </div>
                </div>
              </article>

              {/* Direction: Sensforge Hardware Strategy */}
              <article id="strategy-04">
                <div className="flex items-center gap-3 mb-4">
                  <span className="section-label mb-0">Strategy 04</span>
                  <div className="h-px flex-1 bg-brand-line opacity-30"></div>
                </div>

                <h2 className="font-serif text-4xl mb-6 text-brand-ink">Integrated Hardware & Software: Strategic Lifecycle & AI Energy Optimization</h2>
                
                {/* Strategy Background */}
                <section className="bg-brand-accent/5 p-8 rounded-3xl border border-brand-accent/10 relative overflow-hidden mb-12">
                  <div className="relative z-10 space-y-4">
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-brand-accent mb-2">Context & Motivation</h3>
                    <h4 className="font-serif text-2xl text-brand-ink leading-tight">Energy Sovereignty in the IoT Era</h4>
                    <p className="text-sm opacity-80">
                      The biggest friction point in smart home adoption is maintenance fatigue. To build a truly user-centric security product, we had to solve the battery-latency paradox. My focus was on creating a hardware-software synergy that prioritizes user peace of mind over technical convenience. I developed a security camera from zero to one, aiming to protect people's daily lives and strategically expand our category reach to capture broader demographics and larger market opportunities.
                    </p>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                </section>
                
                <div className="prose prose-sm text-brand-secondary leading-relaxed space-y-8">
                  <p>
                    At <strong>Sensforge</strong>, I spearheaded the development of the "Charge Less" Camera series. The objective was clear yet demanding: achieve industry-leading battery longevity without compromising the zero-latency response required for a premium security experience.
                  </p>

                  <div className="bg-brand-bg border border-brand-line p-8 rounded-xl my-10">
                    <h3 className="font-serif text-xl mb-4 text-brand-ink">Hardware Lifecycle Management</h3>
                    <div className="flex flex-wrap gap-4">
                      {['EVT', 'DVT', 'PVT'].map(stage => (
                        <div key={stage} className="px-4 py-2 bg-brand-accent/5 border border-brand-accent/20 rounded text-xs font-bold text-brand-accent">
                          {stage} Phase
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-xs opacity-70">
                      I personally managed the transition through Engineering Verification (EVT), Design Verification (DVT), and Production Verification (PVT), coordinating with cross-functional teams to resolve manufacturing yield and assembly constraints.
                    </p>
                  </div>

                  <h3 className="font-serif text-2xl text-brand-ink mt-12 mb-4 italic">The ECN Strategy: Balancing Battery & Sensor</h3>
                  <p>
                    Through a series of <strong>Engineering Change Notices (ECN)</strong>, I optimized the power-hungry sensor-battery relationship. The critical bottleneck was the 'Idle-to-Active' transition. Traditional wake-up triggers were either too sensitive (draining battery) or too sluggish (missing the event).
                  </p>

                  <div className="bg-brand-ink text-white p-8 rounded-xl shadow-xl my-10">
                    <h4 className="text-brand-accent font-bold text-xs uppercase tracking-widest mb-4">Innovation: AI-Generated Wake-up Logic</h4>
                    <p className="text-sm opacity-80 mb-6">
                      Instead of static thresholding, we designed an <strong>AI-generated wake-up model</strong> that adjusts sensor sampling frequency based on environmental context and historical activation patterns.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="p-4 bg-white/5 rounded border border-white/10">
                        <span className="block font-bold text-brand-accent mb-1">Old Logic</span>
                        <p className="opacity-60 italic">Fixed heartbeat polling at 10Hz regardless of motion context.</p>
                      </div>
                      <div className="p-4 bg-brand-accent/20 rounded border border-brand-accent/40">
                        <span className="block font-bold text-brand-accent mb-1">Adaptive Logic</span>
                        <p className="opacity-90 italic">Context-aware polling that ramps from 1Hz to 100Hz upon predictive intent detection.</p>
                      </div>
                    </div>
                  </div>

                  <p>
                    This strategic pivot in firmware logic, combined with hardware-level ECN refinements, effectively extended active battery life by 40% while maintaining a sub-200ms trigger latency. This successfully transitioned the product from a lab prototype to a market-ready PVT build.
                  </p>
                </div>
              </article>

              {/* Direction: AI Video Strategy */}
              <article id="strategy-05" className="pb-24">
                <div className="flex items-center gap-3 mb-4">
                  <span className="section-label mb-0">Strategy 05</span>
                  <div className="h-px flex-1 bg-brand-line opacity-30"></div>
                </div>

                <h2 className="font-serif text-4xl mb-6 text-brand-ink">AI Video: Turning Raw Feeds into Shared Experiences</h2>
                
                <div className="prose prose-sm text-brand-secondary leading-relaxed space-y-16">
                  {/* Strategy Background */}
                  <section className="bg-brand-accent/5 p-8 rounded-3xl border border-brand-accent/10 relative overflow-hidden">
                    <div className="relative z-10 space-y-4">
                      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-brand-accent mb-2">Context & Motivation</h3>
                      <h4 className="font-serif text-2xl text-brand-ink leading-tight">From Passive Security to Active Social Slicing</h4>
                      <p className="text-sm opacity-80">
                        Traditional security cameras are "passive observers"—valuable only during emergencies. To break the utility barrier, I redefined the camera as a <strong>content creator</strong>. By implementing AI-generated video slicing directly on the edge (the camera), we transform raw, mundane footage into continuous, cinematic "Vlogs". This creates a powerful social currency, encouraging users to share their lives through our hardware and transforming a utility product into a self-propelling growth engine via social distribution.
                      </p>
                    </div>
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  </section>

                  {/* Part 1: Model Selection & Flywheel (Moved from IV) */}
                  <section className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                      <div className="flex-1 space-y-6">
                        <h3 className="font-serif text-2xl text-brand-ink italic">I. Model Selection & Data Flywheel</h3>
                        <p>
                          Our selection strategy prioritizes a hybrid architecture: <strong>CV Ranking</strong> for frame-level filtering, <strong>LLMs</strong> for narrative structuring, and <strong>Diffusion</strong> for high-fidelity rendering.
                        </p>
                        <div className="space-y-4">
                          <p className="text-xs"><strong>Model Stack:</strong> CV Ranking + L-Large Model + Diffusion.</p>
                          <div className="grid grid-cols-2 gap-4 text-[10px] font-mono">
                            <div className="bg-white p-3 border border-brand-line shadow-sm">
                              <span className="block font-bold text-brand-accent mb-1">Ranking Metrics</span>
                              NDCG, MAP, Precision, Recall
                            </div>
                            <div className="bg-white p-3 border border-brand-line shadow-sm">
                              <span className="block font-bold text-brand-accent mb-1">Gen Metrics</span>
                              FVD, CLIP Score, Human Pref.
                            </div>
                          </div>
                        </div>
                      </div>
                      <img 
                        src="https://picsum.photos/seed/model_logic/800/600" 
                        alt="Model Selection Logic Diagram" 
                        className="w-full md:w-1/2 rounded-2xl shadow-xl border border-brand-line"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <p className="text-xs border-l-2 border-brand-accent pl-4 italic">
                      Flywheel Strategy: User data flows back into manual labeling and error tagging (anomaly detection), which triggers AB tests for model fine-tuning, creating a continuous improvement loop.
                    </p>
                  </section>

                  {/* Part 2: The Five-Step Processing Pipeline (Moved from III) */}
                  <section className="space-y-8">
                    <h3 className="font-serif text-2xl text-brand-ink italic">II. The Five-Step Product Generation Pipeline</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                      <img 
                        src="https://picsum.photos/seed/product_flow/800/800" 
                        alt="Product Logic & Generation Flow" 
                        className="rounded-2xl shadow-lg border border-brand-line"
                        referrerPolicy="no-referrer"
                      />
                      <div className="relative pl-8 border-l border-brand-line space-y-10 py-2">
                        {[
                          { title: "01. Video Understanding", desc: "Object Detection, Scene Detection, and Action Recognition via core CV models." },
                          { title: "02. Semantic Layer", desc: "Event Extraction and Importance Scoring via Machine Learning and Large Models." },
                          { title: "03. Storyline Generation", desc: "Sequence optimization. Mapping raw extracted events into a coherent storyboard." },
                          { title: "04. Video Generation", desc: "Clip Selection, Diffusion-based inpainting, and Clipstation-inspired rendering." },
                          { title: "05. Creative Finishing", desc: "AI-synchronized music, dynamic subtitles, and cinematic effect overlays." }
                        ].map((step, i) => (
                          <div key={i} className="relative">
                            <div className="absolute -left-[37px] top-0 w-4 h-4 rounded-full bg-brand-accent border-4 border-white"></div>
                            <h4 className="font-bold text-brand-ink mb-1">{step.title}</h4>
                            <p className="text-xs leading-relaxed opacity-80">{step.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Part 3: Golden Set (Integration) */}
                  <section className="bg-brand-ink text-white p-10 rounded-3xl space-y-8">
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                      <div className="flex-1 space-y-4">
                        <h3 className="font-serif text-2xl text-brand-accent italic tracking-tight">III. Establishing the Golden Set</h3>
                        <p className="text-sm opacity-80 leading-relaxed">
                          Before scaling, we curated a <strong>Golden Set</strong> containing 50-100 validated use cases. This high-density dataset serves as our North Star, allowing us to validate the simplest baseline pipeline before iterating on high-complexity model branches.
                        </p>
                      </div>
                      <img 
                        src="https://picsum.photos/seed/baseline/400/400" 
                        alt="Baseline Pipeline & Golden Set logic" 
                        className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-brand-accent/30 grayscale hover:grayscale-0 transition-all shadow-2xl"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </section>

                  {/* Part 4: Product Evaluation (Moved from I) */}
                  <section className="space-y-8">
                    <h3 className="font-serif text-2xl text-brand-ink italic">IV. Evaluation & Multidimensional Assessment</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                      <img 
                        src="https://picsum.photos/seed/ai_evaluation/800/600" 
                        alt="AI Evaluation Logic & Metrics" 
                        className="rounded-2xl shadow-xl border border-brand-line order-1 md:order-2"
                        referrerPolicy="no-referrer"
                      />
                      <div className="space-y-6 order-2 md:order-1">
                        <div className="grid grid-cols-1 gap-4">
                          <div className="p-4 bg-white border border-brand-line rounded-lg">
                            <h4 className="text-xs font-black uppercase text-brand-accent mb-2">Hard Metrics (LLM Judge)</h4>
                            <p className="text-[11px] opacity-70">Story Coherence, Engagement Potential, Diversity, and Human-likeness.</p>
                          </div>
                          <div className="p-4 bg-brand-accent/5 border border-brand-accent/20 rounded-lg">
                            <h4 className="text-xs font-black uppercase text-brand-accent mb-2">Human Evaluation (1-5 Rubric)</h4>
                            <p className="text-[11px] opacity-80 italic">"Would you share this? Is it story-driven? Does it look manually edited?"</p>
                          </div>
                        </div>
                        <p className="text-xs">
                          Operational goals: Monitor CTR, Re-generation rate, Completion rate, and Save/Share metrics as real-time feedback loops.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Part 5: User Segmentation (Moved from II) */}
                  <section className="space-y-8">
                    <h3 className="font-serif text-2xl text-brand-ink italic">V. User Segmentation & Precision Tuning</h3>
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                      <div className="flex-1 space-y-6">
                        <p>
                          Our "Error Tolerance" and generation style are dynamically tuned based on user intent and content vertical. A traveler seeking memory preservation has different criteria than a creator seeking social engagement.
                        </p>
                        <div className="space-y-3">
                          <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-accent">Segmented Logic</h4>
                          <div className="flex flex-wrap gap-2">
                            {['Casual User', 'Creator', 'Professional'].map(t => <span key={t} className="px-3 py-1 bg-brand-ink text-white text-[9px] rounded-full uppercase tracking-tighter">{t}</span>)}
                          </div>
                          <div className="flex flex-wrap gap-2">
                             {['Traveler', 'Daily Life', 'Sports'].map(v => <span key={v} className="px-3 py-1 border border-brand-line text-brand-ink text-[9px] rounded-full uppercase tracking-tighter">{v}</span>)}
                          </div>
                        </div>
                      </div>
                      <img 
                        src="https://picsum.photos/seed/user_segment/800/600" 
                        alt="User Segmentation Logic Map" 
                        className="w-full md:w-1/2 rounded-2xl shadow-xl border border-brand-line"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </section>
                </div>
              </article>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Minimal Floating Strategy Nav */}
      <AnimatePresence>
        {activeTab === "direction" && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] flex flex-col items-center gap-5"
          >
            {/* Vertical Label to invite clicks */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -left-12 top-1/2 -translate-y-1/2 -rotate-180 [writing-mode:vertical-lr] flex items-center gap-2 pointer-events-none"
            >
              <div className="w-px h-8 bg-brand-accent/40 mb-2"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-ink/40">Strategies</span>
            </motion.div>

            {[
              { id: '01', title: 'Data Collaboration' },
              { id: '02', title: 'Recommendation' },
              { id: '03', title: 'Moderation' },
              { id: '04', title: 'Hardware' },
              { id: '05', title: 'AI Video' }
            ].map((item, i) => (
              <motion.a 
                key={item.id}
                href={`#strategy-${item.id}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-brand-line hover:bg-brand-accent hover:border-brand-accent transition-all duration-300 shadow-md hover:shadow-xl hover:scale-125 hover:-translate-x-2"
              >
                {/* Active Pulse Effect for the first view or to attract attention */}
                <motion.div 
                  animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full bg-brand-accent ring-4 ring-brand-accent/20 -z-10 group-hover:hidden"
                />
                
                <span className="text-[11px] font-black text-brand-ink group-hover:text-white transition-colors">
                  {item.id}
                </span>
                
                {/* Tooltip */}
                <span className="absolute right-14 px-3 py-2 rounded-xl bg-brand-ink text-white text-[10px] font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all pointer-events-none shadow-2xl border border-white/10 uppercase tracking-widest flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
                  {item.title}
                </span>
              </motion.a>
            ))}

            {/* Hint Pulse at bottom */}
            <motion.div 
              animate={{ opacity: [0.3, 0.8, 0.3], y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-brand-accent"
            >
              <div className="w-1 h-8 rounded-full bg-gradient-to-b from-brand-accent to-transparent"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
