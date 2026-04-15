//
function script9772(int0: cs2enum, int1: unknown_int, int2: int, int3: int, string0: string, string1: string): void {
    var int4 = comp(1146, 23);
    var int5 = comp(1146, 9);
    var int6 = comp(1146, 21);
    var int7 = comp(1146, 10);
    var int8 = comp(1146, 22);
    var int9 = comp(1146, 11);
    var int10 = comp(1146, 13);
    var int11 = comp(1146, 14);
    script9774();
    var int12 = ENUM_GETOUTPUTCOUNT(int0);
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = comp(-1, 65535);
    var int17 = -1 as obj;
    var int18 = 0;
    var string2 = "";
    while ((int13 < int12)) {
        int16 = script9773(int13);
        int18 = 0;
        int17 = enum_getvalue(0, 33, int0, int13);
        IF_SETSIZE(50, 50, 0, 0, int16);
        IF_SETPOSITION((5 + (int15 * 60)), (5 + (int14 * 60)), 0, 0, int16);
        IF_SETHIDE(false, int16);
        CC_DELETEALL(int16);
        CC_CREATE(int16, 3, int18);
        CC_SETPOSITION(0, 0, 1, 1);
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETFILL(1);
        script10010(28680 as struct);
        int18 = (int18 + 1);
        CC_CREATE(int16, 5, int18);
        CC_SETPOSITION(2, 0, 1, 1);
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETOBJECT(int17, int3);
        CC_SETHIDE(false);
        int18 = (int18 + 1);
        string2 = item_getparam(int17, 4290);
        if ((STRING_LENGTH(string2) > 0)) {
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -1), int16);
        } else {
            IF_SETONMOUSEREPEAT(callback(), int16);
        };
        int13 = (int13 + 1);
        if ((++int15 >= int2)) {
            int15 = 0;
            int14 = (int14 + 1);
        };
    };
    if ((int15 == 0)) {
        int14 = (int14 - 1);
    };
    var int19 = (int2 * 60);
    var int20 = ((int14 * 60) + 60);
    IF_SETSIZE(int19, int20, 0, 0, int11);
    var int21 = 0;
    var int22 = 0;
    if ((STRING_LENGTH(string1) == 0)) {
        IF_SETHIDE(true, int9);
    } else {
        int22 = (int19 - 10);
        int21 = (PARAHEIGHT(string1, int22, 27 as fontmetrics) * 13);
        IF_SETTEXT(string1, int10);
        int21 = (int21 + 10);
        IF_SETSIZE(int19, int21, 0, 0, int9);
        IF_SETPOSITION(10, (int21 + 20), 0, 0, int11);
        int20 = ((int20 + int21) + 10);
        IF_SETHIDE(false, int9);
    };
    int19 = (int19 + 20);
    int20 = ((int20 + 20) + 36);
    var int23 = 21218 as struct;
    int20 = ((int20 + struct_getparam(int23, 3547)) + struct_getparam(int23, 3549));
    int19 = ((int19 + struct_getparam(int23, 3550)) + struct_getparam(int23, 3551));
    IF_SETSIZE(int19, int20, 0, 0, int4);
    script8421(int5, int6, int7, int8, string0, int23, -1, 1, -1 as graphic, -1 as struct);
    return;
}