const ap = new APlayer({
    container: document.getElementById("aplayer"),
    fixed: true,
    autoplay: true,
    theme: "#000",
    mutex: true,
    lrcType: 1,
    audio: [
      {
        name: "达尔文",
        artist: "林俊杰",
        url: "http://music.163.com/song/media/outer/url?id=2019573476.mp3",
        cover:
          "http://p1.music.126.net/4x-65bnidSKyEMDBmGtn8g==/109951168466764238.jpg?param=130y130",
        lrc: "[00:00.000] 作词 : 林可邦\n[00:01.000] 作曲 : 蔡健雅",
      },
    ],
  });