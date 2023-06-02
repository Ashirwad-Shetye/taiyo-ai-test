import ContactCard from "./contactCard";

function ContactList() {
  return (
    <div className="flex-1 overflow-hidden">
      <h1 className="text-lg font-semibold text-gray-500 mx-5">Contact List</h1>
      <div
        className="overflow-x-hidden justify-items-center mt-5 h-[26rem] grid grid-flow-row-dense md:grid-cols-2 
        lg:grid-cols-3 xl:grid-cols-4 gap-5 overflow-y-scroll"
      >
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </div>
    </div>
  );
}

export default ContactList;
