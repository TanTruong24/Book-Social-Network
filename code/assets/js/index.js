function ResponsiveTopnav() {
    var x = document.getElementById("responsive-topnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

var divs = ["sub-item1", "sub-item2", "sub-item3", "sub-item4"];
var visibleDivId = null;
function clickSidenav(divId) {
  if(visibleDivId === divId) {
    //visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
  var i, divId, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
};

function increment() {
  document.getElementById('quantilyBooks').stepUp();
}
function decrement() {
  document.getElementById('quantilyBooks').stepDown();
}
