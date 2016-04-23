$( document ).ready(function() {
    var undoStack = new Array();
    function pushToStack(){
        stack.push(document.body.cloneNode(true));
    }
    function undo(){
        document.body = stack.pop();
    }
});
