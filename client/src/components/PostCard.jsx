import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useState } from "react";
import { Button } from "flowbite-react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};
Modal.setAppElement("#root");

export default function PostCard({ post }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="group relative w-full hover:border border-e-2 border-b-2 hover:border-l-2 hover:shadow-orange-100 hover:border-s-white hover:shadow-2xl hover:border-pink-100 h-[400px] overflow-hidden rounded-lg sm:w-[350px]">
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt="post cover"
          className="h-[260px] w-full  object-cover group-hover:h-[262px] z-20"
        />
      </Link>
      <div className="p-3 flex flex-col gap-2 text-center ">
        <p className="font-semibold line-clamp-2">{post.title}</p>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <h6 className="">{selectSkill && selectSkill.category}</h6>
          <p className="list-decimal px-4 font-Poppins text-sm text-white bg-gradient-to-r from-amber-950 to-emerald-900 via-orange-900">
            {post.content}
          </p>

          <div className="flex justify-end">
            <Button
              onClick={closeModal}
              gradientDuoTone="purpleToPink"
              outline
              className=""
            >
              Close
            </Button>
          </div>
        </Modal>
        <Button
          onClick={() => {
            setSelectSkill(post);
            openModal();
          }}
          gradientDuoTone="purpleToPink"
          outline
          className="text-xl absolute top-200 mt-14 self-center "
        >
          {/* Displaying the post category */}
          {post.category} read more
        </Button>
      </div>
    </div>
  );
}
