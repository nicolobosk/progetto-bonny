import { Startup, Incentivo, Cittadino } from "./classi";

// 1. ISTANZIARE ALCUNE STARTUP NEL SETTORE SPORTIVO

const bonny = new Startup(
    "Bonny",
    "piattaforma per accesso a bonus e benessere",
    "Startup che semplifica l’accesso ai bonus statali e collega i cittadini ad associazioni sportive.",
    [
        "Piattaforma digitale bonus",
        "Connessione con associazioni sportive",
        "Consulenza fiscale semplificata"
    ]
);

const fitTrack = new Startup(
    "FitTrack",
    "app per il fitness",
    "App che traccia allenamenti e suggerisce programmi personalizzati.",
    ["App di tracking allenamenti", "Piani di allenamento personalizzati"]
);

const sportGearLab = new Startup(
    "SportGear Lab",
    "attrezzature sportive innovative",
    "Sviluppo di attrezzatura sportiva smart per il monitoraggio delle performance.",
    ["Wearable sportivi", "Attrezzatura smart per palestre"]
);


// 2. ISTANZIARE ALCUNI INCENTIVI STATALI

const incentivoSportGiovani = new Incentivo(
    "INC-SP-GIOVANI-001",
    "Bonus per favorire l’accesso allo sport per i giovani tra 18 e 25 anni.",
    200,
    "ISEE inferiore a 25.000€, età compresa tra 18 e 25 anni."
);

const incentivoPalestre = new Incentivo(
    "INC-PALESTRE-002",
    "Incentivo per startup che collaborano con palestre e associazioni sportive locali.",
    5000,
    "Startup che dimostrano convenzioni attive con almeno 5 associazioni sportive."
);

const incentivoTecnologiaSportiva = new Incentivo(
    "INC-TEC-SPORT-003",
    "Incentivo per lo sviluppo di soluzioni tecnologiche innovative per l’attività fisica.",
    10000,
    "Startup che sviluppano software o hardware per il miglioramento delle performance sportive."
);


// 3. CREARE UNO O PIÙ CITTADINI INTERESSATI ALLE INIZIATIVE SPORTIVE

const cittadino1 = new Cittadino(
    "Luca",
    "Bianchi",
    24,
    ["corsa", "palestra", "calisthenics"]
);

const cittadino2 = new Cittadino(
    "Sara",
    "Verdi",
    32,
    ["yoga", "pilates", "nuoto"]
);


// 4. TESTARE LA LOGICA DI ASSEGNAZIONE DEGLI INCENTIVI ALLE STARTUP

incentivoSportGiovani.AssegnaAStartup(bonny);
incentivoPalestre.AssegnaAStartup(bonny);
incentivoTecnologiaSportiva.AssegnaAStartup(fitTrack);


// 5. TESTARE LA PARTECIPAZIONE DEI CITTADINI ALLE ATTIVITÀ PROMOSSE

cittadino1.partecipaAttività(bonny);
cittadino1.partecipaAttività(fitTrack);

cittadino2.partecipaAttività(bonny);
cittadino2.partecipaAttività(sportGearLab);
