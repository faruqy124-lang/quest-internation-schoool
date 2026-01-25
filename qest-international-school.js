function popOut(){
    const pop = document.querySelector('.header-link-pages')
    if (pop.style.display === 'none'){
        pop.style.display = 'block'
    }else{
        pop.style.display = 'none'
    }
};
const slider = document.querySelector(".sliders");
const slides = document.querySelectorAll(".slide");
const indicatorsContainer = document.querySelector(".indicators");

let currentIndex = 1;
let slideWidth;

// Clone first & last slides
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.classList.add("clone");
lastClone.classList.add("clone");

slider.appendChild(firstClone);
slider.insertBefore(lastClone, slides[0]);

const allSlides = document.querySelectorAll(".slide");

function setSlideWidth() {
  slideWidth = allSlides[0].offsetWidth;
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

window.addEventListener("resize", setSlideWidth);

function moveToSlide() {
  slider.style.transition = "transform 0.8s ease-in-out";
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  updateIndicators();
}

slider.addEventListener("transitionend", () => {
  if (allSlides[currentIndex].classList.contains("clone")) {
    slider.style.transition = "none";
    currentIndex =
      currentIndex === 0 ? slides.length : 1;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
});

// Buttons
function nextButton() {
  currentIndex++;
  moveToSlide();
}

function previousButton() {
  currentIndex--;
  moveToSlide();
}

// Indicators
function createIndicators() {
  indicatorsContainer.innerHTML = "";

  slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("indicator");

    dot.addEventListener("click", () => {
      currentIndex = i + 1;
      moveToSlide();
    });

    indicatorsContainer.appendChild(dot);
  });

  updateIndicators();
}

function updateIndicators() {
  const dots = document.querySelectorAll(".indicator");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i + 1 === currentIndex);
  });
}

// Auto-slide
setInterval(() => {
  nextButton();
}, 53000);

// Init
setSlideWidth();
createIndicators();


const curriculum = [{
  image:'quest-image/Screenshot_2025-10-13_1.40.18_PM-removebg-preview.png',
  title:'kindergarten',
  curriculum:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
},
{
  image:'quest-image/Screenshot_2025-10-13_1.40.42_PM-removebg-preview.png',
  title:'primary school',
  curriculum:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
},
{
  image:"quest-image/Screenshot_2025-10-13_1.40.55_PM-removebg-preview.png",
  title:'secondary school',
  curriculum:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
}
]

let curriculumHTML="";
curriculum.forEach((curriculum)=>{
  curriculumHTML+=`
   <div class="title setting-curriculum">
            <div>
             <img class="image-curriculum" src=" ${curriculum.image}" alt="">
            </div>
            <div class="section title-header-curriculum">${curriculum.title}</div>
            <div class="section text-curriclum">
            ${curriculum.curriculum}
            </div>
            <div>
                <button class="section read-more">Read more</button>
            </div>
        </div>
`
})
console.log(curriculumHTML)
const curriculumDisplay = document.querySelector('.curriculum-display');
curriculumDisplay.innerHTML = curriculumHTML;

const containers = curriculumDisplay.querySelectorAll('.setting-curriculum');

containers[1].style.backgroundColor = 'red';
containers[2].style.backgroundColor = 'blue';



// array for school features

const feature = [{
  image: "quest-image/h2-icon-2.png",
  text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  name:"certicate"
},
{
  image: "quest-image/h2-icon-3.png",
  text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  name:"daycare"
},
{
  image: "quest-image/h2-icon-1.png",
  text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  name:"learning"
},
{
  image: "quest-image/h2-icon-4.png",
  text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  name:"outdoor"
},{
  image: "quest-image/h2-icon-5.png",
  text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  name:"healthy meal"
},
{
  image: "quest-image/h2-icon-6.png",
  text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  name:"events"
}]

featuresHTMl ="";
feature.forEach((feature)=>{
  featuresHTMl +=`
      <div class="features-containers">
          <div class="name-setting-display">
            <img src="${feature.image}" alt="" class="features-images">
            <p class="name-setting"> ${feature.name}
          </div>
          <div class="features-paragraph">
            ${feature.text}
          </div>
      </div>
  `
})
console.log(featuresHTMl);
document.querySelector('.features-display').innerHTML = featuresHTMl;

// create a watcher for each section
const section = document.querySelectorAll('.sections');

const observe = new IntersectionObserver ((entry)=>{
  entry.forEach(entries=>{
    if (entries.isIntersecting){
      entries.target.classList.add('visible');
      observe.unobserve(entries.target)
    }
  })
}, {threshold :0.2});

section.forEach(section => {  observe.observe(section); }); 


//using an array for the about profile 

const profile = [{
  image:"quest-image/icon5.jpg",
  class:"Nursery School",
  context:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus"
},{
  image:"quest-image/icon6.jpg",
  class:"Nursery School",
  context:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus"
},{
  image:"quest-image/icon4.jpg",
  class:"Nursery School",
  context:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus"
}]
profileHTML=""
profile.forEach((profile)=>{
  profileHTML +=`
      <div class="profile-display">
        <div>
           <img src="${profile.image}" class="content-profile">
        </div>
      <div>
          <div class="content-school-name">Nursery School</div>
          <div class="features-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus
        </div>
    </div>     
</div>
  `
})
console.log(profileHTML)
document.querySelector('.display-proflie').innerHTML = profileHTML


//swiping page or content using one html file. the saving of page was not successful but i works 
// we are still goiing to learn how make a page to save when i reload when i use one html page.
function showPages(pageId) {
  const pages = document.querySelectorAll('.pages');

  pages.forEach(page => {
    page.classList.remove('active');
  });

  const activePage = document.getElementById(pageId);
  activePage.classList.add('active');

  // animate sections in the active page
  const sections = activePage.querySelectorAll('.sections');

  sections.forEach(section => {
    section.classList.remove('visible');
    void section.offsetHeight;
    setTimeout(() => {
      section.classList.add('visible');
    }, 400);
  });
}
