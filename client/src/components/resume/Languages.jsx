import dev from "../../assets/seeds/languages";
import "../../styles/resume.scss"

export default function Languages() {
  console.log(dev[0].front);
  return (
    <div className="langList">
      <div className="front">
      <h3 className="title-sub">Frontend Development</h3>
      <ul>
        {dev[0].front.map((lang) => (
          <li>{lang}</li>
        ))}
      </ul>
      </div>
      <div className="back">
      <h3 className="title-sub">Backend Development</h3>
      <ul>
        {dev[1].back.map((lang) => (
          <li>{lang}</li>
        ))}
      </ul>
      </div>
    </div>
  );
}
