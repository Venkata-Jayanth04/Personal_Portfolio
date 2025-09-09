import "../css/Education.css";

export default function Education() {
  const education = [
    { year: "2018 - 2022", title: "B.Tech", sub: "IIIT Vadodara", note: "Computer Science and Engineering" },
    { year: "2016 - 2018", title: "12th Standard", sub: "Narayana Junior College", note: "96%" },
  ];

  const experience = [
    { year: "05-2025 - 07-2025", title: "Summer Internship", sub: "NIT Warangal", note: "Decentralized Medical Record Management Using Blockchain Technology" },
  ];

  return (
    <main className="container edu-exp-page">
      <div className="edu-exp-grid">
        {/* Education */}
        <section>
          <h2 className="section-title">Education</h2>
          <ol className="timeline">
            {education.map((e, i) => (
              <li key={i} className="timeline-item">
                <div className="dot"></div>
                <div className="content">
                  <span className="year">{e.year}</span>
                  <h4>{e.title}</h4>
                  <p className="sub">{e.sub}</p>
                  <p className="note">{e.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Experience */}
        <section>
          <h2 className="section-title">Experience</h2>
          <ol className="timeline">
            {experience.map((e, i) => (
              <li key={i} className="timeline-item">
                <div className="dot"></div>
                <div className="content">
                  <span className="year">{e.year}</span>
                  <h4>{e.title}</h4>
                  <p className="sub">{e.sub}</p>
                  <p className="note">{e.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}
