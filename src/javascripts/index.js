import Top5 from "./utils/top5.js";
import PlayList from "./utils/playList.js";
import Search from "./utils/search.js";

const top5 = new Top5();
const playList = new PlayList();
const serach = new Search();

const body = document.querySelector("body");
const main = body.querySelector(".main");

body.addEventListener("click", () => {
    main.classList.remove("logo");
    top5.setup();
});
top5.setList();
top5.setNavigation();
top5.layer.addEventListener("click",()=>{
    playList.setup();
})

