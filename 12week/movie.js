const APIKEY = "60b66408470eb39a691fd33d4b05cb15"
const image="" //이미지 나중 삽입

const options={
    method: "GET",
    headers {
        //헤더 설정 나중에 하기 일단 주석처리
    }
};

const now_playingURL="https://api.themoviedb.org/3/movie/now_playing?api_key="+APIKEY+"&language=en-US&page=1"
const now_playing=document.getElementById("now_playing");

fetch(now_playingURL)
    .then(response => response.json())
    .then(response => {
        response.results.forEach(element) => {
            console.log(element.backdrop_path);
            console.log(element.title);
            console.log(element.vote_averages);

            let movie = document.createElement("li");
            let moviediv = document.createElement("div");
            let backdrop = document.createElement("img");
            let title=document.createElement("h4");
            title.innerText=element.title;
            let rate = document.createElement("span");
            rate.innerText=element.vote_averages;
            moviediv.appendChild(backdrop);
            moviediv.appendChild(title);
            moviediv.appendChild(rate);
            movie.appendChild(moviediv);
            now_playing.appendChild(movie);
        });

    });
