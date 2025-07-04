import { Outlet } from "react-router-dom";
import TopBar from "../components/home/topbar";
import Sidebar from "../components/home/siderbar";

export default function Home(){
    return(
        <div className = " flex flex-col h-screen">
            <TopBar/>
            <div className=" flex flex-1 overflow-hidden">
                <div>
                    <Sidebar/>
                </div>
                <div className="flex-1 overflow-y-auto p-5">
                    <Outlet/>
                </div>
            </div>
        </div>

    )
}
