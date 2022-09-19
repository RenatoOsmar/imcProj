export type Level = {
    title:string;
    color:string;
    icon:string;
    imc: number[];
    yourImc?: number;
}


export const levels: Level[] = [
    {title:'Magreza', color:'#96A', icon:'magrelo', imc:[0, 18.5]},
    {title:'Normal', color:'#96A', icon:'sarado', imc:[18.6, 24.9]},
    {title:'Sobrepeso', color:'#96A', icon:'sobrepeso', imc:[25, 30]},
    {title:'Obesidade', color:'#96A', icon:'gordines', imc:[30.1, 99]},
];

export function calculateImc(height: number, weight: number) {
    const imc = weight / (height * height);

    for(let i in levels) {
        if(imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
            let levelCopy:Level = {...levels[i]};
            levelCopy.yourImc = parseFloat(imc.toFixed(2));
            return levelCopy;
        }
    }

    return null;
}