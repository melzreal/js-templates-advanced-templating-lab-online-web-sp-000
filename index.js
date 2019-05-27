function init() {
  //put any page initialization/handlebars initialization here
  createRecipe();
  Handlebars.registerPartial('recipe-details-partial', '{{name}}')
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe(){
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);

  document.getElementsByTagName("main")[0].innerHTML += result;
}


function handleSubmit(){

}

function displayEditForm(){

}
