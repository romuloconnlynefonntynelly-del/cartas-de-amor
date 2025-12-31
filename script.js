// ===============================
// LISTA DE NOMES PERMITIDOS
// ===============================

// Este array guarda os nomes que podem acessar a carta.
// Se o nome digitado estiver aqui, a pessoa entra.
// Se não estiver, o acesso é negado.
const nomesPermitidos = ["thais","tata","thatha","thata","tais","taís"];
// Obs: pode adicionar mais nomes dentro das aspas, separados por vírgula



// ===============================
// TEXTO DA CARTA
// ===============================

// Aqui está todo o texto da carta.
// Ele fica entre crases (` `), o que permite várias linhas.
const carta = `
“Você é a mulher que eu tanto amo, e quero que tudo entre a gente aconteça com calma e verdade.”

“Quero deixar claro que não é um pedido de namoro. É só a forma mais honesta que eu encontrei de
falar sobre o que eu sinto por você. E, quem sabe, no futuro, depois da gente se conhecer melhor e se os
seus sentimentos forem recíprocos, isso possa virar algo a mais.”

Eu sou uma pessoa que nunca deixou ninguém entrar na minha vida. Durante muito tempo, construí muralhas ao redor do meu coração, acreditando que assim estaria protegido. Achei que ninguém jamais conseguiria atravessar essas barreiras… até você chegar.

Sem perceber, você foi derrubando cada uma delas. No começo, confesso, foi apenas curiosidade. Eu quis saber mais sobre você, entender quem era essa mulher que despertava algo diferente em mim. Mas, com o passar do tempo, essa curiosidade foi crescendo, se transformando em cuidado, admiração e, quando eu me dei conta, em amor.

Aos poucos, eu fui me apaixonando — pelo seu sorriso, pelo seu olhar, pelo seu jeito único de ser. Sem perceber, você ocupou um espaço que eu nunca havia permitido que ninguém ocupasse. Você tocou o meu coração de uma forma verdadeira, sincera e profunda, e mudou tudo dentro de mim.

Hoje, eu tenho certeza do que sinto. Não é algo forçado, não é passageiro, não é ilusão. É um sentimento real, que nasceu com o tempo, com a convivência e com tudo o que você despertou em mim.

Eu confesso que sempre soube que esse caminho não seria fácil. A sua irmã e o meu irmão já tinham me avisado que, se eu seguisse por ele, encontraria dificuldades. Mesmo assim, sabendo de tudo isso, eu não consigo — e não quero — desistir da mulher que eu amo.

Eu sei que talvez eu não seja digno de você, e reconheço isso com humildade. Você é uma mulher esforçada, maravilhosa, linda e inteligente. Eu te admiro profundamente pela mulher que você é — pela sua força, pela sua dedicação, pelo seu caráter e pela sua essência.

Eu sei que, muitas vezes, você tenta ser forte na frente das pessoas. Você segura, continua, sorri… mas por dentro está chorando. E é justamente aí que eu quero estar.

Quero que você saiba, com toda a certeza do mundo, que você não precisa carregar tudo sozinha comigo. Quando o coração apertar, quando faltar força, quando o silêncio pesar, eu estarei aqui. Sempre. Para te ouvir, para te acolher, para te entender — sem julgamentos, sem cobranças, sem exigências.

Se um dia você precisar conversar, desabafar ou simplesmente ficar em silêncio com alguém, você sabe onde me encontrar. Eu estarei aqui, de braços abertos, com o coração aberto, te esperando. Pronto para te apoiar em qualquer situação, em qualquer fase, em qualquer momento da sua vida.

Mesmo que você não me escolha para caminhar ao seu lado nessa jornada da vida, mesmo que o seu caminho não seja comigo, eu ainda assim estarei aqui. Porque o que eu sinto por você é cuidado, é respeito, é amor verdadeiro.

E, acima de tudo, eu quero a sua felicidade — do fundo do meu coração. Ainda que ela não seja ao meu lado. O que importa para mim é ver você bem, em paz, feliz. Porque você é a mulher que eu tanto amo.

Você é uma mulher reta, firme na fé em nosso Deus, e eu tenho absoluta certeza de que você vai realizar todos os seus sonhos. Ver a sua determinação só faz crescer ainda mais a admiração, o respeito e o amor que eu sinto por você.

Eu quero conhecer cada detalhe seu. Quero conhecer ainda mais a mulher por quem eu me apaixonei, saber dos seus pensamentos, dos seus medos, das suas alegrias. Até mesmo esse seu lado ranzinza, do qual já ouvi falar pelo meu irmão e pela sua irmã, eu quero conhecer — porque tudo o que vem de você me importa.

Quero te conhecer com calma, sem pressa. Serei paciente. Vou respeitar o seu tempo, o seu espaço e o seu ritmo. Não quero forçar nada, nem apressar nada. Quero caminhar ao seu lado, passo a passo, do jeito certo, do jeito que fizer sentido para você.

Porque eu te amo. Eu sei que te conheço há pouco tempo, mas esse sentimento é mais forte do que eu, e a cada dia ele só cresce. Não foi algo que eu escolhi sentir — simplesmente aconteceu, de forma intensa, verdadeira e inevitável.

Você é a única pessoa para quem eu realmente me abri de verdade. A única que conheceu o meu verdadeiro eu, aquele lado que eu nunca mostrei para ninguém. Com você, eu não precisei fingir, nem esconder quem eu sou. Pela primeira vez, me senti seguro para ser eu mesmo.

Isso, para mim, tem um valor imenso. E é por isso que o que sinto por você é tão forte, tão sincero e tão real.

Com todo o meu amor,

Rômulo — para Thaís
`;



