//
function script7126(int0: component, int1: obj): void {
    var int2 = 0;
    var int3 = item_getparam(int1, 2696);
    var int4 = 1;
    var int5 = 0;
    var string0 = "";
    var string1 = "";
    var int6 = -1 as graphic;
    if ((item_getparam(int1, 3037) == false)) {
        int4 = script18374(int1);
    } else {
        int4 = 1;
    };
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 4;
    if ((MAP_LANG() == 3)) {
        int10 = 3;
    };
    CC_DELETEALL(int0);
    if ((int3 != 0)) {
        int5 = 0;
        int7 = item_getparam(int1, 2697);
        if ((int1 == 33769 as obj)) {
            int7 = (script2181(2, 22 as stat, 0) / 2);
        } else if ((item_getparam(int1, 223) != -1 as obj)) {
            int7 = script9883(item_getparam(int1, 223));
        };
        int6 = enum_getvalue(0, 23, 371 as cs2enum, int3);
        int7 = script10873(int1, int7, int4, 1);
        [int8, int9] = script362(int7, 1);
        string0 = script361(int7, 1);
        if (((MAP_LANG() != 3) || (STRING_LENGTH(string0) <= 5))) {
            string0 = strconcat(string0, "xp");
        };
        if ((int9 > 0)) {
            string1 = `${inttostring(int8, 10)}${script8002()}${inttostring(int9, 10)} ${enum_getvalue(0, 36, 108 as cs2enum, int3)} Experience`;
        } else {
            string1 = `${inttostring(int8, 10)} ${enum_getvalue(0, 36, 108 as cs2enum, int3)} Experience`;
        };
    } else {
        int5 = 1;
        int6 = -1 as graphic;
        string0 = "-";
        string1 = "No xp Gain";
    };
    script2554(int0, 0, int6, string0, string1, int5, 1);
    int5 = 1;
    int6 = -1 as graphic;
    string0 = "-";
    string1 = "";
    int8 = 0;
    int9 = 0;
    int3 = item_getparam(int1, 2698);
    if ((item_getparam(int1, 2996) == false)) {
        int4 = script18374(int1);
    } else {
        int4 = 1;
    };
    if ((int3 != 0)) {
        int5 = 0;
        int7 = item_getparam(int1, 2699);
        if ((script7166(int1) == 1)) {
            int7 = ((int4 * int7) / 10000);
        } else {
            int7 = script10873(int1, int7, int4, 2);
        };
        int6 = enum_getvalue(0, 23, 371 as cs2enum, int3);
        [int8, int9] = script362(int7, 1);
        string0 = script361(int7, 1);
        if (((MAP_LANG() != 3) || (STRING_LENGTH(string0) <= 5))) {
            string0 = strconcat(string0, "xp");
        };
        if ((int9 > 0)) {
            string1 = `${inttostring(int8, 10)}${script8002()}${inttostring(int9, 10)} ${enum_getvalue(0, 36, 108 as cs2enum, int3)} Experience`;
        } else {
            string1 = `${inttostring(int8, 10)} ${enum_getvalue(0, 36, 108 as cs2enum, int3)} Experience`;
        };
    } else {
        int5 = 1;
        int6 = -1 as graphic;
        string0 = "-";
        string1 = "No Secondary xp gain";
    };
    script2554(int0, 4, int6, string0, string1, int5, 1);
    int5 = 1;
    int6 = -1 as graphic;
    string0 = "-";
    string1 = "";
    if ((item_getparam(int1, 2989) != -1 as obj)) {
        var int1 = item_getparam(int1, 2989);
    };
    int4 = script18374(int1);
    var int11 = 0;
    var long0 = 0n;
    var string2 = "Sell to Store Gold Value";
    var string3 = "Grand Exchange Gold Value";
    var string4 = "";
    var string5 = "";
    var string6 = "";
    var string7 = "";
    var int12 = 1;
    var int13 = 1;
    var int14 = 1;
    var int15 = 1;
    if ((STAT_BASE(6 as stat) >= 55)) {
        string4 = "High Alchemy Gold Value";
    } else {
        string4 = "Low Alchemy Gold Value";
    };
    if ((script17369(int1) > 0)) {
        if ((OC_TRADEABLE(int1) == 1)) {
            int12 = 0;
            int11 = (int4 * MAX(1, SCALE(script17369(int1), 100, 30)));
            string5 = script940(int11);
            string2 = `${string2}: ${TOSTRING_LOCALISED(int11, 1)}`;
            if (branch_not_long[384](varclient_2224, -1n)) {
                int14 = 0;
                long0 = MULTIPLY_LONG(INT_TO_LONG(int4), varclient_2224);
                string6 = script17370(long0);
                string3 = `${string3}: ${TOSTRING_LOCALISED_LONG(long0, 1)}`;
            } else {
                int15 = 0;
                int14 = 1;
                string6 = "-";
            };
        } else {
            int15 = 1;
            int12 = 1;
            int14 = 1;
            string5 = "-";
            string6 = "-";
        };
        if ((item_getparam(int1, 689) == 0)) {
            int13 = 0;
            if ((STAT_BASE(6 as stat) >= 55)) {
                int11 = (int4 * SCALE(60, 100, script17369(int1)));
            } else {
                int11 = (int4 * SCALE(40, 100, script17369(int1)));
            };
            string7 = script940(int11);
            string4 = `${string4}: ${TOSTRING_LOCALISED(int11, 1)}`;
        } else {
            int13 = 1;
            string7 = "-";
        };
    } else {
        int12 = 1;
        int14 = 1;
        int13 = 1;
        string5 = "-";
        string6 = "-";
        string7 = "-";
    };
    script2554(int0, 1, 8955 as graphic, string5, string2, int12, 1);
    script2554(int0, 2, 14929 as graphic, string6, string3, int14, int15);
    script2554(int0, 3, 13660 as graphic, string7, string4, int13, 1);
    return;
}