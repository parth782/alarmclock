
$('#success').hide();
$('#danger').hide();
var audio=new Audio("http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3");
let success=document.getElementById("success");
let danger=document.getElementById("danger");

const btnala=document.getElementById("setbtn");
btnala.addEventListener("click",setalarm);
function ringbell(){
    audio.play();
}
function setalarm(e){
    e.preventDefault();
    
    
   
    const alarm=document.getElementById("alarm");
    const alarmdate=new Date(alarm.value);
   // console.log(`setting alarm for ${alarmdate}`);
    

    if(alarmdate=="Invalid Date"){
        danger.classList.add('show');
        $('#danger').show();
        setTimeout(()=>{
           $('#danger').hide();
        },1500)
    }
    else{
        success.classList.add('show');
        $('#success').show();
        setTimeout(()=>{
           $('#success').hide();
        },1500)
    }
    const now=new Date();
    let timetoalarm=alarmdate-now;
  //  console.log(timetoalarm);
    
    if(timetoalarm>=0){
        setTimeout(()=>{
           
            ringbell();
            
        },timetoalarm)
    }
}
let off=document.getElementById("setoff");
off.addEventListener("click",()=>{
    audio.stop()
})
