import Card from "./Card.jsx";
import Ui from "../assets/Images/ui.svg";
import Webdesign from "../assets/Images/webdesign.svg";
import Appdesign from "../assets/Images/app.svg";
import Graphicdesign from "../assets/Images/graphic.svg";
const Services = () => {
  const myServices = [
    {
      img: Ui,
      title: "UI/UX Design",
      description: "Designing user interfaces and enhancing user experiences.",
    },
    {
      img: Webdesign,
      title: "Web Design",
      description: "Creating responsive and visually appealing websites.",
    },
    {
      img: Appdesign,
      title: "App Design",
      description: "Designing user-friendly mobile applications.",
    },
    {
      img: Graphicdesign,
      title: "Graphic Design",
      description: "Creating graphics for print, digital media, and branding.",
    },
  ];
  return (
    <section
      className="flex items-center justify-center flex-col min-h-screen overflow-auto"
      id="services"
    >
      <div className="flex flex-col items-center justify-center xl:w-xl w-md">
        <h1 className="font-body font-bold xl:text-3xl m-4">Services</h1>
        <p className="font-header  text-center xl:text-lg">
          I build clean, responsive website using the MERN stack, From frontend
          to backend. I crate fast, functional, and user-friendly web apps that
          bring ideas to life.
          
          
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2   xl:flex xl:justify-around gap-10 xl:items-center xl:gap-32 xl:w-maxb">
        {myServices.map((services, index) => (
          <Card
            key={index}
            image={services.img}
            title={services.title}
            description={services.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
