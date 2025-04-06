 import Demo from "../assets/Icons/demo.svg";
 import Github from "../assets/Icons/github.svg";

 const ProjectLink = ({url, demo}) => {
   return(
    <div className="flex gap-10 w-full font-body text-sm">
    <a href={url} className="flex items-center justify-center bg-slate-500 pt-2 pb-2 pl-2 pr-2 rounded-sm cursor-pointer">
        <img src={Github} alt="githublogo" />
        <span>View Code</span>
    </a>
    <a href={demo} className="flex items-center justify-center bg-slate-500  pt-2 pb-2 pl-2 pr-2 rounded-sm cursor-pointer">
        <img src={Demo} alt="demo" />
        <span>Live Demo</span>
    </a>
</div>
   )
}

const ProjectTech = ({tech}) => {
  return (
    <span className="pt-1 pb-1 pl-3 pr-3 text-white bg-primary rounded-2xl w-max">{tech}</span>
  )
}

export  {ProjectTech, ProjectLink}