import { createPortal } from "react-dom";
import { GrClose } from "react-icons/gr";

const Model = ({ onClose,isOpen,children}) => {
  return createPortal(
    <>
      {isOpen &&(
        <div
        className=" grid place-items-center absolute top-0 backdrop-blur z-40 h-screen w-screen">
          <div className=" z-50 m-auto relative min-h-[200px] max-w-[80%] bg-white rounded-lg p-4 min-w-[80%]">
            <div className=" flex justify-end">
              <GrClose className=" text-2xl font-medium" onClick={onClose}/>
            </div>
            {children}
          </div>
        </div>
      )}
    </>,document.getElementById("Model-root")
  );
};

export default Model

