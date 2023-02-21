"use strict";
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
const question = prompt("Один из последних просмотренных фильмов?", "");
const answer = prompt("На сколько оцените его?", "");
personalMovieDB.movies[question] = answer;
console.log(personalMovieDB)