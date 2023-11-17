<<<<<<< Updated upstream
import React, { useState, useEffect } from 'react';
import axios from 'axios';
=======
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../globals.css";
>>>>>>> Stashed changes

const ListFilm = () => {
  const [jsonData, setJsonData] = useState([]);
  const [genres, setGenres] = useState([]);
<<<<<<< Updated upstream
  const [selectedGenre, setSelectedGenre] = useState('');
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedAlphabet, setSelectedAlphabet] = useState('');
  const [sortedMovies, setSortedMovies] = useState([]);
  const [moviesLoaded, setMoviesLoaded] = useState(false);

  useEffect(() => {
    axios({
      method: 'post',
      url: 'http://localhost:8085/ProjetBack_end/ServletUserInfo/listeFilm',
      timeout: 4000,
    })
      .then(response => {
=======
  const [selectedGenre, setSelectedGenre] = useState("");
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedAlphabet, setSelectedAlphabet] = useState("");
  const [sortedMovies, setSortedMovies] = useState([]);

  useEffect(() => {
    axios({
      method: "post",
      url: "http://localhost:8080/ProjetBack_end/ServletUserInfo/listeFilm",
      timeout: 4000,
    })
      .then((response) => {
>>>>>>> Stashed changes
        const movies = response.data;
        setJsonData(movies);

        const allGenres = movies.reduce((acc, movie) => {
          if (movie.genre) {
<<<<<<< Updated upstream
            const movieGenres = movie.genre.split(',').map((genre) => genre.trim());
=======
            const movieGenres = movie.genre
              .split(",")
              .map((genre) => genre.trim());
>>>>>>> Stashed changes
            acc = acc.concat(movieGenres);
          }
          return acc;
        }, []);

        const nonEmptyGenres = allGenres.filter((genre) => genre !== "");
        const uniqueGenres = [...new Set(nonEmptyGenres)];
        setGenres(uniqueGenres);

        const allYears = movies.map((movie) => movie.annee);
        const nonEmptyYears = allYears.filter((year) => year !== "");
        const uniqueYears = [...new Set(nonEmptyYears)].sort((a, b) => b - a);
        setYears(uniqueYears);

        const allLanguages = movies.map((movie) => movie.langue);
<<<<<<< Updated upstream
        const nonEmptyLanguages = allLanguages.filter((language) => language !== "");
        const uniqueLanguages = [...new Set(nonEmptyLanguages)];
        setLanguages(uniqueLanguages);

        
      })
      .catch(error => {
        console.error('Error fetching data:', error);
=======
        const nonEmptyLanguages = allLanguages.filter(
          (language) => language !== ""
        );
        const uniqueLanguages = [...new Set(nonEmptyLanguages)];
        setLanguages(uniqueLanguages);
        setSortedMovies(jsonData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
>>>>>>> Stashed changes
      });
  }, []);

  useEffect(() => {
    handleSortClick();
  }, [jsonData]);

<<<<<<< Updated upstream
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

=======
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
>>>>>>> Stashed changes

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleAlphabetChange = (event) => {
    setSelectedAlphabet(event.target.value);
  };

  const handleSortClick = () => {
<<<<<<< Updated upstream
     let filteredMovies = jsonData;

  if (selectedGenre) {
    filteredMovies = filteredMovies.filter((movie) =>
      movie.genre && movie.genre.toLowerCase().includes(selectedGenre.toLowerCase())
    );
  }

  if (selectedYear) {
    filteredMovies = filteredMovies.filter(
      (movie) => movie.annee && movie.annee.toString() === selectedYear
    );
  }

  if (selectedLanguage) {
    filteredMovies = filteredMovies.filter(
      (movie) => movie.langue && movie.langue.toLowerCase() === selectedLanguage.toLowerCase()
    );
  }

  if (selectedAlphabet) {
    filteredMovies = filteredMovies.filter(
      (movie) => movie.titre && movie.titre.toLowerCase().startsWith(selectedAlphabet.toLowerCase())
    );
  }
  
    setSortedMovies(filteredMovies.length > 0 ? filteredMovies : jsonData);
  };

  const resetFilters = () => {
    setSelectedGenre('');
    setSelectedYear('');
    setSelectedLanguage('');
    setSelectedAlphabet('');
    setSortedMovies(jsonData)
=======
    let filteredMovies = jsonData;

    if (selectedGenre) {
      filteredMovies = filteredMovies.filter(
        (movie) =>
          movie.genre &&
          movie.genre.toLowerCase().includes(selectedGenre.toLowerCase())
      );
    }

    if (selectedYear) {
      filteredMovies = filteredMovies.filter(
        (movie) => movie.annee && movie.annee.toString() === selectedYear
      );
    }

    if (selectedLanguage) {
      filteredMovies = filteredMovies.filter(
        (movie) =>
          movie.langue &&
          movie.langue.toLowerCase() === selectedLanguage.toLowerCase()
      );
    }

    if (selectedAlphabet) {
      filteredMovies = filteredMovies.filter(
        (movie) =>
          movie.titre &&
          movie.titre.toLowerCase().startsWith(selectedAlphabet.toLowerCase())
      );
    }

    setSortedMovies(filteredMovies.length > 0 ? filteredMovies : []);
  };

  const resetFilters = () => {
    setSelectedGenre("");
    setSelectedYear("");
    setSelectedLanguage("");
    setSelectedAlphabet("");
    setSortedMovies(jsonData);
>>>>>>> Stashed changes
  };

  const renderMovies = () => {
    if (sortedMovies.length === 0) {
      return <p>Aucun film trouvé.</p>;
    }

    return (
<<<<<<< Updated upstream
      <ul>
        {sortedMovies.map((movie) => (
          <li key={movie.id}>{movie.titre} {movie.annee}</li>
=======
      <ul class="listefilms">
        {sortedMovies.map((movie) => (
          <li key={movie.id}>
            <div>{movie.titre}</div> <div>{movie.annee}</div>
          </li>
>>>>>>> Stashed changes
        ))}
      </ul>
    );
  };

  return (
<<<<<<< Updated upstream
    <div>
      <select id="genreSelect" value={selectedGenre} onChange={handleGenreChange}>
=======
    <div className="listefilmdiv">
      <select
        id="genreSelect"
        value={selectedGenre}
        onChange={handleGenreChange}
      >
>>>>>>> Stashed changes
        <option value="">GENRE</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <select id="yearSelect" value={selectedYear} onChange={handleYearChange}>
        <option value="">DATE SORTIE</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

<<<<<<< Updated upstream
      <select id="languageSelect" value={selectedLanguage} onChange={handleLanguageChange}>
=======
      <select
        id="languageSelect"
        value={selectedLanguage}
        onChange={handleLanguageChange}
      >
>>>>>>> Stashed changes
        <option value="">LANGUE</option>
        {languages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>

<<<<<<< Updated upstream
      <select id="alphabetSelect" value={selectedAlphabet} onChange={handleAlphabetChange}>
        <option value="">ABC</option>
        {alphabet.split('').map((letter) => (
=======
      <select
        id="alphabetSelect"
        value={selectedAlphabet}
        onChange={handleAlphabetChange}
      >
        <option value="">ABC</option>
        {alphabet.split("").map((letter) => (
>>>>>>> Stashed changes
          <option key={letter} value={letter}>
            {letter}
          </option>
        ))}
      </select>

<<<<<<< Updated upstream
      <button onClick={handleSortClick}>Trier</button>
      <button onClick={resetFilters}>Réinitialiser</button>
=======
      <button class="bouttonfiltre" onClick={handleSortClick}>
        Trier
      </button>
      <button class="bouttonfiltre" onClick={resetFilters}>
        Réinitialiser
      </button>
>>>>>>> Stashed changes

      {renderMovies()}
    </div>
  );
};

export default ListFilm;
