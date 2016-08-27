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
   $('.flex-grid').sortable({
     stop: function(event, ui) {alert('You dropped a shitty frame!');}
   });

}
