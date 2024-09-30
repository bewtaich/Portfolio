import React from 'react';

const Project = (title, link, github, img) => {
  return (
    <div className="project">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <a href={link} target="_blank">
        Deployed App
      </a>
      <a href={github} target="_blank">
        GitHub Repo
      </a>
    </div>
  );
};

export default Project;
