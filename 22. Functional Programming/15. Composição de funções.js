/* 
    # Um encadeamento de funções
    # Uma função que retorna um dado e vai para outra função, que retorna um dado e vai para outra função, que retorna e continua...
*/

const people = ['Murilo', 'Gui', 'Angela', 'Marco', 'Doming']
const upperCasePeopleThatStartsWithD = people.filter(person => person.startsWith('D')).map(dperson => dperson.toUpperCase());