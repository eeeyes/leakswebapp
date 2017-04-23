$ = require('jquery');
nav = require('./nav'); 
issues = require('./issues');
dashboard = require('./dashboard');

function initBody(){
	$('body').css('padding',0);
	$('body').css('margin',0);
	$('body').css('top',0);
	$('body').css('bottom',0);
	$('body').css('left',0);
	$('body').css('right',0);
	$('body').css('position','fixed');
}

function initNav(){
	nav.buildNav();
}

function initIssues(){
	issues.buildIssues();
	issues.showIssues();
}

function initDashboard(){
	dashboard.buildDashboard();
	dashboard.hideDashboard();
}

function layout(){
	navPosition = $('nav').position();
	console.log(navPosition);
	
	navHeight = navPosition.top + nav.navHeight();
	
	windowHeight = $('body').height();
	windowWidth = $('body').width();
	
	console.log(navHeight);
	console.log('window height:'+windowHeight);
	$('issues').css('top',navHeight);
	//$('issues').css('margin',0);
	$('issues').css('height',windowHeight-navHeight);
	$('issues').css('width',windowWidth);
}

$(document).ready(
	function(){
		
		initBody();
		
		initNav();
		initIssues();
		initDashboard();
		
		
		layout();
		$(window).resize(function(){
			layout();
		});
		
	}
);