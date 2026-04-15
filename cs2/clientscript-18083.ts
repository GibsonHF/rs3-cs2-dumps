//
function script18083(int0: dbrow, int1: component, int2: int): int {
    script17927();
    var int3 = 0;
    var int4 = script4148();
    var int5 = dbrow_getfield(int0, 1020096, 0);
    var int6 = 0;
    if ((int4 == false)) {
        int6 = dbrow_getfield(int0, 1020080, 0);
    };
    var int7 = -1 as stat;
    var int8 = 0;
    if ((int4 == false)) {
        [int7, int8] = dbrow_getfield(int0, 1020112, 0);
    };
    var int9 = 10;
    var int10 = DB_GETFIELDCOUNT(int0, 1020064);
    var int11 = -1;
    var int12 = -1 as obj;
    var int13 = 0;
    var int14 = 0;
    var int15 = 54;
    var int16 = 54;
    var int17 = 66;
    var int18 = (int17 + 4);
    var int19 = 6;
    var int20 = 3;
    var int21 = 5;
    if ((IF_FIND(int1) == 1)) {
        CC_CREATECHILD(0, int3, 2);
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETPOSITION(0, 0, 0, 0);
        script10485(2, int3, 10, int2, 0, 0, 0, 30, 1, 0, 7982 as dbrow, "Rewards");
        int3 = (int3 + 1);
        var int2 = (int2 + 25);
        if ((int5 > 0)) {
            script7918(2, int3, int9, int2, 0, 0, int17, int17, 0, 0, 3790 as graphic);
            int3 = (int3 + 1);
            script7918(2, int3, (int9 + int19), (int2 + int19), 0, 0, int15, int16, 0, 0, 8428 as graphic);
            script17954(`${inttostring(int5, 10)} x Hero points`, 1);
            int3 = (int3 + 1);
            script10485(2, int3, (int9 + int20), (int2 - int21), 0, 0, 0, 30, 1, 0, 7999 as dbrow, inttostring(int5, 10));
            int3 = (int3 + 1);
            int9 = (int9 + int18);
        };
        if (((int6 > 0) && (PLAYERMEMBER() == true))) {
            script7918(2, int3, int9, int2, 0, 0, int17, int17, 0, 0, 3790 as graphic);
            int3 = (int3 + 1);
            script17950(2, int3, (int9 + int19), (int2 + int19), 0, 0, int15, int16, 0, 0, 55762 as obj, int6);
            script17954(`${inttostring(int6, 10)} x Treasure Hunter Keys`, 1);
            int3 = (int3 + 1);
            script10485(2, int3, (int9 + int20), (int2 - int21), 0, 0, 0, 30, 1, 0, 7999 as dbrow, inttostring(int6, 10));
            int3 = (int3 + 1);
            int9 = (int9 + int18);
        };
        if (((int7 != -1 as stat) && (int8 > 0))) {
            script7918(2, int3, int9, int2, 0, 0, int17, int17, 0, 0, 3790 as graphic);
            int3 = (int3 + 1);
            script7918(2, int3, (int9 + int19), (int2 + int19), 0, 0, (int15 - 4), (int16 - 4), 0, 0, script8894(int7));
            script17954(`${inttostring((int8 / 10), 10)} x ${enum_getvalue(17, 36, 680 as cs2enum, int7)} XP`, 1);
            int3 = (int3 + 1);
            script10485(2, int3, (int9 + int20), (int2 - int21), 0, 0, 0, 30, 1, 0, 7999 as dbrow, inttostring((int8 / 10), 10));
            int3 = (int3 + 1);
            int9 = (int9 + int18);
        };
        if ((int10 > 0)) {
            while ((++int11 < int10)) {
                if (((int9 + int17) > IF_GETWIDTH(int1))) {
                    int9 = 10;
                    int2 = (int2 + int18);
                };
                [int12, int13, int14] = dbrow_getfield(int0, 1020064, int11);
                if (((int4 == false) || ((int4 == true) && (int14 == 1)))) {
                    script7918(2, int3, int9, int2, 0, 0, int17, int17, 0, 0, 3790 as graphic);
                    int3 = (int3 + 1);
                    script17950(2, int3, ((int9 + int19) + 2), (int2 + int19), 0, 0, int15, int16, 0, 0, OC_UNCERT(int12), 1);
                    script17954(`${inttostring(int13, 10)} x ${OC_NAME(int12)}`, 1);
                    int3 = (int3 + 1);
                    script10485(2, int3, (int9 + int20), (int2 - int21), 0, 0, 0, 30, 1, 0, 7999 as dbrow, inttostring(int13, 10));
                    int9 = (int9 + int18);
                    int3 = (int3 + 1);
                };
            };
        };
    } else {
        script12478("Cannot find parent layer when trying to populate BP3 missions reward panel.");
    };
    int2 = (int2 + (int18 + 20));
    return int2;
}