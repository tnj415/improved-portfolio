import "../styles/resume.scss"
import Languages from "./resume/Languages"

export default function Resume() {
  return (
    <div className="resumePg">
      
        <h2 className="title">Technologies</h2>
        
          <Languages className="languages"/>
        
      <a href="https://drive.google.com/file/d/1p5Pj75raihs4sBdmLMIBZUgsOi-CHvVo/view?usp=sharing" target="_blank"><h3 className="title-sub">click here to view my Resume</h3></a>
    </div>
  );
}
