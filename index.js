// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
function mondayWork(time= "go to the office"){
    return `This Monday, I will ${time}.`
}
function wrapAdjective(flair = '*'){
    return function(adj = 'special'){
        return `You are ${flair}${adj}${flair}!`
    }
}