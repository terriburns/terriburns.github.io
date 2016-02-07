var response = "";
while (response != 'Goodbye!'){
  console.log("it got here");
  askQuestion();
}

//method to ask question, store input, and show the next questions
askQuestion = function(){
  //REMOVE FIRST QUESTION:
  //
  
  //ask subsequent questions depending on name
  document.getElementById("name").submit();
  if (fname != "terri"){
    //do non-boyfriend stuff
    nonBoyfriend(fname);
  }
  else {
    //do boyfriend stuff
    boyfriend(name);
  }
  nonBoyfriend = function(name){
  }
  boyfriend = function(name){
  }
}
