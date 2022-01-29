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
				<div id='contentcontainer'>
					<table id='contentTable'>
						<tr id="contentRow">
							<td id="contentRow">
								<img src=""/>
							</td>
							<td id="contentRow">
								<AiFillStar size={100} color={'lightblue'}/>
							</td>
						</tr>
						<tr>
							<td>
								<p></p>
							</td>
						</tr>
					</table>
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
				<div id='contentcontainer'>
					<table id='contentTable'>
						<tr id="contentRow">
							<td id="contentRow">
								<img src=""/>
							</td>
							<td id="contentRow">
								<AiFillStar size={100} color={'lightblue'}/>
							</td>
						</tr>
						<tr>
							<td>
								<p></p>
							</td>
						</tr>
					</table>
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
				<div id='contentcontainer'>
					<table id='contentTable'>
						<tr id="contentRow">
							<td id="contentRow">
								<img src=""/>
							</td>
							<td id="contentRow">
								<AiFillStar size={100} color={'lightblue'}/>
							</td>
						</tr>
						<tr>
							<td>
								<p></p>
							</td>
						</tr>
					</table>
				</div>
			</div>
		)
	}
}


export default Content
/* return (
		<div id='contentcontainer'>
			<table id='contentTable'>
				<tr id="contentRow">
					<td id="contentRow">
						<img src=""/>
					</td>
					<td id="contentRow">
						<AiFillStar size={100} color={'lightblue'}/>
					</td>
				</tr>
				<tr>
					<td>
						<p></p>
					</td>
				</tr>
			</table>
		</div>
	) */