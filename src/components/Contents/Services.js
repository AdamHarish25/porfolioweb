import {
  faDesktop,
  faLaptopCode,
  faMobileScreenButton,
  faPencilRuler,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services = () => {
  return (
    <section id="ServicesSect">
      <div className="w-screen h-auto bg-gray-100 p-16">
        <div className="w-full h-fit text-center">
          <h1 className="text-3xl text-black font-Poppins">
            Available Services
            <hr className="border-gray-400 mt-5 md:mx-60 xl:mx-100" />
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-20">
          <div className="w-full h-full bg-white p-5 text-2xl text-center rounded-lg hover:shadow-lg duration-200">
            <div className="w-full h-fit flex justify-center pb-4">
              <FontAwesomeIcon icon={faPencilRuler} />
            </div>
            <h1 className="text-xl text-center font-Poppins">Graphic Design</h1>
          </div>
          <div className="w-full h-full bg-white p-5 text-2xl text-center rounded-lg hover:shadow-lg duration-200">
            <div className="w-full h-fit flex justify-center pb-4">
              <FontAwesomeIcon icon={faDesktop} />
            </div>
            <h1 className="text-xl text-center font-Poppins">Web Design</h1>
          </div>
          <div className="w-full h-full bg-white p-5 text-2xl text-center rounded-lg hover:shadow-lg duration-200">
            <div className="w-full h-fit flex justify-center pb-4">
              <FontAwesomeIcon icon={faLaptopCode} />
            </div>
            <h1 className="text-xl text-center font-Poppins">Web Developer</h1>
          </div>
          <div className="w-full h-full bg-white p-5 text-2xl text-center rounded-lg hover:shadow-lg duration-200">
            <div className="w-full h-fit flex justify-center pb-4">
              <FontAwesomeIcon icon={faMobileScreenButton} />
            </div>
            <h1 className="text-xl text-center font-Poppins">
              Mobile apps developer
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
