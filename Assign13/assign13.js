function displayDuetInfo(){
    if(document.getElementById("performance").value == "Duet"){
        document.getElementById("duetInfo").style.visibility = "visible";
    }
    else
    document.getElementById("duetInfo").style.visibility = "hidden";
   
}

function validateForm()
{
  var fields = ["performance", "first_name","last_name","student_id","skill", "instrument","room","time_slot"]

  var l = fields.length;
  var fieldname;
  for (i = 0; i < l; i++) {
    fieldname = fields[i];
    if (document.forms["registration"][fieldname].value == "") {
      return false;
    }
  }
  return true;
}



function registerStudent(){
    if(validateForm()){
    let performance = document.getElementsByName("performance")[0].value;
    let firstName = document.getElementsByName("first_name")[0].value;
    let lastName = document.getElementsByName("last_name")[0].value;
    let studentId = document.getElementsByName("student_id")[0].value;
    let skill = document.getElementsByName("skill")[0].value;
    let instrument;
    let room = document.getElementsByName("room")[0].value;
    let time = document.getElementsByName("time_slot")[0].value;


    //find the correct radio value and assign it
let radios = document.getElementsByName('instrument');
for (var i = 0, length = radios.length; i < length; i++)
{
 if (radios[i].checked)
 {
  instrument = radios[i].value
  break;
 }
}

    document.getElementById("display_table").style.visibility = "visible";
    var tableRef = document.getElementById("display_table");
    var newRow = tableRef.insertRow();
 
    var newCellPerformance = newRow.insertCell(0)
    var newCellFirstName = newRow.insertCell(1);
    var newCellLastName = newRow.insertCell(2);
    var newCellStudentId = newRow.insertCell(3);
    var newCellSkill = newRow.insertCell(4);
    var newCellInstrument = newRow.insertCell(5);
    var newCellRoom = newRow.insertCell(6);
    var newCellTime = newRow.insertCell(7);


    var newPerformance = document.createTextNode(performance);
    var newFirstName = document.createTextNode(firstName);
    var newLastName = document.createTextNode(lastName);
    var newStudentId = document.createTextNode(studentId);
    var newSkill = document.createTextNode(skill);
    var newInstrument = document.createTextNode(instrument);
    var newRoom = document.createTextNode(room);;
    var newTime = document.createTextNode(time);

    newCellPerformance.appendChild(newPerformance);
    newCellFirstName.appendChild(newFirstName);
    newCellLastName.appendChild(newLastName);
    newCellStudentId.appendChild(newStudentId);
    newCellSkill.appendChild(newSkill);
    newCellInstrument.appendChild(newInstrument);;
    newCellRoom.appendChild(newRoom);
    newCellTime.appendChild(newTime);
}

}


function executePHP(){
    let performance = document.getElementsByName("performance")[0].value;
    let firstName = document.getElementsByName("first_name")[0].value;
    let lastName = document.getElementsByName("last_name")[0].value;
    let studentId = document.getElementsByName("student_id")[0].value;
    let skill = document.getElementsByName("skill")[0].value;
    let instrument;
    let room = document.getElementsByName("room")[0].value;
    let time = document.getElementsByName("time_slot")[0].value;


    //find the correct radio value and assign it
let radios = document.getElementsByName('instrument');
for (var i = 0, length = radios.length; i < length; i++)
{
 if (radios[i].checked)
 {
  instrument = radios[i].value
  break;
 }
}

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log("Connected to server");
        }
    };
    xhttp.open("POST","assign13.php?q=" + performance + " " + firstName + " " + lastName + " " + studentId + " " + skill  
                                        + " " + instrument + " " + room + " " + time, true);
    xhttp.send();
}


function readFromFile(){
    var something = new Array();
    var eachLine = new Array();
    var lines;
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "data/registrations.txt", false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var tableRef = document.getElementById("display_table");
                document.getElementById("display_table").style.visibility = "visible";

                lines = this.responseText.split('\n');
                for(var line = 0; line < lines.length -1; line++){
                eachLine[line] = toString(lines[line]);
                something = lines[line].split(" ");
                var newRow = tableRef.insertRow();
            
                    
                    var n1 = newRow.insertCell(0)
                    var n2 = newRow.insertCell(1);
                    var n3 = newRow.insertCell(2);
                    var n4 = newRow.insertCell(3);
                    var n5 = newRow.insertCell(4);
                    var n6 = newRow.insertCell(5);
                    var n7 = newRow.insertCell(6);
                    var n8 = newRow.insertCell(7);
                    
                    var newP = document.createTextNode(something[0]);
                    var newF = document.createTextNode(something[1]);
                    var newL = document.createTextNode(something[2]);
                    var newS = document.createTextNode(something[3]);
                    var newSk = document.createTextNode(something[4]);
                    var newI = document.createTextNode(something[5]);
                    var newR = document.createTextNode(something[6]);;
                    var newT = document.createTextNode(something[7]);

                    n1.appendChild(newP);
                    n2.appendChild(newF);
                    n3.appendChild(newL);
                    n4.appendChild(newS);
                    n5.appendChild(newSk);
                    n6.appendChild(newI);;
                    n7.appendChild(newR);
                    n8.appendChild(newT);
            
            }
            }
        }
    }
    rawFile.send(null);
}

s