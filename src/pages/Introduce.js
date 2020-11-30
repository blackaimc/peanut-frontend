import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import '../assets/css/Animate.css'
import './CSS/main.css'
//import StyledText from  '../assets/js/AnimatedText'
import HeaderContainer from '../containers/common/HeaderContainer'


// ngrok http 3000 -host-header=localhost
// ssh -R :6001:10.156.145.147:3000 -p 2222 root@piko.app

const Master = styled.div`

	font-family: 'MapoFlowerIsland';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/MapoFlowerIslandA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
	
`;

var gobin = false;
const Introduce = () => {	
	const style = {
		margin: '15px',
	};
	const random = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);	
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	const easterEgg = random(1, 100000);
	const teamButton = "더 알아보기";
    return(
		
        <Master className="is-preload">
			<HeaderContainer/>
			<div className="divided wrapper-id">
					<section className="spotlight style1 orient-right content-align-left image-position-center" id="first">
						<div className="content">
							<h2>Team Peanut</h2>
							<p>재밌는 디스코드 경험을 해보시고 싶으신가요? <br/>그 여정에 저희 TEAM 땅콩이 함께 하고 싶습니다!</p>
							<p>-팀 땅콩 대표 땅콩</p>
							<ul className="actions stacked">
							<Link to = '/login'><li><button className = "button" style = {style}>로그인</button></li></Link>
							{easterEgg > 1 ? (<a href = "https://discord.gg/Cp5jduJZMn" target = "blank"><button className = "button">팀 땅콩 유저 커뮤니티</button></a>)
							:(<a href = "https://team-peanut-unofficial.piko.ml/" rel = "noreferrer" target = "blank"><li><button className = "button">비공식 사이트 가기</button></li></a>)}
							</ul>
						</div>
						<div className="image">
							<img src="https://cdn.pixabay.com/photo/2016/02/22/08/29/scenery-1214950_960_720.jpg" alt="" />
						</div>
					</section>

					<section className = "spotlight style1 orient-left content-align-left image-position-center">
						<div className = "content">
							<h2>비엔나 봇</h2>
							<p>기능이 너무 다양해서 <br/>무엇을 하는 봇인지 궁금할 정도의 봇</p>
							<ul className = "actions stacked">
								<li><button className = "button">소개보기</button></li>
								<li><button className ="button" onClick = {() => alert("제작 중인 시스템입니다")}>제작중</button></li>
							</ul>
						</div>
						<div className = "image">
							<img src="https://cdn.pixabay.com/photo/2016/02/22/08/29/scenery-1214950_960_720.jpg" alt="" />
						</div>
					</section>

					<section className ="spotlight style1 orient-right content-align-left image-position-center">
						<div className ="content">
							<h2>일정관리 봇</h2>
							<p>팀땅콩 내 봇 팀은 봇을 통하여 한 일과 하고 있는 작업 기재(예정)</p>
							<ul className ="actions stacked">
								<li><button className ="button">소개 보기</button></li>
								<li><button className ="button" onClick = {() => alert("제작 중인 시스템입니다")}>제작중</button></li>
							</ul>
						</div>
						<div className ="image">
							<img src="https://cdn.pixabay.com/photo/2016/02/22/08/29/scenery-1214950_960_720.jpg" alt = ""/>
						</div>
					</section>

					<div>
						<section className = "wrapper style1 align-center">
							<div className = "inner">
								<h2>팀 땅콩 팀원들</h2>
								<p>내용</p>
							</div>
							<h3><strong>봇 개발팀</strong></h3>
							<p>평범하게 봇을 개발하는 팀입니다</p>
							<div className="gallery style2 medium onscroll-fade-in">
								<article>
									<a href="https://github.com/jjun4341" className="image">
										<img src="https://cdn.discordapp.com/avatars/443734180816486441/b87bc59fe1a1de7da5756a557760b2c4.webp?size=256" alt="" />
									</a>
									<div className="caption">
										<p className = "PM" style = {{color : "gold"}}>땅콩(PM) </p>
										<p>학생 개발자이자 팀 대표, 땅콩입니다.</p>
										<ul className ="actions fixed">
											<li><span className ="button small">{teamButton}</span></li>
										</ul>
									</div>
								</article>
								<article >
									<a href="https://github.com/JiYeong11" className="image">
										<img src="https://cdn.discordapp.com/avatars/557119176590884864/a_2a5e3920ad489064f2b50630ce050ab1.gif?size=256" alt="" />
									</a>
									<div className="caption">
										<h3>지영</h3>
										<p>파이썬을 다루는 폐인입니다</p>
										<ul className="actions fixed">
											<li><span className="button small">{teamButton}</span></li>
										</ul>
									</div>
								</article>
								<article>
									<a href="https://github.com/bangsejun" className="image">
										<img src="https://media.discordapp.net/attachments/754181625776046146/778546208780058624/emote-6.png?width=677&height=677" alt="" />
									</a>
									<div className = "caption">
										<h3>방세준</h3>
										<p>뭐 다 하고싶은 빵</p>
										<ul className = "actions fixed">
											<li><span className = "button small">{teamButton}</span></li>
										</ul>
									</div>
								</article>
								<article>
									<a href="https://github.com/ensuta" className = "image">
										<img src="https://cdn.discordapp.com/avatars/401532480278102027/19ddf68d07bc666121cf62dcda95f761.webp?size=256" alt="" />
									</a>
									<div className = "caption">
										<h3>ensuta</h3>
										<p>해커, 보안 <br/>담당 데스</p>
										<ul className = "actions fixed">
											<li><span className = "button small">{teamButton}</span></li>
										</ul>
									</div>
								</article>
							</div>
							<br /><br /><br />
							<h3><strong>웹 개발팀</strong></h3>
							<p>해당 홈페이지를 제작, 담당합니다</p>
							<div className = "gallery style2 medium onscroll-fade-in">
								
								<article >
									<a href="https://github.com/pikokr" className = "image">
										<img src="https://cdn.discordapp.com/avatars/628595345798201355/a_981b316e32a0945fe327b506dcb72a11.gif?size=256" alt="" />
									</a>
									<div className = "caption">
										<h3>파랑 - Back</h3>
										<p>치노를 좋아하는 10덕입니다</p>
										<ul className = "actions fixed">
											<li><span className = "button small">{teamButton}</span></li>
										</ul>
									</div>
								</article>
								<article >
									<a href="https://github.com/cropMr" className="image">
										<img src="https://imgur.com/M0KveU6.jpg" alt="" />
									</a>
									<div className ="caption">
										<h3>호두과자 - Front</h3>
										<p>프앤 개발자 <br/>호두과자입니다</p>
										<ul className="actions fixed">
											<li><span className="button small">{teamButton}</span></li>
										</ul>
									</div>
								</article>
								<article>
									<a href="images/gallery/fulls/01.jpg" className = "image">
										<img src="https://cdn.discordapp.com/avatars/727486102587310102/c53e5aeaf0b849d9417092292b0e95cf.webp?size=256" alt="" />
									</a>
									<div className = "caption">
										<p className = "PM" style = {{color : "gold"}}>냐코(PM) - Design</p>
										<p>냐코는 노잼!</p>
										<ul className = "actions fixed">
											<li><span className = "button small">{teamButton}</span></li>
										</ul>
									</div>
								</article>
								<article>
									<a href="images/gallery/fulls/01.jpg" className = "image" onMouseEnter = {() => gobin = true} onMouseLeave = {() => gobin = false}>
										{
											gobin === true ? (
												<img src = "https://cdn.discordapp.com/avatars/761220557160579102/38401cf0f5dfe3d08c66d5a8599e1768.webp?size=256" alt = "꼬빈 평상시"/>
											):(
												<img src = "https://cdn.discordapp.com/avatars/761220557160579102/94d3883c7d49f9bbcca6d8e03726f0c1.webp?size=256" alt = "꼬빈 각성"/>
											)
										}
									</a>
									<div className = "caption">
										<h3>버그 - Design</h3>
										<p>이 프사 바퀴벌레 얼굴임 ㅅㄱ~</p>
										<ul className = "actions fixed">
											<li><span className = "button small">{teamButton}</span></li>
										</ul>
									</div>
								</article>
							</div>
						</section>
				</div>
					<br/><br/><br/><br/><br/>

					<footer className = "wrapper style1 align-center">
						<div className = "inner">
							<p>Footer 제작중...</p>
						</div>
					</footer>
                
			</div>
		</Master>
    );
}

export default Introduce;
