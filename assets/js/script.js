(function () {
    const sections = [...document.querySelectorAll('.container')];
    const controls = [...document.querySelectorAll('.control')];
    const ids = sections.map(s => s.id);

    // ---------- Navigation entre sections (avec #ancre dans l'URL) ----------
    function show(id) {
        if (!ids.includes(id)) id = 'home';
        sections.forEach(s => s.classList.toggle('active', s.id === id));
        controls.forEach(c => c.classList.toggle('active-btn', c.dataset.id === id));
        window.scrollTo({ top: 0 });
        if (id === 'about') runCounters();
    }

    controls.forEach(btn => btn.addEventListener('click', () => {
        if (location.hash === '#' + btn.dataset.id) show(btn.dataset.id);
        else location.hash = btn.dataset.id;
    }));

    window.addEventListener('hashchange', () => show(location.hash.slice(1)));
    show(location.hash.slice(1));

    // ---------- Thème clair / sombre (mémorisé) ----------
    document.querySelector('.theme-btn').addEventListener('click', () => {
        const light = document.documentElement.classList.toggle('light-mode');
        try { localStorage.setItem('theme', light ? 'light' : 'dark'); } catch (e) { }
    });

    // ---------- Compteurs animés ----------
    function runCounters() {
        document.querySelectorAll('.counter').forEach(el => {
            const target = +el.dataset.target;
            const start = performance.now();
            const duration = 1400;
            (function tick(now) {
                const p = Math.min((now - start) / duration, 1);
                el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
                if (p < 1) requestAnimationFrame(tick);
            })(start);
        });
    }

    // ---------- Effet machine à écrire ----------
    const typed = document.querySelector('.typed');
    if (typed && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const words = JSON.parse(typed.dataset.words);
        let w = 0, i = words[0].length, deleting = true;
        (function loop() {
            const word = words[w];
            typed.textContent = word.slice(0, i);
            let delay = deleting ? 45 : 90;
            if (!deleting && i === word.length) { deleting = true; delay = 2000; }
            else if (deleting && i === 0) { deleting = false; w = (w + 1) % words.length; delay = 300; }
            else i += deleting ? -1 : 1;
            setTimeout(loop, delay);
        })();
    }

    // ---------- Filtres des projets ----------
    const filters = document.querySelectorAll('.filter');
    filters.forEach(btn => btn.addEventListener('click', () => {
        filters.forEach(f => f.classList.toggle('active', f === btn));
        const cat = btn.dataset.filter;
        document.querySelectorAll('.portfolio-item').forEach(item => {
            item.classList.toggle('hide', cat !== 'all' && item.dataset.cat !== cat);
        });
    }));

    // ---------- Formulaire de contact (ouvre le client mail, aucun serveur requis) ----------
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const d = new FormData(form);
        const body = `${d.get('message')}\n\n— ${d.get('name')} (${d.get('email')})`;
        location.href = 'mailto:essomanam.samuel@gmail.com'
            + '?subject=' + encodeURIComponent(d.get('subject'))
            + '&body=' + encodeURIComponent(body);
    });

    document.getElementById('year').textContent = new Date().getFullYear();
})();
