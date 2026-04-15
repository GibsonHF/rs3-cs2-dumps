//
function script6372(int0: int, int1: int): void {
    var int2 = enum_getvalue(0, 9, 13326 as cs2enum, int0);
    var int3 = IF_GETPARENTLAYER(int2);
    var int4 = enum_getvalue(0, 9, 13327 as cs2enum, int0);
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    if ((script6375() == 1)) {
        [int5, int6, int7, int8] = script13137();
        int5 = (int5 + (int7 / 2));
        int6 = (int6 + (int8 / 2));
        int7 = MAX(20, (int7 + 2));
        int8 = MAX(20, (int8 + 2));
        if ((IF_FIND(int4) == 1)) {
            if (((int1 == 184) && (script8292(4, -1) == 0))) {
                script13873(int3, int5, int6);
            } else {
                CC_SETHIDE(false);
                [int9, int10, int11] = script6373(int7, int8);
                CC_SETSIZE(int9, int10, 0, 0);
                CC_SETPOSITION((int5 - (CC_GETWIDTH() / 2)), (int6 - (CC_GETHEIGHT() / 2)), 0, 0);
                script6374(int11, int0);
                if ((CC_FIND[1](int3, 0) == 1)) {
                    CC_DELETE[1]();
                };
            };
        };
    } else {
        if ((CC_FIND[1](int3, 0) == 1)) {
            CC_DELETE[1]();
        };
        IF_SETHIDE(true, int4);
    };
    return;
}