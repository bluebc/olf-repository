
// id="health" 건강스토리
$(document).ready(function(){
  var swiper = new Swiper(".swiper-container", {
    direction: "vertical",
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
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


// id=52prog 52프로젝트
$(document).ready(function(){
  var swiper3 = new Swiper(".swiper-container3", {
    slidesPerView: 3, // 뷰포인트
    slidesOffsetBefore: 70, // 간격
    slidesOffsetAfter: 20, //간격
    centeredSlides: true,
    loop: true,
    loopedSlides: 2,
    loopFillGroupWithBlank : true,
    breakpoints: {
      // 화면의 넓이가 768px 
      769: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2,
        grid: {
          rows: 3,
        },
        
      },
    },
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


// id="event" 이벤트&행사 
$(document).ready(function(){
    var swiper2 = new Swiper(".swiper-container2", {
      loop:true,
      slidesPerView: 5,
      spaceBetween: 300,
      slidesOffsetBefore: 20,
      slidesOffsetAfter: 20,
      centeredSlides: true,
      breakpoints: {
        // 화면의 넓이가 768px 
        769: {
          slidesPerView: 5
        },
        768: {
          slidesPerView: 1,
        },
      },
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