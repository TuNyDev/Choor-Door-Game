let doorImage1=document.getElementById('door1');
let doorImage2=document.getElementById('door2');
let doorImage3=document.getElementById('door3');
let botDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let startButton=document.getElementById('start');
let closedDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
let botDoorNotOpened=true;
let streak=document.getElementById('score-number');
let best=document.getElementById('high-score-number')
doorImage1.onclick=()=>{
  if (isNotClicked(doorImage1) && botDoorNotOpened ){
     doorImage1.src=opendoor1;
  playDoor(doorImage1); 
  }

}

doorImage2.onclick=()=>{
  if (isNotClicked(doorImage2) && botDoorNotOpened){
   doorImage2.src=opendoor2;
  playDoor(doorImage2);   
  }

}

doorImage3.onclick=()=>{
  if(isNotClicked(doorImage3) && botDoorNotOpened){
   doorImage3.src=opendoor3;
  playDoor(doorImage3);   
  }

};

startButton.onclick=()=>{
  startRound();
}
//function that resets everything
const startRound=()=>{
  doorImage1.src=closedDoorPath;
  doorImage2.src=closedDoorPath;
  doorImage3.src=closedDoorPath;
  numClosedDoors=3;
  randomDoorGenerator();
  startButton.innerHTML='Good Luck!';
  botDoorNotOpened=true;
}

let opendoor1;
let opendoor2;
let opendoor3;
let numClosedDoors=3;
// function that give us random doors each time
const randomDoorGenerator=()=> {
  const random=Math.floor(Math.random()*numClosedDoors)
  switch (random){
      case 0:
      opendoor1=botDoorPath;
      opendoor2=beachDoorPath;
      opendoor3=spaceDoorPath;
      break;
    case 1:
      opendoor1=beachDoorPath;
      opendoor3=botDoorPath;
      opendoor2=spaceDoorPath;
      break;
    case 2:
      opendoor1=spaceDoorPath;
      opendoor2=botDoorPath;
      opendoor3=beachDoorPath;
      break;
  }
}
startRound();
// checks if the door has botDoorPath when it's on
const isBot=(door)=>{
  if (door.src===botDoorPath){
    return true;
  } else {return false;}
}
// check if the door is clicked
const isNotClicked=(door)=>{
  if (door.src===closedDoorPath){
    return true;
  } else {
    return false;
  }
}
//function that  is being called each time we open a door
const playDoor=(door1)=>{
  numClosedDoors--;
  if (numClosedDoors===0){

    gameOver('win');
  } else if (isBot(door1)) {
    num1=0;
    gameOver();
    
  }
}
// function that gives us the result
const gameOver=(status)=>{
  if (status==='win'){
    num1++;
    
    startButton.innerHTML='You win! Play Again?'
    streak.innerHTML=num1;
    best.innerHTML=num2;
    if (num1>num2)
      {
        num2=num1;
      best.innerHTML=num2;
    }
  } else {
    startButton.innerHTML='You lose! Play Again?'
   streak.innerHTML=num1; 
  }  botDoorNotOpened=false;
   
}
let num1=0;
let num2=0;

