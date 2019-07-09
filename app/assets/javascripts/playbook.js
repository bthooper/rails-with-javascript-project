// Turbolinks is installed, so we need to start with:
$(document).on("turbolinks:load", function() {

  $('.playbook_anchor').on('click', function(e) {
    e.preventDefault();
    console.log(e);
    console.log(e.target.baseURI);

    // We need to make a request for the playbook data we want, and then 
    // append it to the li item so that it is displayed on the page
    // without a reload.  AJAX!
    
    const playbook_url = e.target.baseURI;

    console.log("PB URL: " + playbook_url);
    
    const data = getPlaybookDataFromUrl(playbook_url);

    // console.log(data);

    // You will get JS object back in data above.  So you 
    // may need to deal with that object in some way
    // before you append it.
    
    // appendData(data);
    
    
  });

  function getPlaybookDataFromUrl(url) {

    //  Use fetch to get data from RoR api.
    //  Format that data and capture it in a JS object
    //  return that JS object 
    //
    fetch(url)
    .then(function(resp) {
      return resp.text();
    })
    .then(function(resp) {
      console.log(resp);
    });
    

    // return data;
    //
    //
    return "awesome";
    

  }

  function appendData(data) {

  }



});
