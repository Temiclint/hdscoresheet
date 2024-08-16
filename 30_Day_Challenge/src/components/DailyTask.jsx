"use client";

import { Form } from "./ui/form";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";

const DailyTask = () => {
	return (
		<div className="m-20">
			<div className="mb-20">
				<h2 className="text-5xl font-semibold py-7 lg:py-8 text-center">
					Daily Tasks Submission
				</h2>
				<p className="font-normal text-xl text-primary text-center">
					{" "}
					Submit your tasks for today
				</p>
			</div>

			<div className="w-3/4 lg:w-1/3 m-auto">
				<form className="flex flex-col gap-y-4">
					{/* input  for unique code*/}
					<div className="relative flex flex-col gap-3">
                        <Label  className ="ml-1" htmlFor="uniqueCode"> Your Unique Code</Label>
						<Input type="text" id="uniquecode" placeholder="UniqueCode" />
					</div>
					{/* input for upwork*/}
					<div className="relative flex flex-col gap-3">
                        <Label  className =" ml-1" htmlFor="upwork"> Upwork Outreach (Recommended is 5 or more) <span className= "text-[#084b83]">- 1 Outreach = 5pts </span> </Label>
						<Input type="text" id="upwork" placeholder="How many jobs did you apply for on Upwork today?" />
					</div>
                    {/* input social media post*/}
					<div className="relative flex flex-col gap-3">
                        <Label  className ="ml-1" htmlFor="socialPost"> Social Media Posts (Recommended is 2) <span className= "text-[#084b83]">- 1 Post = 3pts </span> </Label>
						<Input type="text" id="socialPost" placeholder="How many posts did you make across all social media today?" />
					</div>
					{/* input social media Engagement*/}
					<div className="relative flex flex-col gap-3">
                        <Label  className =" ml-1" htmlFor="socialEngagement">Social Media Engagement (Recommended is 10)  <span className= "text-[#084b83]">- 1 Engagement = 1pt </span> </Label>
						<Input type="text" id="socialEngagement" placeholder="How many comments and following across all social media did you make today?" />
					</div>
                    {/* input for job application*/}
					<div className="relative flex flex-col gap-3">
                        <Label  className ="ml-1" htmlFor="jobApplication">Job Application (Recommended is 5) <span className= "text-[#084b83]">- 1 Application = 5pts </span> </Label>
						<Input type="text" id="jobApplication" placeholder="How many jobs did you apply for today?" />
					</div>
					{/* input for Local Outreach */}
					<div className="relative flex flex-col gap-3">
                        <Label  className =" ml-1" htmlFor="localOutreach"> Local Outreach (Recommended is 30)   <span className= "text-[#084b83]"> - 1 Outreach = 2pts </span> </Label>
						<Input type="text" id="localOutreach" placeholder="How many local clients did you reach out to today?" />
					</div>
                    {/* input for international outreach */}
					<div className="relative flex flex-col gap-3">
                        <Label  className ="ml-1" htmlFor="intOutreach"> Int’l  Outreach (Recommended is 30) <span className= "text-[#084b83]"> - 1 Outreach = 3pts</span> </Label>
						<Input type="text" id="intOutreach" placeholder="How many international clients did you reach out to today?" />
					</div>
					{/* input for Ecommerce*/}
					<div className="relative flex flex-col gap-3">
                        <Label  className =" ml-1" htmlFor="eCommerce"> Ecommerce Delivered Orders (Recommended is 5)  - 1 Order = 5pts  <span className= "text-[#084b83]">- 1 Order = 5pts </span> </Label>
						<Input type="text" id="eCommerce" placeholder="How many e-commerce deliveries did you make today?" />
					</div>
                    {/* input for Number of clients*/}
					<div className="relative flex flex-col gap-3">
                        <Label  className =" ml-1" htmlFor="numberOfClients"> Number of Clients  <span className= "text-[#084b83]">- 1 Client = 20pts</span> </Label>
						<Input type="text" id="numberOfClients" placeholder="How many new clients did you get today?" />
					</div>
                    {/* input for total earnings*/}
					<div className="relative flex flex-col gap-3">
                        <Label  className =" ml-1" htmlFor="totalEarnings"> Total Earnings in Dollars (Use $1 = N1,500)  <span className= "text-[#084b83]">- $1 = 1pt  </span> </Label>
						<Input type="text" id="upwork" placeholder="How much did you earn across all business models today?" />
					</div>
                    {/* input for checkbox */}
					<div className="items-top flex space-x-2">
                        
				    <Checkbox id="testify" />
                        <Label  className =" ml-1 font-medium" htmlFor="testify"> I testify by Allah that all the information provided are true and accurate  </Label>
					</div>
					
					
					<Button className="flex items-center rounded-[10px] gap-x-2 w-[full] mt-5">
						Submit Now
					</Button>
				</form>
			</div>
		</div>
	);
};

export default DailyTask;
