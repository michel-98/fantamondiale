import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Giocatori, Ruolo } from './Giocatori';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'fantamondiale';

  displayedColumns: string[] = ['nome', 'team', 'bonusGol', 'ruolo', 'quotazione'];
  displayedColumns2: string[] = ['nome1', 'team1', 'bonusGol1', 'ruolo1', 'quotazione1'];

  dataSource = new MatTableDataSource<Giocatori>([
    {
      "nome": "BARSHAM",
      "team": "Qatar",
      "bonusGol": 7,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "AL-SHEEB",
      "team": "Qatar",
      "bonusGol": 7,
      "ruolo": Ruolo.P,
      "quotazione": 5
    },
    {
      "nome": "HASSAN Y.",
      "team": "Qatar",
      "bonusGol": 7,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "SALMAN",
      "team": "Qatar",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 4
    },
    {
      "nome": "AL-RAWI",
      "team": "Qatar",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 4
    },
    {
      "nome": "GABER ABDULSALLAM",
      "team": "Qatar",
      "bonusGol": 15,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "KHOUKHI",
      "team": "Qatar",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 3
    },
    {
      "nome": "PEDRO MIGUEL (RO'-RO')",
      "team": "Qatar",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 4
    },
    {
      "nome": "HASSAN A.",
      "team": "Qatar",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 5
    },
    {
      "nome": "KHODER",
      "team": "Qatar",
      "bonusGol": 15,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "AL AMIN AHMED",
      "team": "Qatar",
      "bonusGol": 14,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "BOUDIAF",
      "team": "Qatar",
      "bonusGol": 11,
      "ruolo": Ruolo.C,
      "quotazione": 5
    },
    {
      "nome": "AL-HAJRI",
      "team": "Qatar",
      "bonusGol": 14,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "MADIBO",
      "team": "Qatar",
      "bonusGol": 14,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "WAAD",
      "team": "Qatar",
      "bonusGol": 12,
      "ruolo": Ruolo.C,
      "quotazione": 3
    },
    {
      "nome": "HATEM",
      "team": "Qatar",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 5
    },
    {
      "nome": "MASHAAL",
      "team": "Qatar",
      "bonusGol": 15,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "ASAD",
      "team": "Qatar",
      "bonusGol": 11,
      "ruolo": Ruolo.C,
      "quotazione": 4
    },
    {
      "nome": "AL-HAYDOS",
      "team": "Qatar",
      "bonusGol": 8,
      "ruolo": Ruolo.C,
      "quotazione": 7
    },
    {
      "nome": "AFIF",
      "team": "Qatar",
      "bonusGol": 7,
      "ruolo": Ruolo.A,
      "quotazione": 7
    },
    {
      "nome": "MUNEER MAZEED",
      "team": "Qatar",
      "bonusGol": 15,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "MOHAMMED",
      "team": "Qatar",
      "bonusGol": 13,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "AL-HADHRAMI",
      "team": "Qatar",
      "bonusGol": 15,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "ALMOEZ ALI",
      "team": "Qatar",
      "bonusGol": 6,
      "ruolo": Ruolo.A,
      "quotazione": 10
    },
    {
      "nome": "ALAAELDIN",
      "team": "Qatar",
      "bonusGol": 15,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "MUNTARI",
      "team": "Qatar",
      "bonusGol": 12,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "BIJLOW",
      "team": "Olanda",
      "bonusGol": 3,
      "ruolo": Ruolo.P,
      "quotazione": 2
    },
    {
      "nome": "NOPPERT",
      "team": "Olanda",
      "bonusGol": 3,
      "ruolo": Ruolo.P,
      "quotazione": 10
    },
    {
      "nome": "PASVEER",
      "team": "Olanda",
      "bonusGol": 3,
      "ruolo": Ruolo.P,
      "quotazione": 2
    },
    {
      "nome": "DE LIGT",
      "team": "Olanda",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 8
    },
    {
      "nome": "DE VRIJ",
      "team": "Olanda",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 4
    },
    {
      "nome": "TIMBER",
      "team": "Olanda",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 9
    },
    {
      "nome": "AKE'",
      "team": "Olanda",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 9
    },
    {
      "nome": "VAN DIJK",
      "team": "Olanda",
      "bonusGol": 8,
      "ruolo": Ruolo.D,
      "quotazione": 12
    },
    {
      "nome": "DUMFRIES",
      "team": "Olanda",
      "bonusGol": 6,
      "ruolo": Ruolo.D,
      "quotazione": 15
    },
    {
      "nome": "FRIMPONG",
      "team": "Olanda",
      "bonusGol": 8,
      "ruolo": Ruolo.D,
      "quotazione": 3
    },
    {
      "nome": "BLIND",
      "team": "Olanda",
      "bonusGol": 8,
      "ruolo": Ruolo.D,
      "quotazione": 10
    },
    {
      "nome": "MALACIA",
      "team": "Olanda",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 3
    },
    {
      "nome": "DE ROON",
      "team": "Olanda",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 5
    },
    {
      "nome": "KOOPMEINERS",
      "team": "Olanda",
      "bonusGol": 7,
      "ruolo": Ruolo.C,
      "quotazione": 10
    },
    {
      "nome": "TAYLOR",
      "team": "Olanda",
      "bonusGol": 12,
      "ruolo": Ruolo.C,
      "quotazione": 3
    },
    {
      "nome": "DE JONG F.",
      "team": "Olanda",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 9
    },
    {
      "nome": "XAVI SIMONS",
      "team": "Olanda",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 2
    },
    {
      "nome": "BERGHUIS",
      "team": "Olanda",
      "bonusGol": 8,
      "ruolo": Ruolo.C,
      "quotazione": 12
    },
    {
      "nome": "KLAASSEN",
      "team": "Olanda",
      "bonusGol": 7,
      "ruolo": Ruolo.C,
      "quotazione": 12
    },
    {
      "nome": "GAKPO",
      "team": "Olanda",
      "bonusGol": 7,
      "ruolo": Ruolo.C,
      "quotazione": 16
    },
    {
      "nome": "BERGWIJN",
      "team": "Olanda",
      "bonusGol": 5,
      "ruolo": Ruolo.A,
      "quotazione": 19
    },
    {
      "nome": "LANG",
      "team": "Olanda",
      "bonusGol": 11,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "DEPAY",
      "team": "Olanda",
      "bonusGol": 4,
      "ruolo": Ruolo.A,
      "quotazione": 27
    },
    {
      "nome": "DE JONG L.",
      "team": "Olanda",
      "bonusGol": 8,
      "ruolo": Ruolo.A,
      "quotazione": 5
    },
    {
      "nome": "JANSSEN",
      "team": "Olanda",
      "bonusGol": 6,
      "ruolo": Ruolo.A,
      "quotazione": 12
    },
    {
      "nome": "WEGHORST",
      "team": "Olanda",
      "bonusGol": 9,
      "ruolo": Ruolo.A,
      "quotazione": 3
    },
    {
      "nome": "RAMIREZ M.",
      "team": "Ecuador",
      "bonusGol": 6,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "GALINDEZ",
      "team": "Ecuador",
      "bonusGol": 6,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "DOMINGUEZ A.",
      "team": "Ecuador",
      "bonusGol": 6,
      "ruolo": Ruolo.P,
      "quotazione": 6
    },
    {
      "nome": "HINCAPIE'",
      "team": "Ecuador",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 7
    },
    {
      "nome": "POROZO",
      "team": "Ecuador",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 6
    },
    {
      "nome": "PACHO",
      "team": "Ecuador",
      "bonusGol": 15,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "TORRES FEL.",
      "team": "Ecuador",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 4
    },
    {
      "nome": "ARBOLEDA",
      "team": "Ecuador",
      "bonusGol": 13,
      "ruolo": Ruolo.D,
      "quotazione": 2
    },
    {
      "nome": "ARREAGA",
      "team": "Ecuador",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 2
    },
    {
      "nome": "PRECIADO AN.",
      "team": "Ecuador",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 6
    },
    {
      "nome": "ESTUPINAN",
      "team": "Ecuador",
      "bonusGol": 8,
      "ruolo": Ruolo.D,
      "quotazione": 8
    },
    {
      "nome": "PALACIOS D.",
      "team": "Ecuador",
      "bonusGol": 13,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "GRUEZO",
      "team": "Ecuador",
      "bonusGol": 11,
      "ruolo": Ruolo.C,
      "quotazione": 4
    },
    {
      "nome": "MENDEZ J.",
      "team": "Ecuador",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 6
    },
    {
      "nome": "CAICEDO M.",
      "team": "Ecuador",
      "bonusGol": 8,
      "ruolo": Ruolo.C,
      "quotazione": 10
    },
    {
      "nome": "CIFUENTES",
      "team": "Ecuador",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 7
    },
    {
      "nome": "FRANCO",
      "team": "Ecuador",
      "bonusGol": 11,
      "ruolo": Ruolo.C,
      "quotazione": 3
    },
    {
      "nome": "SARMIENTO",
      "team": "Ecuador",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 2
    },
    {
      "nome": "PRECIADO AY.",
      "team": "Ecuador",
      "bonusGol": 11,
      "ruolo": Ruolo.A,
      "quotazione": 3
    },
    {
      "nome": "PLATA",
      "team": "Ecuador",
      "bonusGol": 8,
      "ruolo": Ruolo.A,
      "quotazione": 10
    },
    {
      "nome": "IBARRA",
      "team": "Ecuador",
      "bonusGol": 7,
      "ruolo": Ruolo.A,
      "quotazione": 12
    },
    {
      "nome": "MENA",
      "team": "Ecuador",
      "bonusGol": 7,
      "ruolo": Ruolo.A,
      "quotazione": 13
    },
    {
      "nome": "RODRIGUEZ K.",
      "team": "Ecuador",
      "bonusGol": 15,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "ESTRADA",
      "team": "Ecuador",
      "bonusGol": 6,
      "ruolo": Ruolo.A,
      "quotazione": 13
    },
    {
      "nome": "VALENCIA E.",
      "team": "Ecuador",
      "bonusGol": 7,
      "ruolo": Ruolo.A,
      "quotazione": 10
    },
    {
      "nome": "REASCO",
      "team": "Ecuador",
      "bonusGol": 13,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "MENDY E.",
      "team": "Senegal",
      "bonusGol": 5,
      "ruolo": Ruolo.P,
      "quotazione": 9
    },
    {
      "nome": "GOMIS",
      "team": "Senegal",
      "bonusGol": 5,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "DIENG S.",
      "team": "Senegal",
      "bonusGol": 5,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "KOULIBALY",
      "team": "Senegal",
      "bonusGol": 8,
      "ruolo": Ruolo.D,
      "quotazione": 10
    },
    {
      "nome": "DIALLO",
      "team": "Senegal",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 7
    },
    {
      "nome": "CISSE' P.A.",
      "team": "Senegal",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 4
    },
    {
      "nome": "MENDY F.",
      "team": "Senegal",
      "bonusGol": 13,
      "ruolo": Ruolo.D,
      "quotazione": 2
    },
    {
      "nome": "SABALY",
      "team": "Senegal",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 5
    },
    {
      "nome": "JAKOBS",
      "team": "Senegal",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 2
    },
    {
      "nome": "BALLO-TOURE'",
      "team": "Senegal",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 5
    },
    {
      "nome": "GUEYE P.",
      "team": "Senegal",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 6
    },
    {
      "nome": "MENDY N.",
      "team": "Senegal",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 5
    },
    {
      "nome": "KOUYATE'",
      "team": "Senegal",
      "bonusGol": 11,
      "ruolo": Ruolo.C,
      "quotazione": 4
    },
    {
      "nome": "LOUM",
      "team": "Senegal",
      "bonusGol": 13,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "NAME",
      "team": "Senegal",
      "bonusGol": 13,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "GUEYE I.",
      "team": "Senegal",
      "bonusGol": 7,
      "ruolo": Ruolo.C,
      "quotazione": 8
    },
    {
      "nome": "SARR P.M.",
      "team": "Senegal",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 4
    },
    {
      "nome": "CISS P.",
      "team": "Senegal",
      "bonusGol": 13,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "NDIAYE",
      "team": "Senegal",
      "bonusGol": 12,
      "ruolo": Ruolo.C,
      "quotazione": 2
    },
    {
      "nome": "SARR I.",
      "team": "Senegal",
      "bonusGol": 5,
      "ruolo": Ruolo.A,
      "quotazione": 14
    },
    {
      "nome": "DIATTA",
      "team": "Senegal",
      "bonusGol": 6,
      "ruolo": Ruolo.A,
      "quotazione": 12
    },
    {
      "nome": "JACKSON",
      "team": "Senegal",
      "bonusGol": 11,
      "ruolo": Ruolo.A,
      "quotazione": 5
    },
    {
      "nome": "MANE'",
      "team": "Senegal",
      "bonusGol": 3,
      "ruolo": Ruolo.A,
      "quotazione": 25
    },
    {
      "nome": "DIA",
      "team": "Senegal",
      "bonusGol": 4,
      "ruolo": Ruolo.A,
      "quotazione": 21
    },
    {
      "nome": "DIENG B.",
      "team": "Senegal",
      "bonusGol": 11,
      "ruolo": Ruolo.A,
      "quotazione": 2
    },
    {
      "nome": "DIEDHIOU",
      "team": "Senegal",
      "bonusGol": 13,
      "ruolo": Ruolo.A,
      "quotazione": 2
    },
    {
      "nome": "PICKFORD",
      "team": "Inghilterra",
      "bonusGol": 3,
      "ruolo": Ruolo.P,
      "quotazione": 13
    },
    {
      "nome": "POPE",
      "team": "Inghilterra",
      "bonusGol": 3,
      "ruolo": Ruolo.P,
      "quotazione": 2
    },
    {
      "nome": "RAMSDALE",
      "team": "Inghilterra",
      "bonusGol": 3,
      "ruolo": Ruolo.P,
      "quotazione": 2
    },
    {
      "nome": "WHITE",
      "team": "Inghilterra",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 4
    },
    {
      "nome": "MAGUIRE",
      "team": "Inghilterra",
      "bonusGol": 8,
      "ruolo": Ruolo.D,
      "quotazione": 10
    },
    {
      "nome": "STONES",
      "team": "Inghilterra",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 8
    },
    {
      "nome": "DIER",
      "team": "Inghilterra",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 9
    },
    {
      "nome": "COADY",
      "team": "Inghilterra",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 3
    },
    {
      "nome": "WALKER",
      "team": "Inghilterra",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 9
    },
    {
      "nome": "ALEXANDER-ARNOLD",
      "team": "Inghilterra",
      "bonusGol": 8,
      "ruolo": Ruolo.D,
      "quotazione": 9
    },
    {
      "nome": "TRIPPIER",
      "team": "Inghilterra",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 9
    },
    {
      "nome": "SHAW",
      "team": "Inghilterra",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 9
    },
    {
      "nome": "RICE",
      "team": "Inghilterra",
      "bonusGol": 8,
      "ruolo": Ruolo.C,
      "quotazione": 9
    },
    {
      "nome": "PHILLIPS",
      "team": "Inghilterra",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 6
    },
    {
      "nome": "BELLINGHAM",
      "team": "Inghilterra",
      "bonusGol": 7,
      "ruolo": Ruolo.C,
      "quotazione": 14
    },
    {
      "nome": "GALLAGHER",
      "team": "Inghilterra",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 3
    },
    {
      "nome": "HENDERSON J.",
      "team": "Inghilterra",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 5
    },
    {
      "nome": "SAKA",
      "team": "Inghilterra",
      "bonusGol": 6,
      "ruolo": Ruolo.C,
      "quotazione": 15
    },
    {
      "nome": "MOUNT",
      "team": "Inghilterra",
      "bonusGol": 6,
      "ruolo": Ruolo.C,
      "quotazione": 19
    },
    {
      "nome": "MADDISON",
      "team": "Inghilterra",
      "bonusGol": 8,
      "ruolo": Ruolo.C,
      "quotazione": 4
    },
    {
      "nome": "GREALISH",
      "team": "Inghilterra",
      "bonusGol": 6,
      "ruolo": Ruolo.C,
      "quotazione": 10
    },
    {
      "nome": "FODEN",
      "team": "Inghilterra",
      "bonusGol": 5,
      "ruolo": Ruolo.C,
      "quotazione": 26
    },
    {
      "nome": "STERLING",
      "team": "Inghilterra",
      "bonusGol": 4,
      "ruolo": Ruolo.A,
      "quotazione": 29
    },
    {
      "nome": "RASHFORD",
      "team": "Inghilterra",
      "bonusGol": 6,
      "ruolo": Ruolo.A,
      "quotazione": 8
    },
    {
      "nome": "KANE",
      "team": "Inghilterra",
      "bonusGol": 3,
      "ruolo": Ruolo.A,
      "quotazione": 41
    },
    {
      "nome": "WILSON",
      "team": "Inghilterra",
      "bonusGol": 7,
      "ruolo": Ruolo.A,
      "quotazione": 6
    },
    {
      "nome": "ABEDZADEH",
      "team": "Iran",
      "bonusGol": 7,
      "ruolo": Ruolo.P,
      "quotazione": 5
    },
    {
      "nome": "BEIRANVAND",
      "team": "Iran",
      "bonusGol": 7,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "NIAZMAND",
      "team": "Iran",
      "bonusGol": 7,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "HOSSEINI H.",
      "team": "Iran",
      "bonusGol": 7,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "HOSSEINI M.",
      "team": "Iran",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 4
    },
    {
      "nome": "KANAANI",
      "team": "Iran",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 5
    },
    {
      "nome": "POURALIGANJI",
      "team": "Iran",
      "bonusGol": 13,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "KHALILZADEH",
      "team": "Iran",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 2
    },
    {
      "nome": "MOHARRAMI",
      "team": "Iran",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 5
    },
    {
      "nome": "REZAEIAN",
      "team": "Iran",
      "bonusGol": 13,
      "ruolo": Ruolo.D,
      "quotazione": 2
    },
    {
      "nome": "JALALI",
      "team": "Iran",
      "bonusGol": 15,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "MOHAMMADI",
      "team": "Iran",
      "bonusGol": 14,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "HAJSAFI",
      "team": "Iran",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 6
    },
    {
      "nome": "CHESHMI",
      "team": "Iran",
      "bonusGol": 13,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "EZATOLAHI",
      "team": "Iran",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 5
    },
    {
      "nome": "NOUROLLAHI",
      "team": "Iran",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 6
    },
    {
      "nome": "KARIMI",
      "team": "Iran",
      "bonusGol": 13,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "GHODDOS",
      "team": "Iran",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 6
    },
    {
      "nome": "GHOLIZADEH",
      "team": "Iran",
      "bonusGol": 7,
      "ruolo": Ruolo.C,
      "quotazione": 9
    },
    {
      "nome": "JAHANBAKHSH",
      "team": "Iran",
      "bonusGol": 7,
      "ruolo": Ruolo.A,
      "quotazione": 9
    },
    {
      "nome": "TORABI",
      "team": "Iran",
      "bonusGol": 11,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "AMIRI",
      "team": "Iran",
      "bonusGol": 14,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "TAREMI",
      "team": "Iran",
      "bonusGol": 5,
      "ruolo": Ruolo.A,
      "quotazione": 14
    },
    {
      "nome": "AZMOUN",
      "team": "Iran",
      "bonusGol": 5,
      "ruolo": Ruolo.A,
      "quotazione": 17
    },
    {
      "nome": "ANSARIFARD",
      "team": "Iran",
      "bonusGol": 9,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "WARD",
      "team": "Galles",
      "bonusGol": 5,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "DAVIES A.",
      "team": "Galles",
      "bonusGol": 5,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "HENNESSEY",
      "team": "Galles",
      "bonusGol": 5,
      "ruolo": Ruolo.P,
      "quotazione": 7
    },
    {
      "nome": "AMPADU",
      "team": "Galles",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 5
    },
    {
      "nome": "CABANGO",
      "team": "Galles",
      "bonusGol": 13,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "RODON",
      "team": "Galles",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 6
    },
    {
      "nome": "MEPHAM",
      "team": "Galles",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 6
    },
    {
      "nome": "LOCKYER",
      "team": "Galles",
      "bonusGol": 13,
      "ruolo": Ruolo.D,
      "quotazione": 2
    },
    {
      "nome": "WILLIAMS N.",
      "team": "Galles",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 7
    },
    {
      "nome": "ROBERTS C.",
      "team": "Galles",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 7
    },
    {
      "nome": "GUNTER C.",
      "team": "Galles",
      "bonusGol": 13,
      "ruolo": Ruolo.D,
      "quotazione": 2
    },
    {
      "nome": "DAVIES B.",
      "team": "Galles",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 6
    },
    {
      "nome": "SMITH M.",
      "team": "Galles",
      "bonusGol": 11,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "ALLEN",
      "team": "Galles",
      "bonusGol": 12,
      "ruolo": Ruolo.C,
      "quotazione": 3
    },
    {
      "nome": "LEVITT",
      "team": "Galles",
      "bonusGol": 11,
      "ruolo": Ruolo.C,
      "quotazione": 4
    },
    {
      "nome": "MORRELL",
      "team": "Galles",
      "bonusGol": 11,
      "ruolo": Ruolo.C,
      "quotazione": 4
    },
    {
      "nome": "RAMSEY",
      "team": "Galles",
      "bonusGol": 8,
      "ruolo": Ruolo.C,
      "quotazione": 10
    },
    {
      "nome": "COLWILL",
      "team": "Galles",
      "bonusGol": 11,
      "ruolo": Ruolo.C,
      "quotazione": 2
    },
    {
      "nome": "WILLIAMS J.",
      "team": "Galles",
      "bonusGol": 11,
      "ruolo": Ruolo.C,
      "quotazione": 3
    },
    {
      "nome": "JAMES D.",
      "team": "Galles",
      "bonusGol": 5,
      "ruolo": Ruolo.A,
      "quotazione": 12
    },
    {
      "nome": "WILSON",
      "team": "Galles",
      "bonusGol": 6,
      "ruolo": Ruolo.A,
      "quotazione": 10
    },
    {
      "nome": "THOMAS",
      "team": "Galles",
      "bonusGol": 11,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "JOHNSON B.",
      "team": "Galles",
      "bonusGol": 5,
      "ruolo": Ruolo.A,
      "quotazione": 13
    },
    {
      "nome": "BALE",
      "team": "Galles",
      "bonusGol": 4,
      "ruolo": Ruolo.A,
      "quotazione": 24
    },
    {
      "nome": "MOORE K.",
      "team": "Galles",
      "bonusGol": 7,
      "ruolo": Ruolo.A,
      "quotazione": 5
    },
    {
      "nome": "HARRIS M.",
      "team": "Galles",
      "bonusGol": 12,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "MARTINEZ E.",
      "team": "Argentina",
      "bonusGol": 3,
      "ruolo": Ruolo.P,
      "quotazione": 14
    },
    {
      "nome": "RULLI",
      "team": "Argentina",
      "bonusGol": 3,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "ARMANI",
      "team": "Argentina",
      "bonusGol": 3,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "ROMERO",
      "team": "Argentina",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 11
    },
    {
      "nome": "MARTINEZ LIS.",
      "team": "Argentina",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 11
    },
    {
      "nome": "PEZZELLA",
      "team": "Argentina",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 4
    },
    {
      "nome": "OTAMENDI",
      "team": "Argentina",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 8
    },
    {
      "nome": "FOYTH",
      "team": "Argentina",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "MOLINA",
      "team": "Argentina",
      "bonusGol": 7,
      "ruolo": Ruolo.D,
      "quotazione": 14
    },
    {
      "nome": "MONTIEL",
      "team": "Argentina",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 2
    },
    {
      "nome": "TAGLIAFICO",
      "team": "Argentina",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 12
    },
    {
      "nome": "ACUNA",
      "team": "Argentina",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 2
    },
    {
      "nome": "RODRIGUEZ G.",
      "team": "Argentina",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 10
    },
    {
      "nome": "PAREDES",
      "team": "Argentina",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 10
    },
    {
      "nome": "DE PAUL",
      "team": "Argentina",
      "bonusGol": 7,
      "ruolo": Ruolo.C,
      "quotazione": 17
    },
    {
      "nome": "MAC ALLISTER",
      "team": "Argentina",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 11
    },
    {
      "nome": "PALACIOS E.",
      "team": "Argentina",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 3
    },
    {
      "nome": "FERNANDEZ E.",
      "team": "Argentina",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 3
    },
    {
      "nome": "GOMEZ A.",
      "team": "Argentina",
      "bonusGol": 6,
      "ruolo": Ruolo.C,
      "quotazione": 15
    },
    {
      "nome": "DI MARIA",
      "team": "Argentina",
      "bonusGol": 5,
      "ruolo": Ruolo.A,
      "quotazione": 19
    },
    {
      "nome": "GONZALEZ N.",
      "team": "Argentina",
      "bonusGol": 8,
      "ruolo": Ruolo.A,
      "quotazione": 2
    },
    {
      "nome": "CORREA J.",
      "team": "Argentina",
      "bonusGol": 8,
      "ruolo": Ruolo.A,
      "quotazione": 2
    },
    {
      "nome": "DYBALA",
      "team": "Argentina",
      "bonusGol": 6,
      "ruolo": Ruolo.A,
      "quotazione": 12
    },
    {
      "nome": "MESSI",
      "team": "Argentina",
      "bonusGol": 3,
      "ruolo": Ruolo.A,
      "quotazione": 43
    },
    {
      "nome": "MARTINEZ LAU.",
      "team": "Argentina",
      "bonusGol": 3,
      "ruolo": Ruolo.A,
      "quotazione": 35
    },
    {
      "nome": "ALVAREZ J.",
      "team": "Argentina",
      "bonusGol": 4,
      "ruolo": Ruolo.A,
      "quotazione": 12
    },
    {
      "nome": "TALAVERA",
      "team": "Messico",
      "bonusGol": 5,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "OCHOA",
      "team": "Olanda",
      "bonusGol": 3,
      "ruolo": Ruolo.P,
      "quotazione": 8
    },
    {
      "nome": "COTA",
      "team": "Messico",
      "bonusGol": 5,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "MONTES",
      "team": "Messico",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 6
    },
    {
      "nome": "VASQUEZ J.",
      "team": "Messico",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "ARAUJO N.",
      "team": "Messico",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 4
    },
    {
      "nome": "MORENO",
      "team": "Messico",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 7
    },
    {
      "nome": "ARTEAGA",
      "team": "Messico",
      "bonusGol": 13,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "GALLARDO",
      "team": "Messico",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 7
    },
    {
      "nome": "ALVAREZ K.",
      "team": "Messico",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 6
    },
    {
      "nome": "SANCHEZ J.",
      "team": "Messico",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 2
    },
    {
      "nome": "ALVAREZ E.",
      "team": "Messico",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 8
    },
    {
      "nome": "CHAVEZ",
      "team": "Messico",
      "bonusGol": 11,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "RODRIGUEZ C.",
      "team": "Messico",
      "bonusGol": 11,
      "ruolo": Ruolo.C,
      "quotazione": 6
    },
    {
      "nome": "GUTIERREZ",
      "team": "Messico",
      "bonusGol": 12,
      "ruolo": Ruolo.C,
      "quotazione": 3
    },
    {
      "nome": "ROMO",
      "team": "Messico",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 6
    },
    {
      "nome": "HERRERA",
      "team": "Messico",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 5
    },
    {
      "nome": "PINEDA",
      "team": "Messico",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 3
    },
    {
      "nome": "GUARDADO",
      "team": "Messico",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 5
    },
    {
      "nome": "LOZANO",
      "team": "Messico",
      "bonusGol": 5,
      "ruolo": Ruolo.A,
      "quotazione": 14
    },
    {
      "nome": "VEGA",
      "team": "Messico",
      "bonusGol": 6,
      "ruolo": Ruolo.A,
      "quotazione": 6
    },
    {
      "nome": "ALVARADO",
      "team": "Messico",
      "bonusGol": 7,
      "ruolo": Ruolo.A,
      "quotazione": 6
    },
    {
      "nome": "ANTUNA",
      "team": "Messico",
      "bonusGol": 6,
      "ruolo": Ruolo.A,
      "quotazione": 12
    },
    {
      "nome": "MARTIN",
      "team": "Messico",
      "bonusGol": 5,
      "ruolo": Ruolo.A,
      "quotazione": 13
    },
    {
      "nome": "FUNES MORI R.",
      "team": "Messico",
      "bonusGol": 10,
      "ruolo": Ruolo.A,
      "quotazione": 2
    },
    {
      "nome": "JIMENEZ R.",
      "team": "Messico",
      "bonusGol": 5,
      "ruolo": Ruolo.A,
      "quotazione": 15
    },
    {
      "nome": "SZCZESNY",
      "team": "Polonia",
      "bonusGol": 5,
      "ruolo": Ruolo.P,
      "quotazione": 9
    },
    {
      "nome": "GRABARA",
      "team": "Polonia",
      "bonusGol": 5,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "SKORUPSKI",
      "team": "Polonia",
      "bonusGol": 5,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "GLIK",
      "team": "Polonia",
      "bonusGol": 8,
      "ruolo": Ruolo.D,
      "quotazione": 7
    },
    {
      "nome": "BEDNAREK",
      "team": "Polonia",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 6
    },
    {
      "nome": "KIWIOR",
      "team": "Polonia",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 6
    },
    {
      "nome": "WIETESKA",
      "team": "Polonia",
      "bonusGol": 13,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "JEDRZEJCZYK",
      "team": "Polonia",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "CASH",
      "team": "Polonia",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 2
    },
    {
      "nome": "BERESZYNSKI",
      "team": "Polonia",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 5
    },
    {
      "nome": "GUMNY",
      "team": "Polonia",
      "bonusGol": 13,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "KRYCHOWIAK",
      "team": "Polonia",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 6
    },
    {
      "nome": "BIELIK",
      "team": "Polonia",
      "bonusGol": 11,
      "ruolo": Ruolo.C,
      "quotazione": 2
    },
    {
      "nome": "ZALEWSKI",
      "team": "Polonia",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 7
    },
    {
      "nome": "FRANKOWSKI",
      "team": "Polonia",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 6
    },
    {
      "nome": "ZURKOWSKI",
      "team": "Polonia",
      "bonusGol": 8,
      "ruolo": Ruolo.C,
      "quotazione": 9
    },
    {
      "nome": "SZYMANSKI D.",
      "team": "Polonia",
      "bonusGol": 13,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "ZIELINSKI",
      "team": "Polonia",
      "bonusGol": 5,
      "ruolo": Ruolo.C,
      "quotazione": 18
    },
    {
      "nome": "SZYMANSKI S.",
      "team": "Polonia",
      "bonusGol": 6,
      "ruolo": Ruolo.C,
      "quotazione": 12
    },
    {
      "nome": "KAMINSKI",
      "team": "Polonia",
      "bonusGol": 12,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "GROSICKI",
      "team": "Polonia",
      "bonusGol": 9,
      "ruolo": Ruolo.A,
      "quotazione": 4
    },
    {
      "nome": "SKORAS",
      "team": "Polonia",
      "bonusGol": 13,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "LEWANDOWSKI",
      "team": "Polonia",
      "bonusGol": 3,
      "ruolo": Ruolo.A,
      "quotazione": 37
    },
    {
      "nome": "PIATEK",
      "team": "Polonia",
      "bonusGol": 6,
      "ruolo": Ruolo.A,
      "quotazione": 7
    },
    {
      "nome": "MILIK",
      "team": "Polonia",
      "bonusGol": 5,
      "ruolo": Ruolo.A,
      "quotazione": 14
    },
    {
      "nome": "SWIDERSKI",
      "team": "Polonia",
      "bonusGol": 6,
      "ruolo": Ruolo.A,
      "quotazione": 5
    },
    {
      "nome": "AL-RUBAIE",
      "team": "Arabia Saudita",
      "bonusGol": 7,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "AL-OWAIS",
      "team": "Arabia Saudita",
      "bonusGol": 7,
      "ruolo": Ruolo.P,
      "quotazione": 5
    },
    {
      "nome": "AL-AQIDI",
      "team": "Arabia Saudita",
      "bonusGol": 7,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "AL-AMRI",
      "team": "Arabia Saudita",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 5
    },
    {
      "nome": "MADU",
      "team": "Arabia Saudita",
      "bonusGol": 15,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "TAMBAKTI",
      "team": "Arabia Saudita",
      "bonusGol": 14,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "AL-BOLEAHI",
      "team": "Arabia Saudita",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 5
    },
    {
      "nome": "AL-GHANNAM",
      "team": "Arabia Saudita",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 3
    },
    {
      "nome": "ABDULHAMID",
      "team": "Arabia Saudita",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 4
    },
    {
      "nome": "AL-BURAYK",
      "team": "Arabia Saudita",
      "bonusGol": 13,
      "ruolo": Ruolo.D,
      "quotazione": 3
    },
    {
      "nome": "AL-SHAHRANI",
      "team": "Arabia Saudita",
      "bonusGol": 13,
      "ruolo": Ruolo.D,
      "quotazione": 2
    },
    {
      "nome": "AL-DAWSARI N.",
      "team": "Arabia Saudita",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 5
    },
    {
      "nome": "AL-HASSAN",
      "team": "Arabia Saudita",
      "bonusGol": 12,
      "ruolo": Ruolo.C,
      "quotazione": 5
    },
    {
      "nome": "OTAYF",
      "team": "Arabia Saudita",
      "bonusGol": 15,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "SHARAHILI",
      "team": "Arabia Saudita",
      "bonusGol": 13,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "KANNO",
      "team": "Arabia Saudita",
      "bonusGol": 12,
      "ruolo": Ruolo.C,
      "quotazione": 5
    },
    {
      "nome": "AL-FARAJ",
      "team": "Arabia Saudita",
      "bonusGol": 11,
      "ruolo": Ruolo.C,
      "quotazione": 6
    },
    {
      "nome": "AL-MALKI",
      "team": "Arabia Saudita",
      "bonusGol": 14,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "AL-NAJEI",
      "team": "Arabia Saudita",
      "bonusGol": 12,
      "ruolo": Ruolo.C,
      "quotazione": 3
    },
    {
      "nome": "AL-ABED",
      "team": "Arabia Saudita",
      "bonusGol": 12,
      "ruolo": Ruolo.C,
      "quotazione": 5
    },
    {
      "nome": "AL-DAWSARI S.",
      "team": "Arabia Saudita",
      "bonusGol": 8,
      "ruolo": Ruolo.A,
      "quotazione": 7
    },
    {
      "nome": "AL-OBOOD",
      "team": "Arabia Saudita",
      "bonusGol": 15,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "BAHEBRI",
      "team": "Arabia Saudita",
      "bonusGol": 9,
      "ruolo": Ruolo.A,
      "quotazione": 6
    },
    {
      "nome": "AL-BURAIKAN",
      "team": "Arabia Saudita",
      "bonusGol": 7,
      "ruolo": Ruolo.A,
      "quotazione": 7
    },
    {
      "nome": "ASIRI",
      "team": "Arabia Saudita",
      "bonusGol": 14,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "Al-SHEHRI",
      "team": "Arabia Saudita",
      "bonusGol": 12,
      "ruolo": Ruolo.A,
      "quotazione": 2
    },
    {
      "nome": "LLORIS",
      "team": "Francia",
      "bonusGol": 3,
      "ruolo": Ruolo.P,
      "quotazione": 15
    },
    {
      "nome": "AREOLA",
      "team": "Francia",
      "bonusGol": 3,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "MANDANDA",
      "team": "Francia",
      "bonusGol": 3,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "KOUNDE'",
      "team": "Francia",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 8
    },
    {
      "nome": "HERNANDEZ L.",
      "team": "Francia",
      "bonusGol": 8,
      "ruolo": Ruolo.D,
      "quotazione": 10
    },
    {
      "nome": "VARANE",
      "team": "Francia",
      "bonusGol": 8,
      "ruolo": Ruolo.D,
      "quotazione": 11
    },
    {
      "nome": "DISASI",
      "team": "Francia",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 3
    },
    {
      "nome": "KONATE'",
      "team": "Francia",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 6
    },
    {
      "nome": "SALIBA",
      "team": "Francia",
      "bonusGol": 8,
      "ruolo": Ruolo.D,
      "quotazione": 9
    },
    {
      "nome": "UPAMECANO",
      "team": "Francia",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 8
    },
    {
      "nome": "PAVARD",
      "team": "Francia",
      "bonusGol": 7,
      "ruolo": Ruolo.D,
      "quotazione": 13
    },
    {
      "nome": "HERNANDEZ T.",
      "team": "Francia",
      "bonusGol": 6,
      "ruolo": Ruolo.D,
      "quotazione": 16
    },
    {
      "nome": "TCHOUAMENI",
      "team": "Francia",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 9
    },
    {
      "nome": "CAMAVINGA",
      "team": "Francia",
      "bonusGol": 11,
      "ruolo": Ruolo.C,
      "quotazione": 4
    },
    {
      "nome": "GUENDOUZI",
      "team": "Francia",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 8
    },
    {
      "nome": "FOFANA Y.",
      "team": "Francia",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 9
    },
    {
      "nome": "VERETOUT",
      "team": "Francia",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 2
    },
    {
      "nome": "RABIOT",
      "team": "Francia",
      "bonusGol": 8,
      "ruolo": Ruolo.C,
      "quotazione": 7
    },
    {
      "nome": "NKUNKU",
      "team": "Francia",
      "bonusGol": 4,
      "ruolo": Ruolo.A,
      "quotazione": 23
    },
    {
      "nome": "COMAN",
      "team": "Francia",
      "bonusGol": 6,
      "ruolo": Ruolo.A,
      "quotazione": 7
    },
    {
      "nome": "DEMBELE'",
      "team": "Francia",
      "bonusGol": 5,
      "ruolo": Ruolo.A,
      "quotazione": 12
    },
    {
      "nome": "GRIEZMANN",
      "team": "Francia",
      "bonusGol": 4,
      "ruolo": Ruolo.A,
      "quotazione": 28
    },
    {
      "nome": "THURAM M.",
      "team": "Francia",
      "bonusGol": 9,
      "ruolo": Ruolo.A,
      "quotazione": 3
    },
    {
      "nome": "MBAPPE'",
      "team": "Francia",
      "bonusGol": 3,
      "ruolo": Ruolo.A,
      "quotazione": 43
    },
    {
      "nome": "BENZEMA",
      "team": "Francia",
      "bonusGol": 3,
      "ruolo": Ruolo.A,
      "quotazione": 40
    },
    {
      "nome": "GIROUD",
      "team": "Francia",
      "bonusGol": 5,
      "ruolo": Ruolo.A,
      "quotazione": 12
    },
    {
      "nome": "SCHMEICHEL",
      "team": "Danimarca",
      "bonusGol": 4,
      "ruolo": Ruolo.P,
      "quotazione": 9
    },
    {
      "nome": "CHRISTENSEN O.",
      "team": "Danimarca",
      "bonusGol": 3,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "RONNOW",
      "team": "Danimarca",
      "bonusGol": 4,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "CHRISTENSEN A.",
      "team": "Danimarca",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 9
    },
    {
      "nome": "ANDERSEN",
      "team": "Danimarca",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 8
    },
    {
      "nome": "NELSSON",
      "team": "Danimarca",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 5
    },
    {
      "nome": "KJAER",
      "team": "Danimarca",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 7
    },
    {
      "nome": "KRISTENSEN",
      "team": "Danimarca",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 7
    },
    {
      "nome": "MAEHLE",
      "team": "Danimarca",
      "bonusGol": 7,
      "ruolo": Ruolo.D,
      "quotazione": 9
    },
    {
      "nome": "BAH",
      "team": "Danimarca",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 2
    },
    {
      "nome": "STRYGER LARSEN",
      "team": "Danimarca",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 3
    },
    {
      "nome": "WASS",
      "team": "Danimarca",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 4
    },
    {
      "nome": "NORGAARD",
      "team": "Danimarca",
      "bonusGol": 11,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "HOJBJERG",
      "team": "Danimarca",
      "bonusGol": 8,
      "ruolo": Ruolo.C,
      "quotazione": 11
    },
    {
      "nome": "JENSEN M.",
      "team": "Danimarca",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 6
    },
    {
      "nome": "DELANEY",
      "team": "Danimarca",
      "bonusGol": 8,
      "ruolo": Ruolo.C,
      "quotazione": 11
    },
    {
      "nome": "ERIKSEN",
      "team": "Danimarca",
      "bonusGol": 6,
      "ruolo": Ruolo.C,
      "quotazione": 19
    },
    {
      "nome": "LINDSTROM",
      "team": "Danimarca",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 3
    },
    {
      "nome": "SKOV OLSEN",
      "team": "Danimarca",
      "bonusGol": 6,
      "ruolo": Ruolo.C,
      "quotazione": 11
    },
    {
      "nome": "DAMSGAARD",
      "team": "Danimarca",
      "bonusGol": 7,
      "ruolo": Ruolo.C,
      "quotazione": 9
    },
    {
      "nome": "SKOV",
      "team": "Danimarca",
      "bonusGol": 9,
      "ruolo": Ruolo.A,
      "quotazione": 6
    },
    {
      "nome": "DOLBERG",
      "team": "Danimarca",
      "bonusGol": 6,
      "ruolo": Ruolo.A,
      "quotazione": 13
    },
    {
      "nome": "WIND",
      "team": "Danimarca",
      "bonusGol": 6,
      "ruolo": Ruolo.A,
      "quotazione": 10
    },
    {
      "nome": "POULSEN",
      "team": "Danimarca",
      "bonusGol": 7,
      "ruolo": Ruolo.A,
      "quotazione": 4
    },
    {
      "nome": "CORNELIUS A.",
      "team": "Danimarca",
      "bonusGol": 6,
      "ruolo": Ruolo.A,
      "quotazione": 6
    },
    {
      "nome": "BRAITHWAITE",
      "team": "Danimarca",
      "bonusGol": 5,
      "ruolo": Ruolo.A,
      "quotazione": 16
    },
    {
      "nome": "BEN SAID",
      "team": "Tunisia",
      "bonusGol": 6,
      "ruolo": Ruolo.P,
      "quotazione": 6
    },
    {
      "nome": "DAHMEN",
      "team": "Tunisia",
      "bonusGol": 6,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "HASSEN",
      "team": "Tunisia",
      "bonusGol": 6,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "BALBOULI",
      "team": "Tunisia",
      "bonusGol": 6,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "BRONN",
      "team": "Tunisia",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 3
    },
    {
      "nome": "TALBI",
      "team": "Tunisia",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 6
    },
    {
      "nome": "MERIAH",
      "team": "Tunisia",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 5
    },
    {
      "nome": "GHANDRI",
      "team": "Tunisia",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 3
    },
    {
      "nome": "IFA",
      "team": "Tunisia",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 6
    },
    {
      "nome": "DRAGER",
      "team": "Tunisia",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 7
    },
    {
      "nome": "KECHRIDA",
      "team": "Tunisia",
      "bonusGol": 13,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "ABDI",
      "team": "Tunisia",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 5
    },
    {
      "nome": "MAALOUL",
      "team": "Tunisia",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 2
    },
    {
      "nome": "SKHIRI",
      "team": "Tunisia",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 7
    },
    {
      "nome": "LAIDOUNI",
      "team": "Tunisia",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 7
    },
    {
      "nome": "SASSI",
      "team": "Tunisia",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 8
    },
    {
      "nome": "BEN ROHMDANE",
      "team": "Tunisia",
      "bonusGol": 11,
      "ruolo": Ruolo.C,
      "quotazione": 4
    },
    {
      "nome": "CHAALELI",
      "team": "Tunisia",
      "bonusGol": 12,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "SLIMANE",
      "team": "Tunisia",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 10
    },
    {
      "nome": "MEJBRI",
      "team": "Tunisia",
      "bonusGol": 12,
      "ruolo": Ruolo.C,
      "quotazione": 2
    },
    {
      "nome": "SLITI",
      "team": "Tunisia",
      "bonusGol": 8,
      "ruolo": Ruolo.A,
      "quotazione": 6
    },
    {
      "nome": "MSAKNI",
      "team": "Tunisia",
      "bonusGol": 8,
      "ruolo": Ruolo.A,
      "quotazione": 6
    },
    {
      "nome": "JEBALI",
      "team": "Tunisia",
      "bonusGol": 9,
      "ruolo": Ruolo.A,
      "quotazione": 2
    },
    {
      "nome": "KHAZRI",
      "team": "Tunisia",
      "bonusGol": 6,
      "ruolo": Ruolo.A,
      "quotazione": 12
    },
    {
      "nome": "JAZIRI",
      "team": "Tunisia",
      "bonusGol": 6,
      "ruolo": Ruolo.A,
      "quotazione": 7
    },
    {
      "nome": "KHENISSI",
      "team": "Tunisia",
      "bonusGol": 6,
      "ruolo": Ruolo.A,
      "quotazione": 13
    },
    {
      "nome": "UNAI SIMON",
      "team": "Spagna",
      "bonusGol": 3,
      "ruolo": Ruolo.P,
      "quotazione": 13
    },
    {
      "nome": "SANCHEZ R.",
      "team": "Spagna",
      "bonusGol": 3,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "RAYA",
      "team": "Spagna",
      "bonusGol": 3,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "TORRES P.",
      "team": "Spagna",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 11
    },
    {
      "nome": "GARCIA",
      "team": "Spagna",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 11
    },
    {
      "nome": "LAPORTE",
      "team": "Spagna",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 10
    },
    {
      "nome": "CARVAJAL",
      "team": "Spagna",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 9
    },
    {
      "nome": "AZPILICUETA",
      "team": "Spagna",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 5
    },
    {
      "nome": "JORDI ALBA",
      "team": "Spagna",
      "bonusGol": 8,
      "ruolo": Ruolo.D,
      "quotazione": 12
    },
    {
      "nome": "GAYA'",
      "team": "Spagna",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 4
    },
    {
      "nome": "BUSQUETS",
      "team": "Spagna",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 6
    },
    {
      "nome": "RODRI",
      "team": "Spagna",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 7
    },
    {
      "nome": "GUILLAMON",
      "team": "Spagna",
      "bonusGol": 12,
      "ruolo": Ruolo.C,
      "quotazione": 2
    },
    {
      "nome": "PEDRI",
      "team": "Spagna",
      "bonusGol": 8,
      "ruolo": Ruolo.C,
      "quotazione": 12
    },
    {
      "nome": "GAVI",
      "team": "Spagna",
      "bonusGol": 8,
      "ruolo": Ruolo.C,
      "quotazione": 12
    },
    {
      "nome": "LLORENTE M.",
      "team": "Spagna",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 7
    },
    {
      "nome": "SOLER",
      "team": "Spagna",
      "bonusGol": 7,
      "ruolo": Ruolo.C,
      "quotazione": 11
    },
    {
      "nome": "KOKE",
      "team": "Spagna",
      "bonusGol": 8,
      "ruolo": Ruolo.C,
      "quotazione": 11
    },
    {
      "nome": "OLMO",
      "team": "Spagna",
      "bonusGol": 6,
      "ruolo": Ruolo.C,
      "quotazione": 13
    },
    {
      "nome": "FATI",
      "team": "Spagna",
      "bonusGol": 6,
      "ruolo": Ruolo.A,
      "quotazione": 7
    },
    {
      "nome": "TORRES FER.",
      "team": "Spagna",
      "bonusGol": 4,
      "ruolo": Ruolo.A,
      "quotazione": 22
    },
    {
      "nome": "YEREMI PINO",
      "team": "Spagna",
      "bonusGol": 7,
      "ruolo": Ruolo.A,
      "quotazione": 3
    },
    {
      "nome": "ASENSIO",
      "team": "Spagna",
      "bonusGol": 7,
      "ruolo": Ruolo.A,
      "quotazione": 8
    },
    {
      "nome": "WILLIAMS N.",
      "team": "Spagna",
      "bonusGol": 9,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "SARABIA",
      "team": "Spagna",
      "bonusGol": 4,
      "ruolo": Ruolo.A,
      "quotazione": 20
    },
    {
      "nome": "MORATA",
      "team": "Spagna",
      "bonusGol": 3,
      "ruolo": Ruolo.A,
      "quotazione": 30
    },
    {
      "nome": "SCHMIDT",
      "team": "Giappone",
      "bonusGol": 5,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "GONDA",
      "team": "Giappone",
      "bonusGol": 5,
      "ruolo": Ruolo.P,
      "quotazione": 7
    },
    {
      "nome": "KAWASHIMA",
      "team": "Giappone",
      "bonusGol": 5,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "TANIGUCHI",
      "team": "Giappone",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 4
    },
    {
      "nome": "YOSHIDA",
      "team": "Giappone",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 6
    },
    {
      "nome": "ITAKURA",
      "team": "Giappone",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 5
    },
    {
      "nome": "NAKAYAMA",
      "team": "Giappone",
      "bonusGol": 13,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "ITO H.",
      "team": "Giappone",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 5
    },
    {
      "nome": "TOMIYASU",
      "team": "Giappone",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 3
    },
    {
      "nome": "SAKAI",
      "team": "Giappone",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "YAMANE",
      "team": "Giappone",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 5
    },
    {
      "nome": "NAGATOMO",
      "team": "Giappone",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 4
    },
    {
      "nome": "ENDO",
      "team": "Giappone",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 6
    },
    {
      "nome": "MORITA",
      "team": "Giappone",
      "bonusGol": 12,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "TANAKA",
      "team": "Giappone",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 6
    },
    {
      "nome": "SHIBASAKI",
      "team": "Giappone",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 4
    },
    {
      "nome": "KAMADA",
      "team": "Giappone",
      "bonusGol": 7,
      "ruolo": Ruolo.C,
      "quotazione": 12
    },
    {
      "nome": "MITOMA",
      "team": "Giappone",
      "bonusGol": 6,
      "ruolo": Ruolo.C,
      "quotazione": 11
    },
    {
      "nome": "SOMA",
      "team": "Giappone",
      "bonusGol": 13,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "KUBO",
      "team": "Giappone",
      "bonusGol": 8,
      "ruolo": Ruolo.C,
      "quotazione": 4
    },
    {
      "nome": "DOAN",
      "team": "Giappone",
      "bonusGol": 6,
      "ruolo": Ruolo.C,
      "quotazione": 11
    },
    {
      "nome": "ITO J.",
      "team": "Giappone",
      "bonusGol": 6,
      "ruolo": Ruolo.A,
      "quotazione": 9
    },
    {
      "nome": "MINAMINO",
      "team": "Giappone",
      "bonusGol": 6,
      "ruolo": Ruolo.A,
      "quotazione": 12
    },
    {
      "nome": "MAEDA",
      "team": "Giappone",
      "bonusGol": 11,
      "ruolo": Ruolo.A,
      "quotazione": 2
    },
    {
      "nome": "ASANO",
      "team": "Giappone",
      "bonusGol": 5,
      "ruolo": Ruolo.A,
      "quotazione": 12
    },
    {
      "nome": "UEDA",
      "team": "Giappone",
      "bonusGol": 8,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "NAVAS",
      "team": "Costa Rica",
      "bonusGol": 7,
      "ruolo": Ruolo.P,
      "quotazione": 5
    },
    {
      "nome": "ALVARADO",
      "team": "Costa Rica",
      "bonusGol": 7,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "SEQUEIRA",
      "team": "Costa Rica",
      "bonusGol": 7,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "VARGAS J.P.",
      "team": "Costa Rica",
      "bonusGol": 13,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "CALVO",
      "team": "Costa Rica",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 5
    },
    {
      "nome": "DUARTE",
      "team": "Costa Rica",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 5
    },
    {
      "nome": "WASTON",
      "team": "Costa Rica",
      "bonusGol": 13,
      "ruolo": Ruolo.D,
      "quotazione": 2
    },
    {
      "nome": "FULLER",
      "team": "Costa Rica",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 4
    },
    {
      "nome": "MARTINEZ C.",
      "team": "Costa Rica",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 2
    },
    {
      "nome": "MATARRITA",
      "team": "Costa Rica",
      "bonusGol": 13,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "OVIEDO",
      "team": "Costa Rica",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 5
    },
    {
      "nome": "CHACON",
      "team": "Costa Rica",
      "bonusGol": 11,
      "ruolo": Ruolo.C,
      "quotazione": 4
    },
    {
      "nome": "TEJEDA",
      "team": "Costa Rica",
      "bonusGol": 11,
      "ruolo": Ruolo.C,
      "quotazione": 4
    },
    {
      "nome": "LOPEZ D.",
      "team": "Costa Rica",
      "bonusGol": 14,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "SALAS",
      "team": "Costa Rica",
      "bonusGol": 15,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "TORRES G.",
      "team": "Costa Rica",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 2
    },
    {
      "nome": "ZAMORA",
      "team": "Costa Rica",
      "bonusGol": 15,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "BORGES",
      "team": "Costa Rica",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 8
    },
    {
      "nome": "WILSON",
      "team": "Costa Rica",
      "bonusGol": 14,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "AGUILERA",
      "team": "Costa Rica",
      "bonusGol": 12,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "RUIZ B.",
      "team": "Costa Rica",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 10
    },
    {
      "nome": "CAMPBELL",
      "team": "Costa Rica",
      "bonusGol": 8,
      "ruolo": Ruolo.A,
      "quotazione": 12
    },
    {
      "nome": "BENNETTE",
      "team": "Costa Rica",
      "bonusGol": 9,
      "ruolo": Ruolo.A,
      "quotazione": 7
    },
    {
      "nome": "HERNANDEZ A.",
      "team": "Costa Rica",
      "bonusGol": 13,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "CONTRERAS",
      "team": "Costa Rica",
      "bonusGol": 8,
      "ruolo": Ruolo.A,
      "quotazione": 8
    },
    {
      "nome": "VENEGAS",
      "team": "Costa Rica",
      "bonusGol": 9,
      "ruolo": Ruolo.A,
      "quotazione": 6
    },
    {
      "nome": "COURTOIS",
      "team": "Belgio",
      "bonusGol": 3,
      "ruolo": Ruolo.P,
      "quotazione": 12
    },
    {
      "nome": "MIGNOLET",
      "team": "Belgio",
      "bonusGol": 3,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "CASTEELS",
      "team": "Belgio",
      "bonusGol": 3,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "THEATE",
      "team": "Belgio",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 4
    },
    {
      "nome": "FAES",
      "team": "Belgio",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 4
    },
    {
      "nome": "ALDERWEIRELD",
      "team": "Belgio",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 9
    },
    {
      "nome": "DEBAST",
      "team": "Belgio",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 3
    },
    {
      "nome": "VERTONGHEN",
      "team": "Belgio",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 9
    },
    {
      "nome": "DENDONCKER",
      "team": "Belgio",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 8
    },
    {
      "nome": "MEUNIER",
      "team": "Belgio",
      "bonusGol": 7,
      "ruolo": Ruolo.D,
      "quotazione": 12
    },
    {
      "nome": "CASTAGNE",
      "team": "Belgio",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 7
    },
    {
      "nome": "ONANA AM.",
      "team": "Belgio",
      "bonusGol": 12,
      "ruolo": Ruolo.C,
      "quotazione": 2
    },
    {
      "nome": "WITSEL",
      "team": "Belgio",
      "bonusGol": 8,
      "ruolo": Ruolo.C,
      "quotazione": 9
    },
    {
      "nome": "TIELEMANS",
      "team": "Belgio",
      "bonusGol": 7,
      "ruolo": Ruolo.C,
      "quotazione": 11
    },
    {
      "nome": "DE BRUYNE",
      "team": "Belgio",
      "bonusGol": 4,
      "ruolo": Ruolo.C,
      "quotazione": 29
    },
    {
      "nome": "DE KETELAERE",
      "team": "Belgio",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 3
    },
    {
      "nome": "VANAKEN",
      "team": "Belgio",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 4
    },
    {
      "nome": "HAZARD T.",
      "team": "Belgio",
      "bonusGol": 8,
      "ruolo": Ruolo.C,
      "quotazione": 8
    },
    {
      "nome": "CARRASCO",
      "team": "Belgio",
      "bonusGol": 7,
      "ruolo": Ruolo.C,
      "quotazione": 13
    },
    {
      "nome": "TROSSARD",
      "team": "Belgio",
      "bonusGol": 6,
      "ruolo": Ruolo.A,
      "quotazione": 14
    },
    {
      "nome": "DOKU",
      "team": "Belgio",
      "bonusGol": 10,
      "ruolo": Ruolo.A,
      "quotazione": 2
    },
    {
      "nome": "HAZARD E.",
      "team": "Belgio",
      "bonusGol": 5,
      "ruolo": Ruolo.A,
      "quotazione": 19
    },
    {
      "nome": "LUKAKU",
      "team": "Belgio",
      "bonusGol": 3,
      "ruolo": Ruolo.A,
      "quotazione": 33
    },
    {
      "nome": "BATSHUAYI",
      "team": "Belgio",
      "bonusGol": 5,
      "ruolo": Ruolo.A,
      "quotazione": 18
    },
    {
      "nome": "OPENDA",
      "team": "Belgio",
      "bonusGol": 10,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "MERTENS",
      "team": "Belgio",
      "bonusGol": 6,
      "ruolo": Ruolo.A,
      "quotazione": 7
    },
    {
      "nome": "LIVAKOVIC",
      "team": "Croazia",
      "bonusGol": 4,
      "ruolo": Ruolo.P,
      "quotazione": 10
    },
    {
      "nome": "GRBIC",
      "team": "Olanda",
      "bonusGol": 3,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "IVUSIC",
      "team": "Croazia",
      "bonusGol": 4,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "GVARDIOL",
      "team": "Croazia",
      "bonusGol": 8,
      "ruolo": Ruolo.D,
      "quotazione": 10
    },
    {
      "nome": "SUTALO J.",
      "team": "Croazia",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 4
    },
    {
      "nome": "ERLIC",
      "team": "Croazia",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 3
    },
    {
      "nome": "LOVREN",
      "team": "Croazia",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 7
    },
    {
      "nome": "VIDA",
      "team": "Croazia",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 4
    },
    {
      "nome": "STANISIC",
      "team": "Croazia",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 3
    },
    {
      "nome": "JURANOVIC",
      "team": "Croazia",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 8
    },
    {
      "nome": "SOSA B.",
      "team": "Croazia",
      "bonusGol": 8,
      "ruolo": Ruolo.D,
      "quotazione": 9
    },
    {
      "nome": "BARISIC",
      "team": "Croazia",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 4
    },
    {
      "nome": "BROZOVIC",
      "team": "Croazia",
      "bonusGol": 8,
      "ruolo": Ruolo.C,
      "quotazione": 11
    },
    {
      "nome": "JAKIC",
      "team": "Croazia",
      "bonusGol": 12,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "KOVACIC",
      "team": "Croazia",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 10
    },
    {
      "nome": "SUCIC",
      "team": "Croazia",
      "bonusGol": 12,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "MODRIC",
      "team": "Croazia",
      "bonusGol": 6,
      "ruolo": Ruolo.C,
      "quotazione": 18
    },
    {
      "nome": "PERISIC",
      "team": "Croazia",
      "bonusGol": 5,
      "ruolo": Ruolo.C,
      "quotazione": 19
    },
    {
      "nome": "PASALIC",
      "team": "Croazia",
      "bonusGol": 6,
      "ruolo": Ruolo.C,
      "quotazione": 15
    },
    {
      "nome": "VLASIC",
      "team": "Croazia",
      "bonusGol": 7,
      "ruolo": Ruolo.C,
      "quotazione": 9
    },
    {
      "nome": "MAJER",
      "team": "Croazia",
      "bonusGol": 7,
      "ruolo": Ruolo.C,
      "quotazione": 10
    },
    {
      "nome": "ORSIC",
      "team": "Croazia",
      "bonusGol": 8,
      "ruolo": Ruolo.A,
      "quotazione": 2
    },
    {
      "nome": "KRAMARIC",
      "team": "Croazia",
      "bonusGol": 4,
      "ruolo": Ruolo.A,
      "quotazione": 22
    },
    {
      "nome": "LIVAJA",
      "team": "Croazia",
      "bonusGol": 7,
      "ruolo": Ruolo.A,
      "quotazione": 2
    },
    {
      "nome": "BUDIMIR",
      "team": "Croazia",
      "bonusGol": 6,
      "ruolo": Ruolo.A,
      "quotazione": 4
    },
    {
      "nome": "PETKOVIC",
      "team": "Croazia",
      "bonusGol": 7,
      "ruolo": Ruolo.A,
      "quotazione": 4
    },
    {
      "nome": "BONO",
      "team": "Marocco",
      "bonusGol": 5,
      "ruolo": Ruolo.P,
      "quotazione": 7
    },
    {
      "nome": "MUNIR",
      "team": "Marocco",
      "bonusGol": 5,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "TAGNAOUTI",
      "team": "Marocco",
      "bonusGol": 5,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "SAISS",
      "team": "Marocco",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 6
    },
    {
      "nome": "AGUERD",
      "team": "Marocco",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 8
    },
    {
      "nome": "DARI",
      "team": "Marocco",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 3
    },
    {
      "nome": "BENOUN",
      "team": "Marocco",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "EL YAMIQ",
      "team": "Marocco",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "HAKIMI",
      "team": "Marocco",
      "bonusGol": 7,
      "ruolo": Ruolo.D,
      "quotazione": 14
    },
    {
      "nome": "MAZRAOUI",
      "team": "Marocco",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 11
    },
    {
      "nome": "ATTIAT-ALLAH",
      "team": "Marocco",
      "bonusGol": 15,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "AMRABAT",
      "team": "Marocco",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 6
    },
    {
      "nome": "JABRANE",
      "team": "Marocco",
      "bonusGol": 13,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "OUNAHI",
      "team": "Marocco",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 8
    },
    {
      "nome": "CHAIR",
      "team": "Marocco",
      "bonusGol": 12,
      "ruolo": Ruolo.C,
      "quotazione": 2
    },
    {
      "nome": "AMALLAH",
      "team": "Marocco",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 10
    },
    {
      "nome": "SABIRI",
      "team": "Marocco",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 3
    },
    {
      "nome": "EL KHANNOUSS",
      "team": "Marocco",
      "bonusGol": 14,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "ZIYECH",
      "team": "Marocco",
      "bonusGol": 6,
      "ruolo": Ruolo.C,
      "quotazione": 17
    },
    {
      "nome": "ABDE",
      "team": "Marocco",
      "bonusGol": 10,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "BOUFAL",
      "team": "Marocco",
      "bonusGol": 8,
      "ruolo": Ruolo.A,
      "quotazione": 8
    },
    {
      "nome": "ABOUKHLAL",
      "team": "Marocco",
      "bonusGol": 11,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "EN-NESYRI",
      "team": "Marocco",
      "bonusGol": 6,
      "ruolo": Ruolo.A,
      "quotazione": 15
    },
    {
      "nome": "HAMDALLAH",
      "team": "Marocco",
      "bonusGol": 9,
      "ruolo": Ruolo.A,
      "quotazione": 7
    },
    {
      "nome": "CHEDDIRA",
      "team": "Marocco",
      "bonusGol": 10,
      "ruolo": Ruolo.A,
      "quotazione": 2
    },
    {
      "nome": "PANTEMIS",
      "team": "Canada",
      "bonusGol": 7,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "ST.CLAIR",
      "team": "Canada",
      "bonusGol": 7,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "BORJAN",
      "team": "Canada",
      "bonusGol": 7,
      "ruolo": Ruolo.P,
      "quotazione": 5
    },
    {
      "nome": "MILLER",
      "team": "Canada",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 5
    },
    {
      "nome": "WATERMAN",
      "team": "Canada",
      "bonusGol": 15,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "CORNELIUS D.",
      "team": "Canada",
      "bonusGol": 14,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "VITORIA",
      "team": "Canada",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 6
    },
    {
      "nome": "JOHNSTON",
      "team": "Canada",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 5
    },
    {
      "nome": "LARYEA",
      "team": "Canada",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 2
    },
    {
      "nome": "ADEKUGBE",
      "team": "Canada",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 5
    },
    {
      "nome": "FRASER",
      "team": "Canada",
      "bonusGol": 14,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "HUTCHINSON",
      "team": "Canada",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 7
    },
    {
      "nome": "PIETTE",
      "team": "Canada",
      "bonusGol": 11,
      "ruolo": Ruolo.C,
      "quotazione": 3
    },
    {
      "nome": "EUSTAQUIO",
      "team": "Canada",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 6
    },
    {
      "nome": "KONE' I.",
      "team": "Canada",
      "bonusGol": 14,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "KAYE",
      "team": "Canada",
      "bonusGol": 12,
      "ruolo": Ruolo.C,
      "quotazione": 2
    },
    {
      "nome": "OSORIO",
      "team": "Canada",
      "bonusGol": 11,
      "ruolo": Ruolo.C,
      "quotazione": 4
    },
    {
      "nome": "WOTHERSPOON",
      "team": "Canada",
      "bonusGol": 14,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "DAVIES A.",
      "team": "Canada",
      "bonusGol": 6,
      "ruolo": Ruolo.C,
      "quotazione": 14
    },
    {
      "nome": "BUCHANAN",
      "team": "Canada",
      "bonusGol": 8,
      "ruolo": Ruolo.C,
      "quotazione": 9
    },
    {
      "nome": "HOILETT",
      "team": "Canada",
      "bonusGol": 8,
      "ruolo": Ruolo.C,
      "quotazione": 9
    },
    {
      "nome": "MILLAR",
      "team": "Canada",
      "bonusGol": 12,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "DAVID J.",
      "team": "Canada",
      "bonusGol": 4,
      "ruolo": Ruolo.A,
      "quotazione": 20
    },
    {
      "nome": "LARIN",
      "team": "Canada",
      "bonusGol": 6,
      "ruolo": Ruolo.A,
      "quotazione": 13
    },
    {
      "nome": "UGBO",
      "team": "Canada",
      "bonusGol": 11,
      "ruolo": Ruolo.A,
      "quotazione": 2
    },
    {
      "nome": "CAVALLINI",
      "team": "Canada",
      "bonusGol": 11,
      "ruolo": Ruolo.A,
      "quotazione": 2
    },
    {
      "nome": "ALISSON",
      "team": "Brasile",
      "bonusGol": 3,
      "ruolo": Ruolo.P,
      "quotazione": 14
    },
    {
      "nome": "EDERSON",
      "team": "Brasile",
      "bonusGol": 3,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "WEVERTON",
      "team": "Brasile",
      "bonusGol": 3,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "MARQUINHOS",
      "team": "Brasile",
      "bonusGol": 8,
      "ruolo": Ruolo.D,
      "quotazione": 11
    },
    {
      "nome": "MILITAO",
      "team": "Brasile",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 9
    },
    {
      "nome": "BREMER",
      "team": "Brasile",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 6
    },
    {
      "nome": "THIAGO SILVA",
      "team": "Brasile",
      "bonusGol": 8,
      "ruolo": Ruolo.D,
      "quotazione": 11
    },
    {
      "nome": "ALEX SANDRO",
      "team": "Brasile",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 3
    },
    {
      "nome": "TELLES",
      "team": "Brasile",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 9
    },
    {
      "nome": "DANILO",
      "team": "Brasile",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 8
    },
    {
      "nome": "DANI ALVES",
      "team": "Brasile",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "FABINHO",
      "team": "Brasile",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 2
    },
    {
      "nome": "CASEMIRO",
      "team": "Brasile",
      "bonusGol": 8,
      "ruolo": Ruolo.C,
      "quotazione": 11
    },
    {
      "nome": "BRUNO GUIMARAES",
      "team": "Brasile",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 3
    },
    {
      "nome": "FRED",
      "team": "Brasile",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 9
    },
    {
      "nome": "EVERTON RIBEIRO",
      "team": "Brasile",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 3
    },
    {
      "nome": "PAQUETA'",
      "team": "Brasile",
      "bonusGol": 6,
      "ruolo": Ruolo.C,
      "quotazione": 17
    },
    {
      "nome": "VINICIUS JUNIOR",
      "team": "Brasile",
      "bonusGol": 4,
      "ruolo": Ruolo.A,
      "quotazione": 31
    },
    {
      "nome": "NEYMAR",
      "team": "Brasile",
      "bonusGol": 3,
      "ruolo": Ruolo.A,
      "quotazione": 39
    },
    {
      "nome": "ANTONY",
      "team": "Brasile",
      "bonusGol": 6,
      "ruolo": Ruolo.A,
      "quotazione": 6
    },
    {
      "nome": "RODRYGO",
      "team": "Brasile",
      "bonusGol": 6,
      "ruolo": Ruolo.A,
      "quotazione": 3
    },
    {
      "nome": "RAPHINHA",
      "team": "Brasile",
      "bonusGol": 4,
      "ruolo": Ruolo.A,
      "quotazione": 26
    },
    {
      "nome": "MARTINELLI",
      "team": "Brasile",
      "bonusGol": 10,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "RICHARLISON",
      "team": "Brasile",
      "bonusGol": 4,
      "ruolo": Ruolo.A,
      "quotazione": 26
    },
    {
      "nome": "GABRIEL JESUS",
      "team": "Brasile",
      "bonusGol": 5,
      "ruolo": Ruolo.A,
      "quotazione": 18
    },
    {
      "nome": "PEDRO",
      "team": "Brasile",
      "bonusGol": 7,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "RAJKOVIC",
      "team": "Serbia",
      "bonusGol": 4,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "DMITROVIC",
      "team": "Serbia",
      "bonusGol": 4,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "MILINKOVIC-SAVIC V.",
      "team": "Serbia",
      "bonusGol": 4,
      "ruolo": Ruolo.P,
      "quotazione": 10
    },
    {
      "nome": "MILENKOVIC",
      "team": "Serbia",
      "bonusGol": 8,
      "ruolo": Ruolo.D,
      "quotazione": 10
    },
    {
      "nome": "PAVLOVIC",
      "team": "Serbia",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 8
    },
    {
      "nome": "VELJKOVIC",
      "team": "Serbia",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 9
    },
    {
      "nome": "ERAKOVIC",
      "team": "Serbia",
      "bonusGol": 14,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "BABIC",
      "team": "Serbia",
      "bonusGol": 13,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "MITROVIC S.",
      "team": "Serbia",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 6
    },
    {
      "nome": "MLADENOVIC",
      "team": "Serbia",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 4
    },
    {
      "nome": "KOSTIC",
      "team": "Serbia",
      "bonusGol": 6,
      "ruolo": Ruolo.C,
      "quotazione": 14
    },
    {
      "nome": "LAZOVIC",
      "team": "Serbia",
      "bonusGol": 7,
      "ruolo": Ruolo.C,
      "quotazione": 10
    },
    {
      "nome": "ZIVKOVIC",
      "team": "Serbia",
      "bonusGol": 7,
      "ruolo": Ruolo.C,
      "quotazione": 12
    },
    {
      "nome": "MAKSIMOVIC N.",
      "team": "Serbia",
      "bonusGol": 11,
      "ruolo": Ruolo.C,
      "quotazione": 4
    },
    {
      "nome": "RACIC",
      "team": "Serbia",
      "bonusGol": 13,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "GUDELJ",
      "team": "Serbia",
      "bonusGol": 11,
      "ruolo": Ruolo.C,
      "quotazione": 2
    },
    {
      "nome": "MILINKOVIC-SAVIC S.",
      "team": "Serbia",
      "bonusGol": 5,
      "ruolo": Ruolo.C,
      "quotazione": 22
    },
    {
      "nome": "LUKIC",
      "team": "Serbia",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 9
    },
    {
      "nome": "ILIC I.",
      "team": "Serbia",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 4
    },
    {
      "nome": "GRUJIC",
      "team": "Serbia",
      "bonusGol": 11,
      "ruolo": Ruolo.C,
      "quotazione": 4
    },
    {
      "nome": "DJURICIC",
      "team": "Serbia",
      "bonusGol": 8,
      "ruolo": Ruolo.C,
      "quotazione": 4
    },
    {
      "nome": "RADONJIC",
      "team": "Serbia",
      "bonusGol": 7,
      "ruolo": Ruolo.C,
      "quotazione": 5
    },
    {
      "nome": "TADIC",
      "team": "Serbia",
      "bonusGol": 5,
      "ruolo": Ruolo.C,
      "quotazione": 24
    },
    {
      "nome": "VLAHOVIC",
      "team": "Serbia",
      "bonusGol": 3,
      "ruolo": Ruolo.A,
      "quotazione": 31
    },
    {
      "nome": "MITROVIC A.",
      "team": "Serbia",
      "bonusGol": 3,
      "ruolo": Ruolo.A,
      "quotazione": 34
    },
    {
      "nome": "JOVIC",
      "team": "Serbia",
      "bonusGol": 5,
      "ruolo": Ruolo.A,
      "quotazione": 12
    },
    {
      "nome": "ONANA AN.",
      "team": "Camerun",
      "bonusGol": 5,
      "ruolo": Ruolo.P,
      "quotazione": 7
    },
    {
      "nome": "EPASSY",
      "team": "Camerun",
      "bonusGol": 5,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "NGAPANDOUETNBU",
      "team": "Camerun",
      "bonusGol": 5,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "WOOH",
      "team": "Camerun",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 3
    },
    {
      "nome": "CASTELLETTO",
      "team": "Camerun",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 6
    },
    {
      "nome": "N'KOULOU",
      "team": "Camerun",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 6
    },
    {
      "nome": "EBOSSE",
      "team": "Camerun",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "MBAIZO",
      "team": "Camerun",
      "bonusGol": 13,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "FAI",
      "team": "Camerun",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 6
    },
    {
      "nome": "TOLO",
      "team": "Camerun",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 6
    },
    {
      "nome": "HONGLA",
      "team": "Camerun",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 4
    },
    {
      "nome": "OUM GOUET",
      "team": "Camerun",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 6
    },
    {
      "nome": "ANGUISSA",
      "team": "Camerun",
      "bonusGol": 8,
      "ruolo": Ruolo.C,
      "quotazione": 9
    },
    {
      "nome": "ONDOUA",
      "team": "Camerun",
      "bonusGol": 14,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "NTCHAM",
      "team": "Camerun",
      "bonusGol": 11,
      "ruolo": Ruolo.C,
      "quotazione": 2
    },
    {
      "nome": "KUNDE",
      "team": "Camerun",
      "bonusGol": 11,
      "ruolo": Ruolo.C,
      "quotazione": 3
    },
    {
      "nome": "MOUMI NGAMALEU",
      "team": "Camerun",
      "bonusGol": 7,
      "ruolo": Ruolo.C,
      "quotazione": 9
    },
    {
      "nome": "N'KOUDOU",
      "team": "Camerun",
      "bonusGol": 12,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "NGOM BEKELI",
      "team": "Camerun",
      "bonusGol": 15,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "MBEUMO",
      "team": "Camerun",
      "bonusGol": 7,
      "ruolo": Ruolo.A,
      "quotazione": 7
    },
    {
      "nome": "TOKO EKAMBI",
      "team": "Camerun",
      "bonusGol": 5,
      "ruolo": Ruolo.A,
      "quotazione": 13
    },
    {
      "nome": "BASSOGOG",
      "team": "Camerun",
      "bonusGol": 11,
      "ruolo": Ruolo.A,
      "quotazione": 3
    },
    {
      "nome": "CHOUPO-MOTING",
      "team": "Camerun",
      "bonusGol": 5,
      "ruolo": Ruolo.A,
      "quotazione": 14
    },
    {
      "nome": "ABOUBAKAR",
      "team": "Camerun",
      "bonusGol": 4,
      "ruolo": Ruolo.A,
      "quotazione": 18
    },
    {
      "nome": "NSAME",
      "team": "Camerun",
      "bonusGol": 11,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "MAROU",
      "team": "Camerun",
      "bonusGol": 15,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "RUI PATRICIO",
      "team": "Portogallo",
      "bonusGol": 3,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "SA'",
      "team": "Portogallo",
      "bonusGol": 3,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "COSTA D.",
      "team": "Portogallo",
      "bonusGol": 3,
      "ruolo": Ruolo.P,
      "quotazione": 12
    },
    {
      "nome": "RUBEN DIAS",
      "team": "Portogallo",
      "bonusGol": 8,
      "ruolo": Ruolo.D,
      "quotazione": 11
    },
    {
      "nome": "ANTONIO SILVA",
      "team": "Portogallo",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "PEPE",
      "team": "Portogallo",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 8
    },
    {
      "nome": "PEREIRA D.",
      "team": "Portogallo",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 5
    },
    {
      "nome": "CANCELO",
      "team": "Portogallo",
      "bonusGol": 7,
      "ruolo": Ruolo.D,
      "quotazione": 14
    },
    {
      "nome": "DALOT",
      "team": "Portogallo",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 2
    },
    {
      "nome": "GUERREIRO",
      "team": "Portogallo",
      "bonusGol": 8,
      "ruolo": Ruolo.D,
      "quotazione": 9
    },
    {
      "nome": "NUNO MENDES",
      "team": "Portogallo",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 11
    },
    {
      "nome": "RUBEN NEVES",
      "team": "Portogallo",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 9
    },
    {
      "nome": "PALHINHA",
      "team": "Portogallo",
      "bonusGol": 11,
      "ruolo": Ruolo.C,
      "quotazione": 2
    },
    {
      "nome": "CARVALHO",
      "team": "Portogallo",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 9
    },
    {
      "nome": "MATHEUS NUNES",
      "team": "Portogallo",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 5
    },
    {
      "nome": "VITINHA",
      "team": "Portogallo",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 7
    },
    {
      "nome": "JOAO MARIO",
      "team": "Portogallo",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 4
    },
    {
      "nome": "OTAVIO",
      "team": "Portogallo",
      "bonusGol": 8,
      "ruolo": Ruolo.C,
      "quotazione": 5
    },
    {
      "nome": "BERNARDO SILVA",
      "team": "Portogallo",
      "bonusGol": 6,
      "ruolo": Ruolo.C,
      "quotazione": 15
    },
    {
      "nome": "BRUNO FERNANDES",
      "team": "Portogallo",
      "bonusGol": 6,
      "ruolo": Ruolo.C,
      "quotazione": 18
    },
    {
      "nome": "HORTA R.",
      "team": "Portogallo",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 3
    },
    {
      "nome": "LEAO",
      "team": "Portogallo",
      "bonusGol": 4,
      "ruolo": Ruolo.A,
      "quotazione": 29
    },
    {
      "nome": "JOAO FELIX",
      "team": "Portogallo",
      "bonusGol": 7,
      "ruolo": Ruolo.A,
      "quotazione": 10
    },
    {
      "nome": "RAMOS G.",
      "team": "Portogallo",
      "bonusGol": 9,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "RONALDO",
      "team": "Portogallo",
      "bonusGol": 3,
      "ruolo": Ruolo.A,
      "quotazione": 41
    },
    {
      "nome": "ANDRE' SILVA",
      "team": "Portogallo",
      "bonusGol": 5,
      "ruolo": Ruolo.A,
      "quotazione": 11
    },
    {
      "nome": "ROCHET",
      "team": "Uruguay",
      "bonusGol": 4,
      "ruolo": Ruolo.P,
      "quotazione": 9
    },
    {
      "nome": "MUSLERA",
      "team": "Olanda",
      "bonusGol": 3,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "SOSA S.",
      "team": "Uruguay",
      "bonusGol": 4,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "ARAUJO",
      "team": "Uruguay",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 6
    },
    {
      "nome": "COATES",
      "team": "Uruguay",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 6
    },
    {
      "nome": "CACERES M.",
      "team": "Uruguay",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 3
    },
    {
      "nome": "GODIN",
      "team": "Uruguay",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 8
    },
    {
      "nome": "GIMENEZ",
      "team": "Uruguay",
      "bonusGol": 8,
      "ruolo": Ruolo.D,
      "quotazione": 10
    },
    {
      "nome": "VARELA",
      "team": "Uruguay",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 8
    },
    {
      "nome": "RODRIGUEZ J.L.",
      "team": "Uruguay",
      "bonusGol": 13,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "OLIVERA",
      "team": "Uruguay",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 7
    },
    {
      "nome": "VINA",
      "team": "Uruguay",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 3
    },
    {
      "nome": "TORREIRA",
      "team": "Uruguay",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 10
    },
    {
      "nome": "UGARTE",
      "team": "Uruguay",
      "bonusGol": 12,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "VALVERDE",
      "team": "Uruguay",
      "bonusGol": 6,
      "ruolo": Ruolo.C,
      "quotazione": 18
    },
    {
      "nome": "BENTANCUR",
      "team": "Uruguay",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 10
    },
    {
      "nome": "DE LA CRUZ",
      "team": "Uruguay",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 8
    },
    {
      "nome": "VECINO",
      "team": "Uruguay",
      "bonusGol": 8,
      "ruolo": Ruolo.C,
      "quotazione": 6
    },
    {
      "nome": "DE ARRASCAETA",
      "team": "Uruguay",
      "bonusGol": 7,
      "ruolo": Ruolo.C,
      "quotazione": 10
    },
    {
      "nome": "CANOBBIO",
      "team": "Uruguay",
      "bonusGol": 11,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "PELLISTRI",
      "team": "Uruguay",
      "bonusGol": 11,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "TORRES FA.",
      "team": "Uruguay",
      "bonusGol": 11,
      "ruolo": Ruolo.A,
      "quotazione": 2
    },
    {
      "nome": "CAVANI",
      "team": "Uruguay",
      "bonusGol": 5,
      "ruolo": Ruolo.A,
      "quotazione": 15
    },
    {
      "nome": "GOMEZ M.",
      "team": "Uruguay",
      "bonusGol": 9,
      "ruolo": Ruolo.A,
      "quotazione": 7
    },
    {
      "nome": "NUNEZ",
      "team": "Uruguay",
      "bonusGol": 3,
      "ruolo": Ruolo.A,
      "quotazione": 27
    },
    {
      "nome": "SUAREZ L.",
      "team": "Uruguay",
      "bonusGol": 3,
      "ruolo": Ruolo.A,
      "quotazione": 28
    },
    {
      "nome": "DANLAD",
      "team": "Ghana",
      "bonusGol": 6,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "NURUDEEN",
      "team": "Ghana",
      "bonusGol": 6,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "ATI ZIGI",
      "team": "Ghana",
      "bonusGol": 6,
      "ruolo": Ruolo.P,
      "quotazione": 6
    },
    {
      "nome": "SALISU",
      "team": "Ghana",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 7
    },
    {
      "nome": "AMARTEY",
      "team": "Ghana",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 7
    },
    {
      "nome": "DJIKU",
      "team": "Ghana",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 3
    },
    {
      "nome": "AIDOO",
      "team": "Ghana",
      "bonusGol": 14,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "SEIDU",
      "team": "Ghana",
      "bonusGol": 14,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "LAMPTEY",
      "team": "Ghana",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 7
    },
    {
      "nome": "ODOI",
      "team": "Ghana",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "MENSAH",
      "team": "Ghana",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "BABA A.R.",
      "team": "Ghana",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 7
    },
    {
      "nome": "PARTEY T.",
      "team": "Ghana",
      "bonusGol": 8,
      "ruolo": Ruolo.C,
      "quotazione": 10
    },
    {
      "nome": "OWUSU",
      "team": "Ghana",
      "bonusGol": 13,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "ABDUL SAMED",
      "team": "Ghana",
      "bonusGol": 14,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "KUDUS",
      "team": "Ghana",
      "bonusGol": 8,
      "ruolo": Ruolo.C,
      "quotazione": 12
    },
    {
      "nome": "KYEREH",
      "team": "Ghana",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 9
    },
    {
      "nome": "SULEMANA",
      "team": "Ghana",
      "bonusGol": 8,
      "ruolo": Ruolo.C,
      "quotazione": 8
    },
    {
      "nome": "FATAWU",
      "team": "Ghana",
      "bonusGol": 8,
      "ruolo": Ruolo.C,
      "quotazione": 10
    },
    {
      "nome": "BUKARI",
      "team": "Ghana",
      "bonusGol": 9,
      "ruolo": Ruolo.A,
      "quotazione": 2
    },
    {
      "nome": "AYEW A.",
      "team": "Ghana",
      "bonusGol": 7,
      "ruolo": Ruolo.A,
      "quotazione": 13
    },
    {
      "nome": "SOWAH",
      "team": "Ghana",
      "bonusGol": 15,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "AFRIYIE",
      "team": "Ghana",
      "bonusGol": 14,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "AYEW J.",
      "team": "Ghana",
      "bonusGol": 7,
      "ruolo": Ruolo.A,
      "quotazione": 12
    },
    {
      "nome": "WILLIAMS I.",
      "team": "Ghana",
      "bonusGol": 4,
      "ruolo": Ruolo.A,
      "quotazione": 18
    },
    {
      "nome": "SEMENYO",
      "team": "Ghana",
      "bonusGol": 14,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "Bum-Keon SONG",
      "team": "Corea del Sud",
      "bonusGol": 6,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "Seung-Gyu KIM",
      "team": "Corea del Sud",
      "bonusGol": 6,
      "ruolo": Ruolo.P,
      "quotazione": 6
    },
    {
      "nome": "Hyeon-Woo JO",
      "team": "Corea del Sud",
      "bonusGol": 6,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "Min-Jae KIM",
      "team": "Corea del Sud",
      "bonusGol": 8,
      "ruolo": Ruolo.D,
      "quotazione": 9
    },
    {
      "nome": "Kyung-Won KWON",
      "team": "Corea del Sud",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 6
    },
    {
      "nome": "Yu-Min CHO",
      "team": "Corea del Sud",
      "bonusGol": 14,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "Young-Gwon KIM",
      "team": "Corea del Sud",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 4
    },
    {
      "nome": "Tae-Hwan KIM",
      "team": "Corea del Sud",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 2
    },
    {
      "nome": "Moon-Hwan KIM",
      "team": "Corea del Sud",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 5
    },
    {
      "nome": "Jong-Gyu YOON",
      "team": "Corea del Sud",
      "bonusGol": 14,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "Jin-Su KIM",
      "team": "Corea del Sud",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 6
    },
    {
      "nome": "Chul HONG",
      "team": "Corea del Sud",
      "bonusGol": 13,
      "ruolo": Ruolo.D,
      "quotazione": 2
    },
    {
      "nome": "Jun-Ho SON",
      "team": "Corea del Sud",
      "bonusGol": 13,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "Woo-Young JUNG",
      "team": "Corea del Sud",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 6
    },
    {
      "nome": "In-Beom HWANG",
      "team": "Corea del Sud",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 7
    },
    {
      "nome": "Seung-Ho PAIK",
      "team": "Corea del Sud",
      "bonusGol": 11,
      "ruolo": Ruolo.C,
      "quotazione": 3
    },
    {
      "nome": "Kang-In LEE",
      "team": "Corea del Sud",
      "bonusGol": 12,
      "ruolo": Ruolo.C,
      "quotazione": 2
    },
    {
      "nome": "Jae-Sung LEE",
      "team": "Corea del Sud",
      "bonusGol": 7,
      "ruolo": Ruolo.C,
      "quotazione": 11
    },
    {
      "nome": "Chang-Hoon KWON",
      "team": "Corea del Sud",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 8
    },
    {
      "nome": "Sang-Ho NA",
      "team": "Corea del Sud",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 3
    },
    {
      "nome": "Min-Kyu SONG",
      "team": "Corea del Sud",
      "bonusGol": 14,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "Heung-Min SON",
      "team": "Corea del Sud",
      "bonusGol": 3,
      "ruolo": Ruolo.A,
      "quotazione": 27
    },
    {
      "nome": "Woo-Yeong JEONG",
      "team": "Corea del Sud",
      "bonusGol": 11,
      "ruolo": Ruolo.A,
      "quotazione": 3
    },
    {
      "nome": "Gue-Sung CHO",
      "team": "Corea del Sud",
      "bonusGol": 10,
      "ruolo": Ruolo.A,
      "quotazione": 5
    },
    {
      "nome": "Hee-Chan HWANG",
      "team": "Corea del Sud",
      "bonusGol": 5,
      "ruolo": Ruolo.A,
      "quotazione": 10
    },
    {
      "nome": "Ui-Jo HWANG",
      "team": "Corea del Sud",
      "bonusGol": 5,
      "ruolo": Ruolo.A,
      "quotazione": 14
    },
    {
      "nome": "TURNER",
      "team": "Stati",
      "bonusGol": 5,
      "ruolo": Ruolo.P,
      "quotazione": 7
    },
    {
      "nome": "JOHNSON S.",
      "team": "Stati",
      "bonusGol": 5,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "HORVATH",
      "team": "Stati",
      "bonusGol": 5,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "CARTER-VICKERS",
      "team": "Stati",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 3
    },
    {
      "nome": "ZIMMERMAN",
      "team": "Stati",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 5
    },
    {
      "nome": "REAM",
      "team": "Stati",
      "bonusGol": 13,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "LONG",
      "team": "Stati",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 6
    },
    {
      "nome": "DEST",
      "team": "Stati",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 5
    },
    {
      "nome": "SCALLY",
      "team": "Stati",
      "bonusGol": 13,
      "ruolo": Ruolo.D,
      "quotazione": 2
    },
    {
      "nome": "MOORE S.",
      "team": "Stati",
      "bonusGol": 14,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "YEDLIN",
      "team": "Stati",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 2
    },
    {
      "nome": "ROBINSON",
      "team": "Stati",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 6
    },
    {
      "nome": "ADAMS",
      "team": "Stati",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 6
    },
    {
      "nome": "ACOSTA",
      "team": "Stati",
      "bonusGol": 11,
      "ruolo": Ruolo.C,
      "quotazione": 3
    },
    {
      "nome": "MUSAH",
      "team": "Stati",
      "bonusGol": 8,
      "ruolo": Ruolo.C,
      "quotazione": 6
    },
    {
      "nome": "MCKENNIE",
      "team": "Stati",
      "bonusGol": 7,
      "ruolo": Ruolo.C,
      "quotazione": 9
    },
    {
      "nome": "ROLDAN",
      "team": "Stati",
      "bonusGol": 12,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "DE LA TORRE",
      "team": "Stati",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 4
    },
    {
      "nome": "REYNA",
      "team": "Stati",
      "bonusGol": 7,
      "ruolo": Ruolo.C,
      "quotazione": 8
    },
    {
      "nome": "AARONSON B.",
      "team": "Stati",
      "bonusGol": 6,
      "ruolo": Ruolo.C,
      "quotazione": 12
    },
    {
      "nome": "PULISIC",
      "team": "Stati",
      "bonusGol": 5,
      "ruolo": Ruolo.A,
      "quotazione": 17
    },
    {
      "nome": "MORRIS",
      "team": "Stati",
      "bonusGol": 9,
      "ruolo": Ruolo.A,
      "quotazione": 2
    },
    {
      "nome": "WEAH",
      "team": "Stati",
      "bonusGol": 5,
      "ruolo": Ruolo.A,
      "quotazione": 12
    },
    {
      "nome": "SARGENT",
      "team": "Stati",
      "bonusGol": 9,
      "ruolo": Ruolo.A,
      "quotazione": 3
    },
    {
      "nome": "FERREIRA",
      "team": "Stati",
      "bonusGol": 5,
      "ruolo": Ruolo.A,
      "quotazione": 13
    },
    {
      "nome": "WRIGHT",
      "team": "Stati",
      "bonusGol": 13,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "RYAN",
      "team": "Australia",
      "bonusGol": 7,
      "ruolo": Ruolo.P,
      "quotazione": 5
    },
    {
      "nome": "VUKOVIC",
      "team": "Australia",
      "bonusGol": 7,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "REDMAYNE",
      "team": "Australia",
      "bonusGol": 7,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "DEGENEK",
      "team": "Australia",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 3
    },
    {
      "nome": "WRIGHT",
      "team": "Australia",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 3
    },
    {
      "nome": "ROWLES",
      "team": "Australia",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 5
    },
    {
      "nome": "SOUTTAR",
      "team": "Australia",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 6
    },
    {
      "nome": "DENG",
      "team": "Australia",
      "bonusGol": 15,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "ATKINSON",
      "team": "Australia",
      "bonusGol": 13,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "KARACIC",
      "team": "Australia",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 4
    },
    {
      "nome": "BEHICH",
      "team": "Australia",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 5
    },
    {
      "nome": "KING j.",
      "team": "Australia",
      "bonusGol": 14,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "BACCUS",
      "team": "Australia",
      "bonusGol": 15,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "DEVLIN",
      "team": "Australia",
      "bonusGol": 15,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "MOOY",
      "team": "Australia",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 6
    },
    {
      "nome": "McGREE",
      "team": "Australia",
      "bonusGol": 11,
      "ruolo": Ruolo.C,
      "quotazione": 4
    },
    {
      "nome": "IRVINE",
      "team": "Australia",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 6
    },
    {
      "nome": "HRUSTIC",
      "team": "Australia",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 5
    },
    {
      "nome": "BOYLE",
      "team": "Australia",
      "bonusGol": 7,
      "ruolo": Ruolo.A,
      "quotazione": 8
    },
    {
      "nome": "MABIL",
      "team": "Australia",
      "bonusGol": 6,
      "ruolo": Ruolo.A,
      "quotazione": 8
    },
    {
      "nome": "GOODWIN",
      "team": "Australia",
      "bonusGol": 13,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "LECKIE",
      "team": "Australia",
      "bonusGol": 8,
      "ruolo": Ruolo.A,
      "quotazione": 6
    },
    {
      "nome": "MACLAREN",
      "team": "Australia",
      "bonusGol": 8,
      "ruolo": Ruolo.A,
      "quotazione": 6
    },
    {
      "nome": "CUMMINGS",
      "team": "Australia",
      "bonusGol": 14,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "DUKE",
      "team": "Australia",
      "bonusGol": 9,
      "ruolo": Ruolo.A,
      "quotazione": 3
    },
    {
      "nome": "KUOL",
      "team": "Australia",
      "bonusGol": 15,
      "ruolo": Ruolo.A,
      "quotazione": 1
    },
    {
      "nome": "NEUER",
      "team": "Germania",
      "bonusGol": 3,
      "ruolo": Ruolo.P,
      "quotazione": 12
    },
    {
      "nome": "TRAPP",
      "team": "Germania",
      "bonusGol": 3,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "TER STEGEN",
      "team": "Germania",
      "bonusGol": 3,
      "ruolo": Ruolo.P,
      "quotazione": 3
    },
    {
      "nome": "RUDIGER",
      "team": "Germania",
      "bonusGol": 8,
      "ruolo": Ruolo.D,
      "quotazione": 11
    },
    {
      "nome": "SULE",
      "team": "Germania",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 9
    },
    {
      "nome": "SCHLOTTERBECK",
      "team": "Germania",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 4
    },
    {
      "nome": "GINTER",
      "team": "Germania",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 4
    },
    {
      "nome": "BELLA-KOTCHAP",
      "team": "Germania",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "KLOSTERMANN",
      "team": "Germania",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 3
    },
    {
      "nome": "KHERER",
      "team": "Germania",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 9
    },
    {
      "nome": "RAUM",
      "team": "Germania",
      "bonusGol": 8,
      "ruolo": Ruolo.D,
      "quotazione": 12
    },
    {
      "nome": "GUNTER Christ.",
      "team": "Germania",
      "bonusGol": 12,
      "ruolo": Ruolo.D,
      "quotazione": 2
    },
    {
      "nome": "KIMMICH",
      "team": "Germania",
      "bonusGol": 7,
      "ruolo": Ruolo.C,
      "quotazione": 15
    },
    {
      "nome": "GORETZKA",
      "team": "Germania",
      "bonusGol": 6,
      "ruolo": Ruolo.C,
      "quotazione": 16
    },
    {
      "nome": "GUNDOGAN",
      "team": "Germania",
      "bonusGol": 6,
      "ruolo": Ruolo.C,
      "quotazione": 18
    },
    {
      "nome": "BRANDT",
      "team": "Germania",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 6
    },
    {
      "nome": "MUSIALA",
      "team": "Germania",
      "bonusGol": 6,
      "ruolo": Ruolo.C,
      "quotazione": 15
    },
    {
      "nome": "GOTZE",
      "team": "Germania",
      "bonusGol": 7,
      "ruolo": Ruolo.C,
      "quotazione": 8
    },
    {
      "nome": "HOFMANN",
      "team": "Germania",
      "bonusGol": 5,
      "ruolo": Ruolo.C,
      "quotazione": 19
    },
    {
      "nome": "GNABRY",
      "team": "Germania",
      "bonusGol": 5,
      "ruolo": Ruolo.C,
      "quotazione": 20
    },
    {
      "nome": "SANE'",
      "team": "Germania",
      "bonusGol": 5,
      "ruolo": Ruolo.C,
      "quotazione": 19
    },
    {
      "nome": "ADEYEMI",
      "team": "Germania",
      "bonusGol": 10,
      "ruolo": Ruolo.A,
      "quotazione": 3
    },
    {
      "nome": "MULLER",
      "team": "Germania",
      "bonusGol": 4,
      "ruolo": Ruolo.A,
      "quotazione": 22
    },
    {
      "nome": "HAVERTZ",
      "team": "Germania",
      "bonusGol": 3,
      "ruolo": Ruolo.A,
      "quotazione": 30
    },
    {
      "nome": "MOUKOKO",
      "team": "Germania",
      "bonusGol": 10,
      "ruolo": Ruolo.A,
      "quotazione": 2
    },
    {
      "nome": "FULLKRUG",
      "team": "Germania",
      "bonusGol": 10,
      "ruolo": Ruolo.A,
      "quotazione": 4
    },
    {
      "nome": "KOBEL",
      "team": "Svizzera",
      "bonusGol": 5,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "OMLIN",
      "team": "Svizzera",
      "bonusGol": 5,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "SOMMER",
      "team": "Svizzera",
      "bonusGol": 5,
      "ruolo": Ruolo.P,
      "quotazione": 8
    },
    {
      "nome": "KHON",
      "team": "Svizzera",
      "bonusGol": 5,
      "ruolo": Ruolo.P,
      "quotazione": 1
    },
    {
      "nome": "AKANJI",
      "team": "Svizzera",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 7
    },
    {
      "nome": "SCHAR",
      "team": "Svizzera",
      "bonusGol": 11,
      "ruolo": Ruolo.D,
      "quotazione": 3
    },
    {
      "nome": "COMERT",
      "team": "Svizzera",
      "bonusGol": 13,
      "ruolo": Ruolo.D,
      "quotazione": 1
    },
    {
      "nome": "ELVEDI",
      "team": "Svizzera",
      "bonusGol": 10,
      "ruolo": Ruolo.D,
      "quotazione": 8
    },
    {
      "nome": "WIDMER",
      "team": "Svizzera",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 7
    },
    {
      "nome": "RODRIGUEZ R.",
      "team": "Svizzera",
      "bonusGol": 9,
      "ruolo": Ruolo.D,
      "quotazione": 7
    },
    {
      "nome": "ZAKARIA",
      "team": "Svizzera",
      "bonusGol": 10,
      "ruolo": Ruolo.C,
      "quotazione": 4
    },
    {
      "nome": "XHAKA",
      "team": "Svizzera",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 8
    },
    {
      "nome": "JASHARI",
      "team": "Svizzera",
      "bonusGol": 14,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "FREI",
      "team": "Svizzera",
      "bonusGol": 11,
      "ruolo": Ruolo.C,
      "quotazione": 3
    },
    {
      "nome": "FASSNACHT",
      "team": "Svizzera",
      "bonusGol": 12,
      "ruolo": Ruolo.C,
      "quotazione": 2
    },
    {
      "nome": "SOW",
      "team": "Svizzera",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 7
    },
    {
      "nome": "FREULER",
      "team": "Svizzera",
      "bonusGol": 9,
      "ruolo": Ruolo.C,
      "quotazione": 8
    },
    {
      "nome": "AEBISCHER",
      "team": "Svizzera",
      "bonusGol": 11,
      "ruolo": Ruolo.C,
      "quotazione": 2
    },
    {
      "nome": "FERNANDES E.",
      "team": "Svizzera",
      "bonusGol": 11,
      "ruolo": Ruolo.C,
      "quotazione": 2
    },
    {
      "nome": "RIEDER",
      "team": "Svizzera",
      "bonusGol": 13,
      "ruolo": Ruolo.C,
      "quotazione": 1
    },
    {
      "nome": "SHAQIRI",
      "team": "Svizzera",
      "bonusGol": 5,
      "ruolo": Ruolo.C,
      "quotazione": 16
    },
    {
      "nome": "STEFFEN",
      "team": "Svizzera",
      "bonusGol": 8,
      "ruolo": Ruolo.C,
      "quotazione": 5
    },
    {
      "nome": "VARGAS R.",
      "team": "Svizzera",
      "bonusGol": 5,
      "ruolo": Ruolo.A,
      "quotazione": 9
    },
    {
      "nome": "OKAFOR",
      "team": "Svizzera",
      "bonusGol": 5,
      "ruolo": Ruolo.A,
      "quotazione": 12
    },
    {
      "nome": "EMBOLO",
      "team": "Svizzera",
      "bonusGol": 4,
      "ruolo": Ruolo.A,
      "quotazione": 18
    },
    {
      "nome": "SEFEROVIC",
      "team": "Svizzera",
      "bonusGol": 6,
      "ruolo": Ruolo.A,
      "quotazione": 6
    }
  ]);

  giocatoriTuoi = new MatTableDataSource<Giocatori>([]);
  Crediti: number = 250;

  constructor(private _liveAnnouncer: LiveAnnouncer) { }

  @ViewChild(MatSort)
  sort!: MatSort;

  @ViewChild('paginator1')
  paginator!: MatPaginator;


  @ViewChild('paginator2')
  paginator2!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.giocatoriTuoi.paginator = this.paginator2;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addThis(row: any) {
    let trovato;
    let portieri = 0
    let difensori = 0
    let attaccanti = 0
    let centrocampisti = 0
    let crediti = 0
    for (let elem of this.giocatoriTuoi.data) {
      switch (elem.ruolo) {
        case Ruolo.A:
          attaccanti++
          break;
        case Ruolo.D:
          difensori++
          break;
        case Ruolo.P:
          portieri++
          break;
        case Ruolo.C:
          centrocampisti++
          break;
      }
      crediti += elem.quotazione ? elem.quotazione : 0;

      if (elem.nome == row.nome && elem.team === row.team && elem.quotazione === row.quotazione) {
        trovato = true
      }
    }

    if (trovato) {
      alert("hai già quel cazzo di giocatore");
      return;
    }
    if (centrocampisti == 8 && row.ruolo == Ruolo.C) {
      alert("hai già 8 centrocampisti");
      return;
    }
    if (difensori == 8 && row.ruolo == Ruolo.D) {
      alert("hai già 8 difensori");
      return;
    }
    if (portieri == 2 && row.ruolo == Ruolo.P) {
      alert("hai già 2 portieri");
      return;
    }
    if (attaccanti == 6 && row.ruolo == Ruolo.A) {
      alert("hai già 6 attaccanti");
      return;
    }
    if (crediti + row.quotazione > 250) {
      alert("Ehi Mino raiola, addo vue sci?! Hai finito i crediti");
      return;
    }

    this.giocatoriTuoi.data.push(row)
    this.Crediti = 250 - (crediti + row.quotazione);
    this.giocatoriTuoi.data.sort(this.compare)
      this.paginator2._changePageSize(this.paginator2.pageSize);
    console.log(this.giocatoriTuoi.data);
  }

  compare(a: Giocatori, b: Giocatori) {
    if (a.ruolo == Ruolo.P && (b.ruolo == Ruolo.C || b.ruolo == Ruolo.A || b.ruolo == Ruolo.D)) {
      return -1;
    } else if (a.ruolo == Ruolo.D && (b.ruolo == Ruolo.C || b.ruolo == Ruolo.A)) {
      return -1;
    } else if (a.ruolo == Ruolo.C && b.ruolo == Ruolo.A) {
      return -1;
    }
    return 1;
  }


  invia() {
    if (this.giocatoriTuoi.data.length != 24) {
      alert("Forse squadra incompleta, che cazzo stai inviando?")
    }
    this.downloadButtonPush();

  }
  ConvertToCSV(objArray: any): string {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';
    var row = "";

    for (var index in objArray[0]) {
      //Now convert each value to string and comma-separated
      row += index + ',';
    }
    row = row.slice(0, -1);
    //append Label row with line break
    str += row + '\r\n';

    for (var i = 0; i < array.length; i++) {
      var line = '';
      for (var index in array[i]) {
        if (line != '') line += ','

        line += array[i][index];
      }
      str += line + '\r\n';
    }
    return str;
  }


  downloadButtonPush() {
    var csvData = this.ConvertToCSV(this.giocatoriTuoi.data);
    var a = document.createElement("a");
    a.setAttribute('style', 'display:none;');
    document.body.appendChild(a);
    var blob = new Blob([csvData], { type: 'text/csv' });
    var url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'InviaASergio.csv';
    a.click();
  }


  removeThis(row: any) {
    this.giocatoriTuoi.data.forEach((element, index) => {
      if (element.nome == row.nome && element.team === row.team && element.quotazione === row.quotazione) {
        this.giocatoriTuoi.data.splice(index, 1);
        this.Crediti = this.Crediti + row.quotazione
      }
    });

    this.paginator2._changePageSize(this.paginator2.pageSize);
  }

  announceSortChange(sortState: Sort) {

    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
