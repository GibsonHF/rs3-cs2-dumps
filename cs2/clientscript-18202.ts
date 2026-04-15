//
function script18202(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, string0: string): void {
    var int6 = 0;
    if ((TESTBIT(AND(int5, 12858), 13) == 1)) {
        int6 = 1;
    };
    var int7 = -1;
    var int8 = -1 as struct;
    var int9 = -1 as struct;
    var int10 = comp(-1, 65535);
    var int11 = comp(-1, 65535);
    var int12 = comp(-1, 65535);
    var int13 = comp(-1, 65535);
    var int14 = comp(-1, 65535);
    var int15 = -1 as dbrow;
    var int16 = -1;
    var int17 = 0;
    var int18 = comp(-1, 65535);
    var int19 = 0;
    var int20 = -1;
    var string1 = "";
    if ((IF_FIND(comp(1843, 1)) == 1)) {
        cc_setparam(5946, -1);
    };
    int8 = enum_getvalue(0, 73, 12233 as cs2enum, ++int7);
    int9 = enum_getvalue(0, 73, 8601 as cs2enum, int7);
    var int21 = 0;
    if ((IF_FIND(comp(1843, 183)) == 1)) {
        int21 = MAX(0, cc_getparam(6359));
    };
    var [int15, int0] = script18193(int15, int21, int0, int6, string0, int2, int3, int4);
    while ((((int15 != -1 as dbrow) && (int8 != -1 as struct)) && (int9 != -1 as struct))) {
        string1 = script18200(int15);
        int10 = struct_getparam(int9, 6397);
        int13 = struct_getparam(int9, 6398);
        if (((int10 != comp(-1, 65535)) && (int13 != comp(-1, 65535)))) {
            int11 = struct_getparam(int9, 6400);
            int12 = struct_getparam(int9, 6401);
            int14 = struct_getparam(int9, 6399);
            if (((IF_FIND[1](int10) == 1) && ((cc_getparam[1](6361) != dbrow_getfield(int15, 667648, 0)) || ((dbrow_getfield(int15, 667776, 0) == 13) && (strcmp(string1, cc_getparam[1](2533)) != 0))))) {
                cc_setparam[1](6361, dbrow_getfield(int15, 667648, 0));
                CC_SETPARAM_STRING[1](2533, string1);
                cc_setparam[1](6360, -1);
                cc_setparam[1](5945, -1);
                int19 = 1;
                if ((dbrow_getfield(int15, 667728, 0) == 2)) {
                    int16 = dbrow_getfield(int15, 667744, 0);
                    if ((int16 == 19)) {
                        int16 = script6256(int15);
                    };
                };
            };
            script18204(int8, int15, int10);
            int17 = script18197(int8, int15);
            script18198(int8, int15);
            if ((IF_FIND(struct_getparam(int8, 6311)) == 1)) {
                CC_SETTEXT("");
            };
            int18 = struct_getparam(int8, 6226);
            CC_DELETEALL(int18);
            if (((int17 == 1) && (IF_FIND[1](int10) == 1))) {
                script18203(int10);
                script13179(int18, int15);
                int17 = 0;
                int19 = 0;
            } else {
                IF_SETHIDE(false, int10);
                script33(int11, script18199(int15));
                if ((int14 != comp(-1, 65535))) {
                    IF_SETHIDE(true, int14);
                };
                if ((int19 == 1)) {
                    IF_SETHIDE(true, int13);
                    IF_SETMODEL(-1 as model, int13);
                    script9531(int12, 255);
                    script6568(int12);
                    script13146(int13, int16, int15);
                    int19 = 0;
                };
            };
            int8 = enum_getvalue(0, 73, 12233 as cs2enum, ++int7);
            int9 = enum_getvalue(0, 73, 8601 as cs2enum, int7);
            int21 = (int21 + 1);
            [int15, int0] = script18193(int15, int21, int0, int6, string0, int2, int3, int4);
            int16 = -1;
        } else {
            int15 = -1 as dbrow;
        };
    };
    int0 = (int0 + script18194(int15, int6, string0, int2, int3, int4));
    while (((int8 != -1 as struct) && (IF_FIND[1](IF_GETLAYER(struct_getparam(int8, 4037))) == 1))) {
        if ((CC_GETWIDTH[1]() != 0)) {
            CC_SETSIZE[1](0, 0, 0, 0);
            int8 = enum_getvalue(0, 73, 12233 as cs2enum, ++int7);
        } else {
            int8 = -1 as struct;
        };
    };
    if (((int9 != -1 as struct) && (enum_getreversecount(73, 8601 as cs2enum, int9) > 0))) {
        int7 = enum_getreverseindex(73, 0, 8601 as cs2enum, int9, 0);
    };
    while ((int9 != -1 as struct)) {
        int10 = struct_getparam(int9, 6397);
        if ((int10 != comp(-1, 65535))) {
            script18203(int10);
            int9 = enum_getvalue(0, 73, 8601 as cs2enum, ++int7);
        } else {
            int9 = -1 as struct;
        };
    };
    if ((IF_FIND(comp(1843, 250)) == 1)) {
        script13248(int0, string0, comp(1843, 250));
    };
    script13172(int0, 0);
    return;
}