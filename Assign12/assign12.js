var startCity;
var startState;
var endCity;
var endState;
var validate = false;

function validateForm(){
        if(document.forms["mileage"]["startCity"].value.match(/^[A-Za-z]+$/)){
            document.getElementById("error1").style.visibility = "visible";
            document.getElementById("error1").innerHTML = "Valid";
            document.getElementById("error1").style.color = "green";
            startCity = document.forms["mileage"]["startCity"].value;
        }
        else{
            document.getElementById("error1").style.visibility = "visible";
            document.getElementById("error1").style.color = "red";
            document.forms["mileage"]["startCity"].focus();
        }

        if(document.forms["mileage"]["startState"].value.match(/^[A-Za-z]{1,2}$/)){
            document.getElementById("error2").style.visibility = "visible";
            document.getElementById("error2").innerHTML = "Valid";
            document.getElementById("error2").style.color = "green";
            startState = document.forms["mileage"]["startState"].value;
        }
        else{
            document.getElementById("error2").style.visibility = "visible";
            document.getElementById("error2").style.color = "red";
            document.forms["mileage"]["startState"].focus();
        }

        if(document.forms["mileage"]["endCity"].value.match(/^[A-Za-z]+$/)){
            document.getElementById("error3").style.visibility = "visible";
            document.getElementById("error3").innerHTML = "Valid";
            document.getElementById("error3").style.color = "green";
            endCity = document.forms["mileage"]["endCity"].value;
        }
        else{
            document.getElementById("error3").style.visibility = "visible";
            document.getElementById("error3").style.color = "red";
            document.forms["mileage"]["endCity"].focus();
        }

        if(document.forms["mileage"]["endState"].value.match(/^[A-Za-z]{1,2}$/)){
            document.getElementById("error4").style.visibility = "visible";
            document.getElementById("error4").innerHTML = "Valid";
            document.getElementById("error4").style.color = "green";
            endState = document.forms["mileage"]["endState"].value;
        }
        else{
            document.getElementById("error4").style.visibility = "visible";
            document.getElementById("error4").style.color = "red";
            document.forms["mileage"]["endState"].focus();
        }

        if(startCity != undefined && startState != undefined && endCity != undefined && endState != undefined ){
            validate = true;
        }
}

    function setRequest(){
        validateForm();
        if(validate === true){
        console.log("Entering request");
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                  var obj = JSON.parse(this.responseText);
                  document.getElementById("answer").innerHTML = "The distance between " + startCity + " and " + endCity + " is of " + obj.trip.miles + " miles ";
                }
            };
            xmlhttp.open("GET", "/cgi-bin/ercanbracks/mileage/mileageAjaxJSON" + "?startCity=" + startCity + "&startState=" + startState +
            "&endCity=" +endCity + "&endState=" + endState, true);
            xmlhttp.send();
        }
    }


