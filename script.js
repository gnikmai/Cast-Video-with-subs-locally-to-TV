function loadVideo() {
  const video = document.getElementById("videoPlayer");
  const videoFile = document.getElementById("videoInput").files[0];
  const subtitlesFile = document.getElementById("subtitleInput").files[0];

  
  if (videoFile) {
    const videoURL = URL.createObjectURL(videoFile);
    video.src = videoURL;
  }

  if (subtitlesFile) {
    const subtitlesURL = URL.createObjectURL(subtitlesFile);
    video.textTracks[0].mode = "showing";
    video.textTracks[0].src = subtitlesURL;
    video.textTracks[0].load(); // call the load method to load the subtitles file
  }
}

// Add event listeners to the file input fields
document.getElementById("videoInput").addEventListener("change", loadVideo);
document.getElementById("subtitleInput").addEventListener("change", loadVideo);

function toggleSidebar() {
  var sidebar = document.querySelector('.sidebar');
  var separator = document.querySelector('.separator');
  var main = document.querySelector('.main');
  var buttonIcon = document.querySelector('.toggle-button-symbol');

  if (sidebar.style.display === 'none') {
    // Show sidebar
    sidebar.style.display = 'block';
    separator.style.display = 'flex';
    main.style.width = '70%';
    buttonIcon.style.transform = 'rotate(-45deg)';
  } else {
    // Hide sidebar
    sidebar.style.display = 'none';
    separator.style.display = 'none';
    main.style.width = '100%';
    buttonIcon.style.transform = 'rotate(45deg)';
  }
}


