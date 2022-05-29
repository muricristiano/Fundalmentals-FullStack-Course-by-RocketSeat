/* 
    Operadores unários
        - typeof

        - delete
*/

const person = {
    name: 'Murilo',
    age: 29
}
/* Qual o tipo de dado */
console.log(typeof person.name);


/* Deletar uma propriedade de um objeto */
delete person.age
console.log(person);