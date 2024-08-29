const Processing = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-start bg-black bg-opacity-40 backdrop-blur-sm z-50 pt-24">
      <img
        src="/loading-loader.gif"
        alt="Loading..."
        className="w-20 md:w-24"
      />
      <h1 className="text-2xl md:text-3xl font-bold text-white">
        Processing ....
      </h1>
    </div>
  );
};

export default Processing;