// ===============================
// FUNÇÃO NORMALIZAR TEXTO
// ===============================

// Esta função serve para:
// - transformar tudo em letra minúscula
// - remover acentos
// Isso evita erro se a pessoa digitar "Thaís", "thais" ou "THAÍS"
function normalizar(texto) {
  return texto
    .toLowerCase() // transforma tudo em minúsculo
    .normalize("NFD") // separa letras dos acentos
    .replace(/[\u0300-\u036f]/g, ""); // remove os acentos
}



// ===============================
// FUNÇÃO DE VERIFICAÇÃO DO NOME
// ===============================

// Essa função roda quando a pessoa tenta entrar
function verificarNome() {
  const nome = document.getElementById("nameInput").value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  if (nome === "thais") {
    notificarAcesso(); // 📧 AVISA VOCÊ

    document.getElementById("login").classList.add("hidden");
    document.getElementById("initialScreen").classList.remove("hidden");
  } else {
    document.getElementById("errorMsg").classList.remove("hidden");
  }
}



// ===============================
// FUNÇÃO DE DIGITAÇÃO DA CARTA
// ===============================

// Essa função faz o efeito de "texto sendo digitado"
function digitarCarta() {

  // Elemento onde o texto vai aparecer
  const elemento = document.getElementById("typedText");

  // Limpa qualquer texto anterior
  elemento.innerHTML = '';

  // Contador de letras
  let i = 0;
  // Configurações ajustáveis:
  // Tempo entre cada caractere (ms). Reduza para digitação mais rápida.
  const typingDelay = 20; // você pode alterar este valor

  // Intervalo mínimo entre chamadas de scroll (ms) para evitar sobrecarga.
  const scrollInterval = 40;
  let lastScroll = 0;

  // Função interna que escreve letra por letra usando nós.
  // Faz scroll (throttled) para acompanhar as letras enquanto aparecem.
  function escrever() {
    if (i < carta.length) {
      const char = carta.charAt(i);
      let node;

      if (char === '\n') {
        // Insere quebra de linha e uma âncora
        elemento.appendChild(document.createElement('br'));
        const anchor = document.createElement('span');
        anchor.className = 'line-anchor';
        elemento.appendChild(anchor);
        node = anchor;
      } else {
        // Insere caractere como nó de texto
        const span = document.createElement('span');
        span.textContent = char;
        elemento.appendChild(span);
        node = span;
      }

      // Throttled scroll: apenas a cada `scrollInterval` ms
      const now = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
      if (now - lastScroll >= scrollInterval) {
        try {
          node.scrollIntoView({ behavior: 'smooth', block: 'end' });
        } catch (e) {
          window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }
        lastScroll = now;
      }

      i++;
      setTimeout(escrever, typingDelay);
    } else {
      // Quando terminar a carta, adicionar pausa e depois digitar o poema final
      setTimeout(() => {
        digitarPoemaFinal();
      }, 800); // pausa dramática antes do poema
    }
  }

  escrever();

  // ===============================
  // FUNÇÃO PARA DIGITAR O POEMA FINAL
  // ===============================
  function digitarPoemaFinal() {
    // Adiciona quebras de linha antes do poema para separação
    elemento.appendChild(document.createElement('br'));
    elemento.appendChild(document.createElement('br'));

    // Conteúdo do poema final (sem tags HTML)
    const poemaTexto = `E, se você chegou até aqui…

    Leia esse poema que eu fiz para você.

Saiba que nada foi pressa,
nem promessa vazia.
Foi só verdade,
dita com cuidado.

Eu não te peço nada,
além do tempo.
Do tempo certo.
Do tempo que respeita.

Se for comigo,
caminho ao seu lado.
Se não for,
ainda assim te desejo feliz.

Porque o que eu sinto
é amor —
calmo, sincero,
e real.

— Rômulo`;

    let poemaIndex = 0;

    function escreverPoema() {
      if (poemaIndex < poemaTexto.length) {
        const char = poemaTexto.charAt(poemaIndex);
        let node;

        if (char === '\n') {
          elemento.appendChild(document.createElement('br'));
          const anchor = document.createElement('span');
          anchor.className = 'line-anchor';
          elemento.appendChild(anchor);
          node = anchor;
        } else {
          const span = document.createElement('span');
          span.textContent = char;
          elemento.appendChild(span);
          node = span;
        }

        // Throttled scroll: acompanha o poema também
        const now = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
        if (now - lastScroll >= scrollInterval) {
          try {
            node.scrollIntoView({ behavior: 'smooth', block: 'end' });
          } catch (e) {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
          }
          lastScroll = now;
        }

        poemaIndex++;
        setTimeout(escreverPoema, typingDelay);
      }
    }

    escreverPoema();
  }
}



