export class Giocatori {
    nome?: string;
    team?: string;
    bonusGol?: number;
    ruolo: Ruolo = Ruolo.BHO;
    quotazione?: number;
}

export enum Ruolo {
    A = "A",
    C = "C",
    D = "D",
    P = "P",
    BHO = "BHO"
}