// Main section
const sliderPrevBtn = document.querySelector(".slider-prev");
const sliderNextBtn = document.querySelector(".slider-next");
const sliderImg = document.querySelector(".main-photo");
const sliderLeftContainer = document.querySelectorAll(".left-main-container"); 
console.log(sliderLeftContainer);
// Ofert section
const cardsTab = document.querySelectorAll(".card");
// Project-section
const btnMoreProjects = document.querySelector(".btn-more");
const masonryDiv = document.querySelector(".masonry-div");
const masonryGradientDiv = document.querySelector(".more-div");
const galleryImgs = document.querySelectorAll(".masonry-div img");
const galleryCloseBtn = document.querySelector(".fa-x");
const galleryDiv = document.querySelector(".preview-div");
const galleryMainImg = document.querySelector(".preview-img");
const galleryPrevBtn = document.querySelector(".fa-chevron-left");
const galleryNextBtn = document.querySelector(".fa-chevron-right");


// Main section slider
let slideLimit = sliderLeftContainer.length;
let currentPhoto = 1;

sliderPrevBtn.onclick = () => {
  if(currentPhoto > 1){
    currentPhoto -= 1;
    sliderImg.src = `Assets/Slider/photo${currentPhoto}.jpg`;
    sliderLeftContainer[currentPhoto-1].classList.toggle("display-none");
    sliderLeftContainer[currentPhoto-1].classList.toggle("d-flex");
    sliderLeftContainer[currentPhoto-0].classList.toggle("display-none");
    sliderLeftContainer[currentPhoto-0].classList.toggle("d-flex");
  } 
}
sliderNextBtn.onclick = () => {
  if(currentPhoto < slideLimit){
    currentPhoto += 1;
    sliderImg.src = `Assets/Slider/photo${currentPhoto}.jpg`;
    sliderLeftContainer[currentPhoto-1].classList.toggle("display-none");
    sliderLeftContainer[currentPhoto-1].classList.toggle("d-flex");
    sliderLeftContainer[currentPhoto-2].classList.toggle("display-none");
    sliderLeftContainer[currentPhoto-2].classList.toggle("d-flex");
  }
}



// masonry
const masonry = new Macy({
    container: '.masonry-div',
    columns: 3,
    margin: {
        x: 30,
        y: 40,
    },
    breakAt: {
        760: {
          margin: {
            x: 5,
            y: 5,
          },
          columns: 2
        }
    }
});


// more projects content lock
function moreContent(){
  btnMoreProjects.classList.toggle("display-none");
  masonryDiv.classList.toggle("masonry-div");
  masonryGradientDiv.classList.toggle("more-div");
}

btnMoreProjects.addEventListener("click", moreContent);

// gallery popup
window.onload = () => {
  galleryImgs.forEach( (element, index) => {
    element.onclick = () => {
      let current = index;

      clickedImg = element.src;
      galleryMainImg.src = clickedImg;

      galleryPrevBtn.onclick = () => {
        if(current > 0){
          let prevImg = galleryImgs[current -1].src;
          current-=1;
          galleryMainImg.src = prevImg;
        }
      }

      galleryNextBtn.onclick = () => {
        if(current < galleryImgs.length -1){
          let prevImg = galleryImgs[current +1].src;
          current+=1;
          galleryMainImg.src = prevImg;
        }
      }

      galleryDiv.classList.toggle("visibility-hidden");
      
    }
  });
}
galleryCloseBtn.onclick = () => {
  galleryDiv.classList.toggle("visibility-hidden");
  
}

// card onclick handle
cardsTab[0].onclick = () => {
  location.href = "#";
} 
cardsTab[1].onclick = () => {
  location.href = "#";
} 
cardsTab[2].onclick = () => {
  location.href = "#";
} 
