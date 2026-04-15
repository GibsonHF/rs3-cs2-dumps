//
function script2480(): void {
    var int0 = IF_GETHEIGHT(comp(1247, 0));
    IF_SETSCROLLSIZE(0, 275, comp(1247, 1));
    script7791(comp(1247, 2), comp(1247, 1));
    if ((int0 >= 275)) {
        IF_SETSIZE(0, 0, 1, 1, comp(1247, 1));
        IF_SETHIDE(true, comp(1247, 2));
    } else {
        IF_SETHIDE(false, comp(1247, 2));
        IF_SETSIZE(20, 0, 1, 1, comp(1247, 1));
    };
    return;
}