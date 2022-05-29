/* 
    Celsius em Fahrenheit e vice-versa

    Crie uma função que receba uma String em Celsius e vice-versa e faça uma transformação de uma unidade para outra

    F = C * 9/5 + 32
    C = (F-32) * 5/9

*/

function transformTemperature(temp){
    let tempType = ''
    let tempNumber = 0
    let finalTemp = ''

    tempType = tempIdentification(temp)
    tempNumber = tempTransformToNumber(temp)

    if(tempNumber == 'not valid'){
        finalTemp = 'Temperatura Inválida';
    }else if(tempType == 'C'){
        finalTemp = tempNumber * 9/5 + 32
        finalTemp = String(finalTemp) + 'F'
    }else if(tempType == 'F'){
        finalTemp = (tempNumber - 32) * 5/9
        finalTemp = String(finalTemp) + 'C' 
    }else{
        console.log('Temperatura Inválida');
    }
    console.log(finalTemp);
}

function tempIdentification(temp){
    let tempType
    if(String(temp).toUpperCase().includes('F')){
        tempType = 'F'
    }else if(String(temp).toUpperCase().includes('C')){
        tempType = 'C'
    }
    return tempType
}

function tempTransformToNumber(temp){
    if(temp.toUpperCase().includes('F')){
        temp =  temp.toUpperCase().replace('F',' ')
    }else if(temp.toUpperCase().includes('C')){
        temp = temp.toUpperCase().replace('C',' ')
    }else{
        return 'Temperatura inválida'
    }

    if(temp.includes('A','B','D','E', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q','R','S', 'T', 'V', 'W', 'X', 'Y', 'Z')){
        return 'not valid'
    }
    return Number(temp)
}
    
function tempTransformation(temp){
    if(String(temp).toUpperCase().includes('F')){
        temp.toUpperCase().replace('F','C')
    }else if(temp.toUpperCase().includes('C')){
        String(temp).toUpperCase().replace('C','F')}
    return temp
}

transformTemperature('30c')







