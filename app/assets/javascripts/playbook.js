// Turbolinks is removed, so we need to start with:
$(function() {

  $('a:contains("Playbooks")').on('click', function(e) {
    e.preventDefault();

    fetch(`/users/${this.dataset.id}/playbooks.json`)
    .then(res => res.json())
    .then(json => {
      let html = `<div id='main-content'><h1>Your Playbooks</h1><table class='table'><thead><tr><th scope='col'>Name</th><th scope='col'>Description</th></tr></thead><tbody>`; 

      json.forEach(e => {
        const pb = new Playbook(e);
        html += makeRowAndTdforPlaybook(pb, this.dataset.id);
      });
    
     html += `</tbody></table><a href="/users/${this.dataset.id}/playbooks/new">Create new playbook</a>`; 
      $('#main-content-area').empty();
      $('#main-content-area').append(html);
    });

  });

  function makeRowAndTdforPlaybook(playbook, id) {
    html = "<tr><td>";
    html += `<a href="/users/${id}/playbooks/${playbook.id}" class="playbook_anchor">${playbook.name}</a></td>`; 
    html += `<td id="${playbook.name.toLowerCase().replace(' ', '-')}-description">${playbook.description}</td></tr>`;
   return html;
  }

  $('.container').on('click', '.playbook_anchor', function(e) {
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
    
    // let playbook = new Playbook(e.target[2].value, e.target[3].value, e.target[4].value);
    // let post_url = e.
    // submitAndRenderPlaybookForm(playbook);
    //
    const values = $(this).serialize();
    fetch('/playbooks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: values,
      
    })
    .then(response => response.json())
    .then(json => {
      const playbook = new Playbook(json);
      $('#main-content-area').html('');
      $('#main-content-area').append(playbook.show());

    });
  
  });

  class Playbook {
    constructor(pb) {
      this.id = pb.id;
      this.name = pb.name;
      this.description = pb.description;
      this.situation = pb.situation;
    }

    htmlForTd() {
      return this.description + "<br/>" + this.situation;
    }

    show() {
      let html = `<h1>Playbook</h1><p>Title: ${this.name}</p><p>Description: ${this.description}</p><p>Situation: ${this.situation}`
      return html;
    }
  }

  function getPlaybookDataFromUrl(url) {
    fetch(url + '.json')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const playbook = new Playbook(data);
      const playbook_id = "td#" + playbook.name.toLowerCase().replace(' ', '-') + '-description';
      $(`${playbook_id}`).empty();
      $(`${playbook_id}`).append(playbook.htmlForTd());
    });
  }

  function submitAndRenderPlaybookForm(playbook, post_url) {
    


    
  }


});
