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

