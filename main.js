'use strict';

{
  $(document).ready(function(){
    $("input").focus();
    
    function searchAction(){
      const search_texts = $(".search_texts");
      let inputValue = $(this).val();

      search_texts.each(function() {
        $(this).parent().parent().addClass("hidden");
        if ($(this).text().indexOf(inputValue) != -1) {
          $(this).parent().parent().removeClass("hidden");
        } 
      });
    };

    $("input").on("input", searchAction);
  });
}
