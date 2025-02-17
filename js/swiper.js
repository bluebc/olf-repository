
// id="health"
$(document).ready(function(){
  var swiper = new Swiper(".swiper-container", {
    direction: "vertical",
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    freemode: true,
    centeredSlides: true,
    auotplau :{

    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on:{
      // 1. 초기화 이전에 슬라이드 복제
      beforeInit:slideClone,
      // 2. 활성 pagination 순환하기
      slideChange:function(instance){
        swiperPaginationLoop(instance) 
      }
    }
  })
});


/* 2. 활성 pagination 순환하기 */
function swiperPaginationLoop(instance){
  var currentIndex = instance.realIndex;
  // var slidesPerView = instance.params.slidesPerView;
  var loopedSlides = instance.slides.length / 2;

  // index가 루프할 슬라이드 개수를 초과하면
  if (currentIndex >= loopedSlides) {
    currentIndex -= loopedSlides; // 0번 인덱스로
  }

  // index pagination 활성화
  $(instance.pagination.bullets[currentIndex]).addClass('swiper-pagination-bullet-active');
}

/* 3. 루프할 슬라이드를 초과하는 pagination 숨기기 */
function paginationOverflow(index, className){
  // console.log(index);
  // console.log(this.slides.length);
  if (index > this.slides.length / 2 - 1) {
    return '';
  } else {
    return '<span class="' + className + '"></span>';
  }
}


// id="event" 
$(document).ready(function(){
    var swiper2 = new Swiper(".swiper-container2", {
      loop:true,
      slidesPerView: 5,
      spaceBetween: 300,
      slidesOffsetBefore: 20,
      slidesOffsetAfter: 20,
      centeredSlides: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      on:{
        // 1. 초기화 이전에 슬라이드 복제
        beforeInit:slideClone,
      }
    })
});




/* 1. 초기화 이전에 슬라이드 복제 */
function slideClone(tg){
  var swiperWrapper = tg.el.querySelector('.swiper-wrapper');
  var slides = swiperWrapper.querySelectorAll('.swiper-slide');

  // 복제하여 붙여넣기
  for (var i = 0; i < slides.length; i++) {
    var clone = slides[i].cloneNode(true);
    swiperWrapper.appendChild(clone);
  }
} // slideClone()