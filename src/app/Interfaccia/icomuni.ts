export interface Comune {
    content: comune[];  
}

export interface comune {
    id: number,
    nome: string,
    provincia: {
        id: number,
        nome: string,
        sigla: string
    } 
}