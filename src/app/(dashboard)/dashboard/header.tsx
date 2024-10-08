import { orbitron } from "src/app/fonts"
import { FaCog } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  return <div className="flex justify-between items-center w-full p-3 shadow-sm">
    <div><h2 className={`uppercase ${orbitron.className} text-3xl`}>Lumina</h2></div>
    <div className="w-1/3 flex gap-2 focus:outline-1 border-[0.5px] rounded-full px-2 py-2 bg-transparent">
      <IoSearchOutline className="text-2xl cursor-pointer"/>
      <input type="search" className="bg-transparent w-full h-full mr-2 outline-none" placeholder="Search"/>
    </div>
    <div className="flex gap-2 justify-center items-center">
      <FaBell className="cursor-pointer text-[24px]" title="Notifications"/>
      <FaCog className="cursor-pointer text-[24px]" title="Settings" />
      <FaUser className="cursor-pointer text-[24px]" title="Profile"/></div>
  </div>
}
export default Header