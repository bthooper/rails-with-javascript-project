// Turbolinks is installed, so we need to start with:
$(document).on("turbolinks:load", function() {

  $('.playbook_anchor').on('click', function(e) {
    e.preventDefault();
    console.log(e);
    console.log(e.target.baseURI);

    // We need to make a request for the playbook data we want, and then 
    // append it to the li item so that it is displayed on the page
    // without a reload.  AJAX!
    
    const playbook_url = e.target.href;
    const data = getPlaybookDataFromUrl(playbook_url);


    // You will get JS object back in data above.  So you 
    // may need to deal with that object in some way
    // before you append it.
    
    // appendData(data);
    
    
  });

  class Playbook {
    constructor(name, description, situation) {
      this.name = name;
      this.description = description;
      this.situation = situation;
    }

    htmlForTd() {
      return this.descrition + "<br/>" + this.situation;
    }

  }

  function getPlaybookDataFromUrl(url) {

    //  Use fetch to get data from RoR api.
    //  Format that data and capture it in a JS object
    //  return that JS object 
    //
    
    // Fetch appends '.json' to the URL to specifiy json request.
    // 
    
    fetch(url + '.json')
    .then(function(resp) {
      return resp.json();
    })
    .then(function(resp) {
      // make a playbook objiect with a constructor.
      // Send this data to the constructor creating a new object
      // Use attributes and/or create a prototype fucntion to create text.
      //
      const playbook = new Playbook(resp.name, resp.description, resp.situation);
      console.log(playbook);
      let playbook_id = "td#" + playbook.name.toLowerCase().replace(' ', '-') + '-description';
      $(`${playbook_id}`).empty();
      $(`${playbook_id}`).append(playbook.htlmForTd);
    });
    

    // return data;
    //
    //
    return "awesome";
    

  }

  function appendData(data) {

  }



});
