# 🛠️ Biko — Plataforma social para prestadores e contratantes de serviços

![Next.js](https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=next.js) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) [![GitHub Repo](https://img.shields.io/badge/GitHub-Repository%20Link-181717?style=for-the-badge&logo=github)](https://github.com/issagomesdev/biko) 

<p align="center">
  <img src="https://biko.byissa.dev/midia/preview.png" alt="preview" style="max-width:1000px; width:100%;"/>
</p>

![Status](https://img.shields.io/badge/status-in_development-yellow) 

**Biko** é uma plataforma que conecta clientes a prestadores de serviços informais, funcionando como uma rede social onde usuários podem se cadastrar, divulgar seus trabalhos e interagir por meio de publicações, curtidas e comentários.

Este repositório contém o código do **Frontend**, desenvolvido com **Next.js** + **TypeScript**, oferecendo uma interface moderna e envolvente.

🔗 A API Backend desenvolvida com Laravel está disponível [aqui](https://github.com/issagomesdev/biko-api).

<h2>🧭 Index</h2>
  
<p>
  - 📌 <a style="color: unset;" href="#about">Sobre</a><br/> 
  - 🚧 <a style="color: unset;" href="#roadmap">Roadmap</a><br/>
  - 🧪 <a style="color: unset;" href="#tech-stack">Tech Stack</a><br/>
</p>

<h2 id="about"> 📌 Sobre</h2>

Este projeto foi desenvolvido como trabalho final da disciplina **Laboratório de Empreendimentos Inovadores**, do curso de **Análise e Desenvolvimento de Sistemas (ADS)** da **UNINASSAU**.  

O objetivo é oferecer uma solução prática para conectar prestadores de serviços informais a possíveis clientes por meio de uma plataforma social, demonstrando a aplicação de conceitos de desenvolvimento de software e negócios inovadores aprendidos ao longo do curso.

💻 Você pode testar a versão online em: [biko.byissa.dev](https://biko.byissa.dev/)

<h2 id="roadmap"> 🚧 Roadmap</h2>

### ✅ Implementado

- Cadastro e autenticação de usuários (login, logout)
- Publicações estilo "timeline"
- Interações com curtidas e comentários
- Classificação de posts por categoria e tipo de usuário (cliente ou prestador)
- Filtros por categoria, tipo de usuário, localização e ordenação (mais recentes ou populares)
- Edição de perfil do usuário logado, incluindo seleção de categorias de atuação

### 🔄 Planejado

- Perfis públicos com posts e histórico de interações básicas
- Avaliações de serviços feitas por clientes e prestadores
- Notificações em tempo real
- Sistema de mensagens/chat privado
- Salvamento de publicações (favoritar)
- Sistema de denúncia de conteúdo impróprio

<h2 id="tech-stack"> 🧪 Tech Stack</h2>

Este projeto foi desenvolvido com as seguintes tecnologias e ferramentas:

- [Next.js](https://nextjs.org/) — Framework baseado em React para criação de aplicações web rápidas
- [TypeScript](https://www.typescriptlang.org/) — Linguagem com tipagem forte para um código mais escalável
- [CSS Modules](https://github.com/css-modules/css-modules) — Estilização modular e com escopo isolado
- [API do IBGE](https://servicodados.ibge.gov.br/api/docs/) — Utilizada para dados de localização (estados e cidades)
