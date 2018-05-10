var patlist = [ {
	cat : "1",
	dir : "/abc/src",
	fname : "program01.c",
	stat : "",
	incharge : "홍길동",
	ln : 300,
	ny : ""
}, {
	cat : "1",
	dir : "/abc/src",
	fname : "program02.c",
	stat : "",
	incharge : "김갑돌",
	ln : 300,
	ny : ""
}, ]

var appm = new Vue({
	el : '#app',
	data : function() {
		return {
			patlist : patlist
		}
	}
});

function btn_click1() {
	$.ajax({
		url : "/patlist",
		type : "GET",
		cache : false,
		success : function(response) {
			patlist.length = 0;
			for (var e = 0; e < response.length; e++) {
				patlist.push(response[e]);
			}
		}
	});
}
