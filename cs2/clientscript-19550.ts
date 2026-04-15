//
function script19550(int0: component, int1: int, int2: unknown_int): void {
    if ((varclient_6708 == 1)) {
        return;
    };
    if ((varclient_6707 < 0)) {
        IF_SETHIDE(true, comp(1313, 82));
        IF_SETHIDE(true, comp(1313, 80));
        return;
    };
    if ((script19551(int0, int2) == 1)) {
        return;
    };
    if ((CC_FIND(int0, int1) == 1)) {
        IF_SETHIDE(true, comp(1313, 82));
        if ((int2 == 0)) {
            if (((IF_GETX(comp(1313, 82)) == (CC_GETX() - 1)) && (IF_GETY(comp(1313, 82)) == (CC_GETY() - 1)))) {
                IF_SETHIDE(true, comp(1313, 82));
            };
        } else {
            if ((int0 != comp(1313, 90))) {
                IF_SETHIDE(true, comp(1313, 84));
                IF_SETHIDE(true, comp(1313, 87));
            } else if ((varclient_6707 < int1)) {
                IF_SETHIDE(true, comp(1313, 84));
                IF_SETHIDE(false, comp(1313, 87));
            } else {
                IF_SETHIDE(false, comp(1313, 84));
                IF_SETHIDE(true, comp(1313, 87));
            };
            IF_SETPOSITION((CC_GETX() - 1), (CC_GETY() - 1), 0, 0, comp(1313, 82));
            IF_SETSIZE((CC_GETWIDTH() + 2), (CC_GETHEIGHT() + 2), 0, 0, comp(1313, 82));
            IF_SETHIDE(false, comp(1313, 82));
        };
    };
    return;
}