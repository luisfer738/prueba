import type { NextPage } from 'next'
import Head from 'next/head'
import SideBar from "../Components/Sidebar";

const Home: NextPage = () => {
  return (
    <main className="flex min-h-screen max-w-7xl mx-auto  mobileg:max-sm:px-[50px]">
      <SideBar />
    </main>
  );
};

export default Home
