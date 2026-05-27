import { FeatureItem, PortfolioItem, TestimonialItem, FAQItem } from "./types";

export const FEATURES: FeatureItem[] = [
  {
    id: "fabric",
    title: "Linho Belga e Algodão Egípcio",
    description: "Fibra 100% originais que permitem o respiro natural da pele, conferindo um toque aveludado único que evolui e fica ainda melhor a cada lavagem.",
    iconName: "Sparkles"
  },
  {
    id: "fit",
    title: "Modelagem Anatômica Inteligente",
    description: "Cada curva e costura são planejadas para abraçar a diversidade do corpo feminino de forma sofisticada, unindo caimento impecável e liberdade de movimento.",
    iconName: "Scissors"
  },
  {
    id: "ethical",
    title: "Sustentabilidade de Baixa Escala",
    description: "Nossas peças são confeccionadas artesanalmente sob o conceito de slow fashion. Uma fabricação responsável que garante exclusividade absoluta e acabamento impecável.",
    iconName: "ShieldCheck"
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "port-1",
    title: "Coleção Alfaiataria Fluida",
    category: "Blazers & Calças Slouchy",
    imageUrl: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&h=800&q=80",
    persuasiveCall: "Ver Coleção & Modelagens"
  },
  {
    id: "port-2",
    title: "O Toque Sublime do Linho",
    category: "Camisaria Atemporal",
    imageUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&h=800&q=80",
    persuasiveCall: "Descobrir Tecidos Exclusivos"
  },
  {
    id: "port-3",
    title: "Silhueta Minimalista",
    category: "Vestidos Midi em Algodão Nobre",
    imageUrl: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=600&h=800&q=80",
    persuasiveCall: "Garantir Peças Limitadas"
  },
  {
    id: "port-4",
    title: "Neutros Essenciais",
    category: "Looks Monocromáticos",
    imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&h=800&q=80",
    persuasiveCall: "Simular Meu Tamanho"
  },
  {
    id: "port-5",
    title: "Alfaiataria de Verão",
    category: "Coletes & Bermudas Sob Medida",
    imageUrl: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&h=800&q=80",
    persuasiveCall: "Falar com Personal Stylist"
  },
  {
    id: "port-6",
    title: "Estética Contemporânea",
    category: "Trench Coats & Sobreposições",
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&h=800&q=80",
    persuasiveCall: "Garantir 10% OFF Vitalício"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t-1",
    authorName: "Helena de Vasconcelos",
    location: "São Paulo - SP",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
    comment: "A qualidade da alfaiataria em linho nobre me deixou absolutamente impressionada. O blazer tem uma modelagem anatômica perfeita que valoriza o caimento sem apertar. Sem falar no despacho super rápido em poucas horas!",
    verified: true,
    date: "Há 3 dias"
  },
  {
    id: "t-2",
    authorName: "Mariana Diniz",
    location: "Belo Horizonte - MG",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
    comment: "Eu amo marcas dedicadas ao slow fashion real. O algodão egípcio é tão macio que parece uma segunda pele. Usei o cupom BEMVINDA e ganhei frete grátis. A entrega superou todas as minhas expectativas mais otimistas.",
    verified: true,
    date: "Há uma semana"
  },
  {
    id: "t-3",
    authorName: "Beatriz Sampaio",
    location: "Rio de Janeiro - RJ",
    avatarUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
    comment: "Como arquiteta, o minimalismo e as linhas precisas são essenciais para mim. Encontrei na Aura Concept as melhores estruturas de calça slouchy que já vesti. Comprei via WhatsApp e o atendimento foi humano, fluido e nota dez.",
    verified: true,
    date: "Há 5 dias"
  },
  {
    id: "t-4",
    authorName: "Clara Antunes",
    location: "Porto Alegre - RS",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
    comment: "Costuras perfeitamente finalizadas! Por dentro a peça é impecável, com viés e corte de marcas de alta costura parisiense. É um investimento atemporal que não se desfaz em três lavagens de máquina.",
    verified: true,
    date: "Há 2 semanas"
  },
  {
    id: "t-5",
    authorName: "Renata Silveira",
    location: "Curitiba - PR",
    avatarUrl: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
    comment: "Excelente custo-benefício para quem conhece tecidos puros. O caimento é anatômico e elegante, ideal tanto para reuniões corporativas quanto passeios no final de semana. Indico de olhos fechados!",
    verified: true,
    date: "Há 12 dias"
  },
  {
    id: "t-6",
    authorName: "Sofia Moreira",
    location: "Brasília - DF",
    avatarUrl: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
    comment: "Adorei a embalagem acolhedora de Aura. Sente-se o cheiro delicado dos óleos de lavanda da produção ética assim que você abre a caixa. Um verdadeiro mimo com caimento impecável e despacho veloz em menos de 12 horas.",
    verified: true,
    date: "Há 4 dias"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Como funciona o cupom de primeira compra BEMVINDA?",
    answer: "É muito simples! Ao finalizar sua primeira compra no nosso checkout, basta inserir o cupom BEMVINDA no campo indicado de cupom para aplicar automaticamente 10% de desconto adicional na sua compra inteira, combinado com Frete Grátis."
  },
  {
    id: "faq-2",
    question: "Qual o prazo de despacho e prazo de postagem de Aura Concept Store?",
    answer: "Temos um compromisso absoluto com a agilidade. Todos os pedidos são faturados, criteriosamente embalados com nosso aroma e despachados em até 12 horas úteis após a aprovação do pagamento, gerando o rastreador imediatamente."
  },
  {
    id: "faq-3",
    question: "Os tecidos são realmente puros e sustentáveis?",
    answer: "Sim! Trabalhamos exclusivamente sob a filosofia de slow fashion com Linho Belga, Algodão Egípcio 100% autêntico e viscose de reflorestamento certificado. Não misturamos fibras plásticas baratas como poliéster sintético nos nossos produtos principais."
  },
  {
    id: "faq-4",
    question: "Como funciona a política de trocas e devoluções?",
    answer: "A sua primeira troca na Aura Concept é 100% grátis e sem burocracias em até 7 dias após o recebimento. Nós enviamos o código de postagem reversa do correio e você poderá optar por outro tamanho, outra peça ou estorno integral imediato."
  },
  {
    id: "faq-5",
    question: "Como sei qual é o meu tamanho ideal?",
    answer: "Oferecemos uma tabela de medidas ultra detalhada na página do produto e um Guia de Medidas 3D. Se preferir, clique no ícone do WhatsApp para ter um consultor de estilo dedicado que indicará seu tamanho exato de acordo com seu manequim habitual."
  },
  {
    id: "faq-6",
    question: "Quais são as opções de pagamento aceitas?",
    answer: "Aceitamos Pix com 5% de desconto extra progressivo, além de todos os principais cartões de crédito em até 6x sem juros (ou até 10x com taxas mínimas). Todas as transações usam criptografia SSL blindada de nível bancário premium."
  },
  {
    id: "faq-7",
    question: "A modelagem anatômica realmente funciona para todos os biotipos?",
    answer: "Nossas modelagens passam por testes intensos e refinamento em corpos de diferentes proporções. Elas utilizam recortes inteligentes e curvas francesas que realçam a silhueta, ao invés de usar cortes retos e infantis comuns na indústria."
  },
  {
    id: "faq-8",
    question: "O frete é grátis para todo o Brasil?",
    answer: "Sim! Na primeira compra aplicando o cupom BEMVINDA o frete é gratuito para todas as capitais e regiões metropolitanas do Brasil. No checkout você também pode selecionar a entrega expressa se precisar com urgência ainda maior."
  },
  {
    id: "faq-9",
    question: "Como cuidar e lavar minhas roupas de linho e algodão?",
    answer: "Acompanha um guia impresso exclusivo em papel de algodão reciclado explicativo em todas as compras. Recomendamos secagem à sombra, lavagem delicada manual ou modo suave e sabão neutro para conservar a maciez e as fibras intactas por décadas."
  },
  {
    id: "faq-10",
    question: "Como posso entrar em contato ou visitar a Aura Concept Store?",
    answer: "Oferecemos suporte humano instantâneo de segunda a sábado das 9h às 19h no WhatsApp (11) 96666-6666 ou via e-mail sac@auraconcept.com.br. Nosso showroom corporativo fica localizado fisicamente em São Paulo - SP para retiradas e experiências sob agendamento."
  }
];
