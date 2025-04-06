import TestomonialCard from "./TestomonialCard";
import Customer from "../assets/Images/userprofile.svg"

const Testimonials = () => {
  return (
    <section
      className="flex flex-col items-center pt-28 px-4 min-h-screen w-full "
      id="testimonials"
    >
      <div className="w-full xl:max-w-4xl text-center mb-10">
        <h1 className="font-body font-bold text-3xl mb-4">Testimonials</h1>
        <p className="font-header text-lg">
          I build clean, responsive websites using the MERN stack. From
          frontend to backend, I create fast, functional, and user-friendly
          web apps that bring ideas to life.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6 xl:w-2xl w-2xs xl:max-w-6xl">
      <TestomonialCard description={"This is really cool man you are best of all time man you are best of all time man i am really happy about your work really impressive"} name={"Ujwal Paudel"} image={Customer} />
      <TestomonialCard description={"This is really cool man you are best of all time man you are best of all time man i am really happy about your work really impressive"} name={"Ujwal Paudel"} image={Customer} />
      <TestomonialCard description={"This is really cool man you are best of all time man you are best of all time man i am really happy about your work really impressive"} name={"Ujwal Paudel"} image={Customer} />
      </div>
    </section>
  );
};

export default Testimonials;
