import { send } from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_ozlwvnd", "template_k9jqv5w", toSend, "N-l5OuqluInHPo6Rn")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        window.location.reload(true);
      })
      .catch((err) => {
        console.log("FAILED...", err);
        window.location.reload(false);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <section id="ContactSect">
      <div className="w-screen h-auto p-10 lg:p-20 bg-gray-100">
        <div className="h-fit w-full text-center py-10">
          <h1 className="text-2xl font-Poppins font-bold">Get in touch</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
          <form onSubmit={onSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
              <input
                className="rounded-md border-none w-full"
                type="text"
                name="from_name"
                placeholder="Subject's name"
                value={toSend.from_name}
                onChange={handleChange}
                required
              />
              <input
                className="rounded-md border-none w-full"
                type="text"
                name="to_name"
                placeholder="Object's name"
                value={toSend.to_name}
                onChange={handleChange}
                required
              />
            </div>
            <br />
            <div className="grid grid-cols-1">
              <textarea
                className="rounded-md border-none h-24"
                type="text"
                name="message"
                placeholder="Your message"
                value={toSend.message}
                onChange={handleChange}
                required
              />
              <br />
              <input
                className="rounded-md border-none"
                type="email"
                name="reply_to"
                placeholder="Your email"
                value={toSend.reply_to}
                onChange={handleChange}
                required
              />
            </div>
            <br />
            <button
              className="py-2 w-full bg-blue-600 text-white rounded-md"
              type="submit"
            >
              Submit
            </button>
          </form>
          <div className="w-full h-fit bg-white text-center p-7 rounded-md">
            <h4 className="font-Roboto text-lg font-bold">Example:</h4>
            <br />
            <p className="text-left">
              From = Nathan@example.com
              <br />
              To = Julian@example.com
              <br />
              <br />
              <div className="w-fit h-fit py-5 px-10 border border-black">
                Messages : "Hi bro, How do you feel? feel better now?"
              </div>
              <br />
            </p>

            <p className="text-right text-sm font-bold">
              Note = Your email is required for replying.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
