// JavaScript Document
$(document).ready(function() {
  "use strict";
	document.getElementById("defaultLoad").click();
  $(window).scroll(function () {
    if ($(window).scrollTop() > $('#banner').height()) {
      $("#nav_bar").addClass("navbar-fixed");
    }
    if ($(window).scrollTop() <= $('#banner').height()) {
      $("#nav_bar").removeClass("navbar-fixed");
    }
  });
});


function openTab(evt, tabName) {
	"use strict";
	var i, tabcontent, tablink;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++){
		tabcontent[i].style.display = "none";
	}

	tablink = document.getElementsByClassName("tablink");
	for (i = 0; i < tablink.length; i++){
		tablink[i].style.backgroundColor = null;
	}
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.style.backgroundColor = "maroon";
}
