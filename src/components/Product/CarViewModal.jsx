import React, { useRef } from "react";
import { MdClose } from "react-icons/md";

const CarViewModal = ({ src, onClose }) => {
  const handleClose = () => {
    onClose(false);
    console.log("click");
  };
  const iframeRef = useRef(null);
  console.log(iframeRef);
  return (
    <>
      <div className="car-modal__close">
        <span onClick={handleClose}>
          <MdClose />
        </span>
      </div>
      <iframe
        ref={iframeRef}
        src={src}
        title="YouTube video player"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default CarViewModal;
