"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

        while (personalMovieDB.count == "" || personalMovieDB.count == null
         || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотренно довольно мало фильмов")
        } else if (personalMovieDB.count <= 30) {
            console.log("Вы классический зритель") 
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман")
        } else {
            console.log("Произошла ошибка")
        }
    },
    showMyDB: function() {
        if (!personalMovieDB.private) {
            console.log(personalMovieDB);
        }
    },
    writeYouGenres: function() {
        for (let i = 1; i < 4; i++) {
            const genr = prompt(`Ваш любимый жанр фильмов под номером ${i}?`, ``);
            if (genr != null && genr != "" && isNaN(genr) != false) {
                personalMovieDB.genres.push(genr);
            } else {
                i--;
            }
        }
        personalMovieDB.genres.forEach(function(item, i) {
            console.log(`Любимый жанр #${i + 1} - это ${item}`)
        })
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    }
};
personalMovieDB.start();
personalMovieDB.writeYouGenres();
