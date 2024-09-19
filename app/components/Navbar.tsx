
import { LuFileSpreadsheet } from "react-icons/lu";
import { FaRupeeSign } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { IoTimerOutline } from "react-icons/io5";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import { RiSettingsLine } from "react-icons/ri";
import './style.css'
export default function Navbar() {
 
  return (
    <nav className=" mx-auto text-white  bg-gray-600 ">
<div className="flex justify-between bg-white">
    {/* logo */}
    
   <div className="ms-8 my-auto rounded-full bg-2nav bg-blue-300">
    <AiOutlineThunderbolt size={40} className="p-1"/>
    
   </div>
     {/* profile */}
     <div className="flex m-3 p-2">
     <div className=""><IoNotificationsCircleOutline size={50} className="text-gray-500"/></div>
     <div className="rouded-full ps-1 mt-1 ">
        <BsPersonCircle size={40} className="  border-gray-500 text-gray-500"/>
     </div>
     <div className="ps-1">
     <p className="text-gray-500 font-bold text-md pt-1  ">Nithin Joshap</p>
<p  className="text-gray-500 text-sm ">Welcome</p>

     </div>

<div>
<div className="ps-1">
    <RiSettingsLine size={40} className=" rounded-full m-2  text-gray-500 "/>
</div>
</div>
     </div>
</div>

      <div className="container mx-auto flex justify-between items-center" >
       
        <div className="flex mx-auto space-x-8 ">
    {/* Navigation Links */}
          <div className="flex justify-center space-x-7 mt-4 mx-2">

  <div  className="text-md bg-blue-300 px-3 flex py-3 rounded-t-lg bg-leads"> <LuFileSpreadsheet size={29} className="my-auto"/> <div className="mx-1">
  <p className="font-bold"> Leads </p>  <p className="text-sm"> 12 leads pening</p>
  </div>
</div>
  <div  className="text-md  px-3 flex py-3 "> <FaRupeeSign size={29} className="my-auto"/> <div className="mx-1">
  <p className="font-bold"> Accounts </p>  <p className="text-sm"> 10 active account</p>
  </div>
</div>
  <div  className="text-md px-3 flex py-3"> <MdContacts size={29} className="my-auto"/> <div className="mx-1">
  <p className="font-bold"> Contacts </p>  <p className="text-sm"> 10 active user</p>
  </div>
</div>
  <div  className="text-md  px-3 flex py-3"> <IoTimerOutline size={29} className="my-auto"/> <div className="mx-1">
  <p className="font-bold"> Tasks </p>  <p className="text-sm"> 25 task pending</p>
  </div>
</div>

</div>

        </div>

        
      </div>

     
    </nav>
  );
}
