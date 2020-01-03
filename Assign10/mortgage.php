<!DOCTYPE html>
<html lang="en">
<head>
    <title>Assignment #10</title>
    <link rel="stylesheet" href="styling.css">
    
</head> 
<body style="background-color:aquamarine">
<h1>Results of the calculation</h1>

<p id="phpResult">Thank you for using Assignment 10 calculator. Here below you can find you results</p>

<?php
$ARP = $_GET["arp"];
$Term = $_GET["term"];
$Amount = $_GET["amount"];

$x = pow(1 + ($ARP / 100 / 12), ($Term * 12));
$monthPayment = ($Amount * $x * ($ARP / 100 / 12) / ($x - 1));

?>

<table id="mothlyPayment">
    <tr><th>ARP</th><th>Term (in months)</th><th>Amount</th><th>Payment</th></tr>
    <tr>
        <td> 
        <?php
            echo $ARP.'%'; 
        ?>
         </td>
         <td> 
        <?php
            echo $Term;
        ?>
         </td>
         <td> 
        <?php
            echo '$'.$Amount;
        ?>
         </td>
         <td> 
             <b id="result">
        <?php
            echo '$'.round($monthPayment,2);
        ?>
        </b>
         </td>  
    </tr>
</table>

</body>
</html>
