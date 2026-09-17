const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "O acúmulo desordenado de lixo plástico nos oceanos e solos ameaça a biodiversidade e contamina a cadeia alimentar. Como podemos reduzir esse impacto no dia a dia?",
        alternativas: [
            {
                texto: "Priorizando o uso de materiais reutilizáveis, reduzindo o consumo de plásticos descartáveis e apoiando a economia circular.",
                afirmacao: "Você é uma pessoa consciente das suas escolhas diárias e busca atitudes práticas para diminuir a sua pegada ecológica."
            },
            {
                texto: "Participando e incentivando campanhas locais de reciclagem e mutirões de limpeza em praças e praias.",
                afirmacao: "Você é uma pessoa engajada na comunidade e acredita no poder da ação coletiva para transformar o ambiente."
            }
        ]
    },
    {
        enunciado: "O desmatamento acelerado afeta diretamente o clima global, a qualidade do ar e a disponibilidade de água potável. Qual é a melhor abordagem para conter a perda das nossas florestas?",
        alternativas: [
            {
                texto: "Investir em fiscalização rigorosa, tecnologia de monitoramento via satélite e reflorestamento de áreas degradadas.",
                afirmacao: "Você tem um perfil analítico e estratégico, valorizando soluções científicas e a aplicação firme de medidas de proteção."
            },
            {
                texto: "Incentivar a agricultura sustentável e o consumo de produtos com certificação socioambiental transparente.",
                afirmacao: "Você é uma pessoa focada em sustentabilidade econômica, buscando alinhar o desenvolvimento humano ao respeito pela natureza."
            }
        ]
    },
    {
        enunciado: "A preservação das fontes de água doce é essencial para a saúde do planeta e dos seres vivos, mas o desperdício e a poluição ainda são desafios graves. Como você enxerga a relação da sociedade com a água?",
        alternativas: [
            {
                texto: "É urgente mudar hábitos individuais de consumo e exigir políticas públicas de saneamento básico e proteção de nascentes.",
                afirmacao: "Você demonstra responsabilidade social e reconhece a importância de equilibrar ações pessoais com cobrança de direitos coletivos."
            },
            {
                texto: "A inovação e o reúso da água na indústria e na agricultura devem ser a prioridade máxima para evitar a escassez.",
                afirmacao: "Você tem uma visão voltada para a eficiência e tecnologia como ferramentas centrais para garantir a segurança hídrica no futuro."
            }
        ]
    }
];