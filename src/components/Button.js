const Button = (props) =>{
    return(
      <a className="text-cyan-700 hover:text-cyan-400 font-poppins font-semibold" href={props.link} >{props.text}</a>
      )
}

export default Button