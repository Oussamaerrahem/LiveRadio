class Player{
    constructor(){
        var heightMain=document.getElementById('player');
        heightMain.style.height=screen.height + "px";
        if (screen.width==620){
            heightMain.style.width= screen.width+ "px";
        }
        var heightDiv=document.getElementById('content');
        heightDiv.style.height=screen.height-300 + "px";


    }
}
onload= new Player();

class Playaudio {
    constructor(){
        this.audio=document.getElementById("audio");
        this.title=document.getElementById("title");
        this.playnpause=document.getElementById("playnpause");
        this.isplayed;
        this.playnpause.addEventListener("click",()=>{
            this.playpause();

           
        });
       
        this.radionames=[];
        this.radionames[0]="Azzaytouna";
        this.radionames[1]="Express Fm";
        this.radionames[2]="Mosaique Fm";

        this.radiosrc=[];
        this.radiosrc[0]="https://stream6.tanitweb.com/zitounafm";
        this.radiosrc[1]="http://expressfm.ice.infomaniak.ch/expressfm-64.mp3?ver=425449";
        this.radiosrc[2]="https://radio.mosaiquefm.net/mosalive";
        this.server=0;
        this.setsource();
        document.getElementById("next").addEventListener("click",()=>{
            if(this.server<this.radiosrc.length-1){
            ++this.server;
            this.isplayed=false;
                    } else {
                        this.server=0;
                    }
                    localStorage.setItem('save',this.server);
            this.setsource();

        });
        document.getElementById("back").addEventListener("click",()=>{
            if(this.server>0){
                --this.server;
                this.isplayed=false;
            }else {
                this.server=this.radiosrc.length-1;
            }
            localStorage.setItem('save',this.server);
            this.setsource();

        });
    }
    setsource(){
        if(localStorage.getItem("save")!=null){
            this.server=localStorage.getItem("save");
        }
        this.audio.src=this.radiosrc[this.server];
        this.title.innerHTML=this.radionames[this.server];
        this.playpause();
    }
    playpause(){
        if(this.isplayed==false){
            this.playnpause.src="./img/pause.png";
            this.audio.play();
            this.isplayed=true;

        }
        else{
            this.playnpause.src="./img/play.png"
            this.audio.pause();
            this.isplayed=false
        }
    }
    
}
onload=new Playaudio();