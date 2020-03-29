var playing;
var score;
var time;
var correct;
document.getElementById("startreset").onclick=function(){
    if(playing==true){
        location.reload();
    }else{
        playing=true;
        score=0;
        document.getElementById("scorevalue").innerHTML=score;
        document.getElementById("startreset").innerHTML="Reset Game";
        document.getElementById("timeremaining").style.display="block";
        time=60;
        startcountdown();
        questionQA();
        correctanswer();
        


    }
}



function startcountdown(){
  action=setInterval(function(){
      time-=1;
      document.getElementById("time").innerHTML=time;
      if (time == 0) {
          clearInterval(action);
      }
  },1000)
  
}

function questionQA(){
    var x=1+Math.round(Math.random()*9);
    var y = 1 + Math.round(Math.random() * 9);
     correct = x * y;
    document.getElementById("question").innerHTML= x + " x " + y;
    var z = 1 + Math.round(Math.random() * 3);
    document.getElementById("box"+z).innerHTML=correct;
    
    
    for(i=1;i<5;i++){
        
        if(i!==z){
            var wrong;
            do { wrong = (1 + Math.round(Math.random() * 9)) * (1 + Math.round(Math.random() * 9)) } while (wrong == correct);
            document.getElementById("box" +i).innerHTML = wrong;

        }
    }
}
function correctanswer(){
   for(i=1;i<5;i++){
       document.getElementById("box"+i).onclick = function () {
           if (playing == true) {
               if (this.innerHTML == correct) {
                   score++;
                   document.getElementById("scorevalue").innerHTML = score;
                   document.getElementById("correct").style.display = "block";
                   setTimeout(function(){
                       document.getElementById("correct").style.display = "none";
                   }, 1000);
                   questionQA();

               } else {
                   document.getElementById("wrong").style.display = "block";
                   setTimeout(function(){
                       document.getElementById("wrong").style.display = "none";
                   }, 1000);
               }
               

           }
       }
   }
}

