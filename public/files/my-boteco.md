<h1>🍻 MY BOTECO</h1>

![Unity](https://img.shields.io/badge/unity-%23000000.svg?style=for-the-badge&logo=unity&logoColor=white)
![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white)
![Platform](https://img.shields.io/badge/Platform-PC-green?style=for-the-badge)
![Status](https://img.shields.io/badge/🛠️%20In%20Development-FF8C00?style=for-the-badge)


<p align="center">
  <img src="https://media.byissa.dev/my-boteco/preview.png" alt="Game Preview" style="max-width:600px; width:100%;"/>

**My Boteco** é um simulador de gerenciamento de bar em tempo real, onde o jogador precisa atender os clientes rapidamente para maximizar a satisfação. Com foco em agilidade e estratégia, o jogador prepara bebidas e comidas, ganha pontos de experiência (XP) e melhora a reputação do boteco. Cada decisão conta — um serviço rápido e eficiente é essencial para o sucesso.

[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/issagomesdev/my-boteco) [![🎮 Play here](https://img.shields.io/badge/🎮%20Play%20here-My%20Boteco-blueviolet?style=for-the-badge)](https://my-boteco.byissa.dev)

<h2>🧭 Index</h2>

<p>
  • <a href="#gameplay">🧩 Gameplay</a><br/> 
  • <a href="#roadmap">🚧 Roadmap</a><br/>
  • <a href="#tech-stack">🛠️ Tech Stack</a><br/>
</p>

<h2 id="gameplay">🧩 Gameplay</h2>

### ▶️ Start The Day

- O jogador inicia aproximando-se do avental azul no balcão, ativando a instrução para apertar `X` e começar.

- Isso faz com que alguns clientes apareçam nas mesas.

### 🧾 Collect Orders

- Aproximando-se de uma mesa e apertando `X`, o jogador coleta os pedidos.

- Os pedidos aparecem em um painel no canto superior direito da tela.

- Atualmente, apenas bebidas estão implementadas.

- Cada bebida possui um ID, nome, tempo de preparo e um sprite.

- Os pedidos contêm até 5 bebidas aleatórias, associadas a um número de mesa.

- A interface exibe os nomes das bebidas, número da mesa, tempo total de preparo (+60s de tolerância) e um cronômetro regressivo.

### 🥤 Prepare Drink

- O jogador se aproxima das bebidas no balcão e aperta `X` para abrir o menu.

- As bebidas são exibidas em uma lista horizontal com ícones e nomes.

- Usa-se [→] para navegar e Enter para selecionar e confirmar.

- Uma barra de progresso aparece mostrando o tempo restante de preparo.

- Após o preparo, a bebida vai para o inventário do lado direito da tela.

<h2 id="roadmap">🚧 Roadmap</h2>

### ✅ Implementado

- 👤 Jogador com movimentação básica  

- 🏠 Cenário com estilo de boteco  

- 🧾 Menu de bebidas  

- 🧊 Itens interativos no ambiente (balcão, mesas)  

- 🍹 Sistema de pedidos com bebidas aleatórias (até 5 por pedido)  

- 📦 Interface com painel de pedidos e tempo restante  

- 🍽️ Preparação de bebidas por interação e menu modal  

- ⏳ Barra de progresso para o preparo  

- 📥 Lote de inventário onde as bebidas prontas são armazenadas  

### 🔄 Planejado

- 📘 Tutorial interativo no início do jogo  

- 🧍‍♂️ Novos sprites de clientes variados  

- 🚶‍♂️ Animações de entrada de clientes e ida até as mesas  

- 🍔 Inclusão de comidas e sobremesas  

- 🧅 Sistema de ingredientes para bebidas e alimentos  

- 🔁 Fila de preparo simultâneo de itens  

- 🗑️ Opções de descartar, armazenar ou entregar os itens preparados 

- 🔼 Níveis com dificuldade progressiva (tempo, itens, clientes) 

- 😠 Sistema de humor do cliente (emojis, avaliação final)  

- ⭐ Sistema de XP com avaliação de desempenho  

### 💡 Ideias Futuras

- 📊 Tela de resultados com estatísticas ao final de cada fase  

- 🏆 Conquistas e desafios extras  

- 🎵 Trilha sonora ambiente e efeitos sonoros  

<h2 id="tech-stack">🛠️ Tech Stack</h2>

- 🎮 Unity (C#)

- 🖼️ Unity UI Toolkit / Canvas

- 🧠 ScriptableObject-based systems

