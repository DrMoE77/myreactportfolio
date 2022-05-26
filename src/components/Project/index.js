import React from "react";
import projects from '../../projects.json'

function ProjectCard (props){
    return (
        <div className="body-div">
        <div className="card"> 
          <div className="img-container">
            <img alt={props.project_name} src={props.project_img}/>
          </div>
          <div className="content">
            <ul>
              <li>
                <p className="project-name">{props.project_name}</p>
              </li>
              <li>
              <p className="project-desc">{props.project_desc}</p>
              </li>
              <li>
                <div className="project-media">
                <a alt="github link" href={props.git_link}>Github link</a> 
                <a alt ="deployed link" href={props.deployed_link}>Project Demo</a> 
                </div>
              </li>
              
            </ul>
          </div>
        </div>
        </div>
      );
}

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
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