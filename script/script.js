if (window.SimpleAnime) {
  new SimpleAnime();
}

function initScrollSuave() {
  const linksInterno = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });

    //* Modo alternativo
    // const topo = section.offSetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth"
    // })
  }

  linksInterno.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();

function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  const listas = document.querySelectorAll(".tecnologo");
  if (sections.length && listas.length) {
    const windowMetade = window.innerHeight * 0.3;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
      listas.forEach((lista) => {
        const listaTop = lista.getBoundingClientRect().top - windowMetade;
        const isListaVisible = listaTop - windowMetade < 0;
        if (isListaVisible) {
          lista.classList.add("ativo");
        } else {
          lista.classList.remove("ativo");
        }
      });
    }
  }
  animaScroll();

  window.addEventListener("scroll", animaScroll);
}
initAnimacaoScroll();
