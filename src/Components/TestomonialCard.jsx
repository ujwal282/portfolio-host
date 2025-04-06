const TestimonialCard = ({ image, description, name }) => {
  return (
    <div className="bg-gray-300 rounded-md p-8 font-body">
      <div className="flex  flex-col  xl:flex-row justify-start items-center gap-7">
        <div className="max-w-16 max-h-16 rounded-full overflow-hidden">
          <img
            className="w-full object-cover"
            src={image}
            alt={`${name} testimonial image`}
          />
        </div>
        <div>
          <p>{description}</p>
          <span className="font-bold">{name}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
