function toggleSearchBar() {
    var searchBar = document.getElementById("search-bar");
    searchBar.classList.toggle("hidden");
    
    if (searchBar.classList.contains("hidden")) {
      searchBar.style.backgroundColor = "initial";  // Reset to initial color
    } else {
      searchBar.style.backgroundColor = "black";  // Set the color to black
    }
}
  

const icon = document.getElementById('my-icon');
const searchTab = document.querySelector('.searchTab');

icon.addEventListener('click', function() {
  searchTab.classList.toggle('clicked');
});


function clearSearch() {
    // Get the search bar input element
    const searchBar = document.getElementById('search-bar');
  
    // Clear the value of the search bar
    searchBar.value = '';
  
    // Set focus back to the search bar
    searchBar.focus();
}
  

function clearSearch() {
    const searchBar = document.getElementById('search-bar');
    searchBar.value = ''; // Clear the search bar input value
    searchBar.classList.add('hidden'); // Hide the search bar
  }
  
const closeIcon = document.getElementById('search-close');
closeIcon.addEventListener('click', clearSearch);


function clearSearch() {
    const searchBar = document.getElementById('search-bar');
    const closeIcon = document.getElementById('search-close');
    
    searchBar.value = ''; // Clear the search bar input value
    searchBar.classList.add('hidden'); // Hide the search bar
    closeIcon.classList.add('hidden'); // Hide the close icon
} 


