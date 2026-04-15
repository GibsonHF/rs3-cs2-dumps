//
function script18189(int0: int, int1: int, int2: int, int3: int, string0: string): dbrow {
    if ((int0 > varclient_5939)) {
        return -1 as dbrow;
    };
    if ((TESTBIT(int3, 1) == 0)) {
        return -1 as dbrow;
    };
    CC_SETPARAM_STRING(IF_SETPLAYERHEAD_SELF(WORLDMAP_LISTELEMENT_START(667776, 13, 3, 0), WORLDMAP_LISTELEMENT_START(667920, 0, 4, 0)), 667920, 1, -1, 0);
    var int4 = DB_FIND_GET(int0++);
    var int5 = -1 as obj;
    var int6 = 1;
    var int7 = 0;
    var int8 = 0;
    while ((int4 != -1 as dbrow)) {
        int6 = 1;
        int5 = script15764(int4);
        if ((int5 == -1 as obj)) {
            return -1 as dbrow;
        };
        int7 = OC_WEARPOS(int5);
        if (((strcmp(string0, "") != 0) && (STRING_INDEXOF_STRING(LOWERCASE(OC_NAME(int5)), string0, 0) == -1))) {
            int6 = 0;
        };
        if (((TESTBIT(int1, 19) == 0) && (TESTBIT(int1, int7) == 0))) {
            int6 = 0;
        };
        if (((int7 == 3) || (int7 == 5))) {
            if ((int7 == 3)) {
                int8 = 262142;
            } else {
                int8 = 268173312;
            };
            if ((AND(int2, AND(enum_getvalue(73, 0, 12196 as cs2enum, item_getparam(int5, 686)), int8)) == 0)) {
                int6 = 0;
            };
        };
        if ((int6 == 1)) {
            return int4;
        };
        int4 = DB_FIND_GET(int0++);
    };
    return -1 as dbrow;
}