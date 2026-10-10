'use strict';
const b = window.business;
const $ = s => document.querySelector(s);
const safe = s => String(s ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const services = b.services.filter(s=>s.enabled);
const serviceName = id => services.find(s=>s.id===id)?.name || '';
const primary = '#contact';
document.querySelectorAll('[data-name]').forEach(el=>el.textContent=b.name);
document.querySelectorAll('[data-descriptor]').forEach(el=>el.textContent=b.descriptor);
if(b.logo) document.querySelectorAll('.brand').forEach(el=>{el.innerHTML=`<img src="${safe(b.logo)}" alt="${safe(b.name)} logo" width="72" height="72">`;});
$('#headline').innerHTML=b.headline.split('\n').map((line,i)=>`<span class="headline-line"><span style="--line-delay:${i*110}ms">${safe(line)}</span></span>`).join('');
$('#location-line').textContent=`${b.intro} ${b.city}`;
$('#intro').textContent=b.description;
$('#hero-picture').innerHTML=`<source media="(max-width:760px)" srcset="${safe(b.hero.mobile || b.hero.src)}"><img src="${safe(b.hero.src)}" alt="${safe(b.hero.alt)}" width="1800" height="1000" fetchpriority="high" decoding="async">`;
$('#intro-photo-one').src=b.detail.src; $('#intro-photo-two').src=b.projects.find(p=>p.type==='Corporate')?.photos[0] || b.hero.src;
$('#detail-photo').src=b.detail.src; $('#detail-photo').alt=b.detail.alt;
$('#about-title').textContent=b.about.title; $('#about-text').textContent=b.about.text; $('#about-approach').textContent=b.about.approach; $('#service-area').textContent=b.serviceArea;
if(b.team.src) $('#team-photo').innerHTML=`<img src="${safe(b.team.src)}" alt="${safe(b.team.alt)}" width="560" height="400" loading="lazy">`;
$('#service-list').innerHTML=services.map((s,i)=>`<details id="service-${safe(s.id)}"><summary><span class="service-num">${String(i+1).padStart(2,'0')}</span>${safe(s.name)}<span class="service-summary">${safe(s.text)}</span></summary><div class="service-body"><p><strong>What’s included</strong>${safe(s.deliverables)}</p><p><strong>A good fit for</strong>${safe(s.fit)}</p><a class="text-link" href="${primary}">Discuss this service ↗</a></div></details>`).join('');
$('#service-filter').insertAdjacentHTML('beforeend',services.map(s=>`<option value="${safe(s.id)}">${safe(s.name)}</option>`).join(''));
$('#service-checkboxes').innerHTML=services.map(s=>`<label><input type="checkbox" name="services" value="${safe(s.id)}">${safe(s.name)}</label>`).join('');
$('#steps').innerHTML=b.process.map(([title,text],i)=>`<div class="step"><span class="step-number">${String(i+1).padStart(2,'0')}</span><h3>${safe(title)}</h3><p>${safe(text)}</p></div>`).join('');
$('#faq-list').innerHTML=b.faqs.map(([q,a])=>`<details><summary>${safe(q)}</summary><p>${safe(a)}</p></details>`).join('');
$('#proof').innerHTML=b.testimonials.length?b.testimonials.map(t=>`<blockquote>“${safe(t.quote)}”</blockquote><cite>${safe(t.name)} · ${safe(t.context)}</cite>`).join(''):'<span class="eyebrow" style="justify-content:center;margin-bottom:16px">IN THEIR WORDS</span><p>[Add a client’s own words here, with their permission.]</p>';
let eventFilter='All';
function renderProjects(){
 const filtered=b.projects.map((p,i)=>({...p,index:i})).filter(p=>(eventFilter==='All'||p.type===eventFilter)&&($('#service-filter').value==='all'||p.services.includes($('#service-filter').value)));
 $('#projects').innerHTML=filtered.length?filtered.map(p=>`<button class="project-card" data-project="${p.index}" aria-label="View ${safe(p.title)} gallery"><div class="project-image"><img src="${safe(p.photos[0])}" alt="${safe(p.alt[0])}" width="700" height="800" loading="lazy" decoding="async"><span class="project-index" aria-hidden="true">${String(p.index+1).padStart(2,'0')}</span><span class="project-arrow" aria-hidden="true">↗</span></div><div class="project-meta"><span>${safe(p.type)}</span><span>${p.inspiration?'VISUAL INSPIRATION':safe(p.location)}</span></div><h3>${safe(p.title)}</h3><p class="project-sub">${safe(p.services.map(serviceName).filter(Boolean).join(' · '))}</p></button>`).join(''):'<p>No projects match these filters. Try another occasion or service.</p>';
 if(window.formeMotionReady) observeReveals($('#projects'));
 $('#filter-status').textContent=`${filtered.length} projects shown.`;
}
renderProjects();
$('#sample-note').hidden=!b.projects.some(p=>p.inspiration);
document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{eventFilter=btn.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>{x.classList.toggle('active',x===btn);x.setAttribute('aria-pressed',String(x===btn));});renderProjects();}));
$('#service-filter').addEventListener('change',renderProjects);
$('#projects').addEventListener('click',e=>{const card=e.target.closest('[data-project]');if(!card)return;const p=b.projects[Number(card.dataset.project)];$('#project-content').innerHTML=`<span class="eyebrow">${safe(p.type)}${p.inspiration?' / VISUAL INSPIRATION':''}</span><h2 id="project-title">${safe(p.title)}</h2><p>${safe(p.location)}</p><p>${safe(p.description)}</p><p><strong>Services ${p.inspiration?'illustrated':'supplied'}:</strong> ${safe(p.services.map(serviceName).filter(Boolean).join(', '))}</p>${p.inspiration?'<p class="form-note">Licensed stock photography. Replace this moodboard with owner-approved project photos and captions before publishing as business work.</p>':''}<div class="gallery">${p.photos.map((src,i)=>`<figure><img src="${safe(src)}" alt="${safe(p.alt[i]||p.title)}" width="900" height="700" loading="lazy"><figcaption>${safe(p.alt[i]||'')}</figcaption></figure>`).join('')}</div><a class="button gallery-contact" href="#contact">Plan your occasion ↗</a>`;$('#project-dialog').showModal();$('.gallery-contact').addEventListener('click',()=>$('#project-dialog').close());});
document.querySelectorAll('dialog').forEach(dialog=>{dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});});
$('#privacy-open').addEventListener('click',()=>$('#privacy-dialog').showModal());
$('.menu-toggle').addEventListener('click',()=>{const open=$('#navigation').classList.toggle('open');$('.menu-toggle').setAttribute('aria-expanded',String(open));});
$('#navigation').addEventListener('click',e=>{if(e.target.closest('a')){$('#navigation').classList.remove('open');$('.menu-toggle').setAttribute('aria-expanded','false');}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){$('#navigation').classList.remove('open');$('.menu-toggle').setAttribute('aria-expanded','false');}});
function theme(mode){const c=b.colors[mode];document.documentElement.style.setProperty('--bg',c.background);document.documentElement.style.setProperty('--text',c.text);document.documentElement.style.setProperty('--accent',c.accent);$('meta[name="theme-color"]').content=c.background;$('#theme-toggle').textContent=mode==='warm'?'Cinematic palette ◐':'Warm palette ◑';$('#theme-toggle').setAttribute('aria-pressed',String(mode==='cinematic'));document.documentElement.dataset.theme=mode;}
theme(b.theme);$('#theme-toggle').addEventListener('click',()=>theme(document.documentElement.dataset.theme==='warm'?'cinematic':'warm'));
const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const configuredEmail=validEmail.test(b.email);
$('#contacts').innerHTML=[b.phone?`<a href="tel:${safe(b.phone.replace(/[^+\d]/g,''))}">${safe(b.phone)} ↗</a>`:'<span>[Your business phone]</span>',configuredEmail?`<a href="mailto:${safe(b.email)}">${safe(b.email)} ↗</a>`:'<span>[Your business email]</span>',b.instagram.startsWith('https://')?`<a href="${safe(b.instagram)}" target="_blank" rel="noopener noreferrer">Instagram ↗</a>`:'<span>[Your Instagram]</span>',b.whatsapp?`<a href="https://wa.me/${safe(b.whatsapp.replace(/\D/g,''))}" target="_blank" rel="noopener noreferrer">WhatsApp ↗</a>`:''].join('');
if(!configuredEmail){$('#form-note').textContent='Create a copyable enquiry draft. Add the business email to enable email handoff.';$('#enquiry button[type="submit"]').innerHTML='Prepare enquiry draft <span>↗</span>';}
$('#method').addEventListener('change',()=>{const isEmail=$('#method').value==='Email';const input=$('#contact-value');$('#contact-label').firstChild.textContent=isEmail?'Your email *':'Your phone number *';input.type=isEmail?'email':'tel';input.autocomplete=isEmail?'email':'tel';input.placeholder=isEmail?'you@example.com':'+ Country code and phone number';input.value='';});
const checks=[...document.querySelectorAll('input[name="services"]')];
function validateServices(){checks[0]?.setCustomValidity(checks.some(c=>c.checked)?'':'Please choose at least one service.');}
checks.forEach(c=>c.addEventListener('change',validateServices));validateServices();
$('#enquiry').addEventListener('submit',e=>{e.preventDefault();validateServices();if(!e.target.reportValidity())return;const data=new FormData(e.target);const draft=`Event enquiry for ${b.name}\n\nName: ${data.get('name')}\nPreferred contact: ${data.get('method')} — ${data.get('contact')}\nEvent: ${data.get('eventType')}\nDate: ${data.get('date')}\nVenue or city: ${data.get('venue')}\nGuests: ${data.get('guests')}\nServices: ${data.getAll('services').map(serviceName).join(', ')}\nBudget: ${data.get('budget')||'Not provided'}\n\n${data.get('description')}`;$('#draft-text').value=draft;$('#draft-actions').hidden=false;$('#form-status').textContent=configuredEmail?'Your draft is ready. Open your email app, review it, then send. Nothing has been sent yet.':'Your draft is ready to copy. The business contact address has not been configured; nothing has been sent.';if(configuredEmail){$('#email-draft').hidden=false;$('#email-draft').href=`mailto:${encodeURIComponent(b.email)}?subject=${encodeURIComponent('Event enquiry — '+data.get('date'))}&body=${encodeURIComponent(draft)}`;}});
$('#copy-draft').addEventListener('click',async()=>{try{await navigator.clipboard.writeText($('#draft-text').value);$('#form-status').textContent='Enquiry copied. Paste it into your message and send when ready.';}catch{$('#draft-text').focus();$('#draft-text').select();$('#form-status').textContent='Select and copy the draft, then paste it into your message.';}});
$('#copyright').textContent=`© ${new Date().getFullYear()} ${b.name} · ${b.serviceArea}`;
// SEO shares the same source of truth. Placeholder previews remain noindex.
document.title=`${b.name} | Event styling & production in ${b.city}`;
$('meta[name="description"]').content=`${b.name}: ${services.map(s=>s.name.toLowerCase()).join(', ')} in ${b.serviceArea}. Explore the work and enquire about your event date.`;
if(b.published&&b.domain.startsWith('https://')&&!b.city.includes('[')&&configuredEmail){$('meta[name="robots"]').content='index,follow';const canonical=document.createElement('link');canonical.rel='canonical';canonical.href=b.domain;document.head.append(canonical);const json=document.createElement('script');json.type='application/ld+json';json.textContent=JSON.stringify({'@context':'https://schema.org','@type':'LocalBusiness',name:b.name,url:b.domain,email:b.email,...(b.phone?{telephone:b.phone}:{}),areaServed:b.serviceArea,hasOfferCatalog:{'@type':'OfferCatalog',name:'Event services',itemListElement:services.map(s=>({'@type':'Offer',itemOffered:{'@type':'Service',name:s.name,areaServed:b.serviceArea}}))}});document.head.append(json);}

