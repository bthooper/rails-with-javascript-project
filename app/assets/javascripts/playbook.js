// Turbolinks is installed, so we need to start with:
$(document).on("turbolinks:load", function() {

  $("#Camel").click(function(e) {
    e.preventDefault;
    console.log("WOWZERS!");
  });

  $('.playbook_anchor').on('click', function(e) {
    e.preventDefault();
    console.log(e);
    alert('You clicked ' + e.target);

    

    // We need to make a request for the playbook data we want, and then 
    // append it to the li item so that it is displayed on the page
    // without a reload.  AJAX!
    
  });



});
