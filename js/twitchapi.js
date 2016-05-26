var id ='g1kobimxlknrwgoouk8h1mz4ribnip';
var homeLink = 'http://pinny91.github.io/twitchlist/loaded';

var authenURL = 'https://api.twitch.tv/kraken/oauth2/authorize?' +
				'response_type=token&client_id=' + id +
				'&redirect_uri=' + homeLink +
				'&scope=' + 'user_read';
var accToken = 'Nope';				
if(accToken === 'Nope'){
	window.open(authenURL,'_this');
	accToken = document.location.hash;
}

dataURL = 'https://api.twitch.tv/kraken/users/shulyx' + '?oauth_token=' + accToken + '&callback=?';


$.getJSON(dataURL, function(data) {
  console.log(data);

});
