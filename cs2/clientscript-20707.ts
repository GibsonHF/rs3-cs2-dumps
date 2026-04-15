//
function script20707(int0: component, int1: dbrow, int2: int, int3: int, int4: int, int5: struct, int6: int): int {
    var int7 = -1;
    var [int7, int2] = script14749(int0, 0, int2, int3, 0);
    var int8 = int2;
    var int9 = (((4 + 4) + (35 + 2)) + (2 * 4));
    var int10 = ((((int4 - (2 * 4)) - 4) - (35 + 2)) - (2 * 4));
    var int11 = 16777215;
    if ((STAT_BASE(script2179(23)) < struct_getparam(int5, 2212))) {
        int11 = script10495(6);
    };
    if ((int6 > 1)) {
        int2 = script14757(int0, int9, int2, int10, struct_getparam(int5, 2210), int11);
    };
    var int12 = struct_getparam(int5, 2213);
    if ((struct_getparam(int5, 9417) != -1 as obj)) {
        int12 = struct_getparam(int5, 9417);
    };
    var string0 = "";
    string0 = OC_NAME(int12);
    if ((STRING_LENGTH(string0) == 0)) {
        int2 = script14758(int0, int9, int2, int10, "XP training method<br><br>No resource", int11);
    } else {
        int2 = script14759(int0, int9, int2, int10, int12, string0, int11);
    };
    var int13 = (int2 - int8);
    int9 = (4 + 4);
    var int14 = (((35 + 2) + 2) + enum_getvalue(25, 0, 8549 as cs2enum, 26 as fontmetrics));
    int13 = MAX(int13, int14);
    int2 = (int8 + ((((int13 - (35 + 2)) - enum_getvalue(25, 0, 8549 as cs2enum, 26 as fontmetrics)) - (2 * 2)) / 2));
    script14761(int0, int9, int2, 35, 23, struct_getparam(int5, 2212), int11);
    int2 = script14750(int0, int7, (int8 + int13), 0);
    return int2;
}