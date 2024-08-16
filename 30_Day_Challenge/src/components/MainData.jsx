import Table from "./Tableinfo"

const MainData = () => {



    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const today = new Date();
    const monthName = month[today.getMonth()];
    const year = today.getFullYear();
    const todayDate = today.getDate();

    
    return (
        <>
        <h3 className="text-primary text-4xl font-semibold py-10 lg:py-8 text-center">{`${monthName} ${year} `}</h3> 
        <Table className="pb-100" />
        </>
  )
}


export default MainData