//
function script18907(): void {
    var int0 = script18854();
    var int1 = script18858();
    var int2 = script15113();
    var int3 = -1;
    var int4 = (((int0 * (91 + 4)) + 41) + 4);
    var int5 = ((int1 * (41 + 4)) - 4);
    var int6 = ((int4 + 4) - 2);
    var int7 = 13566 as dbrow;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    CC_DELETEALL(comp(1284, 28));
    CC_DELETEALL(comp(1284, 25));
    while ((int12 < int1)) {
        int9 = (int12 * (41 + 4));
        if ((IF_FIND(comp(1284, 28)) == 1)) {
            while ((int13 < int0)) {
                int3 = (varclient_7418 + int13);
                if ((int3 != int2)) {
                    int7 = 13566 as dbrow;
                } else {
                    int7 = 4128 as dbrow;
                };
                int8 = (int13 * (91 + 4));
                script10033(0, int10, int8, int9, 0, 0, 91, 41, 0, 0, int7);
                int13 = (int13 + 1);
                int10 = (int10 + 1);
            };
        };
        if ((IF_FIND(comp(1284, 25)) == 1)) {
            script10033(0, int11, 0, ((int9 + 41) + 1), 0, 0, int6, 2, 0, 0, 13568 as dbrow);
            int11 = (int11 + 1);
        };
        int10 = (int10 + 1);
        int12 = (int12 + 1);
        int13 = 0;
    };
    if ((IF_FIND(comp(1284, 25)) == 1)) {
        CC_SETSIZE(int6, int5, 0, 0);
        script10033(0, int11, 0, 0, 0, 0, 2, int5, 0, 0, 13568 as dbrow);
        int11 = (int11 + 1);
        int12 = 0;
        while ((int12 <= int0)) {
            int3 = (varclient_7418 + int12);
            int14 = (int2 - int3);
            if (((int14 < -1) || (int14 > 0))) {
                int8 = (((int12 * (91 + 4)) + 41) + 4);
                script10033(0, int11, int8, 0, 0, 0, 2, int5, 0, 0, 13568 as dbrow);
            };
            int11 = (int11 + 1);
            int12 = (int12 + 1);
        };
    };
    return;
}