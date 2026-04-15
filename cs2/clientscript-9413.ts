//
function script9413(int0: int, int1: unknown_int): void {
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var int5 = comp(-1, 65535);
    var int6 = comp(-1, 65535);
    var int7 = comp(-1, 65535);
    var int8 = comp(-1, 65535);
    var int9 = comp(-1, 65535);
    var int10 = 0;
    var int11 = enum_getvalue(0, 73, 8211 as cs2enum, int0);
    var int12 = struct_getparam(int11, 3937);
    [int2, int3, int4, int5, int10, int6, int7, int8, int9] = script9409(int0);
    if ((int1 == 1)) {
        int10 = 1;
    };
    if (((int10 == 1) && (struct_getparam(int11, 3943) == 1))) {
        int12 = SCALE(40, 100, int12);
    };
    if ((varclient_3859 == 1)) {
        int12 = SCALE(95, 100, int12);
    };
    var int13 = struct_getparam(int11, 3939);
    if ((int10 == 1)) {
        if ((struct_getparam(int11, 3941) == 1)) {
            script9415(int6, int7, int8, int9, int3, int12, int11, int10);
            IF_SETTEXT("PURCHASED", int9);
            return;
        };
        if ((struct_getparam(int11, 3943) == 1)) {
            IF_SETTEXT("RECLAIM", int9);
        };
        if (((varplayer_3980 < int12) || ((varbitplayer_21034 - 1) < int13))) {
            script9415(int6, int7, int8, int9, int3, int12, int11, int10);
            return;
        };
        if ((int1 == 1)) {
            script9415(int6, int7, int8, int9, int3, int12, int11, 1);
            return;
        };
    } else if (((varplayer_3980 < int12) || ((varbitplayer_21034 - 1) < int13))) {
        script9415(int6, int7, int8, int9, int3, int12, int11, int10);
        return;
    };
    if ((script9414(int11) == 1)) {
        script9415(int6, int7, int8, int9, int3, int12, int11, 1);
        return;
    };
    if (((struct_getparam(int11, 3941) == 0) && (INV_FREESPACE(93 as inv) == 0))) {
        script9415(int6, int7, int8, int9, int3, int12, int11, int10);
        return;
    };
    script9416(int6, int7, int8, int9, int3, int12, int11, int10);
    return;
}