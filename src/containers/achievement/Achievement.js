import React, {useContext, useState, useEffect} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import PublicationCard from "../../components/publicationCard/PublicationCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

// Function to get the number of visible items based on screen width
const getVisibleCount = () => {
  if (window.innerWidth <= 480) {
    return 1;
  } else if (window.innerWidth <= 768) {
    return 2;
  }
  return 3;
};

export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const achievements = achievementSection.achievementsCards;

  // Calculate slidesCount based on visibleCount and total achievements
  const calculateSlidesCount = (count, total) => {
    if (total <= count) {
      return 1; // Only one "slide" if all items fit
    }
    return total - count + 1;
  };

  const [slidesCount, setSlidesCount] = useState(
    calculateSlidesCount(visibleCount, achievements.length)
  );

  // Update visibleCount and slidesCount on window resize
  useEffect(() => {
    const handleResize = () => {
      const newVisibleCount = getVisibleCount();
      if (newVisibleCount !== visibleCount) {
        setVisibleCount(newVisibleCount);
        const newSlidesCount = calculateSlidesCount(newVisibleCount, achievements.length);
        setSlidesCount(newSlidesCount);
        // Reset slide to 0 if the count changes to avoid invalid index
        setCurrentSlide(0);
      }
    };

    window.addEventListener("resize", handleResize);
    // Initial call in case the initial width calculation needs adjustment
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
    // Re-run effect if achievements length changes (though unlikely for this data)
  }, [visibleCount, achievements.length]);


  // Auto-slide functionality
  useEffect(() => {
    // Only run auto-slide if there's more than one slide
    if (slidesCount > 1) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % slidesCount);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [slidesCount]); // Re-run if slidesCount changes

  const goNext = () => {
    setCurrentSlide(prev => (prev + 1) % slidesCount);
  };
  const goPrev = () => {
    setCurrentSlide(prev => (prev - 1 + slidesCount) % slidesCount);
  };

  // Calculate the percentage to translate based on visible count
  const slidePercentage = 100 / visibleCount;

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
              style={{ transform: `translateX(-${currentSlide * slidePercentage}%)` }}
            >
              {achievements.map((card, i) => (
                <div className="carousel-card" key={i} style={{ flexBasis: `${slidePercentage}%` }}>
                  {/* Note: CSS should ideally handle the flex-basis via media queries */}
                  {/* But setting it here ensures JS calculation aligns visually if CSS is slow/overridden */}
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
          {/* Only show controls if there are multiple slides */}
          {slidesCount > 1 && (
             <div className={isDark ? "dark-mode carousel-controls" : "carousel-controls"}>
              <button onClick={goPrev} className="carousel-button">{"<"}</button>
              <button onClick={goNext} className="carousel-button">{">"}</button>
            </div>
          )}
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