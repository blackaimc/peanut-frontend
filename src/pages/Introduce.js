import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/main.css'

const Introduce = () => {
	const teamButton = "더 알아보기";
    return(
        <div class="is-preload">
			<div id="wrapper" class="divided">
					<section class="spotlight style1 orient-right content-align-left image-position-center" id="first">
						<div class="content">
							<h2>Team Peanut</h2>
							<p>재밌는 디스코드 경험을 해보시고 싶으신가요? <br/>그 여정에 저희 TEAM 땅콩이 함께 하고 싶습니다!</p>
							<p>-팀 땅콩 대표 땅콩</p>
							<ul class="actions stacked">
								<Link to = '/login'><li><a class="button">로그인</a></li></Link>
								<li><a class = "button" href = "https://discord.gg/Cp5jduJZMn" target = "_blank">팀 땅콩 유저 커뮤니티</a></li>
							</ul>
						</div>
						<div className="image">
							<img src="https://cdn.pixabay.com/photo/2016/02/22/08/29/scenery-1214950_960_720.jpg" alt="" />
						</div>
					</section>

					<section class="spotlight style1 orient-left content-align-left image-position-center">
						<div class="content">
							<h2>비엔나 봇</h2>
							<p>기능이 너무 다양해서 <br/>무엇을 하는 봇인지 궁금할 정도의 봇</p>
							<ul class="actions stacked">
								<li><a class="button">소개보기</a></li>
								<li><button class="button" onClick = {() => alert("제작 중인 시스템입니다")}>제작중</button></li>
							</ul>
						</div>
						<div class="image">
							<img src="https://cdn.pixabay.com/photo/2016/02/22/08/29/scenery-1214950_960_720.jpg" alt="" />
						</div>
					</section>

					<section class="spotlight style1 orient-right content-align-left image-position-center">
						<div class="content">
							<h2>일정관리 봇</h2>
							<p>팀 땅콩이 프로젝트를 수행하면서 만든 일정관리 봇입니다</p>
							<p>(이름을 지어주세요)</p>
							<ul class="actions stacked">
								<li><a class="button">소개 보기</a></li>
								<li><a class="button">봇 초대하기</a></li>
							</ul>
						</div>
						<div class="image">
							<img src="https://cdn.pixabay.com/photo/2016/02/22/08/29/scenery-1214950_960_720.jpg" />
						</div>
					</section>

					<div>
						<section class="wrapper style1 align-center">
							<div class="inner">
								<h2>팀 땅콩 팀원들</h2>
								<p>내용</p>
							</div>
							<h3><strong>봇 개발팀</strong></h3>
							<p>평범하게 봇을 개발하는 팀입니다</p>
							<div class="gallery style2 medium onscroll-fade-in">
								<article>
									<a href="https://github.com/jjun4341" class="image">
										<img src="https://cdn.discordapp.com/avatars/443734180816486441/b87bc59fe1a1de7da5756a557760b2c4.webp?size=256" alt="" />
									</a>
									<div class="caption">
										<h3>땅콩(PM)</h3>
										<p>저는 착하고(?) 친절한(??) 학생 <br />개발자인 팀 땅콩 대표, 땅콩입니다.</p>
										<ul class="actions fixed">
											<li><span class="button small">{teamButton}</span></li>
										</ul>
									</div>
								</article>
								<article >
									<a href="https://github.com/JiYeong11" class="image">
										<img src="https://cdn.discordapp.com/avatars/557119176590884864/a_2a5e3920ad489064f2b50630ce050ab1.gif?size=256" alt="" />
									</a>
									<div class="caption">
										<h3>지영</h3>
										<p>파이썬을 다루는 폐인입니다</p>
										<ul class="actions fixed">
											<li><span class="button small">{teamButton}</span></li>
										</ul>
									</div>
								</article>
								<article>
									<a href="https://github.com/bangsejun" class="image">
										<img src="https://media.discordapp.net/attachments/754181625776046146/778546208780058624/emote-6.png?width=677&height=677" alt="" />
									</a>
									<div class="caption">
										<h3>방세준</h3>
										<p>뭐 다 하고싶은 빵</p>
										<ul class="actions fixed">
											<li><span class="button small">{teamButton}</span></li>
										</ul>
									</div>
								</article>
								<article>
									<a href="https://github.com/ensuta" class="image">
										<img src="https://cdn.discordapp.com/avatars/401532480278102027/19ddf68d07bc666121cf62dcda95f761.webp?size=256" alt="" />
									</a>
									<div class="caption">
										<h3>ensuta</h3>
										<p>해커, 보안담당데스요</p>
										<ul class="actions fixed">
											<li><span class="button small">{teamButton}</span></li>
										</ul>
									</div>
								</article>
							</div>
							<br /><br /><br />
							<h3><strong>웹 개발팀</strong></h3>
							<p>해당 홈페이지를 제작, 담당합니다</p>
							<div class="gallery style2 medium onscroll-fade-in">
								
								<article >
									<a href="images/gallery/fulls/01.jpg" class="image">
										<img src="" alt="" />
									</a>
									<div class="caption">
										<h3>파랑 - Back</h3>
										<p>치노를 좋아하는 10덕입니다</p>
										<ul class="actions fixed">
											<li><span class="button small">Details</span></li>
										</ul>
									</div>
								</article>
								<article >
									<a href="images/gallery/fulls/01.jpg" class="image">
										<img src="https://imgur.com/M0KveU6.jpg" alt="" />
									</a>
									<div class="caption">
										<h3>호두과자 - Front</h3>
										<p>규카츠 먹고 싶은 프론트앤드 <br/> 개발자입니다.</p>
										<ul class="actions fixed">
											<li><span class="button small">{teamButton}</span></li>
										</ul>
									</div>
								</article>
								<article>
									<a href="images/gallery/fulls/01.jpg" class="image">
										<img src="https://cdn.discordapp.com/avatars/727486102587310102/f4a4d45699340eadb24645e7c1e6787e.webp?size=128" alt="" />
									</a>
									<div class="caption">
										<h3>냐코 - Design</h3>
										<p>냐코는 노잼입니다!</p>
										<ul class="actions fixed">
											<li><span class="button small">{teamButton}</span></li>
										</ul>
									</div>
								</article>
								<article>
									<a href="images/gallery/fulls/01.jpg" class="image">
										<img src="https://cdn.discordapp.com/avatars/761220557160579102/f9c3ff32acee89d115a187274eccffda.webp?size=128" alt="" />
									</a>
									<div class="caption">
										<h3>꼬빈 - Design</h3>
										<p>여친 구합니다 ㅜㅜ</p>
										<ul class="actions fixed">
											<li><span class="button small">{teamButton}</span></li>
										</ul>
									</div>
								</article>
							</div>
						</section>
				</div>
					<br/><br/><br/><br/><br/>

					<footer class="wrapper style1 align-center">
						<div class="inner">
							<p>Footer 제작중...</p>
						</div>
					</footer>
                
			</div>
	</div>
    );
}

export default Introduce;