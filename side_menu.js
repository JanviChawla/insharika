function populate_data() {
  $.getJSON('poems.json', function(data) {
    var poem_name = $('#name').attr("name");
    $.each(data.poem, function(i, f) {
      if (f.name == poem_name) {
        $('#name').html(f.name);
        $('#description').html(f.description);
      }
    });
  });
}

function getSelectedText2() {
    var html = "selected text: ";

        var sel = window.getSelection();
        console.log(sel);
        //if (sel.rangeCount) {
          console.log("range count: " + sel.rangeCount);
            html = html + sel.toString();
        
    console.log(html);
    return sel.toString();
}

function getSelectedText(){
    $(".poem-form").select( function (e) { 
    });
    return window.getSelection().toString();
}

function setSelectedText() {
    var field = document.getElementById("selected-text");
    field.value = getSelectedText();
    var html = "current word: " + getSelectedText();
        
    console.log(html);
    return true;
}

function tooltip(){

    $(document).ready(function (){
   $("#tooltip").hide();
   $('.poem-form').mouseup(function (e){
        var x = e.clientX;
        var y = e.clientY;
        placeTooltip(x, y);
        if(getSelectedText()!=""){
         $("#tooltip").show();
        setSelectedText();
         }else{
            $("#tooltip").hide();
         }
        
   })
});
}

function placeTooltip(x_pos, y_pos) {
    var tooldiv = document.getElementById('tooltip');
    tooldiv.style.position = "absolute";
    tooldiv.style.left = x_pos+10 + 'px';
    tooldiv.style.top = y_pos + 'px';
}