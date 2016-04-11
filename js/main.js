$(function() {
    $("#add").click(function(){
        console.log("new");
        var newDiv = document.createElement('div');
        newDiv.style.border = "solid";
        newDiv.style.height="80px";
        newDiv.style.width="80px";
        newDiv.style.margin="20px";
        document.getElementById("left").appendChild(newDiv);
        $(newDiv).attr('id', 'Nouns');
        $(newDiv).text("Nouns");
    
});
});