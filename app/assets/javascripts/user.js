// Turbolinks is removed, so we need to start with:
$(function() {

  $('a:contains("Profile")').on('click', function(e) {
    e.preventDefault();

    fetch(`/users/${this.dataset.id}.json`)
    .then(res => res.json())
    .then(json => {
      const user = new User(json);
      const games = json.games;
      let html = `<div id='main-content'><h1>${user.name}'s Profile</h1>`; 
     html += `</div>`; 
      $('#main-content-area').empty();
      $('#main-content-area').append(html);
      $('#main-content').append(user.format());
      $('#main-content').append('<h2>Your Games</h2>');
      games.forEach(g => {
        let game = new Game(g);
        $('#main-content').append(game.format());
      });
    });

  });

  class Game {
    constructor(game) {
      this.id = game.id;
      this.date = game.date;
      this.location = game.location;
    }

    format() {
      let html = `<h5>${this.date}</h5><p>${this.location}</p>`;
      return html;
    }
  }

  class User {
    constructor(user) {
      this.id = user.id;
      this.name = user.name;
      this.email = user.email;
    }

    format() {
      let html = `<h5>${this.name}</h5><p>${this.email}</p>`;
      return html;
    }
  }

});
