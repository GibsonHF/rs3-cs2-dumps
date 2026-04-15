//
function script7488(int0: int): void {
    if ((int0 == 0)) {
        return;
    };
    if ((int0 == 1)) {
        varclient_1968 = 1;
    } else if (((int0 != 2) || (varclient_1966 != comp(1311, 172)))) {
        varclient_1968 = 0;
    };
    if ((int0 == 2)) {
        IF_SETHIDE(false, enum_getvalue(0, 9, 5961 as cs2enum, 20));
    };
    if ((int0 == 1)) {
        IF_SETHIDE(false, comp(1311, 372));
        IF_SETHIDE(false, comp(1311, 376));
    } else {
        IF_SETHIDE(true, comp(1311, 372));
        IF_SETHIDE(true, comp(1311, 376));
    };
    script6443(0, 0, 10, 200, 1, 1);
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    IF_SETHIDE(true, comp(1311, 447));
    IF_SETHIDE(true, comp(1311, 472));
    IF_SETHIDE(true, comp(1311, 613));
    IF_SETHIDE(true, comp(1311, 196));
    IF_SETHIDE(true, comp(1311, 380));
    IF_SETHIDE(true, comp(1311, 518));
    IF_SETHIDE(true, comp(1311, 588));
    IF_SETHIDE(true, comp(1311, 593));
    IF_SETHIDE(true, comp(1311, 603));
    IF_SETHIDE(true, comp(1311, 511));
    if ((int0 == 5)) {
        IF_SETHIDE(true, comp(1311, 380));
        IF_SETHIDE(true, comp(1311, 518));
        IF_SETHIDE(true, comp(1311, 363));
        IF_SETHIDE(true, comp(1311, 593));
        IF_SETHIDE(true, comp(1311, 603));
        IF_SETHIDE(true, comp(1311, 588));
        IF_SETHIDE(true, comp(1311, 345));
        IF_SETHIDE(true, comp(1311, 346));
        IF_SETHIDE(true, comp(1311, 347));
        IF_SETHIDE(true, comp(1311, 348));
        IF_SETHIDE(true, comp(1311, 349));
        IF_SETHIDE(true, comp(1311, 350));
        IF_SETHIDE(true, comp(1311, 469));
        int1 = (IF_GETX(comp(1311, 380)) + 20);
        int2 = IF_GETY(comp(1311, 449));
        IF_SETPOSITION(int1, int2, 0, 0, comp(1311, 449));
        int3 = (IF_GETWIDTH(comp(1311, 380)) - 40);
        int4 = IF_GETHEIGHT(comp(1311, 449));
        IF_SETSIZE(int3, int4, 0, 0, comp(1311, 449));
    } else {
        IF_SETHIDE(false, comp(1311, 345));
        IF_SETHIDE(false, comp(1311, 346));
        IF_SETHIDE(false, comp(1311, 347));
        IF_SETHIDE(false, comp(1311, 348));
        IF_SETHIDE(false, comp(1311, 349));
        IF_SETHIDE(false, comp(1311, 350));
        IF_SETHIDE(false, comp(1311, 469));
    };
    IF_SETHIDE(false, comp(1311, 343));
    varclient_1966 = comp(-1, 65535);
    varclient_1964 = comp(-1, 65535);
    varclient_1965 = -1;
    varclient_4618 = 0;
    return;
}