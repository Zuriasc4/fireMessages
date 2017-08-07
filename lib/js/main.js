//Set database object
var database = firebase.database().ref();

//button executes this function
function updateDB(){
    var name = $("#name").val();
    var message = $("#message").val();
    console.log(name + " : " + message);

    //Update database here
var value ={
    NAME: Zuri,
    MESSAGE: Hello
}
database.push(value);
}

//get data

database.on("child_added", function(rowData){
    var row = rowData.val();
    var name = row.NAME;
    var message = row.MESSAGE
    var fullText = "<p>" + name + ":" + message + "<p>";
    $(".allMessages").append(fullText);
});