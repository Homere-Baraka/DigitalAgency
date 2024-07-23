const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});

window.addEventListener("click", (event) => {
  if (event.target === mobileMenu) {
    mobileMenu.classList.add("hidden");
  }
});

// La partie service

const icons = document.querySelectorAll('.icon');
const blocs = document.querySelectorAll('.cache');

blocs.forEach((bloc, index) => {
  if (index >= 3) {
    bloc.style.display = 'none';
  }
});


icons.forEach((icon, index) => {
  icon.addEventListener('click', () => {
    
    blocs.forEach((bloc) => {
      bloc.style.display = 'block';
    });

    const targetBlocId = icon.getAttribute('data-target');
    const targetBloc = document.getElementById(targetBlocId);
    if (targetBloc) {
      targetBloc.style.display = 'block';

      let visibleBlockCount = 3;
      blocs.forEach((bloc) => {
        if (bloc.style.display !== 'none') {
          visibleBlockCount++;
        }
      });
      if (visibleBlockCount > 3) {
        blocs[0].style.display = 'none';
      }
    }
  });
});


// la partie de nos partenaires

const sliderImages = document.querySelectorAll("#slider");
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");

let currentIndex = 0;
let autoSlideInterval;

function showSlide(index) {
  sliderImages.forEach((image, i) => {
    if (i === index) {
      image.style.transform = "translateX(0)";
    } else {
      image.style.transform = `translateX(${(i - index) * 10}%)`;
    }
  });
}

function startAutoSlide() {
  autoSlideInterval = setInterval(slideNext, 1000); // Change slide every 3 seconds
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

function slideNext() {
  currentIndex = (currentIndex + 1) % sliderImages.length;
  showSlide(currentIndex);
}

function slidePrev() {
  currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
  showSlide(currentIndex);
}

leftArrow.addEventListener("click", () => {
  stopAutoSlide();
  slidePrev();
});

rightArrow.addEventListener("click", () => {
  stopAutoSlide();
  slideNext();
});

sliderImages.forEach((image) => {
  image.addEventListener("mouseover", () => {
    stopAutoSlide();
  });

  image.addEventListener("mouseout", () => {
    startAutoSlide();
  });
});

startAutoSlide(); // Start the automatic slide

// la partie commentaire des utilisateurs

const left = document.getElementById("leftArrow");
const right = document.getElementById("rightArrow");
let currentCount = 1;
const divs = document.querySelectorAll("#user-comment");
const users = document.querySelectorAll("#dev");

right.addEventListener("click", (e) => {
  currentCount++;
  if (currentCount === divs.length + 1) {
    currentCount = 1;
  }
  divs.forEach((div, index) => {
    if (div.dataset.count == currentCount && div.classList.contains("hidden")) {
      div.classList.remove("hidden");
      users[index].classList.remove("opacity-30");
    } else {
      div.classList.add("hidden");
      users[index].classList.add("opacity-30");
    }
  });
});

left.addEventListener("click", (e) => {
  currentCount--;
  if (currentCount < 1) {
    currentCount = divs.length;
  }
  divs.forEach((div, index) => {
    if (div.dataset.count == currentCount && div.classList.contains("hidden")) {
      div.classList.remove("hidden");
      users[index].classList.remove("opacity-30");
    } else {
      div.classList.add("hidden");
      users[index].classList.add("opacity-30");
    }
  });
});

