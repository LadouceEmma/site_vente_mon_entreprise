var WA="237690841946",MAIL="emmanuelleyougo2003@gmail.com";
// Numéros de réception Mobile Money (à ajuster si différents)
var PAYNUM={MTN:"681182610",Orange:"690841946"};
var fmt=function(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g," ")+" FCFA"};
var wa=function(t){return "https://wa.me/"+WA+"?text="+encodeURIComponent(t)};
var $=function(s){return document.querySelector(s)};
var esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})};

var services=[
["🧩","Développement de logiciels","Applications web et mobiles, ERP et outils de gestion adaptés à votre activité."],
["🌐","Création de sites web","Sites vitrines et e-commerce, rapides et bien référencés."],
["🎓","Formation professionnelle","Bureautique, gestion de projet, programmation et bases de données."],
["💻","Vente de matériel","Ordinateurs, imprimantes, réseau et accessoires avec garantie."],
["🛠️","Maintenance informatique","Dépannage, entretien préventif et contrats annuels."],
["📅","Réservation en ligne","Démonstrations, formations et interventions planifiées à l’avance."]];
$("#gServices").innerHTML=services.map(function(s){return '<div class="card"><span class="ic">'+s[0]+'</span><h3>'+s[1]+'</h3><p>'+s[2]+'</p></div>'}).join("");

var forms=[
["Bureautique","Word, Excel, PowerPoint","Traitement de texte, tableurs, formules et présentations pour le travail quotidien.",35000],
["Bureautique","Excel avancé","Tableaux croisés, macros et tableaux de bord pour gérer vos données.",45000],
["Gestion de projet","Gestion de projet","Planification, suivi des délais et des coûts, outils de pilotage.",60000],
["Programmation","HTML, CSS et JavaScript","Construire un site web complet, du design à la mise en ligne.",75000],
["Programmation","Python et analyse de données","Les bases du langage et ses usages en data et automatisation.",80000],
["Programmation","Développement mobile","Concevoir et publier une application Android et iOS.",90000],
["Bases de données","SQL et modélisation","Concevoir, interroger et sécuriser une base de données.",55000],
["Bases de données","MySQL et PostgreSQL en pratique","Administration, sauvegardes et optimisation des requêtes.",65000]];
var cats=["Tout"].concat(forms.map(function(f){return f[0]}).filter(function(v,i,a){return a.indexOf(v)===i}));
var curF="Tout";
var FORM_IMG={"Bureautique":"https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&h=280&fit=crop","Gestion de projet":"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=280&fit=crop","Programmation":"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=280&fit=crop","Bases de données":"https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500&h=280&fit=crop"};
function fcard(f){var i=forms.indexOf(f);return '<div class="card"><div class="card-img"><img src="'+(FORM_IMG[f[0]]||FORM_IMG["Programmation"])+'" alt="'+esc(f[1])+'" loading="lazy"></div><span class="tag">'+f[0]+'</span><h3>'+f[1]+'</h3><p>'+f[2]+'</p><div class="foot"><span class="price">'+fmt(f[3])+'</span><button class="btn sm" type="button" data-enroll="'+i+'">S’inscrire</button></div></div>'}
function renderF(){
 $("#tabsF").innerHTML=cats.map(function(c){return '<button class="tab" aria-pressed="'+(c===curF)+'" data-c="'+c+'">'+c+'</button>'}).join("");
 $("#gForm").innerHTML=forms.filter(function(f){return curF==="Tout"||f[0]===curF}).map(fcard).join("");
}
$("#tabsF").addEventListener("click",function(e){var t=e.target.closest(".tab");if(!t)return;curF=t.dataset.c;renderF()});
renderF();

var erp=[
["MEYGO ERP — Gestion commerciale","Ventes, achats, facturation et suivi de trésorerie.",true],
["Gestion de stock","Entrées, sorties, inventaires et alertes de rupture.",true],
["Gestion scolaire et des notes","Relevés de notes, procès-verbaux et bulletins automatisés.",true],
["Gestion RH et paie","Dossiers du personnel, congés et bulletins de paie.",true]];
$("#gErp").innerHTML=erp.map(function(e){return '<div class="card"><span class="tag">ERP</span><h3>'+e[0]+'</h3><p>'+e[1]+'</p><div class="foot"><span class="note">Démo disponible</span><a class="btn sm" target="_blank" rel="noopener" href="'+wa("Bonjour MEYGO Technologies, je souhaite une démonstration du logiciel : "+e[0])+'">Demander la démo</a></div></div>'}).join("");

// Remplacez les liens "#" par les adresses réelles de vos sites
var sites=[
["RiseGlobal Financial","Site multilingue de services financiers.","https://riseglobalfinancial.com"],
["MEYGO Store","Boutique en ligne avec commande.","https://meygotechnologies.netlify.app"],
["Généafrica","Site de généalogie bilingue français et anglais.","https://geneafricapagec.com"]];
$("#gSites").innerHTML=sites.map(function(s){return '<div class="card"><span class="tag">Site web</span><h3>'+s[0]+'</h3><p>'+s[1]+'</p><div class="foot"><a class="btn out sm" target="_blank" rel="noopener" href="'+s[2]+'">Visiter le site</a></div></div>'}).join("");

var mat=[
["Ordinateurs portables","Neufs et reconditionnés, pour le bureau ou la maison.",150000],
["Ordinateurs de bureau","Unités centrales, écrans et claviers.",180000],
["Imprimantes et scanners","Laser et jet d’encre, avec consommables.",65000],
["Réseau et Wi-Fi","Routeurs, switchs, câblage et points d’accès.",25000],
["Onduleurs et stabilisateurs","Protégez vos équipements des coupures de courant.",35000],
["Accessoires","Souris, claviers, casques, disques durs et hubs USB-C.",8000]];
$("#gMat").innerHTML=mat.map(function(m){return '<div class="card"><span class="tag">Matériel</span><h3>'+m[0]+'</h3><p>'+m[1]+'</p><div class="foot"><span class="price">dès '+fmt(m[2])+'</span><a class="btn sm" target="_blank" rel="noopener" href="'+wa("Bonjour MEYGO Technologies, je souhaite un devis pour : "+m[0])+'">Demander un devis</a></div></div>'}).join("");

