const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const whatsapp="5542998490559";
const projects=[
 {id:1,cat:"Cozinhas",title:"Cozinha contemporânea",desc:"Amadeirado + neutros, com bancada e armazenamento inteligente.",img:"https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1200&q=88",gallery:["https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=900&q=88","https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=900&q=88"]},
 {id:2,cat:"Salas",title:"Painel com marcenaria integrada",desc:"Painel de TV, nichos e armazenamento em composição leve.",img:"https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1500&q=90",gallery:["https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=900&q=88","https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=88"]},
 {id:3,cat:"Quartos",title:"Quarto sob medida",desc:"Armários planejados e cabeceira para aproveitar cada centímetro.",img:"https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=88",gallery:["https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=88"]},
 {id:4,cat:"Closets",title:"Closet organizado",desc:"Gavetas, cabideiros e prateleiras desenhados para a rotina.",img:"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=88",gallery:[]},
 {id:5,cat:"Escritórios",title:"Home office planejado",desc:"Uma estação de trabalho elegante e funcional.",img:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1500&q=90",gallery:["https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=88"]},
 {id:6,cat:"Banheiros",title:"Banheiro com gabinete",desc:"Móvel compacto com acabamento resistente e nichos.",img:"https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=88",gallery:[]},
 {id:7,cat:"Lavanderias",title:"Lavanderia otimizada",desc:"Armários verticais e bancada para ganhar organização.",img:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=88",gallery:[]},
 {id:8,cat:"Áreas gourmet",title:"Espaço gourmet",desc:"Bancadas e armários para receber bem.",img:"https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=88",gallery:[]},
 {id:9,cat:"Comerciais",title:"Móvel comercial",desc:"Balcão e expositores pensados para o fluxo do negócio.",img:"https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=1200&q=88",gallery:[]}
];
const solutions=[
 ["Cozinhas planejadas","https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=900&q=85"],
 ["Quartos & closets","https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=85"],
 ["Salas & painéis","https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85"],
 ["Home office","https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85"],
 ["Banheiros","https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=900&q=85"],
 ["Lavanderias","https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85"],
 ["Áreas gourmet","https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=85"],
 ["Móveis comerciais","https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=900&q=85"]
];
const cats=["Todos",...new Set(projects.map(p=>p.cat))];
let activeCat="Todos", visible=6;
function renderFilters(){ $("#filters").innerHTML=cats.map(c=>`<button class="filter ${c===activeCat?"active":""}" data-cat="${c}">${c}</button>`).join(""); $$("#filters .filter").forEach(b=>b.onclick=()=>{activeCat=b.dataset.cat;visible=6;renderFilters();renderProjects()})}
function renderProjects(){
 let list=projects.filter(p=>activeCat==="Todos"||p.cat===activeCat).slice(0,visible);
 $("#projectGrid").innerHTML=list.map(p=>`<article class="project-card reveal" data-id="${p.id}"><div class="project-img"><img src="${p.img}" alt="${p.title}" loading="lazy"><span class="project-tag">${p.cat}</span></div><div class="project-info"><h3>${p.title}</h3><p>${p.desc}</p></div></article>`).join("");
 $$("#projectGrid .project-card").forEach(c=>c.onclick=()=>openProject(+c.dataset.id));
 $$("#projectGrid .reveal").forEach(el=>observer.observe(el));
 $("#loadMore").style.display=list.length<projects.filter(p=>activeCat==="Todos"||p.cat===activeCat).length?"inline-flex":"none";
}
function renderSolutions(){ $("#solutionGrid").innerHTML=solutions.map((s,i)=>`<article class="solution-card"><img src="${s[1]}" alt="${s[0]}" loading="lazy"><div><h3>${s[0]}</h3><p>Projeto personalizado sob medida</p></div></article>`).join("")}
function openProject(id){let p=projects.find(x=>x.id===id);$("#modalContent").innerHTML=`<div class="modal-hero"><img src="${p.img}" alt="${p.title}"></div><span class="kicker">${p.cat}</span><h2>${p.title}</h2><p>${p.desc} Cada detalhe pode ser adaptado ao seu espaço, estilo e necessidades.</p><div class="modal-gallery">${[p.img,...p.gallery].map(x=>`<img src="${x}" alt="${p.title}" loading="lazy">`).join("")}</div><div style="margin-top:24px"><a class="btn btn-dark" href="#orcamento" onclick="closeModal();setTimeout(()=>window.scrollTo({top:document.querySelector('#orcamento').offsetTop-80,behavior:'smooth'}),50)">Quero um projeto parecido ↗</a></div>`;$("#projectModal").classList.add("open");$("#projectModal").setAttribute("aria-hidden","false")}
function closeModal(){$("#projectModal").classList.remove("open");$("#projectModal").setAttribute("aria-hidden","true")}
$(".modal-close").onclick=closeModal;$(".modal-backdrop").onclick=closeModal;
$("#loadMore").onclick=()=>{visible+=3;renderProjects()};
renderFilters();renderProjects();renderSolutions();

const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.08});
$$(".reveal").forEach(e=>observer.observe(e));

