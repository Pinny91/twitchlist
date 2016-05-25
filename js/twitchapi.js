var id ='g1kobimxlknrwgoouk8h1mz4ribnip';
var homeLink = 'http://pinny91.github.io/twitchlist';

var authenURL = 'https://api.twitch.tv/kraken/oauth2/authorize?' +
				'response_type=token&client_id=' + id +
				'&redirect_uri=' + homeLink +
				'&scope=' + 'user_read';
window.open(authenURL,'_self');

$.getJSON('https://api.twitch.tv/kraken/users/shulyx?callback=?', function(data) {
  console.log(data);

});
