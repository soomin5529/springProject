/* javascript onload */
window.onload = function() {
	var menu02 = document.getElementById("menu02");
	var menu03 = document.getElementById("menu03");
	var url = document.location.href.split("/");
	if (url[url.length - 1] == "startupKeyword") {
		menu02.className += "on";
	}
	if (url[url.length - 1] == "startupWeather") {
		menu03.className += "on";
	}
}

/* jQuery onload */
$(document).ready(function(){
	  $("#svgMap01 g").mouseover(function(event) {
		 var cls = $(this).attr('class');
		 var _path = event.target;
		 var city_name = _path.id;
		 var _over_g = $(this).find('path, polygon');

		 if(cls == 'city'){
			_path.setAttribute( "fill", "#584de4" );
			
		 }else{
			$.each(_over_g, function (index, item) { 
			   item.setAttribute( "fill", "#584de4" )
			});
		 }         
	  }).mouseout(function(event) {
		 var cls = $(this).attr('class');
		 var _path = event.target;
		 if(cls == 'city'){
			_path.setAttribute( 'fill', '#fff' );   
		 }else{
			var _path = event.target;
			var _over_g = $(this).find('path, polygon');
			$.each(_over_g, function (index, item) { 
			   item.setAttribute( 'fill', '#fff')
			});
		 }         
	  });
	});


/* popup open/close */
function closePopDashboard() {
	document.getElementById("dashboard").style.display = "none";
}
function openPopCommunity() {
	document.getElementById("community").style.display = "block";
}

function closePopCommunity() {
	document.getElementById("community").style.display = "none";
}

function openPopCommunityReg() {
	document.getElementById("communityReg").style.display = "block";
}

function closePopCommunityReg() {
	document.getElementById("communityReg").style.display = "none";
}

function openPopMyPage() {
	var login = document.getElementById("login");
	/*if(sessionStorage.getItem("isLogin")){
		
	}else{*/
		login.innerHTML +=
			 '<div class="deemed" onclick="closePopLogin()"></div>'
			+ '<span class="close-btn" onclick="closePopLogin()">x</span>'
			+ '<div class="pop-box" style="width:400px; height:360px;">'
			+ '	<div class="title-box">'
			+ '		<div class="tit">로그인</div>'
			+ '	</div>'
			+ '<div class="content-box">'
			+ '		<form action="/SpringTeamProject/member/login">'
			+ '			<div class="input-box">'
			+ '				<div class="label-box">아이디</div>'
			+ '				<input type="text" name="userid" placeholder="아이디를 입력하세요"/>'
			+ '			</div>'
			+ '			<div class="input-box">'
			+ '				<div class="label-box">비밀번호</div>'
			+ '				<input type="password" name="pwd" placeholder="비밀번호를 입력하세요"/>'
			+ '			</div>'
			+ '			<button type="submit" class="btn-full btn01-reverse">로그인</button>'
			+ '			<div class="join-btn">'
			+ '				<span class="gray">아직 회원이 아니신가요?</span>'
			+ '				<span class="highlight01" onclick="openPopJoin()">회원가입</span>'
			+ '			</div>'
			+ '		</form>'
			+ '	</div>'
			+ '</div>';
		login.style.display="block";
	/*}*/
}

function closePopMyPage() {
	document.getElementById("myPage").style.display = "none";
}

function closePopLogin() {
	var login = document.querySelector("#login");	//제거하고자 하는 엘리먼트
	while(login.firstChild){
		login.removeChild(login.firstChild);
	}
	login.style.display="none";
}

