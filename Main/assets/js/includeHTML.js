
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.querySelectorAll('[include-html]');
  for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /* Get the value of the attribute: */
      file = elmnt.getAttribute("include-html");
      if (file) {
          /* Make an HTTP request using the attribute value as the file name: */
          xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                  elmnt.innerHTML = this.responseText;
                  /* Remove the attribute, and call this function again: */
                  elmnt.removeAttribute("include-html");
                  includeHTML();
              }
          }
          xhttp.open("GET", file, true);
          xhttp.send();
          /* Exit the function: */
          return;
      }
  }
}
includeHTML();