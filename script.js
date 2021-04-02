// javascript here

// getArticles function which will accept a query and a format
var getArticles = (query, format) => { // don't mind the syntax if you keep going forward, this is simply another way to write a function in Javascript
  // default to search if no format is selected
  if (!format) {
    format = 'search';
  }
  // impement our parameters directly into the url (concept used: template literal)
  var url = `https://www.loc.gov/${format}/?q=${query}&fo=json`;
  // ajax fetch request
  $.ajax({
      url: url,
      method: 'GET',
      error: () => console.log('Failed to retrieve') // error function if the fetch fails. It's in ES6 syntax.
  }).then(function (response) {
      // if success, initialize renderArticles
      renderArticles(response);
  });
}

var renderArticles = (data) => { // don't mind the syntax if you keep going forward, this is simply another way to write a function in Javascript
    var articles = data.results;
    // iterate through the articles grabbing necessary data
    for (var i = 0; i < articles.length; i++) {
        var title = articles[i].title;
        var date = moment(articles[i].extract_timestamp).format('YYYY');
        var subject = articles[i].subject;
        var description = articles[i].description[0];
        console.log(title);
        console.log(date);
        console.log(subject);
        console.log(description);
        console.log('\n');
    }
}