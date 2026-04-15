//
function script20254(): void {
    var int0 = script20117(varplayer_12314);
    if ((int0 == -1 as dbrow)) {
        script20273();
        return;
    };
    var int1 = dbrow_getfield(int0, 1335424, 0);
    CC_DELETEALL(comp(1443, 8));
    CC_DELETEALL(comp(1443, 7));
    IF_SETHIDE(true, comp(1443, 9));
    IF_SETHIDE(false, comp(1443, 2));
    IF_SETHIDE(false, comp(1443, 1));
    IF_SETHIDE(false, comp(1443, 3));
    var int2 = 0;
    var int3 = 0;
    var int4 = DB_GETFIELDCOUNT(int1, 1339392);
    var int5 = 0;
    var int6 = -1 as dbrow;
    var int7 = false;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    while ((int2 < int4)) {
        int8 = 0;
        int6 = dbrow_getfield(int1, 1339392, int2);
        int3 = DB_GETFIELDCOUNT(int6, 1343504);
        int7 = script20143(int6, int3);
        if ((int2 == 0)) {
            int5 = int3;
        };
        while ((int8 < int3)) {
            int11 = (int3 - int8);
            if ((int11 <= 2)) {
                int5 = script20255(int6, int2, int8, 2, int9, int5, int7);
                int8 = (int8 + 2);
            } else if ((int11 > 4)) {
                int5 = script20255(int6, int2, int8, 3, int9, int5, int7);
                int8 = (int8 + 3);
            } else if ((MODULO(int11, 4) == 0)) {
                int5 = script20255(int6, int2, int8, 2, int9, int5, int7);
                int8 = (int8 + 2);
            } else {
                int5 = script20255(int6, int2, int8, 3, int9, int5, int7);
                int8 = (int8 + 3);
            };
            int9 = (int9 + 1);
        };
        int2 = (int2 + 1);
    };
    var int12 = -1;
    var int13 = 0;
    [int13, int12] = script20260(int9, int4);
    IF_SETSCROLLSIZE(--int13, 0, comp(1443, 6));
    if (((int12 != -1) && (CC_FINDBYCATEGORY(comp(1443, 8), 200, int12) == 1))) {
        IF_SETSCROLLPOS(((CC_GETX() + (CC_GETWIDTH() / 2)) - (IF_GETWIDTH(comp(1443, 8)) / 2)), 0, comp(1443, 8));
    };
    script11147(comp(1443, 3), comp(1443, 6));
    return;
}