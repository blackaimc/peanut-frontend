import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/main.css'
import '../assets/css/noscript.css'

const Introduce = () => {
    return(
        <div class="is-preload">
			<div id="wrapper" class="divided">
					<section class="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in" id="first">
						<div class="content">
							<h2>팀 땅콩에 오신 것을 환영합니다</h2>
							<p>내용</p>
							<ul class="actions stacked">
								<Link to = '/login'><li><a class="button">Learn More</a></li></Link>
							</ul>
						</div>
						<div class="image">
							<img src="https://cdn.pixabay.com/photo/2016/02/22/08/29/scenery-1214950_960_720.jpg" alt="" />
						</div>
					</section>

					<section class="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
						<div class="content">
							<h2>제목</h2>
							<p>내용</p>
							<ul class="actions stacked">
								<li><a href="#" class="button">Learn More</a></li>
							</ul>
						</div>
						<div class="image">
							<img src="https://cdn.pixabay.com/photo/2016/02/22/08/29/scenery-1214950_960_720.jpg" alt="" />
						</div>
					</section>

					<section class="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
						<div class="content">
							<h2>제목</h2>
							<p>내용</p>
							<ul class="actions stacked">
								<li><a href="#" class="button">Learn More</a></li>
							</ul>
						</div>
						<div class="image">
							<img src="https://cdn.pixabay.com/photo/2016/02/22/08/29/scenery-1214950_960_720.jpg" alt="" />
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
									<a href="images/gallery/fulls/01.jpg" class="image">
										<img src="https://cdn.discordapp.com/avatars/443734180816486441/b87bc59fe1a1de7da5756a557760b2c4.webp?size=256" alt="" />
									</a>
									<div class="caption">
										<h3>땅콩(PM)</h3>
										<p>저는 착하고 친절한 학생 개발자인 <br/> 팀 땅콩 대표, 땅콩입니다.</p>
										<ul class="actions fixed">
											<li><span class="button small">Details</span></li>
										</ul>
									</div>
								</article>
								<article >
									<a href="images/gallery/fulls/01.jpg" class="image">
										<img src="https://cdn.discordapp.com/avatars/557119176590884864/a_2a5e3920ad489064f2b50630ce050ab1.gif?size=256" alt="" />
									</a>
									<div class="caption">
										<h3>지영</h3>
										<p>파이썬을 다루는 폐인입니다</p>
										<ul class="actions fixed">
											<li><span class="button small">Details</span></li>
										</ul>
									</div>
								</article>
								<article>
									<a href="images/gallery/fulls/01.jpg" class="image">
										<img src="https://cdn.discordapp.com/avatars/594183416266752000/3cfca924b740a37961c4f50e00ff58c5.webp?size=256" alt="" />
									</a>
									<div class="caption">
										<h3>방세준</h3>
										<p>뭐 다하고싶은 학생입니다..</p>
										<ul class="actions fixed">
											<li><span class="button small">Details</span></li>
										</ul>
									</div>
								</article>
								<article>
									<a href="images/gallery/fulls/01.jpg" class="image">
										<img src="https://cdn.discordapp.com/avatars/401532480278102027/19ddf68d07bc666121cf62dcda95f761.webp?size=256" alt="" />
									</a>
									<div class="caption">
										<h3>ensuta</h3>
										<p>(잠수중...)</p>
										<ul class="actions fixed">
											<li><span class="button small">Details</span></li>
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
										<h3>파랑(PM)</h3>
										<p>10덕 입니다</p>
										<ul class="actions fixed">
											<li><span class="button small">Details</span></li>
										</ul>
									</div>
								</article>
								<article >
									<a href="images/gallery/fulls/01.jpg" class="image">
										<img src="" alt="" />
									</a>
									<div class="caption">
										<h3>호두과자</h3>
										<p>규카츠 먹고 싶다</p>
										<ul class="actions fixed">
											<li><span class="button small">Details</span></li>
										</ul>
									</div>
								</article>
								<article>
									<a href="images/gallery/fulls/01.jpg" class="image">
										<img src="https://cdn.discordapp.com/avatars/727486102587310102/f4a4d45699340eadb24645e7c1e6787e.webp?size=128" alt="" />
									</a>
									<div class="caption">
										<h3>냐코</h3>
										<p>냐코는 잼입니다</p>
										<ul class="actions fixed">
											<li><span class="button small">Details</span></li>
										</ul>
									</div>
								</article>
								<article>
									<a href="images/gallery/fulls/01.jpg" class="image">
										<img src="https://cdn.discordapp.com/avatars/761220557160579102/f9c3ff32acee89d115a187274eccffda.webp?size=128" alt="" />
									</a>
									<div class="caption">
										<h3>꼬빈</h3>
										<p>여친 구합니다 ㅜㅜ</p>
										<ul class="actions fixed">
											<li><span class="button small">Details</span></li>
										</ul>
									</div>
								</article>
							</div>
						</section>
				</div>
					<br/><br/><br/><br/><br/>

					<footer class="wrapper style1 align-center">
						<div class="inner">
							<p>Team peanut.</p>
							<span class="button small"><a href = "#">위로 올라가기</a></span>
						</div>
					</footer>
                
			</div>
	</div>
    );
}

export default Introduce;