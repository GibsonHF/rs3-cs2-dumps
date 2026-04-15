//
function script19816(): int {
    var int0 = 25;
    var int1 = -1;
    var int2 = dbrow_getfield(14845 as dbrow, 1106000, 0);
    var int3 = dbrow_getfield(14845 as dbrow, 1106016, 0);
    var int4 = DB_GETFIELDCOUNT(int2, 1269760);
    var int5 = DB_GETFIELDCOUNT(int3, 1269760);
    var int6 = MAX(int4, int5);
    var int7 = 0;
    var int8 = -1;
    var int9 = -1 as obj;
    var int10 = -1 as graphic;
    var int11 = 0;
    script7918(13, int7++, int0, 5, 0, 0, 120, 120, 0, 0, 34743 as graphic);
    script7918(13, int7++, int0, 130, 0, 0, 120, 120, 0, 0, 34742 as graphic);
    int0 = (int0 + 150);
    var int12 = 0;
    while ((++int1 < int6)) {
        if ((int1 < int4)) {
            if ((int12 == 0)) {
                script7918(13, int7++, (int0 - 55), (5 + 25), 0, 0, 89, 50, 0, 0, 34747 as graphic);
            };
            script7918(10, int1, int0, 5, 0, 0, 120, 120, 0, 0, 34739 as graphic);
            script19798(10, int1, 34739 as graphic, 34740 as graphic);
            CC_SETOP(1, "Select");
            CC_SETONOP(callback(script19817, 1, int1));
            int8 = dbrow_getfield(int2, 1269760, int1);
            int10 = dbrow_getfield(int8, 1273890, 0);
            int9 = dbrow_getfield(int8, 1273873, 0);
            if ((int10 != -1)) {
                script7918(13, int7++, (int0 + 25), (5 + 22), 0, 0, 70, 70, 0, 0, int10);
            } else if ((int9 != -1 as obj)) {
                script17950(13, int7++, (int0 + 25), (5 + 22), 0, 0, 70, 70, 0, 0, int9, 0);
            };
            if ((varbitplayer_57155 >= (int1 + 1))) {
                script7918(13, int7++, int0, 5, 0, 0, 120, 120, 0, 0, 34744 as graphic);
            };
        };
        if ((int1 < int5)) {
            if ((int12 == 0)) {
                script7918(13, int7++, (int0 - 55), (130 + 45), 0, 0, 89, 50, 0, 0, 34746 as graphic);
            };
            script7918(11, int1, int0, 130, 0, 0, 120, 120, 0, 0, 34739 as graphic);
            script19798(11, int1, 34739 as graphic, 34740 as graphic);
            CC_SETOP(1, "Select");
            CC_SETONOP(callback(script19817, 2, int1));
            int8 = dbrow_getfield(int3, 1269760, int1);
            int10 = dbrow_getfield(int8, 1273890, 0);
            int9 = dbrow_getfield(int8, 1273873, 0);
            if ((int10 != -1)) {
                script7918(13, int7++, (int0 + 25), (130 + 22), 0, 0, 70, 70, 0, 0, int10);
            } else if ((int9 != -1 as obj)) {
                script17950(13, int7++, (int0 + 25), (130 + 22), 0, 0, 70, 70, 0, 0, int9, 0);
            };
            if ((varbitplayer_57156 >= (int1 + 1))) {
                script7918(13, int7++, int0, 130, 0, 0, 120, 120, 0, 0, 34744 as graphic);
            };
            int12 = 0;
        };
        if (((DB_GETFIELDCOUNT(14848 as dbrow, 1277952) > int11) && (int1 == (dbrow_getfield(14848 as dbrow, 1277953, int11) - 1)))) {
            int0 = (int0 + 150);
            script7918(13, int7++, (int0 - 55), (5 + 45), 0, 0, 117, 138, 0, 0, 34749 as graphic);
            script7918(12, int1, int0, 60, 0, 0, 120, 120, 0, 0, 34739 as graphic);
            script19798(12, int1, 34739 as graphic, 34740 as graphic);
            CC_SETOP(1, "Select");
            CC_SETONOP(callback(script19817, 3, int11));
            dbrow_getfield(14848, 1277952, int11);
            int10 = dbrow_getfield(14848, 1277957, int11);
            int9 = dbrow_getfield(14848, 1277954, int11);
            if ((int10 != -1)) {
                script7918(13, int7++, (int0 + 25), (60 + 22), 0, 0, 70, 70, 0, 0, int10);
            } else if ((int9 != -1 as obj)) {
                script17950(13, int7++, (int0 + 25), (60 + 22), 0, 0, 70, 70, 0, 0, int9, 0);
            };
            if ((TESTBIT(varbitplayer_57157, int11) == 1)) {
                script7918(13, int7++, int0, 60, 0, 0, 120, 120, 0, 0, 34744 as graphic);
            };
            script7918(13, int7++, (int0 + 62), (5 + 45), 0, 0, 117, 138, 0, 0, 34748 as graphic);
            int12 = 1;
            int11 = (int11 + 1);
        };
        int0 = (int0 + 150);
    };
    if ((int12 == 0)) {
        script7918(13, int7++, (int0 - 55), (5 + 25), 0, 0, 89, 50, 0, 0, 34747 as graphic);
    };
    script7918(10, int6, int0, 5, 0, 0, 120, 120, 0, 0, 34739 as graphic);
    script19798(10, int1, 34739 as graphic, 34740 as graphic);
    CC_SETOP(1, "Select");
    CC_SETONOP(callback(script19817, 1, int6));
    int8 = dbrow_getfield(int2, 1269776, 0);
    int10 = dbrow_getfield(int8, 1273890, 0);
    int9 = dbrow_getfield(int8, 1273873, 0);
    if ((int10 != -1)) {
        script7918(13, int7++, (int0 + 25), (5 + 22), 0, 0, 70, 70, 0, 0, int10);
    } else if ((int9 != -1 as obj)) {
        script17950(13, int7++, (int0 + 25), (5 + 22), 0, 0, 70, 70, 0, 0, int9, 0);
    };
    script7918(13, int7++, (int0 + 30), 5, 0, 0, 25, 15, 0, 0, 4147 as graphic);
    if ((int12 == 0)) {
        script7918(13, int7++, (int0 - 55), (130 + 45), 0, 0, 89, 50, 0, 0, 34746 as graphic);
    };
    script7918(11, int6, int0, 130, 0, 0, 120, 120, 0, 0, 34739 as graphic);
    script19798(11, int1, 34739 as graphic, 34740 as graphic);
    CC_SETOP(1, "Select");
    CC_SETONOP(callback(script19817, 2, int6));
    int8 = dbrow_getfield(int3, 1269776, 0);
    int10 = dbrow_getfield(int8, 1273890, 0);
    int9 = dbrow_getfield(int8, 1273873, 0);
    if ((int10 != -1)) {
        script7918(13, int7++, (int0 + 25), (130 + 22), 0, 0, 70, 70, 0, 0, int10);
    } else if ((int9 != -1 as obj)) {
        script17950(13, int7++, (int0 + 25), (130 + 22), 0, 0, 70, 70, 0, 0, int9, 0);
    };
    script7918(13, int7++, (int0 + 30), 130, 0, 0, 25, 15, 0, 0, 4147 as graphic);
    return ++int0;
}