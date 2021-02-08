window.addEventListener('DOMContentLoaded', function() { // запускаем функцию после построения всего дом дерева

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'), // присваиваем переменную всех табов       
        info = document.querySelector('.info-header'), // переменная родителя табов
        tabContent = document.querySelectorAll('.info-tabcontent'); // переменная контента табов

    function hideTabContent(a) { // скрыть контент (технический аргумент необходим для подставления его в вызов функции чтобы отображать 1 конкретный в начале)
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1); // технический аргумент, отоброжать только первый контент

    function showTabContent(b) { // показать контент
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) { // событие клик с помощью делегирования событий (навешивание события на родителя)
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0); // скрыть все
                    showTabContent(i); // показать на который кликнули
                    break; // прервать
                }
            }
        }

    });
});