const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#navigation');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
const stage=document.querySelector('#logo-stage');
function replay(){stage.classList.remove('building');void stage.offsetWidth;stage.classList.add('building')}
document.querySelector('#replay').addEventListener('click',replay);replay();
const tabs=[...document.querySelectorAll('[role=tab]')];
function selectTab(t){tabs.forEach(b=>{const active=b===t;b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1;document.getElementById('panel-'+b.dataset.panel).hidden=!active})}
tabs.forEach((t,i)=>{t.addEventListener('click',()=>selectTab(t));t.addEventListener('keydown',e=>{let n;if(e.key==='ArrowRight')n=(i+1)%tabs.length;else if(e.key==='ArrowLeft')n=(i+tabs.length-1)%tabs.length;else if(e.key==='Home')n=0;else if(e.key==='End')n=tabs.length-1;else return;e.preventDefault();selectTab(tabs[n]);tabs[n].focus()})});
const paths={conectar:['CONECTO','Una buena conversación comienza con lo que puedes aportar.','Presenta tu negocio, comparte qué tipo de colaboración buscas y pregunta qué necesitan los demás.'],aprender:['CREZCO','Tu siguiente aprendizaje puede estar en la experiencia de alguien más.','Identifica un desafío que quieras resolver y un conocimiento que puedas compartir. Lleva ambos a la conversación.'],pertenecer:['PERTENEZCO','Encontrar tu lugar también significa abrir espacio para otros.','Piensa cómo te gustaría participar, a quién puedes acompañar y qué necesitas para construir relaciones continuas.']};
document.querySelectorAll('.choice').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.choice').forEach(c=>{c.classList.toggle('active',c===b);c.setAttribute('aria-pressed',String(c===b))});const v=paths[b.dataset.need];document.querySelector('#path-label').textContent='TU PUNTO DE PARTIDA · '+v[0];document.querySelector('#path-title').textContent=v[1];document.querySelector('#path-body').textContent=v[2]}));
const dialog=document.querySelector('#intro-dialog'),form=document.querySelector('#intro-form'),result=document.querySelector('#intro-result');
document.querySelector('#open-intro').addEventListener('click',()=>dialog.showModal());document.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
let intro='';form.addEventListener('submit',e=>{e.preventDefault();const v=new FormData(form);intro=`Hola, soy ${v.get('name').trim()}.\n\nMi negocio o proyecto es ${v.get('business').trim()}.\n\nPuedo aportar: ${v.get('offer').trim()}.\n\nBusco conectar para: ${v.get('seek').trim()}.\n\nCrecer Conectando.\nSynerGEA`;document.querySelector('#intro-text').textContent=intro;form.hidden=true;result.hidden=false;document.querySelector('#download-intro').focus()});
document.querySelector('#edit-intro').addEventListener('click',()=>{form.hidden=false;result.hidden=true;form.elements.name.focus()});
document.querySelector('#download-intro').addEventListener('click',()=>{const url=URL.createObjectURL(new Blob([intro],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='mi-presentacion-synergea.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)});
// Motion remains optional; only visible videos are loaded and played.
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
let motionPaused=reducedMotion.matches;
const media=[...document.querySelectorAll('.ambient-video')];
const motionButton=document.querySelector('.motion-toggle');
function updateMotionLabel(){motionButton.setAttribute('aria-pressed',String(motionPaused));motionButton.textContent=motionPaused?'▶ Activar movimiento':'Ⅱ Pausar movimiento'}
function playMedia(v){if(!v.src){v.src=v.dataset.src;v.load()}v.play().catch(()=>{})}
const videoObserver=new IntersectionObserver(entries=>{entries.forEach(({target,isIntersecting})=>{target.dataset.visible=String(isIntersecting);if(isIntersecting&&!motionPaused)playMedia(target);else target.pause()})},{threshold:.15});
media.forEach(v=>videoObserver.observe(v));
motionButton.addEventListener('click',()=>{motionPaused=!motionPaused;updateMotionLabel();media.forEach(v=>{if(!motionPaused&&v.dataset.visible==='true')playMedia(v);else v.pause()})});
reducedMotion.addEventListener('change',e=>{motionPaused=e.matches;updateMotionLabel();media.forEach(v=>{if(!motionPaused&&v.dataset.visible==='true')playMedia(v);else v.pause()})});
document.addEventListener('visibilitychange',()=>{media.forEach(v=>{if(document.hidden||motionPaused)v.pause();else if(v.dataset.visible==='true')playMedia(v)})});
updateMotionLabel();
