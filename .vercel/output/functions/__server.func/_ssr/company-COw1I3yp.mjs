import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as instance } from "../_libs/i18next.mjs";
import { r as initReactI18next } from "../_libs/react-i18next.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/company-COw1I3yp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STORAGE_KEY = "arkyo-theme";
var ThemeContext = (0, import_react.createContext)(null);
function readInitialTheme() {
	if (typeof window === "undefined") return "dark";
	try {
		const saved = window.localStorage.getItem(STORAGE_KEY);
		if (saved === "light" || saved === "dark") return saved;
	} catch {}
	if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) return "light";
	return "dark";
}
function applyTheme(theme) {
	const root = document.documentElement;
	root.classList.toggle("dark", theme === "dark");
	root.style.colorScheme = theme;
	const meta = document.querySelector("meta[name=\"theme-color\"]");
	if (meta) meta.setAttribute("content", theme === "dark" ? "#090909" : "#FAFAFA");
}
function ThemeProvider({ children }) {
	const [theme, setThemeState] = (0, import_react.useState)("dark");
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setThemeState(readInitialTheme());
		setHydrated(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		applyTheme(theme);
	}, [theme, hydrated]);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined" || !window.matchMedia) return;
		const mq = window.matchMedia("(prefers-color-scheme: dark)");
		const onChange = (e) => {
			try {
				if (window.localStorage.getItem(STORAGE_KEY)) return;
			} catch {}
			setThemeState(e.matches ? "dark" : "light");
		};
		mq.addEventListener("change", onChange);
		return () => mq.removeEventListener("change", onChange);
	}, []);
	const setTheme = (0, import_react.useCallback)((t) => {
		try {
			window.localStorage.setItem(STORAGE_KEY, t);
		} catch {}
		setThemeState(t);
	}, []);
	const toggleTheme = (0, import_react.useCallback)(() => {
		setThemeState((prev) => {
			const next = prev === "dark" ? "light" : "dark";
			try {
				window.localStorage.setItem(STORAGE_KEY, next);
			} catch {}
			return next;
		});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, {
		value: {
			theme,
			setTheme,
			toggleTheme
		},
		children
	});
}
function useTheme() {
	const ctx = (0, import_react.useContext)(ThemeContext);
	if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
	return ctx;
}
var themeInitScript = `(function(){try{var k='${STORAGE_KEY}';var s=localStorage.getItem(k);var t=(s==='light'||s==='dark')?s:(window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');var r=document.documentElement;if(t==='dark')r.classList.add('dark');r.style.colorScheme=t;}catch(e){document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark';}})();`;
var pt_default = {
	nav: {
		"services": "Serviços",
		"process": "Processo",
		"portfolio": "Portfólio",
		"plans": "Planos",
		"faq": "FAQ",
		"contact": "Contato",
		"requestQuote": "Solicitar orçamento",
		"openMenu": "Abrir menu de navegação",
		"closeMenu": "Fechar menu",
		"primary": "Principal",
		"mobile": "Mobile",
		"arkyoStart": "Arkyo — início"
	},
	theme: {
		"toLight": "Alternar para modo claro",
		"toDark": "Alternar para modo escuro",
		"change": "Alterar tema"
	},
	lang: { "change": "Alterar idioma" },
	hero: {
		"badge": "Estúdio digital sob medida",
		"titleA": "Sites que simplificam",
		"titleB": "negócios reais.",
		"subtitle": "Para pequenos negócios na Bélgica e além, transformamos comunicação confusa, atendimento manual e presença digital fraca em sites claros, profissionais e fáceis de usar.",
		"viewServices": "Ver serviços",
		"mockScheduling": "Agendamentos hoje",
		"mockLeads": "Leads no site",
		"mockTime": "Tempo médio página",
		"mockRange": "Últimos 30 dias",
		"mockSessions": "Sessões",
		"whatsappCta": "Falar no WhatsApp",
		"mockDisclaimer": "Demonstração visual — dados ilustrativos"
	},
	valueProp: {
		"eyebrow": "Nossa proposta",
		"title": "A Arkyo não vende apenas sites.",
		"body": "Escutamos os problemas reais do seu dia a dia: mensagens desorganizadas, agendamentos perdidos e presença digital fraca. A partir disso, desenhamos soluções simples que devolvem tempo, organização e confiança ao seu negócio."
	},
	problems: {
		"eyebrow": "Problemas reais",
		"title": "Se algo aqui soa familiar, podemos ajudar.",
		"items": [
			{
				"title": "WhatsApp sobrecarregado",
				"desc": "Perde clientes porque não consegue responder todas as mensagens a tempo."
			},
			{
				"title": "Agendamentos confusos",
				"desc": "Marca, remarca e às vezes esquece compromissos. Falta um sistema que organize sua agenda."
			},
			{
				"title": "Informação espalhada",
				"desc": "Cardápio no Instagram, preços no PDF, contato na bio. Cliente se perde."
			},
			{
				"title": "Imagem que não representa",
				"desc": "Seu trabalho é excelente, mas a apresentação digital não transmite isso."
			}
		]
	},
	services: {
		"eyebrow": "Serviços",
		"title": "Soluções desenhadas para o seu momento.",
		"note": "Preços a partir de. Todo projeto começa com um briefing gratuito para entender seu contexto.",
		"custom": "Sob orçamento",
		"requestFor": "Solicitar orçamento para {{name}}",
		"items": {
			"landing-page": {
				"name": "Landing Page",
				"description": "Página única focada em conversão para um serviço, evento ou lançamento.",
				"features": [
					"Design sob medida",
					"Formulário integrado",
					"Otimizada para SEO"
				]
			},
			"site-institucional": {
				"name": "Site Institucional",
				"description": "Presença profissional completa para consolidar a imagem do seu negócio.",
				"features": [
					"Até 5 páginas",
					"Blog opcional",
					"Painel de contato"
				]
			},
			"site-agendamento": {
				"name": "Site com Agendamento",
				"description": "Sistema próprio de reservas online, sem depender de plataformas externas.",
				"features": [
					"Agenda integrada",
					"Confirmações automáticas",
					"Painel administrativo"
				]
			},
			"portfolio": {
				"name": "Portfólio",
				"description": "Vitrine visual para fotógrafos, designers, arquitetos e criativos.",
				"features": [
					"Galerias otimizadas",
					"Cases detalhados",
					"Contato direto"
				]
			},
			"pagina-vendas": {
				"name": "Página de Vendas",
				"description": "Estrutura de copywriting persuasiva para infoprodutos e ofertas.",
				"features": [
					"Copy orientada a conversão",
					"Checkout integrado",
					"Pixel & Analytics"
				]
			},
			"personalizado": {
				"name": "Projeto Personalizado",
				"description": "Soluções específicas, desenvolvidas sob medida para o seu negócio.",
				"features": [
					"Escopo customizado",
					"Consultoria dedicada",
					"Suporte contínuo"
				]
			}
		}
	},
	process: {
		"eyebrow": "Processo",
		"title": "Um caminho claro do briefing ao lançamento.",
		"steps": [
			{
				"title": "Análise",
				"desc": "Entendemos seu negócio, público e os gargalos atuais."
			},
			{
				"title": "Planejamento",
				"desc": "Definimos escopo, funcionalidades, cronograma e investimento."
			},
			{
				"title": "Design",
				"desc": "Criamos identidade visual e protótipos navegáveis."
			},
			{
				"title": "Desenvolvimento",
				"desc": "Codificamos com foco em performance, SEO e acessibilidade."
			},
			{
				"title": "Entrega",
				"desc": "Publicamos, treinamos você e transferimos o controle total."
			},
			{
				"title": "Suporte",
				"desc": "Acompanhamos, otimizamos e evoluímos o projeto ao longo do tempo."
			}
		]
	},
	portfolio: {
		"eyebrow": "Portfólio",
		"title": "Um projeto construído para resolver um problema real.",
		"challenges": "Desafios",
		"solutions": "Soluções",
		"cta": "Começar agora",
		"openSlot": {
			"title": "Seu projeto aqui.",
			"desc": "Estamos abertos para novos desafios. Conte o que você precisa."
		},
		"items": { "clinica-massoterapia": {
			"imageAlt": "Página inicial do site da JR Massoterapeuta, com apresentação dos serviços de massoterapia e botão de agendamento.",
			"title": "Sistema para clínica de massoterapia",
			"category": "Site com Agendamento",
			"summary": "Plataforma que substituiu o agendamento manual por WhatsApp por um sistema próprio de reservas online, com confirmação automática e painel administrativo.",
			"challenges": [
				"Agenda desorganizada via mensagens",
				"Falta de confirmação de horários",
				"Sem visibilidade sobre a ocupação da clínica"
			],
			"solutions": [
				"Sistema de agendamento próprio",
				"Painel administrativo com controle de horários",
				"Notificações automáticas para cliente e profissional"
			],
			"tags": [
				"Saúde & Bem-estar",
				"Agendamento",
				"Institucional"
			]
		} },
		"status": "Projeto em desenvolvimento"
	},
	differentials: {
		"eyebrow": "Diferenciais",
		"title": "O que fazemos com atenção redobrada.",
		"items": [
			{
				"title": "Design profissional",
				"desc": "Sem templates. Cada projeto é único."
			},
			{
				"title": "Atendimento personalizado",
				"desc": "Você fala direto com quem executa."
			},
			{
				"title": "Performance",
				"desc": "Boas práticas de Core Web Vitals aplicadas e verificadas antes da publicação."
			},
			{
				"title": "SEO técnico",
				"desc": "Estrutura técnica preparada para indexação, rastreamento e conteúdo bem compreendido pelo Google."
			},
			{
				"title": "Sites rápidos",
				"desc": "Imagens, fontes e código otimizados para reduzir o tempo de carregamento."
			},
			{
				"title": "Código limpo",
				"desc": "Legível, escalável, entregue com acesso total."
			}
		]
	},
	pricing: {
		"eyebrow": "Planos de manutenção",
		"title": "Seu site sempre no ar, sem dor de cabeça.",
		"subtitle": "Acompanhamento técnico contínuo para sites desenvolvidos pela Arkyo.",
		"recommended": "Recomendado",
		"cta": "Contratar plano",
		"perMonth": "por 30 dias",
		"scopeNote": "Planos disponíveis exclusivamente para sites desenvolvidos pela Arkyo. Cada contratação cobre 30 dias de acompanhamento técnico e pode ser renovada ao final do período.",
		"hostingNote": "A hospedagem, o domínio e eventuais serviços externos são contratados e pagos diretamente pelo cliente. A Arkyo realiza a configuração e o acompanhamento técnico na Hostinger.",
		"fineprint": "Pequenos ajustes incluem alterações de textos, imagens, links, telefones, horários e informações em páginas já existentes. Novas páginas, funcionalidades, integrações, automações, reformulações ou alterações estruturais recebem orçamento separado. O tempo não utilizado não é acumulado para o próximo período.",
		"plans": {
			"essencial": {
				"name": "Essencial",
				"description": "Para manter o site estável, atualizado e funcionando corretamente.",
				"features": [
					"Gestão técnica da hospedagem na Hostinger",
					"Verificação mensal do funcionamento do site",
					"Verificação do certificado SSL",
					"Conferência dos backups disponíveis",
					"Suporte por email",
					"Um pequeno ajuste de conteúdo por ciclo",
					"Prazo de resposta de até 3 dias úteis"
				]
			},
			"profissional": {
				"name": "Profissional",
				"description": "Para negócios que precisam de acompanhamento mais próximo.",
				"features": [
					"Tudo do Essencial",
					"Verificação semanal do funcionamento",
					"Teste dos formulários e links principais",
					"Suporte pelo WhatsApp",
					"Até 1 hora de pequenos ajustes por ciclo",
					"Verificação básica de desempenho e SEO",
					"Prazo de resposta de até 2 dias úteis"
				]
			},
			"evolucao": {
				"name": "Evolução",
				"description": "Para negócios que desejam manter e melhorar o site continuamente.",
				"features": [
					"Tudo do Profissional",
					"Atendimento prioritário",
					"Verificação de formulários e integrações",
					"Até 2 horas de melhorias por ciclo",
					"Otimizações básicas de desempenho e SEO",
					"Relatório resumido do período",
					"Prazo de resposta de até 1 dia útil"
				]
			}
		}
	},
	faq: {
		"eyebrow": "Perguntas frequentes",
		"title": "Tudo o que você precisa saber antes de começar.",
		"subtitle": "Não encontrou sua dúvida? Fale conosco pelo WhatsApp. Respondemos durante o horário comercial.",
		"items": [
			{
				"q": "Quanto tempo leva para desenvolver o meu site?",
				"a": "Depende do escopo. Uma landing page fica pronta em cerca de 5 a 10 dias úteis. Um site institucional leva de 2 a 4 semanas. Sites com agendamento ou funcionalidades personalizadas exigem 4 a 6 semanas. Você recebe um cronograma claro logo após o briefing."
			},
			{
				"q": "Preciso já ter um domínio e hospedagem?",
				"a": "Não. Cuidamos de tudo: registro de domínio, hospedagem, certificado SSL e emails profissionais. Se você já possui, integramos ao seu serviço atual."
			},
			{
				"q": "Como funciona o pagamento?",
				"a": "Trabalhamos com 50% no início do projeto e 50% na entrega. Para planos mensais de manutenção, o pagamento é recorrente."
			},
			{
				"q": "Vocês entregam o código-fonte?",
				"a": "Sim. O código é seu. Entregamos acesso completo ao repositório, hospedagem e domínio."
			},
			{
				"q": "O site será rápido e otimizado para o Google?",
				"a": "Sim. Todos os nossos projetos seguem boas práticas de performance (Core Web Vitals) e SEO técnico. Buscamos Lighthouse acima de 95."
			},
			{
				"q": "Consigo editar textos e imagens sozinho depois?",
				"a": "Sim, quando faz sentido. Podemos integrar um painel simples para você editar conteúdo. Para ajustes maiores, os planos de manutenção cobrem edições contínuas."
			},
			{
				"q": "Vocês trabalham com clientes fora da Bélgica?",
				"a": "Sim. Atendemos remotamente clientes em toda a Europa e países de língua portuguesa."
			},
			{
				"q": "E se eu precisar de algo que não está listado?",
				"a": "Todo projeto pode ser personalizado. Descreva sua necessidade no formulário e enviamos um orçamento sob medida."
			}
		],
		"whatsappCta": "Falar no WhatsApp"
	},
	contact: {
		"eyebrow": "Contato",
		"title": "Vamos conversar sobre o seu projeto.",
		"subtitle": "Conte brevemente o que você precisa pelo WhatsApp. Respondemos em até 24 horas úteis.",
		"channels": {
			"whatsapp": "WhatsApp",
			"email": "Email",
			"instagram": "Instagram"
		},
		"fields": {
			"name": "Nome",
			"namePh": "Seu nome completo",
			"company": "Empresa (opcional)",
			"companyPh": "Nome do seu negócio",
			"phone": "Telefone",
			"email": "Email",
			"emailPh": "voce@email.com",
			"instagram": "Instagram (opcional)",
			"instagramPh": "@seunegocio",
			"projectType": "Tipo de projeto",
			"budget": "Orçamento",
			"deadline": "Prazo",
			"message": "Mensagem",
			"messagePh": "Conte sobre seu negócio e o que você precisa.",
			"select": "Selecione",
			"consent": "Li e concordo com a",
			"privacy": "Política de Privacidade"
		},
		"submit": "Enviar mensagem",
		"sending": "Enviando...",
		"successTitle": "Mensagem enviada",
		"successBody": "Obrigado pelo contato. Entraremos em contato em até 24 horas úteis.",
		"sendAnother": "Enviar outra mensagem",
		"toast": "Recebemos sua mensagem — respondemos em breve.",
		"errors": {
			"name": "Informe seu nome",
			"phone": "Informe um telefone válido",
			"email": "Email inválido",
			"message": "Descreva um pouco seu projeto",
			"projectType": "Selecione o tipo de projeto",
			"budget": "Selecione uma faixa de orçamento",
			"deadline": "Selecione um prazo",
			"consent": "É necessário aceitar a Política de Privacidade",
			"submitFailed": "Não foi possível enviar sua mensagem. Tente novamente em alguns instantes.",
			"tooFast": "Envio bloqueado. Aguarde alguns segundos e tente novamente.",
			"duplicate": "Você já enviou esta mensagem. Aguarde nosso contato.",
			"fixFields": "Revise os campos destacados antes de enviar.",
			"rateLimited": "Muitas tentativas de envio. Tente novamente mais tarde."
		},
		"options": {
			"projectType": {
				"landing": "Landing Page",
				"institutional": "Site Institucional",
				"booking": "Site com Agendamento",
				"portfolio": "Portfólio",
				"sales": "Página de Vendas",
				"custom": "Projeto Personalizado"
			},
			"budget": {
				"upTo300": "Até €300",
				"r300to600": "€300 – €600",
				"r600to1000": "€600 – €1000",
				"above1000": "Acima de €1000",
				"unknown": "Ainda não sei"
			},
			"deadline": {
				"asap": "O quanto antes",
				"weeks2to4": "Em 2 a 4 semanas",
				"months1to2": "Em 1 a 2 meses",
				"noRush": "Sem urgência"
			}
		},
		"phone": {
			"label": "Telefone",
			"selectCountry": "Selecionar país",
			"searchPlaceholder": "Pesquisar país",
			"noResults": "Nenhum país encontrado",
			"help": "Selecione o país e digite seu número."
		},
		"sendingA11y": "Enviando sua mensagem, aguarde.",
		"whatsappMessage": "Olá! Vi o site da Arkyo e gostaria de conversar sobre um projeto para o meu negócio. Pode me explicar como funciona o processo e quais são os próximos passos?",
		"whatsappHint": "Uma conversa simples para entender seu momento e indicar o próximo passo.",
		"whatsappCta": "Iniciar conversa no WhatsApp",
		"whatsappNote": "A mensagem já vai preenchida e pode ser editada antes do envio."
	},
	footer: {
		"description": "Desenvolvemos sites e soluções digitais para pequenos negócios, profissionais autônomos e empresas em crescimento.",
		"nav": "Navegação",
		"contact": "Contato",
		"country": "Bélgica",
		"rights": "Todos os direitos reservados.",
		"privacy": "Política de Privacidade",
		"terms": "Termos de Uso"
	},
	cookies: {
		"text": "Utilizamos cookies para melhorar sua experiência e analisar o uso do site. Consulte nossa",
		"privacy": "Política de Privacidade",
		"reject": "Rejeitar",
		"accept": "Aceitar",
		"aria": "Consentimento de cookies"
	},
	errorPage: {
		"notFound": "Página não encontrada",
		"notFoundBody": "A página que você está procurando não existe ou foi movida.",
		"goHome": "Voltar ao início",
		"loadFail": "Esta página não carregou",
		"loadFailBody": "Algo deu errado do nosso lado. Tente atualizar ou volte ao início.",
		"tryAgain": "Tentar novamente"
	},
	legal: {
		"back": "Voltar",
		"lastUpdate": "Última atualização:",
		"privacy": {
			"title": "Política de Privacidade",
			"sections": {
				"who": {
					"title": "1. Quem somos",
					"body": "{{company}} é um estúdio digital com sede na {{country}}. Você pode nos contactar pelo email {{email}}."
				},
				"data": {
					"title": "2. Dados que coletamos",
					"items": ["Dados fornecidos no formulário de contato: nome, empresa, telefone, email, Instagram, mensagem, tipo de projeto, orçamento e prazo.", "Dados técnicos e de navegação (endereço IP, tipo de dispositivo, páginas visitadas), coletados por ferramentas analíticas mediante consentimento."]
				},
				"purpose": {
					"title": "3. Finalidade do tratamento",
					"intro": "Utilizamos seus dados exclusivamente para:",
					"items": [
						"Responder às suas solicitações de orçamento e contato.",
						"Executar contratos e prestar os serviços contratados.",
						"Melhorar a experiência do site (analytics agregado)."
					]
				},
				"legal": {
					"title": "4. Base legal (GDPR)",
					"body": "O tratamento é baseado no seu consentimento (art. 6.º, n.º 1, alínea a do RGPD) ao enviar o formulário e aceitar cookies, e na execução de contrato (art. 6.º, n.º 1, alínea b) quando aplicável."
				},
				"share": {
					"title": "5. Compartilhamento",
					"body": "Não vendemos seus dados. Podemos compartilhar dados com processadores estritamente necessários (hospedagem, envio de emails) que atuam sob acordos de proteção de dados."
				},
				"retention": {
					"title": "6. Retenção",
					"body": "Mantemos os dados apenas pelo tempo necessário à finalidade para a qual foram coletados, ou conforme exigido por lei."
				},
				"rights": {
					"title": "7. Seus direitos",
					"body": "Você tem direito de acesso, retificação, apagamento, oposição, portabilidade e limitação. Para exercê-los, contate {{email}}."
				},
				"cookies": {
					"title": "8. Cookies",
					"body": "Utilizamos cookies essenciais e, mediante consentimento, cookies analíticos. Você pode alterar sua preferência a qualquer momento limpando os dados do site."
				},
				"contact": {
					"title": "9. Contato",
					"body": "Dúvidas sobre esta política? Escreva para {{email}}."
				}
			}
		},
		"terms": {
			"title": "Termos de Uso",
			"sections": {
				"accept": {
					"title": "1. Aceitação",
					"body": "Ao acessar ou utilizar o site da {{company}}, você concorda com estes Termos."
				},
				"services": {
					"title": "2. Serviços",
					"body": "Oferecemos desenvolvimento de sites, landing pages, sistemas de agendamento e soluções digitais sob medida, mediante contrato específico."
				},
				"ip": {
					"title": "3. Propriedade intelectual",
					"body": "O conteúdo do site (marca, textos, layout) pertence à {{company}}. Projetos entregues seguem os termos definidos em contrato."
				},
				"liability": {
					"title": "4. Limitação de responsabilidade",
					"body": "O site é fornecido \"como está\". A {{company}} não se responsabiliza por indisponibilidades pontuais ou por decisões tomadas com base em conteúdos deste site."
				},
				"changes": {
					"title": "5. Alterações",
					"body": "Podemos atualizar estes Termos a qualquer momento. Alterações relevantes serão comunicadas no site."
				},
				"law": {
					"title": "6. Lei aplicável",
					"body": "Estes Termos são regidos pela legislação da {{country}}. Contato: {{email}}."
				}
			}
		}
	},
	seo: {
		"home": {
			"title": "Arkyo — Sites que simplificam negócios",
			"description": "Sites, landing pages e sistemas de agendamento sob medida para pequenos negócios na Bélgica e além. Design profissional, performance e SEO técnico.",
			"ogDescription": "Sites claros e soluções digitais sob medida para pequenos negócios na Bélgica e além."
		},
		"privacy": {
			"title": "Política de Privacidade — Arkyo",
			"description": "Como a Arkyo coleta, utiliza e protege seus dados pessoais em conformidade com o GDPR.",
			"ogDescription": "Como tratamos seus dados em conformidade com o GDPR."
		},
		"terms": {
			"title": "Termos de Uso — Arkyo",
			"description": "Termos e condições de uso dos serviços da Arkyo.",
			"ogDescription": "Termos e condições de uso dos serviços."
		}
	},
	about: {
		"eyebrow": "Sobre",
		"title": "Sobre a Arkyo",
		"body": "A Arkyo é um estúdio digital na Bélgica criado para ajudar pequenos negócios a construir uma presença online clara, profissional e funcional. Você fala diretamente com quem planeja, desenha e desenvolve o projeto, da primeira conversa à publicação e ao suporte."
	}
};
var en_default = {
	nav: {
		"services": "Services",
		"process": "Process",
		"portfolio": "Portfolio",
		"plans": "Plans",
		"faq": "FAQ",
		"contact": "Contact",
		"requestQuote": "Request a quote",
		"openMenu": "Open navigation menu",
		"closeMenu": "Close menu",
		"primary": "Primary",
		"mobile": "Mobile",
		"arkyoStart": "Arkyo — home"
	},
	theme: {
		"toLight": "Switch to light mode",
		"toDark": "Switch to dark mode",
		"change": "Change theme"
	},
	lang: { "change": "Change language" },
	hero: {
		"badge": "Tailor-made digital studio",
		"titleA": "Websites that simplify",
		"titleB": "real businesses.",
		"subtitle": "For small businesses in Belgium and beyond, we turn unclear communication, manual service and a weak digital presence into clear, professional and easy-to-use websites.",
		"viewServices": "See services",
		"mockScheduling": "Bookings today",
		"mockLeads": "Site leads",
		"mockTime": "Avg. time on page",
		"mockRange": "Last 30 days",
		"mockSessions": "Sessions",
		"whatsappCta": "Chat on WhatsApp",
		"mockDisclaimer": "Visual demonstration — illustrative data"
	},
	valueProp: {
		"eyebrow": "Our approach",
		"title": "Arkyo doesn't just sell websites.",
		"body": "We listen to the real day-to-day problems: messy inboxes, missed appointments and a weak digital presence. From there, we design simple solutions that give back time, structure and trust to your business."
	},
	problems: {
		"eyebrow": "Real problems",
		"title": "If any of this sounds familiar, we can help.",
		"items": [
			{
				"title": "Overloaded WhatsApp",
				"desc": "You lose clients because you can't answer every message in time."
			},
			{
				"title": "Messy scheduling",
				"desc": "Booking, rebooking and sometimes forgetting appointments. There is no system organising your agenda."
			},
			{
				"title": "Scattered information",
				"desc": "Menu on Instagram, prices in a PDF, contact in a bio. Clients get lost."
			},
			{
				"title": "An image that doesn't match",
				"desc": "Your work is excellent, but your digital presence doesn't show it."
			}
		]
	},
	services: {
		"eyebrow": "Services",
		"title": "Solutions designed for where you are today.",
		"note": "Starting prices. Every project begins with a free briefing to understand your context.",
		"custom": "Custom quote",
		"requestFor": "Request a quote for {{name}}",
		"items": {
			"landing-page": {
				"name": "Landing Page",
				"description": "Single page focused on conversion for a service, event or launch.",
				"features": [
					"Bespoke design",
					"Integrated form",
					"SEO-optimised"
				]
			},
			"site-institucional": {
				"name": "Company Website",
				"description": "Full professional presence to consolidate your brand image.",
				"features": [
					"Up to 5 pages",
					"Optional blog",
					"Contact panel"
				]
			},
			"site-agendamento": {
				"name": "Website with Booking",
				"description": "Your own online reservation system, with no dependency on third-party platforms.",
				"features": [
					"Integrated calendar",
					"Automatic confirmations",
					"Admin panel"
				]
			},
			"portfolio": {
				"name": "Portfolio",
				"description": "Visual showcase for photographers, designers, architects and creatives.",
				"features": [
					"Optimised galleries",
					"Detailed cases",
					"Direct contact"
				]
			},
			"pagina-vendas": {
				"name": "Sales Page",
				"description": "Persuasive copywriting structure for digital products and offers.",
				"features": [
					"Conversion-driven copy",
					"Integrated checkout",
					"Pixel & Analytics"
				]
			},
			"personalizado": {
				"name": "Custom Project",
				"description": "Specific solutions, built to measure for your business.",
				"features": [
					"Custom scope",
					"Dedicated consulting",
					"Ongoing support"
				]
			}
		}
	},
	process: {
		"eyebrow": "Process",
		"title": "A clear path from briefing to launch.",
		"steps": [
			{
				"title": "Discovery",
				"desc": "We understand your business, audience and current bottlenecks."
			},
			{
				"title": "Planning",
				"desc": "We define scope, features, timeline and investment."
			},
			{
				"title": "Design",
				"desc": "We craft visual identity and interactive prototypes."
			},
			{
				"title": "Development",
				"desc": "We build with a focus on performance, SEO and accessibility."
			},
			{
				"title": "Delivery",
				"desc": "We publish, train you and hand over full control."
			},
			{
				"title": "Support",
				"desc": "We follow, optimise and evolve the project over time."
			}
		]
	},
	portfolio: {
		"eyebrow": "Portfolio",
		"title": "One project built to solve a real business problem.",
		"challenges": "Challenges",
		"solutions": "Solutions",
		"cta": "Start now",
		"openSlot": {
			"title": "Your project here.",
			"desc": "We're open to new challenges. Tell us what you need."
		},
		"items": { "clinica-massoterapia": {
			"imageAlt": "Homepage of the JR Massoterapeuta website, presenting massage therapy services and a booking button.",
			"title": "System for a massage therapy clinic",
			"category": "Website with Booking",
			"summary": "Platform that replaced manual WhatsApp booking with an in-house reservation system, automatic confirmations and an admin dashboard.",
			"challenges": [
				"Disorganised bookings over messages",
				"Missing appointment confirmations",
				"No visibility over clinic capacity"
			],
			"solutions": [
				"Custom booking system",
				"Admin dashboard with time-slot control",
				"Automatic notifications for client and practitioner"
			],
			"tags": [
				"Health & Wellness",
				"Booking",
				"Corporate"
			]
		} },
		"status": "Project in development"
	},
	differentials: {
		"eyebrow": "Differentiators",
		"title": "What we handle with extra care.",
		"items": [
			{
				"title": "Professional design",
				"desc": "No templates. Every project is unique."
			},
			{
				"title": "Personal service",
				"desc": "You talk directly to the person who ships it."
			},
			{
				"title": "Performance",
				"desc": "Core Web Vitals best practices applied and checked before launch."
			},
			{
				"title": "Technical SEO",
				"desc": "Technical structure prepared for indexing, crawling and content Google can clearly understand."
			},
			{
				"title": "Fast sites",
				"desc": "Images, fonts and code optimised to reduce loading time."
			},
			{
				"title": "Clean code",
				"desc": "Readable, scalable, delivered with full access."
			}
		]
	},
	pricing: {
		"eyebrow": "Maintenance plans",
		"title": "Your site always online, with no headaches.",
		"subtitle": "Continuous technical care for websites built by Arkyo.",
		"recommended": "Recommended",
		"cta": "Choose plan",
		"perMonth": "per 30 days",
		"scopeNote": "Plans are available exclusively for websites built by Arkyo. Each subscription covers 30 days of technical care and can be renewed at the end of the period.",
		"hostingNote": "Hosting, domain and any external services are contracted and paid directly by the client. Arkyo handles the setup and technical follow-up on Hostinger.",
		"fineprint": "Small edits include changes to texts, images, links, phone numbers, opening hours and information on existing pages. New pages, features, integrations, automations, redesigns or structural changes are quoted separately. Unused time does not carry over to the next period.",
		"plans": {
			"essencial": {
				"name": "Essential",
				"description": "To keep the site stable, up to date and running correctly.",
				"features": [
					"Technical management of Hostinger hosting",
					"Monthly check of the site's operation",
					"SSL certificate check",
					"Review of available backups",
					"Email support",
					"One small content edit per cycle",
					"Response time up to 3 business days"
				]
			},
			"profissional": {
				"name": "Professional",
				"description": "For businesses that need closer follow-up.",
				"features": [
					"Everything in Essential",
					"Weekly operation check",
					"Testing of forms and key links",
					"WhatsApp support",
					"Up to 1 hour of small edits per cycle",
					"Basic performance and SEO check",
					"Response time up to 2 business days"
				]
			},
			"evolucao": {
				"name": "Evolution",
				"description": "For businesses that want to maintain and improve the site continuously.",
				"features": [
					"Everything in Professional",
					"Priority support",
					"Check of forms and integrations",
					"Up to 2 hours of improvements per cycle",
					"Basic performance and SEO optimisations",
					"Summary report for the period",
					"Response time up to 1 business day"
				]
			}
		}
	},
	faq: {
		"eyebrow": "Frequently asked",
		"title": "Everything you need to know before starting.",
		"subtitle": "Didn't find your question? Reach us on WhatsApp. We reply during business hours.",
		"items": [
			{
				"q": "How long does it take to build my site?",
				"a": "It depends on scope. A landing page ships in about 5 to 10 business days. A company site takes 2 to 4 weeks. Sites with booking or custom features take 4 to 6 weeks. You get a clear timeline right after the briefing."
			},
			{
				"q": "Do I need a domain and hosting already?",
				"a": "No. We handle everything: domain registration, hosting, SSL certificate and professional emails. If you already have them, we integrate with your current provider."
			},
			{
				"q": "How does payment work?",
				"a": "We take 50% at project start and 50% on delivery. Monthly maintenance plans are billed on a recurring basis."
			},
			{
				"q": "Do you deliver the source code?",
				"a": "Yes. The code is yours. We hand over full access to the repository, hosting and domain."
			},
			{
				"q": "Will the site be fast and SEO-ready?",
				"a": "Yes. Every project follows performance best practices (Core Web Vitals) and technical SEO. We target Lighthouse above 95."
			},
			{
				"q": "Can I edit text and images by myself later?",
				"a": "Yes, when it makes sense. We can integrate a simple panel for content edits. For bigger changes, maintenance plans cover ongoing work."
			},
			{
				"q": "Do you work with clients outside Belgium?",
				"a": "Yes. We work remotely with clients across Europe and Portuguese-speaking countries."
			},
			{
				"q": "What if I need something not listed here?",
				"a": "Every project can be customised. Describe your need in the form and we'll send a tailored quote."
			}
		],
		"whatsappCta": "Chat on WhatsApp"
	},
	contact: {
		"eyebrow": "Contact",
		"title": "Let's talk about your project.",
		"subtitle": "Tell us briefly what you need on WhatsApp. We reply within 24 business hours.",
		"channels": {
			"whatsapp": "WhatsApp",
			"email": "Email",
			"instagram": "Instagram"
		},
		"fields": {
			"name": "Name",
			"namePh": "Your full name",
			"company": "Company (optional)",
			"companyPh": "Your business name",
			"phone": "Phone",
			"email": "Email",
			"emailPh": "you@email.com",
			"instagram": "Instagram (optional)",
			"instagramPh": "@yourhandle",
			"projectType": "Project type",
			"budget": "Budget",
			"deadline": "Deadline",
			"message": "Message",
			"messagePh": "Tell us about your business and what you need.",
			"select": "Select",
			"consent": "I have read and agree to the",
			"privacy": "Privacy Policy"
		},
		"submit": "Send message",
		"sending": "Sending...",
		"successTitle": "Message sent",
		"successBody": "Thanks for reaching out. We'll get back to you within 24 business hours.",
		"sendAnother": "Send another message",
		"toast": "We got your message — we'll reply shortly.",
		"errors": {
			"name": "Please enter your name",
			"phone": "Enter a valid phone number",
			"email": "Invalid email",
			"message": "Please describe your project briefly",
			"projectType": "Select a project type",
			"budget": "Select a budget range",
			"deadline": "Select a deadline",
			"consent": "You must accept the Privacy Policy",
			"submitFailed": "We couldn't send your message. Please try again in a moment.",
			"tooFast": "Submission blocked. Wait a few seconds and try again.",
			"duplicate": "You already sent this message. We will get back to you.",
			"fixFields": "Please review the highlighted fields before sending.",
			"rateLimited": "Too many submission attempts. Please try again later."
		},
		"options": {
			"projectType": {
				"landing": "Landing Page",
				"institutional": "Company Website",
				"booking": "Website with Booking",
				"portfolio": "Portfolio",
				"sales": "Sales Page",
				"custom": "Custom Project"
			},
			"budget": {
				"upTo300": "Up to €300",
				"r300to600": "€300 – €600",
				"r600to1000": "€600 – €1000",
				"above1000": "Above €1000",
				"unknown": "Not sure yet"
			},
			"deadline": {
				"asap": "As soon as possible",
				"weeks2to4": "In 2 to 4 weeks",
				"months1to2": "In 1 to 2 months",
				"noRush": "No rush"
			}
		},
		"phone": {
			"label": "Phone",
			"selectCountry": "Select country",
			"searchPlaceholder": "Search country",
			"noResults": "No country found",
			"help": "Select your country and type your number."
		},
		"sendingA11y": "Sending your message, please wait.",
		"whatsappMessage": "Hello! I found Arkyo’s website and would like to discuss a project for my business. Could you explain how the process works and what the next steps are?",
		"whatsappHint": "A simple conversation to understand your situation and suggest the next step.",
		"whatsappCta": "Start a WhatsApp conversation",
		"whatsappNote": "The message is already filled in and can be edited before sending."
	},
	footer: {
		"description": "We build websites and digital solutions for small businesses, freelancers and growing companies.",
		"nav": "Navigation",
		"contact": "Contact",
		"country": "Belgium",
		"rights": "All rights reserved.",
		"privacy": "Privacy Policy",
		"terms": "Terms of Use"
	},
	cookies: {
		"text": "We use cookies to improve your experience and analyse site usage. See our",
		"privacy": "Privacy Policy",
		"reject": "Reject",
		"accept": "Accept",
		"aria": "Cookie consent"
	},
	errorPage: {
		"notFound": "Page not found",
		"notFoundBody": "The page you're looking for doesn't exist or has been moved.",
		"goHome": "Go home",
		"loadFail": "This page didn't load",
		"loadFailBody": "Something went wrong on our end. You can try refreshing or head back home.",
		"tryAgain": "Try again"
	},
	legal: {
		"back": "Back",
		"lastUpdate": "Last updated:",
		"privacy": {
			"title": "Privacy Policy",
			"sections": {
				"who": {
					"title": "1. Who we are",
					"body": "{{company}} is a digital studio based in {{country}}. You can reach us by email at {{email}}."
				},
				"data": {
					"title": "2. Data we collect",
					"items": ["Data provided in the contact form: name, company, phone, email, Instagram, message, project type, budget and deadline.", "Technical and browsing data (IP address, device type, pages visited) collected by analytics tools with consent."]
				},
				"purpose": {
					"title": "3. Purpose of processing",
					"intro": "We use your data exclusively to:",
					"items": [
						"Respond to your quote and contact requests.",
						"Execute contracts and deliver the services agreed.",
						"Improve the site experience (aggregate analytics)."
					]
				},
				"legal": {
					"title": "4. Legal basis (GDPR)",
					"body": "Processing is based on your consent (Article 6(1)(a) GDPR) when you submit the form and accept cookies, and on contract performance (Article 6(1)(b)) where applicable."
				},
				"share": {
					"title": "5. Sharing",
					"body": "We do not sell your data. We may share data with strictly necessary processors (hosting, email delivery) operating under data protection agreements."
				},
				"retention": {
					"title": "6. Retention",
					"body": "We keep data only as long as needed for the purpose it was collected, or as required by law."
				},
				"rights": {
					"title": "7. Your rights",
					"body": "You have the right to access, rectify, erase, object, portability and limitation. To exercise them, contact {{email}}."
				},
				"cookies": {
					"title": "8. Cookies",
					"body": "We use essential cookies and, with consent, analytics cookies. You can change your preference anytime by clearing the site data."
				},
				"contact": {
					"title": "9. Contact",
					"body": "Questions about this policy? Write to {{email}}."
				}
			}
		},
		"terms": {
			"title": "Terms of Use",
			"sections": {
				"accept": {
					"title": "1. Acceptance",
					"body": "By accessing or using the {{company}} website, you agree to these Terms."
				},
				"services": {
					"title": "2. Services",
					"body": "We offer development of websites, landing pages, booking systems and bespoke digital solutions under specific contract."
				},
				"ip": {
					"title": "3. Intellectual property",
					"body": "The site content (brand, text, layout) belongs to {{company}}. Delivered projects follow the terms defined in contract."
				},
				"liability": {
					"title": "4. Limitation of liability",
					"body": "The site is provided \"as is\". {{company}} is not liable for occasional outages or decisions made based on content from this site."
				},
				"changes": {
					"title": "5. Changes",
					"body": "We may update these Terms at any time. Relevant changes will be announced on the site."
				},
				"law": {
					"title": "6. Applicable law",
					"body": "These Terms are governed by the laws of {{country}}. Contact: {{email}}."
				}
			}
		}
	},
	seo: {
		"home": {
			"title": "Arkyo — Websites that simplify business",
			"description": "Bespoke websites, landing pages and booking systems for small businesses in Belgium and beyond. Professional design, performance and technical SEO.",
			"ogDescription": "Clear websites and bespoke digital solutions for small businesses in Belgium and beyond."
		},
		"privacy": {
			"title": "Privacy Policy — Arkyo",
			"description": "How Arkyo collects, uses and protects your personal data under the GDPR.",
			"ogDescription": "How we handle your data under the GDPR."
		},
		"terms": {
			"title": "Terms of Use — Arkyo",
			"description": "Terms and conditions for using Arkyo's services.",
			"ogDescription": "Terms and conditions for using the services."
		}
	},
	about: {
		"eyebrow": "About",
		"title": "About Arkyo",
		"body": "Arkyo is a Belgium-based digital studio created to help small businesses build a clear, professional and functional online presence. You work directly with the person planning, designing and developing your project, from the first conversation to launch and support."
	}
};
var fr_default = {
	nav: {
		"services": "Services",
		"process": "Processus",
		"portfolio": "Portfolio",
		"plans": "Forfaits",
		"faq": "FAQ",
		"contact": "Contact",
		"requestQuote": "Demander un devis",
		"openMenu": "Ouvrir le menu",
		"closeMenu": "Fermer le menu",
		"primary": "Principal",
		"mobile": "Mobile",
		"arkyoStart": "Arkyo — accueil"
	},
	theme: {
		"toLight": "Passer en mode clair",
		"toDark": "Passer en mode sombre",
		"change": "Changer de thème"
	},
	lang: { "change": "Changer de langue" },
	hero: {
		"badge": "Studio digital sur mesure",
		"titleA": "Des sites qui simplifient",
		"titleB": "les vraies entreprises.",
		"subtitle": "Pour les petites entreprises en Belgique et ailleurs, nous transformons une communication confuse, un service manuel et une présence digitale faible en sites clairs, professionnels et faciles à utiliser.",
		"viewServices": "Voir les services",
		"mockScheduling": "Rendez-vous aujourd'hui",
		"mockLeads": "Leads sur le site",
		"mockTime": "Temps moyen par page",
		"mockRange": "30 derniers jours",
		"mockSessions": "Sessions",
		"whatsappCta": "Écrire sur WhatsApp",
		"mockDisclaimer": "Démonstration visuelle — données illustratives"
	},
	valueProp: {
		"eyebrow": "Notre approche",
		"title": "Arkyo ne vend pas seulement des sites.",
		"body": "Nous écoutons vos vrais problèmes du quotidien : messages désordonnés, rendez-vous manqués et présence digitale faible. À partir de là, nous concevons des solutions simples qui redonnent temps, structure et confiance à votre entreprise."
	},
	problems: {
		"eyebrow": "Vrais problèmes",
		"title": "Si cela vous parle, nous pouvons vous aider.",
		"items": [
			{
				"title": "WhatsApp saturé",
				"desc": "Vous perdez des clients faute de pouvoir répondre à temps."
			},
			{
				"title": "Rendez-vous confus",
				"desc": "Vous prenez, déplacez et parfois oubliez des rendez-vous. Il manque un système pour organiser l'agenda."
			},
			{
				"title": "Informations dispersées",
				"desc": "Menu sur Instagram, prix en PDF, contact dans la bio. Le client se perd."
			},
			{
				"title": "Image qui ne représente pas",
				"desc": "Votre travail est excellent, mais votre présence digitale ne le montre pas."
			}
		]
	},
	services: {
		"eyebrow": "Services",
		"title": "Des solutions pensées pour votre moment.",
		"note": "Prix à partir de. Chaque projet commence par un briefing gratuit pour comprendre votre contexte.",
		"custom": "Sur devis",
		"requestFor": "Demander un devis pour {{name}}",
		"items": {
			"landing-page": {
				"name": "Landing Page",
				"description": "Page unique orientée conversion pour un service, un événement ou un lancement.",
				"features": [
					"Design sur mesure",
					"Formulaire intégré",
					"Optimisée SEO"
				]
			},
			"site-institucional": {
				"name": "Site vitrine",
				"description": "Présence professionnelle complète pour consolider l'image de votre entreprise.",
				"features": [
					"Jusqu'à 5 pages",
					"Blog optionnel",
					"Panneau de contact"
				]
			},
			"site-agendamento": {
				"name": "Site avec réservation",
				"description": "Votre propre système de réservation en ligne, sans dépendre de plateformes tierces.",
				"features": [
					"Agenda intégré",
					"Confirmations automatiques",
					"Panneau d'administration"
				]
			},
			"portfolio": {
				"name": "Portfolio",
				"description": "Vitrine visuelle pour photographes, designers, architectes et créatifs.",
				"features": [
					"Galeries optimisées",
					"Cas détaillés",
					"Contact direct"
				]
			},
			"pagina-vendas": {
				"name": "Page de vente",
				"description": "Structure de copywriting persuasive pour infoproduits et offres.",
				"features": [
					"Copy orientée conversion",
					"Checkout intégré",
					"Pixel & Analytics"
				]
			},
			"personalizado": {
				"name": "Projet personnalisé",
				"description": "Solutions spécifiques, développées sur mesure pour votre entreprise.",
				"features": [
					"Périmètre sur mesure",
					"Consulting dédié",
					"Support continu"
				]
			}
		}
	},
	process: {
		"eyebrow": "Processus",
		"title": "Un chemin clair du briefing au lancement.",
		"steps": [
			{
				"title": "Analyse",
				"desc": "Nous comprenons votre entreprise, votre public et vos blocages actuels."
			},
			{
				"title": "Planification",
				"desc": "Nous définissons périmètre, fonctionnalités, calendrier et investissement."
			},
			{
				"title": "Design",
				"desc": "Nous créons l'identité visuelle et des prototypes navigables."
			},
			{
				"title": "Développement",
				"desc": "Nous codons avec un focus performance, SEO et accessibilité."
			},
			{
				"title": "Livraison",
				"desc": "Nous publions, vous formons et transférons le contrôle total."
			},
			{
				"title": "Support",
				"desc": "Nous accompagnons, optimisons et faisons évoluer le projet dans la durée."
			}
		]
	},
	portfolio: {
		"eyebrow": "Portfolio",
		"title": "Un projet conçu pour résoudre un vrai problème d’entreprise.",
		"challenges": "Défis",
		"solutions": "Solutions",
		"cta": "Commencer",
		"openSlot": {
			"title": "Votre projet ici.",
			"desc": "Nous sommes ouverts aux nouveaux défis. Dites-nous ce dont vous avez besoin."
		},
		"items": { "clinica-massoterapia": {
			"imageAlt": "Page d’accueil du site de JR Massoterapeuta, présentant les services de massothérapie et le bouton de réservation.",
			"title": "Système pour clinique de massothérapie",
			"category": "Site avec réservation",
			"summary": "Plateforme qui a remplacé la prise de rendez-vous manuelle par WhatsApp par un système de réservation propre, avec confirmation automatique et tableau de bord admin.",
			"challenges": [
				"Agenda désorganisé par messages",
				"Manque de confirmation des créneaux",
				"Pas de visibilité sur la charge de la clinique"
			],
			"solutions": [
				"Système de réservation propre",
				"Tableau de bord avec contrôle des créneaux",
				"Notifications automatiques client et praticien"
			],
			"tags": [
				"Santé & bien-être",
				"Réservation",
				"Vitrine"
			]
		} },
		"status": "Projet en cours de développement"
	},
	differentials: {
		"eyebrow": "Différenciateurs",
		"title": "Ce que nous soignons particulièrement.",
		"items": [
			{
				"title": "Design professionnel",
				"desc": "Pas de template. Chaque projet est unique."
			},
			{
				"title": "Service personnalisé",
				"desc": "Vous parlez directement à celui qui exécute."
			},
			{
				"title": "Performance",
				"desc": "Bonnes pratiques Core Web Vitals appliquées et vérifiées avant la mise en ligne."
			},
			{
				"title": "SEO technique",
				"desc": "Structure technique préparée pour l’indexation, l’exploration et un contenu clairement compris par Google."
			},
			{
				"title": "Sites rapides",
				"desc": "Images, polices et code optimisés pour réduire le temps de chargement."
			},
			{
				"title": "Code propre",
				"desc": "Lisible, évolutif, livré avec accès complet."
			}
		]
	},
	pricing: {
		"eyebrow": "Forfaits de maintenance",
		"title": "Votre site toujours en ligne, sans tracas.",
		"subtitle": "Suivi technique continu pour les sites développés par Arkyo.",
		"recommended": "Recommandé",
		"cta": "Choisir le forfait",
		"perMonth": "pour 30 jours",
		"scopeNote": "Forfaits disponibles exclusivement pour les sites développés par Arkyo. Chaque souscription couvre 30 jours de suivi technique et peut être renouvelée à la fin de la période.",
		"hostingNote": "L'hébergement, le domaine et les éventuels services externes sont souscrits et payés directement par le client. Arkyo assure la configuration et le suivi technique sur Hostinger.",
		"fineprint": "Les petits ajustements comprennent les modifications de textes, images, liens, téléphones, horaires et informations sur des pages déjà existantes. Les nouvelles pages, fonctionnalités, intégrations, automatisations, refontes ou modifications structurelles font l'objet d'un devis séparé. Le temps non utilisé n'est pas reporté sur la période suivante.",
		"plans": {
			"essencial": {
				"name": "Essentiel",
				"description": "Pour garder le site stable, à jour et pleinement fonctionnel.",
				"features": [
					"Gestion technique de l'hébergement sur Hostinger",
					"Vérification mensuelle du fonctionnement du site",
					"Vérification du certificat SSL",
					"Contrôle des sauvegardes disponibles",
					"Support par email",
					"Un petit ajustement de contenu par cycle",
					"Délai de réponse jusqu'à 3 jours ouvrés"
				]
			},
			"profissional": {
				"name": "Professionnel",
				"description": "Pour les entreprises qui ont besoin d'un suivi plus rapproché.",
				"features": [
					"Tout l'Essentiel",
					"Vérification hebdomadaire du fonctionnement",
					"Test des formulaires et des liens principaux",
					"Support par WhatsApp",
					"Jusqu'à 1 heure de petits ajustements par cycle",
					"Vérification de base des performances et du SEO",
					"Délai de réponse jusqu'à 2 jours ouvrés"
				]
			},
			"evolucao": {
				"name": "Évolution",
				"description": "Pour les entreprises qui souhaitent maintenir et améliorer le site en continu.",
				"features": [
					"Tout le Professionnel",
					"Traitement prioritaire",
					"Vérification des formulaires et des intégrations",
					"Jusqu'à 2 heures d'améliorations par cycle",
					"Optimisations de base des performances et du SEO",
					"Rapport de synthèse de la période",
					"Délai de réponse jusqu'à 1 jour ouvré"
				]
			}
		}
	},
	faq: {
		"eyebrow": "Questions fréquentes",
		"title": "Tout ce qu'il faut savoir avant de commencer.",
		"subtitle": "Vous n'avez pas trouvé votre question ? Contactez-nous sur WhatsApp. Nous répondons pendant les heures ouvrées.",
		"items": [
			{
				"q": "Combien de temps pour développer mon site ?",
				"a": "Cela dépend du périmètre. Une landing page est prête en 5 à 10 jours ouvrés. Un site vitrine prend 2 à 4 semaines. Les sites avec réservation ou fonctions personnalisées prennent 4 à 6 semaines. Vous recevez un planning clair après le briefing."
			},
			{
				"q": "Dois-je déjà avoir un domaine et un hébergement ?",
				"a": "Non. Nous nous occupons de tout : enregistrement du domaine, hébergement, certificat SSL et emails professionnels. Si vous en avez déjà, nous nous intégrons à votre service actuel."
			},
			{
				"q": "Comment fonctionne le paiement ?",
				"a": "50 % au début du projet et 50 % à la livraison. Les forfaits de maintenance mensuels sont facturés de façon récurrente."
			},
			{
				"q": "Livrez-vous le code source ?",
				"a": "Oui. Le code vous appartient. Nous livrons l'accès complet au dépôt, à l'hébergement et au domaine."
			},
			{
				"q": "Le site sera-t-il rapide et optimisé pour Google ?",
				"a": "Oui. Tous nos projets suivent les bonnes pratiques de performance (Core Web Vitals) et de SEO technique. Nous visons un Lighthouse au-dessus de 95."
			},
			{
				"q": "Puis-je modifier textes et images ensuite ?",
				"a": "Oui, quand cela a du sens. Nous pouvons intégrer un panneau simple pour éditer le contenu. Pour de plus grands changements, les forfaits de maintenance couvrent les évolutions."
			},
			{
				"q": "Travaillez-vous avec des clients hors Belgique ?",
				"a": "Oui. Nous travaillons à distance avec des clients dans toute l'Europe et dans les pays lusophones."
			},
			{
				"q": "Et si j'ai besoin de quelque chose qui n'est pas listé ?",
				"a": "Chaque projet peut être personnalisé. Décrivez votre besoin dans le formulaire et nous envoyons un devis sur mesure."
			}
		],
		"whatsappCta": "Écrire sur WhatsApp"
	},
	contact: {
		"eyebrow": "Contact",
		"title": "Parlons de votre projet.",
		"subtitle": "Expliquez-nous brièvement votre besoin sur WhatsApp. Nous répondons sous 24 heures ouvrées.",
		"channels": {
			"whatsapp": "WhatsApp",
			"email": "Email",
			"instagram": "Instagram"
		},
		"fields": {
			"name": "Nom",
			"namePh": "Votre nom complet",
			"company": "Entreprise (optionnel)",
			"companyPh": "Nom de votre activité",
			"phone": "Téléphone",
			"email": "Email",
			"emailPh": "vous@email.com",
			"instagram": "Instagram (optionnel)",
			"instagramPh": "@votrecompte",
			"projectType": "Type de projet",
			"budget": "Budget",
			"deadline": "Délai",
			"message": "Message",
			"messagePh": "Parlez-nous de votre activité et de ce dont vous avez besoin.",
			"select": "Sélectionner",
			"consent": "J'ai lu et j'accepte la",
			"privacy": "Politique de confidentialité"
		},
		"submit": "Envoyer le message",
		"sending": "Envoi...",
		"successTitle": "Message envoyé",
		"successBody": "Merci pour votre message. Nous revenons vers vous sous 24 heures ouvrées.",
		"sendAnother": "Envoyer un autre message",
		"toast": "Message reçu — nous vous répondons rapidement.",
		"errors": {
			"name": "Indiquez votre nom",
			"phone": "Indiquez un téléphone valide",
			"email": "Email invalide",
			"message": "Décrivez brièvement votre projet",
			"projectType": "Sélectionnez un type de projet",
			"budget": "Sélectionnez un budget",
			"deadline": "Sélectionnez un délai",
			"consent": "Vous devez accepter la Politique de confidentialité",
			"submitFailed": "Impossible d'envoyer votre message. Réessayez dans un instant.",
			"tooFast": "Envoi bloqué. Attendez quelques secondes et réessayez.",
			"duplicate": "Vous avez déjà envoyé ce message. Nous vous répondrons bientôt.",
			"fixFields": "Veuillez vérifier les champs en surbrillance avant l’envoi.",
			"rateLimited": "Trop de tentatives d’envoi. Réessayez plus tard."
		},
		"options": {
			"projectType": {
				"landing": "Landing Page",
				"institutional": "Site vitrine",
				"booking": "Site avec réservation",
				"portfolio": "Portfolio",
				"sales": "Page de vente",
				"custom": "Projet personnalisé"
			},
			"budget": {
				"upTo300": "Jusqu'à 300 €",
				"r300to600": "300 € – 600 €",
				"r600to1000": "600 € – 1000 €",
				"above1000": "Plus de 1000 €",
				"unknown": "Je ne sais pas encore"
			},
			"deadline": {
				"asap": "Dès que possible",
				"weeks2to4": "Dans 2 à 4 semaines",
				"months1to2": "Dans 1 à 2 mois",
				"noRush": "Pas d'urgence"
			}
		},
		"phone": {
			"label": "Téléphone",
			"selectCountry": "Choisir le pays",
			"searchPlaceholder": "Rechercher un pays",
			"noResults": "Aucun pays trouvé",
			"help": "Choisissez le pays et saisissez votre numéro."
		},
		"sendingA11y": "Envoi de votre message, veuillez patienter.",
		"whatsappMessage": "Bonjour ! J’ai découvert le site d’Arkyo et je souhaite discuter d’un projet pour mon entreprise. Pouvez-vous m’expliquer le déroulement et les prochaines étapes ?",
		"whatsappHint": "Une conversation simple pour comprendre votre situation et proposer la prochaine étape.",
		"whatsappCta": "Démarrer une conversation WhatsApp",
		"whatsappNote": "Le message est déjà préparé et peut être modifié avant l’envoi."
	},
	footer: {
		"description": "Nous développons des sites et solutions digitales pour petites entreprises, indépendants et sociétés en croissance.",
		"nav": "Navigation",
		"contact": "Contact",
		"country": "Belgique",
		"rights": "Tous droits réservés.",
		"privacy": "Politique de confidentialité",
		"terms": "Conditions d'utilisation"
	},
	cookies: {
		"text": "Nous utilisons des cookies pour améliorer votre expérience et analyser l'usage du site. Consultez notre",
		"privacy": "Politique de confidentialité",
		"reject": "Refuser",
		"accept": "Accepter",
		"aria": "Consentement aux cookies"
	},
	errorPage: {
		"notFound": "Page introuvable",
		"notFoundBody": "La page que vous cherchez n'existe pas ou a été déplacée.",
		"goHome": "Accueil",
		"loadFail": "Cette page n'a pas chargé",
		"loadFailBody": "Un souci de notre côté. Actualisez ou revenez à l'accueil.",
		"tryAgain": "Réessayer"
	},
	legal: {
		"back": "Retour",
		"lastUpdate": "Dernière mise à jour :",
		"privacy": {
			"title": "Politique de confidentialité",
			"sections": {
				"who": {
					"title": "1. Qui sommes-nous",
					"body": "{{company}} est un studio digital basé en {{country}}. Vous pouvez nous contacter par email à {{email}}."
				},
				"data": {
					"title": "2. Données collectées",
					"items": ["Données fournies dans le formulaire : nom, entreprise, téléphone, email, Instagram, message, type de projet, budget et délai.", "Données techniques et de navigation (adresse IP, type d'appareil, pages visitées) collectées via des outils analytiques avec consentement."]
				},
				"purpose": {
					"title": "3. Finalité du traitement",
					"intro": "Nous utilisons vos données exclusivement pour :",
					"items": [
						"Répondre à vos demandes de devis et de contact.",
						"Exécuter les contrats et fournir les services convenus.",
						"Améliorer l'expérience du site (analytics agrégés)."
					]
				},
				"legal": {
					"title": "4. Base légale (RGPD)",
					"body": "Le traitement repose sur votre consentement (art. 6, § 1, a du RGPD) lors de l'envoi du formulaire et de l'acceptation des cookies, et sur l'exécution du contrat (art. 6, § 1, b) le cas échéant."
				},
				"share": {
					"title": "5. Partage",
					"body": "Nous ne vendons pas vos données. Nous pouvons les partager avec des sous-traitants strictement nécessaires (hébergement, envoi d'emails) sous accords de protection des données."
				},
				"retention": {
					"title": "6. Conservation",
					"body": "Nous conservons les données uniquement le temps nécessaire à la finalité pour laquelle elles ont été collectées, ou selon la loi."
				},
				"rights": {
					"title": "7. Vos droits",
					"body": "Vous disposez des droits d'accès, rectification, effacement, opposition, portabilité et limitation. Pour les exercer, contactez {{email}}."
				},
				"cookies": {
					"title": "8. Cookies",
					"body": "Nous utilisons des cookies essentiels et, avec consentement, des cookies analytiques. Vous pouvez changer votre préférence à tout moment en effaçant les données du site."
				},
				"contact": {
					"title": "9. Contact",
					"body": "Questions sur cette politique ? Écrivez à {{email}}."
				}
			}
		},
		"terms": {
			"title": "Conditions d'utilisation",
			"sections": {
				"accept": {
					"title": "1. Acceptation",
					"body": "En accédant ou en utilisant le site {{company}}, vous acceptez ces Conditions."
				},
				"services": {
					"title": "2. Services",
					"body": "Nous proposons du développement de sites, landing pages, systèmes de réservation et solutions digitales sur mesure, sous contrat spécifique."
				},
				"ip": {
					"title": "3. Propriété intellectuelle",
					"body": "Le contenu du site (marque, textes, mise en page) appartient à {{company}}. Les projets livrés suivent les conditions du contrat."
				},
				"liability": {
					"title": "4. Limitation de responsabilité",
					"body": "Le site est fourni \"en l'état\". {{company}} n'est pas responsable des indisponibilités ponctuelles ni des décisions prises sur la base de son contenu."
				},
				"changes": {
					"title": "5. Modifications",
					"body": "Nous pouvons mettre à jour ces Conditions à tout moment. Les changements importants seront annoncés sur le site."
				},
				"law": {
					"title": "6. Loi applicable",
					"body": "Ces Conditions sont régies par le droit de la {{country}}. Contact : {{email}}."
				}
			}
		}
	},
	seo: {
		"home": {
			"title": "Arkyo — Des sites qui simplifient l'entreprise",
			"description": "Sites, landing pages et systèmes de réservation sur mesure pour petites entreprises en Belgique et ailleurs. Design professionnel, performance et SEO technique.",
			"ogDescription": "Des sites clairs et des solutions digitales sur mesure pour petites entreprises en Belgique et ailleurs."
		},
		"privacy": {
			"title": "Politique de confidentialité — Arkyo",
			"description": "Comment Arkyo collecte, utilise et protège vos données personnelles selon le RGPD.",
			"ogDescription": "Comment nous traitons vos données selon le RGPD."
		},
		"terms": {
			"title": "Conditions d'utilisation — Arkyo",
			"description": "Termes et conditions d'utilisation des services Arkyo.",
			"ogDescription": "Termes et conditions d'utilisation des services."
		}
	},
	about: {
		"eyebrow": "À propos",
		"title": "À propos d’Arkyo",
		"body": "Arkyo est un studio digital basé en Belgique, créé pour aider les petites entreprises à construire une présence en ligne claire, professionnelle et fonctionnelle. Vous échangez directement avec la personne qui planifie, conçoit et développe votre projet, du premier contact à la mise en ligne et au suivi."
	}
};
var LANGS = [
	"pt",
	"en",
	"fr"
];
var languageMeta = {
	pt: {
		label: "Português",
		flag: "🇧🇷"
	},
	en: {
		label: "English",
		flag: "🇬🇧"
	},
	fr: {
		label: "Français",
		flag: "🇫🇷"
	}
};
if (!instance.isInitialized) instance.use(initReactI18next).init({
	resources: {
		pt: { translation: pt_default },
		en: { translation: en_default },
		fr: { translation: fr_default }
	},
	lng: "pt",
	fallbackLng: "pt",
	supportedLngs: LANGS,
	interpolation: { escapeValue: false },
	returnObjects: true
});
var i18n_default = instance;
/**
* Applies the stored (or browser) language after hydration. Safe to call
* multiple times: it is a no-op when the language already matches.
*/
var LANG_STORAGE_KEY = "arkyo-lang";
var persistBound = false;
function syncDetectedLanguage() {
	if (typeof window === "undefined") return;
	const candidate = (window.localStorage.getItem("arkyo-lang") ?? window.navigator.language ?? "pt").slice(0, 2).toLowerCase();
	const next = LANGS.includes(candidate) ? candidate : "pt";
	if (!persistBound) {
		persistBound = true;
		instance.on("languageChanged", (lng) => {
			try {
				window.localStorage.setItem(LANG_STORAGE_KEY, lng);
			} catch {}
		});
	}
	if (instance.resolvedLanguage !== next) instance.changeLanguage(next);
}
var company = {
	name: "Arkyo",
	tagline: "Sites que simplificam negócios.",
	countryCode: "BE",
	founded: 2024
};
/** Single source of truth for every public Arkyo contact channel. */
var contact = {
	whatsapp: "+32 451 03 69 53",
	whatsappDigits: "32451036953",
	whatsappUrl: "https://wa.me/32451036953",
	instagram: "@arkyo.co",
	instagramUrl: "https://instagram.com/arkyo.co",
	email: "hello.arkyo@gmail.com",
	emailUrl: "mailto:hello.arkyo@gmail.com",
	phoneE164: "+32451036953",
	phoneUrl: "tel:+32451036953"
};
/**
* Builds the WhatsApp link. The optional message is pre-filled in the chat and
* stays editable by the visitor; nothing is sent automatically.
*/
function whatsappUrl(message) {
	const base = `https://wa.me/${contact.whatsappDigits}`;
	return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
/**
* Canonical public URL of the site (single source of truth).
* Planned production domain — not purchased/connected yet.
* Override with VITE_SITE_URL when the real domain goes live.
*/
var SITE_URL = "https://arkyo.co".replace(/\/+$/, "");
/** Host of the production domain, used to decide indexability. */
var SITE_HOST = SITE_URL.replace(/^https?:\/\//, "");
/** Absolute canonical URL for a given route path. */
function siteUrl(path = "/") {
	const clean = path.startsWith("/") ? path : `/${path}`;
	return `${SITE_URL}${clean === "/" ? "/" : clean}`;
}
/**
* Fixed revision date of the legal documents (Terms / Privacy Policy).
* Change it manually whenever the legal texts are actually revised.
*/
var LEGAL_UPDATED_AT = "2026-01-15";
var LEGAL_LOCALES = {
	pt: "pt-BR",
	en: "en-GB",
	fr: "fr-BE"
};
/** Formats the fixed legal revision date for the active language. */
function legalUpdatedLabel(language) {
	const locale = LEGAL_LOCALES[(language ?? "pt").slice(0, 2)] ?? "pt-BR";
	const [year, month, day] = LEGAL_UPDATED_AT.split("-").map(Number);
	return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString(locale, {
		day: "2-digit",
		month: "long",
		year: "numeric",
		timeZone: "UTC"
	});
}
var navItems = [
	{
		key: "services",
		hash: "servicos"
	},
	{
		key: "process",
		hash: "processo"
	},
	{
		key: "portfolio",
		hash: "portfolio"
	},
	{
		key: "plans",
		hash: "planos"
	},
	{
		key: "faq",
		hash: "faq"
	}
];
//#endregion
export { company as a, languageMeta as c, siteUrl as d, syncDetectedLanguage as f, whatsappUrl as h, ThemeProvider as i, legalUpdatedLabel as l, useTheme as m, SITE_HOST as n, contact as o, themeInitScript as p, SITE_URL as r, i18n_default as s, LANGS as t, navItems as u };
