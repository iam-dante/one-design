const Card = (props) =>{
    return(
        <div className="h-5/6 w-1/3 bg-yellow-500 rounded-md p-7">
            <div className="relative h-28 bg-red-500">
                <div className=" absolute right-6 top-6 h-14 w-14 rounded-full bg-gray-800"></div>
            </div>
            <h1 className="text-4xl pt-5 font-poppins ">{props.title}</h1>
            <h1 className="w-40 text-lg mt-11">{props.categories}</h1>
        </div>
    )
}

export default Card