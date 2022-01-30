import {React, useState, useEffect} from 'react'
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import { FaStarHalfAlt } from 'react-icons/fa'

const Content = () => {
	const [home, setHome] = useState(true);
	const [about, setAbout] = useState(false);
	const [skill, setSkill] = useState(false);
	if(home === true){
		return(
			<div>
				<ul id="catlist">
					<li className='sub'><button className="subtext" onClick={()=>{setHome(true);setAbout(false);setSkill(false);}}>HomePage</button></li>
					<li className='sub'><button className="subtext" onClick={()=>{setHome(false);setAbout(true);setSkill(false);}}>Skills</button></li>
					<li className='sub'><button className="subtext" onClick={()=>{setHome(false);setAbout(false);setSkill(true);}}>About Me</button></li>
				</ul>
				<div id="flex">
					<div></div>
				</div>
			</div>
		)
	}else if(about === true){
		return(
			<div>
				<ul id="catlist">
					<li className='sub'><button className="subtext" onClick={()=>{setHome(true);setAbout(false);setSkill(false);}}>HomePage</button></li>
					<li className='sub'><button className="subtext" onClick={()=>{setHome(false);setAbout(true);setSkill(false);}}>Skills</button></li>
					<li className='sub'><button className="subtext" onClick={()=>{setHome(false);setAbout(false);setSkill(true);}}>About Me</button></li>
				</ul>
				<div className="flex">
					<img/>
					<div><AiFillStar size={100} color={'lightblue'}/></div>
					<div><AiFillStar size={100} color={'lightblue'}/></div>
					<div><AiFillStar size={100} color={'lightblue'}/></div>
					<div><AiFillStar size={100} color={'lightblue'}/></div>
					<div><AiOutlineStar size={100} color={'lightblue'}/></div>
				</div>
			</div>
		)
	}else{
		return(
			<div>
				<ul id="catlist">
					<li className='sub'><button className="subtext" onClick={()=>{setHome(true);setAbout(false);setSkill(false);}}>HomePage</button></li>
					<li className='sub'><button className="subtext" onClick={()=>{setHome(false);setAbout(true);setSkill(false);}}>Skills</button></li>
					<li className='sub'><button className="subtext" onClick={()=>{setHome(false);setAbout(false);setSkill(true);}}>About Me</button></li>
				</ul>
				<div id="flex">
					<div></div>
				</div>
			</div>
		)
	}
}


export default Content
