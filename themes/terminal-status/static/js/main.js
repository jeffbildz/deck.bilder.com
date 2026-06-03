// typing animation (homepage hero only)
(function(){
  var el=document.getElementById("typed");
  if(el){
    var txt="whoami --verbose", cur=document.getElementById("cur"), who=document.getElementById("whoami"), i=0;
    (function tick(){
      if(i<=txt.length){ el.textContent=txt.slice(0,i); i++; setTimeout(tick,55); }
      else { setTimeout(function(){ if(who)who.style.opacity=1; if(cur)cur.style.display="none"; },280); }
    })();
  }
})();
// scroll reveal (all pages)
(function(){
  var nodes=document.querySelectorAll(".reveal");
  if(!nodes.length) return;
  var obs=new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("in"); obs.unobserve(e.target);} });
  },{threshold:.12});
  nodes.forEach(function(n,idx){ n.style.transitionDelay=(Math.min(idx%4,4)*70)+"ms"; obs.observe(n); });
})();
