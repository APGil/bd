var test = document.getElementsByName("s1").innerHTML;
var second = document.getElementsByName("s2").innerHTML;
var third = document.getElementsByName("s3").innerHTML;
var forth = document.getElementsByName("s4").innerHTML;
/*
$("s1").click(function () {
    "use strict";
    var htmlString = $(this).html();
    $(this).text(htmlString);
});


$(function () {
    "use strict";
    var rawString = "<input type='text' name='s1' class='ss1' value=''>";
    var cleanString = $(rawString).html(); // ... or .text()
    $('#content').append(cleanString);
});
*/

function graf() {
    "use strict";
    document.getElementById("graph").className = "bubble";
    document.getElementById("survey").className = "no_inf";
    document.getElementById("optxt1").innerHTML = test;
    document.getElementById("optxt2").innerHTML = second;
    document.getElementById("optxt3").innerHTML = third;
    document.getElementById("optxt4").innerHTML = forth;
    
}
/*
function copyHtml(source, destination) {
    "use strict";
    var clone = source.ownerDocument === destination.ownerDocument
        ? source.cloneNode(true)
        : destination.ownerDocument.importNode(source, true);
    while (clone.firstChild) {
        destination.appendChild(clone.firstChild);
    }
}*/