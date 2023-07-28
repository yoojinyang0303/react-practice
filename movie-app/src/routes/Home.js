import { useState, useEffect } from "react";
import Movie from "../components/Movie";

// api link_  https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  /*
    // fetch .then .catch 방식  __ 요즘은 잘...
    useEffect(() => {
      fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      )
        .then((response) => response.json())
        .then((json) => {
          setMovies(json.data.movies);
          setLoading(false);
        });
    }, []);
    */

  // async-aswait 사용이 추천/트렌드
  const getMovies = async () => {
    // rating=8.8 이상의 영화만 보여주는 api 주소 호출
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              mediumCoverImage={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
