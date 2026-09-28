const $=s=>document.querySelector(s);
function sig(a){const c1="#cfe4ff",c2="#6fb1ff";return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="50" r="48" fill="#14305c" stroke="${c2}" stroke-width="2"/><g transform="rotate(${a} 50 50)"><circle cx="50" cy="50" r="41" stroke="${c2}" stroke-width="3" stroke-dasharray="2 19.47"/><circle cx="50" cy="9" r="3.5" fill="${c2}"/></g><g transform="rotate(${-a*.7} 50 50)" stroke="${c1}" stroke-width="1.8"><rect x="28" y="28" width="44" height="44"/><rect x="28" y="28" width="44" height="44" transform="rotate(45 50 50)"/></g><circle cx="50" cy="50" r="14" fill="#14305c" stroke="${c2}" stroke-width="2"/><g stroke="${c1}" stroke-width="2.4"><line x1="50" y1="50" x2="50" y2="39" transform="rotate(${a*3} 50 50)"/><line x1="50" y1="50" x2="50" y2="44" stroke="${c2}" transform="rotate(${a/2} 50 50)"/></g><circle cx="50" cy="50" r="${2.2+.8*Math.sin(a/12)}" fill="${c1}"/></svg>`}
let A=0,T=0;function tick(t){A=(t/40)%360;$('#logo').innerHTML=sig(A);if(t-T>350){T=t;$('#fav').href="data:image/svg+xml,"+encodeURIComponent(sig(A))}requestAnimationFrame(tick)}requestAnimationFrame(tick);
const DC={Phy:'#7fb5a8',Ana:'#d9a68a',His:'#a99bd0',Bio:'#e0c27a',Mic:'#9ac2d6',Pth:'#c98f9d',Pha:'#8fc09a',Par:'#c7b28a',Res:'#aab0ae'};
const D=[
['#','WEEK 1'],
['Sat 5 Sep','Synapse & synaptic transmission@Phy;Ganglia & receptors@His;Neurotransmitters@Bio','Cranial cavity bones@Ana'],
['Sun 6 Sep','Anatomy of cranial cavity (dural folds)@Ana;Sensory receptors@Phy;Data collection@Res',''],
['Mon 7 Sep','Venous sinus, cranial nerves@Ana;Somatic sensation – sensory tracts@Phy;Brain metabolism@Bio',''],
['Tue 8 Sep','Spinal cord@His;Pain sensations@Phy;Scalp, face@Ana','CSF report@Bio'],
['Wed 9 Sep','Visceral pain sensation@Phy;Sampling methods@Res;Triangles of neck 1@Ana','Sensory examination@Phy'],
['Thu 10 Sep','Headache & endogenous pain control@Phy;Cerebral & cerebellar cortices@His;Triangles of neck 2@Ana','Ganglia, receptors & spinal cord@His'],
['#','WEEK 2'],
['Sat 12 Sep','Sensory cortex & lesions@Phy;Lymphatics of H&N, cranial Ns 1@Ana;Bacterial meningitis@Mic','Cranial cavity, scalp, face@Ana'],
['Sun 13 Sep','Cranial Ns 2@Ana;Motor cortex@Phy;Motor descending tracts 1@Phy','Cerebrum & cerebellum@His'],
['Mon 14 Sep','Motor descending tracts 2@Phy;Cranial Ns 3@Ana;M. leprae & Borrelia@Mic','Tutorial: sensory@Phy;Triangles of the neck@Ana'],
['Tue 15 Sep','Development of head & neck 1@Ana;Intracranial haemorrhage, infarction & ICP@Pth;Reflex action & properties@Phy',''],
['Wed 16 Sep','Data summarization & presentation@Res;Classification of human reflexes@Phy;Development of head & neck 2@Ana',''],
['Thu 17 Sep','Anatomy of cerebrum 1@Ana;Stretch reflex 1@Phy;Clostridium tetani@Mic','Tutorial: cranial cavity, triangles, face, scalp@Ana'],
['#','WEEK 3'],
['Sat 19 Sep','CNS infections@Pth;Anatomy of cerebrum 2@Ana;Stretch reflex 2@Phy','Cerebrum 1 (lateral surface)@Ana'],
['Sun 20 Sep','Brain stem I (external features)@Ana;UMNL vs LMNL 1@Phy;Opioid analgesics I@Pha','Cerebrum 2 (medial, inferior, blood supply)@Ana'],
['Mon 21 Sep','UMNL vs LMNL 2@Phy;Brain stem II@Ana;Central tendency & dispersion@Res','Motor practical 1@Phy'],
['Tue 22 Sep','Opioid analgesics II@Pha;Basal ganglia 1@Phy;Anatomy of cerebellum@Ana','Lab diagnosis of Neisseria meningitidis & CNS bacteria@Mic'],
['Wed 23 Sep','Basal ganglia 2@Phy;Blood supply of the brain@Ana;Degenerating & demyelinating disorders@Pth','Tutorial: cerebrum, brain stem@Ana;Tutorial: bacterial CNS infections@Mic'],
['Thu 24 Sep',null,'Study Leave','s'],['#','WEEK 4'],['Sat 26 Sep',null,'Study Leave','s'],['Sun 27 Sep',null,'Study Leave','s'],['Mon 28 Sep',null,'Mid-Module Exam','x'],
['Tue 29 Sep','Cerebellum 1@Phy;Diencephalon@Ana;Viral infections of the CNS@Mic','Research practical@Res'],
['Wed 30 Sep','Internal capsule, white matter & basal ganglia@Ana;Helminths affecting the CNS@Par;Cerebellum 2@Phy','Brain stem, cerebellum@Ana'],
['Thu 1 Oct','Reticular formation & RAS@Phy;Drugs for Parkinson’s I@Pha;Ventricular system 1 & CSF@Ana','Cranial nerve examination@Phy;Effect of analgesic drugs@Pha'],
['#','WEEK 5'],
['Sat 3 Oct','Sleep physiology@Phy;Rabies@Mic;Drugs for Parkinson’s II@Pha','Tutorial: motor system@Phy'],
['Sun 4 Oct','Thalamus, hypothalamus & limbic system 1@Phy;Ventricular system 2 & CSF@Ana;Antiseizure drugs I@Pha','Motor system 2@Phy'],
['Mon 5 Oct','Filarial worms of CNS & eye@Par;Antiseizure drugs II@Pha;Tumors of the CNS@Pth','Ventricles, internal capsule@Ana'],
['Tue 6 Oct','Thalamus, hypothalamus & limbic system 2@Phy;Sedative hypnotics I@Pha;Enteroviruses & poliomyelitis@Mic','Tutorial: opioids, antiseizure, Parkinson’s@Pha;Tutorial: cerebellum, ventricles, capsule@Ana'],
['Wed 7 Oct','Learning & memory@Phy;Sedative hypnotics II@Pha;Normal distribution & CLT@Res',''],
['Thu 8 Oct',null,'Day Off for 6th October Armed Forces Day','o'],['#','WEEK 6'],
['Sat 10 Oct','Antidepressants I@Pha;Robo & arboviral encephalitis, prions@Mic;Free-living amoebae@Par','Morphology of CNS diseases@Pth'],
['Sun 11 Oct','Antidepressants II@Pha;Speech physiology & disorders@Phy;Toxoplasma gondii 1@Par','Lab diagnosis of meningitis & encephalitis@Mic;Tutorial: CNS disorder cases@Pth'],
['Mon 12 Oct','Toxoplasma 2 & other CNS protozoa@Par;Posture & equilibrium 1@Phy;Anatomy of orbit 1@Ana','Tutorial: viral CNS infections@Mic'],
['Tue 13 Oct','Anatomy of orbit 2 (nerves)@Ana;External & middle coats of eye@His;Posture & equilibrium 2@Phy','Parasites of CNS & special senses@Par'],
['Wed 14 Oct','Antipsychotics & mood stabilizers I@Pha;Nervous coat of eye, eyelid, conjunctiva@His;Intro to physiology of vision@Phy','Tutorial: parasitism of CNS & senses@Par'],
['Thu 15 Oct','Antipsychotics & mood stabilizers II@Pha;Accommodation, light reflex, refraction@Phy;Vitamin A (rhodopsin cycle)@Bio','Histology of eye@His;Eye 1@Phy'],
['#','WEEK 7'],
['Sat 17 Oct','Confidence interval@Res;The retina 1@Phy;Anatomy of the ear@Ana','Reporting adverse drug reaction@Pha'],
['Sun 18 Oct','The retina 2@Phy;Vestibular apparatus@His;Development of CNS@Ana','Orbit, ear@Ana;Eye 2@Phy'],
['Mon 19 Oct','Auditory apparatus@His;Retinal adaptation, colour vision, visual pathway@Phy;Physiology of the ear 1@Phy','Tutorial: antidepressants, sedatives, antipsychotics@Pha;Tutorial: eye@Phy'],
['Tue 20 Oct',null,'ANU Medical School Program’s Conference','o'],
['Wed 21 Oct','Physiology of the ear 2@Phy;Hypothesis testing@Res;Taste & smell@Phy',''],
['Thu 22 Oct',null,'Skill Lab','c'],['#','WEEK 8'],['Sat 24 Oct',null,'Skill Lab','c'],
['Sun 25 Oct','','Ear@Phy;Histology of vestibular & auditory apparatus@His'],
['Mon 26 Oct','','Tutorial: ear, eye@Ana;Tutorial: ear, taste & smell@Phy;Research practical 2@Res'],['Tue 27 Oct',null,'Study Leave','s'],['Wed 28 Oct',null,'Study Leave','s'],['Thu 29 Oct',null,'Study Leave','s'],['#','WEEK 9'],['Sat 31 Oct',null,'End-of-Module MED319 Exam + MED322 Quiz','x'],['Sun 1 Nov',null,'Study Leave','s'],['Mon 2 Nov',null,'Study Leave','s'],['Tue 3 Nov',null,'Practical Exam','x'],['Wed 4 Nov',null,'Portfolio','x'],['Thu 5 Nov',null,'ACS','x']];
const P=s=>s?s.split(';').map(x=>x.split('@')):[];
const DN={Phy:'Physiology',Ana:'Anatomy',His:'Histology',Bio:'Biochemistry',Mic:'Microbiology',Pth:'Pathology',Pha:'Pharmacology',Par:'Parasitology',Res:'Research'};
const C={},cnt=k=>C[k]=(C[k]||0)+1;let lc=0,pr=0,tu=0,M=[];
D.forEach(d=>{if(d[0]=='#'){M.push({w:d[1]});return}
const [dt,l,p,sp]=d,[wd,...r]=dt.split(' '),day=r.join(' ');
if(l===null){M.push({dt,wd,day,sp:p,c:sp});return}
const it=[];
P(l).forEach((x,j)=>{const res=x[1]=='Res',n=res?cnt('rl'):cnt(x[1]);it.push({t:'L',id:dt+'L'+j,code:res?'LCT '+n+' · MED322':'LCT '+(++lc),ti:x[0],dp:DN[x[1]]+' '+n,res})});
P(p).forEach((x,j)=>{const tut=x[0].startsWith('Tutorial: '),res=x[1]=='Res';it.push({t:tut?'T':'P',id:dt+'P'+j,code:tut?'TUT '+(++tu):res?'PRACT '+cnt('rp')+' · MED322':'PRACT '+(++pr),ti:tut?x[0].slice(10):x[0],dp:DN[x[1]],res})});
M.push({dt,wd,day,it})});
let S={},F='all',KEY='schedule-att-v1';try{S=JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}};
function build(f){let h='',n1=0,n2=0;
M.forEach(m=>{
if(m.w){if(f=='all')h+=`<div class="wk">${m.w}</div>`;return}
if(m.sp!==undefined){if(f=='all')h+=`<section class="day"><div class="dt"><b>${m.wd}</b><span>${m.day}</span></div><div class="sp ${m.c}">${m.sp}</div></section>`;return}
let L='',Q='',all=true;
m.it.forEach(x=>{const v=S[x.id]||0;if(v==1)x.t=='L'?n1++:n2++;if(v!=1)all=false;if(f!='all'&&v!=1)return;
const row=`<button class="r ${x.t} ${v==1?'m':''}" data-id="${x.id}"><span class="cd${x.res?' rs':''}">${x.code}</span><span class="ti">${x.ti} <i>(${x.dp})</i></span><span class="ck">${v==1?'✕':''}</span></button>`;
x.t=='L'?L+=row:Q+=row});
if(!L&&!Q)return;
h+=`<section class="day"><div class="dt"><b>${m.wd}</b><span>${m.day}</span><button data-day="${m.dt}">${all?'Clear day':'Missed all day'}</button></div><div class="rows">${L?`<div class="lb">Lectures · Main Lecture Hall (1)</div>${L}`:''}${Q?`<div class="lb">Practical classes &amp; tutorials</div>${Q}`:''}</div></section>`});
return [h,n1,n2]}
function render(a){const [h,n1,n2]=build(F);$('#days').classList.toggle('anim',!!a);$('#days').innerHTML=h||'<p class="msg">Nothing missed. Iconic. 🎉</p>';
$('#n1').textContent=n1;$('#n2').textContent=n2;
const td=n1+n2;$('#msg').textContent=td?`${td} missed session${td>1?'s':''} so far. One cup of tea at a time ☕`:'Tap anything you missed and Schedule will keep track for you.'}
document.addEventListener('click',e=>{const s=e.target.closest('[data-id]'),d=e.target.closest('[data-day]'),f=e.target.closest('[data-f]');
if(s){const id=s.dataset.id;S[id]?delete S[id]:S[id]=1;save();render()}
else if(d){const I=M.find(z=>z.dt==d.dataset.day).it.map(x=>x.id),all=I.every(x=>S[x]==1);I.forEach(x=>all?delete S[x]:S[x]=1);save();render()}
else if(f){F=f.dataset.f;document.querySelectorAll('[data-f]').forEach(b=>b.classList.toggle('on',b==f));render(1)}});
$('#th').onclick=()=>{const r=document.documentElement,dk=r.dataset.theme?r.dataset.theme=='dark':matchMedia('(prefers-color-scheme:dark)').matches;r.dataset.theme=dk?'light':'dark'};
$('#ex').onclick=()=>{const [h,n1,n2]=build('miss');
if(!(n1+n2)){$('#msg').textContent='Nothing is marked as missed yet, so there is nothing to export.';return}
$('#pr').innerHTML=`<header><div class="lg">${sig(20)}</div><h1>Schedule<small>CNS &amp; Special Senses · Level 3 · Sem 5</small></h1></header><div class="stats"><div class="st"><b>${n1}</b><span>Missed lectures</span></div><div class="st"><b>${n2}</b><span>Missed practicals &amp; tutorials</span></div></div>${h}`;window.print()};
render(1);
