const songListing = async () => {
    try {
        const response = await fetch('http://192.168.1.92:5500/songs/Prajina');
        
        if (!response.ok) {
            console.log(`HTTP error! status: ${response.status}`);
            return;
        }

        // Parse response as text since it's not JSON (assuming it's HTML)
        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "text/html");
        
        // Extract all MP3 file links from the HTML
        const songList = doc.querySelectorAll("a[href$='.mp3']");
        const songListContainer = document.getElementById("songList");

        // Render the song list in the DOM
        songListContainer.innerHTML = Array.from(songList)
            .map(song => {
                // Extract only valid parts of the song names using regex
                const cleanSongName = song.textContent.match(/[\w-]+\.mp3/)?.[0] || 'Unknown';
                return `<li><a href="${song.href}">${cleanSongName}</a></li>`;
            }).join("");

        // Log the response and parsed songs
        console.log(songList);

    } catch (e) {
        console.log(e);
    }
};

songListing();
