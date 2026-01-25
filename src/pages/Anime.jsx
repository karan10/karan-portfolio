import { useMemo, useState } from "react";
import animeData from "../data/anime.js";

const getStatusText = (status) => {
  switch (status) {
    case "watching":
      return "Currently Watching";
    case "completed":
      return "Completed";
    case "planning":
      return "Planning to Watch";
    default:
      return status;
  }
};

const FALLBACK_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";

const Anime = () => {
  const [statusFilter, setStatusFilter] = useState("");
  const [studioFilter, setStudioFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [sortBy, setSortBy] = useState("title");
  const [searchTerm, setSearchTerm] = useState("");
  const [expanded, setExpanded] = useState(() => new Set());

  const studios = useMemo(
    () => Array.from(new Set(animeData.map((anime) => anime.studio))).sort(),
    []
  );
  const types = useMemo(
    () => Array.from(new Set(animeData.map((anime) => anime.type))).sort(),
    []
  );

  const filteredAnime = useMemo(() => {
    let list = [...animeData];

    if (searchTerm.trim()) {
      const query = searchTerm.trim().toLowerCase();
      list = list.filter((anime) => {
        const haystack = `${anime.title} ${anime.studio} ${anime.description}`.toLowerCase();
        return haystack.includes(query);
      });
    }

    if (statusFilter) {
      list = list.filter((anime) => anime.status === statusFilter);
    }

    if (studioFilter) {
      list = list.filter((anime) => anime.studio === studioFilter);
    }

    if (typeFilter) {
      list = list.filter((anime) => anime.type === typeFilter);
    }

    list.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "studio":
          return a.studio.localeCompare(b.studio);
        case "title":
        default:
          return a.title.localeCompare(b.title);
      }
    });

    return list;
  }, [statusFilter, studioFilter, typeFilter, sortBy, searchTerm]);

  const toggleExpanded = (title) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }
      return next;
    });
  };

  return (
    <main>
      <section className="anime">
        <h2>Animes</h2>
        <div className="anime-controls">
          <div className="search-group">
            <label htmlFor="anime-search">Search:</label>
            <input
              id="anime-search"
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Title, studio, or description"
            />
          </div>
          <div className="filter-group">
            <label htmlFor="status-filter">Status:</label>
            <select
              id="status-filter"
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
            >
              <option value="">All</option>
              <option value="watching">Currently Watching</option>
              <option value="completed">Completed</option>
              <option value="planning">Planning</option>
            </select>
          </div>
          <div className="filter-group">
            <label htmlFor="studio-filter">Studio:</label>
            <select
              id="studio-filter"
              value={studioFilter}
              onChange={(event) => setStudioFilter(event.target.value)}
            >
              <option value="">All Studios</option>
              {studios.map((studio) => (
                <option key={studio} value={studio}>
                  {studio}
                </option>
              ))}
            </select>
          </div>
          <div className="filter-group">
            <label htmlFor="type-filter">Type:</label>
            <select
              id="type-filter"
              value={typeFilter}
              onChange={(event) => setTypeFilter(event.target.value)}
            >
              <option value="">All Types</option>
              {types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="sort-group">
            <label htmlFor="sort-by">Sort by:</label>
            <select id="sort-by" value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
              <option value="title">Title</option>
              <option value="rating">Rating</option>
              <option value="studio">Studio</option>
            </select>
          </div>
        </div>
        <div id="anime-list" className="projects-grid">
          {filteredAnime.map((anime) => {
            const stars = Array.from({ length: 5 }, (_, index) => {
              const filled = index < anime.rating;
              return (
                <span key={`${anime.title}-star-${index}`} className={`star${filled ? "" : " empty"}`}>
                  ★
                </span>
              );
            });

            return (
              <div
                key={anime.title}
                className="project-card"
                onClick={() => window.open(anime.imdbUrl, "_blank", "noopener,noreferrer")}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    window.open(anime.imdbUrl, "_blank", "noopener,noreferrer");
                  }
                }}
              >
                <div className={`anime-badge ${anime.status}`}>{getStatusText(anime.status)}</div>
                <h3>{anime.title}</h3>
                <img
                  src={anime.image || FALLBACK_IMAGE}
                  alt={anime.title}
                  onError={(event) => {
                    event.currentTarget.src = FALLBACK_IMAGE;
                  }}
                />
                <p>
                  <em>{anime.studio}</em>
                </p>
                <div className="description-container">
                  <div className={`description-text${expanded.has(anime.title) ? " expanded" : ""}`}>
                    {anime.description}
                  </div>
                  <button
                    type="button"
                    className="more-button"
                    onClick={(event) => {
                      event.stopPropagation();
                      toggleExpanded(anime.title);
                    }}
                  >
                    {expanded.has(anime.title) ? "Show less" : "Show more"}
                  </button>
                </div>
                <div className="rating-container">
                  <div className="rating-stars">{stars}</div>
                  <span className="rating-text">{anime.rating}/5</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Anime;
