class PlayList{
    constructor(){
    }
    setup(){
        this.head = document.querySelector("body > div");
        this.head.style.display='none'; //반대는 block
    }
    // top5_Display(){ //top5 다시 보이게
    //     this.head.style.display='block';
    // }
}
export default PlayList;