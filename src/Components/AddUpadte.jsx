import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import Model from "./Model";
import { Field, Formik, Form, ErrorMessage } from 'formik';
import {db} from '../Config/firebase'
import { toast } from "react-toastify";
import * as Yup from "yup"

const contactValidation = Yup.object().shape({
  Name: Yup.string().required("Name is required"),
  Email: Yup.string().email("Invalide Email").required("Email is required"),
})

const AddUpadte = ({ isOpen, onClose, isUpdate,contact }) => {

  const addContact= async(contact)=>{
    try {

      const contactRef = collection(db,"Contacts");
      await addDoc(contactRef,contact);
      onClose();
      toast.success("Contact added sucessfully");
      
    } catch (error) {
      console.log(error);
      
    }
  }

  const updateContact= async(contact,ID)=>{
    try {

      const contactRef = doc(db,"Contacts",ID);
      await updateDoc(contactRef,contact)
      onClose();
      toast.success("Contact updated sucessfully");
      
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div>
      <Model isOpen={isOpen} onClose={onClose}>
        <Formik 
        validationSchema={contactValidation}
        initialValues={isUpdate?{
            Name:contact.Name,
           Email:contact.Email,
        }:{
            Name:"",
            Email:"",
        }}
        onSubmit={(values)=>{
            console.log(values);

            isUpdate? updateContact(values,contact.ID):
            addContact(values);
        }}>
          <Form className=" flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="Name" className=" h-10 border rounded border-black" />
              <div className="text-xs text-red-500">
              <ErrorMessage name="Name"/>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field type="Email" name="Email" className=" h-10 border rounded border-black" />
              <div className=" text-xs text-red-500">
                <ErrorMessage name="Email"/>
              </div>
            </div>

            <button type="submit" className="bg-orange border border-black rounded px-3 py-1.5 self-end">
              {isUpdate? "Update":"add"} Contact</button>
          </Form>
        </Formik>
      </Model>
    </div>
  );
}

export default AddUpadte;
