const Card = (props) =>{
    return(

        <div className="group hover:shadow-lg hover:border-transparent bg-white hover:bg-cyan-600 h-full lg:w-1/5  rounded-2xl  p-2 md:p-7 border-2 border-cyan-600">
            <div className="relative h-28">
                <div className=" absolute right-6 top-6 h-14 w-14 rounded-full flex justify-center items-center  bg-cyan-600 group-hover:bg-cyan-300">
                    {props.svg}
                </div>
            </div>
            <h1 className="text-black group-hover:text-white text-3xl pt-5 px-2 font-poppins md:text-4xl ">{props.title}</h1>
            <p className="text-xl group-hover:text-white my-12 px-2 text-black  md:text-2xl">{props.categories}</p>
        </div>

    )
}

export default Card


