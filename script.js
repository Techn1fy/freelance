const CONFIG = {
  name:'Sungjemlila Longkumer', handle:'@sungjemish',
  email:'sungjemish.work@gmail.com',
  instagram:'https://instagram.com/sungjemish',
  youtube:'https://youtube.com/@sungjemishsungjemish8212',
  stats:[
    {value:'528K+',label:'Followers'},
    {value:'3,192+',label:'Posts'},
    {value:'413',label:'Following'}
  ],
  services:[
    {icon:`<svg viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,num:'01',title:'Product Reviews',desc:'In-depth, science-backed skincare reviews for Instagram & YouTube. Her audience trusts her — and they act on it.',tag:'Instagram · YouTube'},
    {icon:`<svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,num:'02',title:'Brand Collaborations',desc:'Long-form ambassadorships, product launch campaigns, event appearances and ongoing brand partnerships.',tag:'Long-term · Events'},
    {icon:`<svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,num:'03',title:'Sponsored Content',desc:'Integrated posts, reels and stories crafted to feel native, not promotional. Content audiences actually want to see.',tag:'Reels · Stories · Posts'}
  ],
  gallery:[
    {src:'assets/dark-2.jpg',  caption:'Dubai Marina Nights',  tone:'dark',   mood:'glam',     height:'420px',pos:'center 10%'},
    {src:'assets/dark-1.jpg',  caption:'Red & The City',       tone:'dark',   mood:'glam',     height:'360px',pos:'center 12%'},
    {src:'assets/light-20.jpg',caption:'Burj Khalifa Edit',    tone:'warm',   mood:'editorial',height:'400px',pos:'center 20%'},
    {src:'assets/light-6.jpg', caption:'Yacht Day Dubai',      tone:'warm',   mood:'editorial',height:'350px',pos:'center 20%'},
    {src:'assets/dark-4.jpg',  caption:'After Dark OOTD',      tone:'dark',   mood:'glam',     height:'320px',pos:'center top'},
    {src:'assets/dark-3.jpg',  caption:'Night Street Style',   tone:'dark',   mood:'glam',     height:'360px',pos:'center 15%'},
    {src:'assets/evening-2.jpg',caption:'Golden Hour Glow',    tone:'warm',   mood:'candid',   height:'300px',pos:'center top'},
    {src:'assets/evening-3.jpg',caption:'Sunset on the Sand',  tone:'warm',   mood:'candid',   height:'320px',pos:'center top'},
    {src:'assets/light-1.jpg', caption:'Waterside Dreams',     tone:'pastel', mood:'editorial',height:'360px',pos:'center top'},
    {src:'assets/light-2.jpg', caption:'Maldives Blue',        tone:'cool',   mood:'outdoor',  height:'360px',pos:'center 20%'},
    {src:'assets/light-3.jpg', caption:'Running Free',         tone:'cool',   mood:'candid',   height:'300px',pos:'center 30%'},
    {src:'assets/light-5.jpg', caption:'Shoreline Edit',       tone:'cool',   mood:'outdoor',  height:'320px',pos:'center 10%'},
    {src:'assets/light-8.jpg', caption:'Flowers & Ocean',      tone:'cool',   mood:'candid',   height:'360px',pos:'center 15%'},
    {src:'assets/light-10.jpg',caption:'Desert Reverie',       tone:'warm',   mood:'outdoor',  height:'340px',pos:'center 15%'},
    {src:'assets/light-16.jpg',caption:'Infinity Vibes',       tone:'cool',   mood:'candid',   height:'300px',pos:'center top'},
    {src:'assets/light-17.jpg',caption:'Wine & Ocean Views',   tone:'cool',   mood:'candid',   height:'300px',pos:'center top'},
    {src:'assets/light-21.jpg',caption:'Wild Encounters',      tone:'vibrant',mood:'outdoor',  height:'380px',pos:'center 25%'},
    {src:'assets/light-26.jpg',caption:'Pink & Petals',        tone:'pastel', mood:'candid',   height:'320px',pos:'center top'},
    {src:'assets/fog-1.jpg',   caption:'Misty Mountain Drive', tone:'cool',   mood:'editorial',height:'340px',pos:'center top'},
    {src:'assets/fog-2.jpg',   caption:'Fog & Fashion',        tone:'cool',   mood:'editorial',height:'300px',pos:'center top'},
    {src:'assets/light-9.jpg', caption:'Golden Evening',       tone:'warm',   mood:'editorial',height:'320px',pos:'center top'},
    {src:'assets/light-4.jpg', caption:'Beach Candid',         tone:'cool',   mood:'candid',   height:'280px',pos:'center 20%'},
  ],
  brands:[
    {name:'Lakme',            cat:'Cosmetics', iconKey:'Lakme',
     logo:'assets/lakme-logo.jpg',
     desc:'Ambassador & product review collaborations'},
    {name:'Dot & Key',        cat:'Skincare',  iconKey:'DotKey',
     logo:'assets/dot-logo.jpg',
     desc:'Skincare review partnerships & launch content'},
    {name:'WOW Skin Science', cat:'Wellness',  iconKey:'WOW',
     logo:'assets/wow-logo.jpg',
     desc:'Ingredient-focused review content creator'},
    {name:'Plum Goodness',    cat:'Beauty',    iconKey:'Plum',
     logo:'assets/plum-logo.jpg',
     desc:'Clean beauty brand collaboration & reels'},
    {name:'Cetaphil',         cat:'Skincare',  iconKey:'Cetaphil',
     logo:'assets/cetaphil-logo.jpg',
     desc:'Gentle skincare advocacy & product reviews'},
    {name:'Forest Essentials',cat:'Luxury',    iconKey:'ForestEss',
     logo:'assets/forest-logo.jpg',
     desc:'Luxury Ayurvedic beauty content creation'},
    {name:'Minimalist',       cat:'Skincare',  iconKey:'Minimalist',
     logo:'assets/minimilist-logo.jpg',
     desc:'Science-backed skincare review series'},
    {name:'Nykaa',            cat:'Beauty',    iconKey:'Nykaa',
     logo:'assets/nykaa-logo.jpg',
     desc:'Multi-brand curated beauty content & hauls'},
  ],
  testimonials:[
    {quote:"Sungjem's honest reviews drove a 40% spike in our product sales during launch week. Her audience doesn't just follow — they act on her recommendations.",author:'Brand Manager',brand:'XYZ Skincare'},
    {quote:"Her content is trusted. Her audience is engaged. The ROI on our collaboration was outstanding — results we hadn't seen with any other creator at her tier.",author:'Marketing Director',brand:'ABC Cosmetics'},
    {quote:"Working with Sungjemish felt like a true creative partnership. The content she created exceeded all expectations — in quality and in audience response.",author:'Co-Founder',brand:'DEF Beauty'},
  ]
};


/* ── NAV SCROLL ── */
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>80));

/* ── BURGER ── */
const burger=document.getElementById('burger'),mob=document.getElementById('mobileOverlay');
burger.addEventListener('click',()=>{burger.classList.toggle('open');mob.classList.toggle('open');document.body.style.overflow=mob.classList.contains('open')?'hidden':''});
function closeMob(){burger.classList.remove('open');mob.classList.remove('open');document.body.style.overflow=''}

/* ── MARQUEE STRIP ── */
(function(){
  const items=['Beauty','Skincare','Authenticity','Lifestyle','Fashion','Travel','Dubai','Maldives','Collaboration','Content Creation','Cosmetology'];
  const inner=document.getElementById('marqueeInner');
  [...items,...items].forEach(t=>{
    const s=document.createElement('span');s.textContent=t;inner.appendChild(s);
    const dot=document.createElement('span');dot.className='dot';dot.textContent='✦';inner.appendChild(dot);
  });
})();

/* ── ABOUT STATS ── */
(function(){
  const c=document.getElementById('aboutStats');
  CONFIG.stats.forEach(s=>{
    c.innerHTML+=`<div class="a-stat"><strong>${s.value}</strong><span>${s.label}</span></div>`;
  });
})();

/* ── SERVICES ── */
(function(){
  const g=document.getElementById('servicesGrid');
  CONFIG.services.forEach(s=>{
    const d=document.createElement('div');d.className='svc-card reveal';
    d.innerHTML=`<div class="svc-num">${s.num}</div><div class="svc-icon">${s.icon}</div><h3>${s.title}</h3><p>${s.desc}</p><span class="svc-tag">${s.tag}</span>`;
    g.appendChild(d);
  });
})();

/* ── GALLERY + FILTERS ── */
(function(){
  const moods=['all','glam','editorial','candid','outdoor'];
  const filterEl=document.getElementById('galleryFilters');
  const grid=document.getElementById('masonryGrid');
  let busy=false;
  let mobileSwiper=null;

  function filterTo(mood){
    if(busy)return;
    busy=true;
    const items=[...grid.querySelectorAll('.gi')];

    // Phase 1: fade everything out
    items.forEach(el=>{el.classList.remove('gi-hidden');el.classList.add('gi-out')});

    setTimeout(()=>{
      // Phase 2: collapse items that don't match (columns reflow while invisible)
      items.forEach(el=>{
        if(mood==='all'||el.dataset.mood===mood){
          el.classList.remove('gi-hidden','gi-out');
        } else {
          el.classList.add('gi-hidden');
          el.classList.remove('gi-out');
        }
      });

      // Phase 3: stagger fade-in for visible items
      const visible=items.filter(el=>!el.classList.contains('gi-hidden'));
      visible.forEach((el,i)=>{
        el.classList.add('gi-out'); // start hidden
        setTimeout(()=>el.classList.remove('gi-out'),i*55);
      });

      setTimeout(()=>{busy=false},visible.length*55+400);
    },350);
  }

  moods.forEach((m,i)=>{
    const b=document.createElement('button');
    b.className='gf-btn'+(i===0?' active':'');
    b.textContent=m==='all'?'All':m.charAt(0).toUpperCase()+m.slice(1);
    b.addEventListener('click',()=>{
      document.querySelectorAll('.gf-btn').forEach(x=>x.classList.remove('active'));
      b.classList.add('active');
      filterTo(m);
      // sync mobile swiper: show only matching slides
      if(mobileSwiper){
        mobileSwiper.slides.forEach((slide,idx)=>{
          const mood=CONFIG.gallery[idx%CONFIG.gallery.length]?.mood;
          slide.style.display=(m==='all'||mood===m)?'':'none';
        });
        mobileSwiper.update();
        mobileSwiper.slideTo(0);
      }
    });
    filterEl.appendChild(b);
  });

  CONFIG.gallery.forEach(img=>{
    const el=document.createElement('div');
    el.className='gi gi-out';
    el.dataset.tone=img.tone;
    el.dataset.mood=img.mood;
    el.innerHTML=`<img src="${img.src}" alt="${img.caption}" loading="lazy"><div class="gi-overlay"><span class="gi-caption">${img.caption}</span><span class="gi-tag">${img.mood}</span></div>`;
    grid.appendChild(el);
  });

  // Initial stagger-in after page loads
  window.addEventListener('load',()=>{
    const items=[...grid.querySelectorAll('.gi')];
    items.forEach((el,i)=>setTimeout(()=>el.classList.remove('gi-out'),200+i*55));
  });

  // Mobile swiper — build slides from CONFIG.gallery
  const mobileWrapper=document.getElementById('mobileGalleryWrapper');
  CONFIG.gallery.forEach(img=>{
    const slide=document.createElement('div');
    slide.className='swiper-slide';
    slide.innerHTML=`<img src="${img.src}" alt="${img.caption}" loading="lazy"><div class="gi-overlay"><span class="gi-caption">${img.caption}</span><span class="gi-tag">${img.mood}</span></div>`;
    mobileWrapper.appendChild(slide);
  });

  // Custom pagination for mobile swiper
  const pagEl=document.getElementById('mobileGalleryPagination');
  const totalSlides=CONFIG.gallery.length;
  let currentMobileIndex=0;

  // Always render exactly 5 dots — window slides, container stays centered
  function buildPagination(){
    pagEl.innerHTML='';
    for(let i=0;i<5;i++){
      const btn=document.createElement('button');
      btn.className='mpb';
      pagEl.appendChild(btn);
    }
    syncPagination(0);
  }

  function syncPagination(idx){
    currentMobileIndex=idx;
    const total=totalSlides;
    const dots=[...pagEl.querySelectorAll('.mpb')];
    // compute window start so active is at position 2 (middle of 5)
    let winStart=idx-2;
    if(winStart<0) winStart=0;
    if(winStart+5>total) winStart=Math.max(0,total-5);

    dots.forEach((b,pos)=>{
      const slideIdx=winStart+pos;
      b.classList.remove('active','mpb-sm');
      // edge dots smaller when window can still scroll in that direction
      if(pos===0&&winStart>0) b.classList.add('mpb-sm');
      if(pos===4&&winStart+5<total) b.classList.add('mpb-sm');
      if(slideIdx===idx) b.classList.add('active');
      b.onclick=()=>{if(mobileSwiper) mobileSwiper.slideTo(slideIdx)};
    });
  }

  // Init swiper only on mobile
  function initMobileSwiper(){
    if(window.innerWidth<=768&&!mobileSwiper){
      buildPagination();
      mobileSwiper=new Swiper('#mobileGallerySwiper',{
        slidesPerView:1.15,
        centeredSlides:true,
        spaceBetween:14,
        loop:false,
        autoplay:{delay:3200,disableOnInteraction:false},
        grabCursor:true,
        on:{slideChange(){syncPagination(this.activeIndex)}}
      });
      pagEl.style.display='flex';
    } else if(window.innerWidth>768&&mobileSwiper){
      mobileSwiper.destroy(true,true);
      mobileSwiper=null;
      pagEl.style.display='none';
    }
  }
  window.addEventListener('load',initMobileSwiper);
  window.addEventListener('resize',initMobileSwiper);
})();

/* ── BRANDS ── */
(function(){
  const track=document.getElementById('brandMarqueeTrack');
  [...CONFIG.brands,...CONFIG.brands].forEach(b=>{
    const s=document.createElement('span');s.className='brand-mq-name';s.textContent=b.name;
    track.appendChild(s);
  });
  const g=document.getElementById('brandsGrid');
  CONFIG.brands.forEach(b=>{
    const c=document.createElement('div');
    c.className='brand-card reveal';
    c.dataset.cat=b.cat;
    c.innerHTML=`<div class="brand-icon" data-brand="${b.iconKey}"><img src="${b.logo}" alt="${b.name} logo" loading="lazy"></div><h4>${b.name}</h4><span class="brand-cat">${b.cat}</span><p>${b.desc}</p>`;
    g.appendChild(c);
  });
})();

/* ── TESTIMONIALS ── */
(function(){
  const data=CONFIG.testimonials;
  const stage=document.getElementById('testiStage');
  const dotsEl=document.getElementById('testiDots');
  const prevBtn=document.getElementById('testiPrev');
  const nextBtn=document.getElementById('testiNext');
  let cur=0,dir=1,busy=false;

  function isMobile(){return window.innerWidth<=768}

  function initials(name){return name.split(' ').map(w=>w[0]).join('').slice(0,2)}

  function makeCard(t,pos){
    const card=document.createElement('div');
    card.className='t-card t-'+pos;
    card.innerHTML=`<div class="t-card-inner">
      <div>
        <div class="t-quote">&#x201C;</div>
        <blockquote>${t.quote}</blockquote>
      </div>
      <div>
        <hr class="t-divider">
        <div class="t-author">
          <div class="t-author-avatar">${initials(t.author)}</div>
          <div><strong>${t.author}</strong><span>${t.brand}</span></div>
        </div>
      </div>
    </div>`;
    return card;
  }

  function render(animate){
    stage.innerHTML='';
    const n=data.length;
    const cards=[];
    if(isMobile()){
      cards.push(makeCard(data[cur],'center'));
    } else {
      const prev=(cur-1+n)%n,next=(cur+1)%n;
      if(n===1){cards.push(makeCard(data[0],'center'));}
      else{
        cards.push(makeCard(data[prev],'side'));
        cards.push(makeCard(data[cur],'center'));
        cards.push(makeCard(data[next],'side'));
      }
    }
    if(animate){
      cards.forEach(c=>{c.style.opacity='0';c.style.transform=c.classList.contains('t-side')?`translateX(${dir*25}px) scale(.92)`:`translateX(${dir*25}px) scale(1)`});
    }
    cards.forEach(c=>stage.appendChild(c));
    if(animate){
      requestAnimationFrame(()=>{
        cards.forEach(c=>{
          c.style.transition='opacity .35s ease,transform .35s ease';
          c.style.opacity=c.classList.contains('t-side')?'.42':'1';
          c.style.transform=c.classList.contains('t-side')?'scale(.92)':'scale(1)';
        });
      });
    }
    dotsEl.innerHTML='';
    data.forEach((_,i)=>{
      const d=document.createElement('button');
      d.className='testi-dot'+(i===cur?' active':'');
      d.addEventListener('click',()=>{dir=i>cur?1:-1;cur=i;render(true)});
      dotsEl.appendChild(d);
    });
  }

  prevBtn.addEventListener('click',()=>{dir=-1;cur=(cur-1+data.length)%data.length;render(true)});
  nextBtn.addEventListener('click',()=>{dir=1;cur=(cur+1)%data.length;render(true)});
  window.addEventListener('resize',()=>render(false));
  render(false);
})();

/* ── CONTACT ICONS ── */
(function () {
  const opts = [
    {
      label: 'Email',
      href: `mailto:${CONFIG.email}`,
      text: CONFIG.email,
      icon: 'assets/gmail.png'
    },
    {
      label: 'Instagram',
      href: CONFIG.instagram,
      text: '@sungjemish',
      icon: 'assets/instagram.png'
    },
    {
      label: 'YouTube',
      href: CONFIG.youtube,
      text: 'sungjemish',
      icon: 'assets/youtube.png'
    }
  ];

  const c = document.getElementById('contactOptions');

  opts.forEach(o => {
    c.innerHTML += `
      <div class="co-card">
        <div class="co-icon-wrap">
          <img src="${o.icon}" alt="${o.label}">
        </div>
        <p class="co-label">${o.label}</p>
        <a href="${o.href}" target="_blank" rel="noopener">${o.text}</a>
      </div>
    `;
  });
})();

/* ── MODAL ── */
(function(){
  const modal=document.getElementById('collabModal');
  const openBtn=document.getElementById('openCollabModal');
  const closeBtn=document.getElementById('modalClose');
  const submitBtn=document.getElementById('modalSubmit');
  const formEl=document.getElementById('modalForm');
  const successEl=document.getElementById('modalSuccess');

  function openModal(){modal.classList.add('open');document.body.style.overflow='hidden'}
  function closeModal(){modal.classList.remove('open');document.body.style.overflow=''}

  openBtn.addEventListener('click',openModal);
  closeBtn.addEventListener('click',closeModal);
  modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

  submitBtn.addEventListener('click',()=>{
    const name=document.getElementById('mName').value.trim();
    const email=document.getElementById('mEmail').value.trim();
    if(!name||!email){
      submitBtn.textContent='Please fill in Name & Email';
      setTimeout(()=>{submitBtn.textContent='Send Proposal ✦'},2000);
      return;
    }
    formEl.style.display='none';
    successEl.style.display='block';
    setTimeout(closeModal,3200);
    setTimeout(()=>{formEl.style.display='';successEl.style.display='none'},3600);
  });
})();

/* ── SCROLL REVEAL ── */
const ro=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('vis');ro.unobserve(e.target)}
  });
},{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));
