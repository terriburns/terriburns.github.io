<?php
if($_POST['formSubmit'] == "Submit") 
{
  $errorMessage = "";

  if(empty($_POST['formMovie'])) 
  {
    $errorMessage .= "<li>You forgot to enter a movie!</li>";
  }
  if(empty($_POST['formName'])) 
  {
    $errorMessage .= "<li>You forgot to enter a name!</li>";
  }

  $varMovie = $_POST['formMovie'];
  $varName = $_POST['formName'];

  if(!empty($errorMessage)) 
  {
    echo("<p>There was an error with your form:</p>\n");
    echo("<ul>" . $errorMessage . "</ul>\n");
  } 

}

?>
