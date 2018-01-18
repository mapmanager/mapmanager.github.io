jQuery(function() {
  // Initalize lunr with the fields it will be searching on. I've given title
  // a boost of 10 to indicate matches on this field are more important.
  window.idx = lunr(function () {
    this.field('id');
    this.field('title');
    this.field('content', { boost: 10 });
    this.field('author');
    this.field('category');
    this.field('date');
  });

  // Download the data from the JSON file we generated
  window.data = $.getJSON('search_data.json');

  // Wait for the data to load and add it to lunr
  window.data.then(function(loaded_data){
    $.each(loaded_data, function(index, value){
      window.idx.add(
        $.extend({ "id": index }, value)
      );
    });
  });

  // Event when the form is submitted
  $("#site_search").submit(function(){
      event.preventDefault();
      var query = $("#search_box").val(); // Get the value for the text field
      var results = window.idx.search(query); // Get lunr to perform a search
      display_search_results(results); // Hand the results off to be displayed
  });

  function display_search_results(results) {
    var $search_results = $("#search_results");

    // Wait for data to load
    window.data.then(function(loaded_data) {

      // Are there any results?
      if (results.length) {
        $search_results.empty(); // Clear any old results

        // Iterate over the results
        results.forEach(function(result) {
          var item = loaded_data[result.ref];

console.log(item)

          // Build a snippet of HTML for this result
          // changed 20180118
          // was this and works
          //var appendString = item.date + ' - <a href="' + '/mapmanager' + item.url + '">' + item.title + '</a><BR>';
          
          // now this
          //works but has date
          //var appendString = item.date + ' - <a href="' + '' + item.url + '">' + item.title + '</a><BR>';
          
          var appendString = '' + '<a href="' + '' + item.url + '">' + item.title + '</a><BR>';

          //var appendString = item.date + ' - <a href="' + item.url + '">' + item.title + '</a><BR>';
		  //console.log(appendString);

          // Add it to the results
          $search_results.append(appendString);
        });
      } else {
        $search_results.html('No results found');
      }
    });
  }
});