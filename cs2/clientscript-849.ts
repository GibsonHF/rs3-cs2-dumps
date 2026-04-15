//
function script849(int0: int, int1: unknown_int): void {
    if (((int0 < 0) || (int0 >= 10))) {
        return;
    };
    var int2 = enum_getvalue(0, 9, 1354 as cs2enum, int0);
    var int3 = enum_getvalue(0, 9, 1355 as cs2enum, int0);
    var int4 = enum_getvalue(0, 9, 1358 as cs2enum, int0);
    var int5 = script853(int0);
    var int6 = script854(int0);
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = IF_GETX(int2);
    var int12 = IF_GETY(int2);
    var int13 = IF_GETX(int3);
    var int14 = IF_GETY(int3);
    var int15 = IF_GETMODELANGLE_Y(int2);
    if ((int0 != 10)) {
        SOUND_SYNTH(30189, 1, 0);
        if ((int1 == 0)) {
            if ((++int15 >= 2047)) {
                int15 = 0;
            };
        } else if ((--int15 < 0)) {
            int15 = 2047;
        };
        IF_SETMODELANGLE(0, 0, 512, int15, 0, 3500, int2);
        IF_SETMODELANGLE(0, 0, 512, int15, 0, 3500, int3);
        IF_SETMODELANGLE(0, 0, 512, int15, 0, 3500, int4);
        if ((script850(int5) != script850(int6))) {
            if (((int15 == 512) || (int15 == 1536))) {
                int9 = 9;
                int10 = 9;
            } else {
                int9 = -9;
                int10 = -9;
            };
            int11 = ((int11 + int9) + int7);
            int12 = ((int12 + int10) + int8);
            int13 = ((int13 + int9) + int7);
            int14 = ((int14 + int10) + int8);
        };
        IF_SETPOSITION(int11, int12, 0, 0, int2);
        IF_SETPOSITION(int13, int14, 0, 0, int3);
    };
    return;
}