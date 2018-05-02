// 공통
Vue.component('apsk-menu', {
    template: 
		'<nav class="nav nav-pills ">' +
'<a class="nav-link active" href="#">Search file</a>' +
'<a class="nav-link" href="#">File List</a>' +
'<a class="nav-link" href="#">Pattern</a>' +
'<a class="nav-link" href="#">status</a>' +
'<a class="nav-link" href="#">Report</a>' +
'</nav>'

});

Number.prototype.format = function() {
	if (this == 0)
		return 0;
	var reg = /(^[+-]?\d+)(\d{3})/;
	var n = (this + '');
	while (reg.test(n))
		n = n.replace(reg, '$1' + ',' + '$2');
	return n;
};
