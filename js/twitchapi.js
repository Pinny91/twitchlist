var id ='g1kobimxlknrwgoouk8h1mz4ribnip';
var secret = 'ys7zivtq1c2zwkbkkxcpaadjfpdor9';
var homeLink = 'http://pinny91.github.io/twitchlist/loaded';

var authenURL = 'https://api.twitch.tv/kraken/oauth2/authorize?' +
				'response_type=token&client_id=' + id +
				'&redirect_uri=' + homeLink +
				'&scope=' + 'user_read';
var accToken = 'Nope';		
var key= 'Nope';
		
//Creating URL to get the follorwersList
dataURL = 'https://api.twitch.tv/kraken/users/shulyx/follows/channels' + '?limit=100&callback=?';
console.log(dataURL);
$.ajax({
 type: 'GET',
 url: 'https://api.twitch.tv/kraken/channels/itmejp',
 headers: {
   'Client-ID': 'g1kobimxlknrwgoouk8h1mz4ribnip'
 },
 success: function(data) {
   console.log(data);
 }
});

$(document).ready(function() {
	//window.location.replace(authenURL);
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































