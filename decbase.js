// Seleciona o elemento <header> do HTML e guarda na variável 'header'
const header = document.querySelector("header");

// Adiciona um ouvinte de evento que escuta quando a página é rolada
window.addEventListener("scroll", function() {
  // Adiciona a classe "sticky" ao header se o scroll for maior que 0 (ou seja, se rolou a página)
  // Remove a classe se voltar ao topo (scrollY = 0)
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

// Seleciona o ícone do menu (geralmente um ícone de três linhas - "menu hambúrguer")
let menu = document.querySelector("#menu-icon");

// Seleciona a lista de navegação (menu que será aberto/fechado)
let navlist = document.querySelector(".navlist");

// Quando o ícone do menu for clicado...
menu.onclick = () => {
  // Alterna a classe "bx-x" no ícone do menu, trocando para um X quando o menu estiver aberto
  menu.classList.toggle("bx-x");

  // Alterna a classe "open" na navlist, para mostrar ou esconder o menu
  navlist.classList.toggle("open");
};



// Espera o DOM carregar completamente antes de executar qualquer código
document.addEventListener('DOMContentLoaded', () => {

  // Lista com objetos que representam os elementos a serem animados
  const animations = [
    // Logo da página (aparece primeiro com leve deslocamento à esquerda)
    { selector: '.logo', delay: 700, x: -30, y: 0, opacity: 0 },
    
    // Itens do menu de navegação (todos com o mesmo atraso e deslocamento para cima)
    { selector: '.navlist li:nth-child(1)', delay: 1000, x: 0, y: -20, opacity: 0 },
    { selector: '.navlist li:nth-child(2)', delay: 1000, x: 0, y: -20, opacity: 0 },
    { selector: '.navlist li:nth-child(3)', delay: 1000, x: 0, y: -20, opacity: 0 },
    { selector: '.navlist li:nth-child(4)', delay: 1000, x: 0, y: -20, opacity: 0 },
    { selector: '.navlist li:nth-child(5)', delay: 1000, x: 0, y: -20, opacity: 0 },
    
    // Botão de registro (nav-btn), com efeito de escala para chamar atenção
    { selector: '.nav-btn', delay: 1400, x: 0, y: -20, opacity: 0, scale: 0.8 },
    
    // Títulos e parágrafo do conteúdo principal (entra da esquerda)
    { selector: '.home-text h4', delay: 2000, x: -30, y: 0, opacity: 0 },
    { selector: '.home-text h1', delay: 2000, x: -30, y: 0, opacity: 0 },
    { selector: '.home-text p', delay: 2000, x: -30, y: 0, opacity: 0 },
    
    // Botão do conteúdo principal (entra de baixo para cima)
    { selector: '.home-btn', delay: 2500, x: 0, y: 30, opacity: 0 },
    
    // Imagens da página principal (entram da direita)
    { selector: '.home-img .img1', delay: 3000, x: 30, y: 0, opacity: 0 },
    { selector: '.home-img .img2', delay: 3500, x: 30, y: 0, opacity: 0 }
  ];
  
  // Aplica a animação para cada item da lista "animations"
  animations.forEach(item => {
    // Seleciona todos os elementos que correspondem ao seletor definido
    const elements = document.querySelectorAll(item.selector);
    
    elements.forEach(el => {
      // Define o estado inicial: invisível, deslocado e com escala reduzida (se definido)
      el.style.opacity = item.opacity;
      el.style.transform = `translate(${item.x}px, ${item.y}px) scale(${item.scale || 1})`;
      el.style.transition = 'all 0.8s ease'; // Define a transição suave para quando a animação ocorrer

      // Após o tempo de "delay", aplica o estado final: visível, sem deslocamento, escala normal
      setTimeout(() => {
        el.style.opacity = 1;
        el.style.transform = 'translate(0, 0) scale(1)';
      }, item.delay);
    });
  });
  
  // Apenas para depuração: mostra no console quantos elementos foram encontrados para cada seletor
  console.log("Elementos encontrados para animação:");
  animations.forEach(item => {
    const found = document.querySelectorAll(item.selector);
    console.log(`${item.selector}: ${found.length} elementos encontrados`);
  });
});
