// components/LeadTable.tsx
import React from 'react';
import { LeadRow } from './LeadRow';
import { MdCancel } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";
import { IoFilterOutline } from "react-icons/io5";
import { IoMdAddCircle } from "react-icons/io";

import { FaSearch } from "react-icons/fa"; 
import Link from 'next/link';
import './style.css'
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

export const LeadTable: React.FC = () => {
  const leads: Lead[] = [
    { company: 'Try Jobs Private Limited',contactPerson:'person1',contactNum:809, statusText:'good',daysLeft:'two', location: 'Coimbatore', project: 'CRM', contact: 'Ramcharan', status: 'New', followup: '20 Jan 2022' },
    { company: 'Try Jobs Private Limited',contactPerson:'person1',contactNum:809, statusText:'good',daysLeft:'two', location: 'Coimbatore', project: 'CRM', contact: 'Ramcharan', status: 'New', followup: '20 Jan 2022' },
    { company: 'Try Jobs Private Limited',contactPerson:'person1',contactNum:809, statusText:'good',daysLeft:'two', location: 'Coimbatore', project: 'CRM', contact: 'Ramcharan', status: 'New', followup: '20 Jan 2022' },
    { company: 'Try Jobs Private Limited',contactPerson:'person1',contactNum:809, statusText:'good',daysLeft:'two', location: 'Coimbatore', project: 'CRM', contact: 'Ramcharan', status: 'New', followup: '20 Jan 2022' },
    { company: 'Try Jobs Private Limited',contactPerson:'person1',contactNum:809, statusText:'good',daysLeft:'two', location: 'Coimbatore', project: 'CRM', contact: 'Ramcharan', status: 'New', followup: '20 Jan 2022' },
    { company: 'Try Jobs Private Limited',contactPerson:'person1',contactNum:809, statusText:'good',daysLeft:'two', location: 'Coimbatore', project: 'CRM', contact: 'Ramcharan', status: 'New', followup: '20 Jan 2022' },
    { company: 'Try Jobs Private Limited',contactPerson:'person1',contactNum:809, statusText:'good',daysLeft:'two', location: 'Coimbatore', project: 'CRM', contact: 'Ramcharan', status: 'New', followup: '20 Jan 2022' },
    { company: 'Try Jobs Private Limited',contactPerson:'person1',contactNum:809, statusText:'good',daysLeft:'two', location: 'Coimbatore', project: 'CRM', contact: 'Ramcharan', status: 'New', followup: '20 Jan 2022' },
    { company: 'Try Jobs Private Limited',contactPerson:'person1',contactNum:809, statusText:'good',daysLeft:'two', location: 'Coimbatore', project: 'CRM', contact: 'Ramcharan', status: 'New', followup: '20 Jan 2022' },
    // { company: 'Aagnia Technology Private Limited', location: 'Coimbatore', project: 'Ecommerce', contact: 'Karthikeyan', status: 'Hot', followup: '25 Jan 2022' },
    // { company: 'Try Jobs Private Limited', location: 'Coimbatore', project: 'CRM', contact: 'Ramcharan', status: 'Lost', followup: '20 Jan 2022' },
    // Add more leads here...
  ];

  return (
    <div className="overflow-x-auto bg-gray-200 shadow-md   p-4">

{/* lead category menu */}
<div className="flex ">
        {/* Navigation Tabs */}
        <Link href={''} className="bg-white font-bold text-sm rounded-tr-lg mt-4 py-2 px-7 text-gray-500 flex" style={{borderTopRightRadius:"45px"}}>
  All leads <MdCancel className='mt-1 ms-1'/>
</Link>
        <Link href={''} className="text-gray-500 text-sm mt-4 py-2 px-5  font-bold hover:text-gray-900  flex hover:border-b-2 rounded-top-lg bg-gray-300 hover:border-gray-300 " style={{borderTopRightRadius:"35px", borderTopLeftRadius:"35px"}}>
          Add New Lead  <MdCancel  className='mt-1 ms-1'/>
        </Link>
        <Link href={''} className="text-gray-500  mt-4 py-2 px-5  font-bold text-sm hover:text-gray-900 hover:border-b-2 flex rounded-top-lg bg-gray-300 hover:border-gray-300" style={{borderTopRightRadius:"35px", borderTopLeftRadius:"35px"}}>  
          Edit Lead - Aug<MdCancel  className='mt-1 ms-1'/>
        </Link>
      </div>

{/* lead nav */}

      <div className="flex justify-between pb-1 pt-6 px-4 bg-white">

{/* lead heading */}
        <div className=''>
        <h2 className="text-2xl text-blue-400 text font-bold ">All Leads</h2>
        <p className='font-bold  text-sm text-gray-400'>From 20 september to 20 th December 2021 </p>
        </div>
      
      {/* search field */}
      <div className='flex justify-end'>

       <div className='flex border-2 border-gray-400 mx-4 py-1 px-2 search my-auto' >
        <input type="text" placeholder='type here'  />
       <FaSearch className='my-auto ' size={20}/>
        </div> 
        <button className='shadow-sm my-auto py-1  px-2 mx-4 font-bold text-gray-500 shadow-black'>All leads \/ </button>
        <IoFilterOutline className=' my-auto  mx-4 text-gray-500' size={30}/> <CiShare2 className=' my-auto mx-4 text-gray-500' size={30}/>
        <button className="bg-green-500 text-white px-4 py-2 mx-2 my-auto flex search" > <IoMdAddCircle className='my-auto m-1'/>Add New</button>
         </div>

       
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-50 text-left text-sm text-gray-400">
            <th className="p-4 mx-auto">Company</th>
            <th className="p-4">Project Tag</th>
            <th className="p-4">Contact</th>
            <th className="p-4">Status</th>
            <th className="p-4">Follow-up Date</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody className='bg-white'>
          {leads.map((lead, index) => (
            <LeadRow key={index} lead={lead} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
