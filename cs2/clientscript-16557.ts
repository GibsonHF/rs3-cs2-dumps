//
function script16557(int0: component, int1: cs2enum, int2: unknown_int): [int, int] {
    var int3 = 0;
    var int4 = 0;
    var int5 = ENUM_GETOUTPUTCOUNT(int1);
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 28;
    var int10 = 0;
    var int11 = 0;
    var int12 = 3;
    var int13 = 22;
    var int14 = 24;
    var int15 = 24;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = -1 as dbrow;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var int20 = -1 as graphic;
    var int21 = false;
    var int22 = 26 as fontmetrics;
    var int23 = script6431();
    if ((int23 == true)) {
        int9 = 36;
        int11 = 5;
        int10 = 4;
        int22 = 28 as fontmetrics;
        int13 = 28;
        int14 = 32;
        int15 = 32;
    };
    if ((int2 == 1)) {
        int6 = int11;
    };
    while ((int4 < int5)) {
        int19 = enum_getvalue(0, 74, int1, int4);
        int18 = script16565(int19, int0);
        string1 = dbrow_getfield(int19, 114688, 0);
        int20 = script16567(int19);
        int21 = dbrow_getfield(int19, 114720, 0);
        string2 = script18486(int19);
        [string0, int8] = script16568(int19, int18);
        switch (int18) {
            case 0: {
                if ((int2 == 1)) {
                    script15938(int0, int4, 0, int10, int6, 0, 0, (int10 * 2), int14, 1, 0);
                    script7858(int4, 1, 0, 0, 0, 0, 0, 0, 1, 1, 14908 as dbrow, "");
                    script7918(int4, 2, 6, 0, 0, 1, int13, int13, 0, 0, int20);
                    CC_SETHFLIP(int21);
                    script10485(int4, 3, 6, 0, 2, 0, ((int13 + 4) + 12), 0, 1, 1, 5999 as dbrow, string0);
                    CC_SETCOLOUR(16777215);
                } else {
                    script15938(int0, int4, 0, 0, 0, 0, 0, int15, int14, 0, 0);
                    script7858(int4, 1, 0, 0, 0, 0, 0, 0, 1, 1, 14908 as dbrow, "");
                    script7918(int4, 2, 0, 0, 1, 1, int13, int13, 0, 0, int20);
                    CC_SETHFLIP(int21);
                    script17065(int19, int0, int4, 2);
                };
                int16 = 1;
                break;
            }
            case 3: {
                int7 = (((STRINGWIDTH(string0, int22) + int13) + 4) + 12);
                script15938(int0, int4, 0, 0, int6, 0, 0, int7, int14, 0, 0);
                script7858(int4, 1, 0, 0, 0, 0, 0, 0, 1, 1, 14908 as dbrow, "");
                script7918(int4, 2, 6, 0, 0, 1, int13, int13, 0, 0, int20);
                CC_SETHFLIP(int21);
                script10485(int4, 3, 6, 0, 2, 0, ((int13 + 4) + 12), 0, 1, 1, 5999 as dbrow, string0);
                CC_SETCOLOUR(16777215);
                int16 = 1;
                break;
            }
            case 1: {
                script15938(int0, int4, 0, 0, int6, 0, 0, 45, int14, 0, 0);
                script10485(int4, 1, 0, 0, 0, 0, 0, 0, 1, 1, 5999 as dbrow, string0);
                int16 = 0;
                break;
            }
            case 2: {
                script15938(int0, int4, 0, 0, int6, 0, 0, 45, int14, 0, 0);
                script7918(int4, 1, 0, 0, 0, 1, int13, int13, 0, 0, int20);
                CC_SETHFLIP(int21);
                script10485(int4, 2, 0, 0, 2, 0, int13, 0, 1, 1, 5999 as dbrow, string0);
                CC_SETCOLOUR(16777215);
                if ((int2 == 1)) {
                    CC_SETONINVTRANSMIT(callback(script16560, int0, int4, int19, 93, 94, 2));
                } else {
                    CC_SETONINVTRANSMIT(callback(script16558, int0, int1, 93, 94, 2));
                };
                int16 = 0;
                break;
            }
        };
        if ((int2 == 1)) {
            if ((script16564(int19, int0) == true)) {
                int7 = STRINGWIDTH(string0, int22);
                int3 = MAX(int3, (int7 + 48));
                int6 = (int6 + (int9 + int10));
            } else if ((CC_FINDBYCATEGORY(int0, int4, 0) == 1)) {
                CC_SETHIDE(true);
            };
        };
        if ((CC_FINDBYCATEGORY(int0, int4, int16) == 1)) {
            script16563(int19);
            if ((STRING_LENGTH(string2) > 0)) {
                script18484(int19, string2, int0, int4, int16);
                CC_SETONMOUSEREPEAT(callback(script3876, string2, -2147483645, -2147483643));
            };
        };
        int4 = (int4 + 1);
    };
    if ((int2 == 0)) {
        if ((enum_hasoutput(26, 5134 as cs2enum, int1) == 1)) {
            script15938(int0, int4, 0, 0, 0, 0, 0, int15, int14, 0, 0);
            script7858(int4, 1, 0, 0, 0, 0, 0, 0, 1, 1, 14908 as dbrow, "");
            script7918(int4, 1, 0, 0, 0, 1, int13, int13, 0, 0, 24449 as graphic);
            if ((CC_FINDBYCATEGORY(int0, int4, 1) == 1)) {
                CC_SETOP(1, "View Options");
                int17 = enum_getreverseindex(26, 0, 5134 as cs2enum, int1, 0);
                var int0 = enum_getvalue(0, 9, 5135 as cs2enum, int17);
                CC_SETONOP(callback(script16552, -2147483645, -2147483643, int0, int1, -2147483644));
            };
        };
    } else {
        int6 = (int6 + int12);
        if ((int23 == false)) {
            int6 = (int6 + int12);
        };
    };
    return [(int3 + (int10 * 2)), int6];
}