var apr;
var term;
var amount; 
var monthPayment;
var error;


function getAPR(){
    error = document.getElementById("error1");
    try{
        if(document.getElementById("apr").value.match(/\d/)){
            if(document.getElementById("apr").value < 0 || document.getElementById("apr").value > 25)
                throw "Invalid number please enter a value between 0 and 25 for the APR"
            else{
                apr = document.getElementById("apr").value;
                document.getElementById("apr").style.borderColor = "green"   
                throw "This is a valid number!";
            }
        }else{
            throw "Invalid input please enter a value between 0 and 40 for the APR";
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
        if(document.getElementById("term").value.match(/\d/)){
            if(document.getElementById("term").value < 0 || document.getElementById("term").value > 40)
                throw "Invalid number please enter a value between 0 and 40 for the Term";
            else{
                term = document.getElementById("term").value;
                document.getElementById("term").style.borderColor = "green"; 
                throw "This is a valid number!";
            }
        }else{
            throw "Invalid input please enter a value between 0 and 40 for the Term";
        }
        }
    catch(err){
        error.innerHTML = err;
    }
    
    console.log(term);
}

function getAmount(){
    error = document.getElementById("error3");
    try{
        if(document.getElementById("amount").value.match(/\d/)){
            amount = document.getElementById("amount").value;
            document.getElementById("amount").style.borderColor = "green"; 
            console.log(term);
            throw "This is a valid number!";
        }else{
            throw "Please enter a valid amount"
        }
    }
    catch(err){
        error.innerHTML = err;
    }
}

function validateForm(){
    if(apr != undefined && term != undefined && amount != undefined)
        return true;
    else
        return false;
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
