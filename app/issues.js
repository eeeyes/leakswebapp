function registerEvent(){
	$('body').on('nav',function(event,name){
		if(name === 'issues'){
			showIssues();
		}else{
			hideIssues();
		}
	});
	
}

var buildIssues = function(){
	var issuesElement = $('<issues/>',{html:'issues'});
	issuesElement.css('display','block');
	$('body').append(issuesElement);
	registerEvent();
}

var showIssues = function() {
	var issuesElement = $('issues');
	issuesElement.css('display','block');
}

var hideIssues = function() {
	var issuesElement = $('issues');
	issuesElement.hide();
}

exports.buildIssues = buildIssues;
exports.showIssues = showIssues;
exports.hideIssues = hideIssues;