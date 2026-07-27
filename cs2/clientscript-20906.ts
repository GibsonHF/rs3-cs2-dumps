//
function script20906(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, string0: string): [number, number, number] {
    if ((int0 == -1 as cs2enum)) {
        return [int9, int8, int10];
    };
    var int11 = ENUM_GETOUTPUTCOUNT(int0);
    IF_SETSCROLLPOS(0, 0, int4);
    if ((int11 < 1)) {
        if (((int8 <= 0) && (int11 == -1))) {
            return [int9, -1, int10];
        };
        return [int9, int8, int10];
    };
    var int12 = 5;
    var int13 = IF_GETWIDTH(int4);
    var int14 = ((int13 - (4 * 5)) / 3);
    var int15 = 50;
    var int16 = ((50 / 2) - (32 / 2));
    var int17 = ((int14 - 36) - (5 * 2));
    var int18 = 0;
    var int19 = -1 as obj;
    var int20 = 0;
    var int21 = int9;
    var int22 = IF_GETNEXTSUBID(int3);
    var int23 = 0;
    if ((int7 == 1)) {
        var int9 = (int9 + 30);
    };
    while ((int23 < int11)) {
        int19 = enum_getvalue(0, 33, int0, int23);
        if (((int19 != -1 as obj) && (OC_TRADEABLE(int19) == 1))) {
            [int12, int9, int18] = script20900(int2, int3, int12, int9, int14, int15, int1, int19, int16, int17, 0);
            if ((int18 == 0)) {
                int20 = (int20 + 1);
            } else if ((int18 == 3)) {
                var int10 = (int10 + 1);
            };
        };
        int23 = (int23 + 1);
    };
    if ((int20 <= 0)) {
        if ((int7 == 1)) {
            int9 = (int9 - 30);
        };
        return [int9, int8, int10];
    };
    if ((int7 == 1)) {
        script20899(int2, 5, int21, int15, `Results for: ${string0}`);
    };
    var int8 = (int8 + int20);
    while ((--int20 >= 0)) {
        if ((CC_FIND(int3, (int22 + int20)) == 1)) {
            CC_SETOBJECT_NONUM(cc_getparam(4677), 1);
        };
    };
    if ((int12 > 5)) {
        int9 = ((int9 + int15) + 5);
    };
    varclient_6789 = int9;
    return [int9, int8, int10];
}