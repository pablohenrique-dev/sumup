export default function faq() {
  const perguntas = document.querySelectorAll('.faq button');
  const perguntasContainer = document.querySelectorAll('.faq div');

  function ativarPergunta(pergunta) {
    const elementoPai = pergunta.currentTarget.parentElement.parentElement;
    perguntasContainer.forEach((perguntaContainer) => {
      perguntaContainer.classList.remove('ativo');
    });
    elementoPai.classList.add('ativo');
  }

  if (perguntas) {
    perguntas.forEach((pergunta) => {
      pergunta.addEventListener('click', ativarPergunta);
    });
  }
}
