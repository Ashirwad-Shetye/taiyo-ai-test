function ContactCard() {
  return (
    <div className="w-64 h-80 relative bg-accent1 rounded-xl">
      <div className="mx-5 p-5 mt-5 space-y-5 bg-white rounded-lg">
        <h1>first-name: Ashirwad</h1>
        <h1>last-name: Shetye</h1>
        <h1>status: Active</h1>
      </div>
      <div className="flex flex-col mt-6 space-y-5 w-fit mx-auto">
        <button
          className="h-10 w-20 px-2 text-center space-x-2 bg-secondary/50 text-white rounded-md hover:scale-105 
          hover:shadow-md duration-150"
        >
          Edit
        </button>
        <button
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
