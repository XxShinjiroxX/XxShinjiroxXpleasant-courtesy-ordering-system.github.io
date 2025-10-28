/*
============================================
BENVENUTO NEL TUO PRIMO PROGETTO JAVASCRIPT!
============================================

Questo file contiene tutta la logica del tuo catalogo pesce.
Leggi i commenti per capire cosa fa ogni parte del codice.

CONCETTI CHIAVE CHE IMPARERAI:
1. Variabili e oggetti per memorizzare dati
2. Funzioni per organizzare il codice
3. Event listeners per gestire i click
4. DOM manipulation per modificare la pagina
5. Template literals per creare HTML dinamicamente
*/

// ============================================
// DATI DELL'APPLICAZIONE
// ============================================

/* 
  Questi sono i DATI del nostro catalogo pesce.
  Un "array" (lista) di oggetti, dove ogni oggetto è una categoria.
  Ogni categoria ha: nome, colore, icona e un array di prodotti.
*/
const categorie = [
    {
        nome: "Pesce Fresco",
        colore: "#0EA5E9",
        icona: "🐟",
        descrizione: "Pesce freschissimo del giorno, pescato nelle migliori acque",
        prodotti: [
            {
                nome: "Salmone Atlantico",
                prezzo: "€28/kg",
                descrizione: "Ricco di omega-3, carne soda e saporita, perfetto per sashimi",
                emoji: "🍣"
            },
            {
                nome: "Branzino Mediterraneo",
                prezzo: "€18/kg",
                descrizione: "Pesce bianco delicato, ideale per cotture al forno e in crosta",
                emoji: "🐟"
            },
            {
                nome: "Orata di Allevamento",
                prezzo: "€16/kg",
                descrizione: "Carne tenera e gustosa, ottima alla griglia o al cartoccio",
                emoji: "🐠"
            },
            {
                nome: "Tonno Rosso",
                prezzo: "€45/kg",
                descrizione: "Pregiato tonno del Mediterraneo, perfetto per carpacci e tartare",
                emoji: "🍤"
            }
        ]
    },
    {
        nome: "Pesce Surgelato",
        colore: "#06B6D4",
        icona: "🧊",
        descrizione: "Qualità garantita con il freddo, freschezza preservata",
        prodotti: [
            {
                nome: "Merluzzo del Nord",
                prezzo: "€12/kg",
                descrizione: "Carne bianca e sfaldosa, ideale per fish & chips e zuppe",
                emoji: "🐟"
            },
            {
                nome: "Nasello Atlantico",
                prezzo: "€10/kg",
                descrizione: "Pesce magro e delicato, perfetto per preparazioni leggere",
                emoji: "🐠"
            },
            {
                nome: "Platessa Europea",
                prezzo: "€14/kg",
                descrizione: "Pesce piatto dal sapore dolce, ottimo in padella con burro",
                emoji: "🐟"
            },
            {
                nome: "Gamberi Tropicali",
                prezzo: "€22/kg",
                descrizione: "Gamberi grandi e succosi, ideali per risotti e pasta",
                emoji: "🦐"
            }
        ]
    },
    {
        nome: "Crostacei",
        colore: "#F97316",
        icona: "🦀",
        descrizione: "Sapori intensi del mare, crostacei di prima qualità",
        prodotti: [
            {
                nome: "Gamberi Rossi",
                prezzo: "€35/kg",
                descrizione: "Gamberi rossi di Mazara, dolci e pregiati, ideali crudi",
                emoji: "🦐"
            },
            {
                nome: "Granchi di Mare",
                prezzo: "€25/kg",
                descrizione: "Granchi freschi ricchi di polpa, perfetti per zuppe",
                emoji: "🦀"
            },
            {
                nome: "Aragoste del Maine",
                prezzo: "€65/kg",
                descrizione: "Aragoste pregiate con polpa dolce e consistente",
                emoji: "🦞"
            },
            {
                nome: "Scampi Adriatici",
                prezzo: "€40/kg",
                descrizione: "Scampi dell'Adriatico, dolci e profumati, ottimi alla griglia",
                emoji: "🦐"
            }
        ]
    },
    {
        nome: "Molluschi",
        colore: "#8B5CF6",
        icona: "🦪",
        descrizione: "Tesori del mare, molluschi freschi e saporiti",
        prodotti: [
            {
                nome: "Cozze di Taranto",
                prezzo: "€8/kg",
                descrizione: "Cozze nere carnose e saporite, perfette per l'impepata",
                emoji: "🦪"
            },
            {
                nome: "Vongole Veraci",
                prezzo: "€15/kg",
                descrizione: "Vongole dal sapore intenso, ideali per spaghetti alle vongole",
                emoji: "🦪"
            },
            {
                nome: "Calamari Freschi",
                prezzo: "€18/kg",
                descrizione: "Calamari teneri del Mediterraneo, ottimi fritti o in umido",
                emoji: "🦑"
            },
            {
                nome: "Polpo del Pacifico",
                prezzo: "€22/kg",
                descrizione: "Polpo di grande taglia, morbido e saporito dopo cottura",
                emoji: "🐙"
            }
        ]
    },
    {
        nome: "Pesce Affumicato",
        colore: "#EF4444",
        icona: "🔥",
        descrizione: "Tradizione e sapore, affumicature artigianali di qualità",
        prodotti: [
            {
                nome: "Salmone Affumicato Norvegese",
                prezzo: "€45/kg",
                descrizione: "Affumicato a freddo con legno di faggio, sapore delicato",
                emoji: "🍣"
            },
            {
                nome: "Trota Affumicata",
                prezzo: "€32/kg",
                descrizione: "Trota di fiume affumicata, ideale per antipasti e tartine",
                emoji: "🐟"
            },
            {
                nome: "Anguilla Affumicata",
                prezzo: "€55/kg",
                descrizione: "Specialità tradizionale, anguilla affumicata con erbe",
                emoji: "🐍"
            },
            {
                nome: "Baccalà Norvegese",
                prezzo: "€38/kg",
                descrizione: "Merluzzo essiccato e salato, base per piatti tradizionali",
                emoji: "🐟"
            }
        ]
    }
];

