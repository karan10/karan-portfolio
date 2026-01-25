import { useEffect, useState } from "react";
import homeData from "../data/home.js";

const Home = () => {
  const [typedTitle, setTypedTitle] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullTitle = `Hi! I'm ${homeData.name}`;

  useEffect(() => {
    let index = 0;
    let isMounted = true;
    let timeoutId;

    const typeNext = () => {
      if (!isMounted) return;
      if (index < fullTitle.length) {
        setTypedTitle(fullTitle.slice(0, index + 1));
        index += 1;
        timeoutId = setTimeout(typeNext, 90);
      } else {
        setIsTyping(false);
      }
    };

    timeoutId = setTimeout(typeNext, 400);

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [fullTitle]);

  return (
    <main>
      <section id="home" className="hero">
        <div id="home-hero" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <div className="hero-content" style={{ flex: 1 }}>
            <h1 style={{ borderRight: isTyping ? "2px solid var(--accent-color)" : "none" }}>
              {typedTitle}
            </h1>
            <h2>Software Engineer</h2>
            <p>Engineer with a builder's bias, product's intuition, and a founder's lens.</p>
            <div className="social-links">
              <a href={homeData.socialLinks.github} target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href={homeData.socialLinks.linkedin} target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href={homeData.socialLinks.x} target="_blank" rel="noreferrer">
                <i className="fab fa-x-twitter"></i>
              </a>
            </div>
          </div>
          <img src={homeData.profileImage} alt={homeData.name} className="profile-pic" />
        </div>
      </section>
      <section id="about-home">
        <div id="about-content" className="about-content">
          {homeData.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="personal-info">
            <div className="info-item">
              <span className="info-title">Name:</span>
              <span className="info-value">{homeData.name}</span>
            </div>
            <div className="info-item">
              <span className="info-title">Email:</span>
              <span className="info-value">{homeData.email}</span>
            </div>
            <div className="info-item">
              <span className="info-title">Location:</span>
              <span className="info-value">{homeData.location}</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
