import React, {useContext} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import PublicationCard from "../../components/publicationCard/PublicationCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Achievement() {
  const {isDark} = useContext(StyleContext);

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
          <div className="achievement-cards-div">
            {achievementSection.achievementsCards.map((card, i) => {
              return (
                <AchievementCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    imageAlt: card.imageAlt,
                    footer: card.footerLink
                  }}
                />
              );
            })}
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
