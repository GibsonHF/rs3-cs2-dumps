//
function script16215(int0: component, int1: unknown_int, int2: int, int3: int, int4: int): void {
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    if ((CC_FIND(int0, int2) == 1)) {
        CC_SETPOSITION(CC_GETX(), MAX(0, (CC_GETY() - 8)), 0, 0);
        if ((CC_GETY() != 0)) {
            return;
        };
        int5 = cc_getparam(6408);
        CC_SETONTIMER(callback());
        CC_DELETE();
        if ((CC_FINDBYCATEGORY(int0, int1, 0) == 1)) {
            int7 = cc_getparam(5945);
            int6 = cc_getparam(6409);
            cc_setparam(5945, MAX(0, (int7 - 1)));
        };
        if ((CC_FIND(int0, int3) == 1)) {
            CC_SETTEXT(script361(MIN(int6, (int5 + int4)), 0));
        };
    };
    return;
}