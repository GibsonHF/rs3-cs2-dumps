//
function script18067(int0: int, int1: component, int2: int): [component, int, int] {
    var int3 = script17905(int0);
    var int4 = script17903(int0);
    var int5 = 0;
    var int6 = script17902(int0);
    if ((int3 == -1 as dbrow)) {
        script12478(`No cached mission found at slot ${inttostring(int0, 10)}`);
        return [comp(-1, 65535), -1, int2];
    };
    var int7 = dbrow_getfield(int3, 1019920, 0);
    if ((int7 > 4095)) {
        script12478("We need to change how we're drawing missions, we've got too many ID's");
    };
    var string0 = "";
    var string1 = "";
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = -1 as stat;
    var int12 = 0;
    var int13 = 1;
    var int14 = DB_GETFIELDCOUNT(int3, 1020064);
    var int15 = 0;
    var int16 = 0;
    var int17 = -1 as obj;
    var int18 = 0;
    var int19 = 0;
    var int20 = script4148();
    var int21 = -1;
    var int22 = -1;
    var int23 = script17898(dbrow_getfield(script17905(int0), 1020128, 0));
    var int24 = script17907(int0);
    if ((CC_FINDBYCATEGORY(int1, (int23 + 40), 0) == 1)) {
        var int2 = cc_getparam(4255);
        cc_setparam(4255, (int2 + 105));
        cc_setparam(5165, (cc_getparam(5165) + 1));
        script15937(int0, int13, 0, int2, 0, 0, 0, 0, 1, 1);
        int13 = (int13 + 1);
        script7918(int0, int13, 15, 10, 0, 0, 80, 80, 0, 0, dbrow_getfield(int3, 1020160, 0));
        int13 = (int13 + 1);
        script10485(int0, int13, 110, 0, 0, 0, 0, 30, 1, 0, 7982 as dbrow, dbrow_getfield(int3, 1019904, 0));
        int13 = (int13 + 1);
        script10485(int0, int13, 110, 16, 0, 0, 0, 30, 1, 0, 7998 as dbrow, script18073(int3));
        int13 = (int13 + 1);
        script10485(int0, int13, ((IF_GETWIDTH(int1) / 2) - 60), 60, 0, 0, (IF_GETWIDTH(int1) / 3), 30, 0, 0, 7982 as dbrow, "Rewards:");
        int13 = (int13 + 1);
        int9 = (int9 + 25);
        int8 = dbrow_getfield(int3, 1020096, 0);
        if ((int8 > 0)) {
            script7918(int0, int13, ((IF_GETWIDTH(int1) / 2) + int9), 60, 0, 0, 32, 32, 0, 0, 8459 as graphic);
            script17954(`${inttostring(int8, 10)} x Hero points`, 1);
            int9 = (int9 + 36);
            int13 = (int13 + 1);
            int16 = (int16 + 1);
        };
        if ((int20 == false)) {
            int10 = dbrow_getfield(int3, 1020080, 0);
            if (((int10 > 0) && (PLAYERMEMBER() == true))) {
                script17927();
                script17950(int0, int13, ((IF_GETWIDTH(int1) / 2) + int9), 60, 0, 0, 36, 32, 0, 0, 55762 as obj, int10);
                script17954(`${inttostring(int10, 10)} x Treasure Hunter Keys`, 1);
                int9 = (int9 + 36);
                int13 = (int13 + 1);
                int16 = (int16 + 1);
            };
            [int11, int12] = dbrow_getfield(int3, 1020112, 0);
            if (((int11 != -1 as stat) && (int12 > 0))) {
                script7918(int0, int13, ((IF_GETWIDTH(int1) / 2) + int9), 60, 0, 0, 36, 32, 0, 0, script8894(int11));
                script17954(`${inttostring((int12 / 10), 10)} x ${enum_getvalue(17, 36, 680 as cs2enum, int11)} XP`, 1);
                int9 = (int9 + 36);
                int13 = (int13 + 1);
                int16 = (int16 + 1);
            };
        };
        int14 = DB_GETFIELDCOUNT(int3, 1020064);
        if ((int14 > 0)) {
            while (((int15 < int14) && (int16 < 5))) {
                if (((int16 == 4) && (int14 != (int15 + 1)))) {
                    script7918(int0, int13, ((IF_GETWIDTH(int1) / 2) + int9), 60, 0, 0, 36, 32, 0, 0, 3818 as graphic);
                    script17954("Plus more rewards!", 1);
                    int9 = (int9 + 36);
                    int16 = (int16 + 1);
                    int13 = (int13 + 1);
                } else {
                    [int17, int18, int19] = dbrow_getfield(int3, 1020064, int15);
                    if (((int20 == false) || ((int20 == true) && (int19 == 1)))) {
                        script17950(int0, int13, ((IF_GETWIDTH(int1) / 2) + int9), 60, 0, 0, 36, 32, 0, 0, OC_UNCERT(int17), 1);
                        script17954(`${inttostring(int18, 10)} x ${OC_NAME(int17)}`, 1);
                        int9 = (int9 + 36);
                        int16 = (int16 + 1);
                        int13 = (int13 + 1);
                    };
                };
                int15 = (int15 + 1);
            };
        };
        int13 = (int13 + 1);
        [string0, string1] = script18072(int3);
        int5 = dbrow_getfield(int3, 1019984, 0);
        if ((int4 < int5)) {
            script7918(int0, int13, 110, 62, 0, 0, 160, 26, 0, 0, 31230 as graphic);
            int13 = (int13 + 1);
            script7918(int0, int13, 112, 64, 0, 0, SCALE(int4, int5, 156), 22, 0, 0, 31916 as graphic);
            int13 = (int13 + 1);
            script10485(int0, int13, 110, 62, 0, 0, 160, 26, 0, 0, 7998 as dbrow, `<col=000000>Progress: </col><col=2EF8FF>${inttostring(int4, 10)}</col> / <col=2EF8FF>${inttostring(int5, 10)}</col>`);
            CC_SETTEXTALIGN(1, 1, 0);
        } else {
            script7858(101, int0, 110, 62, 0, 0, 160, 26, 0, 0, script17989(22), "Claim");
            script17954("Complete Mission", 0);
            script7872(true, 1, false, false);
            CC_SETOP(1, "Complete Mission");
            CC_SETONOP(callback(script18086));
        };
        int13 = (int13 + 1);
        script10485(int0, int13, (IF_GETWIDTH(int1) - 110), 60, 0, 0, 40, 30, 0, 0, 8003 as dbrow, script18087(int6, 0, 1));
        int13 = (int13 + 1);
        script7918(int0, int13, (IF_GETWIDTH(int1) - 115), 5, 0, 0, 50, 50, 0, 0, 3815 as graphic);
        if ((int6 == (DATE_RUNEDAY() + 1))) {
            CC_SETCOLOUR(16522243);
        } else if ((int6 <= (DATE_RUNEDAY() + 2))) {
            CC_SETCOLOUR(15249936);
        } else {
            CC_SETCOLOUR(12837623);
        };
        int13 = (int13 + 1);
        if ((dbrow_getfield(int3, 1020000, 0) != -1 as dbrow)) {
            if ((script6431() == true)) {
                script7918(int0, int13, (IF_GETWIDTH(int1) - 40), 60, 0, 0, 24, 24, 0, 0, 4441 as graphic);
            } else {
                script7918(int0, int13, (IF_GETWIDTH(int1) - 55), 10, 0, 0, 12, 12, 0, 0, 4441 as graphic);
            };
            script17954("This mission is part of a chain. Claiming on completion unlocks the next mission.", 1);
            int13 = (int13 + 1);
        };
        script18069(int0, int1);
        int13 = (int13 + 1);
        script7862(0, (int0 + 50), 8, 0, 0, 0, (IF_GETWIDTH(int1) - 16), 100, 0, 0, 7953 as dbrow, "", true, 1, false, false);
        CC_SETOP(3, "Mission Information");
        CC_SETONOP(callback(script18070, int0, -2147483645, -2147483643, CC_GETLAYER()));
        int21 = CC_GETLAYER();
        int22 = CC_GETID();
        int13 = (int13 + 1);
        return [int21, int22, (int2 + 110)];
    };
    return [comp(-1, 65535), -1, int2];
}