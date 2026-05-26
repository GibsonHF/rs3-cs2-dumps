//
function script10867(int0: number): void {
    var int1 = MAX(0, (((IF_GETWIDTH(103284736) / 2) - 180) + RANDOMINC(270)));
    var int2 = MAX(0, (((IF_GETHEIGHT(103284736) / 2) - 180) + RANDOMINC(270)));
    IF_SETSIZE(1, 1, 0, 0, int0);
    IF_SETPOSITION(int1, int2, 0, 0, int0);
    IF_SETHIDE(0, int0);
    IF_SETONTIMER(callback(script10868, int0), int0);
    return;
}