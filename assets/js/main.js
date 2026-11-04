/** COPENORTE | Interacciones compartidas, imágenes, formularios y accesibilidad. */
(() => {
  'use strict';
  const en = document.documentElement.lang.startsWith('en');
  const copy = {
    es: {menuOpen:'Abrir menú',menuClose:'Cerrar menú',sending:'Enviando…',submit:'Enviar mensaje',success:'El servicio de contacto recibió la solicitud. Verifica su entrega en ambos correos corporativos.',fail:'No pudimos confirmar el envío. Revisa tu conexión e inténtalo nuevamente o escribe directamente a nuestros correos.',offline:'Los mapas requieren conexión a internet. Consulta la dirección indicada junto al mapa.'},
    en: {menuOpen:'Open menu',menuClose:'Close menu',sending:'Sending…',submit:'Send message',success:'The contact service received your request. Confirm delivery to both company mailboxes.',fail:'We could not confirm delivery. Check your connection and try again, or email our team directly.',offline:'Maps require an internet connection. Please use the address provided beside the map.'}
  }[en?'en':'es'];
  const header=document.getElementById('header');
  const progress=document.getElementById('progress');
  const topBtn=document.getElementById('backToTop');
  const menuToggle=document.getElementById('menuToggle');
  const mobileMenu=document.getElementById('mobileMenu');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const closeMenu=()=>{if(!mobileMenu || !menuToggle)return;mobileMenu.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label',copy.menuOpen)};
  function onScroll(){const y=window.scrollY, range=document.documentElement.scrollHeight-innerHeight;
    if(header) header.classList.toggle('scrolled',y>30);
    if(topBtn)topBtn.classList.toggle('visible',y>420);
    if(progress)progress.style.width=(range>0?Math.min(100,y/range*100):0)+'%';}
  addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',onScroll,{passive:true});onScroll();
  if(menuToggle&&mobileMenu){
    menuToggle.addEventListener('click',()=>{const opened=menuToggle.getAttribute('aria-expanded')!=='true';menuToggle.setAttribute('aria-expanded',String(opened));menuToggle.setAttribute('aria-label',opened?copy.menuClose:copy.menuOpen);mobileMenu.classList.toggle('open',opened)});
    mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
    document.addEventListener('click',event=>{if(!mobileMenu.contains(event.target)&&!menuToggle.contains(event.target))closeMenu()});
  }
  if(topBtn)topBtn.addEventListener('click',()=>scrollTo({top:0,behavior:reduced?'auto':'smooth'}));
  document.querySelectorAll('.reveal').forEach(el=>{if(reduced||!('IntersectionObserver'in window))el.classList.add('is-visible')});
  if(!reduced&&'IntersectionObserver'in window){const obs=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');obs.unobserve(entry.target)}}),{threshold:.07,rootMargin:'0px 0px 60px 0px'});document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));}
  // Local images shared between Spanish and English; paths are relative to the page.
  Object.entries(window.COPENORTE_IMAGES||{}).forEach(([key,info])=>{
    if(!info?.file)return;const tester=new Image();tester.onload=()=>{
      document.querySelectorAll(`[data-image="${key}"]`).forEach(el=>{
        if(el.tagName==='IMG')el.src=(document.documentElement.lang==='en'?'../':'')+info.file;
        else el.style.backgroundImage=`url("${document.documentElement.lang==='en'?'../':''}${info.file}")`;
      });
    };tester.src=(document.documentElement.lang==='en'?'../':'')+info.file;
  });
  // Videos: load only as they approach the viewport; pause when off-screen.
  // This avoids downloading three large MP4 files at once on phones/tablets.
  document.querySelectorAll('.design-video').forEach(video=>{
    const source=video.querySelector('source[data-src]');
    const show=()=>video.classList.add('is-ready');
    const hide=()=>video.classList.remove('is-ready');
    video.addEventListener('loadeddata',show);
    video.addEventListener('error',hide);
    source?.addEventListener('error',hide);
    const start=()=>{
      if(reduced)return;
      if(source?.dataset.src && !source.getAttribute('src')){
        source.src=source.dataset.src;
        video.load();
      }
      video.play().catch(()=>{});
    };
    if('IntersectionObserver' in window){
      const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
        if(entry.isIntersecting)start();
        else if(!video.paused)video.pause();
      }),{rootMargin:'180px 0px',threshold:.01});
      observer.observe(video);
    }else start();
  });
  // Image error placeholders keep all copy visible without a connection.
  document.querySelectorAll('img[data-image]').forEach(img=>{
    const missing=()=>{img.style.visibility='hidden';img.closest('.photo-frame,.image-panel,.brand-symbol,.sector-service,figure,.laser-photo-primary,.laser-photo-secondary,.laser-inquiry-image,.design-media,.manufacturing-media')?.classList.add('media-unavailable')};
    img.addEventListener('error',missing);
    img.addEventListener('load',()=>{img.style.visibility='';img.closest('.photo-frame,.image-panel,.brand-symbol,.sector-service,figure,.laser-photo-primary,.laser-photo-secondary,.laser-inquiry-image,.design-media,.manufacturing-media')?.classList.remove('media-unavailable')});
    if(img.complete && img.naturalWidth===0)missing();
  });
  document.querySelectorAll('.map-pane').forEach(pane=>{
    const warning=document.createElement('span');warning.className='map-offline';warning.textContent=copy.offline;pane.append(warning);
    const update=()=>pane.classList.toggle('offline-map',!navigator.onLine);
    addEventListener('online',update);addEventListener('offline',update);update();
  });
  const modal=document.getElementById('lightbox'),close=document.getElementById('closeLightbox'),large=document.getElementById('largeImage'),caption=document.getElementById('largeCaption');let returnFocus;
  const hideModal=()=>{if(!modal)return;modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';if(large)large.removeAttribute('src');returnFocus?.focus()};
  document.querySelectorAll('.photo-action').forEach(btn=>btn.addEventListener('click',()=>{
    const img=btn.querySelector('img');if(!modal||!large||!img||img.naturalWidth===0)return;
    returnFocus=btn;large.src=img.currentSrc||img.src;large.alt=img.alt;caption.textContent=img.alt;
    modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';close?.focus();
  }));
  close?.addEventListener('click',hideModal);modal?.addEventListener('click',e=>{if(e.target===modal)hideModal()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){hideModal();closeMenu()}});
  const form=document.getElementById('contactForm');
  if(!form)return;
  const status=document.getElementById('formStatus'),submit=form.querySelector('[type="submit"]'),formUrl=form.querySelector('input[name="_url"]');
  if(formUrl && /^https?:$/.test(location.protocol))formUrl.value=location.href.split('#')[0];
  form.addEventListener('submit',async event=>{
    event.preventDefault();if(!form.reportValidity())return;
    if(form.elements['_honey']?.value)return;
    status.textContent='';status.removeAttribute('data-state');submit.disabled=true;submit.textContent=copy.sending;
    try{
      if(!navigator.onLine)throw Error('offline');
      const payload=Object.fromEntries(new FormData(form).entries());
      const response=await fetch('https://formsubmit.co/ajax/gerencia@copenorte.com',{
        method:'POST',headers:{Accept:'application/json','Content-Type':'application/json'},body:JSON.stringify(payload)
      });
      const result=await response.json();
      if(!response.ok||!(result.success===true||result.success==='true'))throw Error(result.message||'Unconfirmed');
      form.reset();status.dataset.state='success';status.textContent=copy.success;
    }catch(err){status.dataset.state='error';status.textContent=copy.fail;console.warn('FormSubmit:',err)}
    finally{submit.disabled=false;submit.innerHTML=`${copy.submit} <span aria-hidden="true">↗</span>`;status.focus({preventScroll:true})}
  });
})();
