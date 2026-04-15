//
function script9597(int0: component, int1: int, int2: int): void {
    if (((int2 != IF_GETHEIGHT(int0)) || (int1 != IF_GETWIDTH(int0)))) {
        IF_SETONTIMER(callback(script9597, -2147483645, IF_GETWIDTH(int0), IF_GETHEIGHT(int0)), int0);
        IF_CALLONRESIZE(int0);
    };
    return;
}