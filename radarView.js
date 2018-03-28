// Let's say you have some objects, and you know their relative bearing towards your current position. (An object at due North is 0 degrees, Due South is 180 degrees).
// You know that you are facing a particular direction (say facing NE - 45 degrees) and you have a view range of 90 degrees (which means that you can see everything from due North to due East)
// How would you figure out which objects you can see?
// Remember - if you're facing North, then you can see anything from -45 degrees (or +315) to +45 degrees.

//Node.js 6.5
//Plain Javascript

function canSee (degree) {
    var canSee = false;
    var vision = 45;
    var bearing = 0;
   
    var angle = Math.abs (bearing - degree);
    if (angle > 180 ) angle = 360 - angle;
    if (angle < vision) canSee = true;
    return canSee
}
