import Button from '../components/Button'
import img from "../image/img.jpg"
const Portfolio =()=>{
    return (
        <div className="min-h-screen">
            <div className="h-auto min-w-full flex justify-center items-center flex-col space-y-5 mx-auto container">
                <div className="h-16 mt-12 w-auto px-6 md:w-3/6 rounded-full bg-cyan-100 grid grid-flow-col  shadow-md  justify-center gap-3 md:gap-5 lg:gap-24">
                    <Button text="ALL"/>
                    <Button text="APP"/>
                    <Button text="WEB"/>
                    <Button text="CARDS"/>
                    <Button text="POSTER"/>
                </div>
        
                <h1 className="pb-12 px-6">A high light story on our journey matters, the process that we produced and what we went through enjoy our design.</h1>
                </div>
            <div className="w-full min-h-sreen bg-yellow-700 py-10 gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4 md:px-10 lg:px-28 ">
                <div className="w-full bg-black">
                    <img src={img}/>
                </div>
                <div className="w-full bg-blue-200">
                    <img src={img}/>
                </div>
                <div className="w-full bg-red-300">
                    <img src={img}/>
                </div>
                <div className="w-full bg-pink-300">
                    <img src={img}/>
                </div>
                <div className="w-full bg-red-300">
                    <img src={img}/>
                </div>
                <div className="w-full bg-orange-300">
                    <img src={img}/>
                </div>
                <div className="w-full bg-orange-300">
                    <img src={img}/>
            </div>
                </div>
        </div>
    )
}


export default Portfolio