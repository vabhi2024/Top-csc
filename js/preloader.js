// preloader
const firstVisit = localStorage.getItem("preloaderShown");

  if (firstVisit) {
  document.getElementById("preloader").style.display = "none";
  } else {
    setTimeout(() => {
      document.getElementById("preloader").style.opacity = "0";
      setTimeout(() => {
        document.getElementById("preloader").style.display = "none";
      }, 700);
    }, 5000);

     localStorage.setItem("preloaderShown", "true");
  }


// Type witter
let text = "─── TOP CSC ───";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("autoType").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}

type();