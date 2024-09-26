
document.getElementById("page1").classList.add("active");

function goToPage(pageNumber) {
  // Hide all pages
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));

  // Show the requested page
  document.getElementById('page' + pageNumber).classList.add('active');
}
let currentPage = 1;
document.getElementById("page1").classList.add("active");

function goToPage(pageNumber) {
  const current = document.getElementById('page' + currentPage);
  const next = document.getElementById('page' + pageNumber);

  // Add leaving class to current page to animate the turn
  current.classList.remove('active');
  current.classList.add('leaving');

  // After animation ends, hide the previous page and reveal the next one
  setTimeout(() => {
    current.classList.remove('leaving');
    current.classList.add('hidden'); // Hide the previous page
    
    next.classList.remove('hidden'); // Show the next page
    next.classList.add('active'); // Make it the active page
  }, 1000); // 1 second corresponds to the transition time

  currentPage = pageNumber; // Update current page
}
