// Interfaccia che rappresenta una startup innovativa nel mondo dello sport
export interface IStartup {
    nome: string;
    settoreDiFocus: string; // es: "app per il fitness", "attrezzature sportive innovative"
    descrizione: string;
    prodottiServiziOfferti: string[];

    riceviIIncentivo(incentivo: IIncentivo): void;
}

// Interfaccia che rappresenta un incentivo statale per lo sport
export interface IIncentivo {
    codiceIdentificativo: string;
    descrizione: string;
    valoreIncentivo: number;
    criteriEleggibilita: string;

    AssegnaAStartup(startup: IStartup): void;
}

// Interfaccia che rappresenta un cittadino che partecipa alle iniziative
export interface ICittadino {
    nome: string;
    cognome: string;
    eta: number;
    interessiSportivi: string[];

    partecipaAttività(startup: IStartup): void;
}
