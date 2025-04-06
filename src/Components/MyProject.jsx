import ProjectCard from "./ProjectCard.jsx";
import ProjectCategoryButton from "./Button.jsx";
const MyProject = () => {
  const myProjectCategory = ["All-Project", "UI / UX", "Web Design", "App Design", "Graphic Design"]
  const myProjectDescription = [];
  return (
    <section
    className="flex flex-col items-center pt-28 px-4 min-h-screen overflow-auto"
    id="projects"
  >
    <div className="w-full max-w-5xl mb-10 text-center">
      <h1 className="font-body font-bold text-3xl mb-2">Projects</h1>
      <p className="font-header text-lg">
        "Created a responsive web app with a clean design, secure backend, and seamless user experience."
      </p>
    </div>
  
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {myProjectCategory.map((category, index) => (
        <ProjectCategoryButton label={category} key={index} />
      ))}
    </div>
  
    <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-2 pb-10">
      {[...Array(9)].map((_, i) => (
        <ProjectCard
          key={i}
          description={`This project is seamlessly providing UI (${i + 1})`}
        />
      ))}
    </div>
  </section>
  
  )
}

export default MyProject;