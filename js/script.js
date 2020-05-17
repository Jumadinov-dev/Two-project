$('.mobail__menu').on('click', function(event) {
    event.preventDefault();
    $('.menu__btn').toggleClass('menu__active')
    $('.menu__wrap').toggleClass('menu__active')
})

window.onload = function() {
    var scrolled;
    var timer;

    document.getElementById('top').onclick = function() {
        scrolled = window.pageYOffset;
        scrollToTop();
    }
    function scrollToTop() {
        if (scrolled > 0) {
            window.scrollTo(0, scrolled);
            scrolled = scrolled - 180;
            timer = setTimeout(scrollToTop, 30);
        }
        else {
            clearTimeout(timer);
            window.scrollTo(0,0);
        }
    }
}
$('#ven').on('click', function(event) {
    event.preventDefault();
});
$('#ven2').on('click', function(event) {
    event.preventDefault();
});

var botton = document.getElementById('botton');
    botton.addEventListener('click', function() {
        swal({
          title: "Акции",
          text: ".Наилучшая эстетика, прозрачность, цвет - диоксид циркония действительно лучший выбор для Ваших зубов!Теперь -50% мы сделали эти коронки более доступными 15000 рублей",
          icon: "success",
          button: "Закрыть",
        });
});

var botton = document.getElementById('botton2');
    botton.addEventListener('click', function() {
        swal({
          title: "Акции",
          text: ".Наилучшая эстетика, прозрачность, цвет - диоксид циркония действительно лучший выбор для Ваших зубов!Теперь -50% мы сделали эти коронки более доступными 15000 рублей",
          icon: "success",
          button: "Закрыть",
        });
});










