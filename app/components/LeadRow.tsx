// components/LeadRow.tsx
import React from 'react';
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { LuCalendarRange } from "react-icons/lu";
import { IoMdMore } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
interface Lead {

  company: string,
  contactPerson:string,
  contactNum:number,
  statusText:string
  location: string;
  project: string;
  contact: string;
  daysLeft:string;
  status: 'New' | 'Hot' | 'Lost' | 'Won';
  followup: string;
}

interface LeadRowProps {
  lead: Lead;
}

export const LeadRow: React.FC<LeadRowProps> = ({ lead }) => {
  const getStatusClass = (status: Lead['status']): string => {
    switch (status) {
      case 'New':
        return 'bg-blue-500';
      case 'Hot':
        return 'bg-red-500';
      case 'Lost':
        return 'bg-gray-500';
      case 'Won':
        return 'bg-green-500';
      default:
        return '';
    }
  };
 

  return (
    <tr className="border-b">
      
      <td className="p-4 text-gray-400 flex font-bold  px-auto"> <IoPersonSharp className='my-auto mx-1' size={40}/>{lead.company} <br /> {lead.location}</td>
      <td className="p-4 text-gray-400 font-bold">{lead.project}</td>
      <td className="p-4 text-gray-400 font-bold">{lead.contactPerson} <br />{lead.contactNum}</td>
      <td className="p-4 font-bold text-gray-400">
        <span className={`px-2 py-1 rounded-full text-white ${getStatusClass(lead.status)}`}> 
          {lead.status} 
        </span> <br />
        <span>{lead.statusText}</span>
      </td>
      <td className="p-4 font-bold text-gray-400">{lead.followup} <br />{lead.daysLeft}</td>
      <td className="p-4 flex space-x-2">
        <div className="text-gray-400"><MdOutlineWifiCalling3 size={20}/></div>
        <div className="text-gray-400"><LuCalendarRange size={20}/></div>
        <div className="text-gray-400"><IoMdMore size={20}/> </div>
      </td>
    </tr>
  );
};
