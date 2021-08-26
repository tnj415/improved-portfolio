import "../styles/about.scss"
import picture from "../assets/self/self.png"
import Bio from "./about/Bio"

export default function AboutMe() {
  return (
    <section className="about">
      <img className="selfimg" src={picture} alt=""></img>
      <Bio/>
      
    </section>
  )
}
