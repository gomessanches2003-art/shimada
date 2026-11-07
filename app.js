(() => {
  const config = window.PROPOSTA || {};
  const messages = { completo: 'Olá Evandro Sanches, vi a proposta e quero fechar o Plano Completo.', essencial: 'Olá Evandro Sanches, vi a proposta e prefiro o Plano Essencial.', duvida: 'Olá Evandro Sanches, vi a proposta da Shimada e tenho uma dúvida.' };
  const phone = String(config.whatsapp || '').replace(/\D/g, '');
  document.querySelectorAll('[data-wa]').forEach(link => {
    if (/^55\d{10,11}$/.test(phone)) {
      link.href = `https://wa.me/${phone}?text=${encodeURIComponent(messages[link.dataset.wa])}`;
      link.target = '_blank'; link.rel = 'noopener noreferrer';
    } else {
      link.addEventListener('click', () => {
        const status = document.getElementById('contact-status');
        status.hidden = false;
        status.textContent = 'O contato direto estará disponível na versão final desta proposta.';
      });
    }
  });
  if (/^\d{4}-\d{2}-\d{2}$/.test(config.dataEnvio || '')) {
    const date = new Date(`${config.dataEnvio}T12:00:00`);
    if (!Number.isNaN(date.getTime())) {
      document.querySelector('.send-date').textContent = `· ${date.toLocaleDateString('pt-BR')}`;
      date.setDate(date.getDate() + 7);
      document.getElementById('validade').textContent = date.toLocaleDateString('pt-BR');
    }
  }
  document.querySelectorAll('[data-config]').forEach(node => {
    const value = config[node.dataset.config];
    if (value) node.textContent = value;
    else node.hidden = true;
  });
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  // Progressive enhancement: the four steps remain readable without JavaScript.
  const track = document.querySelector('.steps');
  if (track) {
    track.id = 'evolution-carousel';
    track.classList.add('carousel-track');
    track.setAttribute('tabindex', '0');
    track.setAttribute('role', 'region');
    track.setAttribute('aria-roledescription', 'carrossel');
    track.setAttribute('aria-label', 'Próximas etapas de evolução. Use as setas ou deslize.');
    const slides = [...track.children];
    slides.forEach((slide, i) => {
      slide.setAttribute('role', 'group');
      slide.setAttribute('aria-label', `${i + 1} de ${slides.length}`);
    });
    const controls = document.createElement('div');
    controls.className = 'carousel-controls';
    controls.innerHTML = '<span>EXPLORE OS PRÓXIMOS PASSOS</span><div><button type="button" aria-label="Etapa anterior" aria-controls="evolution-carousel">←</button><span class="carousel-position" aria-live="polite"></span><button type="button" aria-label="Próxima etapa" aria-controls="evolution-carousel">→</button></div>';
    track.after(controls);
    const [previous, next] = controls.querySelectorAll('button');
    let index = 0;
    const position = controls.querySelector('.carousel-position');
    function sync() {
      index = slides.reduce((best, slide, i) => Math.abs(slide.offsetLeft - track.offsetLeft - track.scrollLeft) < Math.abs(slides[best].offsetLeft - track.offsetLeft - track.scrollLeft) ? i : best, 0);
      previous.disabled = track.scrollLeft < 4;
      next.disabled = track.scrollLeft >= track.scrollWidth - track.clientWidth - 4;
      position.textContent = `${String(index + 1).padStart(2, '0')} / 04`;
    }
    function move(direction) {
      track.scrollBy({ left: direction * (slides[0].getBoundingClientRect().width + 20), behavior: reduced.matches ? 'instant' : 'smooth' });
    }
    previous.addEventListener('click', () => move(-1));
    next.addEventListener('click', () => move(1));
    track.addEventListener('keydown', event => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1); }
    });
    track.addEventListener('scroll', sync, { passive: true });
    addEventListener('resize', sync, { passive: true });
    requestAnimationFrame(sync);
  }
  if (!reduced.matches && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('js-motion');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }), { threshold: .08 });
    document.querySelectorAll('section:not(.hero) h2, .three, .bento article, .stats, .steps, .plans, .optional').forEach(node => { node.classList.add('reveal'); observer.observe(node); });
    const counters = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      counters.unobserve(entry.target);
      const node = entry.target, target = Number(node.dataset.count), decimals = Number(node.dataset.decimals || 0), start = performance.now();
      const tick = now => {
        const progress = Math.min((now - start) / 1200, 1);
        node.textContent = (target * (1 - Math.pow(1 - progress, 3))).toLocaleString('pt-BR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }), { threshold: .5 });
    document.querySelectorAll('[data-count]').forEach(node => counters.observe(node));
    document.addEventListener('pointermove', event => {
      document.documentElement.style.setProperty('--x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--y', `${event.clientY}px`);
    }, { passive: true });
  }
  const rail = document.querySelector('.evolution-rail');
  const sections = [...document.querySelectorAll('section, .timeline article')];
  let scheduled = false;
  function update() {
    const bounds = rail.getBoundingClientRect();
    const progress = bounds.height ? Math.max(0, Math.min(1, (innerHeight * .65 - bounds.top) / bounds.height)) : 0;
    rail.style.setProperty('--progress', progress);
    sections.forEach(section => section.classList.toggle('active', section.getBoundingClientRect().top < innerHeight * .75));
    scheduled = false;
  }
  function schedule() { if (!scheduled) { scheduled = true; requestAnimationFrame(update); } }
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule, { passive: true });
  update();
})();
