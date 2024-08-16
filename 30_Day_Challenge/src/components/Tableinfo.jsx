import { useState } from "react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { Underline } from "lucide-react";
import MainData from "./MainData";

const challenges = [
	{
		name: "Person 1",
		totalPoint: 0,
		upwork: 0,
		socialMediaPost: 0,
		socialMediaEngagement: 0,
		jobApplication: 0,
		localOutreach: 0,
		internationalOutreach: 0,
		ecommerceOrders: 0,
		numberOfClients: 0,
		totalEarnings: 0,
	},
	{
		name: "Person 2",
		totalPoint: 0,
		upwork: 0,
		socialMediaPost: 0,
		socialMediaEngagement: 0,
		jobApplication: 0,
		localOutreach: 0,
		internationalOutreach: 0,
		ecommerceOrders: 0,
		numberOfClients: 0,
		totalEarnings: 0,
	},
	{
		name: "Person 3",
		totalPoint: 0,
		upwork: 0,
		socialMediaPost: 0,
		socialMediaEngagement: 0,
		jobApplication: 0,
		localOutreach: 0,
		internationalOutreach: 0,
		ecommerceOrders: 0,
		numberOfClients: 0,
		totalEarnings: 0,
	},
	{
		name: "Person 4",
		totalPoint: 0,
		upwork: 0,
		socialMediaPost: 0,
		socialMediaEngagement: 0,
		jobApplication: 0,
		localOutreach: 0,
		internationalOutreach: 0,
		ecommerceOrders: 0,
		numberOfClients: 0,
		totalEarnings: 0,
	},
	{
		name: "Person 5",
		totalPoint: 0,
		upwork: 0,
		socialMediaPost: 0,
		socialMediaEngagement: 0,
		jobApplication: 0,
		localOutreach: 0,
		internationalOutreach: 0,
		ecommerceOrders: 0,
		numberOfClients: 0,
		totalEarnings: 0,
	},
	{
		name: "Person 6",
		totalPoint: 0,
		upwork: 0,
		socialMediaPost: 0,
		socialMediaEngagement: 0,
		jobApplication: 0,
		localOutreach: 0,
		internationalOutreach: 0,
		ecommerceOrders: 0,
		numberOfClients: 0,
		totalEarnings: 0,
	},
	{
		name: "Person 7",
		totalPoint: 0,
		upwork: 0,
		socialMediaPost: 0,
		socialMediaEngagement: 0,
		jobApplication: 0,
		localOutreach: 0,
		internationalOutreach: 0,
		ecommerceOrders: 0,
		numberOfClients: 0,
		totalEarnings: 0,
	},
	{
		name: "Person 8",
		totalPoint: 0,
		upwork: 0,
		socialMediaPost: 0,
		socialMediaEngagement: 0,
		jobApplication: 0,
		localOutreach: 0,
		internationalOutreach: 0,
		ecommerceOrders: 0,
		numberOfClients: 0,
		totalEarnings: 0,
	},
	{
		name: "Person 9",
		totalPoint: 0,
		upwork: 0,
		socialMediaPost: 0,
		socialMediaEngagement: 0,
		jobApplication: 0,
		localOutreach: 0,
		internationalOutreach: 0,
		ecommerceOrders: 0,
		numberOfClients: 0,
		totalEarnings: 0,
	},
	{
		name: "Person 10",
		totalPoint: 0,
		upwork: 0,
		socialMediaPost: 0,
		socialMediaEngagement: 0,
		jobApplication: 0,
		localOutreach: 0,
		internationalOutreach: 0,
		ecommerceOrders: 0,
		numberOfClients: 0,
		totalEarnings: 0,
	},
	{
		name: "Person 11",
		totalPoint: 0,
		upwork: 0,
		socialMediaPost: 0,
		socialMediaEngagement: 0,
		jobApplication: 0,
		localOutreach: 0,
		internationalOutreach: 0,
		ecommerceOrders: 0,
		numberOfClients: 0,
		totalEarnings: 0,
	},
	{
		name: "Person 12",
		totalPoint: 0,
		upwork: 0,
		socialMediaPost: 0,
		socialMediaEngagement: 0,
		jobApplication: 0,
		localOutreach: 0,
		internationalOutreach: 0,
		ecommerceOrders: 0,
		numberOfClients: 0,
		totalEarnings: 0,
	},
];
	

const Tableinfo = () => {
	const rowsPerPage = 5;
	const [startIndex, setStartIndex] = useState(0);
	const [endIndex, setEndIndex] = useState(rowsPerPage);
	return (
		<>
			<div className="container mb-20">
				<Table className="rounded-xl">
            
					<TableHeader className="bg-primary rounded-xl  hover:bg-none">
						<TableRow>
							<TableHead className="w-[150px] text-left">Name</TableHead>
							<TableHead>Total Points</TableHead>
							<TableHead>Upwork Outreach</TableHead>
							<TableHead>Social Media Post</TableHead>
							<TableHead>Social Media Engagement</TableHead>
							<TableHead>Job Application</TableHead>
							<TableHead>Local Outreach</TableHead>
							<TableHead>International Outreach</TableHead>
							<TableHead>Ecommerce Delivered Orders</TableHead>
							<TableHead>Number of Clients</TableHead>
							<TableHead>Total Earnings ($)</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{challenges.slice(startIndex, endIndex).map((challenge) => (
							<TableRow className= {challenges.index === 0 ? "bg-primary" : undefined} key={challenge.name}>
								<TableCell className="text-left">{challenge.name}</TableCell>
								<TableCell>{challenge.totalPoint}</TableCell>
								<TableCell>{challenge.upwork}</TableCell>
								<TableCell>{challenge.socialMediaPost}</TableCell>
								<TableCell>{challenge.socialMediaEngagement}</TableCell>
								<TableCell>{challenge.jobApplication}</TableCell>
								<TableCell>{challenge.localOutreach}</TableCell>
								<TableCell>{challenge.internationalOutreach}</TableCell>
								<TableCell>{challenge.ecommerceOrders}</TableCell>
								<TableCell>{challenge.numberOfClients}</TableCell>
								<TableCell>{challenge.totalEarnings}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>

				<Pagination >
					<PaginationContent>
						<PaginationItem >
							<PaginationPrevious
								className={
									startIndex === 0
										? "pointer-events-none opacity-50"
										: undefined
								}
								onClick={() => {
									setStartIndex(startIndex - rowsPerPage);
									setEndIndex(endIndex - rowsPerPage);
								}}
							/>{" "}
						</PaginationItem>

            <PaginationItem >
              <PaginationNext className={endIndex === challenges.length ? "pointer-events-none opacity-50" : undefined}
              onClick={() => {
                setStartIndex(startIndex + rowsPerPage);
                setEndIndex(endIndex + rowsPerPage);
              }} />
            </PaginationItem>
					</PaginationContent>
				</Pagination>
			</div>
		</>
	);
};

export default Tableinfo;
