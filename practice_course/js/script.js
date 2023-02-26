"use strict";
let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}
start();

function rememberMyFilms() {
    let i = 0;
    while (i != 2) {
        const question = prompt("Один из последних просмотренных фильмов?", ""),
                answer = prompt("На сколько оцените его?", "");
        if (question.length > 50 || question == "" || question == null 
        || answer == "" || answer == null) {
            continue;
        };
        personalMovieDB.movies[question] = answer;
        i++;
    }
}

function detectPersonalLevel() {
    if (numberOfFilms < 10) {
        console.log("Просмотренно довольно мало фильмов")
    } else if (numberOfFilms <= 30) {
        console.log("Вы классический зритель") 
    } else if (numberOfFilms > 30) {
        console.log("Вы киноман")
    } else {
        console.log("Произошла ошибка")
    };
}

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYouGenres() {
    for (let i = 1; i < 4; i++) {
        const genr = prompt(`Ваш любимый жанр фильмов под номером ${i}?`, ``);
        if (genr != null && genr != "" && isNaN(genr) != false) {
            personalMovieDB.genres.push(genr);
        } else {
            i--;
        }

    }
}

 