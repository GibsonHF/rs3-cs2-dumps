//
function script11177(int0: component, int1: int, int2: int, int3: int, int4: struct, int5: int): int {
    var int6 = -1;
    var [int6, int1] = script14749(int0, 0, int1, int2, 0);
    var int7 = int1;
    var int8 = (((4 + 4) + (35 + 2)) + (2 * 4));
    var int9 = ((((int3 - (2 * 4)) - 4) - (35 + 2)) - (2 * 4));
    var int10 = 16777215;
    var int11 = struct_getparam(int4, 2215);
    if (((int11 > 0) && (STAT_BASE(script2179(int11)) < struct_getparam(int4, 2212)))) {
        int10 = script10495(6);
    };
    if ((int5 > 1)) {
        int1 = script14757(int0, int8, int1, int9, struct_getparam(int4, 2210), int10);
    };
    var int12 = struct_getparam(int4, 2213);
    var string0 = "";
    if ((int12 != -1 as obj)) {
        string0 = OC_NAME(int12);
        if ((STRING_LENGTH(string0) == 0)) {
            int1 = script14758(int0, int8, int1, int9, "XP training method<br><br>No resource", int10);
        } else {
            int1 = script14759(int0, int8, int1, int9, int12, string0, int10);
        };
    };
    var int13 = (int1 - int7);
    int8 = (4 + 4);
    var int14 = (((35 + 2) + 2) + enum_getvalue(25, 0, 8549 as cs2enum, 26 as fontmetrics));
    int13 = MAX(int13, int14);
    int1 = (int7 + ((((int13 - (35 + 2)) - enum_getvalue(25, 0, 8549 as cs2enum, 26 as fontmetrics)) - (2 * 2)) / 2));
    if ((int11 > 0)) {
        script14761(int0, int8, int1, 35, int11, struct_getparam(int4, 2212), int10);
    };
    int1 = script14750(int0, int6, (int7 + int13), 0);
    return int1;
}