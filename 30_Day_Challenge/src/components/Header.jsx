import { Button } from "./ui/button"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";


const Header = () => {
 const location = useLocation();
 const pathname = location.pathname
  
 
 const navArray =[
  {title: "Home", link:"/"},
  {title: "Score Sheet", link:"/scoreSheet"},
  {title: "Daily Task", link:"/dailyTask"},
  {title: "Register", link:"/register"},

 ] 
  return (
    <>
    <div className="w-screen bg-primary content-center py-10">
        <Link to={"/"}><h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-5xl text-center text-white ">Halal Dollars Challenge</h1> </Link>
        <p className="text-secondary text-center lg:text-xl text-sm py-4">Join thousands of Muslims in the $500 in 30 Days Challenge</p>
        <div className="flex justify-center lg:justify-end  lg:mx-20">
           
           {navArray.map(({title, link}) => (
              <Link key={link} to ={link}>
                <p className= {`${pathname === link ? "text-gray-300 ": " text-white"} text-sm uppercase font-semibold ml-5 hover:text-gray-300 cursor-pointer duration-300`} >
                  {title}
                </p>
                
              </Link>
           ) )}
          

         
        </div>
    </div>
    </>
  )
}

export default Header