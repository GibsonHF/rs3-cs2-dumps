//
function script846(int0: int, int1: unknown_int): void {
    if (((int0 < 0) || (int0 >= 10))) {
        return;
    };
    var int2 = enum_getvalue(0, 9, 1354 as cs2enum, int0);
    var int3 = enum_getvalue(0, 9, 1355 as cs2enum, int0);
    var int4 = 0;
    var int5 = 0;
    var int6 = IF_GETX(int2);
    var int7 = IF_GETY(int2);
    var int8 = IF_GETX(int3);
    var int9 = IF_GETY(int3);
    var int10 = IF_GETMODELANGLE_Y(int2);
    var int11 = ((15 * 18) + 65);
    var int12 = ((11 * 18) + -2);
    var int13 = 0;
    var int14 = 0;
    if ((int0 != 10)) {
        if (((int1 == 0) && (int6 > 65))) {
            int13 = (int13 - 18);
            SOUND_SYNTH(30189, 1, 0);
        } else if (((int1 == 1) && (int6 < (int11 - 1)))) {
            int13 = (int13 + 18);
            SOUND_SYNTH(30189, 1, 0);
        } else if (((int1 == 2) && (int7 > -2))) {
            int14 = (int14 - 18);
            SOUND_SYNTH(30189, 1, 0);
        } else if (((int1 == 3) && (int7 < int12))) {
            int14 = (int14 + 18);
            SOUND_SYNTH(30189, 1, 0);
        };
        int6 = ((int6 + int13) + int4);
        int7 = ((int7 + int14) + int5);
        int8 = ((int8 + int13) + int4);
        int9 = ((int9 + int14) + int5);
        IF_SETPOSITION(int6, int7, 0, 0, int2);
        IF_SETPOSITION(int8, int9, 0, 0, int3);
    };
    return;
}