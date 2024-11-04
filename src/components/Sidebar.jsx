import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { MdOutlineAttachMoney } from "react-icons/md";
import { RiDashboard2Line } from "react-icons/ri";
const Sidebar = () => {
    return (
        <div className='flex flex-col w-[300px] h-[630px]  py-2 pl-[60px] gap-4 border-r-2'>
            <div className='flex gap-2 items-center text-xl'>
                <RiDashboard2Line />
                <p>Dashboard</p>
            </div>
            <div className='flex gap-2 items-center text-xl'>
                <IoIosSettings />
                <p>Settings</p>
            </div>
            <div className='flex gap-2 items-center text-xl'>
                <MdOutlineAttachMoney />
                <p>AdvanceTax</p>
            </div>
            <div className='flex gap-2 items-center text-xl'>
                <FaMoneyBillTrendUp />
                <p>GST</p>
            </div>
        </div>
    )
}

export default Sidebar