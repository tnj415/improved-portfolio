import "../styles/contact.scss"

export default function Contact() {
  return (
    <div className="formSection">
      <form className="form">
        <p>Name</p>
        <input placeholder="Name"/>
        <p>E-mail</p>
        <input placeholder="Email"/>
        <textarea type="text" placeholder="Your Message  Here"/>
        <button>Submit</button>
      </form>
    </div>
  )
}
