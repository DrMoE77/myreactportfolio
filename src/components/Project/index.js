import React from "react";
import projects from '../../projects.json'
import {FaGithub} from "react-icons/fa"

function ProjectCard (props){
    return (
        <div className="card"> 
          <div className="img-container">
            <img alt={props.project_name} src={props.project_img}/>
          </div>
          <div className="content">
            <ul>
              <li>
                <p className="project-name">{props.project_name} 
                <a id="git_icon" alt="github link" target='_blank' href={props.git_link}><FaGithub/></a> </p>
              </li>
              <li>
              <p className="project-desc">{props.project_desc}</p>
              </li>
              <li>
                <div className="project-media">
                
                <a alt ="deployed link" target='_blank' href={props.deployed_link}>View Demo</a> 
                </div>
              </li>
              
            </ul>
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
    <div className="body-div">
    <h2 className="title">My Projects</h2>
    </div>

      <Wrapper>
        {projects.map((project) => (
          <ProjectCard 
          project_name={project.project_name}
          key={project.id}
          project_img={project.project_img}
          git_link={project.git_link}
          deployed_link={project.deployed_link}
          project_desc={project.project_desc}
          />
        ))}     
      </Wrapper>
    </>
    
    );
}

export default Project