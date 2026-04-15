//
function script16459(int0: component, int1: dbrow, int2: int, int3: int, int4: int, int5: struct, int6: int): int {
    var int7 = 0;
    if ((int1 == 7389 as dbrow)) {
        switch (int5) {
            case 46045:
            case 46048: {
                int7 = 1;
                break;
            }
            case 46050:
            case 46061:
            case 46062: {
                int7 = 2;
                break;
            }
            case 46071: {
                int7 = 3;
                break;
            }
        };
    };
    var int8 = -1;
    var [int8, int2] = script14749(int0, 0, int2, int3, 0);
    var int9 = int2;
    var int10 = (((4 + 4) + (35 + 2)) + (2 * 4));
    var int11 = ((((int4 - (2 * 4)) - 4) - (35 + 2)) - (2 * 4));
    var int12 = 16777215;
    if ((STAT_BASE(script2179(18)) < struct_getparam(int5, 2212))) {
        int12 = script10495(6);
    } else if (((int7 > 0) && (varbitplayer_52991 < int7))) {
        int12 = script10495(6);
    };
    if ((int6 > 1)) {
        int2 = script14757(int0, int10, int2, int11, struct_getparam(int5, 2210), int12);
    };
    var int13 = struct_getparam(int5, 2213);
    var string0 = "";
    if (((int7 > 0) && (varbitplayer_52991 < int7))) {
        int2 = script14758(int0, int10, int2, int11, `Requires tier ${inttostring(int7, 10)} Grove Cabin.`, int12);
    } else if ((int13 != -1 as obj)) {
        string0 = OC_NAME(int13);
        if ((STRING_LENGTH(string0) == 0)) {
            int2 = script14758(int0, int10, int2, int11, "XP training method<br><br>No resource", int12);
        } else if ((int13 == 52870 as obj)) {
            int2 = script14758(int0, int10, int2, int11, "Approval rating<br><br>No resource", int12);
        } else {
            int2 = script14759(int0, int10, int2, int11, int13, string0, int12);
        };
    };
    var int14 = (int2 - int9);
    int10 = (4 + 4);
    var int15 = (((35 + 2) + 2) + enum_getvalue(25, 0, 8549 as cs2enum, 26 as fontmetrics));
    int14 = MAX(int14, int15);
    int2 = (int9 + ((((int14 - (35 + 2)) - enum_getvalue(25, 0, 8549 as cs2enum, 26 as fontmetrics)) - (2 * 2)) / 2));
    script14761(int0, int10, int2, 35, 18, struct_getparam(int5, 2212), int12);
    int2 = script14750(int0, int8, (int9 + int14), 0);
    return int2;
}