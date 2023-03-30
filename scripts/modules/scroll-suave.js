export default function initScrollSuave() {
  const linksInterno = document.querySelectorAll("[data-menu='fcMenu'] a[href^='#']");

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
