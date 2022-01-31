import {React, useState, useEffect} from 'react'
import { BsStarFill } from 'react-icons/bs'
import { BsStar } from 'react-icons/bs'
import { BsStarHalf } from 'react-icons/bs'
import HTML from '../images/Html.png';
import CSS from '../images/Css.png';
import JS from '../images/Js.png';
import REACT from '../images/React.png';
import NODEJS from '../images/NodeJs.png';
import PFP from '../images/pfp.jpg';
import WEST from '../images/WMNE.jpg';
import GCC from '../images/GCC.jpg';

const Content = () => {
	const [home, setHome] = useState(true);
	const [about, setAbout] = useState(false);
	const [skill, setSkill] = useState(false);
	if(home === true){
		return(
			<div>
				<ul id="catlist">
					<li className='sub'><button className="subtext" onClick={()=>{setHome(true);setAbout(false);setSkill(false);}}>Intro Page</button></li>
					<li className='sub'><button className="subtext" onClick={()=>{setHome(false);setAbout(true);setSkill(false);}}>Skills</button></li>
					<li className='sub'><button className="subtext" onClick={()=>{setHome(false);setAbout(false);setSkill(true);}}>About Me</button></li>
				</ul>
				<div className="flex1banner"></div>
				<div className="flex1">
					<h1 id='flex1text'>Welcome</h1>
				</div>
				<div>
					<img src={PFP} id="flex1pfp"/>
					<h2 id='flex1text2'>My name is Luca Graves, and welcome to my website that shows off my work and skills as well as telling you my current school situation and my plans for the future. </h2>
				</div>
				<div>
					<img src={WEST}/>
					<h2 id='flex1text3'>I am currently enrolled in West-Mec, they are the ones who taught me most of what I know today. I am currently in my second and last year of the coding program and once I graduate I will have earned many benefits including 2 certifications to prove my skill. Every week-day I attend West-Mec from 1:00pm to 3:30pm, although I arrive 30 minutes early everday so I can prepare myself for the day and most days i stay behind to work on school work.</h2>
				</div>
				<div>
					<img id="flex1img" src={GCC}/>
					<h2 id='flex1text4'>This is GCC, Glendale Community College. I am also currently enrolled here. I am in my first year and im trying to get my associates degree. My classes depend on the semester and type of class so my schedule shifts alot.</h2>
				</div>
			</div>
		)
	}else if(about === true){
		return(
			<div>
				<ul id="catlist">
					<li className='sub'><button className="subtext" onClick={()=>{setHome(true);setAbout(false);setSkill(false);}}>Intro Page</button></li>
					<li className='sub'><button className="subtext" onClick={()=>{setHome(false);setAbout(true);setSkill(false);}}>Skills</button></li>
					<li className='sub'><button className="subtext" onClick={()=>{setHome(false);setAbout(false);setSkill(true);}}>About Me</button></li>
				</ul>
				<div className="flex2">
					<img src={HTML}/>
					<div><BsStarFill size={100} color={'white'}/></div>
					<div><BsStarFill size={100} color={'white'}/></div>
					<div><BsStarFill size={100} color={'white'}/></div>
					<div><BsStarFill size={100} color={'white'}/></div>
					<div><BsStar size={100} color={'white'}/></div>
					<div id='SkillText'>When it comes to HTML I am good at it I know all the basics and then some. I've made alot of HTML sites and even though alot were just for school I did them none the less. Starting out with simple tables and paragraph tags leading to responsive design in navbars and footers.</div>
				</div>
				<div className="flex2">
					<img src={CSS}/>
					<div><BsStarFill size={100} color={'white'}/></div>
					<div><BsStarFill size={100} color={'white'}/></div>
					<div><BsStarFill size={100} color={'white'}/></div>
					<div><BsStarFill size={100} color={'white'}/></div>
					<div><BsStarHalf size={100} color={'white'}/></div>
					<div id='SkillText'>When it comes to CSS id say im better at it then HTML but still not perfect. I know how to make things responsive to size change, simple font imports and floating things side to side. One of my favorites that I still need to master is using flexboxes seeing as they are best when it comes to organization div tags.</div>
				</div>
				<div className="flex2">
					<img src={JS}/>
					<div><BsStarFill size={100} color={'white'}/></div>
					<div><BsStarFill size={100} color={'white'}/></div>
					<div><BsStarFill size={100} color={'white'}/></div>
					<div><BsStarHalf size={100} color={'white'}/></div>
					<div><BsStar size={100} color={'white'}/></div>
					<div id='SkillText'>JavaScript is something I can do if necessary, and I can usually do most tasks but doing it efficently will depend on the task. I love using my functions and for loops alot. It is something i knew how to do even before school had taught me it. On top of those I know my way around problem solving and onclick functions to switch images for example.</div>
				</div>
				<div className="flex2">
					<img src={REACT}/>
					<div><BsStarFill size={100} color={'white'}/></div>
					<div><BsStarFill size={100} color={'white'}/></div>
					<div><BsStarFill size={100} color={'white'}/></div>
					<div><BsStarFill size={100} color={'white'}/></div>
					<div><BsStarFill size={100} color={'white'}/></div>
					<div id='SkillText'>React is something I picked up slow, but as I learned more and more about it the more I loved it, I know more about React then I do any other thing. It is easy to remeber and for me to use it easier i have tried to perfect a template that can build a React based website where it does 80% of the building blocks for you with a built in loading screen and error screen. Hoenstly it's one of the things im proud of the most.</div>
				</div>
				<div className="flex2">
					<img src={NODEJS}/>
					<div><BsStarFill size={100} color={'lightblue'}/></div>
					<div><BsStarFill size={100} color={'lightblue'}/></div>
					<div><BsStarFill size={100} color={'lightblue'}/></div>
					<div><BsStarHalf size={100} color={'lightblue'}/></div>
					<div><BsStar size={100} color={'lightblue'}/></div>
					<div id='SkillText'>NodeJs is my next favorite but I still have alot to get used to and learn before I can say I can use it just as good as React. I know to what I believe is most of the basics in NodeJs, to using URL's to change the page and get API information to having a functional task-manager app. I still have a ways to go as I need to learn better ways to implement HTML and express.</div>
				</div>
			</div>
		)
	}else{
		return(
			<div>
				<ul id="catlist">
					<li className='sub'><button className="subtext" onClick={()=>{setHome(true);setAbout(false);setSkill(false);}}>Intro Page</button></li>
					<li className='sub'><button className="subtext" onClick={()=>{setHome(false);setAbout(true);setSkill(false);}}>Skills</button></li>
					<li className='sub'><button className="subtext" onClick={()=>{setHome(false);setAbout(false);setSkill(true);}}>About Me</button></li>
				</ul>
				<div id="flex3">
					<div></div>
				</div>
			</div>
		)
	}
}


export default Content
