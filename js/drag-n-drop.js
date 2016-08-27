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
   
   function didYouWin(domOrder){
      alert('dropped');
      var sortedResults = [];
      //$('.col').each(function() {
      //   results.push($(this).attr('id'));
      //})
      sortedResults = domOrder.slice();
      sortedResults.getSorted('.col', 'data-order');
      alert(domOrder.toString() + ' =? ' + sortedResults.toString());
      if (domOrder.toString() === sortedResults.toString()) {
         alert('You win');
      } else {
         alert('You lose, you shitty player');
      }
   }
   
   function getSorted(selector, attrName) {
    return $($(selector).toArray().sort(function(a, b){
        var aVal = parseInt(a.getAttribute(attrName)),
            bVal = parseInt(b.getAttribute(attrName));
        return aVal - bVal;
    }));
}
   
   $('.flex-grid').sortable({
     stop: function(event, ui) {
         var order = $('.flex-grid').sortable('toArray');
         console.log('new order:', order);
         didYouWin(order);
     }
   });

}
