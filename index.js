function init() {
  //put any page initialization/handlebars initialization here
  let firstForm = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);

  document.getElementById('main').innerHTML = firstForm({ingredients: ['','','','','']});

  Handlebars.registerPartial('rec-details', document.getElementById("recipe-details-partial").innerHTML);
}


function createRecipe(){

}


function handleSubmit(){

}

function displayEditForm(){

}


document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
