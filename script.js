const a = document.querySelectorAll(".sarki");
const solResim = document.querySelector(".nav-sarki-sol");
let currentAudio = null;
let currentImage = null;

let yaratResim = document.createElement("img");
let solYazi = document.createElement("h2");

const audio = new Audio();
a.forEach((item) => {
  item.addEventListener("click", function () {
    if (currentAudio && currentImage) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentImage.classList.remove("active");
    }

    console.log(item);
    let deger = item.getAttribute("data-key");
    audio.src = `sarkilar/${deger}.mp3`;

    audio.play();
    let resim = item.querySelector("img");
    resim.classList.toggle("active");

    solResim.appendChild(yaratResim);
    solResim.appendChild(solYazi);
    yaratResim.classList.add("don");

    yaratResim.src = resim.src;

    let itemData = item.getAttribute("data-name");
    solYazi.innerHTML = itemData;

    if (deger == 40) {
      resim.classList.remove("active");
    }

    currentAudio = audio;
    currentImage = resim;
  });
});

const solGit = document.querySelector(".sol-git");
const sagGit = document.querySelector(".sag-git");
const resimGit = document.querySelector(".resim-gec");
const textYazi = document.querySelector(".yazi-text");

const dizi = [
  {
    resim:
      "https://www.theaudiodb.com/images/media/album/thumb/hot-fuss-limited-edition-7-inch-box-set-4ddc38e3e1d71.jpg",
    text: "The Killers / Hot Fuss",
  },
  {
    resim: "https://i.scdn.co/image/ab67616d00001e02b4c5982e1b92f97a126fc18c",
    text: "Beyonce / Halo",
  },
  {
    resim: "https://i.scdn.co/image/ab67616d00001e0222463d6939fec9e17b2a6235",
    text: "Tears For Fears / Everybody Wants",
  },
  {
    resim: "https://i.scdn.co/image/ab67616d00001e02d4daf28d55fe4197ede848be",
    text: "Dua Lipa / Levitating",
  },
  {
    resim: "https://i.scdn.co/image/ab67616d00001e0289c39ba1acdf33ed7acd3867",
    text: "Labrinth / Formula",
  },
];

let index = 0;

sagGit.addEventListener("click", function () {
  index++;
  if (index < dizi.length) {
    resimGit.src = dizi[index].resim;
    textYazi.innerHTML = dizi[index].text;
  } else {
    index = 0;
    resimGit.src = dizi[index].resim;
    textYazi.innerHTML = dizi[index].text;
  }
});

solGit.addEventListener("click", function () {
  index--;
  if (index < 0) {
    index = dizi.length - 1;
    resimGit.src = dizi[index].resim;
    textYazi.innerHTML = dizi[index].text;
  } else {
    resimGit.src = dizi[index].resim;
    textYazi.innerHTML = dizi[index].text;
  }
});
