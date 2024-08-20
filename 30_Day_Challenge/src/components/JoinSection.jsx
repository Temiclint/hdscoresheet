import { Button } from "./ui/button"

const JoinSection = () => {
  return (
   <>

   <div className="min-h-[400px] bg-[#F2F4F7] flex flex-col justify-center items-center gap-5">
    <p className="text-primary font-bold text-base">
    New to Halal Dollars $500 in 30 Days Challenge?  
    </p>
    <h1 className="text-center text-primary font-semibold text-5xl ">
    Join the Community to Get Started
    </h1>
    <p className="text-[#475467] text-[20px] leading-8">
    Join Halal Dollars Community on WhatsApp 
    </p>
    <Button>
        Join Halal Dollars Community
    </Button>
   </div>
   </>
  )
}

export default JoinSection