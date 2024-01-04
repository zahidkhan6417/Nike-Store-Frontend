// import { IconMail, IconMailOpened, IconPhone } from "@tabler/icons-react";
// import { IconLocation } from "@tabler/icons-react";
import { FaPhoneAlt, FaLocationArrow } from "react-icons/fa";
import { IoIosMail,  IoIosMailOpen } from "react-icons/io";




function Contact() {
  return (
    <>
      <section className="contact-page">
        {/* <HeroPages name="Contact" /> */}
        <div className="containerrs">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <p>
                A multifaceted professional skilled in multiple fields of
                research, development as well as a learning specialist. Over 15
                years of experience.
              </p>
              <a href="/">
                <FaPhoneAlt />
                <span className="phnumber">(123) 4455678</span>
              </a>
              <a href="/">
                <IoIosMail /> 
                <span className="phnumber">nike@gmail.com</span>
              </a>
              <a href="/">
                <FaLocationArrow />
                <span className="phnumber">Pune,India</span>
              </a>
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  <span className="name">Full Name <b>*</b></span>
                </label>
                <input type="text" placeholder='E.g: "Joe doe"'></input>

                <label>
                  <span className="email">Email <b>*</b></span>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write Here.."></textarea>

                <button type="submit">
                  <IoIosMailOpen />
                  &nbsp; Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;