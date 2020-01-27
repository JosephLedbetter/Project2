// function createButtons(foodDiv,name) {
//   var newButton=$(`<button>${name}</button>`);
//   $(newButton).attr('id',name);
//   //$(newButton).attr('onclick',"sendToInvetary()");
//   $(newButton).attr('class',"food")
//   $(`.${foodDiv}`).append(newButton)
// }

// createButtons("proteinDropdown","beef");
//     createButtons("proteinDropdown","chicken");
//     createButtons("proteinDropdown","pork");
//     createButtons("proteinDropdown","fish");
//     -------------------------------
//     createButtons("vegetable","brocoli");
//     createButtons("vegetable","green beans");
//     createButtons("vegetable","tomato");
//     createButtons("vegetable","lettuce");
//     //------------------------------
//     createButtons("carbohydrate","bread");
//     createButtons("carbohydrate","rice");
//     createButtons("carbohydrate","outmeal");
//     createButtons("carbohydrate","pasta");
//     //------------------------------
//     createButtons("dairy","milk");
//     createButtons("dairy","cheese");
//     createButtons("dairy","sour cream");
//     createButtons("dairy","cream");
//------------------------------------------------------------------------------------
var mainUsserID=2;
var ingredientID=[];
var ingredientName=[];
function activateUsser() {

  $.get(`/usserpage/${mainUsserID}`,function (data) {
      $("#myname").text(data);
     
  });
  $.get(`/inventory/${mainUsserID}`,function (data) {
      ingredientID=data;
     
      console.log(data)
         for (let index = 0; index < ingredientID.length; index++) {
          $.get(`/inventary2/${ingredientID[index]}`,function (data) {
              ingredientName.push(data)
              // $(".inventary").text(ingredientName);
              $("#myDropdown").append(`<button id="inv${ingredientName[index]}" class="ingredient">${ingredientName[index]}<i class="material-icons">delete</i></button>`)
          })
          
      };
  });

  
}
activateUsser();
//___________________________________________________________________________________
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
    window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

// DROPDOWN ITEMS TO DISPLAY FOR CATEGORY: PROTEIN
  function catFunctionProtein() {
    document.getElementById("proteinDropdown").classList.toggle("show");
  }
    window.onclick = function(event) {
    if (!event.target.matches('.drop-click')) {
      let dropdowns = document.getElementsByClassName("category-dropdown");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

// DROPDOWN ITEMS TO DISPLAY FOR CATEGORY: VEGGIES
  function catFunctionVeggie() {
    document.getElementById("veggiesDropdown").classList.toggle("show");
  }
    window.onclick = function(event) {
    if (!event.target.matches('.drop-click')) {
      let dropdowns = document.getElementsByClassName("category-dropdown");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

// DROPDOWN ITEMS TO DISPLAY FOR CATEGORY: CARBOHYDRATE
  function catFunctionCarb() {
    document.getElementById("carbDropdown").classList.toggle("show");
  }
    window.onclick = function(event) {
    if (!event.target.matches('.drop-click')) {
      let dropdowns = document.getElementsByClassName("category-dropdown");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

// DROPDOWN ITEMS TO DISPLAY FOR CATEGORY: DAIRY
  function catFunctionDairy () {
    document.getElementById("dairyDropdown").classList.toggle("show");
  }
    window.onclick = function(event) {
    if (!event.target.matches('.drop-click')) {
      let dropdowns = document.getElementsByClassName("category-dropdown");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


// //ADDING SPECIFIC FOOD ITEM TO THE CURRENT INVENTORY LIST
// $(".food").on("click",function (event) {
// event.preventDefault();
// var id=$(this).attr("id");
// console.log(id);
// $("#myDropdown").append("<button>"+id+"<i class='material-icons'>add</i></button>");
// });


// // ADDING NEW CATEGORY TO THE LIST (LEFT SIDE)
// $(".submit").on("click",function (event) {
//   event.preventDefault();

//   let newCategory =$("#new-category").val().trim();
//   console.log(newCategory);

//   $("#cat-drop").append('<button>' + newCategory + '<i class="material-icons">delete</i></button>');
//   });



// SHOWING/HIDING 'CURRENT INVENTORY' 

$(".ingredient").on("click", function(){
console.log('button working');
  var ingredient = $(".dropdown-content");
  console.log(ingredient);
  if(ingredient.style.display == 'block')
  {ingredient.style = 'none';
}
else{
  ingredient.style.display = 'block'
}
});
