import dev from "../../assets/seeds/languages";

export default function Languages() {
  console.log(dev[0].front);
  return (
    <div className="languages">
      <div className="front">
      <h3>Frontend Development</h3>
      <ul>
        {dev[0].front.map((lang) => (
          <li>{lang}</li>
        ))}
      </ul>
      </div>
      <div className="back">
      <h3>Backend Development</h3>
      <ul>
        {dev[1].back.map((lang) => (
          <li>{lang}</li>
        ))}
      </ul>
      </div>
    </div>
  );
}
