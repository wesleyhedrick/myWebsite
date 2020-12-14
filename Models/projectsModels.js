const projects = require('../projects.json');

function getCount(){
    return projects.length;
}


function loadProjects(beginningIndex, endingIndex, receivingArray, sourceArray){
    receivingArray = [];
    console.log('total projects', getCount())

    if (getCount()-beginningIndex<5){
        endingIndex = getCount();
        console.log('endingIndex', endingIndex)
    }

    for(i=beginningIndex;i<endingIndex;i++){
       
        receivingArray.push(sourceArray[i])
    }
    console.log(receivingArray)
    return receivingArray;
}

module.exports = {
    getCount,
    loadProjects
}





