

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


//ADDING SPECIFIC FOOD ITEM TO THE CURRENT INVENTORY LIST
$(".food").on("click",function (event) {
event.preventDefault();
var id=$(this).attr("id");
console.log(id);
$("#myDropdown").append("<button>"+id+"<i class='material-icons'>add</i></button>");
});