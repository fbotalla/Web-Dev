<!DOCTYPE html>
<html lang="en">
<head>
    <title>PHP Results</title>
    <link rel="stylesheet" href="style.css">


    <style>

tr:hover{
      background-color: lightgray;
  }
  td,tr{
    padding: 20px;
  }

  tr{
    border-bottom:1px solid grey;

  }

  table{
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 50%;
    margin-top: 20px;
    text-align: center;
    margin-left:auto; 
    margin-right:auto;
  }

  h5{
      text-align: center    ;
  }

  .grid-container {
  display: grid;
  grid-template-columns: auto auto;
  padding: 10px;
}
    
    
    </style>
</head>

<body>




<?php
$firstname = $_POST["first_name"];
$lastname = $_POST["last_name"];
$address = $_POST["address"];
$phone_number = $_POST["phone"];
$items = array();
$items[0] = $_POST["item_0"];
$items[1] = $_POST["item_1"];
$items[2] = $_POST["item_2"];
$items[3] = $_POST["item_3"];
$cost = $_POST["total"];
$card = $_POST["card"];
$credit_card = $_POST["credit_card"];
$expiration_date = date_create($_POST["exp_date"]);
$description = array("Leather shoes" , "Leather jacket" , "Leather belt" , "Leather pants");

?>

<h1 style="color :brown">Order Confirmation</h1>
<h5>Thank you for shopping with us</h4>


<div class="grid-container">
  <div class="grid-item" style="text-align:left">

  <h3>Your information</h3><p style="text-align:center"><a href="assign11.html" >Edit</a></p>
  <p><?php echo $firstname ." " . $lastname ?> </p>
  <p><?php echo $phone_number?></p>
  <p><?php echo $address?></p><br><br><br><br>
  <h3>Payment</h3><p style="text-align:center"><a href="assign11.html" >Edit</a></p>
  <p>Credit card type: <?php echo $card?></p>
  <p>Credit card number: <?php echo $credit_card?></p>
  <p>Expiring on: <?php echo date_format($expiration_date,"F, Y")?></p>

  </div>

  <div class="grid-item">

<p style="text-align:right"><a href="assign11.html" >Edit</a></p>  
<p style=" text-align: center;">Your cart:</p>
  
<?php 

if(empty($items)){
   echo "Your cart is empty";
}
else{
    echo '<table><tr><th>Item</th><th>Price</th></tr>' ;
        for($i = 0;$i< count($items);$i++){
            if(!empty($items[$i])){
            echo '<tr><td>' . $description[$i] . '</td>';         
            echo  '<td>' . $items[$i] .'</td></tr>'; 
            }
           
        }
        echo '</table>';
        }
        
?>
<p style="text-align:center">
<?php

    $sum = array_sum($items);
    echo "Your total is $" . number_format((float)$sum,2,'.','')?>
</p>

  </div>

</div>

<form action="assign11_a.php" method="POST" style="text-align:center">

  <input type="submit" name="validate" value="Confirm" style="height:30px" >
  <input type="submit" name="cancel" value="Cancel" style="height:30px" >
  </form>



</body>
</html>