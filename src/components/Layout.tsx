import { Outlet } from "react-router-dom";
// import useMatchHistory from "../hooks/useMatchHistory";
import NavigationLayout from "./NavigationBar/NavigationLayout";

const Layout = ()=>{
    return(
        <div className="min-h-[100vh] bg-[#181921] text-white overflow-y-hidden">
           <div>
                <NavigationLayout />
           </div>
           <main className="mx-auto w-full md:w-[820px] border-gray-100 bg-[#181921] mt-[60px]">
                <Outlet />
           </main>
   
        </div>
    )
}

export default Layout;