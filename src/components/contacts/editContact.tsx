function EditContact() {
  return (
    <div className="relative px-5 flex-1 font-poppins">
      <div>
        <h1 className="mx-auto h-12 my-10 pb-5 text-xl text-center font-bold text-gray-500">
          Edit Contact
        </h1>
        <form
          action="submit"
          className="flex w-80 mx-auto flex-col space-y-10 pb-5"
        >
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
            <h1>Save Edited Contact</h1>
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditContact;
