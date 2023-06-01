import Logo from "../../common/logo";
import SideBarButton from "../UI/sideBarButton";
import { AiOutlineLineChart, AiOutlineUserAdd } from "react-icons/ai";
import { LuContact } from "react-icons/lu";

function SideBar() {
  return (
    <div className="fixed top-0 left-0 h-screen flex w-20 md:w-2/12 ">
      <div className=" m-3 flex-1 flex flex-col items-center ">
        <Logo />
        <div className="bg-white flex-1 flex items-center justify-center rounded-2xl shadow-md">
          <div className="h-full max-h-80 flex flex-col items-center justify-between px-2">
            <SideBarButton>
              <AiOutlineUserAdd />
            </SideBarButton>
            <SideBarButton>
              <LuContact />
            </SideBarButton>
            <SideBarButton>
              <AiOutlineLineChart />
            </SideBarButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
