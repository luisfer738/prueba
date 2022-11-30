import {
  LightningBoltIcon,
  PhoneIcon,
  StarIcon,
  SunIcon,
  UserGroupIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Styles from "../styles/SideBarStyles.module.css";
import SideBarMenuItems from "./SideBarMenuItems";
export default function SideBar() {
  return (
    <nav className={Styles.SidebarDivPrimary}>
      <div className="flex">
        <Image
          src="/acapa.png"
          alt="Logo de la entidad"
          width={72}
          height={36}
          className="hover:scale-110 w-auto h-auto sm:w-[52px] sm:h-[35px] transition duration-500 ease-out"
        ></Image>
        <div className="relative group hidden lg:inline">
          <div className={Styles.SearchEfect}></div>
          <div className=" w-[80px] lg:w-[190px] sticky  top-1  py-1-5 z-50 my-1 mx-4">
            <div className="  items-center rounded-full h-8 flex p-3 relative">
              <SearchIcon className="h-6 text-green-700 z-50" />
              <input
                className={Styles.Imput}
                type="text"
                placeholder="Search Acapa "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 mb-2.5 sm:items-start xl:mt-8">
        <SideBarMenuItems text="Iniciativas" Icon={StarIcon} active />
        <SideBarMenuItems text="Servicios" Icon={LightningBoltIcon} />
        <SideBarMenuItems text="Atractivos" Icon={SunIcon} />
        <SideBarMenuItems text="Sobre Nosotros" Icon={UserGroupIcon} />
        <SideBarMenuItems text="Contactos" Icon={PhoneIcon} />
      </div>

      <div className="mt-auto sm:max-lg:w-[35px] ">
        <div className={Styles.DivProfileSection}>
          <div className="rounded-full">
            <Image
              src="https://img.a.transfermarkt.technology/portrait/big/39152-1622801006.jpg?lm=1"
              width={30}
              height={30}
              alt="Profile image"
              className="rounded-full"
            ></Image>
          </div>
          <div className="px-3 leading-4 hidden lg:inline text-green-700">
            <h4 className="font-bold">lufer_739@gmail</h4>
            <p className="">Fernando Angarita</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
