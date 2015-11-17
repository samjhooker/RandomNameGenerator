
//this is specific for the index html, it checks for loading and calls the api when website is loaded

document.addEventListener("DOMContentLoaded", function () {
    //do something when page is fully loaded
    console.log("page has loaded");
    loadStudents();
})


function loadStudents() {
    StudentModule.getStudents(function (studentsList) {

        for (i = 0; i < studentsList.length; i++) {
            var row = document.createElement("tr");
            var lastnamecol = document.createElement("td");
            lastnamecol.innerHTML = studentsList[i].surname; //surname is defined within the JSON object in the list
            row.appendChild(lastnamecol); //this adds the td within the tr

        }

    });


    
}