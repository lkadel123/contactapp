import Navbar from "./Components/Navbar"
import { FiSearch } from 'react-icons/fi'
import { FaPlusCircle } from 'react-icons/fa'
import { useEffect, useState } from "react"
import { collection, onSnapshot } from 'firebase/firestore'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from "./Config/firebase"
import ContactCart from "./Components/ContactCart"
import AddUpadte from './Components/AddUpadte'
import useDisclose from "./hooks/useDisclose"
import NotFoundContact from "./Components/NotFoundContact"

const App = () => {

  const [contacts, setContacts] = useState([]);
  const {onClose,isOpen,open} = useDisclose(false);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "Contacts");

        onSnapshot(contactsRef,(snapshot)=>{
          const contactList = snapshot.docs.map((doc) => {
            return {
              ID: doc.id,
              ...doc.data()
            }
          });
          setContacts(contactList);
          return contactList;
        })
        
      } catch (error) {
        console.error("Error fetching contacts: ", error);
      }
    };
    getContacts();
  }, []);

  const filterContact = (e)=>{
    const value = e.target.value;

        const contactsRef = collection(db, "Contacts");

        onSnapshot(contactsRef,(snapshot)=>{
          const contactList = snapshot.docs.map((doc) => {
            return {
              ID: doc.id,
              ...doc.data()
            }
          });

          const filteredContacts = contactList.filter(contact => contact.Name.toLowerCase().includes(value.toLowerCase())
        );
          setContacts(filteredContacts);
          return filteredContacts;
        })
  }

  return ( 
    <div className="max-w-[370px] mx-auto px-4">
      <Navbar />
      <div className="flex gap-2">
        <div className="flex relative items-center flex-grow">
          <FiSearch className="text-white text-3xl absolute ml-1" />
          <input onChange={filterContact} type="text" className="bg-transparent border rounded-md h-10 flex-grow pl-9 text-white" />
        </div>
        <FaPlusCircle onClick={isOpen} className="text-white text-4xl cursor-pointer" />
      </div>
      <div className="mt-4 gap-3 flex flex-col">
          {contacts.length === 0 ? (<NotFoundContact/>
          ):(
            contacts.map((contact) => (
            <ContactCart key={contact.ID} contact={contact} />
          ))
        )}
      </div>
      <AddUpadte isOpen={open} onClose={onClose} />
      <ToastContainer/>
    </div>
  )
}

export default App;