var mt=[
["Dépannage sur site","Diagnostic et réparation à votre bureau ou à votre domicile.","dès 10 000 FCFA"],
["Maintenance préventive","Nettoyage, mises à jour et sauvegardes régulières.","dès 25 000 FCFA"],
["Contrat annuel entreprise","Visites planifiées et intervention prioritaire.","sur devis"],
["Sécurité et antivirus","Protection du parc, pare-feu et sensibilisation du personnel.","sur devis"]];
var MT_IMG=['https://images.unsplash.com/photo-1581092918056-0c4c3faad7a1?w=500&h=280&fit=crop', 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=280&fit=crop', 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=280&fit=crop', 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=500&h=280&fit=crop'];
$("#gMaint").innerHTML=mt.map(function(m,i){return '<div class="card"><div class="card-img"><img src="'+MT_IMG[i]+'" alt="'+esc(m[0])+'" loading="lazy"></div><span class="tag">Maintenance</span><h3>'+m[0]+'</h3><p>'+m[1]+'</p><div class="foot"><span class="price">'+m[2]+'</span><a class="btn sm" href="#reservation">Réserver</a></div></div>'}).join("");

var team=[
["PDG","Marie Emmanuelle YOUGO","MEY",["Ingénieure génie logiciel","Architecte logiciel"]],
["Chargé de maintenance","À compléter","MT",["Technicien supérieur","Ingénieur réseau"]],
["Chargé de clientèle","À compléter","CC",["Gestionnaire de projet","Community manager"]]];
$("#gTeam").innerHTML=team.map(function(t){return '<div class="card"><div class="av">'+t[2]+'</div><h3>'+t[1]+'</h3><p style="flex:none"><b>'+t[0]+'</b></p><div class="chips">'+t[3].map(function(c){return '<span class="tag">'+c+'</span>'}).join("")+'</div></div>'}).join("");

// Réservation
var d=new Date().toISOString().slice(0,10);document.querySelector('#fBook [name=date]').min=d;
$("#fBook").addEventListener("submit",function(e){e.preventDefault();var f=new FormData(e.target);
 window.open(wa("Bonjour MEYGO Technologies, je souhaite réserver.\nType : "+f.get("type")+"\nDate : "+f.get("date")+" à "+f.get("time")+"\nNom : "+f.get("nom")+"\nTéléphone : "+f.get("tel")),"_blank")});

// Devis sur mesure
var mode="wa";
$("#fDevis").addEventListener("click",function(e){var b=e.target.closest("button[data-m]");if(b)mode=b.dataset.m});
$("#fDevis").addEventListener("submit",function(e){e.preventDefault();var f=new FormData(e.target);
 var t="Demande de devis sur mesure\nNom : "+f.get("nom")+"\nTéléphone : "+f.get("tel")+"\nEmail : "+(f.get("email")||"-")+"\nProjet : "+f.get("projet")+"\nBudget : "+(f.get("budget")||"-")+"\nDélai : "+(f.get("delai")||"-")+"\n\nDescription :\n"+f.get("desc")+"\n\nFonctionnalités :\n"+f.get("fonc");
 if(mode==="mail")location.href="mailto:"+MAIL+"?subject="+encodeURIComponent("Demande de devis — "+f.get("projet"))+"&body="+encodeURIComponent(t);
 else window.open(wa(t),"_blank")});

// Paiement simulé
var op="MTN";
function steps(){var n=PAYNUM[op];$("#ps").innerHTML=op==="MTN"
 ? '<b>Paiement MTN MoMo</b><br>1. Composez <b>*126#</b><br>2. Choisissez « Transfert d’argent »<br>3. Envoyez <b>5 000 FCFA</b> au <b>'+n+'</b><br>4. Gardez le SMS de confirmation'
 : '<b>Paiement Orange Money</b><br>1. Composez <b>#150*1#</b><br>2. Choisissez « Transfert d’argent »<br>3. Envoyez <b>5 000 FCFA</b> au <b>'+n+'</b><br>4. Gardez le SMS de confirmation'}
document.addEventListener("click",function(e){
 if(e.target.closest("[data-pay]")){steps();$("#mod").classList.add("on")}
 var b=e.target.closest("[data-op]");if(b){op=b.dataset.op;document.querySelectorAll("[data-op]").forEach(function(x){x.setAttribute("aria-pressed",x===b)});steps()}
 if(e.target.id==="pcl"||e.target.id==="mod")$("#mod").classList.remove("on")});
$("#pgo").addEventListener("click",function(){var n=$("#pn").value.trim();
 if(!n){$("#pn").focus();return}
 window.open(wa("Bonjour MEYGO Technologies, j’ai effectué le paiement de la consultation (5 000 FCFA) via "+op+" depuis le "+n+". Merci de confirmer et de planifier mon rendez-vous."),"_blank");$("#mod").classList.remove("on")});
document.addEventListener("keydown",function(e){if(e.key==="Escape")$("#mod").classList.remove("on")});

/* ===== TRADUCTION FR → EN : ajoutez ou modifiez les paires ["texte français","English text"] ===== */
var T=[
["Demander un devis","Request a quote"],["Matériel","Hardware"],["Réservation","Booking"],["Équipe","Team"],["Logiciels","Software"],["Sites web","Websites"],
["Le numérique de votre entreprise, conçu et maintenu par une équipe locale.","Your company’s digital tools, built and maintained by a local team."],
["MEYGO Technologies développe vos logiciels et sites web, forme vos équipes, fournit votre matériel informatique et assure la maintenance, depuis Yaoundé.","MEYGO Technologies builds your software and websites, trains your teams, supplies IT hardware and handles maintenance, from Yaoundé."],
["Décrire mon projet","Describe my project"],["Parler à un conseiller","Talk to an advisor"],["Ce que nous faisons","What we do"],
["Logiciels et ERP","Software and ERP"],["Démonstration gratuite sur demande","Free demo on request"],["Formations","Training"],
["Bureautique, gestion de projet, programmation, bases de données","Office software, project management, programming, databases"],
["Maintenance","Maintenance"],["Interventions sur site et contrats annuels","On-site visits and yearly contracts"],
["Nos services","Our services"],["Un seul interlocuteur pour tous vos besoins informatiques.","One point of contact for all your IT needs."],
["Sessions en présentiel à Etoudi, adaptées aux particuliers et aux entreprises. Les tarifs sont indicatifs.","In-person sessions in Etoudi for individuals and companies. Prices are indicative."],
["Logiciels ERP","ERP software"],["Des outils de gestion pensés pour les PME camerounaises. Demandez une démonstration avant de décider.","Management tools designed for Cameroonian SMEs. Ask for a demo before you decide."],
["Sites web réalisés","Websites we built"],["Quelques réalisations en ligne. Ouvrez-les pour juger de la qualité.","A few live projects. Open them and judge the quality yourself."],
["Matériel informatique","IT hardware"],["Équipements testés, garantis, livrés et installés.","Tested, warrantied equipment, delivered and installed."],
["Un parc informatique qui fonctionne, sans interruption pour votre activité.","IT equipment that keeps working, without interrupting your business."],
["Réserver un créneau","Book a slot"],["Formation, démonstration d’un logiciel, intervention de maintenance ou rendez-vous à l’agence : choisissez une date, nous confirmons sur WhatsApp.","Training, software demo, maintenance visit or office appointment: pick a date and we confirm on WhatsApp."],
["Type de réservation","Booking type"],["Démonstration d’un logiciel ERP","ERP software demo"],["Inscription à une formation","Training enrollment"],["Intervention de maintenance","Maintenance visit"],["Rendez-vous à l’agence","Office appointment"],
["Date souhaitée","Preferred date"],["Heure","Time"],["Nom complet","Full name"],["Téléphone","Phone"],["Réserver par WhatsApp","Book via WhatsApp"],
["Un logiciel ou un site sur mesure ?","Need custom software or a website?"],
["Décrivez votre besoin et les fonctionnalités attendues. Nous revenons vers vous avec une proposition et un devis, par WhatsApp ou par email.","Describe your need and the features you expect. We come back with a proposal and a quote, by WhatsApp or email."],
["Plus la description est précise, plus le devis est rapide.","The more precise the description, the faster the quote."],
["Type de projet","Project type"],["Site web vitrine","Showcase website"],["Site e-commerce","E-commerce website"],["Application mobile","Mobile app"],["Application web / logiciel de gestion","Web app / management software"],["Autre","Other"],
["Budget estimé (FCFA)","Estimated budget (FCFA)"],["Description du projet","Project description"],["Fonctionnalités souhaitées","Desired features"],["Délai souhaité","Desired timeline"],
["Envoyer par WhatsApp","Send via WhatsApp"],["Envoyer par email","Send by email"],
["ex. 500 000","e.g. 500 000"],["Activité de l’entreprise, objectif du projet, utilisateurs concernés…","Company activity, project goal, target users…"],
["ex. gestion des stocks, facturation, paiement Mobile Money, espace client…","e.g. stock management, invoicing, Mobile Money payment, customer area…"],["ex. 2 mois","e.g. 2 months"],
["Un échange de 30 minutes avec un conseiller pour cadrer votre projet, choisir un logiciel ou résoudre un problème technique. Consultation facturée 5 000 FCFA.","A 30-minute talk with an advisor to scope your project, choose software or solve a technical issue. Consultation fee: 5 000 FCFA."],
["Payer la consultation","Pay for the consultation"],["L’équipe","Our team"],["Des profils complémentaires, réunis à Yaoundé.","Complementary profiles, together in Yaoundé."],
["Nous trouver","Find us"],["Passez à l’agence ou écrivez-nous.","Visit our office or write to us."],["Adresse","Address"],[", Cameroun",", Cameroon"],
["Ouvrir dans Google Maps","Open in Google Maps"],["La carte ne s’affiche pas ? Utilisez le bouton Google Maps.","Map not showing? Use the Google Maps button."],
["Consultation avec un conseiller","Consultation with an advisor"],["Montant :","Amount:"],
[". Choisissez votre opérateur Mobile Money. Il s’agit d’une simulation : aucun prélèvement n’est effectué ici.",". Choose your Mobile Money operator. This is a simulation: no payment is taken here."],
["Votre numéro","Your number"],["Confirmer mon paiement","Confirm my payment"],["Fermer","Close"],["Écrire sur WhatsApp","Message us on WhatsApp"],["Carte de Yaoundé, Etoudi","Map of Yaoundé, Etoudi"],
["Paiement MTN MoMo","MTN MoMo payment"],["Paiement Orange Money","Orange Money payment"],["1. Composez","1. Dial"],["2. Choisissez « Transfert d’argent »","2. Choose “Money transfer”"],["3. Envoyez","3. Send"],["au","to"],["4. Gardez le SMS de confirmation","4. Keep the confirmation SMS"],
/* contenus dynamiques */
["Développement de logiciels","Software development"],["Applications web et mobiles, ERP et outils de gestion adaptés à votre activité.","Web and mobile apps, ERP and management tools tailored to your business."],
["Création de sites web","Website design"],["Sites vitrines et e-commerce, rapides et bien référencés.","Showcase and e-commerce sites, fast and search-friendly."],
["Formation professionnelle","Professional training"],["Bureautique, gestion de projet, programmation et bases de données.","Office software, project management, programming and databases."],
["Vente de matériel","Hardware sales"],["Ordinateurs, imprimantes, réseau et accessoires avec garantie.","Computers, printers, networking and accessories with warranty."],
["Maintenance informatique","IT maintenance"],["Dépannage, entretien préventif et contrats annuels.","Repairs, preventive care and yearly contracts."],
["Réservation en ligne","Online booking"],["Démonstrations, formations et interventions planifiées à l’avance.","Demos, training and visits scheduled in advance."],
["Tout","All"],["Bureautique","Office software"],["Gestion de projet","Project management"],["Programmation","Programming"],["Bases de données","Databases"],
["Traitement de texte, tableurs, formules et présentations pour le travail quotidien.","Word processing, spreadsheets, formulas and presentations for daily work."],
["Excel avancé","Advanced Excel"],["Tableaux croisés, macros et tableaux de bord pour gérer vos données.","Pivot tables, macros and dashboards to manage your data."],
["Planification, suivi des délais et des coûts, outils de pilotage.","Planning, schedule and cost tracking, steering tools."],
["HTML, CSS et JavaScript","HTML, CSS and JavaScript"],["Construire un site web complet, du design à la mise en ligne.","Build a complete website, from design to launch."],
["Python et analyse de données","Python and data analysis"],["Les bases du langage et ses usages en data et automatisation.","Language basics and its uses in data and automation."],
["Développement mobile","Mobile development"],["Concevoir et publier une application Android et iOS.","Design and publish an Android and iOS app."],
["SQL et modélisation","SQL and modeling"],["Concevoir, interroger et sécuriser une base de données.","Design, query and secure a database."],
["MySQL et PostgreSQL en pratique","MySQL and PostgreSQL in practice"],["Administration, sauvegardes et optimisation des requêtes.","Administration, backups and query optimization."],
["S’inscrire","Enroll"],
["MEYGO ERP — Gestion commerciale","MEYGO ERP — Sales management"],["Ventes, achats, facturation et suivi de trésorerie.","Sales, purchases, invoicing and cash tracking."],
["Gestion de stock","Stock management"],["Entrées, sorties, inventaires et alertes de rupture.","Stock in and out, inventories and low-stock alerts."],
["Gestion scolaire et des notes","School and grade management"],["Relevés de notes, procès-verbaux et bulletins automatisés.","Automated transcripts, minutes and report cards."],
["Gestion RH et paie","HR and payroll"],["Dossiers du personnel, congés et bulletins de paie.","Staff files, leave and payslips."],
["Démo disponible","Demo available"],["Demander la démo","Request the demo"],
["Site multilingue de services financiers.","Multilingual financial services website."],["Boutique en ligne avec commande par WhatsApp.","Online store with WhatsApp ordering."],
["Portfolio professionnel","Professional portfolio"],["Site personnel bilingue français et anglais.","Personal bilingual French and English website."],["Site web","Website"],["Visiter le site","Visit the site"],
["Ordinateurs portables","Laptops"],["Neufs et reconditionnés, pour le bureau ou la maison.","New and refurbished, for office or home."],
["Ordinateurs de bureau","Desktop computers"],["Unités centrales, écrans et claviers.","Towers, screens and keyboards."],
["Imprimantes et scanners","Printers and scanners"],["Laser et jet d’encre, avec consommables.","Laser and inkjet, with consumables."],
["Réseau et Wi-Fi","Network and Wi-Fi"],["Routeurs, switchs, câblage et points d’accès.","Routers, switches, cabling and access points."],
["Onduleurs et stabilisateurs","UPS and voltage stabilizers"],["Protégez vos équipements des coupures de courant.","Protect your equipment from power cuts."],
["Accessoires","Accessories"],["Souris, claviers, casques, disques durs et hubs USB-C.","Mice, keyboards, headsets, hard drives and USB-C hubs."],
["Dépannage sur site","On-site repairs"],["Diagnostic et réparation à votre bureau ou à votre domicile.","Diagnosis and repair at your office or home."],
["Maintenance préventive","Preventive maintenance"],["Nettoyage, mises à jour et sauvegardes régulières.","Cleaning, updates and regular backups."],
["Contrat annuel entreprise","Yearly business contract"],["Visites planifiées et intervention prioritaire.","Scheduled visits and priority response."],
["Sécurité et antivirus","Security and antivirus"],["Protection du parc, pare-feu et sensibilisation du personnel.","Fleet protection, firewall and staff awareness."],
["sur devis","on quote"],["Réserver","Book"],
["PDG","CEO"],["Chargé de maintenance","Maintenance officer"],["Chargé de clientèle","Customer relations officer"],["À compléter","To be completed"],
["Ingénieure génie logiciel","Software engineer"],["Architecte logiciel","Software architect"],["Technicien supérieur","Senior technician"],["Ingénieur réseau","Network engineer"],["Gestionnaire de projet","Project manager"]
];
var M={};T.forEach(function(p){M[p[0]]=p[1]});
var L="fr",saved=new Map(),TITLE0=document.title,TITLE_EN="MEYGO Technologies — Digital solutions in Yaoundé";
function trText(n){var k=n.nodeValue.trim();if(!k)return;var e=M[k];
 if(!e&&k.indexOf("dès ")===0)e="from "+k.slice(4);
 if(e){if(!saved.has(n))saved.set(n,n.nodeValue);n.nodeValue=n.nodeValue.replace(k,e)}}
function trAll(root){var w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:function(n){var t=n.parentNode.nodeName;return t==="SCRIPT"||t==="STYLE"?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),n;
 while(n=w.nextNode())trText(n);
 if(root.querySelectorAll)root.querySelectorAll("[placeholder],[aria-label],[title]").forEach(function(el){["placeholder","aria-label","title"].forEach(function(a){var v=el.getAttribute(a);if(v&&M[v]){if(!el.hasAttribute("data-fr-"+a))el.setAttribute("data-fr-"+a,v);el.setAttribute(a,M[v])}})})}
function setLang(l){L=l;document.documentElement.lang=l;
 if(l==="en"){trAll(document.body);document.title=TITLE_EN;$("#lang").textContent="FR"}
 else{saved.forEach(function(v,n){n.nodeValue=v});saved.clear();
  document.querySelectorAll("[data-fr-placeholder],[data-fr-aria-label],[data-fr-title]").forEach(function(el){["placeholder","aria-label","title"].forEach(function(a){if(el.hasAttribute("data-fr-"+a))el.setAttribute(a,el.getAttribute("data-fr-"+a))})});
  document.title=TITLE0;$("#lang").textContent="EN"}}
new MutationObserver(function(ms){if(L!=="en")return;ms.forEach(function(m){m.addedNodes.forEach(function(n){if(n.nodeType===1)trAll(n);else if(n.nodeType===3)trText(n)})})}).observe(document.body,{childList:true,subtree:true});
$("#lang").addEventListener("click",function(){setLang(L==="fr"?"en":"fr")});

/* ===== ANIMATIONS ET INTERACTIONS ===== */
[["Apprenants formés","Trained learners"],["Projets livrés","Projects delivered"],["Délai de réponse moyen","Average response time"],["Support local à Yaoundé","Local support in Yaoundé"],["⚡ Réponse sous 24 h","⚡ Reply within 24 h"],["🎓 Formations pratiques","🎓 Hands-on training"],["Thème clair / sombre","Light / dark theme"]].forEach(function(p){M[p[0]]=p[1]});
var rvIO=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var el=e.target;el.classList.add("in");rvIO.unobserve(el);setTimeout(function(){el.style.transitionDelay=""},1000)}})},{threshold:.12});
function rvScan(){document.querySelectorAll(".sec-h,.card,.panel:not(.tilt),form.box,.stat,.mapbox").forEach(function(el,i){if(el.classList.contains("rv"))return;el.classList.add("rv");el.style.transitionDelay=(i%4)*80+"ms";rvIO.observe(el)})}
rvScan();new MutationObserver(rvScan).observe(document.body,{childList:true,subtree:true});
var cIO=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var b=e.target,n=+b.dataset.count,t0=null;cIO.unobserve(b);
 (function f(t){t0=t0||t;var k=Math.min((t-t0)/1400,1);b.textContent=Math.round(n*(1-Math.pow(1-k,3)))+(b.dataset.suf||"");if(k<1)requestAnimationFrame(f)})(performance.now())})},{threshold:.6});