$(".menu-toggle").onclick=()=>$(".nav-links").classList.toggle("open");
$$(".nav-links a").forEach(a=>a.onclick=()=>$(".nav-links").classList.remove("open"));

const projectOptions=["Cozinha","Quarto","Guarda-roupa","Closet","Sala","Painel","Banheiro","Escritório","Lavanderia","Área gourmet","Comércio","Outro"];
const styleOptions=["Moderno","Clássico","Minimalista","Industrial","Rústico","Contemporâneo"];
$("#projectChoices").innerHTML=projectOptions.map(x=>`<button type="button" class="choice">${x}</button>`).join("");
$("#styleChoices").innerHTML=styleOptions.map(x=>`<button type="button" class="choice">${x}</button>`).join("");
$$(".choice").forEach(b=>b.onclick=()=>{let group=b.parentElement;group.querySelectorAll(".choice").forEach(x=>x.classList.remove("selected"));b.classList.add("selected")});

let step=1, uploaded=[];
function updateStep(){
 $$(".form-step").forEach(s=>s.classList.toggle("active",+s.dataset.step===step));
 $("#progressBar").style.width=(step/7*100)+"%";
 $("#prevStep").style.visibility=step===1?"hidden":"visible";
 $("#nextStep").style.display=step===7?"none":"inline-flex";
 if(step===7)buildSummary();
}
$("#nextStep").onclick=()=>{let active=$(`.form-step[data-step="${step}"]`);if(step===1){for(let i of active.querySelectorAll("[required]")){if(!i.value.trim()){i.focus();return}}} if(step<7){step++;updateStep()}};
$("#prevStep").onclick=()=>{if(step>1){step--;updateStep()}};
$("#noMeasures").onchange=e=>{$$(".measures input").forEach(i=>i.disabled=e.target.checked)};
$("#photoInput").onchange=e=>{uploaded=[...e.target.files];$("#thumbs").innerHTML=uploaded.map((f,i)=>`<div style="position:relative"><img class="thumb" src="${URL.createObjectURL(f)}" alt="Imagem ${i+1}"></div>`).join("")};
$("#uploadBox").onclick=()=>$("#photoInput").click();
function val(n){return new FormData($("#quoteForm")).get(n)||"—"}
function buildSummary(){
 let type=$("#projectChoices .selected")?.textContent||"—", style=$("#styleChoices .selected")?.textContent||"—";
 $("#summary").innerHTML=`<div><strong>Nome</strong><span>${val("nome")}</span></div><div><strong>WhatsApp</strong><span>${val("whatsapp")}</span></div><div><strong>Projeto</strong><span>${type}</span></div><div><strong>Estilo</strong><span>${style}</span></div><div><strong>Medidas</strong><span>${$("#noMeasures").checked?"Ainda não sei":`${val("largura")} × ${val("altura")} × ${val("profundidade")}`}</span></div><div><strong>Fotos</strong><span>${uploaded.length} anexada(s)</span></div>`}
