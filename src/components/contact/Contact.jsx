import "../../styles/contact.scss"

export default function Contact() {
  return (
    <div className="contactSection">
      <div>
      <form className="form">
        <p>Name</p>
        <input placeholder="Name"/>
        <p>Phone Number</p>
        <input placeholder="Phone Number"/>
        <p>E-mail</p>
        <input placeholder="Email"/>
        <textarea type="text" placeholder="Your Message  Here"/>
        <button>Submit</button>
      </form>

      
        <p>Troy Johnson</p>
        <p>Phone: (510) 650 - 2894</p>
        <p>Email: tnj8510@gmail.com</p>
      </div>
    </div>
  )
}
