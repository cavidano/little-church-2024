export default class AudioPlayer {

    // Public method to initialize multiple players
    init() {
        // Select all the .audio-player elements on the page
        const playerElements = document.querySelectorAll('.audio-player');

        // Loop through each player and initialize controls
        playerElements.forEach((playerElement) => {
            const audio = playerElement.querySelector('#audio');
            const playPauseButton = playerElement.querySelector('#play-pause-button');
            const progressBar = playerElement.querySelector('#progress-bar');
            const progress = playerElement.querySelector('.audio-player__progress__fill');
            const progressThumb = playerElement.querySelector('.audio-player__thumb');
            const volumeSlider = playerElement.querySelector('.audio-player__volume');
            const muteButton = playerElement.querySelector('#mute-button');
            const volumeLevel = playerElement.querySelector('.audio-player__volume__fill');
            const volumeThumb = playerElement.querySelector('.audio-player__thumb');
            const timestamp = playerElement.querySelector('.audio-player__timestamp');

            let isPlaying = false;
            let volumeBeforeMute = null;

            // Toggle play/pause
            const togglePlayPause = () => {
                if (isPlaying) {
                    audio.pause();
                } else {
                    audio.play();
                }
                isPlaying = !isPlaying;
                toggleClasses(playPauseButton.querySelector('span.icon'), 'icon-play', 'icon-pause');
            };

            // Toggle mute
            const toggleMute = () => {
                if (audio.volume === 0) {
                    audio.volume = volumeBeforeMute || 1;
                } else {
                    volumeBeforeMute = audio.volume;
                    audio.volume = 0;
                }
                setVolumeLevel();
            };

            // Update progress bar as audio plays
            const updateProgress = () => {
                const progressPercentage = (audio.currentTime / audio.duration) * 100;
                progress.style.width = `${progressPercentage}%`;

                const currentMinutes = Math.floor(audio.currentTime / 60);
                const currentSeconds = Math.floor(audio.currentTime - currentMinutes * 60);
                const remainingTime = audio.duration - audio.currentTime;
                const remainingMinutes = Math.floor(remainingTime / 60);
                const remainingSeconds = Math.floor(remainingTime - remainingMinutes * 60);

                timestamp.innerText = `${remainingMinutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
                progressThumb.style.left = `${progressPercentage}%`;
            };

            // Set audio time on progress bar click
            const setTime = (e) => {
                const clickPositionInBar = e.clientX - progressBar.getBoundingClientRect().left;
                const progressPercentage = (clickPositionInBar / progressBar.offsetWidth) * 100;
                audio.currentTime = (progressPercentage / 100) * audio.duration;
            };

            // Set volume on volume slider click
            const setVolume = (e) => {
                const clickPositionInBar = e.clientX - volumeSlider.getBoundingClientRect().left;
                const volumePercentage = (clickPositionInBar / volumeSlider.offsetWidth) * 100;
                audio.volume = Math.min(1, volumePercentage / 100);
                setVolumeLevel();
            };

            // Set volume level display
            const setVolumeLevel = () => {
                const volumePercentage = audio.volume * 100;
                volumeLevel.style.width = `${volumePercentage}%`;
                volumeThumb.style.left = `${volumePercentage}%`;

                const isMuted = audio.volume < 0.1;
                const volumeIcon = muteButton.querySelector('span.icon');

                if (isMuted) {
                    volumeIcon.classList.remove('icon-volume');
                    volumeIcon.classList.add('icon-volume-mute');
                } else {
                    volumeIcon.classList.remove('icon-volume-mute');
                    volumeIcon.classList.add('icon-volume');
                }
            };

            // Toggle between two classes
            const toggleClasses = (element, class1, class2) => {
                if (element.classList.contains(class1)) {
                    element.classList.remove(class1);
                    element.classList.add(class2);
                } else {
                    element.classList.remove(class2);
                    element.classList.add(class1);
                }
            };

            // Event listeners
            playPauseButton.addEventListener('click', togglePlayPause);
            muteButton.addEventListener('click', toggleMute);
            audio.addEventListener('timeupdate', updateProgress);
            progressBar.addEventListener('click', setTime);
            volumeSlider.addEventListener('click', setVolume);

            // Initialize volume and progress
            setVolumeLevel();
        });
    }
}
