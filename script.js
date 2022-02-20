const timer = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");

function Timer(time){
    this.time = time;

    timer.innerHTML = this.time;

    let render = ()=>{

        if(this.time < 0){

            this.stop();
            this.time = time;
        }

        // console.log(this.time);

        if(this.start){
            
            timer.innerHTML = this.time--;

        }else{

            timer.innerHTML = this.time;
        }
        
        if(this.time %2 === 1){

            timer.style.background = '#fff';
            timer.style.color = "#000"
          
        }else{

            timer.style.background = '#3D3D3D';
            timer.style.color = "#fff"
        }
    }

   
    this.start = ()=>{
        render();
        this.timer = setInterval(render, 1000);
    }

    this.stop = ()=>{
    
        clearInterval(this.timer)
    }
 
}

const clock = new Timer(60);

startBtn.addEventListener('click', ()=>{
    clock.start();
})

stopBtn.addEventListener('click', ()=>{
    clock.stop();
})