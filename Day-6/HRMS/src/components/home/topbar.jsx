import { FaUsersGear } from "react-icons/fa6";
import { FaSearch, FaBell, FaUser } from "react-icons/fa";
import LogoutBUtton from "../utils/logout";
export default function TopBar(){
    const baseCss = 'cursor-pointer text-2xl';
    return(
        <div className="flex justify-between">
            <div className="flex items-center p-2 gap-5">
                <FaUsersGear className ="cursor-pointer text-4xl"/>
                <h1 className="text-3xl text-black font-bold">HRMS PORTAL</h1>
            </div>
            <div className="flex not-only-of-type:items-center justify-between text-5xl gap-6 mr-4">
            <FaSearch className = {`${baseCss}`}/>
            <FaBell className = {`${baseCss}`}/>
            <FaUser className = {`${baseCss}`}/>
            <LogoutBUtton />
            </div>
        </div>
    )
}