document.querySelectorAll("[data-count]").forEach(function(b){cIO.observe(b)});
var hd=document.querySelector("header"),bar=$("#bar");
addEventListener("scroll",function(){var h=document.documentElement;hd.classList.toggle("sc",scrollY>20);bar.style.transform="scaleX("+(scrollY/Math.max(1,h.scrollHeight-innerHeight))+")"},{passive:true});
var links=document.querySelectorAll(".links a"),spy=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)links.forEach(function(a){a.classList.toggle("on",a.getAttribute("href")==="#"+e.target.id)})})},{rootMargin:"-45% 0px -50% 0px"});
document.querySelectorAll("main section[id]").forEach(function(x){spy.observe(x)});
$("#burger").addEventListener("click",function(){var o=document.querySelector(".links").classList.toggle("open");this.setAttribute("aria-expanded",o)});
document.querySelector(".links").addEventListener("click",function(e){if(e.target.tagName==="A")this.classList.remove("open")});
$("#theme").addEventListener("click",function(){var r=document.documentElement,dk=r.dataset.theme?r.dataset.theme==="dark":matchMedia("(prefers-color-scheme:dark)").matches;r.dataset.theme=dk?"light":"dark";this.textContent=dk?"🌙":"☀️"});
var tl=null;
if(matchMedia("(hover:hover)").matches)document.addEventListener("pointermove",function(e){var t=e.target.closest&&e.target.closest(".card,.tilt");
 if(tl&&tl!==t){tl.style.setProperty("--rx","0deg");tl.style.setProperty("--ry","0deg")}
 tl=t;if(!t)return;var r=t.getBoundingClientRect();
 t.style.setProperty("--ry",((e.clientX-r.left)/r.width-.5)*7+"deg");t.style.setProperty("--rx",-((e.clientY-r.top)/r.height-.5)*7+"deg")});
document.addEventListener("click",function(e){var b=e.target.closest(".btn");if(!b)return;var r=b.getBoundingClientRect(),d=Math.max(r.width,r.height),s=document.createElement("span");
 s.className="rp";s.style.cssText="width:"+d+"px;height:"+d+"px;left:"+(e.clientX-r.left-d/2)+"px;top:"+(e.clientY-r.top-d/2)+"px";b.appendChild(s);setTimeout(function(){s.remove()},650)});

