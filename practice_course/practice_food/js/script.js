"use strict"
document.addEventListener("DOMContentLoaded", () => {

    //Tabs

    const tabs = document.querySelectorAll(".tabheader__item"),
          tabsContent = document.querySelectorAll(".tabcontent"),
          tabParent = document.querySelector(".tabheader__items");
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add("hide");
            item.classList.remove("show", "fade"); 
        })

        tabs.forEach(item => {
            item.classList.remove("tabheader__item_active");
        })
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add("show", "fade");
        tabsContent[i].classList.remove("hide");
        tabs[i].classList.add("tabheader__item_active");
    }

    hideTabContent();
    showTabContent();

    tabParent.addEventListener("click", event => {
        const target = event.target;

        if (target && target.classList.contains("tabheader__item")) {
            tabs.forEach((item, i) => {
                if (target === item) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })

    // Timer

    const deadline = "2023-03-15";

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - new Date(),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60)) % 24),
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);
        return {
            "total": t,
            "days": days,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num <= 9) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector("#days"),
              hours = timer.querySelector("#hours"),
              minutes = timer.querySelector("#minutes"),
              seconds = timer.querySelector("#seconds"),
              timeInterval = setInterval(updateClock, 1000); 

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
            
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        
        }
    }
    setClock(".timer", deadline);

    //Modal

    const modalTrigger = document.querySelectorAll("[data-modal]"),
          modal = document.querySelector(".modal");
    
    function modalClose() {
        modal.classList.add("hide");
        modal.classList.remove("show");
        document.body.style.overflow = "";
    }

    function modalOpen() {
        modal.classList.add("show");
        modal.classList.remove("hide");
        document.body.style.overflow = "hidden";
        clearInterval(modalTimeId);
    }
    
    function showModal() {
        modalTrigger.forEach(item => {
        item.addEventListener("click", event => {
            const target = event.target;

            if (target && target.classList.contains("btn")) {
                modalOpen();
            }
            });
        });
    }

    function hideModal() {
        modal.addEventListener("click", event => {
            const target = event.target;

            if (target === modal || target.getAttribute("data-close") == "") {
                modalClose();
            }
        });

        document.addEventListener("keydown", event => {
            if (event.code === "Escape" && modal.classList.contains("show")) {
                modalClose();
            }
        })
    }

    showModal();
    hideModal();
    
    const modalTimeId = setTimeout(modalOpen, 60000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= 
        document.documentElement.scrollHeight) {
            window.removeEventListener("scroll", showModalByScroll);
            modalOpen();
        }
    }
    
    window.addEventListener("scroll", showModalByScroll);

    // Карточки с использованием классов

    class MenuCard {
        constructor(src, alt, subtitle, descr, price, parent, ...classes) {
            this.src = src;
            this.alt = alt; 
            this.subtitle = subtitle;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent =  document.querySelector(parent);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        create() {
            const element = document.createElement("div");

            if (this.classes.length === 0) {
                this.element = "menu__item";
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            this.parent.append(element);
            element.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">Меню "${this.subtitle}"</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>`;
        }
    }

    const fitnes = new MenuCard("img/tabs/vegy.jpg",
     "vegy",
     "Фитнес",
     "Меню 'Фитнес' \
    - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт \
    активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой \
    и высоким качеством!", 
     9, 
    ".menu__field .container");

    const elite = new MenuCard(
     "img/tabs/elite.jpg",
     "elite",
     "Премиум", 
     "Меню 'Постное' \
     - это тщательный подбор ингредиентов: полное отсутствие продуктов животного \
     происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество\
      белков за счет тофу и импортных вегетарианских стейков.",
     14, 
     ".menu__field .container"); 

    
    const post = new MenuCard(
     "img/tabs/post.jpg",
     "post",
     "Постное",
     "Меню 'Постное' \
    - это тщательный подбор ингредиентов: полное отсутствие продуктов животного \
    происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество \
    белков за счет тофу и импортных вегетарианских стейков.",
     14,
     ".menu__field .container");
    
    
    fitnes.create();
    elite.create();
    post.create();

    // Обработка данных из формы
    
    const forms = document.querySelectorAll("form");

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо, мы скоро с вами свяжемся!',
        failure: 'Что-то пошло не так...' 
    };

    forms.forEach(item => {
        postData(item);
    })

    function postData(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const statusMessage = document.createElement("img");
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            // form.append(statusMessage);
            form.insertAdjacentElement("afterend", statusMessage);

            const formData = new FormData(form);

            const object = {};
            formData.forEach((value, key) => {
                object[key] = value;
            });


            fetch("server.php", {
                method: "POST",
                body: JSON.stringify(object),
                headers: {
                    'Content-type': 'aplication/json'
                }
            }).then(data => data.text()
            ).then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally( () => {
                form.reset();
            })
        }); 
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector(".modal__dialog");

        prevModalDialog.classList.add("hide");
        modalOpen();

        const thanksModal = document.createElement("div");
        thanksModal.classList.add("modal__dialog");
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div data-close="" class="modal__close">×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            prevModalDialog.classList.remove("hide");
            prevModalDialog.classList.add("show");
            thanksModal.remove();
            modalClose();
        }, 4000);
    }

});