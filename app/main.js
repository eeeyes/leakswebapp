$ = require('jquery');
nav = require('./nav'); 
issues = require('./issues');
dashboard = require('./dashboard');

function initIssues(){
	issues.buildIssues();
	issues.showIssues();
}

function initDashboard(){
	dashboard.buildDashboard();
	dashboard.hideDashboard();
}

$(document).ready(
	function(){
	
		nav.buildNav();
	// 	$('body').on('nav:issues',function(){
// 			console.log('receive nav:issues');
// 		});
// 		$('body').on('nav:issues',function(){
// 			console.log('receive nav:issues X2');
// 		});
		 initIssues();
		 initDashboard();
		
	}
);