function executePHP(){
    var xhttp = new XMLHttpRequest();
    var obj;
    console.log("Entering function");
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log("Connected to server");
            console.log(obj);
           //var x = obj.filenN;
          displayData(this)
            
        }
    };
    xhttp.open("GET","assign10.php",true);
    xhttp.send();
}


function displayData(xhttp){
 
    var text = xhttp.responseText;
    obj = JSON.parse(text);

    var table = "<tr><th>FileName</th><th>FileType</th><th>cwd</th><th>Action</th></tr>";
    for (var i = 0; i <obj.length; i++) { 
        table += "<tr><td>" +
        obj[i].fileName +
        "</td><td>" +
        obj[i].fileType +
        "</td><td>" +
        obj[i].cwd  +
        "</td>" + '<td><button onclick = "window.open(\'' + obj[i].fileName + '\')">Click to display</button></td>';
        "</tr>";

    }
    document.getElementById("files").innerHTML = table;
}
        