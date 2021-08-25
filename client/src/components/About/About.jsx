import "../../styles/about.scss"
import picture from "../../assets/self/self.png"
import Bio from "./Bio"

export default function About() {
  return (
    <section className="about">
      <img className="selfimg" src={picture}></img>
      <Bio/>
      
    </section>
  )
}
