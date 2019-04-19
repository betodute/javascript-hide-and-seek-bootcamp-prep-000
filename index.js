
function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").querySelector(".target");
}

function increaseRankBy(a){
  var location = document.getElementById("app").querySelectorAll("ul.ranked-list li");
  for (var i=0; i<location.length; i++) {
    location[i].innerHTML=parseInt(location[i].innerHTML)+a; 
  }
}

function deepestChild(){
  var location2 = document.getElementById("grand-node").querySelectorAll("div");
  var storage;
  for (var i=0; i<location2.length-1; i++) {
    storage = location2[i].querySelector("div");
  }
  return storage;
}