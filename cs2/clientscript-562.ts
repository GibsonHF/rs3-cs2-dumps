//
function script562(int0: component, int1: component, int2: component, int3: component, int4: component, int5: component): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    var string0 = "Rewards";
    var string1 = "null";
    if ((varplayer_5148 != -1 as struct)) {
        string1 = struct_getparam(varplayer_5148, 4843);
        if ((strcmp(string1, "") != 0)) {
            string0 = string1;
        };
    };
    var int6 = 21218 as struct;
    var int7 = 1007;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = script11284(varplayer_5148);
    var int13 = script11285(varplayer_5148);
    var int14 = 4;
    var int15 = comp(-1, 65535);
    if ((script6431() == true)) {
        int14 = 2;
    };
    [int8, int9] = script11980(string0, int6);
    if ((int8 < 0)) {
        int8 = 0;
    };
    if ((int9 < 0)) {
        int9 = 0;
    };
    int8 = (int8 + (IF_GETWIDTH(int4) - IF_GETWIDTH(int1)));
    int9 = (int9 + (IF_GETHEIGHT(int4) - IF_GETHEIGHT(int1)));
    var int16 = (((IF_GETWIDTH(comp(1477, 724)) - int8) - 6) / (113 + 6));
    var int17 = MAX(script13(varplayer_5148), (int13 * int12));
    script15544(comp(1594, 35), comp(1594, 24));
    script15544(comp(1594, 35), comp(1594, 25));
    script15544(comp(1594, 35), comp(1594, 26));
    script15544(comp(1594, 35), comp(1594, 27));
    script15544(comp(1594, 35), comp(1594, 28));
    if (((script6431() == true) && (int17 <= (4 * 3)))) {
        int8 = (int8 + (((113 + 6) * int12) + 6));
        int9 = (int9 + (((113 + 6) * int13) + 6));
        if ((int8 >= 512)) {
            int8 = 0;
            int10 = 1;
        };
        if ((int9 >= 334)) {
            int9 = 0;
            int11 = 1;
        };
    } else {
        [int12, int13] = script23(int17, int12, int13);
        int8 = (int8 + ((113 + 6) * MIN(int12, 5)));
        int9 = (int9 + ((113 + 6) * MIN(int13, int14)));
        if ((int9 >= IF_GETHEIGHT(comp(1477, 724)))) {
            int9 = 0;
            int11 = 1;
        };
        int15 = enum_getvalue(0, 9, 1481 as cs2enum, MAX(1, varbitplayer_27175));
        if (((int13 > int14) || (IF_GETHEIGHT(int15) < (int13 * (113 + 6))))) {
            int8 = (int8 + 16);
            IF_SETHIDE(false, comp(1594, 35));
            IF_SETPOSITION(9, 31, 2, 0, comp(1594, 35));
            IF_SETSIZE(16, 56, 0, 1, comp(1594, 35));
            script582(comp(1594, 35), int15, int13);
        } else {
            script15544(comp(1594, 35), int15);
        };
        int7 = -1;
    };
    IF_SETSIZE(int8, int9, int10, int11, int0);
    script8421(int2, int3, int4, int5, string0, int6, int7, 1, -1 as graphic, -1 as struct);
    script14164();
    return;
}