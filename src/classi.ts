import { IStartup, IIncentivo, ICittadino } from "./interfacce";

// Classe che rappresenta una startup innovativa nel mondo dello sport
export class Startup implements IStartup {
    nome: string;
    settoreDiFocus: string;
    descrizione: string;
    prodottiServiziOfferti: string[];

    // Tracciamo anche gli incentivi ricevuti
    incentiviRicevuti: IIncentivo[] = [];

    constructor(
        nome: string,
        settoreDiFocus: string,
        descrizione: string,
        prodottiServiziOfferti: string[]
    ) {
        this.nome = nome;
        this.settoreDiFocus = settoreDiFocus;
        this.descrizione = descrizione;
        this.prodottiServiziOfferti = prodottiServiziOfferti;
    }

    // La startup riceve un incentivo statale specifico
    riceviIIncentivo(incentivo: IIncentivo): void {
        this.incentiviRicevuti.push(incentivo);
        console.log(
            `La startup "${this.nome}" ha ricevuto l'incentivo ${incentivo.codiceIdentificativo} per un valore di ${incentivo.valoreIncentivo}.`
        );
    }
}

// Classe che rappresenta un incentivo statale per promuovere lo sport
export class Incentivo implements IIncentivo {
    codiceIdentificativo: string;
    descrizione: string;
    valoreIncentivo: number;
    criteriEleggibilita: string;

    // Tracciamo a quale startup è stato assegnato (se presente)
    startupAssegnata?: IStartup;

    constructor(
        codiceIdentificativo: string,
        descrizione: string,
        valoreIncentivo: number,
        criteriEleggibilita: string
    ) {
        this.codiceIdentificativo = codiceIdentificativo;
        this.descrizione = descrizione;
        this.valoreIncentivo = valoreIncentivo;
        this.criteriEleggibilita = criteriEleggibilita;
    }

    // Assegna l'incentivo a una startup qualificata
    AssegnaAStartup(startup: IStartup): void {
        this.startupAssegnata = startup;
        // lato startup, registriamo l'incentivo ricevuto
        startup.riceviIIncentivo(this);

        console.log(
            `L'incentivo ${this.codiceIdentificativo} è stato assegnato alla startup "${startup.nome}".`
        );
    }
}

// Classe che rappresenta un cittadino interessato allo stile di vita attivo
export class Cittadino implements ICittadino {
    nome: string;
    cognome: string;
    eta: number;
    interessiSportivi: string[];

    // Tracciamo le startup / iniziative a cui ha partecipato
    attivitàPartecipate: IStartup[] = [];

    constructor(
        nome: string,
        cognome: string,
        eta: number,
        interessiSportivi: string[]
    ) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.interessiSportivi = interessiSportivi;
    }

    // Il cittadino partecipa alle attività promosse da una startup
    partecipaAttività(startup: IStartup): void {
        this.attivitàPartecipate.push(startup);
        console.log(
            `${this.nome} ${this.cognome} partecipa alle attività offerte dalla startup "${startup.nome}".`
        );
    }
}
