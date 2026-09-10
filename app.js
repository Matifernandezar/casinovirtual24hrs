(()=>{
  const menuButton=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.main-nav');
  if(menuButton&&nav){
    menuButton.addEventListener('click',()=>{
      const open=nav.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded',String(open));
    });
    nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
      nav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded','false');
    }));
  }

  const year=document.getElementById('year');
  if(year) year.textContent=String(new Date().getFullYear());

  const riskRibbon=document.querySelector('.risk-ribbon');
  if(riskRibbon){
    riskRibbon.innerHTML='<strong>+18</strong> · EL JUGAR COMPULSIVAMENTE ES PERJUDICIAL PARA LA SALUD';
  }

  const ageKey='cv24_age_confirmed';
  let gate=document.getElementById('age-gate');
  if(!gate){
    gate=document.createElement('div');
    gate.id='age-gate';
    gate.className='age-gate';
    gate.hidden=true;
    gate.innerHTML=`<div class="age-dialog" role="dialog" aria-modal="true" aria-labelledby="age-title" aria-describedby="age-copy"><p class="age-kicker">ACCESO +18</p><h2 id="age-title">¿Sos mayor de 18 años?</h2><p id="age-copy">EL JUGAR COMPULSIVAMENTE ES PERJUDICIAL PARA LA SALUD. Este sitio contiene información relacionada con juegos de azar y está dirigido exclusivamente a mayores de 18 años.</p><div class="age-actions"><button class="button button-primary" id="age-yes" type="button">Sí, soy mayor de 18</button><a class="button age-exit" href="https://www.google.com/">Salir</a></div><small>Jugá con límites de tiempo y dinero. Nunca uses fondos destinados a gastos esenciales.</small></div>`;
    document.body.appendChild(gate);
  }

  const confirmAge=gate.querySelector('#age-yes');
  if(!sessionStorage.getItem(ageKey)){
    gate.hidden=false;
    document.body.classList.add('gate-open');
    requestAnimationFrame(()=>confirmAge?.focus());
  }
  if(confirmAge){
    confirmAge.addEventListener('click',()=>{
      sessionStorage.setItem(ageKey,'1');
      gate.hidden=true;
      document.body.classList.remove('gate-open');
    });
  }

  window.dataLayer=window.dataLayer||[];
  document.querySelectorAll('.js-whatsapp').forEach(link=>{
    const message=link.dataset.message;
    if(message) link.href=`https://wa.me/5492975815752?text=${encodeURIComponent(message)}`;
    link.addEventListener('click',()=>window.dataLayer.push({
      event:'click_whatsapp',
      page_path:location.pathname,
      link_text:link.textContent.trim()
    }));
  });
})();
