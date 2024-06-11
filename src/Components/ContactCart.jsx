import { deleteDoc, doc } from "firebase/firestore"
import { FaRegTrashAlt } from "react-icons/fa"
import { HiOutlineUserCircle } from "react-icons/hi"
import { RiEditCircleLine } from "react-icons/ri"
import { db } from "../Config/firebase"
import useDisclose from "../hooks/useDisclose"
import AddUpdate from './AddUpadte'
import { toast } from "react-toastify"

// eslint-disable-next-line react/prop-types
const ContactCart = ({contact}) => {
  const {onClose,open,isOpen} = useDisclose(true);

  const deleteContact= async(ID)=>{
    try {

      await deleteDoc(doc(db,"Contacts",ID));
      toast.success("Contact deleted sucessfully");
      
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
<>
  <div className=" flex justify-between bg-yello rounded-lg p-2" key={contact.ID}>
    <div className=" flex gap-2">
      <HiOutlineUserCircle className=" text-4xl text-orange" />
      <div className="">
        <h2 className=" font-medium">{contact.Name}</h2>
        <p className=" text-sm">{contact.Email}</p>
      </div>
    </div>
    <div className=" flex items-center text-3xl">
      <RiEditCircleLine onClick={isOpen} className=" cursor-pointer"/>
      <FaRegTrashAlt onClick={()=>deleteContact(contact.ID)} className=" text-orange cursor-pointer" />

    </div>
  </div>
  <AddUpdate contact={contact} isUpdate isOpen={open} onClose={onClose} />

</>
  );
};

export default ContactCart
