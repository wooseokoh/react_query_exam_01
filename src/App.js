import React from "react";
import { useQuery } from "react-query";

function App() {
  const { isLoading, error, data } = useQuery("movieList", () =>
    fetch("https://yts.mx/api/v2/list_movies.json?with_images=true").then(
      (res) => res.json()
    )
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <ul>
        {data.data.movies.map((movie) => (
          <li>
            <h1>제목 : {movie.title_long}</h1>
            <ul>
              <li>번호 : {movie.id}</li>
              <li>장르 : {movie.genres}</li>
              <li>상영시간 : {movie.runtime}분</li>
              <li>줄거리 : {movie.summary}</li>
            </ul>
            <img src={movie.large_cover_image} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
