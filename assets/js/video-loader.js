
function setVideobyId() {
	var videoId = document.URL.split('?id=')[1];
	var videoID = "null";
	var title = "Unknown Video";
	var shortTitle = "Unknown Video";
	var description = "The video specified doesn't exist.";
	var github = "index.html";

	if (videoId == "voxelgame")
	{
		videoID = "5kAuZufe-_4";
		shortTitle = "VoxelGame";
		title = "VoxelGame (C#/Custom Engine)";
		description = "VoxelGame is a game written entirely in C# using the MonoGame framework. Models are generated through code, has a custom physics engine and is still in active development. It is a sandbox voxel game, where the player can place and break blocks in order to transform the terrain as they see fit.";
		github = "https://github.com/bryanspiteri/voxelgame-opensource";
	}
	else if (videoId == "dvdscreensaver")
	{
		videoID = "azxxD-lFBA8";
		shortTitle = "DVD Screensaver";
		title = "DVD Screensaver (Java)";
		description = "A simple DVD screensaver, in which a DVD logo bounces around the window, changes color every bounce and has a configurable speed.";
		github = "https://github.com/bryanspiteri/dvd-screensaver";
	}
	else if (videoId == "undertalejava")
	{
		videoID = "m7EQb_8dmVI";
		shortTitle = "UNDERTALE (Text)";
		title = "UNDERTALE (Text Based, Java)";
		description = "An unfinished port of UNDERTALE in Java, where the graphics are all text-based, and doesn't use any game engine. This supports realtime input, animations, and audio playback, and surprisingly detailed graphics.";
		github = "https://github.com/bryanspiteri/undertaletext";
	}
	else if (videoId == "musicplayerpro")
	{
		videoID = "-PXM1H4f4Tc";
		shortTitle = "Music Player Pro";
		title = "Music Player Pro (C#/WinForms)";
		description = "A simple music player, with basic shuffling, looping and music player controls.";
		github = "https://github.com/bryanspiteri/musicplayerpro";
	}
	
	//Apply the video data to the web page
	document.getElementById('youtubeEmbed').src = "https://www.youtube-nocookie.com/embed/" + videoID;
	document.getElementsByClassName('videoTitle')[0].innerHTML = title;
	document.getElementsByClassName('videoDescription')[0].innerHTML = description;
	document.title = shortTitle + " | Bryan's Portfolio";
	document.getElementsByClassName('videoOtherUrl')[0].href = github;
}

window.onload = setVideobyId;