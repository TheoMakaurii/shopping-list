'use strict';

function checkItems(){

  $(".shopping-item-toggle").click(function(){
   
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');

  });
}
$(checkItems);

function deleteItems(){
  $(".shopping-item-delete").click(function(){
         
    $(this).parent().parent().remove();
    console.log($(this).parent());
  
  });    
}
$(deleteItems);

function addItem() {

$("#js-shopping-list-form").submit(e => {

    e.preventDefault();

    let newItem=`<li><span class = "shopping-item"> ${$("#shopping-list-entry").val()} </span>
    <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
      <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
      <span class="button-label">delete</span>
    </button>
  </div></li>`;

    $(".shopping-list").append(newItem);
    $("#shopping-list-entry").val('');

    $(checkItems);
    $(deleteItems);
  });
 
}
$(addItem);

