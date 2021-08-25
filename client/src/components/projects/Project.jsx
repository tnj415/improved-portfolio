import "../../styles/portfolio/project.scss"
import cal from "../../assets/projects/cal.jpg"
import ea from "../../assets/projects/e-a_demo.gif"
import mms from "../../assets/projects/mms.PNG"
import pw from "../../assets/projects/pw.PNG"
import quiz from "../../assets/projects/quiz.PNG"
import wyw from "../../assets/projects/wyw.PNG"


export default function Project(prop) {
  
  const src = [cal, pw, mms, quiz, wyw, ea]
  // console.log("prop.prop.id", prop.prop.id)
  // console.log("prop.prop.title", prop.prop.title)

  return (

    <section className="project">
      <img className="display" src={src[prop.prop.id]} alt={prop.prop.image.alt} />
      <article className="info">
        <h3 className="title">{prop.prop.title}</h3>
        <p className="desc">{prop.prop.description}</p>
        <a href={prop.prop.deploy}>Live Site</a>
        <a href={prop.prop.github}>Github</a>
        </article>
    </section>
  );
}
