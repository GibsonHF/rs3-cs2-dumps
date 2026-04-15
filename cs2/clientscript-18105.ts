//
function script18105(int0: int, int1: int, int2: dbrow, int3: int, int4: int): [int, int] {
    var int5 = (58 + 2);
    var int6 = 7975 as dbrow;
    if ((int3 > 0)) {
        int6 = 7974 as dbrow;
    };
    script17947(int0, int1++, 0, int5, 1, 0, (2 * 2), (58 + (2 * 2)), 1, 1, int6);
    CC_GETDYNAMICLAYER();
    int5 = (int5 + 5);
    var int7 = int1;
    var int8 = enum_getvalue(0, 26, 17023 as cs2enum, int4);
    var int9 = ENUM_GETOUTPUTCOUNT(int8);
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = (1 + (int9 / 5));
    while ((int12 < int13)) {
        int10 = MIN((int9 - (int12 * 5)), 5);
        int11 = ((int10 * 35) + ((int10 - 1) * 5));
        script10028(int0, int1++, 0, int5, 1, 0, int11, 35, 0, 0, 0, 5);
        int5 = (int5 + (35 + 5));
        CC_GETDYNAMICLAYER();
        int12 = (int12 + 1);
    };
    var int14 = -1 as stat;
    var int15 = 0;
    var int16 = -1 as stat;
    var int17 = 0;
    var int18 = 0;
    var int19 = ENUM_GETOUTPUTCOUNT(9458 as cs2enum);
    while ((int18 < int19)) {
        if ((int17 == 5)) {
            int17 = 0;
            int7 = (int7 + 1);
        };
        if ((CC_FINDBYCATEGORY(comp(403, 9), int0, int7) == 1)) {
            int15 = enum_getvalue(0, 0, 9458 as cs2enum, int18);
            int16 = script2179(int15);
            if ((enum_hasoutput(17, int8, int16) == 1)) {
                if ((int16 != -1 as stat)) {
                    script7918(int0, int1++, 0, 0, 0, 0, 35, 35, 0, 0, enum_getvalue(0, 23, 8548 as cs2enum, int15));
                    script3537(`+${TOSTRING_LOCALISED(int3, 1)}% base ${enum_getvalue(17, 36, 680 as cs2enum, int16)} XP`);
                } else {
                    script15937(int0, int1++, 0, 0, 0, 0, 35, 35, 0, 0);
                    script7918(int0, int1++, 0, 0, 0, 0, 35, 35, 0, 0, enum_getvalue(0, 23, 8548 as cs2enum, int15));
                    script7918(int0, int1++, 0, 0, 0, 0, 35, 35, 0, 0, 25889 as graphic);
                    script3537(`${enum_getvalue(17, 36, 680 as cs2enum, int16)} is excluded from this buff.`);
                    int14 = -1 as stat;
                };
                int17 = (int17 + 1);
            };
        };
        int18 = (int18 + 1);
    };
    var string0 = "";
    var int20 = 0;
    var int21 = 0;
    if ((CC_FINDBYCATEGORY(comp(403, 9), int0, 0) == 1)) {
        string0 = script18106(int2, int3, int14, int4);
        int20 = (CC_GETWIDTH() - 20);
        int21 = script15891(string0, int20, 207 as fontmetrics, 0);
        script10485(int0, int1++, 0, int5, 1, 0, int20, int21, 0, 0, 8000 as dbrow, string0);
        int5 = (int5 + int21);
    };
    return [int1, (int5 + 10)];
}