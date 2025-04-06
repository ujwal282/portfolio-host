
const Card = ({image, title, description}) => {
  return (
    <div className="w-52 pl-3.5 rounded-md pt-10 pb-10">
        <div className="flex flex-col items-start justify-center gap-2">
            <img src={image} alt="Serivces images" />
            <h1 className="font-body text-2xl">{title}</h1>
            <span className="font-body text-md">{description}</span>
        </div>
    </div>
  )
}

export default Card