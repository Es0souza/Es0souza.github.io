export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll("[data-item='scroll']");
  const listas = document.querySelectorAll(".tecnologo__lista");
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
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
