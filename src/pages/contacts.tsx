import { useState } from "react";
import CreateContactButton from "../components/contacts/createContactButton";
import CreateContactForm from "../components/contacts/createContactForm";
import ContactList from "../components/contacts/contactList";

function Contacts() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-screen relative flex">
      <div className="bg-white m-3 flex flex-col justify-center items-center flex-1 rounded-xl shadow-xl">
        <div className="h-16 w-full pl-5 flex items-center text-left">
          <h1 className="text-2xl font-bold text-gray-700">Contacts</h1>
        </div>
        {isModalOpen ? null : (
          <div className="h-24 flex justify-center items-center">
            <CreateContactButton openModal={openModal} />
          </div>
        )}
        <div className="flex-1 flex justify-center items-center">
          {isModalOpen ? (
            <CreateContactForm closeModal={closeModal} />
          ) : (
            <ContactList />
          )}
        </div>
      </div>
    </div>
  );
}

export default Contacts;
