import UserProfile from "../assets/Images/userprofile.svg";
import SocialIcons from "./SocialIcons.jsx";
import Button from "./Button.jsx";
const Intro = () => {
    return (
        <section className="flex justify-center items-center h-lvh " id="home">
           <div className="xl:flex xl:flex-row flex justify-center items-center flex-col-reverse">
           <div className="flex  flex-col xl:items-start items-center gap-2 xl:w-3xl">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="font-body font-bold text-lg">Hi I am</h1>
                    <h2 className="text-primary font-bold text-2xl">Ujwal Paudel</h2>
                </div>
                <div className="flex xl:flex-col xl:w-96">
                    <h1 className="font-body font-extrabold xl:text-5xl">Full Stack</h1>
                    <h1 className="font-body xl:ml-auto font-extrabold xl:text-5xl">Developer</h1>
                </div>
                <div className="w-[80%] flex flex-col items-center justify-center xl:flex xl:items-start">
                    <p className="font-body mt-4 mb-4"> I'm eager to join a dynamic organization where I can apply my skills
                        and experience to make a real impact. At the same time, I’m always
                        looking to learn and grow, so I want to be in a space that challenges
                        me and helps me expand my knowledge while contributing to
                        meaningful projects</p>
                    <Button label={"Hire Me"} style={{ width: "32%" }} />
                </div>
            </div>
            <div className="xl:h-62 xl:w-62 rounded-full overflow-hidden">
                <img
                    className="xl:h-full xl:w-full h-40 w-40 object-cover "
                    src={UserProfile} alt="user image" />
            </div>
           </div>
        </section>
    );
};

export default Intro;
