"use client";

import { Form } from "./ui/form";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";

const Register = () => {
  return (
    <>

			<div className="mb-[100px]">
                
            <div className="mb-10">
				<h2 className="text-5xl font-semibold py-7 lg:py-8 text-center">
					Register for the Challenge
				</h2>
				<p className="font-normal text-xl text-primary text-center">
					{" "}
					Fill the form below to participate in the $500 in 30 Days Challenge
				</p>
			</div>

			<div className="w-3/4 lg:w-1/3 m-auto">
				<form className="flex flex-col gap-y-4">
					{/* input Name*/}
					<div className="relative flex  justify-between gap-3">
                        <div className="basis-1/2">
                        <Label  className ="ml-1" htmlFor="firstName"> First Name</Label>
						<Input type="text" id="firstName" placeholder="First Name" />
                        </div>
                         <div className="basis-1/2">
                        <Label  className ="ml-1" htmlFor="lastName"> Last Name</Label>
						<Input type="text" id="lastName" placeholder="Last Name" />
                        </div>
					</div>
					{/* input for personal email*/}
					<div className="relative flex flex-col gap-1">
                        <Label  className =" ml-1" htmlFor="personalEmail"> Email </Label>
						<Input type="email" id="personalEmail" placeholder="you@gmail.com"/>
					</div>
                    {/* input for professional email*/}
					<div className="relative flex flex-col gap-1">
                
                        <Label  className =" ml-1" htmlFor="professionalEmail"> Professional Email </Label>
						<Input type="email" id="professionalEmail" placeholder="you@company.com"/>
					
					</div>
					{/* input for linkedin link*/}
					<div className="relative flex flex-col gap-1">
                        <Label  className =" ml-1" htmlFor="linkedin">LinkedIn Profile Link </Label>
						<Input type="text" id="linkedin" placeholder="Insert link here" />
					</div>
                    {/* input for upwork link*/}
					<div className="relative flex flex-col gap-1">
                        <Label  className ="ml-1" htmlFor="jobApplication">Upwork Profile Link</Label>
						<Input type="text" id="upwork" placeholder="Insert link here" />
					</div>
					{/* input for facebook Link */}
					<div className="relative flex flex-col gap-1">
                        <Label  className =" ml-1" htmlFor="facebook"> Facebook Profile Link</Label>
						<Input type="text" id="facebook" placeholder="Insert link here" />
					</div>
                    {/* input for twitter link */}
					<div className="relative flex flex-col gap-1">
                        <Label  className ="ml-1" htmlFor="twitter"> Twitter Profile Link </Label>
						<Input type="text" id="twitter" placeholder="Insert link here" />
					</div>
					{/* input for funnel Link*/}
					<div className="relative flex flex-col gap-1">
                        <Label  className =" ml-1" htmlFor="funnel"> Funnel Link </Label>
						<Input type="text" id="funnel" placeholder="Insert link here" />
					</div>
                    {/* input for Medium link*/}
					<div className="relative flex flex-col gap-1">
                        <Label  className =" ml-1" htmlFor="medium"> Medium Link</Label>
						<Input type="text" id="numberOfClients" placeholder="Insert Link here" />
					</div>
                    {/* input for gohigh*/}
					<div className="relative flex flex-col gap-1">
                        <Label  className =" ml-1" htmlFor="gohigh"> GoHighLevel Account Name</Label>
						<Input type="text" id="gohigh" placeholder="GoHighLevel Account Name" />
					</div>

                      {/* input for tel*/}
					<div className="relative flex flex-col gap-1">
                        <Label  className =" ml-1" htmlFor="phone"> Phone Number</Label>
						<Input type="text" id="gohigh" placeholder="+234 802 345 6789" />
					</div>

                    {/* input for checkbox */}
					<div className="items-top flex space-x-2">
                        
				    <Checkbox id="testify" />
                        <Label  className =" ml-1 font-medium" htmlFor="testify"> I testify by Allah that all the information provided are true and accurate  </Label>
					</div>
					
					
					<Button className="flex items-center rounded-[10px] gap-x-2 w-[full] mt-5">
						Register Now
					</Button>
				</form>
			</div>
            
            </div>
		
    </>
  )
}

export default Register