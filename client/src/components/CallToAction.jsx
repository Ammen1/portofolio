import { Button } from "flowbite-react";
import go from "../assets/images/Projects/go.png";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to know about project more...?</h2>
        <p className="text-gray-500 my-2">
          Checkout these sources code on github Projects
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="http://gooderash.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Goderash Fuel Delivery Web it is under developement
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img
          src={go}
          alt="Image Description"
          className="object-cover w-auto h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
