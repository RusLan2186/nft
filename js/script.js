// ................BURGER................................................

$(document).ready(function () {
   // на header burger вешаем событие клик
   $('.header__burger').click(function (event) {
      // при клике на бургер и хедер меню добавился класс aktive (нажали-добав класс, нажали-убрался класс) 
      $('.header__burger, .sidebar').toggleClass('active');
      // при открытом бургере блокируем прокрутку страницы
      $('body').toggleClass('lock');
   });
});

// закрытие бургера, при нажатии на меню
const headerLinks = document.querySelectorAll('.header__menu')
headerLinks.forEach((el) => {
   el.addEventListener('click', () => {
      $('.header__burger,.header__menu').toggleClass('active');
   })
})

// ............................................................................................................
var time = 3, cc = 1;
$(window).scroll(function () {
   $('#counter').each(function () {
      var
         cPos = $(this).offset().top,
         topWindow = $(window).scrollTop();
      if (cPos < topWindow + 500) {
         if (cc < 2) {
            $('div').each(function () {
               var
                  i = 1,
                  num = $(this).data('num'),
                  step = 1000 * time / num,
                  that = $(this),
                  int = setInterval(function () {
                     if (i <= num) {
                        that.html(i);
                     }
                     else {
                        cc = cc + 2;
                        clearInterval(int);
                     }
                     i++;
                  }, step);
            });
         }
      }
   });
});

// Скрытие placeholdera при фокусе

$('.search__input').focus(function (e) {
   var $self = $(this);
   $self.data('placeholder-tmp', $self.attr('placeholder'));
   $self.attr('placeholder', '');

});

$('.search__input').blur(function (e) {
   var $self = $(this);

   $self.attr('placeholder', $self.data('placeholder-tmp'));
});



$(document).ready(function () {
   // на header burger вешаем событие клик
   $('.right__header_design-arrows').click(function (event) {
      // при клике на бургер и хедер меню добавился класс aktive (нажали-добав класс, нажали-убрался класс) 
      $('.right__header_design-arrows, .right__header-link').toggleClass('active');
      // при открытом бургере блокируем прокрутку страницы

   });
});
// .........................TABS.................................
$(document).ready(function () {
   $('.tabs__items-link').click(function (e) {
      e.preventDefault()

      // класс где лежать ссылки(табы)
      // 2класс - тело, где лежить контент
      $('.tabs__items-link').removeClass('tabs__items-link--active');
      $('.tabs__block').removeClass('tabs-block--active');

      $(this).addClass('tabs__items-link--active');
      $($(this).attr('href')).addClass('tabs-block--active')

   });
   $('.tabs__items-link:first').click();

});

$(document).ready(function () {
   // на header burger вешаем событие клик
   $('.collection__snape').click(function (event) {
      // при клике на бургер и хедер меню добавился класс aktive (нажали-добав класс, нажали-убрался класс) 
      $('.collection__snape,.body-items__info').toggleClass('active');
      // при открытом бургере блокируем прокрутку страницы

   });
});
$(document).ready(function () {
   // на header burger вешаем событие клик
   $('.collection__snape1').click(function (event) {
      // при клике на бургер и хедер меню добавился класс aktive (нажали-добав класс, нажали-убрался класс) 
      $('.collection__snape1,.body-items__info1').toggleClass('active1');
      // при открытом бургере блокируем прокрутку страницы

   });
});
$(document).ready(function () {
   // на header burger вешаем событие клик
   $('.collection__snape2').click(function (event) {
      // при клике на бургер и хедер меню добавился класс aktive (нажали-добав класс, нажали-убрался класс) 
      $('.collection__snape2,.body-items__info2').toggleClass('active2');
      // при открытом бургере блокируем прокрутку страницы

   });
});
$(document).ready(function () {
   // на header burger вешаем событие клик
   $('.collection__snape3').click(function (event) {
      // при клике на бургер и хедер меню добавился класс aktive (нажали-добав класс, нажали-убрался класс) 
      $('.collection__snape3,.body-items__info3').toggleClass('active3');
      // при открытом бургере блокируем прокрутку страницы

   });
});

// спойлер-аккордион 
$(document).ready(function () {
   // ссылка, на которую нажимаем 
   $('.spoiler__link').click(function (event) {
      // общий класс спойлера
      if ($('.nfts-all__spoiler').hasClass('one')) {
         // ссылка, на которую нажимаем 
         $('.spoiler__link').not($(this)).removeClass('hidden');
         // блок который идет сразу после ссылки
         $('.tabs-block').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('hidden').next().slideToggle(300);
   });
});