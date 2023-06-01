import CreateContact from "./pages/createContact";
import Contacts from "./pages/contacts";
import ChartsAndMaps from "./pages/chartsAndMaps";
import SideBar from "./components/sideBar/sideBar";

function App() {
  return (
    <>
      <main className="relative h-[100dvh] flex">
        <SideBar />
        <div className="flex-1"></div>
      </main>
    </>
  );
}

export default App;
