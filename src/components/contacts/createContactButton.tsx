import { AiOutlineUserAdd } from "react-icons/ai";

interface Props {
  openModal: () => void;
}

function CreateContactButton({ openModal }: Props) {
  return (
    <button
      onClick={openModal}
      className="h-12 px-3 flex items-center space-x-2 bg-secondary/50 text-white rounded-md hover:scale-105 
        hover:shadow-md duration-150"
    >
      <AiOutlineUserAdd className="text-xl" />
      <h1>Create Contact</h1>
    </button>
  );
}

export default CreateContactButton;
