import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ButtonUp from "./components/buttonGoUp";
import "./components/AppIn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesDown,
  faDesktop,
  faLaptopCode,
  faPencilRuler,
} from "@fortawesome/free-solid-svg-icons";
import { send } from "emailjs-com";
import Desk from "./images/Desk2.jpg";
import Logo from "./images/LogoBW2.png";
import ITLogo from "./images/IslamicThingsLogoTr.png";
import IsmiLogo from "./images/LogoIsmi.png";
import Logo2 from "./images/Logo2.png";

function App() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_ozlwvnd",
      "template_k9jqv5w",
      toSend,
      "N-l5OuqluInHPo6Rn",
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <div className="h-auto w-screen">
      <section id="HomeSect">
        <div className="Bg-img xs:text-xl md:text-3xl lg:text-4xl 2xl:text-5xl bg-gray-400 w-screen h-screen text-white bg-cover relative">
          <img
            draggable="false"
            src={Logo}
            className="absolute xs:top-32 left-2/4 -translate-y-1/3 -translate-x-2/4 w-28"
            alt=""
          />

          <h1 className="text-center font-bold font-Poppins absolute xs:top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4">
            Hi I'm Adam. I design & build Websites and Mobile apps
          </h1>
          <h5 className="font-Rubik font-normal xs:text-base md:text-xl absolute xs:top-3/4 left-2/4 -translate-y-1/4 -translate-x-2/4">
            Scroll down to see what I do
          </h5>
          <div className="w-full h-fit mt-14 absolute xs:top-3/4 left-2/4 -translate-y-1/4 -translate-x-2/4 flex justify-center">
            <a href="#AboutSect" className="text-base animate-bounce">
              <FontAwesomeIcon icon={faAnglesDown} />
            </a>
          </div>
        </div>
      </section>
      <section id="AboutSect">
        <div className="w-screen h-auto p-20 my-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
            <div className="w-full h-fit p-1 mt-5">
              <h3 className="text-black font-Poppins text-2xl 2xl:text-3xl">
                About me
              </h3>
              <p className="xs:text-sm md:text-base font-Roboto mt-5 2xl:text-xl">
                Hello visitor! I'm <strong>Adam Harits Abdurrahman</strong> and
                I'm FrontEnd web specialist and Mobile apps developer. I've been
                learning many languages of FrontEnd for 2 years and Flutter for
                Mobile Apps. And this is what I get : <br />
              </p>
              <div className="w-full h-full bg-green-300 rounded-lg xs:text-base 2xl:text-xl xs:p-5 2xl:p-7 mt-5 hover:shadow-lg shadow-black hover:p-6 2xl:hover:p-8 transform duration-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <ul className="list-disc ml-5 font-Poppins font-normal select-none">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Tailwind</li>
                    <li className="list-none">&</li>
                    <li>Bootstrap</li>
                  </ul>
                  <ul className="list-disc ml-5 lg:ml-0 font-Poppins font-normal select-none">
                    <li className="list-none">And for Mobile apps :</li>
                    <li>Flutter</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full h-full flex items-end">
              <img src={Desk} className="object-contain rounded-xl" alt="" />
            </div>
            <div className="w-full h-full mt-5">
              <h4 className="text-center text-2xl font-Poppins">
                My expertise and skills <br />
                in progressbar
              </h4>
              <br />

              <div className="w-full h-fit md:px-10">
                {/*Progress Bars*/}
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-blue-700 dark:text-white">
                    Writing
                  </span>
                  <span className="text-sm font-medium text-blue-700 dark:text-white">
                    65%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 group">
                  <div className="bg-blue-600 h-2.5 rounded-full w-2/3 md:group-hover:w-full transform duration-300"></div>
                </div>
                <div className="flex justify-between mb-1 mt-5">
                  <span className="text-base font-medium text-blue-700 dark:text-white">
                    HTML & CSS
                  </span>
                  <span className="text-sm font-medium text-blue-700 dark:text-white">
                    80%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 group">
                  <div className="bg-blue-600 h-2.5 rounded-full w-4/5 md:group-hover:w-full transform duration-300"></div>
                </div>
                <div className="flex justify-between mb-1 mt-5">
                  <span className="text-base font-medium text-blue-700 dark:text-white">
                    Javascript
                  </span>
                  <span className="text-sm font-medium text-blue-700 dark:text-white">
                    60%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 group">
                  <div className="bg-blue-600 h-2.5 rounded-full w-3/5 md:group-hover:w-full transform duration-300"></div>
                </div>
                <div className="flex justify-between mb-1 mt-5">
                  <span className="text-base font-medium text-blue-700 dark:text-white">
                    Tailwind & Bootstrap
                  </span>
                  <span className="text-sm font-medium text-blue-700 dark:text-white">
                    75%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 group">
                  <div className="bg-blue-600 h-2.5 rounded-full w-3/4 md:group-hover:w-full transform duration-300"></div>
                </div>
                <div className="flex justify-between mb-1 mt-5">
                  <span className="text-base font-medium text-blue-700 dark:text-white">
                    Flutter
                  </span>
                  <span className="text-sm font-medium text-blue-700 dark:text-white">
                    60%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 group">
                  <div className="bg-blue-600 h-2.5 rounded-full w-3/5 md:group-hover:w-full transform duration-300"></div>
                </div>
                {/* End of progressbars */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="ServicesSect">
        <div className="w-screen h-auto bg-gray-100 p-16">
          <div className="w-full h-fit text-center">
            <h1 className="text-3xl text-black font-Poppins">
              Available Services
              <hr className="border-gray-400 mt-5 md:mx-60 xl:mx-100" />
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20">
            <div className="w-full h-full bg-white p-5 text-2xl text-center rounded-lg hover:shadow-lg duration-200">
              <div className="w-full h-fit flex justify-center pb-4">
                <FontAwesomeIcon icon={faPencilRuler} />
              </div>
              <h1 className="text-xl text-center font-Poppins">
                Graphic Design
              </h1>
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
              <h1 className="text-xl text-center font-Poppins">
                Web Developer
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section id="WorksSect">
        <div className="w-screen h-auto p-20">
          <div className="w-full h-fit text-center">
            <h1 className="font-Poppins font-bold text-3xl">My Works</h1>
            <p className="mt-3 font-Roboto">Mobile App and Websites</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 my-20 w-full">
            <div className="w-full h-full flex justify-center">
              <div className="w-fit h-fit shadow-sm shadow-gray-300 p-5 border-t-4 border-gray-200 hover:shadow-lg hover:p-6 transform duration-200">
                <div className="w-fit h-fit bg-purple-500 cursor-not-allowed">
                  <img src={ITLogo} alt="" className="object-content w-60" />
                </div>
                <h4 className="text-center font-Poppins font-bold text-xl mt-5">
                  On Progress
                </h4>
              </div>
            </div>
            <div className="w-full h-full flex justify-center">
              <div className="w-fit h-fit shadow-sm shadow-gray-300 p-5 border-t-4 border-gray-200 hover:shadow-lg hover:p-6 transform duration-200">
                <div className="w-fit h-fit cursor-pointer">
                  <a href="https://ismiDki.org">
                    <img
                      src={IsmiLogo}
                      alt=""
                      className="object-content w-60"
                    />
                  </a>
                </div>
                <h4 className="text-center font-Poppins font-bold text-xl mt-5">
                  Published
                </h4>
              </div>
            </div>
            {/* <div className="w-full h-full flex justify-center">
               <div className="w-fit h-fit shadow-sm shadow-gray-300 p-5 border-t-4 border-gray-200 hover:shadow-lg hover:p-6 transform duration-200">
                <div className="w-fit h-fit cursor-not-allowed">
                  <img src={} alt="" className="object-content w-60"/>
                </div>
                <h4 className="text-center font-Poppins font-bold text-xl mt-5">
                  On Progress 
                </h4>
                </div>
               </div> */}
          </div>
        </div>
      </section>
      <section id="ContactSect">
        <div className="w-screen h-auto p-10 lg:p-20 bg-gray-100">
          <div className="h-fit w-full text-center py-10">
               <h1 className="text-2xl font-Poppins font-bold">
                  Get in touch
               </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
          <form onSubmit={onSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
            <input
              className="rounded-md border-none w-full "
              type="text"
              name="from_name"
              placeholder="Subject's name"
              value={toSend.from_name}
              onChange={handleChange}
            />
            <input
            className="rounded-md border-none w-full"
              type="text"
              name="to_name"
              placeholder="Object's name"
              value={toSend.to_name}
              onChange={handleChange}
            />
            </div>
            <br/>
            <div className="grid grid-cols-1">
            <textarea
            className="rounded-md border-none h-24"
              type="text"
              name="message"
              placeholder="Your message"
              value={toSend.message}
              onChange={handleChange}
            />
            <br/>
            <input
            className="rounded-md border-none"
              type="text"
              name="reply_to"
              placeholder="Your email"
              value={toSend.reply_to}
              onChange={handleChange}
            />
            </div>
            <br/>
            <button className="py-2 w-full bg-blue-600 text-white rounded-md" type="submit">Submit</button>
          </form>
          <div className="w-full h-fit bg-white text-center p-7 rounded-md">
              <h4 className="font-Roboto text-lg font-bold">
                Example:
              </h4>
              <br/>
               <p className="text-left">
                  From = Nathan@example.com
                  <br/>
                  To = Julian@example.com
                  <br/>
                  <br/>
                  <div className="w-fit h-fit py-5 px-10 border border-black">
                    Messages : "Hi bro, How are you? feel better now?"
                  </div>
                  <br/>
               </p>

               <p className="text-right text-sm font-bold">
                  Note = Your email is required for replying.
               </p>
          </div>
          </div>
        </div>
      </section>
      
<footer id="foot" className="p-4 bg-white sm:p-6 dark:bg-gray-800">
<div className="md:flex md:justify-between">
<div className="mb-6 md:mb-0">
<a href="#HomeSect" className="flex items-center">
<img src={Logo2} className="mr-1 h-12" alt="FlowBite Logo"/>
<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Adham</span>
</a>
</div>
<div className="grid grid-cols-2 sm:gap-0 md:gap-10 mr-5">
<div>
<h2 className="mb-6 text-sm font-semibold font-Poppins text-gray-900 uppercase dark:text-white">Resources</h2>
<ul className="text-gray-600 dark:text-gray-400">
<li className="mb-4">
<a href="https://flowbite.com" className="hover:underline">Flowbite</a>
</li>
<li>
<a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
</li>
</ul>
</div>
<div>
<h2 className="mb-6 text-sm font-semibold font-Poppins text-gray-900 uppercase dark:text-white">Follow us</h2>
<ul className="text-gray-600 dark:text-gray-400">
<li className="mb-4">
<a href="https://instagram.com/adam_harits225" className="hover:underline ">Instagram</a>
</li>
<li>
<a href="https://www.upwork.com/freelancers/~01728f3681a4a7a6b2?viewMode=1" className="hover:underline">Upwork</a>
</li>
</ul>
</div>
</div>
</div>
<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
<div className="sm:flex sm:items-center sm:justify-between">
<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"><a href="http://adhamfrontweb.com" className="hover:underline">adhamfrontweb.com</a>
</span>
<div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 mr-6">
{/* <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg>
</a> */}
<a href="https://instagram.com/adam_harits225" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path></svg>
</a>
{/* <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
</a> */}
<a href="https://github.com/AdamHarish25" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
</a>
{/* <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd"></path></svg>
</a> */}
</div>
</div>
</footer>
      <Sidebar />
      <ButtonUp/>
    </div>
  );
}

export default App;
