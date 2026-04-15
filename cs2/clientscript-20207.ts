//
function script20207(): void {
    IF_SETHIDE(true, comp(1409, 5));
    IF_SETHIDE(true, comp(1409, 7));
    IF_SETHIDE(true, comp(1409, 23));
    script2995(comp(1409, 6), 0, 0, 0, 0, 0, 0, 0, 1, 1, 2195 as dbrow, "Area selection unavailable.");
    IF_SETONTIMER(callback(), comp(1409, 1));
    IF_SETPARAM_INT(9341, -1, 92340225);
    return;
}