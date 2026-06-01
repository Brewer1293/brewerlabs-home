import "./App.css";

const apps = [
  {
    name: "Football Data App",
    description: "Football goal market value model.",
    url: "https://brewer-data-app.streamlit.app/",
    status: "Live",
  },
  {
    name: "Horse Racing Model",
    description: "Race analysis project.",
    url: "#",
    status: "Planned",
  },
  {
    name: "Pi Dashboard",
    description: "Machine monitoring dashboard.",
    url: "#",
    status: "In progress",
  },
  {
    name: "Tees Components Hub",
    description: "Internal operations hub concept.",
    url: "#",
    status: "Local",
  },
];

function App() {
  return (
    <main className="page">
      <header className="header">
        <p className="domain">brewerlabs.uk</p>
        <h1>Brewer Labs</h1>
        <p className="subtitle">A simple home for my apps, models, and experiments.</p>
      </header>

      <section className="apps">
        {apps.map((app) => {
          const disabled = app.url === "#";

          return (
            <article className="app-card" key={app.name}>
              <div>
                <div className="card-heading">
                  <h2>{app.name}</h2>
                  <span>{app.status}</span>
                </div>
                <p>{app.description}</p>
              </div>

              <a
                href={app.url}
                className={disabled ? "button disabled" : "button"}
                onClick={(event) => disabled && event.preventDefault()}
              >
                {disabled ? "Coming soon" : "Open"}
              </a>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default App;