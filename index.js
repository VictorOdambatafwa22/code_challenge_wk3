const movies=document.querySelector("#movies")

function Fetch_all_movies(){
    fetch("http://localhost:3000/films")
   .then(Response=>Response.json())
   .then(movies=>{
    console.log(movies)
   })
    }

    Fetch_all_movies();

