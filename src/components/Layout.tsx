import { Outlet, Link } from "react-router-dom";


const Layout = ()=>{
    return(
        <div className="min-h-screen bg-[#181921] text-white">
           <div>
              
                 <Link to="/" >Home</Link>
                 <Link to ="match/12">Match12</Link>
                 <Link to ="match/123">Match123</Link>
                 <Link to ="match/145">Match45</Link>
                 
           </div>
           <main className="mx-auto w-full md:w-[820px] border-gray-100">
                <Outlet />
           </main>
   
        </div>
    )
}

export default Layout;