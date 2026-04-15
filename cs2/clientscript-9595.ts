//
function script9595(int0: component, int1: unknown_int): void {
    if ((IF_FIND(int0) == 1)) {
        cc_setparam(5022, int1);
    };
    IF_SETONRESIZE(callback(script9596, -2147483645), int0);
    IF_SETONTIMER(callback(script9597, -2147483645, IF_GETWIDTH(int0), IF_GETHEIGHT(int0)), int0);
    return;
}