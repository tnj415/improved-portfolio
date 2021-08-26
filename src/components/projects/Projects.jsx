import "../../styles/styles.scss"
import "../../styles/portfolio.scss"
import cal from "../../assets/projects/cal.jpg" //0
import pw from "../../assets/projects/pw.PNG" //1
import mms from "../../assets/projects/mms.PNG" //2
import quiz from "../../assets/projects/quiz.PNG" //3
import wyw from "../../assets/projects/wyw.PNG" //4
import ea from "../../assets/projects/e-a_demo.gif" //5
import Project from "./Project"; 
import projects from "../../assets/seeds/projects"
import React, { useState } from 'react'


export default function Projects() {
  const src = [cal, pw, mms, quiz, wyw, ea]

  const [displayImg, setDisplayImg] = useState(3)

  const handleHover = (id) => {
    setDisplayImg(id)
  }

  return (
    <section className="container-main">
      <article className="projectNav">
        {src.map((img, i) => (
          <img className="thumbnail" src={img} alt="" onMouseEnter={() => handleHover(i)}></img>
        ))}
      </article>
      <article className="displayedProject">
        {projects.map((data) => {
             if (displayImg === data.id) { 
              // console.log("displayImg", displayImg)
              // console.log("data.id", data.id)
              return (
                <article>
                  <Project prop={data}/>
                </article>)
            }
          })}
      </article>
    </section>
  );
}

// {projects.map((project) => <ProjectNav key={`${project.id}`} project={project} />)}
