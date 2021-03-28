import Card from '../components/Card'
const Service =()=>{
    return(
        <div className="h-screen bg-cyan-200 space-y-9">
            <div className="flex justify-center items-center pt-40">
                <h1 className="text-7xl text-gray-600 font-poppins font-medium">OUR SERVICE</h1>
            </div>
            <div className="flex flex-row w-max-12 h-2/3 bg-red-300 space-x-6 overflow-x-scroll pt-28 px-12 flex-grow-0 ">
                <Card title="Visual Identity" categories="Logos, Typography, Color Palettes, Image libraries"/> 
                {/* <Card/> */}
            </div>
        </div>
    )
}

export default Service