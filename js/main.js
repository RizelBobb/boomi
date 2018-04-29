$(document).ready(function() {
/* toggle the table header*/

  $('[data-toggle="toggle"]').change(function(){
		$(this).parents().next('.hide').toggle();
	});
});

$('.tiny').on('click', function() {
  var _this = this;

  $(this).addClass('bounce');
  setTimeout(function() {
    $(_this).removeClass('bounce');
  }, 500);

  $(".filter-dropdown, .text-button").click(function(){
    $(".edit-filter-modal").toggleClass("hidden");

  });
    $(".apply-button").click(function(){
    $(".edit-filter-modal").toggleClass("hidden");
          $(".filter, .filter-remove, .fa-plus, .fa-filter").toggleClass("filter-hidden");
      $(".filter-dropdown-text").text("Add filter");


    });

      $(".filter-remove").click(function(){
        $(".filter, .filter-remove, .fa-plus, .fa-filter").toggleClass("filter-hidden");
        $(".filter-dropdown-text").text("Filter dataset");
      });

    //select all check box

});
