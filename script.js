const memoji = document.querySelector("#memoji");
const h2HeaderAnimation = document.querySelector("#animation-h2");
const progettiLink = document.querySelector("#nav-p-progetti");
const certificazioneLink = document.querySelector("#nav-p-certificazioni");
const contattiLink = document.querySelector("#nav-p-contatti");
const titolo = document.querySelector("h1");

const memojiFoto = [
  "Foto_MemojiPc.png",
  "Foto_MemojiPollice.png",
  "Foto_MemojiSaluto.png",
  "Foto_MemojiSanto.png",
];

//Inizio Header con animazioni,memoji ecc.
setTimeout(() => {
  memoji.src = "Finish_Memoji.png";
}, 8500);

setTimeout(() => {
  setTimeout(() => {
    h2HeaderAnimation.innerHTML = "F|";
  }, 200);

  setTimeout(() => {
    h2HeaderAnimation.innerHTML = "Fr|";
  }, 500);
  setTimeout(() => {
    h2HeaderAnimation.innerHTML = "Fro|";
  }, 800);
  setTimeout(() => {
    h2HeaderAnimation.innerHTML = "Fron| ";
  }, 1100);
  setTimeout(() => {
    h2HeaderAnimation.innerHTML = "Front| ";
  }, 1400);
  setTimeout(() => {
    h2HeaderAnimation.innerHTML = "Front-|";
  }, 1700);
  setTimeout(() => {
    h2HeaderAnimation.innerHTML = "Front-E|";
  }, 2000);
  setTimeout(() => {
    h2HeaderAnimation.innerHTML = "Front-En|";
  }, 2300);
  setTimeout(() => {
    h2HeaderAnimation.innerHTML = "Front-End|";
  }, 2600);
  setTimeout(() => {
    h2HeaderAnimation.innerHTML = "Front-End";
  }, 2900);
  setTimeout(() => {
    h2HeaderAnimation.innerHTML = "Front-End D|";
  }, 3000);
  setTimeout(() => {
    h2HeaderAnimation.innerHTML = "Front-End De|";
  }, 3100);
  setTimeout(() => {
    h2HeaderAnimation.innerHTML = "Front-End Dev|";
  }, 3200);
  setTimeout(() => {
    h2HeaderAnimation.innerHTML = "Front-End Deve|";
  }, 3400);
  setTimeout(() => {
    h2HeaderAnimation.innerHTML = "Front-End Devel|";
  }, 3500);
  setTimeout(() => {
    h2HeaderAnimation.innerHTML = "Front-End Develo|";
  }, 3600);
  setTimeout(() => {
    h2HeaderAnimation.innerHTML = "Front-End Develop|";
  }, 3700);
  setTimeout(() => {
    h2HeaderAnimation.innerHTML = "Front-End Develope|";
  }, 3900);
  setTimeout(() => {
    h2HeaderAnimation.innerHTML = "Front-End Developer";
  }, 4000);
}, 1500);

setTimeout(() => {
  progettiLink.addEventListener("mouseover", () => {
    memoji.src = `${memojiFoto[0]}`;
    memoji.classList.add("memojiChange");
    setTimeout(() => {
      memoji.classList.remove("memojiChange");
    }, 1100);
  });
}, 8600);

setTimeout(() => {
  certificazioneLink.addEventListener("mouseover", () => {
    memoji.src = `${memojiFoto[1]}`;
    memoji.classList.add("memojiChange");
    setTimeout(() => {
      memoji.classList.remove("memojiChange");
    }, 1100);
  });
}, 8600);

setTimeout(() => {
  contattiLink.addEventListener("mouseover", () => {
    memoji.src = `${memojiFoto[3]}`;
    memoji.classList.add("memojiChange");
    setTimeout(() => {
      memoji.classList.remove("memojiChange");
    }, 1100);
  });
}, 8600);

setTimeout(() => {
  titolo.addEventListener("mouseover", () => {
    memoji.src = `${memojiFoto[2]}`;
    memoji.classList.add("memojiChange");
    setTimeout(() => {
      memoji.classList.remove("memojiChange");
    }, 1100);
  });
}, 8600);
function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}
//Fine Header
// Inizializza Swiper
var swiper = new Swiper(".swiper-container", {
  effect: "coverflow", // Effetto Coverflow
  grabCursor: true, // Cursore a mano quando si passa sopra le card
  centeredSlides: true, // Centra la slide attiva
  loop: true, // Loop infinito per scorrere continuamente le slide
  slidesPerView: "auto", // Mostra automaticamente le slide
  coverflowEffect: {
    rotate: 30, // Angolo di rotazione
    stretch: 10, // Stretching delle slide
    depth: 100, // Profondità dell'effetto
    modifier: 2, // Modificatore dell'effetto
    slideShadows: true, // Ombre per le slide
  },
  pagination: {
    el: ".swiper-pagination", // Punti di paginazione
    clickable: true, // Rendi i punti cliccabili
  },
  navigation: {
    nextEl: ".swiper-button-next", // Pulsante avanti
    prevEl: ".swiper-button-prev", // Pulsante indietro
  },
  autoplay: {
    delay: 5000, // 6 secondi di pausa tra le slide
    disableOnInteraction: false, // Continua l'autoplay anche dopo un'interazione
  },
});
