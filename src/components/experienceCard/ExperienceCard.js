import React, { Component } from "react";
import "./ExperienceCard.css";

class ExperienceCard extends Component {
  render() {
    const experiences = this.props.experiences;
    const theme = this.props.theme;
    if (!experiences || experiences.length === 0) return null;
    const company = experiences[0].company;
    const company_url = experiences[0].company_url;
    const logo_path = experiences[0].logo_path;
    const color = experiences[0].color;
    return (
      <div className="experience-card" style={{ border: `1px solid ${color}` }}>
        <div className="experience-card-logo-div">
          <img
            className="experience-card-logo"
            src={require(`../../assests/images/${logo_path}`)}
            alt=""
          />
        </div>
        <div className="experience-card-body-div">
          {experiences.map((role, idx) => (
            <div key={role.title}>
              <div
                className="experience-card-row"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <h3
                    className="experience-card-title"
                    style={{ color: theme.text, marginBottom: 0 }}
                  >
                    {role.title}
                  </h3>
                  <p
                    className="experience-card-company"
                    style={{ color: theme.text, marginBottom: 0 }}
                  >
                    <a
                      href={company_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {company}
                    </a>
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                  }}
                >
                  <span
                    className="experience-card-duration"
                    style={{ color: theme.secondaryText }}
                  >
                    {role.duration}
                  </span>
                  <span
                    className="experience-card-location"
                    style={{ color: theme.secondaryText }}
                  >
                    {role.location}
                  </span>
                </div>
              </div>
              <p
                className="experience-card-description"
                style={{ color: theme.text }}
              >
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ExperienceCard;
