// ponytail: IntersectionObserver only, no lib
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();

// hero splash — tampil sekali per refresh, lalu hidden permanen
(function(){
  const hero=document.getElementById('hero');
  const about=document.getElementById('about');
  const skip=document.getElementById('hero-skip');
  if(!hero||!about) return;
  document.body.classList.add('splash-lock');
  let done=false;
  let timer=setTimeout(go,2800);
  function go(){
    if(done) return;
    done=true;
    clearTimeout(timer);
    hero.classList.add('fade-out');
    document.body.classList.remove('splash-lock');
    // smooth scroll ke about saat hero fade
    about.scrollIntoView({behavior:'smooth',block:'start'});
    setTimeout(()=>hero.remove(),700);
  }
  if(skip) skip.addEventListener('click',go);
  hero.addEventListener('click',go);
  ['wheel','touchmove','keydown'].forEach(ev=>window.addEventListener(ev,go,{once:true,passive:true}));
})();
