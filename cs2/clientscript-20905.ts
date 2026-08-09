//
function script20905(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, string0: string): [number, number, number] {
    var int10 = OC_FIND(string0, true);
    IF_SETSCROLLPOS(0, 0, int3);
    if ((int10 < 1)) {
        if (((int7 <= 0) && (int10 == -1))) {
            return [int8, -1, int9];
        };
        return [int8, int7, int9];
    };
    var int11 = 5;
    var int12 = IF_GETWIDTH(int3);
    var int13 = ((int12 - (4 * 5)) / 3);
    var int14 = 50;
    var int15 = ((50 / 2) - (32 / 2));
    var int16 = ((int13 - 36) - (5 * 2));
    var int17 = 0;
    var int18 = OC_FINDNEXT();
    var int19 = 0;
    var int20 = int8;
    var int21 = IF_GETNEXTSUBID(int2);
    if ((int6 == 1)) {
        var int8 = (int8 + 30);
    };
    while ((int18 != -1 as obj)) {
        [int11, int8, int17] = script20900(int1, int2, int11, int8, int13, int14, int0, int18, int15, int16, 0);
        if ((int17 == 0)) {
            int19 = (int19 + 1);
        } else if ((int17 == 3)) {
            var int9 = (int9 + 1);
        };
        int18 = OC_FINDNEXT();
    };
    if ((int19 <= 0)) {
        if ((int6 == 1)) {
            int8 = (int8 - 30);
        };
        return [int8, int7, int9];
    };
    if ((int6 == 1)) {
        script20899(int1, 5, int20, int14, `Results for: ${string0}`);
    };
    var int7 = (int7 + int19);
    int19 = (int19 - 1);
    while ((int19 >= 0)) {
        if ((CC_FIND(int2, (int21 + int19)) == 1)) {
            CC_SETOBJECT_NONUM(cc_getparam(4677), 1);
        };
    };
    if ((int11 > 5)) {
        int8 = ((int8 + int14) + 5);
    };
    varclient_6789 = int8;
    return [int8, int7, int9];
}