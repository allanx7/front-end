async function carregarResumo() {
        const container = document.querySelector('.conteiner-cards');

        if (!container) return;

        try {
          const resposta = await fetch('../data.json');
          const dados = await resposta.json();

          container.innerHTML = dados
            .map(
              (item) => `
                <article class="blocos">
                  <div class="grupos">
                    <img src="${item.icon}" alt="${item.category}" />
                    <p>${item.category}</p>
                  </div>

                  <span class="pontuaçao">
                    ${item.score} <small>/ 100</small>
                  </span>
                </article>
              `
            )
            .join('');
        } catch (erro) {
          console.log('Erro ao carregar o JSON:', erro);
        }
      }

      carregarResumo();