var subject_section = {
	"전공핵심":"기본프로그래밍,컴퓨터교육개론,자료구조,컴퓨터구조,데이타베이스,운영체제,컴퓨터네트워크,프로그래밍언어론",
	"전공일반":"상업정보교과논리논술,컴퓨터교과교육론,컴퓨터교재연구및지도법,직접입력",
	"교양":"인성,리더십,기본영어,전문영어/글로벌문화,의사소통,창의와사유,기초인문사회과학,기초자연과학,인간/문화,사회/역사,자연/과학/기술,기타교양",
	"교직":"특수교육학개론,학교폭력예방및학생의이해,교직실무,교육봉사활동,교육실습,직접입력"
};


$("#level1").change(function() {

	var $dropdown = $(this);	
	var key = $dropdown.val();
	var vals = [];
						
	switch(key) {
		case 'majCore':
			vals = subject_section.전공핵심.split(",");
			break;
		case 'majGen':
			vals = subject_section.전공일반.split(",");
			break;
		case 'liberal':
			vals = subject_section.교양.split(",");
			break;
		case 'pedagogy':
			vals = subject_section.교직.split(",");
			break;
		case 'base':
			vals = ["왼쪽부터 선택."];
			break;
	}
	
	var $level2_choice = $("#level2");
	$level2_choice.empty();
	$.each(vals, function(index, value) {
		$level2_choice.append("<option>" + value + "</option>");
	});	
});

$("#level2").change(function() {
	var a = $("#level1").val();
	var b = $(this).val();

	if(a == "liberal" || b == "직접입력"){
		document.getElementById('name1').disabled = false;
	}
	else {
		document.getElementById('name1').disabled = true;
	}
});

var subjectN = 0;

function addSubject(){
}

function delSubject(){
	console.log('미구현');
}