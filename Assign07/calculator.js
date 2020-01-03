var apr;
var term;
var amount; 
var monthPayment;
var error;


function getAPR(){
    error = document.getElementById("error1");
    try{
        if(document.getElementById("apr").value < 0 || document.getElementById("apr").value > 25)
            throw "Invalid number please enter a value between 0 and 25 for the APR"
        else{
            apr = document.getElementById("apr").value;
            document.getElementById("apr").style.borderColor = "green"   
            throw "This is a valid number!";
        }  
    }
    catch(err){
        error.innerHTML = err
    }

console.log(apr);
}


function getTerm(){
    error = document.getElementById("error2");
    try{
        if(document.getElementById("term").value < 0 || document.getElementById("term").value > 40)
            throw "Invalid number please enter a value between 0 and 40 for the Term";
        else{
            term = document.getElementById("term").value;
            document.getElementById("term").style.borderColor = "green"; 
            throw "This is a valid number!";
        }
        }
    catch(err){
        error.innerHTML = err;
    }
    
    console.log(term);
}

function getAmount(){
        amount = document.getElementById("amount").value;
        document.getElementById("amount").style.borderColor = "green"; 
    console.log(term);
}

function calculateMonthlyPayment(){

    if(apr == undefined){
        alert("Please fill out the APR element");
        document.getElementById("apr").style.borderColor = "red";
        document.getElementById("apr").focus;
    }
    else if(term == undefined){
        alert("Please fill out the Loan Term element");
        document.getElementById("term").style.borderColor = "red";
        document.getElementById("term").focus;
    }
    else if(amount == undefined){
        alert("Please fill out the Amount element");
        document.getElementById("amount").style.borderColor = "red";
        document.getElementById("amount").focus;
    }
    else{
    var x = Math.pow(1 + (apr / 100 / 12), (term * 12));
    monthPayment = (amount * x * (apr / 100 / 12) / (x - 1));
    document.getElementById("payment").innerHTML = monthPayment.toFixed(2);
    }
}



function calculateMonthlyPaymentAlways(){
    var x = Math.pow(1 + (apr / 100 / 12), (term * 12));
    monthPayment = (amount * x * (apr / 100 / 12) / (x - 1));
    document.getElementById("payment").innerHTML = "$" + monthPayment.toFixed(2);
}


function focusToFirst(){
    document.getElementById("apr").focus();
    document.getElementById("error1").innerHTML = " ";
    document.getElementById("error2").innerHTML = " ";
    document.getElementById("payment").innerHTML = " ";
    document.getElementById("apr").style.borderColor = "black";
    document.getElementById("term").style.borderColor = "black";
    document.getElementById("amount").style.borderColor = "black";
    
    
}
