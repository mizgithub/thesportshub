import { Outlet, Link } from "react-router-dom";
// import useMatchHistory from "../hooks/useMatchHistory";


const Layout = ()=>{
    return(
        <div className="min-h-screen bg-[#181921] text-white">
           <div>
              
                 <Link to="/" >Home</Link>
              
                 
           </div>
           <main className="mx-auto w-full md:w-[820px] border-gray-100">
                <Outlet />
           </main>
   
        </div>
    )
}

export default Layout;