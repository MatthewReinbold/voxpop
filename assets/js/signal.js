/* Progressive enhancements: article text and archive links work without JS. */
(() => {
  'use strict';
  const toc = document.querySelector('[data-toc]');
  if (toc) {
    const primary = [...document.querySelectorAll('#article-body h2')];
    const secondary = [...document.querySelectorAll('#article-body h3')];
    const headings = primary.length >= 2 ? primary : secondary;
    if (headings.length >= 2) {
      const list = toc.querySelector('ol');
      const details = toc.querySelector('details');
      details.open = !window.matchMedia('(max-width: 760px)').matches;
      const links = headings.map((heading, index) => {
        if (!heading.id) {
          let id = `section-${index + 1}`;
          while (document.getElementById(id)) id += '-section';
          heading.id = id;
        }
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${encodeURIComponent(heading.id)}`;
        link.textContent = heading.textContent;
        item.append(link); list.append(item);
        return link;
      });
      toc.hidden = false;
      let scheduled = false;
      const updatePosition = () => {
        let current = 0;
        headings.forEach((heading, i) => { if (heading.getBoundingClientRect().top <= 160) current = i; });
        links.forEach((link, i) => {
          if (i === current) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
        scheduled = false;
      };
      window.addEventListener('scroll', () => {
        if (!scheduled) { scheduled = true; requestAnimationFrame(updatePosition); }
      }, {passive: true});
      window.addEventListener('resize', updatePosition);
      updatePosition();
    }
  }
  const controls = document.querySelector('[data-archive-controls]');
  if (controls) {
    controls.addEventListener('submit', event => event.preventDefault());
    const search = document.getElementById('archive-search');
    const section = document.getElementById('archive-section');
    const format = document.getElementById('archive-format');
    const rows = [...document.querySelectorAll('[data-archive-row]')];
    const params = new URLSearchParams(location.search);
    const requested = params.get('section') || '';
    if ([...section.options].some(option => option.value === requested)) section.value = requested;
    search.value = params.get('q') || '';
    const requestedFormat = params.get('format') || '';
    if (format && [...format.options].some(option => option.value === requestedFormat)) format.value = requestedFormat;
    const filter = () => {
      const words = search.value.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
      let visible = 0;
      rows.forEach(row => {
        const text = row.dataset.search.toLocaleLowerCase();
        const match = (!section.value || row.dataset.section === section.value) && (!format || !format.value || row.dataset.format === format.value) && words.every(word => text.includes(word));
        row.hidden = !match;
        if (match) visible++;
      });
      document.getElementById('archive-count').textContent = `${visible} ${visible === 1 ? 'piece' : 'pieces'}`;
      document.getElementById('archive-empty').hidden = visible !== 0;
      document.querySelectorAll('[data-archive-group]').forEach(group => { group.hidden = ![...group.querySelectorAll('[data-archive-row]')].some(row => !row.hidden); });
      const url = new URL(location.href);
      if (section.value) url.searchParams.set('section', section.value); else url.searchParams.delete('section');
      if (search.value.trim()) url.searchParams.set('q', search.value.trim()); else url.searchParams.delete('q');
      if (format && format.value) url.searchParams.set('format', format.value); else url.searchParams.delete('format');
      history.replaceState(null, '', url);
    };
    controls.hidden = false;
    search.addEventListener('input', filter);
    section.addEventListener('change', filter);
    if (format) format.addEventListener('change', filter);
    filter();
  }
})();
