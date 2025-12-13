import LogoIcon from '../../assets/LogoIcon.svg?react';
import DesktopNavigation from './components/DesktopNavigation';
import MobileNavigation from './components/MobileNavigation';
const NavigationLayout = () => {
    return (
        <div className="flex flex-row px-[16px] py-[16px] bg-[#6D00FF] w-full fixed top-0 z-10">

            <div className="flex gap-8px items-center justify-between w-full ">
                {/* logo */}
                <div className='mx-[16px] items-center justify-center'>
                    <LogoIcon className="h-[26px] w-[82px] md:h-[60px] md:w-[200px]" />
                </div>

                <div className="hidden md:flex">
                    <DesktopNavigation />
                </div>
                <div className="flex md:hidden">
                    <MobileNavigation />
                </div>

            </div>

        </div>
    )
}
export default NavigationLayout;