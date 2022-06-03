import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

function TopRated() {
  // Simpan API KEY dan URL ke Variable
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/top_rated/?api_key=${API_KEY}`;
  console.log(API_KEY);

  // Membuat state movies
  const [movies, setMovies] = useState([]);
  const [pageName, setPageName] = useState('Top Rated');

  /**
   * Melakukan useEffect.
   * useEffect to perform other jobs: fetch data
   */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getTopRateds();
  }, []);

  async function getTopRateds() {
    /**
     * Menggunakan library axios.
     * Axios digunakan untuk melakukan fetch data.
     */
    const response = await axios(URL);

    /**
     * Simpan data movies dari axios ke state movies.
     * Upadte state menggunakan setMovies().
     */
    setMovies(response.data.results);
  }

  /**
   * Render Component Movies.
   * Kirim props movies yang berisi nilai state movies
   */
  return (
    <>
      <Hero />
      <Movies movies={movies} pageName={pageName} />
    </>
  );
}

export default TopRated;
