//
function script11123(string0: string): void {
    var int0 = 104792067;
    CC_DELETEALL(int0);
    var int1 = 0;
    var int2 = -1 as obj;
    var int3 = 0;
    var int4 = 0;
    while ((int1 < ENUM_GETOUTPUTCOUNT(9849))) {
        CC_CREATE(int0, 5, int1);
        int2 = enum_getvalue(0, 33, 9849 as cs2enum, int1);
        int3 = INV_TOTAL(93, int2);
        if ((int3 > 0)) {
            CC_SETPOSITION(((int4 * 44) + 8), 4, 0, 0);
            CC_SETSIZE(36, 32, 0, 0);
            CC_SETOBJECT(int2, int3);
            CC_SETONMOUSEREPEAT(callback(script8799, OC_NAME(int2), -2147483645, -2147483643));
            int4 = (int4 + 1);
        } else {
            CC_SETHIDE(1);
        };
        int1 = (int1 + 1);
    };
    IF_SETSIZE(((int4 * 44) + 4), 50, 0, 0, int0);
    IF_SETTEXT(string0, 104792068);
    return;
}