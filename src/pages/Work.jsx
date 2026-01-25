import { useEffect } from "react";
import workData from "../data/work.js";

const Work = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");
    if (items.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <section className="work">
        <h2>Work Experience</h2>
        <div id="work-timeline" className="timeline">
          {workData.map((job) => (
            <div key={`${job.company}-${job.period}`} className="timeline-item">
              <div className="timeline-content">
                <h3>{job.title}</h3>
                <h4>{job.company}</h4>
                <p className="timeline-date">{job.period}</p>
                <p>{job.description}</p>
                {job.url && job.url !== "#" ? (
                  <a href={job.url} target="_blank" rel="noreferrer" className="timeline-link">
                    View Company
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Work;
