//
function script19551(int0: component, int1: unknown_int): unknown_int {
    if (((int0 != comp(1313, 78)) && (int0 != comp(1313, 79)))) {
        return 0;
    };
    var int2 = MAX(0, (script19579() - 1));
    if (((CC_FIND(comp(1313, 75), int2) == 1) && (CC_FIND[1](comp(1313, 90), int2) == 1))) {
        if ((int1 == 0)) {
            if (((IF_GETX(comp(1313, 82)) == ((CC_GETX() + CC_GETWIDTH()) - 1)) && (IF_GETY(comp(1313, 82)) == (CC_GETY() - 1)))) {
                IF_SETHIDE(true, comp(1313, 82));
            };
        } else {
            IF_SETPOSITION(((CC_GETX() + CC_GETWIDTH()) - 1), (CC_GETY() - 1), 0, 0, comp(1313, 82));
            IF_SETSIZE((CC_GETWIDTH[1]() + 2), (CC_GETHEIGHT[1]() + 2), 0, 0, comp(1313, 82));
            IF_SETHIDE(false, comp(1313, 82));
            IF_SETHIDE(true, comp(1313, 84));
            IF_SETHIDE(true, comp(1313, 87));
        };
    };
    return 1;
}