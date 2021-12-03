$(document).ready(function(){
  $('form').on('submit', function(){
      var item = $('form input');
      console.log('item', item);
      var todo = {item: item.val()};

      $.ajax({
        type: 'POST',
        url: '',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

  });

  $('li').on('click', function(){
      var item = $(this).text().trim();
      $.ajax({
        type: 'DELETE',
        url: '/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});
