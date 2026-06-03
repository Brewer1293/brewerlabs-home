import { BarChart3, CircleGauge, Database, FlaskConical, Server } from "lucide-react";
import "./App.css";

const projects = [
  {
    name: "FM Recruitment Lab",
    description: "Private in-browser FM24 role suitability scouting for my 4-2DM-3-1 tactic.",
    url: "https://fmapp.brewerlabs.uk/",
    status: "Live",
    type: "Scouting",
    icon: FlaskConical,
  },
  {
    name: "Football Data App",
    description: "Football goal-market analysis and value modelling.",
    url: "https://football-data-app.brewer1293.workers.dev/",
    status: "Live",
    type: "Model",
    icon: BarChart3,
  },
  {
    name: "Tees Components Hub",
    description: "Internal operations workspace for tickets, contracts and CRM.",
    url: "https://tcapp.brewerlabs.uk/",
    status: "Live",
    type: "Platform",
    icon: Database,
    featured: true,
  },
  {
    name: "Pi Dashboard",
    description: "Machine monitoring dashboard and workshop telemetry view.",
    status: "In progress",
    type: "Dashboard",
    icon: CircleGauge,
  },
  {
    name: "Horse Racing Model",
    description: "Race analysis project and betting-market research model.",
    status: "Planned",
    type: "Model",
    icon: Server,
  },
];

function ProjectCard({ project }) {
  const Icon = project.icon;
  const live = project.status === "Live";
  const content = (
    <>
      <div className="project-card-top">
        <span className="project-icon"><Icon size={18} /></span>
        <span className={`status ${live ? "live" : "muted"}`}>{project.status}</span>
      </div>
      <div>
        <p className="project-type">{project.type}</p>
        <h2>{project.name}</h2>
        <p className="project-description">{project.description}</p>
      </div>
      {!live && <span className="project-link unavailable">In development</span>}
    </>
  );

  if (live) return <a className={`project-card clickable${project.featured ? " featured" : ""}`} href={project.url} target="_blank" rel="noreferrer">{content}</a>;
  return <article className={`project-card${project.featured ? " featured" : ""}`}>{content}</article>;
}

function App() {
  const liveProjects = projects.filter((project) => project.status === "Live").length;

  return (
    <main className="page">
      <header className="site-header">
        <a className="wordmark" href="/">
          <span className="mark"><FlaskConical size={17} /></span>
          <span>Brewer Labs</span>
        </a>
        <span className="header-note">Personal project workspace</span>
      </header>

      <section className="hero">
        <p className="eyebrow">BREWERLABS.UK / PROJECT INDEX</p>
        <h1>Ideas, tools and<br /><span>working software.</span></h1>
        <p className="hero-copy">A home for the applications, internal tools and data projects I am building and using.</p>
        <div className="hero-meta">
          <span><strong>{projects.length}</strong> projects</span>
          <span><strong>{liveProjects}</strong> live now</span>
          <span><strong>1</strong> workspace</span>
        </div>
      </section>

      <section className="portfolio">
        <div className="section-heading">
          <div>
            <p className="eyebrow">PROJECT PORTFOLIO</p>
            <h2>Current builds</h2>
          </div>
          <span>{projects.length} projects</span>
        </div>
        <div className="project-grid">
          {projects.map((project) => <ProjectCard key={project.name} project={project} />)}
        </div>
      </section>

      <footer>
        <span>Brewer Labs</span>
        <span>Built for useful things.</span>
      </footer>
    </main>
  );
}

export default App;
