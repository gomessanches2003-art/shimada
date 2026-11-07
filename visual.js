(() => {
  const dashboardValues = {
    today: ['R$ 30,00', 'R$ 20,00', 'R$ 10,00', 'Exemplo de um dia · valores fictícios'],
    month: ['R$ 450,00', 'R$ 300,00', 'R$ 150,00', 'Exemplo de mês em andamento · valores fictícios']
  };
  document.querySelectorAll('[data-dashboard]').forEach(button => button.addEventListener('click', () => {
    const values = dashboardValues[button.dataset.dashboard];
    ['demo-spend','demo-meta','demo-google','demo-period'].forEach((id,i) => document.getElementById(id).textContent = values[i]);
    document.querySelectorAll('[data-dashboard]').forEach(item => {
      item.classList.toggle('selected', item === button);
      item.setAttribute('aria-pressed', String(item === button));
    });
  }));
  const screen = document.getElementById('buyer-screen');
  const scenes = [
    `<div class="screen-brand">Uma busca na região</div><div class="search-sim"><span>⌕</span> pré-moldados perto de mim</div><div class="search-lines"><i></i><i></i></div><div class="search-business"><div class="mini-building" aria-hidden="true"><i></i><i></i><i></i></div><span class="screen-pill">PERFIL + SITE</span><h3>Shimada Estruturas</h3><p>Pré-moldados em<br>Nova América da Colina</p><div class="screen-chips"><span>Produtos</span><span>Obras</span><span>Contato</span></div></div><p class="screen-note">Informações organizadas para quem está procurando.</p>`,
    `<div class="screen-brand"><span class="mini-avatar">S</span> shimada.e.l</div><div class="reel-sim"><span class="reel-label">POR DENTRO DA SHIMADA</span><div class="reel-beams" aria-hidden="true"><i></i><i></i><i></i><i></i></div><span class="reel-play" aria-hidden="true">▷</span><strong>Sua obra começa<br>muito antes<br>da montagem.</strong><small>Da fábrica ao projeto.</small></div><div class="reel-actions" aria-hidden="true">♡ &nbsp; ◯ &nbsp; ↗</div><p class="screen-note">Mostrar o processo ajuda a construir confiança.</p>`,
    `<div class="screen-brand"><span class="mini-avatar">S</span><div>Shimada Estruturas<small>Conversa ilustrativa</small></div></div><div class="message-date">PRIMEIRO CONTATO</div><div class="bubble customer">Olá! Vi o trabalho de vocês. Gostaria de saber mais sobre placas de concreto.<time>9:41</time></div><div class="bubble company">Olá! Qual é a cidade da obra e a medida aproximada que você precisa?<time>9:42</time></div><div class="contact-outcome"><span>↗</span><strong>Agora a conversa<br>é com sua equipe.</strong></div><p class="screen-note">O atendimento e o orçamento continuam com a Shimada.</p>`
  ];
  function show(index) {
    screen.innerHTML = scenes[index];
    screen.dataset.scene = index;
    document.querySelectorAll('[data-scene]').forEach(button => {
      const selected = Number(button.dataset.scene) === index;
      button.classList.toggle('selected', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) screen.animate([{opacity:.2,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}],{duration:320,easing:'ease-out'});
  }
  if (screen) {
    show(0);
    document.querySelectorAll('[data-scene]').forEach(button => button.addEventListener('click',()=>show(Number(button.dataset.scene))));
  }
  const artwork = document.querySelectorAll('.creative, .partnership, .phone-stage, .start-route');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries=>entries.forEach(entry=> {
      entry.target.classList.toggle('in-view',entry.isIntersecting);
    }),{threshold:.15});
    artwork.forEach(item=>observer.observe(item));
  }
})();
