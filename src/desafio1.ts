// transformar o código para TS sem que apresente erros

/* let employee = {};
employee.code = 10;
employee.name = "John"; */

// RESPOSTA 1
let employee0 ={
    code: 1,
    name: "John",
}

console.log(`Código ${employee0.code} e o nome ${employee0.name} \n`)

// RESPOSTA 2 e 3
interface Employee {
    code: number,
    name: string;
}

let employee1: Employee = {
    code: 2,
    name: "John",
}

let employee2 = {} as Employee;
employee2.code = 3;
employee2.name = "John";

console.log(`Código ${employee1.code} e o nome ${employee1.name} \n`)
console.log(`Código ${employee2.code} e o nome ${employee2.name} \n`);




// RESPOSTA 4

let employee3: { code: number, name: string } ={
    code: 4,
    name: "John",
}

console.log(`Código ${employee3.code} e o nome ${employee3.name} \n`);