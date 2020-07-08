$(document).ready(() => {
    $('#searchForm').on('submit', (e) =>{
        let searchText = ($('#searchText').val());
        getMovies(searchText);
        e.preventDefault();
    })
});

function getMovies(searchText) {
    console.log(searchText);
    axios.get('http://www.omdbapi.com?s='+ searchText+'&apikey=69dd3150')
        .then((response) => {
            console.log(response);
            let movies = response.data.Search;
            let output = '';
            $.each(movies, (index, movie) => {
                output += `
                <div class=["col-md-3">
                <div class="well text-center">
                <img src ="${movie.Poster}" alt ="movie poster">
                <h5>${movie.Title}</h5>
                <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
                </div>
               </div>
                `;

            });
            $('#movies').html(output);
        })
    .catch((err) => {
        console.log(err);
    });
}