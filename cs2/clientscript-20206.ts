//
function script20206(): void {
    IF_SETHIDE(false, comp(1409, 5));
    IF_SETHIDE(false, comp(1409, 7));
    IF_SETHIDE(false, comp(1409, 23));
    CC_DELETEALL(comp(1409, 6));
    CC_DELETEALL(comp(1409, 25));
    IF_SETONTIMER(callback(), comp(1409, 1));
    IF_SETPARAM_INT(9341, -1, 92340225);
    return;
}