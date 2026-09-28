const $=s=>document.querySelector(s);
function sig(a){const c1="#cfe4ff",c2="#6fb1ff";return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="50" r="48" fill="#14305c" stroke="${c2}" stroke-width="2"/><g transform="rotate(${a} 50 50)"><circle cx="50" cy="50" r="41" stroke="${c2}" stroke-width="3" stroke-dasharray="2 19.47"/><circle cx="50" cy="9" r="3.5" fill="${c2}"/></g><g transform="rotate(${-a*.7} 50 50)" stroke="${c1}" stroke-width="1.8"><rect x="28" y="28" width="44" height="44"/><rect x="28" y="28" width="44" height="44" transform="rotate(45 50 50)"/></g><circle cx="50" cy="50" r="14" fill="#14305c" stroke="${c2}" stroke-width="2"/><g stroke="${c1}" stroke-width="2.4"><line x1="50" y1="50" x2="50" y2="39" transform="rotate(${a*3} 50 50)"/><line x1="50" y1="50" x2="50" y2="44" stroke="${c2}" transform="rotate(${a/2} 50 50)"/></g><circle cx="50" cy="50" r="${2.2+.8*Math.sin(a/12)}" fill="${c1}"/></svg>`}
let A=0,T=0;function tick(t){A=(t/40)%360;$('#logo').innerHTML=sig(A);if(t-T>350){T=t;$('#fav').href="data:image/svg+xml,"+encodeURIComponent(sig(A))}requestAnimationFrame(tick)}requestAnimationFrame(tick);
const DC={Phy:'#7fb5a8',Ana:'#d9a68a',His:'#a99bd0',Bio:'#e0c27a',Mic:'#9ac2d6',Pth:'#c98f9d',Pha:'#8fc09a',Par:'#c7b28a',Res:'#aab0ae'};
const D=[
['#','WEEK 1'],
['Sat 5 Sep','Synapse & Synaptic transmission@Phy;Ganglia & receptor@His;Neurotransmitters@B1','Cranial Cavity Bones@Anatomy 1'],
['Sun 6 Sep','Anatomy of the cranial cavity (Dural folds)@Ana;Sensory Receptors@Phy;Data collection@R1',''],
['Mon 7 Sep','Venous sinus, cranial nerves@Ana;Somatic Sensation-Sensory tracts@Phy;Brain metabolism@B1',''],
['Tue 8 Sep','Spinal cord@His;Pain Sensations@Phy;Scalp, face@Ana','CSF Report@Biochemistry'],
['Wed 9 Sep','Visceral Pain Sensation@Phy;Sampling methods@Res;Triangles of Neck 1 (anterior triangle)@Ana','Sensory Examination@Physiology 1'],
['Thu 10 Sep','Headache& Endogenous pain control system@Phy;Cerebral & cerebellar cortices@His;Triangles of Neck 2 (posterior triangle)@Ana','Ganglia, Receptors and Spinal cord@Histology 1'],
['#','WEEK 2'],
['Sat 12 Sep','Sensory Cortex & Lesions@Phy;Lymphatics of H& N, cranial Ns 1@Ana;Bacterial Meningitis@Mic','Cranial cavity (folds, sinuses, cranial nerves), Scalp, face@Anatomy 2'],
['Sun 13 Sep','Cranial Ns 2@Ana;Motor Cortex@Phy;The Motor Descending Tracts 1@Phy','Cerebrum & cerebellum@Histology 2'],
['Mon 14 Sep','The Motor Descending Tracts 2@Phy;Cranial Ns 3@Ana;M. Leprae & Borrili@Mic','Tutorial: Sensory Tutorial@Physiology 1;Triangles of the neck@Anatomy 3'],
['Tue 15 Sep','Development of head & neck 1@Ana;Intracranial hemorrhage, infarction & increased intracranial pressure@Pth;Reflex Action & Its Properties@Phy',''],
['Wed 16 Sep','Data summarization and presentation@Res;Classification of Human Reflexes@Phy;Development of head & neck 2@Ana',''],
['Thu 17 Sep','Anatomy of cerebrum 1@Ana;Deep Spinal Cord Reflexes: Stretch Reflex 1@Phy;Clostridium Tetani@Mic','Tutorial: Cranial cavity, triangles, face, scalp@Anatomy 1'],
['#','WEEK 3'],
['Sat 19 Sep','CNS infections@Pth;Anatomy of cerebrum 2@Ana;Stretch Reflex 2@Phy','Cerebrum 1 (lateral surface)@Anatomy 4'],
['Sun 20 Sep','Anatomy of brain stem I (external features)@Ana;Umnl Vs Lmnl 1@Phy;Opioid analgesics and antagonists I@Pha','Cerebrum 2 (medial, inferior surface, blood supply)@Anatomy 5'],
['Mon 21 Sep','Umnl Vs Lmnl 2@Phy;Anatomy of brain stem II@Ana;Measures of central tendency and dispersion@Res','Motor Practical 1@Physiology 2'],
['Tue 22 Sep','Opioid analgesics and antagonists II@Pha;Basal Ganglia 1@Phy;Anatomy of cerebellum 9@Ana','Lab diagnosis of Neisseria meningitides and other bacteria infecting the CNS@Microbiology 1'],
['Wed 23 Sep','Basal Ganglia 2@Phy;Blood supply of the brain@Ana;Degenerating and demyelinating neurological disorders@Pth','Tutorial: Cerebrum, brain stem@Anatomy 2;Tutorial: Case based discussion of bacterial CNS infections@Microbiology 1'],
['Thu 24 Sep',null,'Study Leave','s'],
['#','WEEK 4'],
['Sat 26 Sep',null,'Study Leave','s'],['Sun 27 Sep',null,'Study Leave','s'],['Mon 28 Sep',null,'Mid-Module Exam','x'],
['Tue 29 Sep','Cerebellum 1@Phy;Diencephalon@Ana;Viral infections of the CNS@Mic','Research@Res'],
['Wed 30 Sep','Anatomy of internal capsule, white matter & basal ganglia@Ana;Parasites affecting the nervous system & special senses (General)Helminths affecting the CN@Par;Cerebellum 2@Phy','Brain stem, cerebellum@Anatomy 6'],
['Thu 1 Oct','Reticular Formation and Reticular Activating System@Phy;Drugs for Parkinson’s disease I@Pha;Ventricular system 1 (lateral)& CSF@Ana','Cranial Nerve Examination@Physiology 3;Study pharmacological effect of analgesic drugs@Pharmacology 1'],
['#','WEEK 5'],
['Sat 3 Oct','Sleep Physiology@Phy;Rabies@Mic;Drugs for Parkinson’s disease II@Pha','Tutorial: Motor system@Physiology 2'],
['Sun 4 Oct','Thalamus, Hypothalamus & Limbic System@Phy;Ventricular system 2 (3rd,4th), CSF@Ana;Antiseizure drugs I@Pha','Motor system 2@Physiology 4'],
['Mon 5 Oct','Filarial worms of the CNS and eye@Par;Antiseizure drugs II@Pha;Tumors of the CNS@Pth','Ventricles, internal capsule@Anatomy 7'],
['Tue 6 Oct','Thalamus, Hypothalamus and Limbic System 2@Phy;Sedative hypnotics drugs I@Pha;Enteroviruses and poliomyelitis@Mic','Tutorial: Opioid analgesics, antiseizure drugs and drugs for Parkinson’s disease@Pharmacology 1;Tutorial: Cerebellum, Ventricles, internal capsule@Anatomy 3'],
['Wed 7 Oct','Learning & Memory@Phy;Sedative hypnotics drugs II@Pha;Normal distribution curve and Central limit theorem@Res',''],
['Thu 8 Oct',null,'Day Off for 6th October Armed Forces Day','o'],
['#','WEEK 6'],
['Sat 10 Oct','Antidepressant drugs I@Pha;Robo & Arboviral Encephalitis and Prions@Mic;Free-living amoebae@Par','Morphology of CNS diseases@Pathology 1'],
['Sun 11 Oct','Antidepressant drugs II@Pha;Speech Physiology and Its Disorders@Phy;Toxoplasma gondii 1@Par','Laboratory diagnosis of Meningitis and encephalitis@Microbiology 2;Tutorial: Interactive case discussion on CNS disorders.@Pathology 1'],
['Mon 12 Oct','Toxoplasma gondii 2+ Other protozoa of the CNS@Par;Posture and Equilibrium 1@Phy;Anatomy of the orbit 1 (Muscles, vessels)@Ana','Tutorial: Case based discussion of viral CNS infections@Microbiology 2'],
['Tue 13 Oct','Anatomy of the orbit 2 (nerves)@Ana;External & middle coats of eye.@His;Posture and Equilibrium 2@Phy','Parasites of CNS and special senses@Parasitology 1'],
['Wed 14 Oct','Antipsychotic drugs and mood stabilizers I@Pha;Nervous coat of eye, eyelid & conjunctiva.@His;Introduction To the Physiology of Vision@Phy','Tutorial: Parasitism of the CNS and special sensis@Parasitology 1'],
['Thu 15 Oct','Antipsychotic drugs and mood stabilizers II@Pha;Accommodation For Near Vision, Light Reflex, Error of Refraction and Visual Acuity@Phy;Vitamin A (rhodopsin vision cycle)@B3','Histology of eye@Histology 3;Eye 1@Physiology 5'],
['#','WEEK 7'],
['Sat 17 Oct','Confidence Interval@Res;The Retina 1@Phy;Anatomy of the ear@Ana','Reporting Adverse drug reaction@Pharmacology 2'],
['Sun 18 Oct','The Retina 2@Phy;Vestibular apparatus@His;Development of CNS@Ana','Orbit, ear@Anatomy 8;Eye 2@Physiology 6'],
['Mon 19 Oct','Auditory apparatus.@His;Retinal Adaptation, Color Vision and Visual Pathway@Phy;Physiology of the Ear 1@Phy','Tutorial: Antidepressants, sedative hypnotic drugs and antipsychotic drugs@Pharmacology 2;Tutorial: Eye@Physiology 6'],
['Tue 20 Oct',null,'ANU Medical School Program’s Conference','o'],
['Wed 21 Oct','Physiology Of the Ear 2@Phy;Hypothesis testing@Res;Physiology of the Taste and Smell@Phy',''],
['Thu 22 Oct',null,'Skill Lab (Group A)','c'],
['#','WEEK 8'],
['Sat 24 Oct',null,'Skill Lab (Group B)','c'],
['Sun 25 Oct','','Ear@Physiology 7;Histology of vestibular & auditory apparatuses.@Histology 4'],
['Mon 26 Oct','','Tutorial: Ear, eye@Anatomy 4;Tutorial: Ear Taste & Smell@Physiology 4;Research@Res'],
['Tue 27 Oct',null,'Study Leave','s'],['Wed 28 Oct',null,'Study Leave','s'],['Thu 29 Oct',null,'Study Leave','s'],
['#','WEEK 9'],
['Sat 31 Oct',null,'End-of-Module MED319 Exam + MED322 Quiz','x'],
['Sun 1 Nov',null,'Study Leave','s'],['Mon 2 Nov',null,'Study Leave','s'],
['Tue 3 Nov',null,'Practical Exam','x'],['Wed 4 Nov',null,'Portfolio','x'],['Thu 5 Nov',null,'ACS','x']];
const P=s=>s?s.split(';').map(x=>x.split('@')):[];
const DN={Phy:'Physiology',Ana:'Anatomy',His:'Histology',Bio:'Biochemistry',Mic:'Microbiology',Pth:'Pathology',Pha:'Pharmacology',Par:'Parasitology',Res:'Research'};
const C={},cnt=k=>C[k]=(C[k]||0)+1;let lc=0,pr=0,tu=0,M=[];
D.forEach(d=>{if(d[0]=='#'){M.push({w:d[1]});return}
const [dt,l,p,sp]=d,[wd,...r]=dt.split(' '),day=r.join(' ');
if(l===null){M.push({dt,wd,day,sp:p,c:sp});return}
const it=[];
P(l).forEach((x,j)=>{const k=x[1],res=k=='Res'||k=='R1',LIT={B1:'Biochemistry 1',B3:'Biochemistry 3',R1:'Research 1'};it.push({t:'L',id:dt+'L'+j,code:res?'LCT '+cnt('rl')+' · MED322':'LCT '+(++lc),ti:x[0],dp:LIT[k]||(k!='Res'&&DN[k]?DN[k]+' '+cnt(k):''),res})});
P(p).forEach((x,j)=>{const tut=x[0].startsWith('Tutorial: '),res=x[1]=='Res';it.push({t:tut?'T':'P',id:dt+'P'+j,code:tut?'TUT '+(++tu):res?'PRACT '+cnt('rp')+' · MED322':'PRACT '+(++pr),ti:tut?x[0].slice(10):x[0],dp:res?'':x[1],res})});
M.push({dt,wd,day,it})});
let S={},F='all',KEY='schedule-att-v1';try{S=JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}};
function build(f){let h='',n1=0,n2=0;
M.forEach(m=>{
if(m.w){if(f=='all')h+=`<div class="wk">${m.w}</div>`;return}
if(m.sp!==undefined){if(f=='all')h+=`<section class="day"><div class="dt"><b>${m.wd}</b><span>${m.day}</span></div><div class="sp ${m.c}">${m.sp}</div></section>`;return}
let L='',Q='',all=true;
m.it.forEach(x=>{const v=S[x.id]||0;if(v==1)x.t=='L'?n1++:n2++;if(v!=1)all=false;if(f!='all'&&v!=1)return;
const row=`<button class="r ${x.t} ${v==1?'m':''}" data-id="${x.id}"><span class="cd${x.res?' rs':''}">${x.code}</span><span class="ti">${x.ti}${x.dp?` <i>(${x.dp})</i>`:''}</span><span class="ck">${v==1?'✕':''}</span></button>`;
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
