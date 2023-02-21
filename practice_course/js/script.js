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
    const question = prompt("Один из последних просмотренных фильмов?", "")
          answer = prompt("На сколько оцените его?", "");
    if (question.length > 50 || question == "" || question == null 
    || answer == "" || answer == null) {
        continue;
    };
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