import React from "react";
import projects from '../../projects.json'

function ProjectCard (proj){
    return (
        <div className="card"> 
          <div className="img-container">
            <img alt={proj.project_name} src={proj.project_img}/>
          </div>
          <div className="content">
            <ul>
              <li>
                <p className="project-name">{proj.project_name}</p>
              </li>
              <li>
              <p className="project-desc">{proj.project_desc}</p>
              </li>
              <li>
                <div className="project-media">
                <a alt="github link" href={proj.git_link}>Github link</a> 
                <a alt ="deployed link" href={proj.deployed_link}>Project Demo</a> 
                </div>
              </li>
              
            </ul>
          </div>
        </div>
      );
}

function Wrapper(proj) {
    return <div className="wrapper">{proj.children}</div>;
}

function Project() {  
    return (
    <>
    <div className="project">
    <h1 className="title">My projects</h1>
    </div>

      <Wrapper>
        {projects.map((project) => (
          <ProjectCard 
          name={project.project_name}
          key={project.id}
          image={project.project_img}
          github={project.git_link}
          deployedlink={project.deployed_link}
          description={project.project_desc}
          />
        ))}
      </Wrapper>
    </>
    
    );
}

export default Project