const ap = new APlayer({
    container: document.getElementById("aplayer"),
    fixed: true,
    autoplay: true,
    theme: "#000",
    mutex: true,
    lrcType: 0,
    audio: [
      {
        name: "达尔文",
        artist: "林俊杰",
        url: "http://music.163.com/song/media/outer/url?id=2019573476.mp3",
        cover:
          "http://p1.music.126.net/4x-65bnidSKyEMDBmGtn8g==/109951168466764238.jpg?param=130y130",
        lrc: "",
      },
    ],
  });