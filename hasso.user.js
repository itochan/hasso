// ==UserScript==
// @name         hasso.user.js
// @namespace    hasso
// @include      https://www.amazon.co.jp/gp/css/*history*
// @author       itochan
// @description  その発送はなかった
// ==/UserScript==

function load_jquery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}
