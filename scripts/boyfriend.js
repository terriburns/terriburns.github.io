var response = "";
while (response != 'Goodbye!'){
  askQuestion();
}

//method to ask question, store input, and show the next questions
askQuestion = function(){
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
