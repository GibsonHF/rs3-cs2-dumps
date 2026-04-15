//
function script4736(int0: component, int1: unknown_int): void {
    var int2 = 1820;
    var int3 = -1 as inv;
    if ((varbitplayer_3079 > 0)) {
        int3 = enum_getvalue(0, 39, 3879 as cs2enum, varbitplayer_3079);
        if ((int3 != -1 as inv)) {
            int2 = INV_SIZE(int3);
        };
    };
    IF_SETSCROLLPOS(0, 0, int0);
    CC_DELETEALL(int0);
    var int4 = 0;
    while ((int4 < int2)) {
        CC_CREATE(int0, 5, int4);
        CC_SETSIZE(0, 0, 0, 0);
        CC_SETPOSITION(0, 0, 0, 0);
        CC_SETHIDE(true);
        int4 = (int4 + 1);
    };
    return;
}