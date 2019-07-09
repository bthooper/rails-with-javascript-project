// Turbolinks is installed, so we need to start with:
$(function() {

  $('.playbook_anchor').on('click', function(e) {
    e.preventDefault();

    const playbook_url = e.target.href;
    
    // This function retreives playbook data, creates a playbook object
    // and then displays the playbook data in the playbook table
    getPlaybookDataFromUrl(playbook_url);
    
  });

  $('#new_playbook').on('submit', function(e) {
    e.preventDefault();

    // We need to submit the form via ajax, and then
    // render the show page, also via ajax
    
    let playbook = new Playbook(e.target[2].value, e.target[3].value, e.target[4].value);
    // let post_url = e.
    // submitAndRenderPlaybookForm(playbook);
    //
    console.log(e);
  
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
    .then(res => res.json())
    .then(data => {
      const playbook = new Playbook(data.name, data.description, data.situation);
      const playbook_id = "td#" + playbook.name.toLowerCase().replace(' ', '-') + '-description';
      $(`${playbook_id}`).empty();
      $(`${playbook_id}`).append(playbook.htmlForTd());
    });
  }

  function submitAndRenderPlaybookForm(playbook, post_url) {
    


    
  }


});
