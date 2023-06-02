import { useEffect, useState } from "react";
import ContactCard from "./contactCard";
import { getItemFromStorage } from "../../utils/storage";

function ContactList() {
  const [contacts, setContacts] = useState<[] | null>(null);
  useEffect(() => {
    const storedData = getItemFromStorage("contacts");

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setContacts(parsedData);
    }
  }, []);

  return (
    <div className="flex-1 overflow-hidden">
      <h1 className="text-lg font-semibold text-gray-500 mx-5">Contact List</h1>
      <div
        className="overflow-x-hidden justify-items-center mt-5 h-[26rem] grid grid-flow-row-dense md:grid-cols-2 
        lg:grid-cols-3 xl:grid-cols-4 gap-5 overflow-y-scroll"
      >
        {contacts &&
          contacts.map((contact) => <ContactCard contact={contact} />)}
        {!contacts && <h1>Empty</h1>}
      </div>
    </div>
  );
}

export default ContactList;
