module.exports = function getFlag(agr1, arg2){
    let processPosition1 = require(process.argv.indexOf(arg1))
    let processPosition2 = require(process.argv.indexOf(arg2))
    processPosition1 ++
    processPosition2 ++
    let process1 = require(process.argv[processPosition1])
    let process2 = require(process.argv[processPosition2])
    return processPosition1, processPosition2
}