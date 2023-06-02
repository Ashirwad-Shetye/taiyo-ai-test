import { GrClose } from "react-icons/gr";

interface Props {
  closeModal: () => void;
}

function CreateContactForm({ closeModal }: Props) {
  return (
    <div className="relative px-5 flex-1 font-poppins border rounded-xl">
      <button
        onClick={closeModal}
        className="absolute w-8 flex justify-center items-center h-8 right-0 top-0 m-3 hover:bg-accent1 hover:rounded-full"
      >
        <GrClose />
      </button>
      <div>
        <h1 className="mx-auto h-12 my-10 pb-5 text-xl text-center font-bold text-gray-500">
          Create Contact
        </h1>
        <form action="submit" className="flex flex-col space-y-10 pb-5">
          <div className="flex flex-col space-y-5">
            <div className="space-x-2">
              <label>First Name:</label>
              <input
                type="text"
                maxLength={24}
                placeholder="Enter here..."
                className="shadow-md rounded-md p-2"
              />
            </div>
            <div className="space-x-2">
              <label>Last Name:</label>
              <input
                type="text"
                maxLength={24}
                placeholder="Enter here..."
                className="shadow-md rounded-md p-2"
              />
            </div>
            <div className="flex">
              <h1 className="w-24">Status:</h1>
              <div className="flex flex-col">
                <label>
                  <input type="radio" name="status" value="active" /> Active
                </label>
                <label>
                  <input type="radio" name="status" value="inactive" /> Inactive
                </label>
              </div>
            </div>
          </div>
          <button
            className="h-12 w-40 mx-auto px-3 flex items-center justify-center space-x-2 bg-secondary/50 text-white rounded-md hover:scale-105 
              hover:shadow-md duration-150"
          >
            <h1>Save Contact</h1>
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateContactForm;