$("#quoteForm").onsubmit=e=>{e.preventDefault();let type=$("#projectChoices .selected")?.textContent||"Outro",style=$("#styleChoices .selected")?.textContent||"Não informado";let fd=new FormData(e.target);let data={nome:fd.get("nome"),whatsapp:fd.get("whatsapp"),email:fd.get("email"),cidade:fd.get("cidade"),bairro:fd.get("bairro"),tipo:type,estilo:style,descricao:fd.get("descricao"),data:new Date().toLocaleString("pt-BR")};let saved=JSON.parse(localStorage.getItem("busato_quotes")||"[]");saved.unshift(data);localStorage.setItem("busato_quotes",JSON.stringify(saved));let msg=`Olá! Gostaria de solicitar um orçamento.%0A%0ANome: ${encodeURIComponent(data.nome)}%0AWhatsApp: ${encodeURIComponent(data.whatsapp)}%0AProjeto: ${encodeURIComponent(data.tipo)}%0AEstilo: ${encodeURIComponent(data.estilo)}%0ACidade: ${encodeURIComponent(data.cidade||"")}%0A%0A${encodeURIComponent(data.descricao||"")}`;showToast("Solicitação recebida! Abrindo o WhatsApp…");window.open(`https://wa.me/${whatsapp}?text=${msg}`,"_blank");e.target.reset();uploaded=[];$("#thumbs").innerHTML="";step=1;updateStep();renderAdmin()};

$("#contactForm").onsubmit=e=>{e.preventDefault();let fd=new FormData(e.target),saved=JSON.parse(localStorage.getItem("busato_contacts")||"[]");saved.unshift({nome:fd.get("nome"),whatsapp:fd.get("whatsapp"),email:fd.get("email"),mensagem:fd.get("mensagem"),data:new Date().toLocaleString("pt-BR")});localStorage.setItem("busato_contacts",JSON.stringify(saved));showToast("Mensagem enviada com sucesso!");e.target.reset();renderAdmin()};

function showToast(t){let x=$("#toast");x.textContent=t;x.classList.add("show");setTimeout(()=>x.classList.remove("show"),3200)}
function renderAdmin(){let q=JSON.parse(localStorage.getItem("busato_quotes")||"[]"),c=JSON.parse(localStorage.getItem("busato_contacts")||"[]");$("#statQuotes").textContent=q.length;$("#statContacts").textContent=c.length;$("#adminQuotes").innerHTML=q.length?q.slice(0,10).map(x=>`<div style="border-top:1px solid #eee;padding:14px 0;display:flex;justify-content:space-between;gap:20px"><div><strong>${x.nome}</strong><div style="font-size:11px;color:#777">${x.tipo} • ${x.estilo}</div></div><span style="font-size:10px;color:#999">${x.data}</span></div>`).join(""):`<p class="empty">Nenhuma solicitação recebida ainda.</p>`}
renderAdmin();
$("#exportData").onclick=()=>{let data={orcamentos:JSON.parse(localStorage.getItem("busato_quotes")||"[]"),contatos:JSON.parse(localStorage.getItem("busato_contacts")||"[]")};let a=document.createElement("a");a.href=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:"application/json"}));a.download="busato-dados.json";a.click()};
updateStep();

const range=$("#compare .compare-range"),before=$("#compare .before-wrap"),handle=$("#compare .compare-handle");
function compare(v){before.style.width=v+"%";handle.style.left=v+"%"}
range.oninput=e=>compare(e.target.value);compare(50);

window.addEventListener("hashchange",()=>{if(location.hash!=="#admin")window.scrollTo({top:0,behavior:"smooth"})});
