
var buildNav = function() {

	var ulElement = $('<ul/>');
	// ulElement.css('padding',0);
// 	ulElement.css('margin',0);
	var ulItems = [
		{name:'Issues',event:'issues'},
		{name:'Dashboard',event:'dashboard'}
		];
	
	$.each(ulItems,function(idx,value){
		var liElement = $('<li/>',{
			'html':value.name
		});
		
		liElement.on('click',value,function(event){
			var value =event.data;
			var name = value.name;
			var eventName = value.event;
			$('body').trigger('nav',[eventName]);
		});
		
		liElement.appendTo(ulElement);
	});
	
	var divElement = $('<div/>');
	ulElement.appendTo(divElement);
	
	
	var btnElement = $('<button/>');
	
	
	
	var navElement = $('<nav/>');
	btnElement.appendTo(navElement);
	divElement.appendTo(navElement);
	
	navElement.css('background','blue');
	navElement.css('margin',0);
	navElement.css('padding',0);
	navElement.css('display','block');
	navElement.css('overflow','auto');
	
	navElement.appendTo('body');
	
}

var navHeight = function(){
	var navElement = $('nav');
	return navElement.outerHeight(true) ;
}

exports.buildNav = buildNav;
exports.navHeight = navHeight;