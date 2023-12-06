export interface DobavljacFullDto {
  sifraDobavljaca: number;
  naziv: string;
  adresa: {
    idAdresa: number;
    nazivAdresa: string;
    mesto: {
      idMesto: number;
      nazivMesta: string;
    };
  };
}
