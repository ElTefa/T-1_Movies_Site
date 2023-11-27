var swiper = new Swiper(".popular_content", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    watchOverflow: true,
    grabCursor: true,
    watchSlidesProgress: true,
    breakpoints:{
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        510: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        758: {
            slidesPerView: 3,
            spaceBetween: 15,
        },         
        900: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});
let playbtn = document.querySelector(".play-movie");
let video = document.querySelector(".video_container");
let closebtn = document.querySelector(".close-video");
let myvideo = document.querySelector("#myvideo");

playbtn.onclick = () => {
    video.classList.add("show-video");
    myvideo.play()
}
closebtn.onclick = () => {
    video.classList.remove("show-video");
    myvideo.pause()
}
/* not work properly !! */
// window.addEventListener("click", function(event) {
//     if (event.target === video) {
//         video.style.display = "none"
//     }
// })