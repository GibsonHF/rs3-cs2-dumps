//
function script19544(int0: int): void {
    var int1 = IF_GETHEIGHT(comp(1313, 74));
    IF_SETSCROLLSIZE(0, MAX(int0, int1), comp(1313, 74));
    IF_SETSCROLLPOS(0, varclient_8168, comp(1313, 74));
    if ((int0 > int1)) {
        IF_SETHIDE(false, comp(1313, 70));
        script72(comp(1313, 70), comp(1313, 74), IF_GETSCROLLY(comp(1313, 74)));
    } else {
        IF_SETHIDE(true, comp(1313, 70));
    };
    script157(comp(1313, 70), comp(1313, 74), IF_GETSCROLLY(comp(1313, 74)), 1);
    varclient_8167 = int0;
    return;
}