// ===============================
// EVENTOS AO CARREGAR A PÁGINA
// ===============================

// Esse bloco roda quando o HTML termina de carregar
document.addEventListener('DOMContentLoaded', function() {

  // ===============================
  // CLIQUE NA CARTA FECHADA
  // ===============================

  const cartaFechada = document.getElementById("cartaFechada");

  if (cartaFechada) {
    cartaFechada.addEventListener("click", () => {

      // Adiciona animação de abertura da carta
      cartaFechada.classList.add("abrir");

      const initialScreen = document.getElementById("initialScreen");

      // Animação de sumir a tela inicial
      initialScreen.classList.add("fadeOut");

      // Depois de 1.2 segundos
      setTimeout(() => {

        // Esconde a carta fechada
        initialScreen.classList.add("hidden");

        // Mostra a carta aberta
        document.getElementById("letter").classList.remove("hidden");

        // Libera o scroll da página
        document.body.style.overflow = 'auto';
        document.body.style.alignItems = 'flex-start';

        // Começa a digitar a carta
        digitarCarta();

        // Rola suavemente para o topo
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);

        // Toca a música (se existir)
        const music = document.getElementById("music");
        if (music) {
          music.play().catch(e => console.log("Erro ao reproduzir música:", e));
        }

      }, 1200);
    });
  }



  // ===============================
  // ENTER PARA CONFIRMAR O NOME
  // ===============================

  const input = document.getElementById("nameInput");

  if (input) {
    input.addEventListener('keypress', function(e) {

      // Se apertar Enter
      if (e.key === 'Enter') {
        verificarNome();
      }
    });
  }
});
