// Code your solution in this file!
function distanceFromHqInBlocks(pickUp) {
    return Math.abs(pickUp - 42);
}

function distanceFromHqInFeet(origin) {
    return (distanceFromHqInBlocks(origin) * 264)
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    const distance = Math.abs(start - destination) * 264;
    if ( distance < 400) {
        return 0
    } 

       else if (distance >= 2500 ) {
        return 'cannot travel that far'
    }

    else if ( distance < 2000 ) {
        return ((distance -400) * .02 );
    }

    else if (distance > 2000 ) {
        return 25;

    }
 
    }




