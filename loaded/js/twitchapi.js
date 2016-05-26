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
dataURL = 'https://api.twitch.tv/kraken/users/shulyx/follows/channels' + '?oauth_token=' + accToken + '&callback=?';
console.log(dataURL);


$.getJSON(dataURL, function(followersListData) {
	console.log(followersListData);
	var channelBasicURL = 'https://api.twitch.tv/kraken/streams/';
	var channelName = "Nope";
	for(i=0; i<followersListData.follows.length; i++) {
		channelName = followersListData.follows[i].channel.name;
		channelURL = channelBasicURL + channelName;
		$.getJSON(channelURL, function(channelData) {
			if(channelData.stream === null) $('#list-streamers ul').append('<li>'+ channelName +'		Offline'+   +'</li>');	
			else {
				$('#list-streamers ul').append('<li>'+ channelName +'		'+ channelData.stream.game +'</li>');
			}
		});
		
	}
  
  
  
  
  
  
  
  
});
