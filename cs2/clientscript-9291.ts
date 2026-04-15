//
function script9291(int0: int, int1: achievement): void {
    script7944();
    var int2 = comp(1851, 40);
    var int3 = -1;
    if ((IF_FIND(int2) == 1)) {
        int3 = cc_getparam(7161);
    };
    if (((int3 > -1) && (CC_FIND(int2, (int3 + 7)) == 1))) {
        CC_SETVFLIP(false);
        varclient_6918 = -1;
        varclient_6919 = -1 as achievement;
    };
    IF_SETHIDE(true, comp(1851, 41));
    script15343(int3, 0);
    var int4 = 60;
    if ((varbitplayer_37059 == 1)) {
        int4 = 35;
    };
    var int5 = 0;
    if ((CC_FIND(int2, int0) == 1)) {
        int5 = CC_GETY();
    };
    var int6 = 0;
    var int7 = (IF_GETNEXTSUBID(int2) - 11);
    if ((CC_FIND(int2, int7) == 1)) {
        int6 = (CC_GETY() + int4);
    };
    if ((int3 == int0)) {
        if ((IF_FIND(int2) == 1)) {
            cc_setparam(7161, -1);
        };
        script15341(int2, int6, int5);
        return;
    };
    if ((IF_FIND(int2) == 1)) {
        cc_setparam(7161, int0);
    };
    if ((CC_FIND(int2, (int0 + 7)) == 1)) {
        CC_SETVFLIP(true);
        varclient_6918 = int0;
        varclient_6919 = int1;
    };
    CC_DELETEALL(comp(1851, 43));
    if ((CC_FIND(int2, int0) == 1)) {
        IF_SETPOSITION(0, (CC_GETY() + CC_GETHEIGHT()), 0, 0, comp(1851, 41));
    };
    var int8 = unk10981(int1);
    var int9 = 2;
    var int10 = (int8 / int9);
    var int11 = (int8 - (int10 * int9));
    if ((int11 > 0)) {
        int10 = (int10 + 1);
    };
    unk11013(0, int9, int10, comp(1851, 43));
    var int12 = 0;
    var int13 = ACHIEVEMENT_ACHIEVEMENT_REQ_COUNT(int1);
    var string0 = "";
    var int14 = 0;
    var int15 = 0;
    var int16 = unk11095(int1);
    while ((int15 < int16)) {
        unk11161(int1, int15);
        string0 = stack();
        if ((strcmp(string0, "") != 0)) {
            int14 = (script42(unk11094(int1, int15)) * -2);
            if (((varbitplayer_48340 == 0) || (int14 != -2))) {
                script15335(int13, string0, "", int14, 0, 0);
                int12 = MAX(int12, CC_GETHEIGHT());
                int13 = (int13 + 1);
            } else {
                int8 = (int8 - 1);
            };
        } else {
            int8 = (int8 - 1);
        };
        int15 = (int15 + 1);
    };
    int15 = 0;
    int16 = unk11065(int1);
    while ((int15 < int16)) {
        unk11160(int1, int15);
        string0 = stack();
        if ((strcmp(string0, "") != 0)) {
            int14 = (script42(unk11093(int1, int15)) * -2);
            if (((varbitplayer_48340 == 0) || (int14 != -2))) {
                script15335(int13, string0, "", int14, 0, 0);
                int12 = MAX(int12, CC_GETHEIGHT());
                int13 = (int13 + 1);
            } else {
                int8 = (int8 - 1);
            };
        } else {
            int8 = (int8 - 1);
        };
        int15 = (int15 + 1);
    };
    int15 = 0;
    int16 = unk11066(int1);
    while ((int15 < int16)) {
        unk11159(int1, int15);
        string0 = stack();
        string0 = script19624(int1, int15, string0);
        if ((strcmp(string0, "") != 0)) {
            if ((ACHIEVEMENT_CATEGORY(int1) == 5483 as category)) {
                string0 = script19394(string0);
            };
            int14 = (script42(unk11092(int1, int15)) * -2);
            if (((varbitplayer_48340 == 0) || (int14 != -2))) {
                script15335(int13, string0, "", int14, 0, 0);
                int12 = MAX(int12, CC_GETHEIGHT());
                int13 = (int13 + 1);
            } else {
                int8 = (int8 - 1);
            };
        } else {
            int8 = (int8 - 1);
        };
        int15 = (int15 + 1);
    };
    int15 = 0;
    int16 = unk11067(int1);
    while ((int15 < int16)) {
        unk11158(int1, int15);
        string0 = stack();
        if ((strcmp(string0, "") != 0)) {
            int14 = (script42(unk11091(int1, int15)) * -2);
            if (((varbitplayer_48340 == 0) || (int14 != -2))) {
                script15335(int13, string0, "", int14, 0, 0);
                int12 = MAX(int12, CC_GETHEIGHT());
                int13 = (int13 + 1);
            } else {
                int8 = (int8 - 1);
            };
        } else {
            int8 = (int8 - 1);
        };
        int15 = (int15 + 1);
    };
    int15 = 0;
    int16 = unk11068(int1);
    while ((int15 < int16)) {
        unk11157(int1, int15);
        string0 = stack();
        if ((strcmp(string0, "") != 0)) {
            int14 = (script42(unk11090(int1, int15)) * -2);
            if (((varbitplayer_48340 == 0) || (int14 != -2))) {
                script15335(int13, string0, "", int14, 0, 0);
                int12 = MAX(int12, CC_GETHEIGHT());
                int13 = (int13 + 1);
            } else {
                int8 = (int8 - 1);
            };
        } else {
            int8 = (int8 - 1);
        };
        int15 = (int15 + 1);
    };
    int15 = 0;
    int16 = unk11074(int1);
    var int17 = -1 as quest;
    while ((int15 < int16)) {
        int17 = unk10999(int1, int15);
        if ((int17 != -1 as quest)) {
            int14 = (script42(unk11089(int1, int15)) * -2);
            if (((varbitplayer_48340 == 0) || (int14 != -2))) {
                script15335(int13, QUEST_GETNAME(int17), quest_getparam(int17, 5968), int14, 0, 0);
                int12 = MAX(int12, CC_GETHEIGHT());
                int13 = (int13 + 1);
            } else {
                int8 = (int8 - 1);
            };
        };
        int15 = (int15 + 1);
    };
    int15 = 0;
    int16 = ACHIEVEMENT_ACHIEVEMENT_REQ_COUNT(int1);
    var int18 = -1 as achievement;
    var int19 = 0;
    while ((int15 < int16)) {
        int18 = unk11032(int1, int15);
        if ((int18 != -1 as achievement)) {
            int14 = ACHIEVEMENT_REQSTATE(int18);
            if ((((enum_hasoutput(131, 7256 as cs2enum, int1) == 1) || (varbitplayer_48340 == 0)) || (int14 != -2))) {
                int19 = 0;
                if ((unk11156(int18) > DATE_RUNEDAY())) {
                    int19 = 1;
                };
                script15335(int15, ACHIEVEMENT_GETNAME(int18), script15321(int18), int14, 1, int19);
                int12 = MAX(int12, CC_GETHEIGHT());
            } else {
                int8 = (int8 - 1);
            };
        };
        int15 = (int15 + 1);
    };
    int10 = (int8 / int9);
    int11 = (int8 - (int10 * int9));
    if ((int11 > 0)) {
        int10 = (int10 + 1);
    };
    unk11013(0, int9, int10, comp(1851, 43));
    var int20 = (((int12 * int10) + ((IF_GETCHILDSPACING(comp(1851, 43)) * int10) - 1)) + 6);
    IF_SETSIZE(0, int20, 1, 0, comp(1851, 41));
    IF_SETHIDE(false, comp(1851, 41));
    script15343(int0, IF_GETHEIGHT(comp(1851, 41)));
    int6 = (int6 + IF_GETHEIGHT(comp(1851, 41)));
    script15341(int2, int6, int5);
    return;
}