function registerEvent(){
	$('body').on('nav',function(event,name){
		if( name === 'dashboard' ){
			showDashboard();
		}else{
			hideDashboard();
		}
		
	});
	

}



var buildDashboard = function(){
	var dashboardElement = $('<dashboard/>',{html:'dashboard'});
	dashboardElement.css('display','block');
	$('body').append(dashboardElement);
	registerEvent();
};

var showDashboard = function() {
	var dashboard = $('dashboard');
	dashboard.css('display','block');
}

var hideDashboard = function() {
	var dashboard = $('dashboard');
	dashboard.hide();
}

exports.buildDashboard = buildDashboard;
exports.showDashboard = showDashboard;
exports.hideDashboard = hideDashboard;