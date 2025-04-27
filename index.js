const moviesListEl = document.querySelector(".movies-list");
const id = localStorage.getItem("id")

async function onSearchChange(event) {
    const id = event.target.value;
    renderMovies(id)
}

async function renderMovies(id) {
  const movies = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=94c6a856&s=${id}`
  );
  const moviesData = await movies.json();
  console.log(moviesData);
  moviesListEl.innerHTML = moviesData.Search.map((movie) =>
    movieHTML(movie)
  ).join('');
}

function movieHTML(movie) {
  return `<div class="movies-card">
            <div class="movie-card__container">
                <h3>${movie.title}</h4>
                    <p><b>Year:</b> ${movie.year}</p>
                     <p><b>Poster:</b> 
                     <img src="${movie.poster}" alt=""></p>
                     <p>
            </div>
        </div>`
}

renderMovies(id);
