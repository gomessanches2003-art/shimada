(() => {
  const content = [
    ['Sua obra é seu melhor argumento.', 'Vídeos da fábrica, da montagem e da obra pronta mostram a qualidade que uma arte sozinha não consegue mostrar.'],
    ['Sua empresa, na região que atende.', 'Campanhas em um raio de 150 km apresentam os produtos e levam quem tem interesse para uma conversa no WhatsApp.'],
    ['Mais informação para decidir.', 'Um site com produtos e obras, junto de um perfil do Google atualizado, ajuda quem pesquisa a conhecer a empresa.']
  ];
  const channels = [...document.querySelectorAll('[data-channel]')];
  channels.forEach(button => button.addEventListener('click', () => {
    const index = Number(button.dataset.channel);
    channels.forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
    document.querySelector('#channel-title').textContent = content[index][0];
    document.querySelector('#channel-description').textContent = content[index][1];
    document.querySelector('.detail-icon').textContent = `0${index + 1}`;
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) document.querySelector('.channel-detail').animate([{ opacity: .25, transform: 'translateY(6px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 280 });
  }));
  const monthly = document.querySelector('#monthly-breakdown');
  if (monthly) {
    monthly.innerHTML = '<div><span>Gestão mensal</span><strong>R$ 900</strong></div><div><span>Mídia mensal · paga às plataformas</span><strong>R$ 900</strong></div><div class="total-line"><span>Investimento mensal previsto</span><strong>R$ 1.800</strong></div><div><span>Site · pagamento único adicional</span><strong>R$ 750</strong></div><small>Forma de pagamento do site a combinar. Total previsto em 3 meses: R$ 6.150.</small>';
    document.querySelectorAll('[data-period]').forEach(button => button.addEventListener('click', () => {
      const isMonthly = button.dataset.period === 'monthly';
      monthly.hidden = !isMonthly;
      document.querySelector('#total-breakdown').hidden = isMonthly;
      document.querySelectorAll('[data-period]').forEach(item => { item.classList.toggle('selected', item === button); item.setAttribute('aria-pressed', String(item === button)); });
    }));
  }
})();
