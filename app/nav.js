





var buildNav = function() {

	var ulElement = $('<ul/>');
	var ulItems = [
		{name:'Issues',event:'nav:issues'},
		{name:'Dashboard',event:'nav:dashboard'}
		];
	
	$.each(ulItems,function(idx,value){
		var liElement = $('<li/>',{
			'html':value.name
		});
		
		liElement.on('click',value,function(event){
			var value =event.data;
			var name = value.name;
			var eventName = value.event;
			console.log(value);
			console.log('trigging '+eventName);
			$('body').trigger(eventName);
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