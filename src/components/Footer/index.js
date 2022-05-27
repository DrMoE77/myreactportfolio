import React from 'react'
import {FaGithub, FaLinkedin, FaStackOverflow} from "react-icons/fa"

function Footer (){
    return(
<div className='body-div' id ='footer-div'>
        <a target= '_blank' href="https://github.com/DrMoE77"><FaGithub className='icon' /> </a>
        <a target= '_blank' href="https://www.linkedin.com/in/mohamed-afifi-0938341a/"><FaLinkedin className='icon'/></a>
        <a target= '_blank' href="https://stackoverflow.com/users/16918626/drmoe"><FaStackOverflow className='icon'/></a>
</div>
    ) 
}
export default Footer