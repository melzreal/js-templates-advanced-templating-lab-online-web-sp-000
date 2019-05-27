function init() {
  //put any page initialization/handlebars initialization here
  createRecipe();
  Handlebars.registerPartial('rec-details', document.getElementById("recipe-details-partial").innerHTML))
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe(){
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);

}


function handleSubmit(){

}

function displayEditForm(){

}
