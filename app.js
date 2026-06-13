/* Paolo Cresto CV - Interactivity & Content Management */

document.addEventListener('DOMContentLoaded', () => {
    
    // DOM Elements
    const menuContainer = document.querySelector('.menu-container');
    const ctaButton = document.getElementById('main-cta-button');
    const logoImg = document.getElementById('logo-img');
    const clickHint = document.getElementById('click-hint');
    const radialItems = document.querySelectorAll('.menu-item-hidden');
    const overlay = document.getElementById('content-overlay');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const closeBtn = document.getElementById('close-overlay-btn');
    const backBtn = document.getElementById('modal-back-btn');
    
    let isMenuOpen = false;

    // 1. Position Radial Menu Items
    function positionMenuItems() {
        const totalItems = radialItems.length;
        // Adjust radius based on screen size for optimal view-port fit
        let radius = 200; // Desktop
        if (window.innerWidth < 640) {
            radius = 120; // Mobile
        } else if (window.innerWidth < 1024) {
            radius = 160; // Tablet
        }
        
        radialItems.forEach((item, index) => {
            // angle starts at -PI/2 (top) and divides the circle into equal parts
            const angle = (index / totalItems) * 2 * Math.PI - (Math.PI / 2);
            const x = Math.round(Math.cos(angle) * radius);
            const y = Math.round(Math.sin(angle) * radius);
            
            item.style.setProperty('--tw-translate-x', `${x}px`);
            item.style.setProperty('--tw-translate-y', `${y}px`);
        });
    }

    // Initialize positions on load and handle resize
    positionMenuItems();
    window.addEventListener('resize', positionMenuItems);

    // 2. Toggle Menu Open/Close
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            document.body.classList.add('menu-open');
            menuContainer.classList.add('menu-open');
            logoImg.classList.add('animate-spin-slow');
            logoImg.style.transform = 'scale(0.85)';
        } else {
            document.body.classList.remove('menu-open');
            menuContainer.classList.remove('menu-open');
            logoImg.classList.remove('animate-spin-slow');
            logoImg.style.transform = '';
        }
    }

    ctaButton.addEventListener('click', toggleMenu);

    // 3. Section Content Data (Rich HTML Layouts)
    const sectionContent = {
        home: {
            title: "Benvenuto",
            html: `
                <div class="flex flex-col items-center max-w-2xl mx-auto space-y-6">
                    <div class="w-16 h-1 bg-brand-orange rounded-full"></div>
                    <p class="text-xl sm:text-2xl font-light tracking-wide text-brand-lightBg leading-relaxed">
                        Ciao, sono <strong class="font-bold text-brand-orange">Paolo Cresto</strong>.<br>
                        Un Graphic Designer e Creative Freelancer focalizzato sull'integrazione di strumenti avanzati di Intelligenza Artificiale nei flussi di lavoro visivi.
                    </p>
                    <p class="text-sm sm:text-base opacity-75 leading-relaxed font-light">
                        Unisco design creativo, marketing orientato agli obiettivi e analisi data-driven per creare esperienze visive e digitali che comunicano valore reale, ottimizzano risorse e supportano decisioni di business.
                    </p>
                    <div class="pt-6 grid grid-cols-2 gap-6 w-full text-left">
                        <div class="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-brand-orange/40 transition-colors">
                            <span class="material-symbols-outlined text-brand-orange mb-2">palette</span>
                            <h4 class="font-bold text-sm uppercase tracking-wider mb-1">Visual Design</h4>
                            <p class="text-xs opacity-70">Identità visive di forte impatto e design per progetti promozionali cartacei e digitali.</p>
                        </div>
                        <div class="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-brand-orange/40 transition-colors">
                            <span class="material-symbols-outlined text-brand-orange mb-2">psychology</span>
                            <h4 class="font-bold text-sm uppercase tracking-wider mb-1">AI Integration</h4>
                            <p class="text-xs opacity-70">Utilizzo di algoritmi generativi per ideazione rapida, editing e animazione grafica avanzata.</p>
                        </div>
                    </div>
                </div>
            `
        },
        storia: {
            title: "La mia storia",
            html: `
                <div class="flex flex-col items-center max-w-2xl mx-auto space-y-6 text-left">
                    <p class="text-base sm:text-lg font-light leading-relaxed">
                        Nato a Torino nel 2006, ho sviluppato presto una forte propensione per il settore visivo e digitale, trasformando la mia attitudine in una professione freelance strutturata. 
                    </p>
                    <p class="text-base sm:text-lg font-light leading-relaxed text-white/80">
                        Credo fermamente che il <strong class="text-brand-orange font-bold">design non sia solo estetica</strong>, ma uno strumento strategico chiave per il business. Per questo motivo, affianco alle mie competenze grafiche un solido interesse per l'organizzazione aziendale, l'analisi finanziaria e lo studio di mercato.
                    </p>
                    <div class="w-full p-4 rounded-xl bg-white/5 border border-white/10 mt-2">
                        <h4 class="text-xs font-bold uppercase tracking-widest text-brand-orange mb-2">Profilo Personale</h4>
                        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                            <li><span class="opacity-60">Residenza:</span> Robassomero, Torino (IT)</li>
                            <li><span class="opacity-60">Data di Nascita:</span> 16 Agosto 2006</li>
                            <li><span class="opacity-60">Nazionalità:</span> Italiana</li>
                            <li><span class="opacity-60">Attività:</span> Graphic Designer & Imprenditore</li>
                        </ul>
                    </div>
                </div>
            `
        },
        studio: {
            title: "Studio",
            html: `
                <div class="max-w-2xl mx-auto space-y-8">
                    <!-- Timeline di Formazione -->
                    <div class="space-y-6">
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <span class="text-xs font-bold text-brand-orange uppercase tracking-wider">2025 - In corso</span>
                            <h3 class="text-lg font-bold mt-1 text-white">Specializzazione in AI-Driven Design & Visual Automation</h3>
                            <p class="text-sm opacity-60">Auto-formazione strutturata e corsi professionali avanzati</p>
                            <p class="text-xs mt-2 opacity-75 font-light">
                                Studio approfondito sull'integrazione di modelli generativi per grafica e video nel flusso di lavoro creativo (ComfyUI, Midjourney, Stable Diffusion, Luma, Runway), prompt engineering avanzato e ottimizzazione delle risorse digitali.
                            </p>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <span class="text-xs font-bold text-brand-orange uppercase tracking-wider">2020 - 2025</span>
                            <h3 class="text-lg font-bold mt-1 text-white">Diploma Superiore in Grafica e Comunicazione</h3>
                            <p class="text-sm opacity-60">Istituto Tecnico Tecnologico</p>
                            <p class="text-xs mt-2 opacity-75 font-light">
                                Acquisizione di competenze teorico-pratiche in comunicazione visiva, layout grafico, prestampa, editoria digitale, fotografia e software di settore (Adobe Creative Suite: Photoshop, Illustrator, InDesign).
                            </p>
                        </div>
                    </div>
                </div>
            `
        },
        esperienze: {
            title: "Esperienze",
            html: `
                <div class="max-w-3xl mx-auto space-y-6">
                    <!-- Timeline Esperienze -->
                    <div class="space-y-6">
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <span class="text-xs font-bold text-brand-orange uppercase tracking-wider">Dicembre 2025 – Marzo 2026</span>
                            <h3 class="text-xl font-bold mt-1 text-white">Tirocinante Graphic Designer <span class="text-sm font-normal text-brand-orange">(Giorgio Risi SRL)</span></h3>
                            <p class="text-xs mt-2 opacity-80 font-light">
                                Esperienza professionale focalizzata sull'utilizzo di strumenti di Intelligenza Artificiale per la creazione, ottimizzazione e animazione grafica di contenuti visivi promozionali. Approccio strutturato e orientato alla massimizzazione dei risultati creativi per brand e clienti dell'agenzia.
                            </p>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <span class="text-xs font-bold text-brand-orange uppercase tracking-wider">Aprile 2025 – Luglio 2025</span>
                            <h3 class="text-xl font-bold mt-1 text-white">Collaboratore Consulente Immobiliare <span class="text-sm font-normal text-brand-orange">(Tempocasa Regio Parco)</span></h3>
                            <p class="text-xs mt-2 opacity-80 font-light">
                                Attività di consulenza immobiliare con focus su gestione dei clienti, analisi dettagliate di mercato, supporto attivo alle trattative e individuazione di opportunità di investimento. Esperienza che ha consolidato spiccate capacità analitiche, commerciali e di valutazione economica.
                            </p>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <span class="text-xs font-bold text-brand-orange uppercase tracking-wider">Novembre 2022 – Marzo 2023</span>
                            <h3 class="text-xl font-bold mt-1 text-white">Aiutante Stampatore e Impaginatore <span class="text-sm font-normal text-brand-orange">(Officine Poligrafiche di Torino)</span></h3>
                            <p class="text-xs mt-2 opacity-80 font-light">
                                Attività operative nel settore prestampa e produzione grafica: preparazione dei file pronti per la stampa, impaginazione di stampati editoriali e pubblicitari, gestione dei macchinari industriali di stampa, controllo qualità finale e coordinamento del flusso di lavoro nel rispetto di scadenze ristrette.
                            </p>
                        </div>
                    </div>
                </div>
            `
        },
        progetti: {
            title: "Progetti",
            html: `
                <div class="max-w-4xl mx-auto space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <!-- Progetto 1 -->
                        <div class="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between text-left group hover:-translate-y-1">
                            <div>
                                <span class="material-symbols-outlined text-brand-orange text-3xl mb-3">auto_awesome</span>
                                <h3 class="text-lg font-bold text-white mb-2 group-hover:text-brand-orange transition-colors">AI Content Campaign</h3>
                                <p class="text-xs opacity-75 font-light leading-relaxed">
                                    Generazione di asset visivi pubblicitari statici ed animati integrando modelli generativi per ridurre i tempi di produzione mantenendo alta la coerenza di brand.
                                </p>
                            </div>
                            <span class="text-[10px] uppercase font-bold tracking-wider text-brand-orange/80 mt-4">Giorgio Risi SRL</span>
                        </div>
                        
                        <!-- Progetto 2 -->
                        <div class="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between text-left group hover:-translate-y-1">
                            <div>
                                <span class="material-symbols-outlined text-brand-orange text-3xl mb-3">menu_book</span>
                                <h3 class="text-lg font-bold text-white mb-2 group-hover:text-brand-orange transition-colors">Impaginazione Editoriale</h3>
                                <p class="text-xs opacity-75 font-light leading-relaxed">
                                    Progettazione e verifica di file complessi per la stampa digitale ed offset di cataloghi commerciali, pieghevoli pubblicitari e brochure editoriali.
                                </p>
                            </div>
                            <span class="text-[10px] uppercase font-bold tracking-wider text-brand-orange/80 mt-4">Officine Poligrafiche</span>
                        </div>
                        
                        <!-- Progetto 3 -->
                        <div class="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between text-left group hover:-translate-y-1">
                            <div>
                                <span class="material-symbols-outlined text-brand-orange text-3xl mb-3">campaign</span>
                                <h3 class="text-lg font-bold text-white mb-2 group-hover:text-brand-orange transition-colors">Marketing Immobiliare</h3>
                                <p class="text-xs opacity-75 font-light leading-relaxed">
                                    Sviluppo di materiali di marketing cartacei e digitali a supporto della promozione di immobili di pregio e analisi grafiche di mercato.
                                </p>
                            </div>
                            <span class="text-[10px] uppercase font-bold tracking-wider text-brand-orange/80 mt-4">Tempocasa</span>
                        </div>
                    </div>
                </div>
            `
        },
        contatti: {
            title: "Contatti",
            html: `
                <div class="max-w-2xl mx-auto space-y-8">
                    <!-- Info Dettaglio -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                        <div class="space-y-4">
                            <h4 class="text-xs font-bold uppercase tracking-wider text-brand-orange">Informazioni Personali</h4>
                            <div class="space-y-3">
                                <a href="mailto:paolo.cresto1045@gmail.com" class="flex items-center gap-3 group">
                                    <div class="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
                                        <span class="material-symbols-outlined !text-sm">mail</span>
                                    </div>
                                    <span class="text-sm font-medium opacity-80 group-hover:opacity-100 group-hover:text-brand-orange transition-colors">paolo.cresto1045@gmail.com</span>
                                </a>
                                <a href="tel:+393473140794" class="flex items-center gap-3 group">
                                    <div class="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
                                        <span class="material-symbols-outlined !text-sm">call</span>
                                    </div>
                                    <span class="text-sm font-medium opacity-80 group-hover:opacity-100 group-hover:text-brand-orange transition-colors">+39 347 314 0794</span>
                                </a>
                                <div class="flex items-center gap-3">
                                    <div class="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange">
                                        <span class="material-symbols-outlined !text-sm">location_on</span>
                                    </div>
                                    <span class="text-sm font-medium opacity-80">Torino / Robassomero (Italia)</span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- QR codes -->
                        <div class="space-y-4">
                            <h4 class="text-xs font-bold uppercase tracking-wider text-brand-orange">Scan QR for Profile</h4>
                            <div class="flex gap-4">
                                <div class="p-3 bg-white rounded-xl flex flex-col items-center gap-1 shadow-md w-1/2">
                                    <img src="IMG/instagram_qr.png" alt="Instagram QR" class="w-full aspect-square object-contain"/>
                                    <span class="text-[9px] font-bold text-gray-800 uppercase tracking-wide">Instagram</span>
                                </div>
                                <div class="p-3 bg-white rounded-xl flex flex-col items-center gap-1 shadow-md w-1/2">
                                    <img src="IMG/linkedin_qr.png" alt="LinkedIn QR" class="w-full aspect-square object-contain"/>
                                    <span class="text-[9px] font-bold text-gray-800 uppercase tracking-wide">LinkedIn</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }
    };

    // 4. Open Modal Section
    function openModal(section) {
        const content = sectionContent[section];
        if (content) {
            modalTitle.textContent = content.title;
            modalText.innerHTML = content.html;
            
            // Set transitions active
            document.body.classList.add('overlay-active');
            overlay.classList.add('active');
            overlay.classList.remove('pointer-events-none');
            
            // Focus overlay
            overlay.focus();
        }
    }

    // 5. Close Modal Section
    function closeModal() {
        document.body.classList.remove('overlay-active');
        overlay.classList.remove('active');
        overlay.classList.add('pointer-events-none');
    }

    // Set click events on radial items
    radialItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const section = item.getAttribute('data-section');
            if (section) {
                openModal(section);
            }
        });
    });

    // Modal control events
    closeBtn.addEventListener('click', closeModal);
    backBtn.addEventListener('click', closeModal);

    // Close on click outside modal card content
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeModal();
        }
    });

    // Close modal on Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closeModal();
        }
    });

    // Social footer click triggers
    const instagramTrigger = document.getElementById('footer-instagram');
    const linkedinTrigger = document.getElementById('footer-linkedin');
    
    instagramTrigger.addEventListener('click', () => openModal('contatti'));
    linkedinTrigger.addEventListener('click', () => openModal('contatti'));

});