/* ===== V3 : icônes, carrousels, démos 15 s, équipe ===== */
var IC={mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',pin:'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',chk:'<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>',play:'<polygon points="6 3 20 12 6 21 6 3" fill="currentColor"/>',code:'<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>',globe:'<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',cap:'<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',box:'<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',award:'<circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',l:'<path d="m15 18-6-6 6-6"/>',r:'<path d="m9 18 6-6-6-6"/>'};
function ico(n){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+IC[n]+'</svg>'}
document.querySelectorAll("[data-i]").forEach(function(e){e.innerHTML=ico(e.dataset.i)});
document.querySelectorAll(".ct .ic").forEach(function(e,k){e.innerHTML=ico(["phone","mail","pin"][k])});
document.querySelectorAll(".panel.tilt .ic").forEach(function(e,k){e.innerHTML=ico(["code","cap","wrench"][k])});
document.querySelectorAll(".fb .ic").forEach(function(e){e.innerHTML=ico("pin")});
[["Logiciels, sites web, formations, matériel et maintenance informatique, depuis Yaoundé.","Software, websites, training, hardware and IT maintenance, from Yaoundé."],["Navigation","Navigation"],["Nos services","Our services"],["Développement sur mesure","Custom development"],["Consultation conseiller","Advisor consultation"],["© 2026 MEYGO Technologies. Tous droits réservés.","© 2026 MEYGO Technologies. All rights reserved."],["Retour en haut ↑","Back to top ↑"],["Solutions numériques · Yaoundé","Digital solutions · Yaoundé"],
["Confirmation rapide sur WhatsApp","Quick confirmation on WhatsApp"],["Démonstration gratuite des logiciels","Free software demos"],["Réservation sans engagement","No-commitment booking"],["Proposition et devis détaillés","Detailed proposal and quote"],["Réponse rapide à votre demande","Fast reply to your request"],["Accompagnement après la livraison","Support after delivery"],
["Précédent","Previous"],["Suivant","Next"],["Démo 15 s","15 s demo"],["Revoir la démo","Replay demo"],["Fin de la démo : demandez-la en direct.","End of the demo: ask for a live one."],["Conseiller certifié","Certified advisor"],["Consulter","Consult"],["Photo","Photo"],["Réseaux et sécurité","Networks and security"],["Communication digitale","Digital communication"],["Community manager","Community manager"],
["Connexion","Login"],["Accès sécurisé avec les droits de chaque utilisateur.","Secure access with rights for each user."],["Tableau de bord","Dashboard"],["Ventes, stock et trésorerie visibles en un coup d’œil.","Sales, stock and cash at a glance."],["Nouvelle opération","New transaction"],["Saisie rapide d’une vente ou d’un achat en quelques clics.","Record a sale or purchase in a few clicks."],["Facture générée","Invoice generated"],["La facture est créée, numérotée et prête à envoyer.","The invoice is created, numbered and ready to send."],["Rapports","Reports"],["Export Excel et PDF des résultats du mois.","Excel and PDF export of monthly results."],
["Page d’accueil","Home page"],["Un design clair et adapté au téléphone.","A clean design that fits phones."],["Présentation","Presentation"],["Services et réalisations mises en avant.","Services and projects showcased."],["Navigation fluide","Smooth navigation"],["Menu simple, sections fluides, rendu rapide.","Simple menu, smooth sections, fast loading."],["Contact","Contact"],["Message ou commande directe via WhatsApp.","Message or order directly via WhatsApp."],["Mise en ligne","Go live"],["Site publié, sécurisé et référencé.","Site published, secure and indexed."]].forEach(function(p){M[p[0]]=p[1]});

function car(sel,html,auto){var g=$(sel);g.className="car";g.innerHTML='<button class="cb p" type="button" aria-label="Précédent">'+ico("l")+'</button><div class="track">'+html+'</div><button class="cb n" type="button" aria-label="Suivant">'+ico("r")+'</button>';
 var t=g.querySelector(".track"),hold=false;
 function go(d){var w=t.firstElementChild.offsetWidth+20;if(d>0&&t.scrollLeft+t.clientWidth>=t.scrollWidth-6)t.scrollTo({left:0,behavior:"smooth"});else if(d<0&&t.scrollLeft<4)t.scrollTo({left:t.scrollWidth,behavior:"smooth"});else t.scrollBy({left:d*w,behavior:"smooth"})}
 g.querySelector(".p").onclick=function(){go(-1)};g.querySelector(".n").onclick=function(){go(1)};
 if(auto&&!matchMedia("(prefers-reduced-motion:reduce)").matches){g.addEventListener("mouseenter",function(){hold=true});g.addEventListener("mouseleave",function(){hold=false});g.addEventListener("focusin",function(){hold=true});setInterval(function(){if(!hold&&!document.hidden)go(1)},3500)}}

var SVC_IMG=['https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=280&fit=crop', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=280&fit=crop', 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&h=280&fit=crop', 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=280&fit=crop', 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=280&fit=crop', 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=500&h=280&fit=crop'];
$("#gServices").innerHTML=services.map(function(x,k){return '<div class="card"><div class="card-img"><img src="'+SVC_IMG[k]+'" alt="'+esc(x[1])+'" loading="lazy"></div><span class="ic">'+ico(["code","globe","cap","box","wrench","cal"][k])+'</span><h3>'+x[1]+'</h3><p>'+x[2]+'</p></div>'}).join("");
var SC={erp:[["chk","Connexion","Accès sécurisé avec les droits de chaque utilisateur."],["box","Tableau de bord","Ventes, stock et trésorerie visibles en un coup d’œil."],["code","Nouvelle opération","Saisie rapide d’une vente ou d’un achat en quelques clics."],["mail","Facture générée","La facture est créée, numérotée et prête à envoyer."],["award","Rapports","Export Excel et PDF des résultats du mois."]],
 site:[["globe","Page d’accueil","Un design clair et adapté au téléphone."],["cap","Présentation","Services et réalisations mises en avant."],["cal","Navigation fluide","Menu simple, sections fluides, rendu rapide."],["phone","Contact","Message ou commande directe via WhatsApp."],["award","Mise en ligne","Site publié, sécurisé et référencé."]]};
/* Pour une vraie vidéo, ajoutez video:"lien.mp4" dans l’objet du projet */
var DEMOS=[];
function pcard(tag,t,d,sc,url,video){DEMOS.push({t:t,sc:sc,url:url,video:video});var i=DEMOS.length-1;
 return '<div class="card"><div class="thumb" data-demo="'+i+'" role="button" tabindex="0" aria-label="'+t+'"><b>'+ico("play")+'</b><em>Démo 15 s</em></div><span class="tag">'+tag+'</span><h3>'+t+'</h3><p>'+d+'</p><div class="foot"><button class="btn sm" data-demo="'+i+'" type="button">Voir la démo</button>'+(url&&url!=="#"?'<a class="btn out sm" target="_blank" rel="noopener" href="'+url+'">Visiter le site</a>':'<a class="btn out sm" target="_blank" rel="noopener" href="'+wa("Bonjour MEYGO Technologies, je souhaite une démonstration en direct : "+t)+'">Démo en direct</a>')+'</div></div>'}
car("#gErp",erp.map(function(e){return pcard("ERP",e[0],e[1],SC.erp)}).join(""),true);
M["Lien à ajouter"]="Link to be added";
var SITE_IMG=['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=280&fit=crop', 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=280&fit=crop', 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=280&fit=crop'];
function scard(e,idx){var u=e[2],ok=u&&u!=="#",host=ok?u.replace(/^https?:\/\//,"").replace(/\/.*$/,""):"Lien à ajouter";
 return '<div class="card"><a class="card-img" style="display:block" '+(ok?'href="'+u+'" target="_blank" rel="noopener"':'')+' aria-label="'+e[0]+'"><img src="'+SITE_IMG[idx%SITE_IMG.length]+'" alt="'+esc(e[0])+'" loading="lazy"></a><span class="tag">Site web</span><h3>'+e[0]+'</h3><p>'+e[1]+'</p><div class="foot">'+(ok?'<a class="btn sm" target="_blank" rel="noopener" href="'+u+'">Visiter le site</a>':'<span class="note">Lien à ajouter</span>')+'</div></div>'}
car("#gSites",sites.map(scard).join(""),true);
car("#gMat",mat.map(function(m){return '<div class="card"><span class="tag">Matériel</span><h3>'+m[0]+'</h3><p>'+m[1]+'</p><div class="foot"><span class="price">dès '+fmt(m[2])+'</span><a class="btn sm" target="_blank" rel="noopener" href="'+wa("Bonjour MEYGO Technologies, je souhaite un devis pour : "+m[0])+'">Demander un devis</a></div></div>'}).join(""),false);
/* Équipe : renseignez name, photo ("photos/emma.jpg" ou lien) et advisor */
var TEAM=[{role:"PDG",name:"Marie Emmanuelle YOUGO",prof:"Ingénieure génie logiciel",photo:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=faces",advisor:true},{role:"Chargé de maintenance",name:"À compléter",prof:"Technicien supérieur",photo:"https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=faces",advisor:true},{role:"Chargé de clientèle",name:"À compléter",prof:"Gestionnaire de projet",photo:"https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=faces",advisor:true},{role:"Ingénieur réseau",name:"À compléter",prof:"Réseaux et sécurité",photo:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=faces",advisor:true},{role:"Community manager",name:"À compléter",prof:"Communication digitale",photo:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=faces",advisor:true}];
car("#gTeam",TEAM.map(function(m){return '<div class="card tm"><div class="ph">'+(m.photo?'<img src="'+m.photo+'" alt="'+esc(m.name)+'">':'<div>'+ico("user")+'Photo</div>')+'</div>'+(m.advisor?'<span class="bdg">'+ico("award")+'Conseiller certifié</span>':'')+'<h3>'+m.name+'</h3><p style="flex:none"><b>'+m.role+'</b></p><div class="chips"><span class="tag">'+m.prof+'</span></div><button class="btn sm" data-pay type="button">Consulter</button></div>'}).join(""),true);
var SIDE={book:["Confirmation rapide sur WhatsApp","Démonstration gratuite des logiciels","Réservation sans engagement"],dev:["Proposition et devis détaillés","Réponse rapide à votre demande","Accompagnement après la livraison"]};
document.querySelectorAll(".side").forEach(function(e){var u=document.createElement("ul");u.className="chk";u.innerHTML=SIDE[e.dataset.k].map(function(x){return "<li>"+ico("chk")+"<span>"+x+"</span></li>"}).join("");e.appendChild(u)});

var dIv,dI=0,dD=null;
function dShow(k){var sc=dD.sc[k];$("#dside").innerHTML=dD.sc.map(function(x,j){return '<div class="'+(j===k?"on":"")+'">'+(j+1)+". "+x[1]+"</div>"}).join("");
 $("#dscene").innerHTML='<div class="sci">'+ico(sc[0])+'</div><h4>'+sc[1]+'</h4><p style="color:var(--dim);max-width:360px">'+sc[2]+'</p><div class="bars">'+[1,2,3,4,5].map(function(j){return '<i style="--h:'+(20+((j*37+k*23)%60))+'px;animation-delay:'+j*90+'ms"></i>'}).join("")+'</div><span class="cur"></span>';
 if(L==="en")trAll($("#dm"))}
function dPlay(){clearInterval(dIv);var f=$("#dfill");f.style.transition="none";f.style.width="0";void f.offsetWidth;f.style.transition="";f.style.width="100%";dI=0;dShow(0);
 dIv=setInterval(function(){dI++;if(dI>4){clearInterval(dIv);$("#dscene").innerHTML='<div class="sci">'+ico("chk")+'</div><h4>Fin de la démo : demandez-la en direct.</h4>';if(L==="en")trAll($("#dscene"));return}dShow(dI)},3000)}
function dOpen(i){dD=DEMOS[i];$("#dt").textContent=dD.t;$("#dtitle").textContent=dD.t;var lk=$("#dlink");lk.style.display=dD.url&&dD.url!=="#"?"":"none";if(dD.url)lk.href=dD.url;
 $("#dm").classList.add("on");
 if(dD.video){$("#dv").innerHTML='<video src="'+dD.video+'" controls autoplay muted playsinline style="width:100%;border-radius:12px"></video>';$("#dfill").style.width="0"}
 else{if(!$("#dscene")){location.reload();return}dPlay()}
 if(L==="en")trAll($("#dm"))}
document.addEventListener("click",function(e){var d=e.target.closest("[data-demo]");if(d)dOpen(+d.dataset.demo);
 if(e.target.id==="dcl"||e.target.id==="dm"){clearInterval(dIv);$("#dm").classList.remove("on")}
 if(e.target.id==="drep")dPlay()});
document.addEventListener("keydown",function(e){if(e.key==="Escape"){clearInterval(dIv);$("#dm").classList.remove("on")}if(e.key==="Enter"&&e.target.dataset&&e.target.dataset.demo)dOpen(+e.target.dataset.demo)});
/* IMAGES : collez ici le chemin de votre image (ex. "logo.png") ou envoyez-la moi pour que je l'intègre */
var LOGO_IMG="",HERO_IMG="";
function mkImg(c){var im=document.createElement("img");im.src=LOGO_IMG;im.alt="MEYGO Technologies";im.className=c||"lg";im.style.objectFit="contain";return im}
if(LOGO_IMG){var sv=document.querySelector("#splash svg");if(sv){var si=mkImg();si.style.cssText="width:140px;height:140px;object-fit:contain;animation:pop .8s both";sv.replaceWith(si)}
 document.querySelectorAll(".lg").forEach(function(x){x.replaceWith(mkImg())})}
if(HERO_IMG){document.querySelector(".hero").style.background="linear-gradient(color-mix(in srgb,var(--bg) 82%,transparent),color-mix(in srgb,var(--bg) 70%,transparent)),url("+HERO_IMG+") center/cover"}
/* ===== V5 : démos contextuelles, matériel illustré, formulaire déroulant ===== */
var S5=function(i,a,b,c,d,r){return[i,a,b,c,d,r]};
var SCP=[
[S5("chk","Connexion","Login","Chaque vendeur accède avec ses droits.","Each seller logs in with their own rights.",[["Utilisateur","caissier1"],["Rôle","Vendeur"],["Agence","Yaoundé"]]),S5("box","Tableau de bord","Dashboard","Ventes et trésorerie en direct.","Live sales and cash.",[["Ventes du jour","485 000 FCFA"],["Factures impayées","6"],["Trésorerie","2 340 000 FCFA"]]),S5("code","Nouvelle vente","New sale","Le panier se remplit en quelques clics.","The basket fills in a few clicks.",[["Clavier mécanique ×2","76 000"],["Souris sans fil ×1","22 000"],["Total","98 000 FCFA"]]),S5("mail","Facture","Invoice","Numérotée et prête à envoyer.","Numbered and ready to send.",[["Facture n°","FAC-2026-0142"],["Client","Ets Mballa"],["Statut","Envoyée ✓"]]),S5("award","Rapports","Reports","Résultats du mois en un clic.","Monthly results in one click.",[["Chiffre d’affaires","12,8 M FCFA"],["Marge","+18 %"],["Export","Excel · PDF"]])],
[S5("box","Fiche produit","Product sheet","Chaque article a son code et son seuil.","Each item has its code and threshold.",[["Article","Ramette papier A4"],["Code","PAP-A4-01"],["Seuil d’alerte","20"]]),S5("r","Entrée en stock","Stock in","La réception met le stock à jour.","Receiving updates the stock.",[["Réception","+150"],["Fournisseur","Papeterie Centrale"],["Stock","170"]]),S5("l","Sortie de stock","Stock out","Chaque sortie est liée à un service.","Each exit is tied to a department.",[["Bon de sortie","−40"],["Service","Comptabilité"],["Stock","130"]]),S5("wrench","Alerte de rupture","Low-stock alert","Le logiciel prévient avant la rupture.","The software warns before you run out.",[["Cartouche HP 305","3 restants"],["Seuil","10"],["Action","Commande suggérée"]]),S5("chk","Inventaire","Inventory","Les écarts sont calculés seuls.","Gaps are calculated automatically.",[["Articles comptés","248"],["Écarts","2"],["Valeur du stock","4,2 M FCFA"]])],
[S5("user","Fiche étudiant","Student record","Identité, filière et promotion.","Identity, program and class.",[["Nom","Nkoulou A."],["Filière","Génie logiciel"],["Promotion","Promo 12"]]),S5("code","Saisie des notes","Grade entry","Une seule saisie par matière.","One entry per subject.",[["Mathématiques","14,5 / 20"],["Informatique","16 / 20"],["Anglais","13 / 20"]]),S5("cal","Calcul automatique","Automatic calculation","Moyennes et crédits calculés seuls.","Averages and credits computed for you.",[["Moyenne du semestre","15,2"],["Crédits validés","30 / 30"],["Mention","Bien"]]),S5("mail","Relevé de notes","Transcript","Prêt à imprimer en PDF.","Ready to print as PDF.",[["Relevé","S1 2025-2026"],["Rang","3e / 42"],["Statut","Prêt ✓"]]),S5("award","Procès-verbal","Minutes","Résultats de la promotion générés.","Class results generated.",[["Admis","38"],["Ajournés","4"],["Taux de réussite","90 %"]])],
[S5("user","Dossier employé","Employee file","Toutes les informations au même endroit.","All the information in one place.",[["Employé","Mbarga P."],["Poste","Comptable"],["Embauche","03/2024"]]),S5("cal","Congés","Leave","Demande et validation en ligne.","Request and approval online.",[["Demande","5 jours"],["Période","12 – 16 mai"],["Statut","Validée ✓"]]),S5("chk","Présences","Attendance","Pointage du jour en direct.","Today’s attendance, live.",[["Présents","23 / 25"],["Retards","2"],["Absents","0"]]),S5("mail","Bulletin de paie","Payslip","Le net est calculé automatiquement.","Net pay is computed automatically.",[["Salaire brut","250 000 FCFA"],["Retenues","−38 000"],["Net à payer","212 000 FCFA"]]),S5("award","Rapports RH","HR reports","Effectifs et masse salariale.","Headcount and payroll.",[["Effectif","25"],["Masse salariale","5,1 M FCFA"],["Export","Excel · PDF"]])]];
function dShow(k){var sc=dD.sc[k],en=L==="en";$("#dside").innerHTML=dD.sc.map(function(x,j){return '<div class="'+(j===k?"on":"")+'">'+(j+1)+". "+(en?x[2]:x[1])+"</div>"}).join("");
 $("#dscene").innerHTML='<div class="sci">'+ico(sc[0])+'</div><h4>'+(en?sc[2]:sc[1])+'</h4><p style="color:var(--dim);max-width:360px">'+(en?sc[4]:sc[3])+'</p><div class="mt">'+sc[5].map(function(r,j){return '<div class="rw" style="animation-delay:'+(250+j*350)+'ms"><span>'+r[0]+'</span><b>'+r[1]+'</b></div>'}).join("")+'</div><span class="cur"></span>'}
car("#gErp",erp.map(function(e,i){return pcard("ERP",e[0],e[1],SCP[i])}).join(""),true);

var SV=function(b){return '<div class="mimg"><svg viewBox="0 0 120 80">'+b+'</svg></div>'};
var IMG={lap:'<rect x="30" y="14" width="60" height="38" rx="3" fill="#fff"/><rect x="35" y="19" width="50" height="28" rx="1.5" fill="#0f7a4a"/><path d="M18 56h84l-6 8H24z" fill="#fff"/><path d="M42 30h20M42 37h32" stroke="#7be0a6" stroke-width="2"/>',
 desk:'<rect x="14" y="12" width="64" height="42" rx="3" fill="#fff"/><rect x="19" y="17" width="54" height="30" fill="#0f7a4a"/><path d="M40 54h12l3 10H37z" fill="#fff"/><rect x="30" y="64" width="32" height="4" rx="2" fill="#fff"/><rect x="86" y="18" width="22" height="50" rx="3" fill="#fff"/><circle cx="97" cy="28" r="3" fill="#0f7a4a"/><rect x="91" y="40" width="12" height="3" fill="#7be0a6"/>',
 prn:'<rect x="36" y="10" width="48" height="18" rx="2" fill="#fff" fill-opacity=".85"/><rect x="20" y="28" width="80" height="30" rx="5" fill="#fff"/><rect x="34" y="46" width="52" height="24" rx="2" fill="#e3f5ea" stroke="#0f7a4a" stroke-width="2"/><path d="M42 54h36M42 61h26" stroke="#0f7a4a" stroke-width="2"/><circle cx="88" cy="36" r="3" fill="#17a362"/>',
 net:'<rect x="22" y="48" width="76" height="18" rx="4" fill="#fff"/><circle cx="34" cy="57" r="2.5" fill="#17a362"/><circle cx="44" cy="57" r="2.5" fill="#17a362"/><circle cx="54" cy="57" r="2.5" fill="#0f7a4a"/><path d="M36 48 30 24M84 48l6-24" stroke="#fff" stroke-width="4" stroke-linecap="round"/><path d="M48 34a16 16 0 0 1 24 0M42 27a26 26 0 0 1 36 0M54 40a8 8 0 0 1 12 0" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>',
 ups:'<rect x="30" y="10" width="60" height="58" rx="6" fill="#fff"/><rect x="38" y="18" width="44" height="14" rx="2" fill="#0f7a4a"/><path d="M62 20l-6 7h6l-4 7 9-8h-6z" fill="#7be0a6"/><circle cx="44" cy="46" r="3" fill="#17a362"/><circle cx="60" cy="46" r="3" fill="#17a362"/><circle cx="76" cy="46" r="3" fill="#17a362"/><rect x="40" y="56" width="40" height="5" rx="2" fill="#e3f5ea"/>',
 acc:'<path d="M30 34a18 18 0 0 1 36 0" fill="none" stroke="#fff" stroke-width="4"/><rect x="26" y="32" width="8" height="12" rx="3" fill="#fff"/><rect x="62" y="32" width="8" height="12" rx="3" fill="#fff"/><rect x="12" y="50" width="64" height="22" rx="4" fill="#fff"/><path d="M18 57h6M28 57h6M38 57h6M48 57h6M58 57h12M18 65h52" stroke="#0f7a4a" stroke-width="3" stroke-linecap="round"/><rect x="86" y="38" width="20" height="32" rx="10" fill="#fff"/><path d="M96 38v12" stroke="#0f7a4a" stroke-width="2"/>'};
var MK=["lap","desk","prn","net","ups","acc"];
car("#gMat",mat.map(function(m,i){return '<div class="card">'+SV(IMG[MK[i]])+'<span class="tag">Matériel</span><h3>'+m[0]+'</h3><p>'+m[1]+'</p><div class="foot"><span class="price">dès '+fmt(m[2])+'</span><a class="btn sm" target="_blank" rel="noopener" href="'+wa("Bonjour MEYGO Technologies, je souhaite un devis pour : "+m[0])+'">Demander un devis</a></div></div>'}).join(""),true);

var FD=[["Type de projet","Project type","projet",[["Site vitrine","Showcase website"],["Site e-commerce","E-commerce website"],["Application mobile","Mobile app"],["Application web","Web app"],["Logiciel de gestion (ERP)","Management software (ERP)"],["Autre","Other"]]],
["Secteur d’activité","Business sector","secteur",[["Commerce","Retail"],["Éducation et formation","Education and training"],["Santé","Health"],["Finance et assurance","Finance and insurance"],["Restauration et hôtellerie","Food and hospitality"],["Transport et logistique","Transport and logistics"],["ONG et association","NGO and association"],["Autre","Other"]]],
["Plateforme","Platform","plateforme",[["Web","Web"],["Android","Android"],["iOS","iOS"],["Web et mobile","Web and mobile"]]],
["Nombre d’utilisateurs","Number of users","users",[["1 à 5","1 to 5"],["6 à 20","6 to 20"],["21 à 100","21 to 100"],["Plus de 100","Over 100"]]],
["Budget estimé","Estimated budget","budget",[["Moins de 300 000 FCFA","Under 300 000 FCFA"],["300 000 à 800 000 FCFA","300 000 to 800 000 FCFA"],["800 000 à 2 000 000 FCFA","800 000 to 2 000 000 FCFA"],["Plus de 2 000 000 FCFA","Over 2 000 000 FCFA"],["À définir ensemble","To be defined together"]]],
["Délai souhaité","Desired timeline","delai",[["Moins d’un mois","Under 1 month"],["1 à 3 mois","1 to 3 months"],["3 à 6 mois","3 to 6 months"],["Flexible","Flexible"]]],
["Style du design","Design style","style",[["Moderne et sobre","Modern and minimal"],["Coloré et dynamique","Colorful and dynamic"],["Professionnel et classique","Professional and classic"]]],
["Langues","Languages","langues",[["Français","French"],["Anglais","English"],["Français et anglais","French and English"]]]];
var FC=[["Gestion des utilisateurs","User management"],["Facturation","Invoicing"],["Gestion de stock","Stock management"],["Paiement Mobile Money","Mobile Money payment"],["Espace client","Customer area"],["Tableau de bord et rapports","Dashboard and reports"],["Notifications SMS ou email","SMS or email notifications"],["Version français / anglais","French / English version"]];
M["Choisir…"]="Choose…";M["Fonctionnalités souhaitées"]="Desired features";M["Précisions (facultatif)"]="Additional details (optional)";
FD.forEach(function(f){M[f[0]]=f[1];f[3].forEach(function(o){M[o[0]]=o[1]})});FC.forEach(function(o){M[o[0]]=o[1]});
function selH(n){var f=FD.filter(function(x){return x[2]===n})[0];return '<label>'+f[0]+'<select name="'+n+'"'+(n==="projet"?" required":"")+'><option value="">Choisir…</option>'+f[3].map(function(o){return '<option value="'+o[0]+'">'+o[0]+'</option>'}).join("")+'</select></label>'}
var of=$("#fDevis"),nf=of.cloneNode(false);nf.classList.add("rv","in");nf.style.opacity=1;of.replaceWith(nf);
nf.innerHTML='<div class="f2"><label>Nom complet<input name="nom" required autocomplete="name"></label><label>Téléphone<input name="tel" type="tel" required autocomplete="tel"></label></div><label>Email<input name="email" type="email" autocomplete="email"></label>'
 +'<div class="f2">'+selH("projet")+selH("secteur")+'</div><div class="f2">'+selH("plateforme")+selH("users")+'</div>'
 +'<details class="dd"><summary id="ddS">Fonctionnalités souhaitées</summary><div class="ddl">'+FC.map(function(o){return '<label class="ck"><input type="checkbox" name="fonc" value="'+o[0]+'"> '+o[0]+'</label>'}).join("")+'</div></details>'
 +'<div class="f2">'+selH("budget")+selH("delai")+'</div><div class="f2">'+selH("style")+selH("langues")+'</div>'
 +'<label>Précisions (facultatif)<textarea name="desc" style="min-height:70px"></textarea></label>'
 +'<div class="row"><button class="btn" type="submit" data-m="wa">Envoyer par WhatsApp</button><button class="btn out" type="submit" data-m="mail">Envoyer par email</button></div>';
var md="wa";
nf.addEventListener("change",function(e){if(e.target.name==="fonc"){var n=nf.querySelectorAll('[name=fonc]:checked').length;$("#ddS").textContent=(L==="en"?"Desired features":"Fonctionnalités souhaitées")+(n?" ("+n+")":"")}});
nf.addEventListener("click",function(e){var b=e.target.closest("button[data-m]");if(b)md=b.dataset.m});
nf.addEventListener("submit",function(e){e.preventDefault();var f=new FormData(nf),g=function(k){return f.get(k)||"-"};
 var t="Demande de devis sur mesure\nNom : "+g("nom")+"\nTéléphone : "+g("tel")+"\nEmail : "+g("email")+"\nProjet : "+g("projet")+"\nSecteur : "+g("secteur")+"\nPlateforme : "+g("plateforme")+"\nUtilisateurs : "+g("users")+"\nFonctionnalités : "+(f.getAll("fonc").join(", ")||"-")+"\nBudget : "+g("budget")+"\nDélai : "+g("delai")+"\nStyle : "+g("style")+"\nLangues : "+g("langues")+"\nPrécisions : "+g("desc");
 if(md==="mail")location.href="mailto:"+MAIL+"?subject="+encodeURIComponent("Demande de devis — "+g("projet"))+"&body="+encodeURIComponent(t);else window.open(wa(t),"_blank")});
if(L==="en")trAll(nf);
/* ===== V6 : liste des appareils par type (modifiez les modèles, spécifications et prix ici) ===== */
var MI=[
[["Portable bureautique 15,6″ — i5, 8 Go, SSD 256 Go","Office laptop 15.6″ — i5, 8 GB, 256 GB SSD",250000],["Portable professionnel 14″ — i7, 16 Go, SSD 512 Go","Business laptop 14″ — i7, 16 GB, 512 GB SSD",450000],["Portable reconditionné — i5, 8 Go, SSD 240 Go","Refurbished laptop — i5, 8 GB, 240 GB SSD",150000]],
[["PC de bureau — i5, 8 Go, SSD 256 Go","Desktop PC — i5, 8 GB, 256 GB SSD",220000],["PC complet avec écran 22″, clavier et souris","Complete PC with 22″ screen, keyboard and mouse",300000],["Station de travail — i7, 16 Go, SSD 512 Go","Workstation — i7, 16 GB, 512 GB SSD",480000]],
[["Imprimante jet d’encre multifonction","Multifunction inkjet printer",65000],["Imprimante laser monochrome","Monochrome laser printer",95000],["Imprimante laser couleur","Color laser printer",180000],["Scanner de documents A4","A4 document scanner",85000]],
[["Routeur Wi-Fi double bande","Dual-band Wi-Fi router",25000],["Switch réseau 8 ports","8-port network switch",22000],["Point d’accès Wi-Fi plafonnier","Ceiling Wi-Fi access point",45000],["Câblage réseau (le mètre posé)","Network cabling (per meter installed)",1500]],
[["Onduleur 650 VA","650 VA UPS",35000],["Onduleur 1 200 VA","1 200 VA UPS",65000],["Stabilisateur de tension 1 kVA","1 kVA voltage stabilizer",30000]],
[["Clavier et souris sans fil","Wireless keyboard and mouse",12000],["Casque avec micro","Headset with microphone",10000],["Disque dur externe 1 To","1 TB external hard drive",45000],["Clé USB 64 Go","64 GB USB drive",8000],["Hub USB-C 7-en-1","7-in-1 USB-C hub",18000]]];
M["Voir les modèles"]="View models";M["Masquer les modèles"]="Hide models";M["Commander"]="Order";
MI.forEach(function(c){c.forEach(function(i){M[i[0]]=i[1]})});
car("#gMat",mat.map(function(m,i){return '<div class="card">'+SV(IMG[MK[i]])+'<span class="tag">Matériel</span><h3>'+m[0]+'</h3><p>'+m[1]+'</p><div class="foot"><span class="price">dès '+fmt(m[2])+'</span><button class="btn sm tg" type="button" aria-expanded="false"><span class="o">Voir les modèles</span><span class="c">Masquer les modèles</span></button></div><div class="pl">'+MI[i].map(function(x){return '<div class="pi"><span>'+x[0]+'</span><div class="pr"><b>'+fmt(x[2])+'</b><a class="btn sm" target="_blank" rel="noopener" href="'+wa("Bonjour MEYGO Technologies, je souhaite commander : "+x[0]+" ("+fmt(x[2])+")")+'">Commander</a></div></div>'}).join("")+'</div></div>'}).join(""),false);
document.addEventListener("click",function(e){var t=e.target.closest(".mimg,.tg");if(!t)return;var c=t.closest(".card");if(!c||!c.querySelector(".pl"))return;var o=c.classList.toggle("open");var b=c.querySelector(".tg");if(b)b.setAttribute("aria-expanded",o)});
/* ===== V7 : chaque appareil = [nom FR, nom EN, prix, photo, caractéristiques "Libellé:valeur|..."] ===== */
/* Pour la photo : photo:"image.jpg" (4e élément). Vide = illustration par défaut */
var MD=[
[["Portable bureautique 15,6″","Office laptop 15.6″",250000,"","Écran:15,6″ HD|Processeur:Intel Core i5|Mémoire:8 Go|Stockage:SSD 256 Go|Usage:Bureautique"],["Portable professionnel 14″","Business laptop 14″",450000,"","Écran:14″ Full HD|Processeur:Intel Core i7|Mémoire:16 Go|Stockage:SSD 512 Go|Usage:Pro et développement"],["Portable reconditionné","Refurbished laptop",150000,"","Écran:14″ HD|Processeur:Intel Core i5|Mémoire:8 Go|Stockage:SSD 240 Go|État:Testé et nettoyé"]],
[["PC de bureau","Desktop PC",220000,"","Processeur:Intel Core i5|Mémoire:8 Go|Stockage:SSD 256 Go|Format:Tour"],["PC complet avec écran 22″","Complete PC with 22″ screen",300000,"","Écran:22″ Full HD|Processeur:Intel Core i5|Mémoire:8 Go|Inclus:Clavier et souris"],["Station de travail","Workstation",480000,"","Processeur:Intel Core i7|Mémoire:16 Go|Stockage:SSD 512 Go|Usage:Conception et calcul"]],
[["Imprimante jet d’encre multifonction","Multifunction inkjet printer",65000,"","Fonctions:Impression, copie, scan|Format:A4|Connexion:USB et Wi-Fi"],["Imprimante laser monochrome","Monochrome laser printer",95000,"","Type:Laser noir et blanc|Format:A4|Connexion:USB et Ethernet"],["Imprimante laser couleur","Color laser printer",180000,"","Type:Laser couleur|Format:A4|Connexion:USB, Ethernet, Wi-Fi"],["Scanner de documents A4","A4 document scanner",85000,"","Format:A4|Résolution:600 dpi|Connexion:USB"]],
[["Routeur Wi-Fi double bande","Dual-band Wi-Fi router",25000,"","Bande:2,4 et 5 GHz|Ports:4 Ethernet|Vitesse:1 200 Mbps"],["Switch réseau 8 ports","8-port network switch",22000,"","Ports:8 Gigabit|Gestion:Non administrable|Pose:Bureau ou mur"],["Point d’accès Wi-Fi plafonnier","Ceiling Wi-Fi access point",45000,"","Bande:2,4 et 5 GHz|Alimentation:PoE|Pose:Plafond"],["Câblage réseau","Network cabling",1500,"","Type:Câble RJ45 cat. 6|Tarif:Au mètre posé|Inclus:Pose et test"]],
[["Onduleur 650 VA","650 VA UPS",35000,"","Puissance:650 VA|Prises:2|Usage:PC et box internet"],["Onduleur 1 200 VA","1 200 VA UPS",65000,"","Puissance:1 200 VA|Prises:4|Usage:Poste complet et réseau"],["Stabilisateur de tension 1 kVA","1 kVA voltage stabilizer",30000,"","Puissance:1 kVA|Entrée:140 à 260 V|Usage:Bureau et électroménager"]],
[["Clavier et souris sans fil","Wireless keyboard and mouse",12000,"","Connexion:Sans fil 2,4 GHz|Disposition:AZERTY|Alimentation:Piles"],["Casque avec micro","Headset with microphone",10000,"","Connexion:USB ou jack 3,5 mm|Micro:Intégré|Usage:Visio et formation"],["Disque dur externe 1 To","1 TB external hard drive",45000,"","Capacité:1 To|Connexion:USB 3.0|Format:2,5″"],["Clé USB 64 Go","64 GB USB drive",8000,"","Capacité:64 Go|Connexion:USB 3.0"],["Hub USB-C 7-en-1","7-in-1 USB-C hub",18000,"","Ports:HDMI, USB 3.0, carte SD|Charge:Power Delivery|Connexion:USB-C"]]];
[["Écran","Screen"],["Processeur","Processor"],["Mémoire","Memory"],["Stockage","Storage"],["Usage","Use"],["État","Condition"],["Format","Form"],["Inclus","Included"],["Fonctions","Functions"],["Connexion","Connection"],["Type","Type"],["Résolution","Resolution"],["Bande","Band"],["Vitesse","Speed"],["Gestion","Management"],["Pose","Mounting"],["Alimentation","Power"],["Tarif","Pricing"],["Puissance","Power rating"],["Prises","Outlets"],["Entrée","Input"],["Disposition","Layout"],["Micro","Microphone"],["Capacité","Capacity"],["Charge","Charging"],
["Bureautique","Office work"],["Pro et développement","Professional and development"],["Testé et nettoyé","Tested and cleaned"],["Tour","Tower"],["Clavier et souris","Keyboard and mouse"],["Conception et calcul","Design and computing"],["Impression, copie, scan","Print, copy, scan"],["USB et Wi-Fi","USB and Wi-Fi"],["Laser noir et blanc","Black and white laser"],["USB et Ethernet","USB and Ethernet"],["USB, Ethernet, Wi-Fi","USB, Ethernet, Wi-Fi"],["2,4 et 5 GHz","2.4 and 5 GHz"],["Non administrable","Unmanaged"],["Bureau ou mur","Desk or wall"],["Plafond","Ceiling"],["Câble RJ45 cat. 6","Cat. 6 RJ45 cable"],["Au mètre posé","Per meter installed"],["Pose et test","Installation and testing"],["PC et box internet","PC and internet box"],["Poste complet et réseau","Full workstation and network"],["140 à 260 V","140 to 260 V"],["Bureau et électroménager","Office and appliances"],["Sans fil 2,4 GHz","2.4 GHz wireless"],["Piles","Batteries"],["USB ou jack 3,5 mm","USB or 3.5 mm jack"],["Intégré","Built-in"],["Visio et formation","Video calls and training"],["HDMI, USB 3.0, carte SD","HDMI, USB 3.0, SD card"]].forEach(function(p){M[p[0]]=p[1]});
MD.forEach(function(c){c.forEach(function(i){M[i[0]]=i[1]})});
car("#gMat",mat.map(function(m,i){return '<div class="card">'+SV(IMG[MK[i]])+'<span class="tag">Matériel</span><h3>'+m[0]+'</h3><p>'+m[1]+'</p><div class="foot"><span class="price">dès '+fmt(m[2])+'</span><button class="btn sm tg" type="button" aria-expanded="false"><span class="o">Voir les modèles</span><span class="c">Masquer les modèles</span></button></div><div class="pl">'+MD[i].map(function(x){return '<div class="pi"><div class="pp">'+(x[3]?'<img src="'+x[3]+'" alt="'+esc(x[0])+'" loading="lazy">':'<svg viewBox="0 0 120 80">'+IMG[MK[i]]+'</svg>')+'</div><div><b class="nm">'+x[0]+'</b><ul class="sp">'+x[4].split("|").map(function(s){var k=s.indexOf(":");return '<li><span>'+s.slice(0,k)+'</span><em>'+s.slice(k+1)+'</em></li>'}).join("")+'</ul></div><div class="pr"><b>'+fmt(x[2])+'</b><a class="btn sm" target="_blank" rel="noopener" href="'+wa("Bonjour MEYGO Technologies, je souhaite commander : "+x[0]+" ("+fmt(x[2])+")")+'">Commander</a></div></div>'}).join("")+'</div></div>'}).join(""),false);

/* ===== V8 : formations (communauté, programme verrouillé, paiement simulé, facture) et panier matériel ===== */
IC.lock='<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>';
IC.cart='<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>';
$("#cartFab").innerHTML=ico("cart")+'<i id="cartN">0</i>';
[["Partenaires :","Partners:"],["Communauté","Community"],["Partenaires","Partners"],["Apprenants inscrits à cette formation","Learners enrolled in this training"],["Groupe WhatsApp des apprenants","Learners’ WhatsApp group"],["Entraide et séances pratiques","Peer support and practice sessions"],["Échanges avec les formateurs","Exchanges with trainers"],["Programme de la formation","Training program"],["Accès débloqué (simulation) : vous recevrez le détail des séances.","Access unlocked (simulation): you will receive the session details."],["Contenu verrouillé : accessible après inscription et paiement.","Locked content: available after enrollment and payment."],["Continuer vers le paiement","Continue to payment"],["Session souhaitée","Preferred session"],["Choisir une session…","Choose a session…"],["Semaine prochaine (matin)","Next week (morning)"],["Semaine prochaine (après-midi)","Next week (afternoon)"],["Dans 2 semaines","In 2 weeks"],["Week-end","Weekend"],["1. Découvrir","1. Discover"],["2. Paiement","2. Payment"],["3. Facture","3. Invoice"],["Votre numéro Mobile Money","Your Mobile Money number"],["Simulation : aucun argent n’est prélevé. Une facture de démonstration est générée.","Simulation: no money is taken. A demo invoice is generated."],["Retour","Back"],["Paiement confirmé (simulation)","Payment confirmed (simulation)"],["Imprimer / PDF","Print / PDF"],["Envoyer à MEYGO par WhatsApp","Send to MEYGO via WhatsApp"],
["Explorer les modèles","Explore models"],["Tout ajouter au panier","Add all to cart"],["Voir le panier","View cart"],["Ajouter","Add"],["Panier","Cart"],["Total","Total"],["Commander tout par WhatsApp","Order everything via WhatsApp"],["Facture proforma","Proforma invoice"],["Vider","Clear"],["Votre panier est vide. Ouvrez un type de matériel et ajoutez des modèles.","Your cart is empty. Open a hardware type and add models."],["Des profils complémentaires, réunis à Yaoundé et même en France.","Complementary profiles, in Yaoundé and even in France."],
["Word : mise en page et styles","Word: layout and styles"],["Excel : formules essentielles","Excel: essential formulas"],["PowerPoint : présentations claires","PowerPoint: clear presentations"],["Projet pratique de bureautique","Hands-on office project"],["Tableaux croisés dynamiques","Pivot tables"],["Fonctions avancées (RECHERCHEX, SI…)","Advanced functions (XLOOKUP, IF…)"],["Macros et automatisation","Macros and automation"],["Tableau de bord final","Final dashboard"],["Cadrage et objectifs du projet","Project scoping and goals"],["Planning, tâches et ressources","Planning, tasks and resources"],["Suivi des coûts et des risques","Cost and risk tracking"],["Pilotage et clôture","Steering and closing"],["Structure HTML et sémantique","HTML structure and semantics"],["Mise en page CSS responsive","Responsive CSS layout"],["JavaScript : interactions","JavaScript: interactions"],["Projet : site complet en ligne","Project: complete live website"],["Bases de Python","Python basics"],["Manipulation de données","Data handling"],["Visualisation des résultats","Results visualization"],["Mini-projet d’analyse","Analysis mini-project"],["Conception d’interface mobile","Mobile interface design"],["Navigation et écrans","Navigation and screens"],["Données et API","Data and APIs"],["Publication de l’application","App publishing"],["Modélisation et schémas","Modeling and schemas"],["Requêtes SQL essentielles","Essential SQL queries"],["Jointures et agrégations","Joins and aggregations"],["Sécurité et sauvegardes","Security and backups"],["Installation et configuration","Installation and setup"],["Administration des utilisateurs","User administration"],["Optimisation des requêtes","Query optimization"],["Sauvegarde et restauration","Backup and restore"]].forEach(function(p){M[p[0]]=p[1]});

/* ----- Formations : données (EXEMPLES à remplacer par vos vraies informations) ----- */
var PARTNERS=[{n:"Google",c:"ggl",logo:""},{n:"IBM",c:"ibm",logo:""},{n:"Coursera",c:"crs",logo:""},{n:"MEYGO Certifié",c:"myg",logo:""}]; /* logo:"chemin/logo.png" pour afficher une image */
function partnersH(){return PARTNERS.map(function(p){return p.logo?'<img class="plimg" src="'+p.logo+'" alt="'+esc(p.n)+'" title="'+esc(p.n)+'">':'<span class="plogo '+p.c+'" title="'+esc(p.n)+'">'+p.n+'</span>'}).join("")}
$("#partnersRow").innerHTML='<span class="note" style="font-weight:600">Partenaires :</span>'+partnersH();
var MODS=[["Word : mise en page et styles","Excel : formules essentielles","PowerPoint : présentations claires","Projet pratique de bureautique"],["Tableaux croisés dynamiques","Fonctions avancées (RECHERCHEX, SI…)","Macros et automatisation","Tableau de bord final"],["Cadrage et objectifs du projet","Planning, tâches et ressources","Suivi des coûts et des risques","Pilotage et clôture"],["Structure HTML et sémantique","Mise en page CSS responsive","JavaScript : interactions","Projet : site complet en ligne"],["Bases de Python","Manipulation de données","Visualisation des résultats","Mini-projet d’analyse"],["Conception d’interface mobile","Navigation et écrans","Données et API","Publication de l’application"],["Modélisation et schémas","Requêtes SQL essentielles","Jointures et agrégations","Sécurité et sauvegardes"],["Installation et configuration","Administration des utilisateurs","Optimisation des requêtes","Sauvegarde et restauration"]];
var CNT=[12,8,9,15,10,7,11,6],INIT=["AN","KM","ST","LB","ME","JP"]; /* CNT = nombre d'inscrits affiché ; INIT = initiales d'apprenants */
var UNL={},ENR={op:"MTN"};
function toast(fr,en){var t=$("#toast");t.textContent=L==="en"&&en?en:fr;t.classList.add("on");clearTimeout(toast.h);toast.h=setTimeout(function(){t.classList.remove("on")},1900)}
function enGo(n){["enP1","enP2","enP3"].forEach(function(id,k){$("#"+id).hidden=k!==n-1});document.querySelectorAll("#modEnr .steps3 .s").forEach(function(s,k){s.classList.toggle("on",k<n)});$("#modEnr .mbox").scrollTop=0}
function enOpen(i){ENR={i:i,op:"MTN"};var f=forms[i],u=UNL[i];$("#enT").textContent=f[1];$("#enSub").textContent=f[0]+" — "+fmt(f[3]);
 $("#enP1").innerHTML='<div class="en2"><div><h4>Communauté</h4><div class="avr">'+INIT.map(function(x,k){return '<span class="avt" style="--c:'+k+'">'+x+'</span>'}).join("")+'<span class="avm">+'+CNT[i]+'</span></div><p class="note">Apprenants inscrits à cette formation</p><ul class="bn"><li>'+ico("chk")+'Groupe WhatsApp des apprenants</li><li>'+ico("chk")+'Entraide et séances pratiques</li><li>'+ico("chk")+'Échanges avec les formateurs</li></ul><h4>Partenaires</h4><div class="partners-row">'+partnersH()+'</div></div>'
 +'<div><h4>Programme de la formation</h4><ul class="mods">'+MODS[i].map(function(m,k){return '<li class="'+(u?"ok":"lk")+'"><span class="lc">'+ico(u?"chk":"lock")+'</span><span class="n">'+(k+1)+'</span>'+m+'</li>'}).join("")+'</ul><p class="note">'+(u?"Accès débloqué (simulation) : vous recevrez le détail des séances.":"Contenu verrouillé : accessible après inscription et paiement.")+'</p></div></div>'
 +'<form id="enF" style="display:grid;gap:12px"><div class="f2"><label>Nom complet<input name="nom" required autocomplete="name"></label><label>Téléphone<input name="tel" type="tel" required autocomplete="tel"></label></div><div class="f2"><label>Email<input name="email" type="email" autocomplete="email"></label><label>Session souhaitée<select name="session" required><option value="">Choisir une session…</option><option>Semaine prochaine (matin)</option><option>Semaine prochaine (après-midi)</option><option>Dans 2 semaines</option><option>Week-end</option><option>À définir ensemble</option></select></label></div><button class="btn" type="submit">Continuer vers le paiement</button></form>';
 enGo(1);$("#modEnr").classList.add("on");if(L==="en")trAll($("#modEnr"))}
function enOpS(){var f=forms[ENR.i],o=ENR.op,mt=o==="MTN";$("#enS").innerHTML='<b>Paiement '+(mt?"MTN MoMo":"Orange Money")+'</b><br>1. Composez <b>'+(mt?"*126#":"#150*1#")+'</b><br>2. Choisissez « Transfert d’argent »<br>3. Envoyez <b>'+fmt(f[3])+'</b> au <b>'+PAYNUM[o]+'</b><br>4. Gardez le SMS de confirmation';if(L==="en")trAll($("#enS"))}
function enPay(){var f=forms[ENR.i];$("#enP2").innerHTML='<h4>'+f[1]+'</h4><p class="note">Montant :</p><div class="amt">'+fmt(f[3])+'</div><div class="pay"><button type="button" data-eop="MTN" aria-pressed="true">MTN MoMo</button><button type="button" data-eop="Orange" aria-pressed="false">Orange Money</button></div><label>Votre numéro Mobile Money<input id="enN" type="tel" placeholder="6XX XX XX XX"></label><div class="steps" id="enS"></div><p class="note">Simulation : aucun argent n’est prélevé. Une facture de démonstration est générée.</p><div class="row"><button class="btn" type="button" id="enPay">Payer '+fmt(f[3])+' (simulation)</button><button class="btn out" type="button" id="enBack">Retour</button></div>';enOpS();enGo(2);if(L==="en")trAll($("#enP2"))}

/* ----- Facture (formations et panier) ----- */
function invNo(){var n;try{n=+(localStorage.getItem("mg_inv")||0)+1;localStorage.setItem("mg_inv",n)}catch(e){n=Math.floor(Math.random()*9000)+100}return "FAC-"+new Date().getFullYear()+"-"+String(n).padStart(4,"0")}
function invoiceHTML(o){var tot=o.lines.reduce(function(s,l){return s+l[1]*l[2]},0);
 return '<div class="inv"><div class="invh"><div><b>MEYGO Technologies</b><br>Yaoundé, Etoudi, Cameroun<br>+237 690 84 19 46<br>'+MAIL+'</div><div style="text-align:right"><b style="font-size:1.1rem">'+(o.paid?"FACTURE":"FACTURE PROFORMA")+'</b><br>N° '+o.no+'<br>'+o.date+'</div></div><p><b>Client :</b> '+esc(o.client||"-")+(o.tel?" · "+esc(o.tel):"")+'</p><table><tr><th>Désignation</th><th>Qté</th><th>Prix unitaire</th><th>Total</th></tr>'+o.lines.map(function(l){return '<tr><td>'+esc(l[0])+'</td><td>'+l[1]+'</td><td>'+fmt(l[2])+'</td><td>'+fmt(l[1]*l[2])+'</td></tr>'}).join("")+'<tr class="tt"><td colspan="3">Total</td><td>'+fmt(tot)+'</td></tr></table><p class="invs">'+(o.paid?'Statut : PAYÉ (simulation) via '+o.op+'. Document de démonstration, sans valeur comptable.':'Facture proforma : devis non payé, sous réserve de disponibilité.')+'</p></div>'}
function printInv(h){var w=window.open("","_blank");if(!w){toast("Autorisez les fenêtres pop-up pour imprimer.","Please allow pop-ups to print.");return}
 w.document.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>Facture MEYGO</title><style>body{font:14px/1.5 Arial,sans-serif;color:#111;padding:24px}.invh{display:flex;justify-content:space-between;border-bottom:2px solid #0f7a4a;padding-bottom:10px;margin-bottom:10px}table{width:100%;border-collapse:collapse;margin:10px 0}th,td{border-bottom:1px solid #ddd;padding:6px;text-align:left}td:nth-child(n+2),th:nth-child(n+2){text-align:right}.tt td{font-weight:800;border-top:2px solid #0f7a4a}.invs{font-size:12px;color:#555}</style></head><body>'+h+'</body></html>');w.document.close();w.focus();setTimeout(function(){w.print()},300)}

/* ----- Matériel : modèles avec photos, panier, commande groupée ----- */
var PHI=[['photo-1496181133206-80ce9b88a853', 'photo-1525547717930-4d3468c88c6b', 'photo-1588872657578-7b1a5cfd2e18'], ['photo-1593640408182-31c70c8268f5', 'photo-1587831990711-23ca6441447b', 'photo-1593642632823-8f785ba67e45'], ['photo-1612815154858-60aa4c59eaa6', 'photo-1563986768609-322da13575f3', 'photo-1612815154858-60aa4c59eaa6', 'photo-1586281380349-632531db7ed4'], ['photo-1606904827626-f5e8a9e4f3a0', 'photo-1558618666-fcd25c85cd64', 'photo-1544197150-b99a580bb7a2', 'photo-1558494949-ef010cbdcc31'], ['photo-1625948515291-69613efd103f', 'photo-1606313564200-e75d5e304eec', 'photo-1558618666-fcd25c85cd64'], ['photo-1587829741301-dc798b83add3', 'photo-1484704849700-f032a568e944', 'photo-1597872200969-2b65d56bd16b', 'photo-1614624532983-4ce03382d63d', 'photo-1625948515291-69613efd103f']];
PHI.forEach(function(c,i){c.forEach(function(id,j){MD[i][j][3]="https://images.unsplash.com/"+id+"?w=400&h=300&fit=crop"})});
var CART=[];
function cartAdd(l,p){var f=CART.filter(function(x){return x.l===l})[0];if(f)f.q++;else CART.push({l:l,p:p,q:1});cartSync()}
function cartSync(){$("#cartN").textContent=CART.reduce(function(s,x){return s+x.q},0)}
function cartTot(){return CART.reduce(function(s,x){return s+x.p*x.q},0)}
function renderCart(){var n0=$("#cNom")?$("#cNom").value:"",t0=$("#cTel")?$("#cTel").value:"";
 $("#cartB").innerHTML=CART.length?'<ul class="cl">'+CART.map(function(x,k){return '<li><span>'+x.l+'</span><div class="qty"><button type="button" data-cq="'+k+'" data-d="-1" aria-label="-">−</button><b>'+x.q+'</b><button type="button" data-cq="'+k+'" data-d="1" aria-label="+">+</button></div><b>'+fmt(x.p*x.q)+'</b></li>'}).join("")+'</ul><div class="ctot"><span>Total</span><b>'+fmt(cartTot())+'</b></div><div class="f2"><label>Nom complet<input id="cNom" autocomplete="name"></label><label>Téléphone<input id="cTel" type="tel" autocomplete="tel"></label></div><div class="row"><button class="btn" type="button" id="cWa">Commander tout par WhatsApp</button><button class="btn out" type="button" id="cInv">Facture proforma</button><button class="btn out" type="button" id="cClr">Vider</button></div><div id="cInvBox"></div>':'<p class="note">Votre panier est vide. Ouvrez un type de matériel et ajoutez des modèles.</p>';
 if($("#cNom")){$("#cNom").value=n0;$("#cTel").value=t0}cartSync();if(L==="en")trAll($("#cartB"))}
function openMat(i){var cat=mat[i];$("#mtMat").textContent=cat[0];$("#matSub").textContent=cat[1];$("#matAll").dataset.addall=i;
 $("#matGrid").innerHTML=MD[i].map(function(x,j){var sp=x[4].split("|").map(function(s){var k=s.indexOf(":");return '<li><span>'+s.slice(0,k)+'</span><em style="font-style:normal">'+s.slice(k+1)+'</em></li>'}).join("");
  return '<div class="mat-card"><div class="mpic">'+(x[3]?'<img src="'+x[3]+'" alt="'+esc(x[0])+'" loading="lazy">':'<svg viewBox="0 0 120 80">'+IMG[MK[i]]+'</svg>')+'</div><div class="mbody"><h4>'+x[0]+'</h4><ul class="specs">'+sp+'</ul><div class="foot"><b class="price">'+fmt(x[2])+'</b><div class="bt"><button class="btn out sm" type="button" data-add="'+i+"-"+j+'">Ajouter</button><button class="btn sm" type="button" data-buy="'+i+"-"+j+'">Commander</button></div></div></div></div>'}).join("");
 $("#modMat").classList.add("on");if(L==="en")trAll($("#modMat"))}
car("#gMat",mat.map(function(m,i){var ph=MD[i][0][3];return '<div class="card">'+(ph?'<div class="mimg" data-mat="'+i+'" style="cursor:pointer"><img src="'+ph+'" alt="'+esc(m[0])+'" loading="lazy"></div>':SV(IMG[MK[i]]).replace('class="mimg"','class="mimg" data-mat="'+i+'"'))+'<span class="tag">Matériel</span><h3>'+m[0]+'</h3><p>'+m[1]+'</p><div class="foot"><span class="price">dès '+fmt(m[2])+'</span><button class="btn sm" type="button" data-mat="'+i+'">Explorer les modèles</button></div></div>'}).join(""),true);

/* ----- Gestion des clics et formulaires ----- */
document.addEventListener("click",function(e){var t=e.target,b;
 if(b=t.closest("[data-enroll]"))enOpen(+b.dataset.enroll);
 if(t.closest("[data-enx]")||t.id==="modEnr")$("#modEnr").classList.remove("on");
 if(b=t.closest("[data-eop]")){ENR.op=b.dataset.eop;document.querySelectorAll("[data-eop]").forEach(function(x){x.setAttribute("aria-pressed",x===b)});enOpS()}
 if(t.id==="enBack")enGo(1);
 if(t.id==="enPay"){var nn=$("#enN").value.trim();if(!nn){$("#enN").focus();return}var f=forms[ENR.i];UNL[ENR.i]=true;
  var o={no:invNo(),date:new Date().toLocaleDateString("fr-FR"),client:ENR.nom,tel:ENR.tel,lines:[[f[1],1,f[3]]],paid:true,op:ENR.op==="MTN"?"MTN MoMo":"Orange Money"};ENR.inv=o;
  $("#enP3").innerHTML='<h4>Paiement confirmé (simulation)</h4>'+invoiceHTML(o)+'<div class="row"><button class="btn" type="button" id="enPrint">Imprimer / PDF</button><a class="btn out" target="_blank" rel="noopener" href="'+wa("Bonjour MEYGO Technologies, inscription à la formation « "+f[1]+" » ("+fmt(f[3])+"). Facture "+o.no+" (paiement simulé via "+o.op+" depuis le "+nn+"). Nom : "+ENR.nom+", session : "+ENR.session+". Merci de confirmer.")+'">Envoyer à MEYGO par WhatsApp</a><button class="btn out" type="button" data-enx>Fermer</button></div>';enGo(3);if(L==="en")trAll($("#enP3"))}
 if(t.id==="enPrint")printInv(invoiceHTML(ENR.inv));
 if(b=t.closest("[data-mat]"))openMat(+b.dataset.mat);
 if(t.id==="matCl"||t.id==="modMat")$("#modMat").classList.remove("on");
 if(b=t.closest("[data-add]")){var p=b.dataset.add.split("-"),x=MD[+p[0]][+p[1]];cartAdd(x[0],x[2]);toast("Ajouté au panier ✓","Added to cart ✓")}
 if(t.id==="matAll"){var ci=+t.dataset.addall;MD[ci].forEach(function(x){cartAdd(x[0],x[2])});toast("Tous les modèles ajoutés au panier ✓","All models added to cart ✓")}
 if(t.closest("[data-cart]")||t.closest("#cartFab")){$("#modMat").classList.remove("on");renderCart();$("#modCart").classList.add("on")}
 if(t.id==="cartCl"||t.id==="modCart")$("#modCart").classList.remove("on");
 if(b=t.closest("[data-cq]")){var it=CART[+b.dataset.cq];it.q+=+b.dataset.d;if(it.q<1)CART.splice(+b.dataset.cq,1);renderCart()}
 if(t.id==="cClr"){CART=[];renderCart()}
 if(t.id==="cWa"){var l="Bonjour MEYGO Technologies, je souhaite commander :\n"+CART.map(function(x){return "- "+x.l+" ×"+x.q+" = "+fmt(x.p*x.q)}).join("\n")+"\nTotal : "+fmt(cartTot())+"\nNom : "+($("#cNom").value||"-")+"\nTéléphone : "+($("#cTel").value||"-");window.open(wa(l),"_blank")}
 if(t.id==="cInv"){var o2={no:invNo(),date:new Date().toLocaleDateString("fr-FR"),client:$("#cNom").value,tel:$("#cTel").value,lines:CART.map(function(x){return [x.l,x.q,x.p]}),paid:false};ENR.cinv=o2;$("#cInvBox").innerHTML=invoiceHTML(o2)+'<div class="row" style="margin-top:10px"><button class="btn out" type="button" id="cPrint">Imprimer / PDF</button></div>';if(L==="en")trAll($("#cInvBox"))}
 if(t.id==="cPrint")printInv(invoiceHTML(ENR.cinv))});
document.addEventListener("submit",function(e){if(e.target.id!=="enF")return;e.preventDefault();var fd=new FormData(e.target);ENR.nom=fd.get("nom");ENR.tel=fd.get("tel");ENR.session=fd.get("session");enPay()});
document.addEventListener("keydown",function(e){if(e.key==="Escape")["modEnr","modMat","modCart"].forEach(function(id){$("#"+id).classList.remove("on")})});

/* ===== V9 : toute commande passe par le panier + vraies vidéos de démonstration ERP ===== */
M["Vidéo"]="Video";M["Voir la vidéo"]="Watch the video";
document.addEventListener("click",function(e){var b=e.target.closest("[data-buy]");if(!b)return;var p=b.dataset.buy.split("-"),x=MD[+p[0]][+p[1]];cartAdd(x[0],x[2]);toast("Ajouté au panier ✓","Added to cart ✓");$("#modMat").classList.remove("on");renderCart();$("#modCart").classList.add("on")});

/* Vidéos de fonctionnement des ERP : mettez le chemin de chaque vidéo (ex. "videos/erp-commercial.mp4").
   Ordre : Gestion commerciale, Gestion de stock, Gestion scolaire et notes, RH et paie.
   Laissez "" pour afficher la démo animée simulée en attendant la vidéo. */
var ERP_VIDEO=["photos/gestion_commerciale.MP4","photos/gestion_stock.MP4","","photos/gestion_RH.MP4"];
var DV0=$("#dv").innerHTML;
function pcard(tag,t,d,sc,url,video){DEMOS.push({t:t,sc:sc,url:url,video:video});var i=DEMOS.length-1;
 return '<div class="card"><div class="thumb" data-demo="'+i+'" role="button" tabindex="0" aria-label="'+t+'"><b>'+ico("play")+'</b><em>'+(video?"Vidéo":"Démo 15 s")+'</em></div><span class="tag">'+tag+'</span><h3>'+t+'</h3><p>'+d+'</p><div class="foot"><button class="btn sm" data-demo="'+i+'" type="button">'+(video?"Voir la vidéo":"Voir la démo")+'</button>'+(url&&url!=="#"?'<a class="btn out sm" target="_blank" rel="noopener" href="'+url+'">Visiter le site</a>':'<a class="btn out sm" target="_blank" rel="noopener" href="'+wa("Bonjour MEYGO Technologies, je souhaite une démonstration en direct : "+t)+'">Démo en direct</a>')+'</div></div>'}
function dOpen(i){dD=DEMOS[i];clearInterval(dIv);$("#dt").textContent=dD.t;var lk=$("#dlink");lk.style.display=dD.url&&dD.url!=="#"?"":"none";if(dD.url)lk.href=dD.url;
 if(dD.video){$("#dv").innerHTML='<video controls playsinline preload="metadata" src="'+dD.video+'" style="width:100%;border-radius:12px;background:#000;max-height:60vh"></video>';$("#dfill").style.transition="none";$("#dfill").style.width="0";$("#drep").style.display="none"}
 else{$("#dv").innerHTML=DV0;$("#drep").style.display="";$("#dtitle").textContent=dD.t;dPlay()}
 $("#dm").classList.add("on");if(L==="en")trAll($("#dm"))}
function dStopVideo(){var v=document.querySelector("#dv video");if(v)v.pause()}
document.addEventListener("click",function(e){if(e.target.id==="dcl"||e.target.id==="dm")dStopVideo()});
document.addEventListener("keydown",function(e){if(e.key==="Escape")dStopVideo()});
car("#gErp",erp.map(function(e,i){return pcard("ERP",e[0],e[1],SCP[i],"",ERP_VIDEO[i]||"")}).join(""),true);
document.body.style.overflow="hidden";
setTimeout(function(){var sp=$("#splash");sp.classList.add("out");document.body.style.overflow="";setTimeout(function(){sp.remove()},700)},2700);