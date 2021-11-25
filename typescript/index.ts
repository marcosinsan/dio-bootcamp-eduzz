function soma (a: number, b: number) {
    return a + b;
}


// interfaces

interface IAnimal {
    nome: String;
    tipo: 'terrestre' | 'aquático';
    domestico: boolean;
   
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'médio' | 'grande';
}

const animal: IAnimal = {
    nome: "Elefante",
    tipo: 'terrestre',
    domestico: false
}

// types
type IDomestico = ICanino | IFelino;

const animal2: IDomestico = {
    domestico: true,
    nome: 'cachorro',
    tipo: 'terrestre',
    porte: 'médio',
    visaoNoturna: false
}

const felino: IDomestico = {
    domestico: false,
    nome: "Leão",
    tipo: 'terrestre',
    visaoNoturna: true
}

