// if ... else

function medirFebre(temperature){
    if (temperature >= 38) {
        return 'Febre Alta'
    } else if (temperature < 38 && temperature >= 37) {
        return 'Febre Leve'
    } else {
        return 'Saudável'
    }
}

console.log(medirFebre(37));