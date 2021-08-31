let data=[
    {
        "title": "19th Floor",
        "artists": ["Bobby Richards"],
        "cover": "/public/images/cover/19th_floor.png",
        "source": "/public/musics/19th Floor - Bobby Richards.mp3",
        "vote": 3534
    },
    {
        "title": "Sunny Travel",
        "artists": ["Nico Staf"],
        "cover": "/public/images/cover/sunny_travel.png",
        "source": "/public/musics/Sunny Travel - Nico Staf.mp3",
        "vote": 123987
    },
    {
        "title": "Where We Wanna Go",
        "artists": ["Patrick Patrikios"],
        "cover": "/public/images/cover/where_we_wanna_go.png",
        "source": "/public/musics/Where We Wanna Go - Patrick Patrikios.mp3",
        "vote": 479805
    },
    {
        "title": "All the Fixings",
        "artists": ["Zachariah Hickman"],
        "cover": "/public/images/cover/all_the_fixings.png",
        "source": "/public/musics/All the Fixings - Zachariah Hickman.mp3",
        "vote": 3452
    },
    {
        "title": "Bourree",
        "artists": ["Joel Cummins"],
        "cover": "/public/images/cover/bourree.png",
        "source": "/public/musics/Bourree - Joel Cummins.mp3",
        "vote": 39457
    }
]
class Top5{
    constructor(){
        this.body = document.querySelector("body");
        this.main = document.createElement("div");
        this.head = document.createElement("div");
        this.list = document.createElement("div");
        this.navigation = document.createElement("div");
        this.flag=1;
    }
    setup(){
        this.head.classList.add("head");
        this.list.classList.add("list");
        this.navigation.classList.add("navigation");

        this.body.appendChild(this.main);
        this.main.appendChild(this.head);
        this.main.appendChild(this.list);
        this.main.appendChild(this.navigation);
    }
    setNavigation(){
        this.music = document.createElement("img");
        this.layer = document.createElement("img");
        this.search = document.createElement("img");
        this.music.src="../../assets/icons/music_on.png";
        this.layer.src="../../assets/icons/layers.png";
        this.search.src="../../assets/icons/search.png"

        this.navigation.appendChild(this.music);
        this.navigation.appendChild(this.layer);
        this.navigation.appendChild(this.search);
    }
    setList(){
        data.forEach(item=>this.setItem(item));
    }
    setItem(item){
        const div = document.createElement("div");
        const num = document.createElement("span");
        const img = document.createElement("img");
        const musicInfo = document.createElement("div");
        const title = document.createElement("span");
        const br = document.createElement("br");
        const artists = document.createElement("span");
        const playButton = document.createElement("img");
        const addPlayList = document.createElement("img");

        num.innerText=this.flag;
        if(this.flag<4){
            num.classList.add("rank");
        }else num.classList.add("rank_not");
        this.flag++;
        img.src=item.cover;
        img.classList.add("albumPoster");
        title.innerText=item.title;
        title.classList.add("title");
        artists.innerText=item.artists;
        artists.classList.add("artists");
        playButton.src="../../assets/icons/play.png";
        addPlayList.src="../../assets/icons/plus.png";
        playButton.classList.add("playButton");
        addPlayList.classList.add("addPlayList");
        div.appendChild(num);
        div.appendChild(img);
        musicInfo.appendChild(title);
        musicInfo.appendChild(br);
        musicInfo.appendChild(artists);
        musicInfo.style.display="inline-block";
        div.appendChild(musicInfo);
        div.appendChild(playButton);
        div.appendChild(addPlayList);

        this.list.appendChild(div);
    }
}
export default Top5;