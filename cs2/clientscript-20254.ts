//
function script20254(): void {
    var int0 = script20117(varplayer_12314);
    if ((int0 == -1 as dbrow)) {
        script20273();
        return;
    };
    var int1 = dbrow_getfield(int0, 1335424, 0);
    CC_DELETEALL(94568456);
    CC_DELETEALL(94568455);
    IF_SETHIDE(1, 94568457);
    IF_SETHIDE(0, 94568450);
    IF_SETHIDE(0, 94568449);
    IF_SETHIDE(0, 94568451);
    var int2 = 0;
    var int3 = 0;
    var int4 = DB_GETFIELDCOUNT(int1, 1339392);
    var int5 = 0;
    var int6 = -1 as dbrow;
    var int7 = 0;
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
    IF_SETSCROLLSIZE(--int13, 0, 94568454);
    if (((int12 != -1) && (CC_FINDBYCATEGORY(94568456, 200, int12) == 1))) {
        IF_SETSCROLLPOS(((CC_GETX() + (CC_GETWIDTH() / 2)) - (IF_GETWIDTH(94568456) / 2)), 0, 94568456);
    };
    script11147(94568451, 94568454);
    return;
}