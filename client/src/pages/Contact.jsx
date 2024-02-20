import { createElement, useRef } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "flowbite-react";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          form.current.reset();
          // Success toast message
          toast.success("Email send Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <div
      className=" sm:flex-row p-3 px-5 py-5 border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl "
      id="contact"
    >
      <Toaster />
      <div className="md:container px-5 py-8 ">
        <h2 className="title text-2xl font-bold" data-aos="fade-down">
          <span className="">{Contact.title}</span>
        </h2>
        <h4 className=" text-2xl font-serif" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex md:flex-row flex-col space-x-10">
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 bg-gray rounded"
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email Id"
              required
              className="border border-slate-600 p-3 bg-gary rounded"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-slate-600 p-3 rounded h-44 "
              required
            ></textarea>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              className=" w-20 justify-center items-center "
            >
              Submit
            </Button>
          </form>
          <div className="flex-1 flex flex-col gap-6 dark:white ">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-4"
              >
                <h4 className=" font-extrabold">
                  {createElement(content.icon)}
                </h4>
                <a className=" font-bold" href={content.link} target="_blank">
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
