import React from "react";

function CreateContactForm() {
  return (
    <div className="border w-full font-poppins">
      <div>
        <form action="submit" className="flex flex-col space-y-5">
          <div className="space-x-2">
            <label>First Name:</label>
            <input type="text" className="shadow-md rounded-md p-2" />
          </div>
          <div className="space-x-2">
            <label>Last Name:</label>
            <input type="text" className="shadow-md rounded-md p-2" />
          </div>
          <div className="flex">
            <h1>Status</h1>
            <div className="flex flex-col">
              <label>
                <input type="radio" name="status" value="active" /> Active
              </label>
              <label>
                <input type="radio" name="status" value="inactive" /> Inactive
              </label>
            </div>
          </div>
          <button>
            <h1>Save Contact</h1>
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateContactForm;
