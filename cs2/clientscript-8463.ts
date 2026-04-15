//
function script8463(int0: component): void {
    var int1 = 0;
    var int2 = 94 as inv;
    var int3 = varplayer_716;
    var int4 = varplayer_1039;
    var int5 = varplayer_1037;
    var int6 = varplayer_1038;
    var int7 = varplayer_11308;
    var int8 = varplayer_3562;
    var int9 = varplayer_718;
    var int10 = varbitplayer_43;
    var int11 = varclient_2760;
    if ((int0 == comp(1559, 25))) {
        int1 = 1;
        int2 = 742 as inv;
        int3 = varplayer_4972;
        int4 = varplayer_4968;
        int5 = varplayer_4966;
        int6 = varplayer_4967;
        int7 = varplayer_11208;
        int8 = varplayer_4973;
        int9 = varplayer_4974;
        int10 = varbitplayer_26124;
    };
    var int12 = INV_GETOBJ(int2, 5);
    var int13 = INV_GETOBJ(int2, 13);
    var int14 = SCALE(int3, 100, 50);
    var int15 = 0;
    if ((item_getparam(int12, 2827) == 1)) {
        int15 = int4;
    } else if ((item_getparam(int12, 2825) == 1)) {
        int15 = int5;
    } else if ((item_getparam(int12, 2826) == 1)) {
        int15 = int6;
    } else if ((item_getparam(int12, 8898) == 1)) {
        int15 = int7;
    };
    var int16 = ((script7244(int12) + int8) - int15);
    var int17 = script7436(int12);
    var string0 = enum_getvalue(0, 36, 6744 as cs2enum, int9);
    var string1 = "Weapon";
    var string2 = enum_getvalue(0, 36, 6741 as cs2enum, int17);
    var int18 = enum_getvalue(0, 73, 6740 as cs2enum, int10);
    var int19 = SCALE(int11, 100, 50);
    var int20 = SCALE(enum_getvalue(0, 0, 7339 as cs2enum, int19), 100, (100 + (40 / 2)));
    var int21 = 0;
    var int22 = 0;
    var int23 = 0;
    var int24 = 0;
    var int25 = 0;
    var int26 = 0;
    var int27 = 0;
    var int28 = 0;
    var int29 = 0;
    if (((int12 == -1 as obj) || (item_getparam(int12, 2832) == 1))) {
        if ((int1 == 1)) {
            IF_SETHIDE(false, comp(1559, 96));
            if ((varclient_4664 == 1)) {
                script8467(int0, 0);
            };
        } else {
            IF_SETHIDE(false, comp(1463, 176));
            IF_SETHIDE(false, comp(1463, 120));
            IF_SETHIDE(true, comp(1463, 117));
            IF_SETHIDE(true, comp(1463, 114));
            if ((varclient_2761 == 1)) {
                script8459(int0, 0);
            };
            if ((varclient_2762 == 1)) {
                script8467(int0, 0);
            };
        };
        return;
    };
    if ((int1 == 1)) {
        IF_SETHIDE(true, comp(1559, 96));
    } else {
        IF_SETHIDE(true, comp(1463, 176));
        IF_SETHIDE(true, comp(1463, 120));
        if ((varclient_2761 == 1)) {
            IF_SETHIDE(true, comp(1463, 117));
            IF_SETHIDE(false, comp(1463, 114));
        } else {
            IF_SETHIDE(false, comp(1463, 117));
            IF_SETHIDE(true, comp(1463, 114));
        };
    };
    switch (script7241(int12)) {
        case 1: {
            int21 = MAX(0, MIN(10000, SCALE((SCALE(int16, int20, 100) * 60), 100, int5)));
            int22 = MAX(0, MIN(10000, SCALE((SCALE(int16, int20, 100) * 70), 100, int5)));
            int23 = MAX(0, MIN(10000, SCALE((SCALE(int16, int20, 100) * 50), 100, int5)));
            int25 = (SCALE((100 + ((int17 - 4) * 25)), 100, script6680(2 as stat)) / 2);
            int27 = enum_getvalue(0, 0, 7338 as cs2enum, item_getparam(int12, 3267));
            int24 = SCALE((SCALE(item_getparam(int12, 641), 100, ((100 - 25) + SCALE(MIN(STAT(2 as stat), int27), int27, 25))) / 10), 100, 50);
            int26 = ((int14 - int24) - int25);
            break;
        }
        case 2: {
            int21 = MAX(0, MIN(10000, SCALE((SCALE(int16, int20, 100) * 50), 100, int6)));
            int22 = MAX(0, MIN(10000, SCALE((SCALE(int16, int20, 100) * 60), 100, int6)));
            int23 = MAX(0, MIN(10000, SCALE((SCALE(int16, int20, 100) * 70), 100, int6)));
            int25 = (SCALE((100 + ((MIN(int17, 6) - 4) * 25)), 100, script6680(4 as stat)) / 2);
            int27 = enum_getvalue(0, 0, 7338 as cs2enum, item_getparam(int12, 4));
            int28 = item_getparam(int13, 643);
            if ((item_getparam(int12, 1047) != 1)) {
                int28 = MIN(enum_getvalue(0, 0, 7443 as cs2enum, item_getparam(int12, 23)), int28);
            } else {
                int28 = MIN(enum_getvalue(0, 0, 7443 as cs2enum, item_getparam(int12, 750)), int28);
            };
            if (((int9 == 10) || (item_getparam(int12, 21) != OC_CATEGORY(int13)))) {
                int28 = 0;
            };
            int24 = SCALE(((item_getparam(int12, 643) + int28) / 10), 100, 50);
            int26 = ((int14 - int24) - int25);
            break;
        }
        case 3: {
            string1 = "Spell";
            if ((int18 != -1 as struct)) {
                string0 = enum_getvalue(0, 36, 6744 as cs2enum, struct_getparam(int18, 2873));
            } else {
                string0 = "-";
            };
            int21 = MAX(0, MIN(10000, SCALE((SCALE(int16, int20, 100) * 70), 100, int4)));
            int22 = MAX(0, MIN(10000, SCALE((SCALE(int16, int20, 100) * 50), 100, int4)));
            int23 = MAX(0, MIN(10000, SCALE((SCALE(int16, int20, 100) * 60), 100, int4)));
            if ((int18 != -1 as struct)) {
                int25 = (SCALE((100 + ((int17 - 4) * 25)), 100, script6680(6 as stat)) / 2);
                int27 = enum_getvalue(0, 0, 7338 as cs2enum, item_getparam(int12, 3));
                int29 = MAX(0, ((MIN(int27, struct_getparam(int18, 2879)) - struct_getparam(int18, 2807)) * struct_getparam(int18, 2878)));
                int24 = SCALE(((MIN(enum_getvalue(0, 0, 7443 as cs2enum, int27), struct_getparam(int18, 2877)) + int29) / 10), 100, 50);
            } else {
                int14 = 0;
            };
            int26 = ((int14 - int24) - int25);
            break;
        }
        case 11: {
            int21 = MAX(0, MIN(10000, SCALE((SCALE(int16, int20, 100) * 60), 100, int7)));
            int22 = MAX(0, MIN(10000, SCALE((SCALE(int16, int20, 100) * 60), 100, int7)));
            int23 = MAX(0, MIN(10000, SCALE((SCALE(int16, int20, 100) * 60), 100, int7)));
            int25 = (SCALE(script6680(28 as stat), 100, (100 + ((int17 - 4) * 25))) / 2);
            int27 = enum_getvalue(0, 0, 7338 as cs2enum, item_getparam(int12, 8879));
            int24 = (item_getparam(int12, 8881) / 10);
            int26 = ((int14 - int24) - int25);
            string2 = "N/A";
            break;
        }
        default: {
            int21 = MAX(0, MIN(10000, SCALE((SCALE(int16, int20, 100) * 60), 100, int5)));
            int22 = MAX(0, MIN(10000, SCALE((SCALE(int16, int20, 100) * 70), 100, int5)));
            int23 = MAX(0, MIN(10000, SCALE((SCALE(int16, int20, 100) * 50), 100, int5)));
            int25 = (SCALE((100 + ((int17 - 4) * 25)), 100, script6680(2 as stat)) / 2);
            int26 = ((int14 - int24) - int25);
            break;
        }
    };
    if ((varbitplayer_27168 == 1)) {
        int14 = (int14 / 10);
        int24 = (int24 / 10);
        int25 = (int25 / 10);
        int26 = (int26 / 10);
    };
    var string3 = "";
    if ((int1 == 1)) {
        IF_SETTEXT(inttostring(int14, 10), comp(1559, 63));
        IF_SETTEXT(inttostring(int16, 10), comp(1559, 68));
        IF_SETTEXT(string0, comp(1559, 73));
        IF_SETTEXT(string2, comp(1559, 77));
        string3 = `Weapon : <col=00FF00>${inttostring(script7244(int12), 10)}</col><br>Skill Bonus : <col=00FF00>${inttostring(int8, 10)}</col>`;
        if ((int15 > 0)) {
            string3 = `Weapon : <col=00FF00>${inttostring(script7244(int12), 10)}</col><br>Skill Bonus : <col=00FF00>${inttostring(int8, 10)}</col><br>Hybrid Nerf : <col=00FF00>-${inttostring(int15, 10)}</col>`;
        };
        IF_SETONMOUSEREPEAT(callback(script3876, string3, -2147483645, -2147483643), 102170690);
        IF_SETONMOUSELEAVE(callback(script8805), 102170690);
        string3 = `${string1} : <col=00FF00>${inttostring(int24, 10)}</col><br>Skill Bonus : <col=00FF00>${inttostring(int25, 10)}</col><br>Damage Bonus : <col=00FF00>${inttostring(int26, 10)}</col>`;
        IF_SETONMOUSEREPEAT(callback(script3876, string3, -2147483645, -2147483643), 102170685);
        IF_SETONMOUSELEAVE(callback(script8805), 102170685);
    } else {
        IF_SETTEXT(inttostring(int14, 10), comp(1463, 68));
        IF_SETTEXT(inttostring(int16, 10), comp(1463, 73));
        IF_SETTEXT(string0, comp(1463, 78));
        IF_SETTEXT(string2, comp(1463, 82));
        IF_SETTEXT(`${inttostring(SCALE(int21, 1000, 10), 10)}%`, comp(1463, 127));
        IF_SETTEXT(`${inttostring(SCALE(int22, 1000, 10), 10)}%`, comp(1463, 131));
        IF_SETTEXT(`${inttostring(SCALE(int23, 1000, 10), 10)}%`, comp(1463, 135));
        string3 = `Weapon : <col=00FF00>${inttostring(script7244(int12), 10)}</col><br>Skill Bonus : <col=00FF00>${inttostring(int8, 10)}</col>`;
        if ((int15 > 0)) {
            string3 = `Weapon : <col=00FF00>${inttostring(script7244(int12), 10)}</col><br>Skill Bonus : <col=00FF00>${inttostring(int8, 10)}</col><br>Hybrid Nerf : <col=00FF00>-${inttostring(int15, 10)}</col>`;
        };
        IF_SETONMOUSEREPEAT(callback(script3876, string3, -2147483645, -2147483643), 95879239);
        IF_SETONMOUSELEAVE(callback(script8805), 95879239);
        string3 = `${string1} : <col=00FF00>${inttostring(int24, 10)}</col><br>Skill Bonus : <col=00FF00>${inttostring(int25, 10)}</col><br>Damage Bonus : <col=00FF00>${inttostring(int26, 10)}</col>`;
        IF_SETONMOUSEREPEAT(callback(script3876, string3, -2147483645, -2147483643), 95879234);
        IF_SETONMOUSELEAVE(callback(script8805), 95879234);
    };
    return;
}