# Manual do Usuário – A7 Gestão 🚀

Central de ajuda e documentação web interativa, moderna e totalmente responsiva desenvolvida para o sistema **A7 Gestão**, servindo como um guia prático e visual para os operadores e clientes.

## 📋 Sobre o Projeto
Este projeto foi desenvolvido em arquitetura web modular para espelhar fielmente a estrutura real de menus, abas e submódulos do software A7 Gestão. Ele fornece um passo a passo detalhado contendo capturas de tela, destaques visuais para atalhos de teclado e marcadores numéricos de campos para otimizar o aprendizado do usuário final.

## ✨ Funcionalidades Principais
* 🔍 **Busca Global Indexada:** Barra de pesquisa inteligente baseada em um banco de dados JavaScript que localiza qualquer rotina do sistema por títulos, descrições ou palavras-chave (tags), mesmo que estejam em subpastas profundas.
* 📱 **Design 100% Responsivo:** Desenvolvido com Bootstrap 5, garantindo uma leitura confortável e adaptada perfeitamente para telas de celulares.
* 🔎 **Zoom Inteligente de Imagens (Modal Global):** Cliques em qualquer screenshot do manual abrem automaticamente uma janela expandida em alta resolução na tela, sem necessidade de criar códigos repetitivos por página.
* 🔝 **Navegação Inteligente:** Inclui menu lateral ágil (Offcanvas) para saltar entre módulos e botão flutuante de rolagem automática para o topo da página.
* 💬 **Suporte Técnico Direto:** Integração no rodapé das páginas para acionamento de suporte imediato via WhatsApp.

## 📂 Organização Estrutural (Pastas)
A árvore de diretórios do projeto é sincronizada via script automatizado em Python (`criarpastas.py`), distribuindo as rotinas exatamente conforme o sumário oficial do sistema A7:
* `index.html` — Portal principal de entrada e motor da busca global.
* `style.css` — Folha de estilos unificada com a identidade visual da marca (Paleta `#0F49A6`).
* `script.js` — Inteligência da busca por tags e gerenciamento do modal de zoom.
* `01_arquivo/` — Cadastros base do sistema (Clientes, Contratos, Itens, Fornecedores).
* `02_compras/` — Notas de entrada, importações e cotações.
* `03_estoque/` — Controle de inventários, movimentações e Kardex.
* `04_producao/` — Ordens de produção e composição de insumos.
* `05_vendas/` — Operações comerciais, PDV Checkout (Frente de Caixa) e Notas de Saída.
* `06_os/` — Abertura e manutenção de Ordens de Serviço.
* `07_posto/` — Gerenciamento exclusivo de pistas de combustíveis.
* `08_financeiro/` — Fluxo de caixa, Contas a Pagar/Receber estruturadas e Cheques.
* `11_consultas/` — Logs, auditorias e históricos rápidos de movimentação.
* `12_relatorios/` — Fechamentos gerenciais, fiscais e balancetes estatísticos.

## 🛠️ Tecnologias Utilizadas
* HTML5
* CSS3 (Customizado & Utilitários Bootstrap 5)
* JavaScript (Vanilla JS / Puro)
* FontAwesome 6 (Biblioteca de Ícones)
* Python 3 (Script de automação de diretórios)

## 🔧 Como Executar e Contribuir
1. Clone este repositório na sua máquina local.
2. Para gerar novos arquivos HTML ou atualizar a árvore de diretórios caso o sistema mude, execute o script de automação na raiz:
   ```bash
   python criarpastas.py
