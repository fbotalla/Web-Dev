<!DOCTYPE html>
<head>
    <title>End of transaction</title>
</head>

<body>
    

<?php

if(isset($_POST["validate"]))
{
    echo "Your order has been successfully processed";
}
else{
    echo "Your order has been cancelled";
}
?>


</body>

</html>