import { AppDataSource } from './data-source'
import { Category } from './entity/Category'
import { Tech } from './entity/Tech'
import { Project } from './entity/Project'

async function seed() {
    await AppDataSource.initialize()
    console.log('📦 Banco conectado com sucesso.')

    const categoryRepo = AppDataSource.getRepository(Category)
    const techRepo = AppDataSource.getRepository(Tech)
    const projectRepo = AppDataSource.getRepository(Project)
    
    await AppDataSource.query('SET FOREIGN_KEY_CHECKS = 0;');

    await categoryRepo.clear()
    await techRepo.clear()
    await projectRepo.clear()

    await AppDataSource.query('SET FOREIGN_KEY_CHECKS = 1;');

    const categoriesData = [
        { name: 'Frontend', icon: 'hugeicons:web-design-02', description: 'Interface do usuário e experiência visual.' },
        { name: 'Backend', icon: 'game-icons:brain', description: 'Lógica de negócio, banco de dados e APIs.' },
        { name: 'Web', icon: 'mdi:web', description: 'Aplicações acessadas via navegador.' },
        { name: 'Desktop', icon: 'material-symbols-light:desktop-mac-outline-rounded', description: 'Aplicações instaladas localmente no computador.' },
        { name: 'Mobile', icon: 'stash:smartphone', description: 'Aplicações desenvolvidas para dispositivos móveis.' },
        { name: 'Games', icon: 'solar:gamepad-broken', description: 'Jogos digitais interativos para diversas plataformas.' }
    ]
    const categories = categoryRepo.create(categoriesData)
    await categoryRepo.save(categories)

    const techsData = [
        { name: 'aws', icon: 'logos:aws', description: 'Serviços de computação em nuvem da Amazon.' },
        { name: 'php', icon: 'devicon:php', description: 'Linguagem popular para desenvolvimento web backend.' },
        { name: 'laravel', icon: 'logos:laravel', description: 'Framework PHP moderno e elegante.' },
        { name: 'codeigniter', icon: 'logos:codeigniter-icon', description: 'Framework PHP leve e rápido.' },
        { name: 'wordpress', icon: 'skill-icons:wordpress', description: 'Plataforma para criação de sites e blogs.' },
        { name: 'html', icon: 'akar-icons:html-fill', description: 'Linguagem de marcação base da web.' },
        { name: 'css', icon: 'akar-icons:css-fill', description: 'Estilização de elementos visuais da web.' },
        { name: 'javascript', icon: 'vscode-icons:file-type-js-official', description: 'Linguagem principal para aplicações web interativas.' },
        { name: 'typescript', icon: 'skill-icons:typescript', description: 'Superset de JavaScript com tipagem estática.' },
        { name: 'node', icon: 'fa-brands:node', description: 'Ambiente de execução JavaScript no backend.' },
        { name: 'react', icon: 'devicon:react', description: 'Biblioteca JS para construir interfaces reativas.' },
        { name: 'react native', icon: 'devicon:reactnative-wordmark', description: 'Framework para apps mobile com React.' },
        { name: 'angular', icon: 'vscode-icons:file-type-angular', description: 'Framework completo para aplicações web.' },
        { name: 'vue', icon: 'logos:vue', description: 'Framework progressivo para interfaces web.' },
        { name: 'electron', icon: 'devicon:electron', description: 'Criação de apps desktop com tecnologias web.' },
        { name: 'python', icon: 'devicon:python-wordmark', description: 'Linguagem versátil para scripts, APIs e IA.' },
        { name: 'C++', icon: 'skill-icons:cpp', description: 'Linguagem de programação de alto desempenho.' },
        { name: 'C#', icon: 'skill-icons:cs', description: 'Linguagem orientada a objetos da Microsoft.' },
        { name: 'unity', icon: 'devicon:unity', description: 'Motor de jogos para 2D, 3D e realidade aumentada.' },
        { name: 'sql', icon: 'ph:file-sql-fill', description: 'Linguagem para manipulação de bancos relacionais.' },
        { name: 'mysql', icon: 'logos:mysql', description: 'Banco de dados relacional open-source.' },
        { name: 'postgresql', icon: 'devicon:postgresql', description: 'Banco de dados avançado e confiável.' },
        { name: 'figma', icon: 'devicon:figma', description: 'Ferramenta de design colaborativo para UI/UX.' },
        { name: 'telegram', icon: 'akar-icons:telegram-fill', description: 'Plataforma de mensagens usada para bots e comunicação segura.' }
    ];

    const techs = techRepo.create(techsData)
    await techRepo.save(techs)

    const techMap = new Map(techs.map(t => [t.name.toLowerCase(), t]));
    const categoryMap = new Map(categories.map(c => [c.name.toLowerCase(), c]));

    const projectsData = [
        {
            name: 'My Boteco',
            description: `My Boteco é um simulador de gerenciamento de bar em tempo real, onde o jogador precisa atender os clientes rapidamente para maximizar a satisfação. Com foco em agilidade e estratégia, o jogador prepara bebidas e comidas, ganha pontos de experiência (XP) e melhora a reputação do boteco. Cada decisão conta — um serviço rápido e eficiente é essencial para o sucesso.`,
            imageUrl: 'https://media.byissa.dev/my-boteco/preview.png',
            repositoryLink: 'https://github.com/issagomesdev/my-boteco',
            demoLink: 'my-boteco.byissa.dev',
            videoLink: '',
            orderNumber: 1,
            techSlugs: ['unity', 'c#'],
            categorySlugs: ['Games', 'Desktop'],
            content_file: 'my-boteco.md'
        },
        {
            name: 'Smart Option — Telegram finance Bot',
            description: `SmartOption é uma plataforma de investimentos automatizada no Telegram que permite cadastro de usuários, depósito de valores, recebimento de lucros diários, gestão de rede de afiliados e acesso ao suporte — tudo em uma interface conversacional. O projeto também conta com painel administrativo e integração com o PagBank.`,
            imageUrl: 'https://media.byissa.dev/smart-option/preview.png',
            repositoryLink: 'https://github.com/issagomesdev/smart-option',
            demoLink: 'web.telegram.org/k/#@smartoptionea_bot',
            videoLink: '',
            orderNumber: 2,
            techSlugs: ['telegram', 'node', 'typescript', 'javascript'],
            categorySlugs: ['Backend'],
            content_file: 'smart-option.md'
        },
        {
            name: 'Smart Option — Admin Panel for Telegram Finance Bot',
            description: `Painel de administração da Smart Option, uma plataforma de investimentos automatizada no Telegram. Desenvolvido com Next.js, React e Material UI, permite o gerenciamento completo de usuários, solicitações de suporte, controle de saldo, histórico detalhado de transações financeiras, visualização da rede de afiliados em vários níveis e gerenciamento de solicitações (suporte, saques, depósitos, etc.).`,
            imageUrl: 'https://media.byissa.dev/smart-option-admin/preview.png',
            repositoryLink: 'https://github.com/issagomesdev/smart-option-admin',
            demoLink: '',
            videoLink: '',
            orderNumber: 3,
            techSlugs: ['node', 'typescript', 'javascript'],
            categorySlugs: ['Web', 'Frontend'],
            content_file: 'smart-option-admin.md'
        },
        {
            name: 'Biko — Social platform for service providers and seekers',
            description: `Biko é uma plataforma que conecta clientes a prestadores de serviços informais, funcionando como uma rede social onde os usuários podem se cadastrar, compartilhar seus trabalhos e interagir por meio de postagens, curtidas e comentários.`,
            imageUrl: 'https://media.byissa.dev/biko/preview.png',
            repositoryLink: 'https://github.com/issagomesdev/biko',
            demoLink: 'biko.byissa.dev',
            videoLink: '',
            orderNumber: 4,
            techSlugs: ['javascript', 'typescript', 'react', 'node'],
            categorySlugs: ['Web', 'Frontend'],
            content_file: 'biko.md'
        },
        {
            name: 'Biko — Social platform for service providers and seekers (Laravel API)',
            description: `Biko é uma plataforma que conecta clientes a prestadores de serviços informais, funcionando como uma rede social onde os usuários podem se cadastrar, compartilhar seus trabalhos e interagir por meio de postagens, curtidas e comentários. Esta é a API backend desenvolvida com Laravel, responsável por gerenciar autenticação, perfis de usuários, postagens, interações sociais e armazenamento de dados.`,
            imageUrl: 'https://media.byissa.dev/biko/preview.png',
            repositoryLink: 'https://github.com/issagomesdev/biko-api',
            demoLink: '',
            videoLink: '',
            orderNumber: 5,
            techSlugs: ['php', 'laravel', 'sql', 'mysql'],
            categorySlugs: ['Web', 'Backend'],
            content_file: 'biko-api.md'
        },
        {
            name: 'Prefeitura de Sairé — Institutional CMS',
            description: `Este projeto é um site institucional municipal que inclui um CMS dinâmico, permitindo que os administradores gerenciem menus, páginas, publicações, galerias de fotos e outros conteúdos informativos por meio de um painel de administração intuitivo. O site é público e foi desenvolvido para o público do governo local.`,
            imageUrl: 'https://media.byissa.dev/saire/preview.png',
            repositoryLink: 'https://github.com/issagomesdev/saire',
            demoLink: 'saire.byissa.dev',
            videoLink: '',
            orderNumber: 6,
            techSlugs: ['php', 'laravel', 'html', 'css', 'javascript', 'sql', 'mysql'],
            categorySlugs: ['Web', 'Frontend'],
            content_file: 'saire.md'
        },
        {
            name: 'Listinha Vip — Event Management System',
            description: `O Listinha Vip é uma plataforma de gestão de eventos desenvolvida com Laravel, HTML, CSS e JavaScript. Ela permite que os usuários confirmem presença, incluam convidados e realizem check-in nos eventos por meio de uma interface amigável. A plataforma conta com uma área para participantes e um painel administrativo completo para os organizadores.`,
            imageUrl: 'https://media.byissa.dev/event-management/preview.png',
            repositoryLink: 'https://github.com/issagomesdev/event-management',
            demoLink: 'em.byissa.dev',
            videoLink: '',
            orderNumber: 7,
            techSlugs: ['php', 'laravel', 'html', 'css', 'javascript', 'sql', 'mysql'],
            categorySlugs: ['Web', 'Frontend'],
            content_file: 'event-management.md'
        },
        {
            name: 'CO2 Calculator — CO2 Emissions Calculation Model',
            description: `CO2 Calculator é um modelo web estático e responsivo projetado para empresas calcularem suas emissões de CO2 em diversas categorias, incluindo consumo de combustível, deslocamento de funcionários, emissões fugitivas, consumo de energia, transporte de produtos e equipamentos e viagens de negócios.`,
            imageUrl: 'https://media.byissa.dev/co2/preview.png',
            repositoryLink: 'https://github.com/issagomesdev/co2-calculator-template',
            demoLink: 'co2c.byissa.dev',
            videoLink: '',
            orderNumber: 8,
            techSlugs: ['php', 'html', 'css'],
            categorySlugs: ['Web', 'Frontend'],
            content_file: 'co2.md'
        },
        {
            name: 'Risk x Return — Investment Allocation Calculator',
            description: `Risk x Return é uma calculadora web com o objetivo de auxiliar na avaliação do impacto de realocações de investimentos. Ela simula como a transferência de fundos entre renda fixa, renda variável e ativos estrangeiros afeta tanto o risco da carteira quanto o retorno esperado.`,
            imageUrl: 'https://media.byissa.dev/rxr/preview.png',
            repositoryLink: 'https://github.com/issagomesdev/risk-vs-return',
            demoLink: 'rxr.byissa.dev',
            videoLink: '',
            orderNumber: 9,
            techSlugs: ['javascript', 'html', 'css'],
            categorySlugs: ['Web', 'Frontend'],
            content_file: 'rxr.md'
        },
        {
            name: 'Shopping Cart — Interactive Product Showcase',
            description: `Shopping Cart é um carrinho de compras responsivo e dinâmico. Ele permite que os usuários interajam com uma lista de produtos, simulem uma experiência de compra e visualizem galerias de produtos em um layout elegante.`,
            imageUrl: 'https://media.byissa.dev/shopping-cart/preview.png',
            repositoryLink: 'https://github.com/issagomesdev/shopping-cart',
            demoLink: 'shopping-cart.byissa.dev',
            videoLink: '',
            orderNumber: 10,
            techSlugs: ['javascript', 'html', 'css'],
            categorySlugs: ['Web', 'Frontend'],
            content_file: 'shopping-cart.md'
        },
        {
            name: 'PImage — Interactive Map Viewer & Editor',
            description: `O PImage é uma ferramenta simples e interativa para mapeamento de imagens, criada como uma solução leve para visualizar e editar dados baseados em mapas diretamente na interface web, ideal para casos de uso como mapeamento de cemitérios, mapas visuais de assentos, layouts de salas de aula ou qualquer representação espacial baseada em imagens.`,
            imageUrl: 'https://media.byissa.dev/pimage/preview.png',
            repositoryLink: 'https://github.com/issagomesdev/PImage',
            demoLink: 'pimage.byissa.dev',
            videoLink: '',
            orderNumber: 11,
            techSlugs: ['javascript', 'html', 'css'],
            categorySlugs: ['Web', 'Frontend'],
            content_file: 'pimage.md'
        },
        {
            name: 'SJC Educacional — School Management System',
            description: `SJC Educacional é uma plataforma de gestão escolar desenvolvida para auxiliar municípios na organização de seus sistemas de ensino público. Também pode ser adaptada para instituições privadas. Com módulos que abrangem gestão administrativa, cadastro de alunos, diário de classe, transporte, biblioteca, estoque e calendário escolar, o sistema oferece uma solução completa e escalável para as operações escolares.`,
            imageUrl: 'https://media.byissa.dev/sjc/preview.png',
            repositoryLink: 'https://github.com/issagomesdev/sjc-educacional',
            demoLink: 'sjceducacional.byissa.dev',
            videoLink: '',
            orderNumber: 12,
            techSlugs: ['php', 'laravel', 'html', 'css', 'javascript', 'sql', 'mysql'],
            categorySlugs: ['Web', 'Frontend'],
            content_file: 'sjced.md'
        },
        {
            name: 'SJC Cemitério — Cemetery Manager',
            description: `SJC Cemitério é uma plataforma de gestão de cemitérios desenvolvida para auxiliar os municípios na organização e controle de cemitérios públicos, além de oferecer compatibilidade com cemitérios privados. O sistema permite a gestão completa e eficiente de espaços de sepultamento, registros e processos funerários, com cadastro hierárquico (cemitérios, setores, quadras, talhões, ossários e gavetas), além de registros de óbitos, translados e geração de laudos.`,
            imageUrl: 'https://media.byissa.dev/sjcc/preview.png',
            repositoryLink: 'https://github.com/issagomesdev/sjc-cemiterio',
            demoLink: 'sjccemiterio.byissa.dev',
            videoLink: '',
            orderNumber: 13,
            techSlugs: ['php', 'laravel', 'html', 'css', 'javascript', 'sql', 'mysql'],
            categorySlugs: ['Web', 'Frontend'],
            content_file: 'sjcce.md'
        },
        {
            name: 'SJC Sistemas — Institutional Website',
            description: `Site institucional desenvolvido para a SJC Sistemas, empresa especializada em soluções educacionais para escolas e prefeituras. Desenvolvido com Laravel, Blade e JavaScript, o site apresenta a empresa, seus produtos, principais funcionalidades e canais de contato.`,
            imageUrl: 'https://media.byissa.dev/sjce/preview.png',
            repositoryLink: 'https://github.com/issagomesdev/sjc-site',
            demoLink: 'sjc.byissa.dev',
            videoLink: '',
            orderNumber: 14,
            techSlugs: ['php', 'laravel', 'html', 'css', 'javascript', 'sql', 'mysql'],
            categorySlugs: ['Web', 'Frontend'],
            content_file: 'sjc.md'
        }
    ]

    const projectsToCreate = projectsData.map(project => {
        return {
            ...project,
            techs: project.techSlugs.map(slug => techMap.get(slug.toLowerCase())!),
            categories: project.categorySlugs.map(slug => categoryMap.get(slug.toLowerCase())!)
        };
    });

    const projects = projectRepo.create(projectsToCreate);
    await projectRepo.save(projects);

    console.log('✅ Seed inserido com sucesso!')
    process.exit()
}

seed().catch((err) => {
    console.error('❌ Erro ao executar seed:', err)
    process.exit(1)
})
