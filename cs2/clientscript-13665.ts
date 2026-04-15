//
function script13665(int0: component, int1: unknown_int, int2: unknown_int, int3: unknown_int): void {
    if ((IF_FIND(int0) == 1)) {
        cc_setparam(6408, 0);
        cc_setparam(6409, 0);
        cc_setparam(5942, 8000);
        CC_SETONTIMER(callback(script13666, int0, int1, int2, int3));
    };
    return;
}