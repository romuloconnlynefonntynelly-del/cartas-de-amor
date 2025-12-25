// Nomes permitidos para acessar a carta
const nomesPermitidos = ["thais","tata","thatha","thata"]; // Adicione mais nomes aqui, por exemplo: ["thais", "romulo"]

const carta = `
mulher que eu tanto amo,

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

function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function verificarNome() {
  const input = document.getElementById("nameInput");
  const erro = document.getElementById("errorMsg");
  const nome = normalizar(input.value);

  // Verifica se o nome está na lista de nomes permitidos
  if (nomesPermitidos.includes(nome)) {
    // Esconde o login e mostra a carta fechada
    document.getElementById("login").classList.add("hidden");
    document.getElementById("initialScreen").classList.remove("hidden");
    // Rola para o topo
    window.scrollTo(0, 0);
  } else {
    erro.classList.remove("hidden");
    input.disabled = true;

    setTimeout(() => {
      erro.classList.add("hidden");
      input.value = "";
      input.disabled = false;
      input.focus();
    }, 1800);
  }
}

function digitarCarta() {
  const elemento = document.getElementById("typedText");
  elemento.innerHTML = '';
  let i = 0;

  function escrever() {
    if (i < carta.length) {
      const char = carta.charAt(i);
      if (char === '\n') {
        elemento.innerHTML += '<br>';
      } else {
        elemento.innerHTML += char;
      }
      i++;
      setTimeout(escrever, 28);
    }
  }

  escrever();
}

// Clique na carta fechada
document.addEventListener('DOMContentLoaded', function() {
  const cartaFechada = document.getElementById("cartaFechada");
  if (cartaFechada) {
    cartaFechada.addEventListener("click", () => {
      // Adiciona animação de abertura
      cartaFechada.classList.add("abrir");
      const initialScreen = document.getElementById("initialScreen");
      initialScreen.classList.add("fadeOut");
      
      // Após a animação, esconde a carta e mostra o texto
      setTimeout(() => {
        initialScreen.classList.add("hidden");
        document.getElementById("letter").classList.remove("hidden");
        // Permite scroll quando a carta aparecer
        document.body.style.overflow = 'auto';
        document.body.style.alignItems = 'flex-start';
        // Mostra o texto completo
        digitarCarta();
        // Rola para o topo suavemente
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
        const music = document.getElementById("music");
        if (music) {
          music.play().catch(e => console.log("Erro ao reproduzir música:", e));
        }
      }, 1200); // Tempo da animação (1.2s)
    });
  }

  // Permitir pressionar Enter no input
  const input = document.getElementById("nameInput");
  if (input) {
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        verificarNome();
      }
    });
  }
});


