Novidade! Atalhos do teclado … Os atalhos de teclado do Drive foram atualizados para oferecer navegação por letras iniciais
script.js
const caixaPrincipal=document.querySelector(".caixa-principal");
const caixaPerguntas=document.querySelector(".caixa-perguntas");
const caixaAlternativas=document.querySelector(".caixa-alternativas");
const caixaResultados=document.querySelector(".caixa-resultados");
const textoResultado=document.querySelector(".texto-resultados");

const perguntas=[
    {
        enunciado:"Assim que saiu da escola você se depara com uma tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter,ele também gera imagem e aúdios hiper-realistas.Qual o primeiro pensamento?",
        alternativas:[
            {
texto:"isso é assustador!",
afirmacao:"No inicio ficou com medo do que essa tecnologiampode fazer."
            },
            {
                texto:"Isso é maravilhoso!",
                afirmacao:"Quis saber como usar IA no seu dia a dia."
            }
        ]

    },
    {
        enunciado:"com a descoberta desta tecnologia, chamada Inteligencia Artificial,uma professora de tecnologia da escola decidiu fazer uma sequencia de aulas sobre esta tecnologia.no fim de uma aula ela pede que vocêescreva um trabalho sobre o uso de IAem sala de aula.qual atitude você toma?",
        alternativas:[
            {
                texto:"utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                afirmacao:"conseguiu utilizar a IApara buscar informações úteis."
            },
            {
                texto:"Escreve o trabalho com base nas conversas que teve com colegas,algumas pesquisas na internet e conhecimento próprio sobre o tema.",
                afirmacao:"Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
    enunciado:"Após a elaboração do trabalho escrito,a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita.Nessas conversas tambem foi levando um ponto muito importanta:como a IA impacta o trabalhodo futuro.Nesse debate,como você se posiciona?",
    alternativas:[
        {
            texto:"Defendende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
            afirmacao:"Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
        },
        {
            texto:"Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
            afirmacao:"Sua preocupação com as pessoas motivos a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
        }
    ]
},
{
    enunciado:"Ao final da discussão,você precisou criar uma imagem no computador que representasse o que pensa sobre IA.E agora?",
    alternativas:[
        {
            texto:"Criar uma imagem utilizando uma plataforma de desingn como o Paint.",
            afirmacao:"Notou também que muita pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramemtas de pintura digital para iniciantes."
        },
        {
            texto:"Criar uma imagem utilizando um gerador de imagem de IA.",
            afirmacao:"Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"

        }
    ]
},
{
enunciado:"Você tem um trabalho em grupo de biologia para entregar na semana seguinte,o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer como ajudar da IA.O problema é que o trabalho está totalmente igual ao do chat.O que você faz?",
alternativas:[
{
    texto:"Escrever comandos para o chat é uma forma de contribuir com o trabalho ,por isso não é um problema utilizar o texto inteiro.",
    afirmacao:"Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
},
{
    texto:"O chat pode ser uma tecnologia muito avançada,mas é preciso manter a atenção pois toda máquina erra,por issorevisar o trabalho e contribuir com as perspectivas pessoais é essencial. ",
    afirmacao:"Percebeu que toda IA reproduz orientações baseada na empresa que programou e muito do que o chat escrevia não reflita o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final."
      }
    ]
  },
];

let atual=0
let perguntaAtual;
let historiaFinal="";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual=perguntas[atual];
    caixaPerguntas.textContent=perguntaAtual.enunciado;
    caixaAlternativas.textContent="";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas=document.createElement("button");
        botaoAlternativas.textContent=alternativa.texto;
        botaoAlternativas.addEventListener("click",()=>respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes=opcaoSelecionada.afirmacao;
    historiaFinal+=afirmacoes+" ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent="Em 2049...";
    textoResultado.textContent=historiaFinal;
    caixaAlternativas.textContent="";
}

mostraPergunta();
