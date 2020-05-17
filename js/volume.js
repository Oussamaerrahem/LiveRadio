class Volume {
    constructor(){
        this.audio=document.getElementById('audio');
        this.audio.volume=50/100;

        this.sound=document.getElementById("sound");
        this.sound.addEventListener('change',()=>{
            this.audio.volume=this.sound.value/100;
        });

        this.speed=document.getElementById('speed');
        this.speed.playbackRate=1 ;
        this.speed.addEventListener("change",()=>{
            this.audio.playbackRate=this.speed.value/100;

        });
    }
}
onload= new Volume();