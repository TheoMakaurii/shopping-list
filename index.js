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
 
  });


}

$(addItem);

// function checkButton(){

//   $(".shopping-item-toggle").click(function(){

//     //let targetItem= $(this).parent().parent();
    
//     $(this).parent().parent().addClass('.shopping-item__checked')
//     console.log($(this))
//   })

// }
// $(checkButton);

function deleteButton(){

  $(".shopping-item-delete").click(function(){
   
    // $(this).parent().parent().remove();
    // console.log($(this).parent())
    console.log("test");
  });

}

$(deleteButton)