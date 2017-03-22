var id ='g1kobimxlknrwgoouk8h1mz4ribnip';
var homeLink = 'http://pinny91.github.io/twitchlist/loaded';

var authenURL = 'https://api.twitch.tv/kraken/oauth2/authorize?' +
				'response_type=token&client_id=' + id +
				'&redirect_uri=' + homeLink +
				'&scope=' + 'user_read';
var accToken = 'Nope';		
		
if(accToken === 'Nope'){
	accToken = document.location.hash;
}
//Filtering Token
var accTokenArr = accToken.split("&");
accToken = accTokenArr[0];
var accTokenArr = accToken.split("=");
accToken = accTokenArr[1];

//Creating URL to get the follorwersList
dataURL = 'https://api.twitch.tv/kraken/users/shulyx/follows/channels' + '?oauth_token=' + accToken + '&limit=100&callback=?';
console.log(dataURL);


$.getJSON(dataURL, function(followersListData) {
	console.log(followersListData);
	var channelBasicURL = 'https://api.twitch.tv/kraken/streams/';
	var channelName = "Nope";
	var teller = 0;
	for(i=0; i<followersListData.follows.length; i++) {
		channelName = followersListData.follows[i].channel.name;
		channelURL = channelBasicURL + channelName + '?client-ID=' + id;		
		
		$.ajax({
			type: 'GET',
			url: 'https://api.twitch.tv/kraken/channels/itmejp',
			headers: {
				'Client-ID': 'g1kobimxlknrwgoouk8h1mz4ribnip'
			},
			success: function(streamData) {
			teller++;
			if(streamData.stream === null) {
				var randomArr = streamData._links.self.split('/');
				var channelname = randomArr[randomArr.length-1];
				var logoURL = 'img/off.png';
				var game = 'offline';
				var channelURL = 'https://www.twitch.tv/' + channelname
				$('#list-streamers ul').append(
					'<a target="_blank" href="' + channelURL + '">' +
					'<li id="num' + teller +'"class="btn btn-default">'+ 
					'<div class="logo-block"><img class="logo img-rounded" src="' + logoURL + '"></div>' +					
					'<div class="name-block"><p>'+ channelname + '</p></div>' +
					'<div class="game-block"><p>' + game + '</p></div>' +
					'</li></a>'
				);	
				var listId = '#num' + teller;
				$(listId).addClass('offline');
			}
			else {
				var logoURL = streamData.logo;
				var channelname = streamData.name;
				var game = streamData.game;
				var channelURL = streamData.url;
				$('#list-streamers ul').append(
					'<a target="_blank" href="' + channelURL + '">' +
					'<li id="num' + teller +'"class="btn btn-default">'+ 
					'<div class="logo-block"><img class="logo img-rounded" src="' + logoURL + '"></div>' +					
					'<div class="name-block">'+ channelname + '</div>' +
					'<div class="game-block">' + game + '</div>' +
					'</li></a>'
				);
				var listId = '#num' + teller;
				$(listId).addClass('online');
			
			}			}
		});		
	}
  
});



$(document).ready(function() {
	onlyOn = $('#swOn');
	onlyOff = $('#swOff');
	allVis = $('#swAll');
	
	onlyOn.on('click', function(){
		$('#list-streamers ul a .offline').addClass('disable');
		$('#list-streamers ul a .online').removeClass('disable');
		onlyOn.addClass('active');
		onlyOff.removeClass('active');
		allVis.removeClass('active');
		
	});
	onlyOff.on('click', function(){
		$('#list-streamers ul a .offline').removeClass('disable');
		$('#list-streamers ul a .online').addClass('disable');
		onlyOn.removeClass('active');
		onlyOff.addClass('active');
		allVis.removeClass('active');		
	});
	allVis.on('click', function(){
		$('#list-streamers ul a .offline').removeClass('disable');
		$('#list-streamers ul a .online').removeClass('disable');
		onlyOn.removeClass('active');
		onlyOff.removeClass('active');
		allVis.addClass('active');	
	});	
});































