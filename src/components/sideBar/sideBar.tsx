import Logo from "../../common/logo";
import SideBarButton from "../UI/sideBarButton";
import { AiOutlineLineChart, AiOutlineUserAdd } from "react-icons/ai";
import { LuContact } from "react-icons/lu";

function SideBar() {
  return (
    <div className="h-screen flex w-20">
      <div className="bg-white m-3 flex-1 flex flex-col items-center rounded-2xl shadow-xl">
        <Logo />
        <div className="flex-1 flex items-center justify-center">
          <div className="h-full max-h-80 flex flex-col items-center justify-between">
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
