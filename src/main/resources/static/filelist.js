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

var appm = new Vue({
  el: '#app',
  data: function() {
    return {
      message: '안녕 VUE2!',
      flist: flist
    }
  }
});

function btn_click1() {
    $.ajax({ 
	        url : "/test",
	        type : "POST",
	        cache : false,
	        success : function(response){
//	        	console.log("response:"+JSON.parse(response));
	            flist.push(response);
	        }
	  });
}
	
