// Toggle Bar
document.querySelector(".hamburger").addEventListener("click", () => {
  const leftElement = document.querySelector(".left");
  leftElement.style.transform = "translateX(0)"; // Show the sidebar

  // Show the close button and hide the hamburger
  document.querySelector(".close").style.display = "block";
  document.querySelector(".hamburger").style.display = "none";
});

document.querySelector(".close").addEventListener("click", () => {
  const leftElement = document.querySelector(".left");
  leftElement.style.transform = "translateX(-100vw)"; // Hide the sidebar
  // Show the hamburger and hide the close button
  document.querySelector(".hamburger").style.display = "block";
  document.querySelector(".close").style.display = "none";
});

// Listing songs

var songs = [];
async function songList() {
  try {
    // Fetch the data
    let response = await fetch("http://192.168.1.92:5500/songs/");
    let data = await response.text(); // Must write await
    //   console.log(data);

    let div = document.createElement("div");
    div.innerHTML = data;

    let a = div.getElementsByTagName("a");

    for (let i = 0; i < a.length; i++) {
      const elements = a[i];

      if (elements.href.endsWith(".mp3")) {
        songs.push(elements.href);
      }
    }

    // Display songs in the list
    const songListElement = document.getElementById("songList");

    // Always use forEach in order to display the songs
    songs.forEach((song, index) => {
      // Create a new list item for each song
      let li = document.createElement("li");
      //   li.textContent = `${index + 1}. ${song.split('%20')}`; // Display just the filename
      li.textContent = `${index + 1}. ${song
        .split("/")
        .pop()
        .replace(/%/g, " ")
        .replace(/20/g, "")}`; // Display just the filename

      songListElement.appendChild(li); // Append the song to the list
    });
  } catch (e) {
    console.log(e);
  }

  let currfolder = [];

  async function folderDisplay() {
    try {
      let folderAlbum = await fetch("http://192.168.1.92:5500/songs");
      // let folderAlbum=await fetch(`${currfolder}[0]`)
      let data = await folderAlbum.text();
      console.log(data);

      let div = document.createElement("div");
      div.innerHTML = data;
      let folderList = div.getElementsByTagName("a");
      console.log(folderList);

      for (let i = 0; i < folderList.length; i++) {
        const element = folderList[i];

        if (element.href.endsWith(element.href.match(/[A-Za-z]+$/))) {
          currfolder.push(element.href);
        }
      }
      console.log(currfolder);

      // Fetching songs from each folder

      for (let i = 0; i < currfolder.length; i++) {
        await fetchSongsFromFolder(currfolder[i]);
      }

    } catch (e) {
      console.log(e);
    }
  }
  
  async function fetchSongsFromFolder(folderUrl) {
    try {
      let folderContent = await fetch(folderUrl);
      let folderData = await folderContent.text();
  
      let folderDiv = document.createElement("div");
      folderDiv.innerHTML = folderData;
  
      let songList = folderDiv.getElementsByTagName("a");
  
      for (let i = 0; i < songList.length; i++) {
        const song = songList[i];
        // Assuming songs are files and not folders
        if (song.href.endsWith(".mp3") || song.href.endsWith(".wav")) {
          console.log(song.href); // This will print each song's link
        }
      }
    } catch (error) {
      console.error(`Error fetching songs from ${folderUrl}: `, error);
    }
  }
  folderDisplay();
}
songList();
