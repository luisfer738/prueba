import type { NextPage } from 'next'
import SideBar from "../components/SideBar";



const Home: NextPage = () => {
  return (
    <main className="flex min-h-screen max-w-7xl mx-auto  mobileg:max-sm:px-[50px]">
      <SideBar />
    </main>
  );
};

export default Home
