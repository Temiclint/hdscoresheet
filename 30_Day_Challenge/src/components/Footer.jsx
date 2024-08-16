import { Button } from "./ui/button";

const Footer = () => {
	return (
		<>
			<div className="min-h-[400px] bg-primary flex flex-col justify-center items-center gap-5">
				<p className="text-white font-bold text-base">Training Videos </p>
				<h1 className="text-white font-semibold text-5xl ">
					Access the Training Videos
				</h1>
				<p className="text-white text-[20px] leading-8">
					Go through the training videos whenever you need them
				</p>
				<Button className="bg-white text-primary hover:bg-secondary">Watch Training Videos</Button>
			</div>
		</>
	);
};

export default Footer;
