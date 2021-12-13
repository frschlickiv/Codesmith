//speed limit = 70
// every 5 kpH ->

//Math.floor(1.3)

// more than 12 points ---> suspended

checkSpeed(77);
function checkSpeed(speed) {
const speedLimit = 70;
const kmPerPoint = 5;


if (speed <= speedLimit + kmPerPoint) {
    console.log ('Ok');
    return;
}
const points = Math.floor((speed - speedLimit) /kmPerPoint);
if (points >= 12)
console.log ('License Revoked');

else console.log('Points', points);

}