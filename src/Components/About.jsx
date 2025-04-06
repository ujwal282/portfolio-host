import UserProfile from "../assets/Images/UserProfile.svg";
import Progress from "./Progress.jsx";
const About = () => {
  return (
    <section className="flex justify-center items-center h-lvh" id="about-me">
    <div className="flex flex-col xl:flex-row justify-around items-center w-lg xl:p-0 pl-4 pr-4  xl:w-lvw">
    <div className=" h-max xl:h-62 xl:w-62 rounded-full overflow-hidden">
                <img
                    className="xl:h-full xl:w-full h-40 w-40 object-cover "
                    src={UserProfile} alt="user image" />
            </div>
      <div className="xl:w-[50%]">
       <div className="">
       <h1 className="font-body font-bold text-sm xl:text-2xl">About Me</h1>
        <p className="font-body mt-2 mb-2 text-sm xl:text-base">Hey there! I'm a passionate and curious developer who loves building cool stuff for the web. Whether it’s crafting smooth user interfaces or bringing logic to life with code, I’m all about turning ideas into reality. Always learning, always growing, and always down for a new challenge!</p>
        
       </div>
       <div className="">
          <Progress title={"Website Design"} progress= "70%" />
          <Progress title={"React"} progress= "80%" />
          <Progress title={"Java Script"} progress= "40%" />
          <Progress title={"React"} progress= "40%" />
       </div>
      </div>
      </div>  
    </section>
  );
};

export default About;