function openPopJoin() {
	var join = document.getElementById("join");
	join.innerHTML += 
		'<div class="deemed" onclick="closePopJoin()"></div>'
		+ '<span class="close-btn" onclick="closePopJoin()">x</span>'
		+ '<div class="pop-box" style="width:400px; height:716px;">'
		+ '	<div class="title-box">'
		+ '		<div class="tit">회원가입</div>'
		+ '	</div>'
		+ '	<div class="content-box">'
		+ '		<form action="/SpringTeamProject/member/signIn">'
		+ '			<div class="input-box">'
		+ '				<div class="label-box">아이디</div>'
		+ '				<input type="text" name="userid" placeholder="아이디를 입력하세요"/>'
		+ '			</div>'
		+ '			<div class="input-box">'
		+ '				<div class="label-box">비밀번호</div>'
		+ '				<input type="password" name="pwd" placeholder="비밀번호를 입력하세요"/>'
		+ '			</div>'
		+ '			<div class="input-box">'
		+ '				<div class="label-box">비밀번호 확인</div>'
		+ '				<input type="password" name="repwd" placeholder="비밀번호를 다시 입력하세요"/>'
		+ '			</div>'
		+ '			<div class="input-box">'
		+ '				<div class="label-box">이름</div>'
		+ '				<input type="text" name="name" placeholder="이름(닉네임)을 입력하세요"/>'
		+ '			</div>'
		+ '			<div class="input-box">'
		+ '				<div class="label-box">이메일</div>'
		+ '				<input type="email" name="email" placeholder="이메일을 입력하세요"/>'
		+ '			</div>'
		+ '			<div class="input-box">'
		+ '				<div class="label-box">생일</div>'
		+ '				<input type="date" name="birthdate" placeholder="생일을 입력하세요"/>'
		+ '			</div>'
		+ '			<div class="input-box">'
		+ '				<div class="label-box">성별</div>'
		+ '				<input type="radio" name="gender" id="male" checked/><label for="male">남성</label>'
		+ '				<input type="radio" name="gender" id="female"/><label for="female">여성</label>'
		+ '			</div>'
		+ '			<button type="submit" class="btn-full btn01-reverse">회원가입</button>'
		+ '		</form>'
		+ '	</div>'
		+ '</div>';
	join.style.display="block";
}

function closePopJoin() {
	var join = document.getElementById("join");
	while(join.firstChild){
		join.removeChild(join.firstChild);
	};
	join.style.display="none";
}
/* bookmark icon */
function bookmark() {
	var bookmark = document.getElementById("bookmark");

	if (bookmark.classList.contains('on')) {
		bookmark.className = bookmark.className.replace("on", "off");
	} else if (bookmark.classList.contains('off')) {
		bookmark.className = bookmark.className.replace("off", "on");
	}
}

/* like icon */
function postLike() {
	var postLike = document.getElementById("likeBtn");
	if (postLike.classList.contains('on')) {
		postLike.className = postLike.className.replace("on", "off");
		postLike.innerHTML = '<svg viewBox="0 0 40 40" class="like-icon">'
				+ '<path d="M20 4.5h.8c.9.1 1.6.5 2.1 1.2.5.6.8 1.4.6 2.2v8.6H34c.7 0 1.4.3 1.8.9.5.6.8 1.5.7 2.4v7.8c0 2.3-.5 4.9-2.5 6.7-1.5 1.3-4 2.2-7.6 2.2H3.5v-15h7.6l5.2-8 1.3-8.6.1-.3zm-9.5 17v15"></path>'
				+ '</svg>' + '<span class="like-txt">좋아요</span>';
	} else if (postLike.classList.contains('off')) {
		postLike.className = postLike.className.replace("off", "on");
		postLike.innerHTML = '<svg viewBox="0 0 40 40" class="like-icon">'
				+ '<path d="M25 15V8c.4-2.4-1.5-4.7-4-5h-2a2 2 0 00-2 1.5v.2l-1.3 8.2-3 7.1H2v18h24.4C36 38 38 32.4 38 27.6V20c.2-2.6-1.6-5-4-4.9-.5-.4-.8-.4-1 0h-8zM12 38H9V20h3v18z"></path>'
				+ '</svg>' + '<span class="like-txt">좋아요</span>';
	}
}
