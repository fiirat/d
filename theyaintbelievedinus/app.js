const albums = [
    {
      title: "Playboi Carti",
      year: "2017",
      cover: "https://i.scdn.co/image/ab67616d0000b273e31a279d267f3b3d8912e6f1",
      tracks: ["Lookin", "Flex", "Kelly K", "Magnolia", "Had 2", "New Choppa", "Lame Niggaz", "Half & Half", "Let It Go", "Yah Mean", "wokeuplikethis*", "Other Shit", "dothatshit!", "No. 9", "Location"]
    },
    {
      title: "Die Lit",
      year: "2018",
      cover: "https://images.genius.com/a6edc3b66b348994bc5217b05909951d.1000x1000x1.png",
      tracks: ["Choppa Won't Miss", "Mileage", "No Time", "Middle Of The Summer", "Foreign", "Home (KOD)", "R.I.P.", "Love Hurts", "Lean 4 Real", "Fell In Luv", "FlatBed Freestyle", "Pull Up", "Top", "Right Now", "Shoota", "R.I.P. Fredo (Notice Me)", "Long Time (Intro)", "Poke It Out", "Old Money"]
    },
    {
      title: "Whole Lotta Red",
      year: "2020",
      cover: "https://i.scdn.co/image/ab67616d0000b27398ea0e689c91f8fea726d9bb",
      tracks: ["Go2DaMoon", "Punk Monk", "Stop Breathing", "On That Time", "F33l Lik3 Dyin", "ILoveUIHateU", "No Sl33p", "Place", "Teen X", "Sky", "Vamp Anthem", "Beno!", "Over", "New Tank", "King Vamp", "Slay3r", "M3tamorphosis", "Not PLaying", "JumpOutTheHouse", "Control", "Die4Guy", "Meh", "New N3on", "Rockstar Made"]
    }
];

const albumCover = document.querySelector(".cover");
const albumTitle = document.querySelector(".title");
const albumYear  = document.querySelector(".year");
const albumBtn   = document.querySelector(".btnChange");

let currentAlbumIndex = 0;

const trackList = document.querySelector(".tracks");

function displayAlbum(n){
    const album = albums[n];
    albumCover.src = album.cover;
    albumTitle.textContent = album.title;
    albumYear.textContent = "•" + album.year
    trackList.innerHTML = ""; 


    album.tracks.forEach((track) => {
        const li = document.createElement("li");
        li.textContent = track;
        trackList.appendChild(li);
    })
}



displayAlbum(currentAlbumIndex);

albumBtn.addEventListener("click", () => {
    currentAlbumIndex = (currentAlbumIndex +1) % albums.length;
    displayAlbum(currentAlbumIndex);
})