import Card from '../components/Card'
const Service =()=>{
    return(
        <div className="min-h-screen bg-cyan-200 space-y-6">
            <div className="flex justify-center items-center pt-28">
                <h1 className="text-4xl text-gray-600 font-medium md:text-7xl ">OUR SERVICE</h1>
            </div>
            <div className="flex flex-col lg:flex-row w-full h-2/3  gap-6 md:gap-3 lg:overflow-auto px-4 md:px-8 lg:px-16 pt-6 md:pt-24">
                {
                    [1, 2, 3, 4, 5].map(x => (
                        <Card 
                        title="Visual Identity" 
                        categories="Logos, Typography, Color Palettes,Image libraries"
                        svg={
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.373555 0.101317C0.604792 -0.0328741 0.889978 -0.0338264 1.1221 0.0988177L4.25 1.88619L7.3779 0.0988177C7.60847 -0.0329392 7.89153 -0.0329392 8.1221 0.0988177L11.25 1.88619L14.3779 0.0988177C14.61 -0.0338264 14.8952 -0.0328741 15.1264 0.101317C15.3577 0.235509 15.5 0.482647 15.5 0.75L15.5 9H18.75C19.1642 9 19.5 9.33579 19.5 9.75L19.5 16.75C19.5 18.2688 18.2688 19.5 16.75 19.5L5.55 19.5H5.51788C4.70505 19.5 4.04944 19.5 3.51853 19.4566C2.9719 19.412 2.49175 19.3176 2.04754 19.0913C1.34193 18.7317 0.768251 18.1581 0.408726 17.4525C0.182386 17.0082 0.088026 16.5281 0.043364 15.9815C-1.28458e-05 15.4506 -7.02692e-06 14.795 1.85294e-07 13.9821L1.85294e-07 13.9821L1.85294e-07 13.95L1.85294e-07 0.75C1.85294e-07 0.482647 0.142319 0.235509 0.373555 0.101317ZM16.75 18C17.4404 18 18 17.4404 18 16.75L18 10.5H15.5V16.75C15.5 17.4404 16.0596 18 16.75 18ZM14.2999 18H5.55C4.69755 18 4.10331 17.9994 3.64068 17.9616C3.18681 17.9245 2.92604 17.8554 2.72852 17.7548C2.30516 17.539 1.96095 17.1948 1.74524 16.7715C1.6446 16.574 1.57547 16.3132 1.53838 15.8593C1.50058 15.3967 1.5 14.8025 1.5 13.95L1.5 2.04238L3.8779 3.40118C4.10847 3.53294 4.39153 3.53294 4.6221 3.40118L7.75 1.61381L10.8779 3.40118C11.1085 3.53294 11.3915 3.53294 11.6221 3.40118L14 2.04239L14 9.75V16.75C14 17.2001 14.1081 17.625 14.2999 18ZM4 6.75C4 6.33579 4.33579 6 4.75 6H8.75C9.16421 6 9.5 6.33579 9.5 6.75C9.5 7.16421 9.16421 7.5 8.75 7.5H4.75C4.33579 7.5 4 7.16421 4 6.75ZM7.75 10C7.33579 10 7 10.3358 7 10.75C7 11.1642 7.33579 11.5 7.75 11.5L10.75 11.5C11.1642 11.5 11.5 11.1642 11.5 10.75C11.5 10.3358 11.1642 10 10.75 10L7.75 10ZM7 14.75C7 14.3358 7.33579 14 7.75 14L10.75 14C11.1642 14 11.5 14.3358 11.5 14.75C11.5 15.1642 11.1642 15.5 10.75 15.5L7.75 15.5C7.33579 15.5 7 15.1642 7 14.75ZM5.75 10.75C5.75 11.3023 5.30228 11.75 4.75 11.75C4.19772 11.75 3.75 11.3023 3.75 10.75C3.75 10.1977 4.19772 9.75 4.75 9.75C5.30228 9.75 5.75 10.1977 5.75 10.75ZM4.75 15.75C5.30228 15.75 5.75 15.3023 5.75 14.75C5.75 14.1977 5.30228 13.75 4.75 13.75C4.19772 13.75 3.75 14.1977 3.75 14.75C3.75 15.3023 4.19772 15.75 4.75 15.75Z" fill="white"/>
                            </svg>
                        }
                        /> 
                    ))
                }
                {/* <Card/> */}
            </div>
            <div className="h-80 md:h-48 flex justify-center items-center  px-12 w-full mx-auto">
                <h1 className="text-xl font-thin md:font-normal md:text-2xl">At the end of the day, business cannot ignore the value of visual content.We provide the best and product that money can buy.</h1>
            </div>
        </div>
    )
}

export default Service