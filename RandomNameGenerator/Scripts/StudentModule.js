
//this module will make the http requests

var StudentModule = (function () {
    
    return{
        getStudents: function (callback){
            //get studetns code here
            $.ajax({ 
                type: "GET",
                dataType: "jsonp",
                url: "http://api.uinames.com/?amount=25",
                success: function (data) {
                    console.log(data);
                    callback(data);
                }

            });


        },
        deleteStudents: function () {
            //insert delete students
        },
        editStudents: function (){
            // insert edit coed here
        }
    }

}());
