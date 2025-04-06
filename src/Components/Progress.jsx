const Progress = ({ title, progress }) => {
  return (
    <section className="flex flex-col  items-start justify-center">
      <h1 className="font-body font-bold">{title}</h1>
      <div className="h-4 relative w-full  mb-2 mt-2 rounded-full bg-gray-400">
        <div
          className="bg-primary h-full rounded-full"
          style={{ width: progress }}
        ></div>
        <div
          className="absolute top-1/2 transform -translate-y-1/2  w-6 h-6 bg-white border-2 border-primary rounded-full"
          style={{ left: `calc(${progress} - 12px)`}}
        ></div>
      </div>
    </section>
  );
};

export default Progress;
