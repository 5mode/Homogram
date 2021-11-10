/**
 * Copyright 2021, 2024 5 Mode
 *
 * This file is part of Http Console.
 *
 * Http Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Http Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.  
 * 
 * You should have received a copy of the GNU General Public License
 * along with Http Console. If not, see <https://www.gnu.org/licenses/>.
 *
 * home.js
 * 
 * JS file for Home page
 *
 * @author Daniele Bonini <my25mb@aol.com>
 * @copyrights (c) 2021, 2024, the Open Gallery's contributors     
 */

function closeSplash() {
  $("#hideSplash").val("1");
  $("#splash").hide();	
}

/**
 * Encrypt the given string
 * 
 * @param {string} string - The string to encrypt
 * @returns {string} the encrypted string
 */
function encryptSha2(string) {
  var jsSHAo = new jsSHA("SHA-256", "TEXT", 1);
  jsSHAo.update(string);
  return jsSHAo.getHash("HEX");
}

function setFooterPos() {
  if (document.getElementById("footerCont")) {
    //if ($("#Password").val() === "") {  
    //    tollerance = 48;
    //  } else {
    //  tollerance = 15;
    //}
    tollerance = 22;  	  
    $("#footerCont").css("top", parseInt( window.innerHeight - $("#footerCont").height() - tollerance ) + "px");
    $("#footer").css("top", parseInt( window.innerHeight - $("#footer").height() - tollerance + 6) + "px");
  }
}

function delImg(id, path) {
  if (confirm("Do you really want to delete that picture?")) {
    $("#CommandLine").val("del " + path);
    frmHC.submit();
  }  
}

function changeVisibility(id, path) {
  if ($("#lock-" + id).attr("src") === "/res/private.png") {
    $("#CommandLine").val("publicify " + path); 
  } else {
    $("#CommandLine").val("privatify " + path);
  }    
  frmHC.submit();
}  

function makeNewFolder() {
  var newFolderName = prompt("How to name the new folder?");
  if (newFolderName != null) {
    $("#CommandLine").val("makedir " + newFolderName);
    frmHC.submit();
  }   
}  

function openLink(href, target) {
  window.open(href, target);
} 

function changePath(newPath) {
  $("#pwd").val(newPath);
  frmHC.submit(); 
}  

function showEncodedPassword() {
   if ($("#Password").val() === "") {
	 $("#Password").addClass("emptyfield");
	 return;  
   }
   if ($("#Salt").val() === "") {
	 $("#Salt").addClass("emptyfield");
	 return;  
   }	   	
   passw = encryptSha2( $("#Password").val() + $("#Salt").val());
   msg = "Please set your hash in the config file with this value:";
   alert(msg + "\n\n" + passw);	
}

function upload() {
  $("input#files").click();
} 

$("input#files").on("change", function(e) {
  frmHC.submit();
});

$("#Password").on("keydown", function(e){
	$("#Password").removeClass("emptyfield");
});	

$("#Salt").on("keydown", function(e){
	$("#Salt").removeClass("emptyfield");
});	

function refresh() {
 $("#CommandLine").val("refresh");
 frmHC.submit();
}

function closePlayer() {
  refresh();
}

function openPic(pic) {
  //alert(pic);
  $("#CommandLine").val("openpic " + pic);
  frmHC.submit();
}

window.addEventListener("load", function() {
    
  setTimeout("setFooterPos()", 3000);

  //document.getElementById("CommandLine").focus();  
  
}, true);

window.addEventListener("resize", function() {

  setTimeout("setFooterPos()", 3000);

}, true);


