const songs = [

    {
        title: "Midnight Dreams",
        artist: "Luna Waves",
        src: "songs/song1.mp3"
    },

    {
        title: "Ocean Eyes",
        artist: "Nova Sky",
        src: "songs/song2.mp3"
    },

    {
        title: "Golden Morning",
        artist: "Dream Beats",
        src: "songs/song3.mp3"
    },

    {
        title: "Beautiful Life",
        artist: "Aria Music",
        src: "songs/song4.mp3"
    },

    {
        title: "Perfect Night",
        artist: "Star Beats",
        src: "songs/song5.mp3"
    },

    {
        title: "Summer Vibes",
        artist: "Sunny Music",
        src: "songs/song6.mp3"
    },

    {
        title: "Dream World",
        artist: "Dream Beats",
        src: "songs/song7.mp3"
    },

    {
        title: "Falling Stars",
        artist: "Nova Sky",
        src: "songs/song8.mp3"
    },

    {
        title: "Happy Days",
        artist: "Dream Beats",
        src: "songs/song9.mp3"
    },

    {
        title: "Lost in Music",
        artist: "Aria Music",
        src: "songs/song10.mp3"
    },

    {
        title: "Forever Young",
        artist: "Star Beats",
        src: "songs/song11.mp3"
    },

    {
        title: "Morning Light",
        artist: "Sunny Music",
        src: "songs/song12.mp3"
    },

    {
        title: "Blue Sky",
        artist: "Nova Sky",
        src: "songs/song13.mp3"
    },

    {
        title: "Sweet Memories",
        artist: "Luna Waves",
        src: "songs/song14.mp3"
    },

    {
        title: "City Lights",
        artist: "Dream Beats",
        src: "songs/song15.mp3"
    },

    {
        title: "Rainy Evening",
        artist: "Aria Music",
        src: "songs/song16.mp3"
    },

    {
        title: "New Beginning",
        artist: "Star Beats",
        src: "songs/song17.mp3"
    },

    {
        title: "Chasing Dreams",
        artist: "Sunny Music",
        src: "songs/song18.mp3"
    },

    {
        title: "Moonlight",
        artist: "Nova Sky",
        src: "songs/song19.mp3"
    },

    {
        title: "Good Vibes",
        artist: "Dream Beats",
        src: "songs/song20.mp3"
    },

    {
        title: "Never Give Up",
        artist: "Luna Waves",
        src: "songs/song21.mp3"
    },

    {
        title: "Heartbeat",
        artist: "Aria Music",
        src: "songs/song22.mp3"
    },

    {
        title: "Sunset Drive",
        artist: "Star Beats",
        src: "songs/song23.mp3"
    },

    {
        title: "Peaceful Mind",
        artist: "Sunny Music",
        src: "songs/song24.mp3"
    },

    {
        title: "Wild Dreams",
        artist: "Nova Sky",
        src: "songs/song25.mp3"
    },

    {
        title: "Beautiful World",
        artist: "Dream Beats",
        src: "songs/song26.mp3"
    },

    {
        title: "Stay With Me",
        artist: "Luna Waves",
        src: "songs/song27.mp3"
    },

    {
        title: "Dancing Alone",
        artist: "Aria Music",
        src: "songs/song28.mp3"
    },

    {
        title: "Little Things",
        artist: "Star Beats",
        src: "songs/song29.mp3"
    },

    {
        title: "Magic Moments",
        artist: "Sunny Music",
        src: "songs/song30.mp3"
    },

    {
        title: "Ocean Breeze",
        artist: "Nova Sky",
        src: "songs/song31.mp3"
    },

    {
        title: "Late Night",
        artist: "Dream Beats",
        src: "songs/song32.mp3"
    },

    {
        title: "Bright Future",
        artist: "Luna Waves",
        src: "songs/song33.mp3"
    },

    {
        title: "Sweet Melody",
        artist: "Aria Music",
        src: "songs/song34.mp3"
    },

    {
        title: "Dream Again",
        artist: "Star Beats",
        src: "songs/song35.mp3"
    },

    {
        title: "Golden Hour",
        artist: "Sunny Music",
        src: "songs/song36.mp3"
    },

    {
        title: "Blue Ocean",
        artist: "Nova Sky",
        src: "songs/song37.mp3"
    },

    {
        title: "Happy Heart",
        artist: "Dream Beats",
        src: "songs/song38.mp3"
    },

    {
        title: "Night Sky",
        artist: "Luna Waves",
        src: "songs/song39.mp3"
    },

    {
        title: "Feel Alive",
        artist: "Aria Music",
        src: "songs/song40.mp3"
    },

    {
        title: "New Day",
        artist: "Star Beats",
        src: "songs/song41.mp3"
    },

    {
        title: "Dream Catcher",
        artist: "Sunny Music",
        src: "songs/song42.mp3"
    },

    {
        title: "Wonderful Life",
        artist: "Nova Sky",
        src: "songs/song43.mp3"
    },

    {
        title: "Endless Dreams",
        artist: "Dream Beats",
        src: "songs/song44.mp3"
    },

    {
        title: "Summer Night",
        artist: "Luna Waves",
        src: "songs/song45.mp3"
    },

    {
        title: "Morning Coffee",
        artist: "Aria Music",
        src: "songs/song46.mp3"
    },

    {
        title: "Road Trip",
        artist: "Star Beats",
        src: "songs/song47.mp3"
    },

    {
        title: "Soft Rain",
        artist: "Sunny Music",
        src: "songs/song48.mp3"
    },

    {
        title: "Happy Place",
        artist: "Nova Sky",
        src: "songs/song49.mp3"
    },

    {
        title: "Last Dance",
        artist: "Dream Beats",
        src: "songs/song50.mp3"
    },

    {
        title: "Starlight",
        artist: "Luna Waves",
        src: "songs/song51.mp3"
    },

    {
        title: "Forever",
        artist: "Aria Music",
        src: "songs/song52.mp3"
    },

    {
        title: "Free Spirit",
        artist: "Star Beats",
        src: "songs/song53.mp3"
    },

    {
        title: "Good Morning",
        artist: "Sunny Music",
        src: "songs/song54.mp3"
    },

    {
        title: "Endless Dreams",
        artist: "Nova Sky",
        src: "songs/song55.mp3"
    }

];


