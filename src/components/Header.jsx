
import Image from "next/image";
import Link from 'next/link';
import { CiMenuBurger } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
const Header = () => {
  return (
    <div className="flex w-full lg:px-10 md:justify-start bg-slate-200  py-4 lg:justify-between items-center " >
      <Link href="/" className="flex flex-row" passHref>
        <div className="md:hidden border-2 p-[5px] ml-[15px] rounded-lg border-black">
          <CiMenuBurger />
        </div>
        <div className="flex ml-[25px]">
          <Image src="/images/Group 242.png" alt="logo" width={20} height={17} />
          <p className="ml-2 font-semibold text-xl">Savemytaxes.in</p>
        </div>
      </Link>

      <div className="hidden md:flex justify-around w-[400px] ml-[170px]">
        <Link href="/Service" passHref>
          <p className="hover:text-green-900 hover:font-semibold">Services</p>
        </Link>
        <p className="hover:text-green-900 hover:font-semibold">Tax Guide</p>
        <p className="hover:text-green-900 hover:font-semibold">Support</p>
        <p className="hover:text-green-900 hover:font-semibold">Company</p>
      </div>
      <div className="flex w-[260px] gap-3 ml-[180px]">
        <div className="hidden md:flex  items-center px-2 py-1 border-2 border-black rounded-lg bg-white ">
          <p>Select Language</p>
          <RiArrowDropDownLine />
        </div>
        <div className="px-5 py-1 border-2 border-black rounded-lg bg-white">
          Login
        </div>
      </div>
    </div>
  )
}

export default Header