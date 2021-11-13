export class Clienti {
    id?: number;
    ragioneSociale: string;
        partitaIva: string;
            tipoCliente!: string;
                email: string;
                pec!: string;
telefono: string;
    nomeContatto: string;
        cognomeContatto: string;
            telefonoContatto: string;
                emailContatto: string;
                indirizzoSedeOperativa!: {
                    id?: number;
                    via: string;
                    civico: string;
                    cap: string;
                    localita: string;
                    comune: {
                        id?: number;
                        nome: string;
                        provincia: {
                            id?: number;
                            nome: string;
                            sigla: string;
                        };
                    };
                };
indirizzoSedeLegale!: {
    id?: number;
    via: string;
    civico: string;
    cap: string;
    localita: string;
    comune: {
        id?: number;
        nome: string;
        provincia: {
            id?: number;
            nome: string;
            sigla: string;
        };
    };
};
dataInserimento: string;
    dataUltimoContatto: string;
        fatturatoAnnuale: string
        constructor()
        {
this.ragioneSociale="",
this.partitaIva="",
this.tipoCliente="",
this.email="",
this.pec="",
this.telefono="",
this.nomeContatto="",
this.cognomeContatto="",
this.telefonoContatto="",
this.emailContatto="",
    this.indirizzoSedeOperativa.via="",
    this.indirizzoSedeOperativa.civico="",
    this.indirizzoSedeOperativa.cap="",
    this.indirizzoSedeOperativa.localita="",
        this.indirizzoSedeOperativa.comune.id=0,
        this.indirizzoSedeOperativa.comune.nome="",
            this.indirizzoSedeOperativa.comune.provincia.id=0,
            this.indirizzoSedeOperativa.comune.provincia.nome="",
            this.indirizzoSedeOperativa.comune.provincia.sigla="",
this.indirizzoSedeLegale.id=0,
this.indirizzoSedeLegale.via="",
this.indirizzoSedeLegale.civico="",
this.indirizzoSedeLegale.cap="",
this.indirizzoSedeLegale.localita="",
this.indirizzoSedeLegale.comune.id=0,
this.indirizzoSedeLegale.comune.nome="",
this.indirizzoSedeLegale.comune.provincia.id=0,
this.indirizzoSedeLegale.comune.provincia.nome="",
this.indirizzoSedeLegale.comune.provincia.sigla="",
this.dataInserimento="2019-06-01T08:11:01.911+00:00",
this.dataUltimoContatto="2021-03-24T21:32:06.375+00:00",
this.fatturatoAnnuale=""         


        }
    }



