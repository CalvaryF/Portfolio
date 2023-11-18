import React from "react";
import { Project } from "./types";

interface Props {
  projects: Project[];
}

const LikeCard: React.FC<Props> = ({ projects }) => {
  return (
    <div className="likeCardContainer">
      {projects.map((project, index) => (
        <a href={project.route} className="likeCard" key={index}>
          <div className="label" style={{ marginBottom: "20px" }}>
            {project.title}
          </div>
          <img
            style={{
              height: "200px",
              width: "100%",
              objectFit: "cover",
              border: "1px solid #dfdfdf",
            }}
            src={project.homeImage}
          />
        </a>
      ))}
    </div>
  );
};

export default LikeCard;
