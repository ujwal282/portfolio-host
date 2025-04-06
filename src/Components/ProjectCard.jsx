import Test from "../assets/Images/test.jpeg"
import {ProjectTech,ProjectLink} from "./ProjectTech.jsx";
const ProjectCard = ({ image, title, description }) => {
    return (
        
                <div className="w-80  rounded-t-2xl rounded-b-sm overflow-hidden pt-10">
                        <img className="w-full h-60 object-cover" src={Test} alt="" />
                    <div className="flex flex-col items-start justify-center p-6 bg-gray-400">
                        <h1 className="font-body font-bold text-xl">{title}</h1>
                        <span className="font-bodyh h-12 mb-4 overflow-hidden">
                           {description}
                        </span>
                       <div className="mt-4 mb-4 flex items-start justify-center gap-2">
                       <ProjectTech tech={"Html"}/>
                        <ProjectTech tech={"Css"}/>
                        <ProjectTech tech={"Node"}/>
                       </div>
                       <div>
                       <ProjectLink />
                       </div>
                    </div>
                </div>
        
    );
};

export default ProjectCard;
