var response = document.getElementsByClassName('.position-absolute');
var response2 = document.getElementsByClassName('.top-50');
var response3 = document.getElementsByClassName('.start-50 ');
var response4 = document.getElementsByClassName('.translate-middle');
var x = window.matchMedia('(max-width: 991.98px)');

if (x.matches) {
  response.className = '.position-absolute';
  response2.className = '.top-0';
  response3.className = '.start-50';
  response4.className = '.translate-middle';
}
