# 🤖 Smart Option — Bot Financeiro no Telegram

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?style=for-the-badge&logo=node.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=white) ![Telegram](https://img.shields.io/badge/Telegram-Bot-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white) ![PagBank](https://img.shields.io/badge/PagBank-API-32B768?style=for-the-badge&logo=pagseguro&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-Auth-%2300A7E1?style=for-the-badge&logo=jsonwebtokens&logoColor=white) ![Next.js](https://img.shields.io/badge/Next.js-Admin%20Panel-%23000000?style=for-the-badge&logo=next.js&logoColor=white) [![GitHub Repo](https://img.shields.io/badge/GitHub-Repository%20Link-181717?style=for-the-badge&logo=github)](https://github.com/issagomesdev/smart-option) 

Plataforma automatizada de investimentos com **bot no Telegram**, **painel administrativo** e **integração com o PagBank**. Inclui fluxos completos de cadastro, movimentações financeiras, rede de afiliados e suporte.

Este projeto contém o **bot Telegram** e a **API RESTful** desenvolvidos em **Node.js**, responsáveis por todas as operações de backend:

💻 Você pode testar a versão demo em [Bot no Telegram](https://web.telegram.org/k/#@smartoptionea_bot)

> ⚠️ **Aviso Importante:**  
> Esta é uma versão de demonstração, criada apenas para fins de teste e visualização.  
> **Não realize transações ou pagamentos reais.**  
> O criador **não se responsabiliza** por operações financeiras reais realizadas com esta demo.

<h2>🧭 Index</h2>

<p>
  - 📌 <a style="color: unset;" href="#about">Sobre</a><br/> 
  - ✨ <a style="color: unset;" href="#features">Funcionalidades</a><br/>
  - 🛠️ <a style="color: unset;" href="#tech-stack">Tech Stack</a><br/>
</p>

<h2 id="about"> 📌 Sobre</h2>

**SmartOption** é uma plataforma de investimentos automatizada no Telegram que permite cadastro de usuários, depósito de valores, recebimento de lucros diários, gestão de rede de afiliados e acesso ao suporte — tudo em uma interface conversacional.

O projeto também inclui um [Repositório do Painel Administrativo](https://github.com/issagomesdev/smart-option-admin) desenvolvido com **Next.js + TypeScript**, usado para gerenciar usuários, saldos, solicitações e atividades da plataforma.

<h2 id="features">✨ Funcionalidades</h2>

### 🤖 Telegram Bot
- **Sistema de cadastro e login de usuários**
- **Menu de navegação intuitivo**
- **Integração com a API de pagamentos PagBank**  
  - Permite a adesão de produtos e efetuação de depósitos
  - Gera links de pagamento únicos para cada operação
  - Processa e atualiza transações automaticamente, liberando o produto ou crédito logo após a confirmação da PagBank
- **Atualização automática de validade de produtos**  
  - Verificação diária de planos expirados  
  - Cada plano tem validade de **30 dias após a adesão**  
  - Verifica o saldo do usuário para renovação automática  
  - Com saldo suficiente, renova por mais 30 dias; sem saldo, o usuário é marcado como inativo  
- **Sistema de lucratividade diária**  
  - Apenas **usuários ativos** recebem os lucros diários  
  - Os valores dependem do produto adquirido e do saldo atual do usuário  
- **Sistema de rede de afiliados com 3 níveis**  
  - Nível 1: afiliados convidados diretamente  
  - Nível 2: convidados pelos afiliados do nível 1  
  - Nível 3: convidados pelos afiliados do nível 2  
  - Usuários recebem comissões por adesões e lucros diários dos afiliados  
  - É possível ter afiliados ilimitados, mas os ganhos das comissões são limitados a 9 afiliados (3 por nível)  
  - Visualização completa da rede e níveis no menu "🚻 REDE"  
- **Menu financeiro**  
  - **Sistema de depósito** (deposite saldo para começar a ganhar rendimentos)  
  - **Solicitação de saque** a qualquer momento  
  - **Transferência de saldo** entre usuários por e-mail cadastrado  
  - Visualização de **saldo atual** com os **rendimentos acumulados**  
  - **Histórico completo de transações** com tipo, origem e data  
  - Acompanhar o **status** das solicitações de saque, depósito e adesão  
- **Suporte automatizado com escalonamento para atendimento humano**

> ℹ️ **Usuários ativos** são aqueles que possuem **um plano dentro da validade**. Os planos expiram em **30 dias** após a adesão.

### 🌐 Admin Panel API

- **Autenticação de administrador com controle de acesso**
- **Dashboard com métricas e estatísticas do sistema**
- **Consulta e administração completa dos dados de usuários**
- **Controle de solicitações, como:**
  - Depósitos  
  - Adesão a produtos  
  - Saques  
- **Visão geral da rede de afiliados e sua estrutura**
- **Integração com a API PagBank para operações automatizadas**
- **Gestão centralizada de todos os chamados de suporte**

<h2 id="tech-stack">🛠️ Tech Stack</h2>

- **Node.js** – Runtime do backend para o bot e a API
- **TypeScript** – JavaScript tipado para maior segurança e escalabilidade
- **Express.js** – Framework web para construção da API REST
- **node-telegram-bot-api** – Biblioteca para comunicação com a API do Telegram
- **PagBank API** – Gateway de pagamentos usado para adesões, depósitos e controle de transações
- **Cron Jobs (node-cron)** – Tarefas agendadas diárias (expiração de planos, lucros)
- **JWT (JSON Web Token)** – Autenticação segura para o painel administrativo
