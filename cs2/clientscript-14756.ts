//
function script14756(int0: component, int1: int, int2: int, int3: int, int4: int, int5: int, int6: obj, int7: obj, int8: obj, int9: obj, int10: int, string0: string, string1: string, string2: string, string3: string, string4: string, string5: string): int {
    var int11 = -1;
    var [int11, int1] = script14749(int0, 0, int1, int2, 0);
    var int12 = 4;
    var int13 = int1;
    var int14 = 35;
    var int15 = 4;
    var int16 = (((int12 + int15) + (int14 + 2)) + (2 * int15));
    var int17 = ((((IF_GETWIDTH(int0) - (2 * 4)) - int15) - (int14 + 2)) - (2 * int15));
    int1 = script14757(int0, int16, int1, int17, string0, int10);
    int1 = script14760(int0, int16, int1, int17, string1, int5, int6, string2, int7, string3, int8, string4, int9, string5, int10);
    var int18 = (int1 - int13);
    int16 = (int12 + int15);
    int1 = (int13 + ((((int18 - (int14 + 2)) - enum_getvalue(25, 0, 8549 as cs2enum, 26 as fontmetrics)) - (2 * 2)) / 2));
    script14761(int0, int16, int1, int14, int3, int4, int10);
    int1 = script14750(int0, int11, (int13 + int18), 0);
    return int1;
}