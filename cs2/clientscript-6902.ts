//
function script6902(int0: component): void {
    CC_DELETEALL(int0);
    var int1 = (1 / 2);
    if ((MODULO(1, 2) != 0)) {
        int1 = (int1 + 1);
    };
    var int2 = ((IF_GETWIDTH(int0) - (int1 * 36)) / MAX((int1 - 1), 1));
    var int3 = 0;
    var int4 = -1 as obj;
    var int5 = 0;
    var string0 = "";
    while ((int3 < 1)) {
        [int4, int5] = [INV_GETOBJ(136 as inv, int3), INV_GETNUM(136 as inv, int3)];
        if ((int4 == -1 as obj)) {
            [int4, int5] = [INV_GETOBJ(272 as inv, int3), INV_GETNUM(272 as inv, int3)];
        };
        if ((int4 != -1 as obj)) {
            if ((int5 <= 1)) {
                string0 = OC_NAME(int4);
            } else {
                string0 = `${OC_NAME(int4)} x ${TOSTRING_LOCALISED(int5, 1)}`;
            };
            CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
            CC_SETSIZE(36, 32, 0, 0);
            CC_SETOBJECT(int4, int5);
            CC_SETOUTLINE(1);
            if ((CC_GETID() < int1)) {
                CC_SETPOSITION((CC_GETID() * (36 + int2)), 0, 0, 0);
                CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
            } else {
                CC_SETPOSITION(((CC_GETID() - int1) * (36 + int2)), 0, 0, 2);
                CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
            };
        };
        int3 = (int3 + 1);
    };
    return;
}