// Animate once as content enters the viewport. Content stays visible without JS.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let revealObserver;
const revealSelector = '.section-heading, .intro-section > h2, .intro-section > p, .intro-image, .project-card, .service-intro, #service-list details, .detail-photo, .about-copy, .proof, .step, .faq > div, .contact-layout > div, #enquiry, .footer-display';
function observeReveals(root = document) {
  if (!revealObserver || reducedMotion.matches) return;
  root.querySelectorAll(revealSelector).forEach((el,i)=> {
    if(el.classList.contains('reveal')) return;
    el.classList.add('reveal');
    el.style.setProperty('--reveal-delay', `${Math.min(i % 3 * 65,130)}ms`);
    revealObserver.observe(el);
  });
}
function initializeMotion() {
  if (reducedMotion.matches || !('IntersectionObserver' in window)) return;
  revealObserver = new IntersectionObserver(entries=> {
    entries.forEach(entry=> {
      if(!entry.isIntersecting)return;
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    });
  }, {threshold:0.08, rootMargin:'0px 0px 35px 0px'});
  observeReveals();
}
initializeMotion();
window.formeMotionReady = true;
reducedMotion.addEventListener('change',()=> {
  revealObserver?.disconnect();
  document.querySelectorAll('.reveal').forEach(el=>el.classList.add('revealed'));
});
// Native scroll timeline is used when supported; no frame-by-frame JS work.
const sectionObserver = new IntersectionObserver(entries=> {
  entries.forEach(entry=> {
    if(!entry.isIntersecting)return;
    document.querySelectorAll('#navigation a').forEach(link=> {
      if(link.hash === '#' + entry.target.id)link.setAttribute('aria-current','location');
      else link.removeAttribute('aria-current');
    });
  });
}, {rootMargin:'-15% 0px -65% 0px',threshold:0});
document.querySelectorAll('main section[id]').forEach(section=>sectionObserver.observe(section));
