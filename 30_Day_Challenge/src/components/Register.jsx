"use client";

import { Form } from "./ui/form";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";

const Register = () => {
	const [firstname , setFName] = useState('');
	const [lastname, setLName] = useState('');
	const [email, setEmail] = useState("");
	const [professionalEmail, setPEmail] = useState("");
	const [linkedin, setLinkedinLink] = useState("");
	const [upwork, setUpworkLink] = useState("");
	const [facebook, setFacebookLink] = useState("");
	const [twitter, setTwitterLink] = useState("");
	const [funnel, setFunnelLink] = useState("");
	const [medium, setMediumLink] = useState("");
	const [gohigh, setGoHigh] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [testify, setTestify] = useState(false);
	const [error, setError] =useState(null)
	const [uniqueCode, setUniqueCode] = useState(" ")


	
		


		const handleSubmit = async (e) => {
			
	
			const uniqueCodeGenerator  = (length, char) => {
				let result = '';
					for (let i = length; i > 0; --i) result += char[Math.floor(Math.random() * char.length)];
					return result;
				}
	
			const newUniqueCode = (`HD${uniqueCodeGenerator(6, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')}`);
			
			setUniqueCode(newUniqueCode)
		

		e.preventDefault()

		const user = {firstname, lastname, email, professionalEmail, linkedin, upwork, facebook, twitter, funnel, medium, gohigh, phoneNumber}
		const response = await fetch ('http://localhost:3000/api/Users/create', {
			method: 'POST',
			body: JSON.stringify(user),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			const data = await response.json()
			if(!response.ok){
				setError(data.error)
			} if(response.ok){
				setFName(' ');
				setLName(' ');
				setEmail(' ');
				setPEmail(' ');
				setLinkedinLink(' ');
				setUpworkLink(' ');
				setFacebookLink(' ');
				setTwitterLink(' ');
				setFunnelLink(' ');
				setMediumLink(' ');
				setGoHigh(' ');
				setPhoneNumber(' ');
				setError(null);
				setUniqueCode('');
				
				
			}
		}
	

	


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
				<form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
					{/* input Name*/}
					<div className="relative flex  justify-between gap-3">
                        <div className="basis-1/2">
                        <Label  className ="ml-1" > First Name</Label>
						<Input type="text" id="firstName" placeholder="First Name" 
							onChange={(e) => setFName(e.target.value)} value={firstname} />
                        </div>
                         <div className="basis-1/2">
                        <Label  className ="ml-1" htmlFor="lastName"> Last Name</Label>
						<Input type="text" id="lastName" placeholder="Last Name" 
						 onChange={(e) => setLName(e.target.value)} value={lastname}/>
                        </div>
					</div>
					{/* input for personal email*/}
					<div className="relative flex flex-col gap-1">
                        <Label  className =" ml-1" htmlFor="personalEmail"> Email </Label>
						<Input type="email" id="personalEmail" placeholder="you@gmail.com" 
						onChange={(e) => setEmail(e.target.value)} value={email}/>
					</div>
                    {/* input for professional email*/}
					<div className="relative flex flex-col gap-1">
                
                        <Label  className =" ml-1" htmlFor="professionalEmail"> Professional Email </Label>
						<Input type="email" id="professionalEmail" placeholder="you@company.com"
						onChange={(e) => setPEmail(e.target.value)} value={professionalEmail} />
					
					</div>
					{/* input for linkedin link*/}
					<div className="relative flex flex-col gap-1">
                        <Label  className =" ml-1" htmlFor="linkedin">LinkedIn Profile Link </Label>
						<Input type="text" id="linkedin" placeholder="Insert link here" 
						onChange={(e) => setLinkedinLink(e.target.value)} value={linkedin}/>
					</div>
                    {/* input for upwork link*/}
					<div className="relative flex flex-col gap-1">
                        <Label  className ="ml-1" htmlFor="jobApplication">Upwork Profile Link</Label>
						<Input type="text" id="upwork" placeholder="Insert link here" 
						onChange={(e) => setUpworkLink(e.target.value)} value={upwork}/>
					</div>
					{/* input for facebook Link */}
					<div className="relative flex flex-col gap-1">
                        <Label  className =" ml-1" htmlFor="facebook"> Facebook Profile Link</Label>
						<Input type="text" id="facebook" placeholder="Insert link here" 
						onChange={(e) => setFacebookLink(e.target.value)} value={facebook}/>
					</div>
                    {/* input for twitter link */}
					<div className="relative flex flex-col gap-1">
                        <Label  className ="ml-1" htmlFor="twitter"> Twitter Profile Link </Label>
						<Input type="text" id="twitter" placeholder="Insert link here"
						onChange={(e) => setTwitterLink(e.target.value)} value={twitter} />
					</div>
					{/* input for funnel Link*/}
					<div className="relative flex flex-col gap-1">
                        <Label  className =" ml-1" htmlFor="funnel"> Funnel Link </Label>
						<Input type="text" id="funnel" placeholder="Insert link here" 
						onChange={(e) => setFunnelLink(e.target.value)} value={funnel}/>
					</div>
                    {/* input for Medium link*/}
					<div className="relative flex flex-col gap-1">
                        <Label  className =" ml-1" htmlFor="medium"> Medium Link</Label>
						<Input type="text" id="medium" placeholder="Insert Link here"
						onChange={(e) => setMediumLink(e.target.value)} value={medium} />
					</div>
                    {/* input for gohigh*/}
					<div className="relative flex flex-col gap-1">
                        <Label  className =" ml-1" htmlFor="gohigh"> GoHighLevel Account Name</Label>
						<Input type="text" id="gohigh" placeholder="GoHighLevel Account Name" 
						onChange={(e) => setGoHigh(e.target.value)} value={gohigh}/>
					</div>

                      {/* input for tel*/}
					<div className="relative flex flex-col gap-1">
                        <Label  className =" ml-1" htmlFor="phone"> Phone Number</Label>
						<Input type="text" id="gohigh" placeholder="+234 802 345 6789" 
						onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber}/>
					</div>

					

                    {/* input for checkbox */}
					<div className="items-top flex space-x-2">
                        
				    {/* <Checkbox id="testify"
					onChange={(e) => setTestify(e.target.checked)} value={testify} />
                        <Label  className =" ml-1 font-medium" htmlFor="testify"> I testify by Allah that all the information provided are true and accurate  </Label> */}
					</div>
				{/* <div onChange={(e) => setUniqueCode (newUniqueCode)} value={uniqueCode}></div> */}
			
					<Button className="flex items-center rounded-[10px] gap-x-2 w-[full] mt-5">
						Register Now
					</Button>
	
					{error && <div> {error} </div>}

				</form>
			</div>
            
            </div>
		
    </>
  )
}
export default Register