let currentSong = 0;


const audio = document.getElementById("audio");

const musicList = document.getElementById("musicList");


/* CREATE 55 SONGS */

function displaySongs() {

    if (!musicList) {
        return;
    }


    musicList.innerHTML = "";


    songs.forEach((song, index) => {

        const item = document.createElement("div");

        item.className = "music-item";


        item.innerHTML = `

            <span class="number">
                ${index + 1}
            </span>

            <div class="song-cover">
                ♫
            </div>

            <div class="song-details">

                <h3>
                    ${song.title}
                </h3>

                <p>
                    ${song.artist}
                </p>

            </div>

            <button class="play-song"
                    onclick="selectSong(${index})">

                ▶

            </button>

        `;


        item.addEventListener("click", function(event) {

            if (!event.target.classList.contains("play-song")) {

                selectSong(index);

            }

        });


        musicList.appendChild(item);

    });

}


/* SELECT SONG */

function selectSong(index) {

    loadSong(index);

    audio.play();

}


/* LOAD SONG */

function loadSong(index) {

    currentSong = index;

    audio.src = songs[index].src;

    document.getElementById("currentTitle").textContent =
        songs[index].title;

    document.getElementById("currentArtist").textContent =
        songs[index].artist;

}


/* PLAY / PAUSE */

function playPause() {

    if (audio.paused) {

        audio.play();

    } else {

        audio.pause();

    }

}


/* NEXT */

function nextSong() {

    currentSong++;

    if (currentSong >= songs.length) {

        currentSong = 0;

    }

    loadSong(currentSong);

    audio.play();

}


/* PREVIOUS */

function previousSong() {

    currentSong--;

    if (currentSong < 0) {

        currentSong = songs.length - 1;

    }

    loadSong(currentSong);

    audio.play();

}


/* PROGRESS */

audio.addEventListener("timeupdate", function() {

    const progress =
        document.getElementById("progress");


    if (audio.duration) {

        progress.value =
            (audio.currentTime /
            audio.duration) * 100;

    }


    document.getElementById("currentTime")
        .textContent =
        formatTime(audio.currentTime);

});


/* DURATION */

audio.addEventListener("loadedmetadata", function() {

    document.getElementById("duration")
        .textContent =
        formatTime(audio.duration);

});


/* SEEK */

const progress =
    document.getElementById("progress");


if (progress) {

    progress.addEventListener("input", function() {

        if (audio.duration) {

            audio.currentTime =
                (this.value / 100) *
                audio.duration;

        }

    });

}


/* VOLUME */

const volume =
    document.getElementById("volume");


if (volume) {

    volume.addEventListener("input", function() {

        audio.volume = this.value;

    });

}


/* AUTO NEXT */

audio.addEventListener("ended", function() {

    nextSong();

});


/* FORMAT TIME */

function formatTime(time) {

    if (isNaN(time)) {

        return "0:00";

    }


    const minutes =
        Math.floor(time / 60);


    const seconds =
        Math.floor(time % 60);


    return minutes + ":" +
        (seconds < 10 ? "0" : "") +
        seconds;

}


/* START */

if (musicList) {

    displaySongs();

    loadSong(0);

}