import React from "react";
import "./PublicationCard.scss";

export default function PublicationCard({cardInfo, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className={isDark ? "dark-mode publication-card" : "publication-card"}>
      <div className="publication-content">
        <div className="publication-image-div">
          <img
            src={cardInfo.image}
            alt={cardInfo.imageAlt || "Publication Thumbnail"}
            className="publication-image"
          />
        </div>
        
        <div className="publication-detail-div">
          <h3 className={isDark ? "dark-mode publication-title" : "publication-title"}>
            {cardInfo.title}
          </h3>
          <p className={isDark ? "dark-mode publication-subtitle" : "publication-subtitle"}>
            {cardInfo.description}
          </p>
          
          <div className="publication-footer">
            {cardInfo.footer.map((v, i) => {
              return (
                <span
                  key={i}
                  className={
                    isDark ? "dark-mode publication-tag" : "publication-tag"
                  }
                  onClick={() => openUrlInNewTab(v.url, v.name)}
                >
                  {v.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <div className="publication-progress">
        {/* <div className="citation-info">
          <div className="citation-count">
            <span className="citation-number">{cardInfo.citations || 0}</span>
            <span className="citation-label">Citations</span>
          </div>
          {cardInfo.impactFactor && (
            <div className="impact-factor">
              <span className="impact-number">{cardInfo.impactFactor}</span>
              <span className="impact-label">Impact Factor</span>
            </div>
          )}
        </div> */}
        {cardInfo.publicationDate && (
          <div className="publication-date">
            <span>Published: {cardInfo.publicationDate}</span>
          </div>
        )}
      </div>
    </div>
  );
}