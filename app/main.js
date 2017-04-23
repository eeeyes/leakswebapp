$ = require('jquery');
nav = require('./nav'); 
console.log('hello world');
console.log('your sister');
console.log(nav);
$(document).ready(
	function(){
		document.write("Hello, World!");
		document.write("I AM IRON MAN");
		nav.buildNav();
		$('body').on('nav:issues',function(){
			console.log('receive nav:issues');
		});
		$('body').on('nav:issues',function(){
			console.log('receive nav:issues X2');
		});
	}
);