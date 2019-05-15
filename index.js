var thisrepo =
  "https://github.com/trevjnels/starterKit/tree/master/grid-jQuery-HTML-CSS";

("use strict");
const logger = function(func) {
  console.log(func.name, " is running!");
};

const copyrightListner = function() {
  logger(copyrightListner);
  $(".github-button").on("click", function(e) {
    e.preventDefault();
    console.log("click");
    window.open("https://trevjnels.github.io/portfolio/", "_blank");
  });
};

var kittyClick = function() {
  $("div").click(function(e) {
    var cl = $(this).attr("class");

    var htm = $(e.target).html();
    if (htm.indexOf("img") === -1) {
      $(e.target).html("");
    }

    $(`.${cl}`).append(
      `<img class="kittykat" src="https://media0.giphy.com/media/cXaeWuJ1oKO4g/giphy.gif"/>`
    );
  });
};

const autoRunner = function() {
  logger(autoRunner);
  copyrightListner();
  kittyClick();
};

autoRunner();
