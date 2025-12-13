import { Outlet, Link } from "react-router-dom";
// import useMatchHistory from "../hooks/useMatchHistory";


const Layout = ()=>{
    return(
        <div className="min-h-[100vh] bg-[#181921] text-white overflow-y-hidden">
           <div>
              
                 <Link to="/" >Home</Link>
              
                 
           </div>
           <main className="mx-auto w-full md:w-[820px] border-gray-100 bg-[#181921]">
                <Outlet />
           </main>
   
        </div>
    )
}

export default Layout;