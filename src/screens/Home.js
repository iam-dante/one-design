import Button from '../components/Button'

const Home = () =>{
    return(
        <div className="h-screen">
            <div className="relative flex flex-row justify-center items-center h-24 min-w-full md:min-w-0 space-x-28 shadow-sm">
                <div className="absolute inset-6 h-12 w-12 bg-gray-800 rounded-full"/>
                <Button text="HOME"/>
                <Button text="SERVICE"/>
                <Button text="PORTFOLIO"/>
                <Button text="TEAM"/>
                <Button text="CONTACT US"/>
            </div>
            <div className="h-5/6  mt-16 grid grid-cols-2 gap-5">
                <div className="col-span-1 pt-24 pl-24">
                    <div className="flex flex-row space-x-3 ">
                        <h1 className="font-medium text-8xl text-black font-poppins">One</h1>
                        <h1 className="font-medium text-8xl text-cyan-600 font-poppins">Design</h1>
                    </div>
                    <div className="relative  h-auto w-9/12 p-2 mt-10">
                        <h1 className="mt-4 bg-white font-poppins">
                        Welcome to the website. If you're here, you're likely looking to find random words. Random Word Generator is the perfect tool to help you do this. While this tool isn't a word creator, it is a word generator that will generate random words for a variety of activities or uses. Even better, it allows you to adjust the parameters of the random words to best fit your needs.
                        </h1>
                        <h1 className="mt-6 my-24 bg-white font-poppins">
                        Welcome to the website. If you're here, you're likely looking to find random words. Random Word Generator is the perfect tool to help you do this. While this tool isn't a word creator, it is a word generator that will generate random words for a variety of activities or uses. Even better, it allows you to adjust the parameters of the random words to best fit your needs.
                        </h1>
                        <button className=" bg-white text-cyan-600 border-cyan-600 absolute bottom-0 right-2 font-poppins border-2 hover:bg-cyan-600 hover:text-white h-auto w-auto px-6 py-2 rounded-full font-medium" >GET STARTED</button>
                    </div>
                </div>
            <div className="col-span-1">
                <div className="bg-red-300 h-4/5  m-12 rounded-xl shadow-xl">
                    {/* <img/> */}
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home