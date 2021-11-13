export interface IFATTURE {

    content: IFatture[];
}
export interface IFatture {
   
    id?: number,
            data: string,
            numero:number,
            anno: number,
            importo: number,
            stato: {
                id?: number,
                nome: string
            
            },
            cliente: {
                id: number,
                ragioneSociale: string,
                partitaIva: string,
                tipoCliente: string,
                email: string,
                pec: string,
                telefono: string,
                nomeContatto: string,
                cognomeContatto: string,
                telefonoContatto: string,
                emailContatto: string,
                indirizzoSedeOperativa: {
                    id: number,
                    via: string,
                    civico: string,
                    cap: string,
                    localita: string,
                    comune: {
                        id: number,
                        nome: string,
                        provincia: {
                            id: number,
                            nome: string,
                            sigla: string
                        }
                    }
                },
                indirizzoSedeLegale: {
                    id: number,
                    via: string,
                    civico: string,
                    cap: string,
                    localita: string,
                    comune: {
                        id: number,
                        nome: string,
                        provincia: {
                            id: number,
                            nome: string,
                            sigla: string
                        }
                    }
                },
                dataInserimento: '2019-06-01T08:11:01.911+00:00',
                dataUltimoContatto: '2021-03-24T21:32:06.375+00:00',
            }
        }
