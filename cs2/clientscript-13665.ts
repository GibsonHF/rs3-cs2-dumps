//
function script13665(int0: number, int1: number, int2: number, int3: number): void {
    if ((IF_FIND(int0) == 1)) {
        cc_setparam(6408, 0);
        cc_setparam(6409, 0);
        cc_setparam(5942, 8000);
        CC_SETONTIMER(callback(script13666, int0, int1, int2, int3));
    };
    return;
}