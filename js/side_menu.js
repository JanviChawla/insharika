function populate_data() {
  jQuery.getJSON('poems.json', function(data) {
    var poem_name = jQuery('#name').attr("name");
    jQuery.each(data.poem, function(i, f) {
      if (f.name == poem_name) {
        jQuery('#name').html(f.name);
        jQuery('#description').html(f.description);
        jQuery('#example_name').html(f.ex_title);
        jQuery('#example').html(f.example);
        jQuery('#example_author').html(f.ex_author);
      }
    });
  });
}

function populate_example() {
  var example_array = jQuery('#example').html().split('|');
  jQuery(".lightbox:eq(1) :input").each( function(index) {
    jQuery(this).val(example_array.shift());
  });
  jQuery(".lightbox:eq(1) .float-right").removeClass("float-right");
}

var selectedTxt = "";

function getTextHelper(thing){
  var text = "";
  for(var i=0; i<thing.length; i++){
    var start = thing[i].selectionStart;
    var end = thing[i].selectionEnd;
    text = text + thing[i].value.substring(start, end);
  }
  return text;
}

function getSelectedText() {
    var currText = "";
    if(typeof window.getSelection != "undefined"){
      currText = window.getSelection().toString();
    }else if (typeof document.selection != "undefined"){
      currText = getTextHelper(document.getElementsByClassName("poem-form"));
    }
    //console.log("new method res: " + currText);
    if(currText!=""){
      selectedTxt = currText;
    }
    return currText;
}


function setSelectedText() {
  if((window.getSelection().toString() == "") && (getTextHelper(document.getElementsByClassName("poem-form"))=="")){
    //console.log("do not change txt");
    return false;
  }
  //console.log("mouseup working!");
  var field = document.getElementById("RhymeBrainInput");
  getSelectedText();
  field.value = selectedTxt;
  return true;
}


