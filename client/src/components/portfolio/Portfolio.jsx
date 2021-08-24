import cal from "../../projects/cal.jpg" //0
import pw from "../../projects/pw.PNG" //1
import mms from "../../projects/mms.PNG" //2
import quiz from "../../projects/quiz.PNG" //3
import wyw from "../../projects/wyw.PNG" //4
import ea from "../../projects/e-a_demo.gif" //5
import Project from "./project/Project"; 
import projects from "../../seeds/projects"
import React, { useState } from 'react'


export default function Projects() {
  const src = [cal, pw, mms, quiz, wyw, ea]

  const [displayImg, setDisplayImg] = useState()

  const handleHover = (id) => {
    setDisplayImg(id)
  }

  return (
    <section className="outer">
      <h2 className="title">Projects</h2>
      <article className="projectNav">
        {src.map((img, i) => (
          <img src={img} alt="" onMouseEnter={() => handleHover(i)}></img>
        ))}
      </article>
     
        {projects.map((data) => {

          if (displayImg == data.id) { 
          console.log("displayImg", displayImg)
          console.log("data.id", data.id)
          return (
          <article>
          <Project prop={data}/>
          </article>)
        }
      })}
    </section>
  );
}

// {projects.map((project) => <ProjectNav key={`${project.id}`} project={project} />)}
