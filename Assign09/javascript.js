function getCities(country){
    console.log("Entering function");
    if(country === "Select"){
        document.getElementById("cities").innerHTML = "";
    }
    else{
var url_county = country.toLowerCase();
console.log(url_county);

var xhttp = new XMLHttpRequest;

    xhttp.onreadystatechange  = function(){
        if(this.readyState == 4 && this.status == 200){
             var text = xhttp.responseText;
            //  if(text.match("\n/")){ ///[,]\w/
            //      text += "!!!!!!!!!!!!!!!!!!!!"
            //  }
            document.getElementById("cities").innerHTML = text;     
        }
    };
    xhttp.open("GET", "http://localhost/~cs213/" + url_county + ".txt",true);
    xhttp.send();
    }
}
   


function getJson(){
    var string_to_parse = document.getElementById("URL").value.toLowerCase();
    var obj;
    console.log(string_to_parse);
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange  = function(){
        if(this.readyState == 4 && this.status == 200){
                 displayData(this);
    }
    else{
        document.getElementById("person").innerHTML = "Sorry cannot locate name of the file. Try again."
    }
};
xhttp.open("GET",  "http://localhost/~cs213/" + string_to_parse,true);
xhttp.send();
}

function displayData(xhttp){
    var text = xhttp.responseText;
    obj = JSON.parse(text);
    var table = "<tr><th>FirstName</th><th>LastName</th><th>Address</th><th>Major</th><th>GPA</th></tr>";
    var x = obj.students;
    for (var i = 0; i <x.length; i++) { 
        table += "<tr><td>" +
        x[i].first +
        "</td><td>" +
        x[i].last +
        "</td><td>" +
        x[i].address.city + ", " + x[i].address.state + ", " + x[i].address.zip +
        "</td><td>" +
        x[i].major +
        "</td><td>" +
        x[i].gpa +
        "</td></tr>";      
    }
    document.getElementById("person").innerHTML = table;
}
        