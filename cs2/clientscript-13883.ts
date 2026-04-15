//
function script13883(int0: component, int1: int, int2: unknown_int): void {
    if ((varclient_6708 == 1)) {
        return;
    };
    if ((varclient_6707 < 0)) {
        IF_SETHIDE(true, comp(517, 209));
        IF_SETHIDE(true, comp(517, 207));
        return;
    };
    if ((script13884(int0, int1, int2) == 1)) {
        return;
    };
    if ((CC_FIND(int0, int1) == 1)) {
        IF_SETHIDE(true, comp(517, 209));
        if ((int2 == 0)) {
            if (((IF_GETX(comp(517, 209)) == (CC_GETX() - 1)) && (IF_GETY(comp(517, 209)) == (CC_GETY() - 1)))) {
                IF_SETHIDE(true, comp(517, 209));
            };
        } else {
            if ((int0 != comp(517, 217))) {
                IF_SETHIDE(true, comp(517, 211));
                IF_SETHIDE(true, comp(517, 214));
            } else if ((varclient_6707 < int1)) {
                IF_SETHIDE(true, comp(517, 211));
                IF_SETHIDE(false, comp(517, 214));
            } else {
                IF_SETHIDE(false, comp(517, 211));
                IF_SETHIDE(true, comp(517, 214));
            };
            IF_SETPOSITION((CC_GETX() - 1), (CC_GETY() - 1), 0, 0, comp(517, 209));
            IF_SETSIZE((CC_GETWIDTH() + 2), (CC_GETHEIGHT() + 2), 0, 0, comp(517, 209));
            IF_SETHIDE(false, comp(517, 209));
        };
    };
    return;
}