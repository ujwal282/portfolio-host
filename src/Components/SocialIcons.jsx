import Facebook from "../assets/Icons/facebook.svg";
import Twitter from "../assets/Icons/twitter.svg";
import Instagram from "../assets/Icons/instagram.svg";
import LinkedIn from "../assets/Icons/linkedin.svg";
const ContactIcons = () => {
  const mySocial = [
    {
      img : Facebook,
      url : ""
    },
    {
      img : Twitter,
      url : "",

    },{
      img : Instagram,
      url : "",
    },
    {
      img : LinkedIn,
      url : "",
    }
  ]
  return (
 
        <div className="flex  items-center justify-center  gap-4 xl:gap-8">
          {
            mySocial.map((social, index) => (
              <a key={index} href={social.url}>
                <img className="" src={social.img} alt="social" />
              </a>
            ))
          }
        </div>
  )
}

export default ContactIcons;