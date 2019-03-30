// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $('.addButton').click(function(event) {
      // logic
      console.log($(this).val());
      event.preventDefault();
      
      var id = $(this).val();

      $.ajax("/burgers/" + id, {
        type : 'PUT',
      }).then(function() {
        window.location.reload();
      });
    })













    // $(".change-devour").on("submit", function(event) {
    //   event.preventDefault();
    //   var id = $('.devoured').val();
    //   console.log("id",id);
    //   // var newEatState = {
    //   //   devoured: true
    //   // };
  
    //   // Send the PUT request.
    //   $.ajax("/burgers/"+ id, {
    //     type: "PUT",
    //     // data: newEatState
    //   }).then(
    //     function() {
    //       console.log("changed devour to", true);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});