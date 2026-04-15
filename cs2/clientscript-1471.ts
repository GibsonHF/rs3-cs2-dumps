//
function script1471(int0: component, int1: unknown_int, int2: int, int3: int): void {
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = script1479(int1, int2);
    if ((int11 == -1 as dbrow)) {
        return;
    };
    if ((varbitplayer_4945 == 0)) {
        return;
    };
    var int12 = dbrow_getfield(int11, 266256, (varbitplayer_4945 - 1));
    if ((int12 == -1 as cs2enum)) {
        return;
    };
    var int13 = dbrow_getfield(int11, 266288, 0);
    if ((int13 == -1 as cs2enum)) {
        return;
    };
    var int14 = dbrow_getfield(int11, 266304, 0);
    if ((int14 == -1 as cs2enum)) {
        return;
    };
    var int15 = ENUM_GETOUTPUTCOUNT(int12);
    var int16 = script1468(int2);
    if ((int11 == -1 as dbrow)) {
        return;
    };
    if ((IF_FIND(int0) == 1)) {
        int4 = enum_getvalue(0, 0, int12, MODULO((int3 + int16), int15));
        int10 = MODULO((int4 + varbitplayer_4940), ENUM_GETOUTPUTCOUNT(3170 as cs2enum));
        if (((cc_getparam(827) == 1) && (cc_getparam(826) == int16))) {
            return;
        };
        CC_SETPARAM_INT(1104, int10);
        if (((cc_getparam(827) != 1) || (varbitplayer_27447 == 1))) {
            cc_setparam(827, 1);
            IF_SETOBJECT(enum_getvalue(0, 33, 3170 as cs2enum, int10), -1, int0);
            CC_SETPARAM_INT(826, int16);
            return;
        };
        int5 = cc_getparam(1101);
        int6 = cc_getparam(1102);
        int8 = enum_getvalue(0, 0, int13, int3);
        int9 = enum_getvalue(0, 0, int14, int3);
        CC_SETPOSITION(int5, int6, 0, 0);
        if ((int3 == 0)) {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(14351 as vorbis, 1, 0, 100, 10, 10));
        };
        int7 = script1470(int16, cc_getparam(826), int15);
        if ((int7 > 0)) {
            IF_SETONTIMER(callback(script3627, int0, int5, int6, (24 * int8), (24 * int9), enum_getvalue(0, 33, 3170 as cs2enum, int10), int10, 0, 18), int0);
        } else {
            IF_SETONTIMER(callback(script3628, int0, int5, int6, (24 * int8), (24 * int9), enum_getvalue(0, 33, 3170 as cs2enum, int10), int10, 0, 18), int0);
        };
        CC_SETPARAM_INT(826, int16);
    };
    return;
}