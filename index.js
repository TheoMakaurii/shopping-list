'use strict';


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
    
    console.log(newItem);


    $(".shopping-list").append(newItem);
    $("#shopping-list-entry").val('');

    function deleteButton(){

      $(".shopping-item-delete").click(function(){
         
        $(this).parent().parent().remove();
        console.log($(this).parent())
        console.log("test");
        // $(this).newItem.remove();
      });
      
    }
    $(deleteButton)

    function checkButton(){

      $(".shopping-item-toggle").click(function(){
       
    
        
        $(this).closest('li').toggleClass('shopping-item__checked');
        
     
      })
    
    }
    $(checkButton);
  });

}

$(addItem);

function checkOriginalItems(){

  $(".shopping-item-toggle").click(function(){
   

    
    $(this).closest('li').toggleClass('shopping-item__checked');
 
 
  });

}
$(checkOriginalItems);

function deleteOriginalItems(){

  $(".shopping-item-delete").click(function(){
         
    $(this).parent().parent().remove();
    console.log($(this).parent())
  
    });
      
}
$(deleteOriginalItems);
