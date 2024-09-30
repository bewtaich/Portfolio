import React from 'react';

const Project = ({ title, imgSrc, liveLink, githubLink }) => {
  return (
    <div className="project">
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
      <a href={liveLink} target="_blank">Deployed App</a>
      <a href={githubLink} target="_blank">GitHub Repo</a>
    </div>
  );
};

export default Project;
