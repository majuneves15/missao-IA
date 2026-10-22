const perguntas = [
    {
        categoria: "EXERCÍCIOS",
        pergunta: "A prática regular de atividades físicas ajuda no fortalecimento do sistema cardiovascular e melhora a saúde mental?",
        alternativas: ["Verdadeiro", "Falso"],
        correta: 0,
        explicacao: "Verdadeiro! O exercício físico constante melhora a circulação sanguínea, previne doenças cardíacas e libera hormônios ligados ao bem-estar."
    },
    {
        categoria: "NUTRIÇÃO",
        pergunta: "O consumo frequente de alimentos ultraprocessados pode aumentar os riscos de doenças crônicas como diabetes e hipertensão?",
        alternativas: ["Verdadeiro", "Falso"],
        correta: 0,
        explicacao: "Verdadeiro! Alimentos com excesso de sódio, gorduras saturadas e açúcares prejudicam o metabolismo quando consumidos em excesso."
    },
    {
        categoria: "SONO",
        pergunta: "Dormir menos do que o recomendado com frequência não afeta a imunidade nem a capacidade de concentração?",
        alternativas: ["Verdadeiro", "Falso"],
        correta: 1,
        explicacao: "Falso! A privação continuada de sono enfraquece o sistema imunológico, compromete a memória e reduz o rendimento diário."
    },
    {
        categoria: "HIDRATAÇÃO",
        pergunta: "A água desempenha papel fundamental na regulação da temperatura corporal e no transporte de nutrientes no organismo?",
        alternativas: ["Verdadeiro", "Falso"],
        correta: 0,
        explicacao: "Verdadeiro! A hidratação adequada é vital para todas as reações metabólicas e para a eliminação de toxinas do corpo."
    },
    {
        categoria: "PREVENÇÃO",
        pergunta: "Consultas médicas e exames preventivos periódicos são indicados apenas quando a pessoa apresenta sintomas graves?",
        alternativas: ["Verdadeiro", "Falso"],
        correta: 1,
        explicacao: "Falso! A medicina preventiva permite identificar alterações na saúde em estágios iniciais, facilitando tratamentos precoces."
    },
    {
        categoria: "HIGIENE",
        pergunta: "Higienizar as mãos frequentemente é uma das formas mais eficazes de prevenir infecções virais e bacterianas?",
        alternativas: ["Verdadeiro", "Falso"],
        correta: 0,
        explicacao: "Verdadeiro! A higienização correta elimina microrganismos das mãos e evita contaminações ao tocar no rosto ou em alimentos."
    },
    {
        categoria: "SAÚDE MENTAL",
        pergunta: "Momentos de lazer e pausas no trabalho ajudam na redução do estresse e no equilíbrio emocional?",
        alternativas: ["Verdadeiro", "Falso"],
        correta: 0,
        explicacao: "Verdadeiro! Manter o equilíbrio entre responsabilidades e descanso previne o esgotamento mental e a ansiedade."
    },
    {
        categoria: "NUTRIÇÃO",
        pergunta: "Substituir a ingestão de água por refrigerantes ou sucos industrializados garante a mesma qualidade de hidratação?",
        alternativas: ["Verdadeiro", "Falso"],
        correta: 1,
        explicacao: "Falso! Bebidas açucaradas contêm alta dose de calorias vazias e aditivos, não substituindo a água pura necessária para o corpo."
    },
    {
        categoria: "EXERCÍCIOS",
        pergunta: "Pessoas de todas as idades podem se beneficiar da prática guiada de exercícios físicos?",
        alternativas: ["Verdadeiro", "Falso"],
        correta: 0,
        explicacao: "Verdadeiro! Com as adaptações adequadas para cada faixa etária e condição física, os exercícios trazem benefícios para todos."
    },
    {
        categoria: "PREVENÇÃO",
        pergunta: "A vacinação em dia protege tanto o indivíduo vacinado quanto toda a comunidade ao redor?",
        alternativas: ["Verdadeiro", "Falso"],
        correta: 0,
        explicacao: "Verdadeiro! A imunização em massa interrompe a circulação de agentes patogênicos e protege pessoas mais vulneráveis."
    }
];

let perguntaAtual = 0;
let pontos = 0;
let erros = 0;

/* ELEMENTOS DO DOM */
const perguntaElemento = document.getElementById("pergunta");
const alternativasElemento = document.getElementById("alternativas");
const contador