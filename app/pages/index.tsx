// pages/index.tsx
import Head from 'next/head';
import  Navbar  from '../components/Navbar';
import { LeadTable } from '../components/LeadTable';

const HomePage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Lead Dashboard</title>
        <meta name="description" content="Lead management system" />
      </Head>
      <Navbar />
    
        <LeadTable />
      
    </div>
  );
};

export default HomePage;
