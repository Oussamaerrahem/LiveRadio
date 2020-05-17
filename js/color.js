class Color{
    constructor(){
        this.color1=document.getElementById('color1');
        this.color1.addEventListener("click",()=>{
            this.setcolor("color1");
        });
        this.color2=document.getElementById('color2');
        this.color2.addEventListener("click",()=>{
            this.setcolor("color2");
        });
        this.color3=document.getElementById('color3');
        this.color3.addEventListener("click",()=>{
            this.setcolor("color3");
        });
        this.color4=document.getElementById('color4');
        this.color4.addEventListener("click",()=>{
            this.setcolor("color4");
        });
        if (localStorage.getItem("color")==null){
            document.body.style.background="rgb(26, 101, 212)";
        }
        this.setcolor(localStorage.getItem("color"));

    }
    setcolor (color){
        if(color=="color1"){
            document.body.style.background="rgb(220, 164, 147)";
        }else if(color=="color2"){
            document.body.style.background="rgb(233, 208, 200)";
        }else if (color=="color3") {
            document.body.style.background="rgb(26, 101, 212)";
                }
                else if (color=="color4"){
                    document.body.style.background="rgb(255, 0, 235)";
                }
                localStorage.setItem("color",color);

    }
}
onload=new Color();