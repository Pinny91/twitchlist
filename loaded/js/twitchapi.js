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
var accTokenArr = accToken.split("&");
accToken = accTokenArr[0];
var accTokenArr = accToken.split("=");
accToken = accTokenArr[1];



dataURL = 'https://api.twitch.tv/kraken/users/shulyx' + '?oauth_token=' + accToken + '&callback=?';
console.log(dataURL);


$.getJSON(dataURL, function(data) {
  console.log(data);

});
