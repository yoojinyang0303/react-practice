import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({ img: "", title: "", desc_intro: "" });
  // console.log(x);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log("json.data.movie");
    console.log(json.data.movie);
    console.log(json.data.movie.description_intro);

    /*
    const [user, setUser] = 
	useState({name: "민수", grade: 1})
	setUser((current) => {
		const newUser = { ...current } // 값을 복사하여 새obj에 변경값 담기
		newUser.grade = 2;
		return newUser;
  })
*/
    setMovie((curr) => {
      const newMovie = { ...curr };
      newMovie.img = json.data.movie.background_image;
      newMovie.title = json.data.movie.title;
      newMovie.desc_intro = json.data.movie.description_intro;
      console.log("newMovie");
      console.log(newMovie);
      return newMovie;
    });
    // console.log("movie");
    // console.log(movie);
    // console.log("img");
    // console.log(json.data.movie.background_image);
  };

  useEffect(() => {
    getMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // return <h1>Detail...</h1>;
  return (
    <div>
      <h2>Detail of Movie {id} ...</h2>
      <h3>📽 Title -- {movie.title}</h3>
      <img src={movie.img} alt="movie img" />
      <div>
        <strong>Short Description</strong>
        <p>{movie.desc_intro}</p>
      </div>
    </div>
  );
}

export default Detail;
