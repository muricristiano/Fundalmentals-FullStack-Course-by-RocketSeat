// 1. Declare uma variável de nome weight
let weight;
// 2. Que tipo de dado é a variável acima?
console.log(`O tipo de dado da variável weight é ` + typeof weight);
/* 
    3. Declare uma variável e atribua valores para cada um dos dados:
        - name: String
        - age: Number (integer)
        - starts: Number (float)
        - isSubscribed: Boolean
*/
    var name, age, stars, isSubscribed

    name = 'Murilo'
    age = 29
    stars = 4.99
    isSubscribed = false

/*     
    4. A variável student abaixo é de que tipo de dados?
*/
    let student = {};

    console.log(typeof student);

/* 
    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
 */

    student = {
        name: 'Murilo',
        age: 29,
        stars: 4.99,
        weight: 82.5,
        isSubscribed: false
    }

/* 
    4.2 Mostre no console a seguinte mensagem:

        <name> de idade <age> pesa <weight> kg
 */
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`);

/* 
    5. Declare uma variável do tipo array, de nome students e atribua a ela nenhum valor, ou seja, somente o array vazio
 */
    var students = {}
/* 
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array)
 */
    students = student;

// 7. Coloque no console o valor da posição zero do array acima

    console.log(students[0])

// 8. Crie um novo student e coloque na posição 1 do Array students

    const gui = {
        name: 'Guilherme',
        age: 17,
        weight: 50
    }

    students[1] = gui;

    console.log(students);

// 9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta rode o código e veja se você acertou.

console.log(a)
var a = 1;

    // RESPOSTA: UNDEFINED