// Import Navbar, Hero, Movies, Footer Component
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import { useState } from "react";
import data from "../utils/constants/data";

/**
 * Membuat Component Home.
 * Menampilkan Halaman Home.
 */
function Home() {
  /**
   * Mengangkat stave movies: lifting state.
   * Dari Component Movies ke Component Home.
   * Agar bisa digunakan oleh Component yang lain.
   */
  const [movies, setMovies] = useState(data);
  const [pageName, setPageName] = useState('Lastest Movie');

  return (
    <>
      <Hero />
      {/* Mengirim props: state movies */}
      <Movies movies={movies} setMovies={setMovies} pageName={pageName} />
      <AddMovieForm movies={movies} setMovies={setMovies} />
    </>
  );
}

export default Home;
