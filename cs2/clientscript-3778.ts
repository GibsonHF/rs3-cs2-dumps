//
function script3778(int0: dbrow, int1: component): void {
    if ((int0 == -1 as dbrow)) {
        return;
    };
    var int2 = (dbrow_getfield(int0, 299344, 0) - 1);
    var int3 = MIN(int2, MAX(0, (varplayer_9078 - 1)));
    var int4 = MIN(int2, varplayer_9078);
    var int5 = -1;
    var int6 = DB_GETFIELDCOUNT(int0, 299248);
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = -1;
    var int11 = -1;
    var int12 = DB_GETFIELDCOUNT(int0, 299472);
    if ((int3 == int2)) {
        if (((int12 == 1) && (varplayer_9078 == 71))) {
            int3 = (int3 - 1);
        };
        [int10, int8, int9] = dbrow_getfield(int0, 299232, int3);
        if ((IF_FIND(int1) == 1)) {
            CC_SETPOSITION((int8 - (CC_GETWIDTH() / 2)), (int9 - (CC_GETHEIGHT() / 2)), 0, 0);
            CC_SET2DANGLE(0);
            return;
        };
    };
    [int5, int7] = script299(int3, int0);
    var int13 = script275();
    if (((int12 == 1) && (int4 == (71 - 1)))) {
        int13 = 0;
    };
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    [int10, int14, int15] = dbrow_getfield(int0, 299232, int3);
    [int10, int16, int17] = dbrow_getfield(int0, 299232, int4);
    var int18 = (1000 / (int7 + 1));
    var int19 = (int13 / int18);
    var int20 = MODULO(int13, int18);
    int19 = MIN(int19, int7);
    if ((int19 > 0)) {
        [int10, int11, int14, int15] = dbrow_getfield(int0, 299248, ((int5 + int19) - 1));
    };
    if (((int19 < int7) && ((int5 + int19) > -1))) {
        [int10, int11, int16, int17] = dbrow_getfield(int0, 299248, (int5 + int19));
    };
    if ((IF_FIND(int1) == 1)) {
        CC_SETPOSITION(((((int14 * (int18 - int20)) + (int16 * int20)) / int18) - (CC_GETWIDTH() / 2)), ((((int15 * (int18 - int20)) + (int17 * int20)) / int18) - (CC_GETHEIGHT() / 2)), 0, 0);
        CC_SET2DANGLE(MODULO((SCALE((ATAN2_DEG((int17 - int15), (int14 - int16)) - 4096), 16384, 65536) + 32768), 65536));
    };
    return;
}