// ============================================
// FUNZIONI PRINCIPALI
// ============================================

/*
  Questa funzione viene chiamata quando la pagina è caricata.
  Genera dinamicamente le card delle categorie nel HTML.
*/
function caricaCatalogo() {
    // Trova il contenitore nel HTML dove inserire le categorie
    const container = document.getElementById('catalogoContainer');
    
    // Per ogni categoria nell'array...
    categorie.forEach((categoria, index) => {
        // Crea una card HTML usando template literals (le backtick ``)
        const cardHTML = `
            <div class="categoria-card fade-in" onclick="vaiACategoria(${index})" style="animation-delay: ${index * 0.1}s">
                <div class="categoria-header" style="background: linear-gradient(135deg, ${categoria.colore}15, ${categoria.colore}05)">
                    <div class="categoria-icona">${categoria.icona}</div>
                    <h3 class="categoria-nome">${categoria.nome}</h3>
                    <p class="categoria-descrizione">${categoria.descrizione}</p>
                </div>
            </div>
        `;
        
        // Aggiunge la card al contenitore
        container.innerHTML += cardHTML;
    });
}

/*
  Questa funzione naviga verso la pagina di una specifica categoria.
  Riceve l'indice della categoria cliccata.
*/
function vaiACategoria(indiceCategoria) {
    // Salva quale categoria è stata selezionata nel localStorage del browser
    localStorage.setItem('categoriaSelezionata', indiceCategoria);
    
    // Naviga alla pagina dei prodotti
    window.location.href = 'prodotti.html';
}

