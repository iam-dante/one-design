import Button from '../components/Button'

const Home = () =>{
    return(
        <div className="relative min-h-screen ">

            <div className="fixed z-10 bg-white w-full h-24 ">

            <div className="relative flex flex-row  md:justify-center items-center h-24  md:min-w-0 shadow-sm ">
                <svg  className="absolute inset left-12 h-12 w-12  justify-center" viewBox="0 0 348 411" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M72 142L178.304 48.932C192.41 36.5828 200.5 18.7474 200.5 0V0V301.707C200.5 376.679 115.4 419.948 54.8215 375.776V375.776C0.130858 335.898 6.03561 252.535 65.8014 220.764L340 75" stroke="#0E7490" stroke-width="34"/>
                </svg>
            <div className="hidden lg:flex lg:flex-row  lg:space-x-28">
                <Button text="HOME" link="#home"/>
                <Button text="SERVICE" link="#service"/>
                <Button text="PORTFOLIO" link="#portfolio"/>
                <Button text="TEAM" link="#team"/>
                <Button text="CONTACT US"link="#contactus"/> 
            </div>

                    {/* <ul className="hidden w-full md:grid grid-col-5 bg-green-100">
                        <li><a href="#here">Home</a></li>
                        <li><a href="#service">Service</a></li>
                        <li><a href="#here">Portfolio</a></li>
                        <li><a href="#here">Team</a></li>
                        <li><a href="#here">Contact us</a></li>
                    </ul> */}
                
            </div>
            </div>


            <div className=" mx-auto container pt-48">
                {/* header information */}
                <div className="grid grid-flow-row lg:grid-rows-none lg:grid-cols-2 gap-5">
                    <div className="mx-4">
                        <div className="flex flex-col gap-3 md:flex-row mt-24">
                            <h1 className="font-medium text-7xl md:text-8xl text-black font-poppins">One</h1>
                            <h1 className="font-medium text-7xl md:text-8xl text-cyan-600 font-poppins">Design</h1>
                        </div>
                        <div className=" relative h-auto p-2 md:mr-24 ">
                            <p className="mt-12 bg-white  lg:px-none">
                            Welcome to the website. If you're here, you're likely looking to find random words. Random Word Generator is the perfect tool to help you do this. While this tool isn't a word creator, it is a word generator that will generate random words for a variety of activities or uses. Even better, it allows you to adjust the parameters of the random words to best fit your needs.
                            </p>
                            <p className="mt-6 my-24 bg-white">
                            Welcome to the website. If you're here, you're likely looking to find random words. Random Word Generator is the perfect tool to help you do this. While this tool isn't a word creator, it is a word generator that will generate random words for a variety of activities or uses. Even better, it allows you to adjust the parameters of the random words to best fit your needs.
                            </p>
                            <button className=" bg-white text-cyan-600 border-cyan-600 absolute bottom-0 right-2 font-poppins border-2 hover:bg-cyan-600 hover:text-white h-auto w-auto px-6 py-2 rounded-full font-medium focus:outline-none" >GET STARTED</button>
                        </div>
                    </div>
                    <div className="inline-flex justify-center items-center">
                        <div className="bg-red-300 h-80 lg:h-full  w-full my-12 md:w-full mx-4 rounded-xl shadow-md ">
                            {/* <img/> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home