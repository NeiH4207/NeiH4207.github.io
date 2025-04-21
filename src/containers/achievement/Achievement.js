import React, {useContext, useState, useEffect} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import PublicationCard from "../../components/publicationCard/PublicationCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  const achievements = achievementSection.achievementsCards;
  const visibleCount = 3;
  const slidesCount = achievements.length > visibleCount ? achievements.length - visibleCount + 1 : 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slidesCount);
    }, 5000);
    return () => clearInterval(interval);
  }, [slidesCount]);

  const goNext = () => {
    setCurrentSlide(prev => (prev + 1) % slidesCount);
  };
  const goPrev = () => {
    setCurrentSlide(prev => (prev - 1 + slidesCount) % slidesCount);
  };
  
  if (!achievementSection.display) {
    return null;
  }
  
  return (
    <Fade bottom duration={1000} distance="20px">
      {/* Awards Section */}
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {achievementSection.award_title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {achievementSection.subtitle}
            </p>
          </div>
          <div className="carousel-window">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentSlide * (100 / visibleCount)}%)` }}
            >
              {achievements.map((card, i) => (
                <div className="carousel-card" key={i}>
                  <AchievementCard
                    isDark={isDark}
                    cardInfo={{
                      title: card.title,
                      description: card.subtitle,
                      image: card.image,
                      imageAlt: card.imageAlt,
                      footer: card.footerLink
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={isDark ? "dark-mode carousel-controls" : "carousel-controls"}>
            <button onClick={goPrev} className="carousel-button">{"<"}</button>
            <button onClick={goNext} className="carousel-button">{">"}</button>
          </div>
        </div>
      </div>

      {/* Publications Section */}
      <div className="main" id="publications">
        <div className="publication-main-div">
          <div className="publication-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading publication-heading"
                  : "heading publication-heading"
              }
            >
              {achievementSection.publication_title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle publication-subtitle"
                  : "subTitle publication-subtitle"
              }
            >
              {achievementSection.subtitle}
            </p>
          </div>
          <div className="publication-cards-div">
            {achievementSection.publicationsCards.map((card, i) => {
              return (
                <PublicationCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    imageAlt: card.imageAlt,
                    footer: card.footerLink,
                    citations: card.citations,
                    impactFactor: card.impactFactor,
                    publicationDate: card.publicationDate
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}