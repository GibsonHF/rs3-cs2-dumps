//
function script7870(int0: component, int1: int, int2: int, int3: int, int4: unknown_int, int5: unknown_int, int6: unknown_int, string0: unknown_string): void {
    if ((varclient_3484 == 1)) {
        return;
    };
    var int7 = int0;
    if ((int1 == -1)) {
        int7 = IF_GETLAYER(int0);
    };
    if ((int4 == 1)) {
        if ((((int1 == -1) && (IF_FIND(int0) == 1)) || (CC_FIND(int0, int1) == 1))) {
            CC_CREATE[1](int7, 5, int2);
            CC_SETSIZE[1]((CC_GETWIDTH() + int3), (CC_GETHEIGHT() + int3), 0, 0);
            CC_SETPOSITION[1]((CC_GETX() - (int3 / 2)), (CC_GETY() - (int3 / 2)), 0, 0);
            CC_SETGRAPHIC[1](19633 as graphic);
            CC_SETONMOUSEREPEAT[1](callback(script8799, string0, -2147483645, -2147483643));
        };
        if ((int5 != -1)) {
            IF_SETONTIMER(callback(script7865, (CLIENTCLOCK() + 10), int6, int5), 93061239);
        };
    } else {
        if ((CC_FIND(int7, int2) == 1)) {
            CC_DELETE();
        };
        script8808();
        if ((int5 != -1)) {
            IF_SETONTIMER(callback(script7864, (CLIENTCLOCK() + 10), int5), comp(1420, 119));
        };
    };
    return;
}