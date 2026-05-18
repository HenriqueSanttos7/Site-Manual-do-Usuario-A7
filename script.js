// =========================================================================
// BANCO DE DADOS INDEXADO DO MANUAL (Alimente aqui ao criar novas páginas)
// =========================================================================
const bancoDeDadosManuais = [
    {
        titulo: "Como realizar uma venda no PDV Checkout",
        modulo: "Vendas",
        descricao: "Passo a passo completo da abertura do Caixa de Recebimento e efetuação da venda no sistema.",
        url: "vendas/vendapdv.html",
        tags: ["caixa", "venda", "pdv", "checkout", "dinheiro", "cartão", "troco", "saldo inicial", "f7", "operador"]
    },
    {
        titulo: "Consulta e Cadastro de Clientes",
        modulo: "Arquivos de Cadastros",
        descricao: "Consulta e registro de novos clientes e base de dados geral do sistema.",
        url: "cadastros_arquivos/cadastro_clientes.html",
        tags: ["cliente", "cadastro", "cpf", "cnpj", "arquivos", "f2", "consultar cliente"]
    },
    {
        titulo: "Módulo Operacional de Vendas (Menu)",
        modulo: "Vendas",
        descricao: "Menu agregador das rotinas comerciais: PDV, Expedição, Notas de Saída, Orçamentos e Trocas.",
        url: "vendas/vendas.html",
        tags: ["vendas", "expedição", "nota de saída", "orçamento", "troca", "devolução", "faturamento"]
    },
    {
        titulo: "Expedição de Mercadorias",
        modulo: "Vendas",
        descricao: "Conferência de mercadorias lançadas, romaneios de entrega e validação de pacotes prontos para despacho.",
        url: "vendas/vendas.html", // Quando criar a página própria da expedição, mude aqui (Ex: vendas/expedicao.html)
        tags: ["expedição", "romaneio", "entrega", "conferência", "vendas", "pacote", "despacho"]
    },
    {
        titulo: "Nota Fiscal de Saída",
        modulo: "Vendas",
        descricao: "Emissão de NF-e, parametrização de CFOP, correções de notas tributadas e cancelamentos regulamentares.",
        url: "vendas/vendas.html", // Mude para a página própria quando criá-la
        tags: ["nota", "fiscal", "saída", "nfe", "cfop", "vendas", "imposto", "emissão"]
    }
];

// =========================================================================
// INTERFACE DA BUSCA GLOBAL (DROPDOWN DINÂMICO)
// =========================================================================
const inputBusca = document.getElementById('inputBuscaGlobal');
const containerResultados = document.getElementById('resultadosBusca');

if (inputBusca && containerResultados) {
    inputBusca.addEventListener('input', function(e) {
        let termo = e.target.value.toLowerCase().trim();
        containerResultados.innerHTML = ""; // Limpa os resultados antigos
        
        // Só começa a buscar a partir de 2 caracteres digitados
        if (termo.length < 2) {
            containerResultados.classList.add('d-none');
            return;
        }
        
        // Varre o banco procurando por título, descrição ou tags
        let achados = bancoDeDadosManuais.filter(item => {
            return item.titulo.toLowerCase().includes(termo) || 
                   item.descricao.toLowerCase().includes(termo) || 
                   item.tags.some(tag => tag.toLowerCase().includes(termo));
        });
        
        // Se encontrar alguma coisa, monta o menu suspenso
        if (achados.length > 0) {
            achados.forEach(item => {
                let itemHTML = `
                    <a href="${item.url}" class="list-group-item list-group-item-action p-3 text-start border-bottom" style="background: #ffffff;">
                        <div class="d-flex w-100 justify-content-between align-items-center mb-1">
                            <h6 class="mb-0 fw-bold" style="color: var(--primary-blue); font-size: 0.95rem;">${item.titulo}</h6>
                            <span class="badge rounded-pill px-2 py-1" style="background-color: var(--primary-blue); font-size: 0.75rem;">${item.modulo}</span>
                        </div>
                        <p class="mb-0 small text-muted text-start" style="font-size: 0.8rem; line-height: 1.3;">${item.descricao}</p>
                    </a>
                `;
                containerResultados.insertAdjacentHTML('beforeend', itemHTML);
            });
            containerResultados.classList.remove('d-none');
        } else {
            // Se não encontrar nada, avisa o usuário de forma amigável
            containerResultados.innerHTML = `<div class="list-group-item text-muted small p-3 bg-white text-start">Nenhum procedimento encontrado para "${e.target.value}"</div>`;
            containerResultados.classList.remove('d-none');
        }
    });

    // Fecha o menu de resultados se o usuário clicar em qualquer outro lugar da tela
    document.addEventListener('click', function(e) {
        if (!inputBusca.contains(e.target) && !containerResultados.contains(e.target)) {
            containerResultados.classList.add('d-none');
        }
    });
}

// =========================================================================
// CONTROLE DO BOTÃO "VOLTAR AO TOPO"
// =========================================================================
const btnTop = document.getElementById('btnBackToTop');
if (btnTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btnTop.style.display = 'flex';
        } else {
            btnTop.style.display = 'none';
        }
    });

    btnTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// =========================================================================
// INJEÇÃO DINÂMICA DO MODAL DE ZOOM DE IMAGEM
// =========================================================================
document.addEventListener('DOMContentLoaded', function() {
    const modalHTML = `
        <div class="modal fade" id="imageZoomModal" tabindex="-1" aria-hidden="true" style="z-index: 1060;">
          <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content bg-transparent border-0">
              <div class="modal-body p-0 text-center position-relative">
                <button type="button" class="btn-close btn-close-white position-absolute top-0 end-0 m-3 shadow-lg" data-bs-dismiss="modal" aria-label="Fechar" style="filter: invert(1) grayscale(1) brightness(2);"></button>
                <img id="modalZoomImage" src="" class="img-fluid rounded shadow-lg" alt="Interface Expandida" style="max-height: 88vh; border: 2px solid rgba(255,255,255,0.2);">
              </div>
            </div>
          </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
});

document.addEventListener('click', function(e) {
    if (e.target.matches('.media-box.has-image img')) {
        const srcImagem = e.target.getAttribute('src');
        const modalImg = document.getElementById('modalZoomImage');
        
        if (modalImg) {
            modalImg.setAttribute('src', srcImagem);
            const instModal = new bootstrap.Modal(document.getElementById('imageZoomModal'));
            instModal.show();
        }
    }
});