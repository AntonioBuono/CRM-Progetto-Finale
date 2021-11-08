export interface ICliente {
    id: 1,
    ragioneSociale: string,
        partitaIva:string,
            tipoCliente: string,
                email:string,
pec:string,
telefono: string,
    nomeContatto: string,
        cognomeContatto:string,
            telefonoContatto: string,
                emailContatto: string,
indirizzoSedeOperativa: {
    id: 2,
        via: string,
            civico: string,
                cap: string,
                    localita: string,
                        comune: {
        id: 1,
            nome: string,
                provincia: {
            id: 1,
                nome:string,
                    sigla: string,
        }
    }
},
indirizzoSedeLegale: {
    id: 1,
        via: string,
            civico: string,
                cap: string,
                    localita: string,
                        comune: {
        id: 1,
            nome:string,
                provincia: {
            id: 1,
                nome:string,
                    sigla:string,
        }
    }
},
dataInserimento: string,
    dataUltimoContatto:string,
        fatturatoAnnuale: string,
}
