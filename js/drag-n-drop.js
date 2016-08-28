function ddInit(){
   /* var frame;

   function dropFrame(srcFrame, event, ui){
      alert('dropFrame');
   }

   $('.col').draggable({
      drag: function(event, ui){
         frame = $(this);
      }
   });

   $('.col').droppable({
      drop: function (event, ui){
         dropFrame($(this), event, ui);
         event.preventDefault();
      },
      out: function (event,ui){
         $(this).css('opacity', '1');
      },
      over: function (event,ui){
         $(this).css('opacity', '0.5');
      }
   });

   $(':not(.col)').droppable({
      drop: function(event, ui){
         alert('bad-drop');
      }
   });
   //$('.col').off().on('click', function(){
   //   alert('clicked');
   */
   
   /*function getSorted(selector, attrName) {
    var items = $($(selector).toArray().sort(function(a, b){
        var aVal = parseInt(a.getAttribute(attrName)),
            bVal = parseInt(b.getAttribute(attrName));
        return aVal - bVal;
    }));
    return $items
   }*/
   function sortNumber(a,b) {
    return a - b;
   }

   
   function didYouWin(){
      var items = [];
      var sortedItems = [];
      $('.col').each(function(){
         //alert($(this).prop('outerHTML'));
         items.push(Number($(this).attr('data-order')));
      });
      sortedItems = items.slice().sort(sortNumber);
      //alert(items.toString() + '?=' + sortedItems.toString());
      if (items.toString() === sortedItems.toString()){
         alert('You win');
      } else {
         //alert('Shitty loser');
      }
   }
   
   
   
   $('.flex-grid').sortable({
     stop: function(event, ui) {
         var order = $('.flex-grid').sortable('toArray');
         console.log('new order:', order);
         didYouWin();
     }
   });

}
