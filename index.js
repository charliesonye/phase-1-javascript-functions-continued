// Your code here
function saturdayFun(activity = 'roller-skate') {
return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (activity = 'go to the office') {
return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(highlight = '*'){
    const innerWrap = function(adjective){
        return `You are ${highlight}${adjective}${highlight}!`
    }
    return innerWrap;
    
    
}