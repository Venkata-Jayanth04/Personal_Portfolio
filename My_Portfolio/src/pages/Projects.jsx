import "../css/Projects.css"; 


export default function Projects() {
  const projects = [
    { title: 'Brain Cancer Prediction', img: '/assets/proj3.png', github: 'https://github.com/Venkata-Jayanth04/Brain_Cancer_Prediction' },
    { title: 'Drowsiness Detection', img: '/assets/proj1.png', github: 'https://github.com/Venkata-Jayanth04/Drowsiness-Detection' },
    { title: 'Smart Contract HealthSystem', img: '/assets/proj2.png', github: 'https://github.com/Venkata-Jayanth04/Electronic-Medical-Records' },
    { title: 'Music Genre Classifier', img: '/assets/proj4.png', github: 'https://github.com/Venkata-Jayanth04/Music-Genre-Identification-Model' },
  ]
  return (
    <main className="container projects-page">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((p, i) => (
          <a key={i} href={p.github} target="_blank" className="project-card" rel="noreferrer">
            <div className="img-wrap">
              <img src={p.img} alt={p.title}/>
            </div>
            <div className="project-info">
              <h4>{p.title}</h4>
              <p>View on GitHub →</p>
            </div>
          </a>
        ))}
      </div>
    </main>
  )
}

