var searchInput = document.querySelector('#search-input');



function getWeatherData(event) {
  var searchText = searchInput.value.trim()
  event.preventDefault;

  if (submit && searchText) {
    fetch()
  }
}


function init() {
  searchInput.addEventListener('submit', getWeatherData);
}

init()



/* 
<div class="col-lg-9 pb-3">
  <section id="today" class="mt-3" role="region" aria-live="polite"></section>
  <section id="forecast" class="row mt-3" role="region" aria-live="polite"></section>
</div> 
*/


