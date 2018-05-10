

let barChartData = 
{
		type: 'bar',
		data: {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [{
				label: 'Dataset 1',
				backgroundColor: "#e25039",
				data: [
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor()
				]
			}, {
				label: 'Dataset 2',
				backgroundColor: "rgba(54,73,93,.5)",
				data: [
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor()
				]
			}, {
				label: 'Dataset 3',
				backgroundColor: "rgba(71, 183,132,.5)",
				data: [
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor()
				]
			}]

		},
	options: {
		title: {
			display: true,
			text: 'Chart.js Bar Chart - Stacked'
		},
		tooltips: {
			mode: 'index',
			intersect: false
		},
		responsive: true,
		scales: {
			xAxes: [{
				stacked: true,
			}],
			yAxes: [{
				stacked: true
			}]
		}
	}
};

let appc = new Vue({
	  el: '#app',
	  mounted : function() {
			this.startbar("barchart", barChartData);
		},
	methods : {
		startbar : (chartId, chartData) => {
		    const ctx = document.getElementById(chartId).getContext("2d");
		    const myChart = new Chart(ctx, chartData);
		  }
	}	
} );

