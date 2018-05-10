// 공통
Vue.component('apsk-menu', {
    template: 
		` 
<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="search-file" data-toggle="pill" href="#" role="tab" aria-controls="search-file" aria-selected="true">Search File</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="file-list" data-toggle="pill" href="#" role="tab" aria-controls="file-list" aria-selected="false">File List</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="patten" data-toggle="pill" href="#" role="tab" aria-controls="patten" aria-selected="false">Patten</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="status" data-toggle="pill" href="#" role="tab" aria-controls="status" aria-selected="false">Status</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="reports" data-toggle="pill" href="#" role="tab" aria-controls="reports" aria-selected="false">Reports</a>
  </li>
</ul>
`

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