/*
  Questa funzione carica i prodotti di una categoria specifica.
  Viene usata nella pagina prodotti.html
*/
function caricaProdotti() {
    // Recupera quale categoria era stata selezionata
    const indiceCategoria = localStorage.getItem('categoriaSelezionata');
    
    // Se non c'è nessuna categoria selezionata, torna al catalogo
    if (indiceCategoria === null) {
        window.location.href = 'index.html';
        return;
    }
    
    // Ottieni la categoria selezionata dall'array
    const categoria = categorie[indiceCategoria];
    
    // Aggiorna il titolo della pagina
    document.title = `${categoria.nome} - Mare Fresco`;
    
    // Trova gli elementi nel HTML da aggiornare
    const titoloCategoria = document.getElementById('titoloCategoria');
    const containerProdotti = document.getElementById('containerProdotti');
    
    // Aggiorna il titolo
    if (titoloCategoria) {
        titoloCategoria.innerHTML = `${categoria.icona} ${categoria.nome}`;
        titoloCategoria.style.color = categoria.colore;
    }
    
    // Genera le card dei prodotti
    if (containerProdotti) {
        containerProdotti.innerHTML = '';
        
        categoria.prodotti.forEach((prodotto, index) => {
            const prodottoHTML = `
                <div class="prodotto-card fade-in" style="animation-delay: ${index * 0.1}s">
                    <div class="prodotto-emoji">${prodotto.emoji}</div>
                    <h3 class="prodotto-nome">${prodotto.nome}</h3>
                    <div class="prodotto-prezzo">${prodotto.prezzo}</div>
                    <p class="prodotto-descrizione">${prodotto.descrizione}</p>
                </div>
            `;
            
            containerProdotti.innerHTML += prodottoHTML;
        });
    }
}

/*
  Funzione per tornare al catalogo principale
*/
function tornaAlCatalogo() {
    // Rimuove la categoria selezionata dalla memoria
    localStorage.removeItem('categoriaSelezionata');
    
    // Naviga al catalogo principale
    window.location.href = 'index.html';
}

// ============================================
// INIZIALIZZAZIONE
// ============================================

/*
  Questo codice viene eseguito quando la pagina è completamente caricata.
  È come il "main" di un programma tradizionale.
*/
document.addEventListener('DOMContentLoaded', function() {
    console.log('🐟 Mare Fresco - Sito caricato correttamente!');
    
    // Se siamo nella pagina principale (index.html)
    if (document.getElementById('catalogoContainer')) {
        caricaCatalogo();
    }
    
    // Se siamo nella pagina prodotti (prodotti.html)
    if (document.getElementById('containerProdotti')) {
        caricaProdotti();
    }
});

// ============================================
// FUNZIONI UTILI AGGIUNTIVE
// ============================================

/*
  Funzione per cercare prodotti (può essere utile in futuro)
*/
function cercaProdotti(termineRicerca) {
    const risultati = [];
    
    categorie.forEach(categoria => {
        categoria.prodotti.forEach(prodotto => {
            if (prodotto.nome.toLowerCase().includes(termineRicerca.toLowerCase()) ||
                prodotto.descrizione.toLowerCase().includes(termineRicerca.toLowerCase())) {
                risultati.push({
                    ...prodotto,
                    categoria: categoria.nome
                });
            }
        });
    });
    
    return risultati;
}

/*
  Funzione per ottenere tutti i prodotti di tutte le categorie
*/
function ottieniTuttiProdotti() {
    const tuttiProdotti = [];
    
    categorie.forEach(categoria => {
        categoria.prodotti.forEach(prodotto => {
            tuttiProdotti.push({
                ...prodotto,
                categoria: categoria.nome,
                coloreCategoria: categoria.colore
            });
        });
    });
    
    return tuttiProdotti;
}

/*
  Debug: Stampa informazioni utili nella console del browser
  (Premi F12 e vai su "Console" per vedere questi messaggi)
*/
console.log('📊 Statistiche catalogo:');
console.log(`- Numero categorie: ${categorie.length}`);
console.log(`- Totale prodotti: ${ottieniTuttiProdotti().length}`);
console.log('- Categorie disponibili:', categorie.map(cat => cat.nome));