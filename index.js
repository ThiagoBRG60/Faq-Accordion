const accordions = [];

for (let i = 1; i <= 4; i++) {
  const imageAccordion = document.getElementById(`image${i}`);
  const question = document.getElementById(`question${i}`);
  const accordion = document.getElementById(`accordion${i}`);

  accordions.push({ imageAccordion, question, accordion });

  accordion.addEventListener("click", () => handleAccordionClick(i));
}

function handleAccordionClick(indiceClicado) {
  accordions.forEach((accordion, indice) => {
    const { imageAccordion, question } = accordion;

    if (indice + 1 === indiceClicado) {
      question.classList.toggle("visible");
    } else {
      question.classList.remove("visible");
      imageAccordion.src = "./assets/images/icon-plus.svg";
    }
  });

  const accordionClicado = accordions[indiceClicado - 1];
  const { imageAccordion } = accordionClicado;

  if (imageAccordion.src.match("./assets/images/icon-plus.svg")) {
    imageAccordion.src = "./assets/images/icon-minus.svg";
  } else {
    imageAccordion.src = "./assets/images/icon-plus.svg";
  }
}