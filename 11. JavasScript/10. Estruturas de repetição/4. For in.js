// for ... in

// FOR PARA OBJECT

/* 
    É um for que percorre:
        Strings >>> caractere por caractere
        Arrays >>> elemento por elemento
        Number >>> OBS: Usando Typecasting, caractere por caractere
 */
let person = {
    name: 'Muri',
    age: 29,
    weight: 82.5
}

for (x in person){
    console.log(x, person[x]);
}