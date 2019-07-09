// Turbolinks is installed, so we need to start with:
$(function() {

  $('.playbook_anchor').on('click', function(e) {
    e.preventDefault();

    const playbook_url = e.target.href;
    
    // This function retreives playbook data, creates a playbook object
    // and then displays the playbook data in the playbook table
    getPlaybookDataFromUrl(playbook_url);
    
  });

  class Playbook {
    constructor(name, description, situation) {
      this.name = name;
      this.description = description;
      this.situation = situation;
    }

    htmlForTd() {
      return this.description + "<br/>" + this.situation;
    }

  }

  function getPlaybookDataFromUrl(url) {
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
      console.log(playbook_id);
      $(`${playbook_id}`).empty();
      $(`${playbook_id}`).append(playbook.htmlForTd());
    });
  }


});
