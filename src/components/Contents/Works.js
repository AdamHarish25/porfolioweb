import ClientsDataProjects from "../Data/ClientsProjectList";

const Works = () => {
  return (
    <section id="WorksSect">
      <div className="w-screen h-auto p-20">
        <div className="w-full h-fit text-center">
          <h1 className="font-Poppins font-bold text-3xl">My Works</h1>
          <p className="mt-3 font-Roboto">Mobile App and Websites</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 my-20 w-full gap-10">
          {ClientsDataProjects.map(({ image, progress, className, link }) => {
            return (
              <div className="w-full h-full flex justify-center ">
                <a href={link} target={"_blank"} rel="noreferrer">
                  <div className="w-fit h-96 shadow-sm shadow-gray-300 p-5 border-t-4 border-gray-200 hover:shadow-lg hover:p-6 transform duration-200 grid place-items-center">
                    <div className={`w-fit h-fit ${className}`}>
                      <img src={image} alt="" className="object-content w-60" />
                    </div>
                    <h4 className="text-center font-Poppins font-bold text-xl mt-5">
                      {progress}
                    </h4>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Works;
