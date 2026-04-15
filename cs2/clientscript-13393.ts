//
function script13393(int0: int, int1: int, int2: int, int3: int, int4: struct): [int, int, int, int, int, int, int, unknown_int] {
    var int5 = STRINGWIDTH(enum_getvalue(0, 36, 14117 as cs2enum, MAP_LANG()), struct_getparam(int4, 7275));
    var int6 = int5;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var string0 = "0";
    var int11 = 0;
    var int12 = 0;
    var int13 = int2;
    var int14 = 0;
    var int15 = 0;
    var string1 = "0";
    var int16 = 0;
    var int17 = script3085(int2);
    var int18 = 0;
    var int19 = 0;
    if (((int3 > MAX(3, varplayer_7990)) && (int17 == 0))) {
        while ((int12 < int3)) {
            stack(IF_SETONSTORETRANSMIT(int12));
            [int11, string0] = stack();
            if ((int11 > 1)) {
                int6 = MAX(int6, STRINGWIDTH(`${string0}<col=FFFFFF> <gt>`, struct_getparam(int4, 7275)));
                int10 = MAX(int10, int11);
                int9 = script13394(int9, int12, int11, int4);
            } else {
                [int15, string1, int16] = NOTIFICATIONS_SENDGROUPEDLOCAL(int12, 0);
                int6 = MAX(int6, STRINGWIDTH(string1, struct_getparam(int4, 7275)));
            };
            int12 = (int12 + 1);
        };
        int7 = (((struct_getparam(int4, 7276) * int3) + 6) + struct_getparam(int4, 7265));
        int10 = (((struct_getparam(int4, 7276) * int10) + 6) + struct_getparam(int4, 7265));
    } else {
        int6 = script13394(int6, -1, int2, int4);
        if (((varclient_6403 != 0) && (int6 > 200))) {
            int6 = 200;
            var int4 = 668 as struct;
        };
        if ((varbitplayer_41265 == 1)) {
            while ((int14 < int2)) {
                [int15, string1, int16] = NOTIFICATIONS_SENDGROUPEDLOCAL(-1, int14);
                if ((TESTBIT(varplayer_7991, int15) == 1)) {
                    int13 = (int13 - 1);
                };
                int14 = (int14 + 1);
                int18 = script7593(string1, int6, struct_getparam(int4, 7275), 0);
                if ((int18 > struct_getparam(int4, 7276))) {
                    int19 = (int19 + (int18 - struct_getparam(int4, 7276)));
                };
            };
        };
        int7 = (((struct_getparam(int4, 7276) * int13) + struct_getparam(int4, 7265)) + int19);
    };
    if ((int9 > 0)) {
        int9 = MAX(int9, int6);
        int9 = (int9 + 18);
    };
    int6 = (int6 + 18);
    int8 = int7;
    var int20 = 0;
    var int21 = 0;
    var int22 = script83();
    var int23 = IF_GETWIDTH(int22);
    var int24 = IF_GETHEIGHT(int22);
    var int25 = IF_GETWIDTH(int22);
    var int26 = IF_GETHEIGHT(int22);
    if ((varclient_6403 != 0)) {
        [int20, int21, int23, int24] = UNKNOWN_COMMAND_126();
    };
    if ((script6431() == true)) {
        var int1 = (MAX(int21, (int1 - (int7 / 2))) + 10);
    };
    if ((((int1 + int7) + int10) > (int24 + int21))) {
        if (((int7 + int10) < (int24 / 2))) {
            int1 = MAX(int21, MIN(int1, ((((int24 - int7) - int10) - 10) + int21)));
        } else {
            if ((int7 < ((int24 / 2) - 10))) {
                int1 = MAX(int21, MIN(int1, (((int24 - MAX(int7, int10)) - 10) + int21)));
            } else {
                int1 = MAX(int21, MIN(int1, (((int24 / 2) - 10) + int21)));
            };
            int8 = int7;
            int7 = MIN(int7, ((int24 / 2) - 10));
            int6 = (int6 + 16);
        };
    };
    if ((script6431() == true)) {
        if ((int0 < (int25 / 2))) {
            var int0 = (int0 + SCALE(int23, int25, 70));
        } else {
            int0 = ((int0 - int6) - SCALE(int23, int25, 70));
        };
    } else {
        int0 = (int0 - SCALE(int6, 2, 1));
    };
    if ((((int0 + int6) + int9) > (int23 + int20))) {
        int0 = (((int23 - int6) - int9) + int20);
    };
    if ((int0 < int20)) {
        int0 = int20;
    };
    return [int0, int1, int6, int7, int8, int9, int10, int17];
}