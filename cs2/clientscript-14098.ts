//
function script14098(int0: number): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = 5;
    var int4 = 0;
    var int5 = -1 as cs2enum;
    var int6 = -1 as struct;
    var int7 = enum_getvalue(0, 26, 13729 as cs2enum, int0);
    var int8 = ENUM_GETOUTPUTCOUNT(int7);
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = -1;
    var int18 = 0;
    while ((int1 < int8)) {
        int6 = enum_getvalue(0, 73, int7, int1);
        int5 = struct_getparam(int6, 6979);
        int18 = ENUM_GETOUTPUTCOUNT(int5);
        int9 = int4;
        [int4, int13] = script14109(int1, int8, int4, int6);
        int4 = (int4 + 20);
        while ((int2 < int18)) {
            [int10, int11] = script14110(int5, int1, int2, int3, int4, int10, int9);
            if ((int11 == 1)) {
                int12 = (int12 + 1);
            };
            int3 = (int3 + 45);
            if ((int3 > (45 * 10))) {
                int3 = 5;
                if ((int2 < (int18 - 1))) {
                    int4 = (int4 + 45);
                };
            };
            int2 = (int2 + 1);
        };
        if ((CC_FIND(comp(1944, 6), int13) == 1)) {  // toolbelt_v2:toolbelt_build_layer
            CC_SETTEXT(`${struct_getparam(int6, 6974)} - ${inttostring(int12, 10)}/${inttostring(int2, 10)}`);
        };
        int3 = 5;
        int4 = (int4 + 45);
        int1 = (int1 + 1);
        int14 = (int14 + int12);
        int15 = (int15 + int2);
        int2 = 0;
        int12 = 0;
    };
    var int19 = IF_GETHEIGHT(comp(1944, 3));  // toolbelt_v2:scroll_bar
    if ((int19 == 0)) {
        int19 = 272;
    };
    int9 = (int9 + int19);
    IF_SETSCROLLSIZE(0, int9, comp(1944, 5));  // toolbelt_v2:toolbelt_scroll_layer
    script7791(127401987, 127401989);
    script8421(127401985, 127402085, 127401986, 127402086, `Tool belt - ${inttostring(int14, 10)}/${inttostring(int15, 10)}`, 21218, 1040, 1, -1, -1);
    return;
}