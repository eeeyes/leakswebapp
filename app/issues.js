function registerEvent(){
	$('body').on('nav',function(event,name){
		if(name === 'issues'){
			showIssues();
		}else{
			hideIssues();
		}
	});
	
}



var buildIssueList = function(){
	var issueListElement = $('<issue_list/>');
	issueListElement.css('display','block');
	issueListElement.css('background','green');
	issueListElement.css('position','absolute');
	
	for(var i = 0 ; i < 1000 ; i++){
		var issueItem = $('<p/>',{html:'issue item '+i});
		issueListElement.append(issueItem);
	}
	
	
	
	issueListElement.css('top',0);
	$('issues issues_left_panel').append(issueListElement);
}

var buildIssues = function(){
	var issuesElement = $('<issues/>',{html:'<p>issues</p>'});
	issuesElement.css('display','block');
	issuesElement.css('background','red');
	issuesElement.css('position','absolute');
	
	var leftPanelElement = $('<issues_left_panel/>');
	leftPanelElement.css('display','block');
	leftPanelElement.css('background','yellow');
	leftPanelElement.css('position','absolute');
	leftPanelElement.css('width','30%');
	leftPanelElement.css('height','100%');
	leftPanelElement.css('top',0);
	leftPanelElement.css('overflow-y','scroll');
	issuesElement.append(leftPanelElement);
	
	
	$('body').append(issuesElement);
	
	buildIssueList();
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