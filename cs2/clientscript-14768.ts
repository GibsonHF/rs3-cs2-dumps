//
function script14768(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, string0: string): number {
    var string1 = script14507(int3);
    if (((STRING_LENGTH(string1) == 0) && (STRING_LENGTH(string0) == 0))) {
        return int5;
    };
    var int8 = int5;
    var int9 = 0;
    var int10 = script14502(int3);
    var int11 = 16777215;
    if ((int10 != 2)) {
        int11 = script10495(5);
    };
    if ((STRING_LENGTH(string1) > 0)) {
        script7924(int1, IF_GETNEXTSUBID(int1), 14, 14, (int4 + 8), (int8 + ((30 - 14) / 2)), 29975, 0, 0, 0, 0);
        script152(int1, ((int6 - (3 * 8)) - 14), 30, (((int4 + 8) + 14) + 8), int8, 26, string1, int11);
        CC_SETTEXTALIGN(0, 1, 0);
        int9 = MAX(30, ((2 * 8) + script7593(CC_GETTEXT(), ((int6 - (3 * 8)) - 14), CC_GETFONTMETRICS(), 0)));
        CC_SETSIZE(CC_GETWIDTH(), int9, 0, 0);
    };
    if ((STRING_LENGTH(string0) > 0)) {
        if ((int9 == 0)) {
            int9 = (int9 + 8);
        };
        script13980(int1, int2, 28553, ((int6 - 150) / 2), int9, 150, int7, 0, string0);
        int9 = MAX(30, ((int9 + struct_getparam(script9984(28553, 1), 3807)) + 8));
    };
    script10410(int0, -1, 2828, int4, int8, int6, int9, -1, 0, "");
    int8 = (int8 + int9);
    return int8;
}