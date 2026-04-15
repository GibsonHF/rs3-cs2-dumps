//
function script8702(int0: int, int1: int): void {
    if (((int0 == -1) && (int1 != 9))) {
        return;
    };
    if ((int0 == int1)) {
        return;
    };
    if ((int1 < 6)) {
        return;
    };
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = -1;
    var int15 = 0;
    var int16 = IF_GETWIDTH(comp(1477, 27));
    var int17 = IF_GETHEIGHT(comp(1477, 27));
    var int18 = ENUM_GETOUTPUTCOUNT(7717 as cs2enum);
    if (((int0 == -1) && (int1 == 9))) {
        varclient_2997 = int16;
        varclient_2998 = int17;
        varclient_2999 = 0;
        while ((int15 < int18)) {
            int13 = enum_getvalue(0, 0, 7717 as cs2enum, int15);
            script8707(int13);
            int15 = (int15 + 1);
        };
    } else if ((int0 == 9)) {
        script8703(int0, int1);
        while ((int15 < int18)) {
            int13 = enum_getvalue(0, 0, 7717 as cs2enum, int15);
            script8708(int13, int1);
            int15 = (int15 + 1);
        };
    } else if ((((int1 == 8) || (int1 == 10)) && (int0 != -1))) {
        script8703(int0, int1);
        while ((int15 < int18)) {
            int13 = enum_getvalue(0, 0, 7717 as cs2enum, int15);
            [int2, int3, int4, int5, int6, int7, int8, int9, int10, int11, int12] = script8701(int0, int13);
            if (((int4 > -1) || (int5 > -1))) {
                int2 = script8711(int2, int4, int6, int16);
                int3 = script8711(int3, int5, int7, int17);
                int2 = script8710(int2, int6, int16);
                int3 = script8710(int3, int7, int17);
            };
            script8709(int1, int13, int2, int3, int6, int7, int8, int9, int10, int11);
            int15 = (int15 + 1);
        };
    } else {
        return;
    };
    script8700(int1, 1);
    return;
}