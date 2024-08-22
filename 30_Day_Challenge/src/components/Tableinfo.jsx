import { useState , useEffect} from "react";
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
import { Input } from "./ui/input";
import Search from "./Search";

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

const Tableinfo = ({ user }) => {
	const rowsPerPage = 5;
	const [startIndex, setStartIndex] = useState(0);
	const [endIndex, setEndIndex] = useState(rowsPerPage);


	// const [users, setUsers] = useState([]);

	// useEffect (()=>{
	// 	const fetchUsers = async () => {
	// 		const response = await fetch('http://localhost:3000/api/Users/getAll');
			
	// 		const users = (await response.json());

	// 		// if (response.ok) {
	// 		// setUsers(json)
	// 		// }
	// 		setUsers(users)
		
	// 		};

	// 		fetchUsers();
	// }, []);


	// useEffect (()=>{

	// 	const fetchUsers = async () ={
			
	// 		try {
	// 			const data = (await axios.get('api/Users/getAll')).data
	// 		setUsers(data)
	// 		} catch (error) {
	// 			console.log(error)
	// 		}
	// 	}
	// }, [])
	

	return (
		
		<>
{/* 			
			{users.slice(startIndex, endIndex).map((user) => {
				return 
				<div key={user.id} user={user}className="container mb-20 flex flex-col items-center gap-6" > */}
				<div classname="container mb-20 flex flex-col items-center gap-6"> 
				<Search/>
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
					
					 <TableRow
								className= {user.index === 0 ? "bg-primary" : undefined}
								>
								<TableCell className="text-left">{user.firstname}</TableCell>
								<TableCell>{user.totalPoints}</TableCell>
								<TableCell>{user.upworkOut}</TableCell>
								<TableCell>{user.socialPost}</TableCell>
								<TableCell>{user.socialEngage}</TableCell>
								<TableCell>{user.jobApp}</TableCell>
								<TableCell>{user.localOut}</TableCell>
								<TableCell>{user.intOut}</TableCell>
								<TableCell>{user.ecommerce}</TableCell>
								<TableCell>{user.Clients}</TableCell>
								<TableCell>{user.earnings}</TableCell>
							</TableRow>
					
					</TableBody>
				</Table>
			

	<Pagination>
					<PaginationContent>
						<PaginationItem>
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

						<PaginationItem>
							<PaginationNext
								className={
									endIndex === challenges.length
										? "pointer-events-none opacity-50"
										: undefined
								}
								onClick={() => {
									setStartIndex(startIndex + rowsPerPage);
									setEndIndex(endIndex + rowsPerPage);
								}}
							/>
						</PaginationItem>
					</PaginationContent>
				</Pagination>
					
			</div>
				{/* // })} */}
		</>
	);
};

export default Tableinfo;
