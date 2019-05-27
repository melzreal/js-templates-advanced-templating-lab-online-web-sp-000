function init() {
  //put any page initialization/handlebars initialization here
  let formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  Handlebars.registerPartial('rec-details', document.getElementById("recipe-details-partial").innerHTML);
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
