 
interface IEmployee {
    name: string;
    code: number;
}

const employee: IEmployee = {
    name: 'John',
    code: 10
}

console.log('Dados do funcionário: ',employee);