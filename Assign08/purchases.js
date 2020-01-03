var items = 0;
var first_name,last_name,address,phone_number,credit_card_number,exp_date; 

function getFistName(){
    first_name = document.getElementById("first_name").value;
    console.log(first_name);
}

function getLastName(){
    last_name = document.getElementById("last_name").value;
    console.log(last_name);
}

function getAddress(){
    document.getElementById("address").innerHTML = "";
    address = document.getElementById("address").value;
    console.log(address);
}


function getPhoneNumber(){
    if(document.getElementById("phone_number").value.match(/\d{3}-\d{3}-\d{4}/)){
    phone_number = document.getElementById("phone_number").value;
    document.getElementsByClassName("error")[0].style.visibility = "hidden";
    console.log(phone_number);
    }
    else{
        console.log("not working")
        document.getElementsByClassName("error")[0].style.visibility = "visible";
    }
}

function getCostItem0(value){
    if(document.getElementById("item_0").checked){
        items += parseFloat(value);
    }
    else{
        items -= parseFloat(value);
    }
    document.getElementById("total").innerHTML = items.toFixed(2);
}

function getCostItem1(value){
    if(document.getElementById("item_1").checked){
        items += parseFloat(value);
    }
    else{
        items -= parseFloat(value);
    }
    document.getElementById("total").innerHTML = items.toFixed(2);
}

function getCostItem2(value){
    if(document.getElementById("item_2").checked){
        items += parseFloat(value);
    }
    else{
        items -= parseFloat(value);
    }
    document.getElementById("total").innerHTML = items.toFixed(2);
}

function getCostItem3(value){
    if(document.getElementById("item_3").checked){
        items += parseFloat(value);
    }
    else{
        items -= parseFloat(value);
    }
    document.getElementById("total").innerHTML = items.toFixed(2);
}

function getCreditCardNumber(){
    if(document.getElementById("credit_card").value.match(/\d{16}/)){
        credit_card_number = document.getElementById("credit_card").value;
        document.getElementsByClassName("error")[1].style.visibility = "hidden";
        console.log(credit_card_number);
    }
    else{
        console.log("Not long enough");
        document.getElementsByClassName("error")[1].style.visibility = "visible";
    }
}

function getCreditCardExp(){
    if(document.getElementById("exp_date").value.match(/(\d{1,31})\/(\d{1,12})\/(\d{4})/)){
        exp_date = document.getElementById("exp_date").value;
        document.getElementsByClassName("error")[2].style.visibility = "hidden";
        console.log(exp_date);
    }
    else{
        console.log("Entered an incorrect date");
        document.getElementsByClassName("error")[2].style.visibility = "visible";
    }

}

function resetForm(){
    document.getElementById("total").innerHTML = 0;
    document.getElementById("first_name").focus();
    for(var i = 0; i < document.getElementsByClassName("error").l; i++){
        document.getElementsByClassName("error")[i].style.visibility = "hidden";
    }
}

function submitForm(){
    if(first_name == undefined){
        document.getElementById("first_name").focus();
    }
    else if(last_name == undefined){
        document.getElementById("last_name").focus();
    }
    else if(address == undefined){
        document.getElementById("address").focus();
    }
    else if(phone_number == undefined){
        document.getElementById("phone_number").focus();
    }
    else if(credit_card_number == undefined){
        document.getElementById("credit_card").focus();
    }   
    else if(exp_date == undefined){
        document.getElementById("exp_date").focus();
    } 
  
}