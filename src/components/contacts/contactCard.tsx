import { deleteContact } from "../../store/reducer/contactsReducer";
import { useDispatch } from "react-redux";

function ContactCard({ contact, openEditModal }) {
  const { id, firstName, lastName, status } = contact;

  const dispatch = useDispatch();

  const handleDeleteContact = (id: number) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      dispatch(deleteContact(id));
    }
  };

  return (
    <div
      key={id}
      className="w-72 h-80 relative bg-accent1 rounded-xl font-poppins"
    >
      <div className="mx-5 p-5 mt-5 space-y-5 bg-white rounded-lg text-gray-500">
        <h1 className="truncate">
          first name:{" "}
          <span className="text-gray-700 font-semibold">{firstName}</span>
        </h1>
        <h1 className="truncate">
          last name:{" "}
          <span className="text-gray-700 font-semibold">{lastName}</span>
        </h1>
        <h1>
          status: <span className="text-gray-700 font-semibold">{status}</span>
        </h1>
      </div>
      <div className="flex flex-col mt-6 space-y-5 w-fit mx-auto">
        <button
          onClick={() => openEditModal(id)}
          className="h-10 w-20 px-2 text-center space-x-2 bg-secondary/50 text-white rounded-md hover:scale-105 
          hover:shadow-md duration-150"
        >
          Edit
        </button>
        <button
          onClick={() => handleDeleteContact(id)}
          className="h-10 w-20 px-2 text-center space-x-2 bg-secondary/50 text-white rounded-md hover:scale-105 
          hover:shadow-md duration-150"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ContactCard;
