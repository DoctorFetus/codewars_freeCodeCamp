'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против всех",
        ]
    };
    
    const promoAdv = document.querySelectorAll(".promo__adv img"),
          promoBg = document.querySelector(".promo__bg"),
          promoGenre = promoBg.querySelector(".promo__genre"),
          movieList = document.querySelector(".promo__interactive-list"),
          addForm = document.querySelector("form.add"),
          addInput = addForm.querySelector(".adding__input"),
          addCheckbox = addForm.querySelector("[type='checkbox']");
    
    const films = (films, parent) => {
        parent.innerHTML = "";
        sortArr(films);

        films.forEach((item, index) => {
        item = item.length > 21 ? item.slice(0, 21) + "..." : item;
        parent.innerHTML += `
        <li class="promo__interactive-item">${index + 1} ${item}
            <div class="delete"></div>
        </li>`;
    });
        document.querySelectorAll(".delete").forEach((item, index) => {
            item.addEventListener("click", () => {
                item.parentElement.remove();
                films.slice(index, 1);

                films();
            })
        })
    }

    const deleteAdv = (adv) => {adv.forEach (item => {
        item.remove();
    });}

    const makeChanges = () => {promoGenre.textContent = "Драма";
    promoBg.style.backgroundImage = "url('img/bg.jpg')";}

    const sortArr = (arr) => {
        arr.sort();
    }

    addForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const newFilm = addInput.value,
              check = addCheckbox.checked;
        if (newFilm) {
            check ? console.log("Добавляем любимый фильм") : check;
            movieDB.movies.push(newFilm);
            films(movieDB.movies, movieList);
        }
        e.target.reset();
    })
    
    films(movieDB.movies, movieList);

    deleteAdv(promoAdv);

    makeChanges();
})
