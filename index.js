function init() {
  //put any page initialization/handlebars initialization here
  let firstForm = document.getElementById("recipe-form-template").innerHTML;
  let formTemplate = Handlebars.compile(firstForm);
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
