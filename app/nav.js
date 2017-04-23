
var buildNav = function() {

	var ulElement = $('<ul/>');
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
		console.log(value);
	});
	
	var divElement = $('<div/>');
	ulElement.appendTo(divElement);
	
	var btnElement = $('<button/>');
	
	
	
	var navElement = $('<nav/>');
	btnElement.appendTo(navElement);
	divElement.appendTo(navElement);
	
	
	navElement.appendTo('body');
	
}


exports.buildNav = buildNav;