"use strict";
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
let i = 0;
while (i != 2) {
    const question = prompt("Один из последних просмотренных фильмов?", "");
    if (question.length > 50 || question.length == 0) {
        continue;
    };
    const answer = prompt("На сколько оцените его?", "");
    personalMovieDB.movies[question] = answer;
    i++;
};
if (numberOfFilms < 10) {
    console.log("Просмотренно довольно мало фильмов")
} else if (numberOfFilms <= 30) {
    console.log("Вы классический зритель") 
} else if (numberOfFilms > 30) {
    console.log("Вы киноман")
} else {
    console.log("Произошла ошибка")
};
console.log(personalMovieDB)