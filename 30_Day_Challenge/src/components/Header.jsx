import { Button } from "./ui/button"

const Header = () => {
  return (
    <>
    <div className="w-screen bg-primary content-center py-10">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-5xl text-center text-white ">Halal Dollars Challenge</h1>
        <p className="text-secondary text-center lg:text-xl text-sm py-4">Join thousands of Muslims in the $500 in 30 Days Challenge</p>
        <div className="flex justify-center lg:justify-end  lg:mx-20">
          <Button className =""  > Submit Task</Button>
          <Button className =" bg-white text-primary hover:bg-secondary " > Register</Button>
        </div>
    </div>
    </>
  )
}

export default Header