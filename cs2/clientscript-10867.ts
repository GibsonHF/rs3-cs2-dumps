//
function script10867(int0: component): void {
    var int1 = MAX(0, (((IF_GETWIDTH(comp(1576, 0)) / 2) - 180) + RANDOMINC(270)));
    var int2 = MAX(0, (((IF_GETHEIGHT(comp(1576, 0)) / 2) - 180) + RANDOMINC(270)));
    IF_SETSIZE(1, 1, 0, 0, int0);
    IF_SETPOSITION(int1, int2, 0, 0, int0);
    IF_SETHIDE(false, int0);
    IF_SETONTIMER(callback(script10868, int0), int0);
    return;
}