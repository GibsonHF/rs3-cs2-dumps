//
function script19620(int0: component, int1: component, int2: int, int3: component, int4: int, int5: unknown_int, int6: int, int7: int): void {
    if ((int2 <= IF_GETHEIGHT(int1))) {
        IF_SETSCROLLSIZE(0, 0, int1);
        IF_SETSCROLLPOS(0, 0, int1);
        if ((int6 == -1)) {
            script7791(int0, int1);
        } else {
            CC_DELETEALL(int0);
            IF_SETSIZE(MAX(0, int6), MAX(0, int7), 1, 1, int1);
        };
        return;
    };
    IF_SETSCROLLSIZE(0, int2, int1);
    if ((int6 != -1)) {
        IF_SETSIZE(MAX(0, (int6 + 16)), MAX(0, int7), 1, 1, int1);
    };
    if ((int5 == 1)) {
        if ((int3 == comp(-1, 65535))) {
            var int3 = int1;
        };
        if ((((int4 == -1) && (IF_FIND(int3) == 1)) || (CC_FIND(int3, int4) == 1))) {
            IF_SETSCROLLPOS(0, ((CC_GETY() + (CC_GETHEIGHT() / 2)) - (IF_GETHEIGHT(int1) / 2)), int1);
        };
    };
    if ((IF_GETHEIGHT(int0) < 30)) {
        CC_DELETEALL(int0);
    } else {
        script7791(int0, int1);
    };
    return;
}