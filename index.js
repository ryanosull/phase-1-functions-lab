// Code your solution in this file!
// function distanceFromHqInBlocks(pickUp) {
//     if (pickUp > 42){
//         return pickUp - 42;
//     } else {
//         return 42 - pickUp;
//     }
// }  *** this works, ternary below

function distanceFromHqInBlocks ( location ) {
    return location < 42 ? 42 - location : location - 42
}

function distanceFromHqInFeet(blockNumber) {
    // console.log(distanceFromHqInBlocks(blockNumber))
    // let remainingBlocks = distanceFromHqInBlocks(blockNumber)
    // return remainingBlocks * 264
    return distanceFromHqInBlocks(blockNumber) * 264 
}

function distanceTraveledInFeet (start, destination) {
    // if (start >= destination) {
    //     return (start - destination) * 264 
    // } else {
    //     return(destination - start) * 264
    // }
    return start >= destination ? (start - destination) * 264 : (destination - start) * 264
}

function calculatesFarePrice (startBlock, endBlock) {
    let distance = distanceTraveledInFeet(startBlock, endBlock)
    if (distance <= 400) {
        return 0
    } else if (distance <= 2000) {
        return (distance - 400) * .02
    }else if (distance <=2500) {
        return 25
    } else {
        return "cannot travel that far"
    }
} 