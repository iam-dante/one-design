import { useEffect, useState } from 'react'

const Button = (props) =>{
    return(
      <button className="text-cyan-700 hover:text-cyan-400 font-poppins font-semibold focus:outline-none" href={props.link} onClick={props.click} >{props.text}</button>
      )
}

const images = [
    {id: "1", imageName: "img1.jpg", tag: "app"},
    {id: "2", imageName: "img2.jpg", tag: "card"},
    {id: "3", imageName: "img3.jpg", tag: "web"},
    {id: "4", imageName: "img4.jpg", tag: "posters"},
    {id: "5", imageName: "img.jpg", tag: "app"},
    {id: "6", imageName: "img5.png", tag: "card"},
]

const Portfolio =()=>{
    const [tag, settag] = useState("all")
    const[currentImage, setImage] = useState([ ])

    useEffect(()=>{
        tag === "all" ? setImage(images) : setImage(images.filter(img => img.tag === tag))
    },[tag])

    return (
        <div className="min-h-screen bg-gray-400">
            <div className=" min-w-full flex justify-center items-center flex-col space-y-5 mx-auto container pt-24 md:pt-16">
                <div className="h-16 mt-12 px-6 md:px-14 md:w-auto rounded-full bg-cyan-100 grid grid-flow-col  shadow-md  justify-items-center items-center gap-3 md:gap-5 lg:gap-24">
            
                    <Button text="ALL" click={() =>settag("all")}/>
                    <Button text="APP" click={() =>settag("app")}/>
                    <Button text="CARD" click={() =>settag("card")}/>
                    <Button text="WEB" click={() =>settag("web")}/>
                    <Button text="POSTERS" click={() =>settag("posters")}/>
                    
                    
                </div>
        
                <h1 className="px-6 font-thin lg:font-normal md:text-2xl">A high light story on our journey matters, the process that we produced and what we went through enjoy our design.</h1>
            </div>
            <div className="w-full min-h-sreen py-10 gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4 md:px-10 lg:px-28 ">

                {
                    currentImage.map(i => <img  src={require(`../image/${i.imageName}`).default}  alt=""/>)
                }

            </div>
        </div>
    )
}


export default Portfolio