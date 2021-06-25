class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    
    //write code to change the background color here
    background("lightGreen");

    //write code to show a heading for showing the result of Quiz
    fill("black");
    textSize(40);
    text("Result of the Quiz",265,55);
    textSize(50);
    text("-------------------",265,75);

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();
    
    //write condition to check if contestantInfor is not undefined
    if(allContestants!==undefined){
      fill("blue");
      textSize(20);
      text("NOTE : contestents given correct ansers are highlighted in green!",130,230);

    }



    //write code to add a note here
    for(var plr in allContestants){
      var correctAns = "2";
      //var display_Ans = 250;
      //display_Ans = display_Ans + 20;
      if(correctAns === allContestants[plr].answer){
        fill("green");
        text(allContestants[plr].name + ":" + allContestants[plr].answer,250,280);
      }else{
        fill("red");
        text(allContestants[plr].name + ":" + allContestants[plr].answer,250,310);
      }
    }

    //write code to highlight contest who answered correctly
    
  }

}
