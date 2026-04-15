//
function script7491(int0: int, int1: int, int2: unknown_int, string0: string): void {
    if ((varbitplayer_40127 == 1)) {
        return;
    };
    if ((int0 == -1)) {
        return;
    };
    var int3 = enum_getvalue(0, 26, 5958 as cs2enum, varbitplayer_673);
    if ((int3 == -1 as cs2enum)) {
        return;
    };
    var int4 = ENUM_GETOUTPUTCOUNT(int3);
    if ((int4 == 0)) {
        return;
    };
    IF_SETHIDE(true, comp(1311, 171));
    var int5 = 0;
    var int6 = -1 as struct;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var string1 = "";
    var int11 = -1 as cs2enum;
    var int12 = 0;
    var int13 = 0;
    if ((int0 == 22)) {
        int13 = 1;
    };
    while ((int5 < int4)) {
        int10 = 0;
        int6 = enum_getvalue(0, 73, int3, int5);
        if ((int0 != 22)) {
            int12 = int0;
        } else {
            int12 = struct_getparam(int6, 2532);
        };
        if ((varbitplayer_673 == 1)) {
            if ((((((int12 == 1) || (int12 == 3)) || (int12 == 4)) || (int12 == 8)) || (int12 == 9))) {
                if ((GENDER() == 1)) {
                    int11 = 2341 as cs2enum;
                } else {
                    int11 = 2338 as cs2enum;
                };
                string1 = struct_getparam(enum_getvalue(0, 73, int11, struct_getparam(int6, 2772)), 792);
            } else if (((int12 == 2) || (int12 == 5))) {
                string1 = enum_getvalue(0, 36, 2340 as cs2enum, struct_getparam(int6, 2772));
            };
        } else {
            string1 = struct_getparam(int6, 2533);
        };
        if ((struct_getparam(int6, 2532) == int12)) {
            if (((((int1 == 1) && (script13100(int6, 0) == 1)) || (script6488(int6) == 1)) || ((varbitplayer_673 == 3) && (script19681(int6) != -1 as struct)))) {
            } else if (((((MAP_MEMBERS() == 0) && (struct_getparam(int6, 2546) == 2)) && (script6214(int6) == 1)) && (STRING_INDEXOF_STRING(LOWERCASE(string1), LOWERCASE(string0), 0) != -1))) {
                if ((varbitplayer_673 == 1)) {
                    if ((GENDER() == 0)) {
                        if (((int12 == 3) || (int12 == 8))) {
                            int10 = 0;
                        } else {
                            int10 = 1;
                        };
                    } else if ((GENDER() == 1)) {
                        if (((((int12 == 4) || (int12 == 2)) || (int12 == 5)) || (int12 == 9))) {
                            int10 = 0;
                        } else {
                            int10 = 1;
                        };
                    };
                    if ((struct_getparam(int6, 9275) != -1 as struct)) {
                        int10 = 0;
                    };
                } else if ((varbitplayer_673 == 3)) {
                    if ((struct_getparam(int6, 5766) != -1 as struct)) {
                        int10 = 0;
                    } else {
                        int10 = 1;
                    };
                } else {
                    int10 = 1;
                };
            };
        };
        [int7, int8] = script6466(int6, int7, int8, int10, int13);
        if ((int10 == 1)) {
            int9 = (1 + int9);
        };
        int5 = (int5 + 1);
    };
    if ((int9 == 0)) {
        IF_SETHIDE(false, comp(1311, 171));
    };
    script6481(varclient_1964, varclient_1965);
    var int14 = IF_GETSCROLLHEIGHT(comp(1311, 170));
    IF_SETSCROLLSIZE(0, MAX(int7, IF_GETHEIGHT(comp(1311, 170))), comp(1311, 170));
    if ((int14 == IF_GETSCROLLHEIGHT(comp(1311, 170)))) {
        var int2 = 1;
    };
    var int15 = int2;
    if ((varbitplayer_673 == 5)) {
        int15 = 1;
    };
    if ((int2 == 0)) {
        IF_SETSCROLLPOS(IF_GETSCROLLY(comp(1311, 170)), 0, comp(1311, 170));
    };
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    if ((int9 < 14)) {
        IF_SETHIDE(true, comp(1311, 341));
    } else if ((int2 == 0)) {
        IF_SETHIDE(false, comp(1311, 341));
        script7791(comp(1311, 341), comp(1311, 170));
    };
    return;
}