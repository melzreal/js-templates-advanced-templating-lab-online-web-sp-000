function init() {
  //put any page initialization/handlebars initialization here
  createRecipe();
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function reateRecipe(){
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var result = template(recipes);
  document.getElementsByTagName("main")[0].innerHTML += result;
}


function handleSubmit(){

}

function displayEditForm(){
  
}
