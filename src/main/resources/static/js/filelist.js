var flist =
  [
    {cat:"1", dir:"/abc/src", fname:"program01.c", sz:3000},
    {cat:"1", dir:"/abc/src", fname:"program02.c", sz:4000},
    {cat:"1", dir:"/abc/src", fname:"codekkk.js", sz:972},
    {cat:"1", dir:"/abc/src", fname:"NONE.js", sz:4327},
    {cat:"1", dir:"/abc/inc", fname:"mysrc.h", sz:12},
    {cat:"1", dir:"/abc/def/res", fname:"ssscsdds", sz:12},
    {cat:"1", dir:"/abc/def/res", fname:"findersss.js", sz:12},
    {cat:"1", dir:"/abc/def/res", fname:"mysrc.json", sz:12},
    {cat:"1", dir:"/abc/def/res", fname:"mysrc.cpp", sz:12},
    {cat:"1", dir:"/abc/def/lib", fname:"mylib001.so", sz:300012},
  ]

const appm = new Vue({
  el: '#app',
  data: function() {
    return {
      message: '안녕 VUE2!',
      flist: flist
    }
  }
});

function btn_click1(x) {
	$("body").css({"cursor":"wait"});

	$.ajax({ 
	        url : "/flist/" + x,
	        type : "GET",
	        cache : false,
	        success : function(response){
//	        	console.log("response:"+JSON.parse(response));
	        	flist.length = 0;
	        	
//	        	for (var e = 0; e < response.length ; e++) {
	        	for (var e of response) {
	        		flist.push(e);
	        	}
	        	
	        	$("body").css({"cursor":"default"});
	        }
	  });
}
	
