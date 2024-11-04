
import Header from '@/components/Header'
import Siderbar from '@/components/Sidebar'

const dashboard = () => {
    return (
        <>
            <Header />
            <div className='flex'>
                <Siderbar />
                <div className='flex items-center justify-center pl-[500px] text-2xl'>welcome to dashboard</div>
            </div>

        </>

    )
}

export default dashboard