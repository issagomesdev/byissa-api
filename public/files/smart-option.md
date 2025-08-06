# 🤖 Smart Option — Bot Financeiro no Telegram

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?style=for-the-badge&logo=node.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=white) ![Telegram](https://img.shields.io/badge/Telegram-Bot-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white) ![PagBank](https://img.shields.io/badge/PagBank-API-32B768?style=for-the-badge&logo=pagseguro&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-Auth-%2300A7E1?style=for-the-badge&logo=jsonwebtokens&logoColor=white) ![Next.js](https://img.shields.io/badge/Next.js-Admin%20Panel-%23000000?style=for-the-badge&logo=next.js&logoColor=white) [![GitHub Repo](https://img.shields.io/badge/GitHub-Repository%20Link-181717?style=for-the-badge&logo=github)](https://github.com/issagomesdev/smart-option) 

<p align="center">
  <a href="#about">Sobre</a> •
  <a href="#features">Funcionalidades</a> •
  <a href="#technologies">Tecnologias</a> 
</p>

Plataforma automatizada de investimentos com **bot no Telegram**, **painel administrativo** e **integração com o PagBank**. Inclui fluxos completos de cadastro, movimentações financeiras, rede de afiliados e suporte.

Este repositório contém o **bot Telegram** e a **API RESTful** desenvolvidos em **Node.js**, responsáveis por todas as operações de backend:

💻 Você pode testar a versão demo em [Bot no Telegram](https://web.telegram.org/k/#@smartoptionea_bot)

> ⚠️ **Aviso Importante:**  
> Esta é uma versão de demonstração, criada apenas para fins de teste e visualização.  
> **Não realize transações ou pagamentos reais.**  
> O criador **não se responsabiliza** por operações financeiras reais realizadas com esta demo.

<h2 id="about"> 📌 Sobre</h2>

**SmartOption** é uma plataforma de investimentos automatizada baseada no Telegram. Permite que os usuários se cadastrem, depositem valores, recebam lucros diários, gerenciem sua rede de afiliados e acessem o suporte — tudo por meio de uma interface conversacional.

O projeto também inclui um [Repositório do Painel Administrativo](https://github.com/issagomesdev/smart-option-admin) desenvolvido com **Next.js + TypeScript**, usado para gerenciar usuários, saldos, solicitações e atividades da plataforma.

<h2 id="features">✨ Funcionalidades</h2>

### 🤖 Telegram Bot
- **Sistema de cadastro e login de usuários**
- **Menu de navegação intuitivo**
- **Integração com a API de pagamentos PagBank**  
  - Usada para adesão a produtos e depósitos  
  - Geração de links de pagamento personalizados  
  - Atualização automática das transações: libera produto ou crédito ao status "PAGO"  
- **Atualização automática de validade de produtos**  
  - Verificação diária de planos expirados  
  - Cada plano tem validade de **30 dias após a adesão**  
  - Verifica saldo do usuário para renovação automática  
  - Com saldo suficiente, renova por mais 30 dias; sem saldo, o usuário é marcado como inativo  
- **Sistema de lucratividade diária**  
  - Apenas **usuários ativos** (com planos válidos) recebem os lucros diários  
  - Os valores dependem do produto adquirido e do saldo atual do usuário  
- **Sistema de rede de afiliados com 3 níveis**  
  - Nível 1: afiliados convidados diretamente  
  - Nível 2: convidados pelos afiliados do nível 1  
  - Nível 3: convidados pelos afiliados do nível 2  
  - Usuários recebem comissões por adesões e lucros diários dos afiliados  
  - É possível ter afiliados ilimitados, mas só ganha comissões de até 9 (3 por nível)  
  - Visualização completa da rede e níveis no menu "🚻 REDE"  
- **Menu financeiro**  
  - **Sistema de depósito** (adicionar saldo para ganhar rendimentos)  
  - **Solicitação de saque** a qualquer momento  
  - **Transferência de saldo** entre usuários por e-mail cadastrado  
  - Visualização de **saldo atual** com os **rendimentos acumulados**  
  - **Histórico completo de transações** com tipo, origem e data  
  - Acompanhar o **status** das solicitações de saque, depósito e adesão  
- **Suporte automatizado com escalonamento para atendimento humano**

> ℹ️ **Usuários ativos** são aqueles com pelo menos **um plano válido**. Os planos expiram em **30 dias** após a contratação.

### 🌐 Admin Panel API

- **Autenticação de administrador com controle de acesso**
- **Dashboard com métricas e estatísticas do sistema**
- **Consulta e gerenciamento de dados dos usuários**
- **Gerenciamento de solicitações de:**
  - Depósitos  
  - Adesão a produtos  
  - Saques  
- **Visão geral da rede de afiliados e sua estrutura**
- **Integração com a API PagBank para operações automatizadas**
- **Gerenciamento centralizado dos chamados de suporte**

<h2 id="technologies">🛠️ Tecnologias</h2>

- **Node.js** – Runtime do backend para o bot e a API
- **TypeScript** – JavaScript tipado para maior segurança e escalabilidade
- **Express.js** – Framework web para construção da API REST
- **node-telegram-bot-api** – Biblioteca para comunicação com a API do Telegram
- **PagBank API** – Gateway de pagamentos usado para adesões, depósitos e controle de transações
- **Cron Jobs (node-cron)** – Tarefas agendadas diárias (expiração de planos, lucros)
- **JWT (JSON Web Token)** – Autenticação segura para o painel administrativo
