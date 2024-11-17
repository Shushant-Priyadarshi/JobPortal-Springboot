const DreamJob = () => {
  return (
    <div className="relative text-white flex justify-center items-center min-h-[50vh] px-6 py-10">
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mt-32">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_0_10px_rgba(0, 124, 249, 1)]">
          Find Your{" "}
          <span className="bg-gradient-to-r from-azure-radiance-200 to-azure-radiance-700 bg-clip-text text-transparent">
            Dream Job
          </span>{" "}
          With Us
        </h1>

        <p className="mt-4 text-lg md:text-xl font-light text-gray-300">
          A good life begins with a good company. Start exploring thousands of
          jobs in one place and take the first step toward your dream career.
        </p>
        <button className="mt-6 px-3 py-2  bg-azure-radiance-700   text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-azure-radiance-800 transition-all duration-300">
          Get Started
        </button>
      </div>

      {/* Glowing Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1 right-3/4 w-96 h-96 bg-azure-radiance-700 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1 right-1 w-80 h-80 bg-azure-radiance-400 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/4 left-2/4 w-96 h-96 bg-azure-radiance-700 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/4 left-1/4  w-80 h-80 bg-azure-radiance-400 rounded-full blur-3xl opacity-30"></div>
      </div>
      
    </div>
  );
};

export default DreamJob;
