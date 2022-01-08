const loader = document.querySelector(".loader");
const content = document.querySelector(".container");

function load() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';

    content.style.display = 'block';
    setTimeout(() => {
      content.style.opacity = 1;
    }, 1000);
  }, 6000);
}

load();
