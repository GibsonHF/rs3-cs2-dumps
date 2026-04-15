//
function script8876(int0: int, int1: int, string0: string): void {
    var int2 = 0;
    var int3 = 0;
    [int3, int2] = unk11078(3);
    switch (unk11077()) {
        case 30823: {
            int3 = varplayer_12531;
            break;
        }
    };
    if (((int3 <= 0) || (npc_getparam(unk11077(), 5715) == 1))) {
        script8880();
        return;
    };
    if ((varbitplayer_27168 == 1)) {
        int2 = MAX(1, (int2 / 10));
        int3 = MAX(1, (int3 / 10));
    };
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    [int4, int5, int6] = script8878();
    if ((int4 == -1)) {
        script8880();
        return;
    };
    var string1 = string0;
    var int7 = unk11126();
    var int8 = STRING_INDEXOF_STRING(string0, "(", 0);
    if ((int8 >= 0)) {
        string1 = SUBSTRING(string0, 0, int8);
    };
    IF_SETHIDE(true, comp(1489, 8));
    IF_SETTEXT(string1, comp(1489, 13));
    IF_SETSIZE((STRINGWIDTH(string1, IF_GETFONTMETRICS(comp(1489, 13))) + 5), 17, 0, 0, comp(1489, 13));
    var int9 = 0;
    if ((int7 > 0)) {
        IF_SETTEXT(inttostring(int7, 10), comp(1489, 1));
        int9 = (COMLEVEL_ACTIVE() - int7);
    } else {
        IF_SETTEXT("", comp(1489, 1));
    };
    if ((int9 >= 0)) {
        IF_SETCOLOUR(script693((255 - SCALE(int9, COMLEVEL_ACTIVE(), 255)), 255, 0), comp(1489, 1));
    } else {
        IF_SETCOLOUR(script693(255, (255 + MAX(SCALE(int9, MAX(int7, 200), 255), -255)), 0), comp(1489, 1));
    };
    var int10 = 9286;
    var string2 = "Weakness : ";
    switch (int0) {
        case 1: {
            int10 = 14364;
            string2 = strconcat(string2, "Air Spells");
            break;
        }
        case 2: {
            int10 = 14365;
            string2 = strconcat(string2, "Water Spells");
            break;
        }
        case 3: {
            int10 = 14366;
            string2 = strconcat(string2, "Earth Spells");
            break;
        }
        case 4: {
            int10 = 14367;
            string2 = strconcat(string2, "Fire Spells");
            break;
        }
        case 5: {
            int10 = 240;
            string2 = strconcat(string2, "Stab");
            break;
        }
        case 6: {
            int10 = 234;
            string2 = strconcat(string2, "Slash");
            break;
        }
        case 7: {
            int10 = 256;
            string2 = strconcat(string2, "Crush");
            break;
        }
        case 8: {
            int10 = 14405;
            string2 = strconcat(string2, "Arrows");
            break;
        }
        case 9: {
            int10 = 14370;
            string2 = strconcat(string2, "Bolts");
            break;
        }
        case 10: {
            int10 = 251;
            string2 = strconcat(string2, "Thrown");
            break;
        }
        case 37: {
            int10 = 30934;
            string2 = strconcat(string2, "Necromancy");
            break;
        }
        case 21: {
            switch (int1) {
                case 3: {
                    int10 = 200;
                    string2 = strconcat(string2, "Ranged");
                    break;
                }
                case 1: {
                    int10 = 202;
                    string2 = strconcat(string2, "Magic");
                    break;
                }
                case 2: {
                    int10 = 197;
                    string2 = strconcat(string2, "Melee");
                    break;
                }
            };
            break;
        }
        default: {
            int10 = 9286;
            string2 = strconcat(string2, "None");
            break;
        }
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 97583122);
    stack(int10);
    stack(97583122);
    IF_SETGRAPHIC();
    var int11 = 5;
    var int12 = ((IF_GETX(97583117) + IF_GETWIDTH(97583117)) + int11);
    IF_SETPOSITION(int12, IF_GETY(97583118), 0, 0, 97583118);
    var int13 = ((IF_GETX(97583118) + IF_GETWIDTH(97583118)) + int11);
    IF_SETPOSITION(int13, IF_GETY(97583119), 0, 0, 97583119);
    var int14 = (IF_GETX(97583119) + IF_GETWIDTH(97583119));
    var int15 = MAX(int14, IF_GETWIDTH(97583120));
    if ((int15 > int14)) {
        IF_SETPOSITION(0, IF_GETY(comp(1489, 15)), 2, 0, comp(1489, 15));
    };
    var int16 = 0;
    var int17 = 0;
    int2 = MAX(1, int2);
    int17 = SCALE(int3, int2, 100);
    int17 = MIN(100, int17);
    int17 = MAX(0, int17);
    int16 = ((int17 * 16384) / 100);
    IF_SETSIZE(int16, IF_GETHEIGHT(comp(1489, 19)), 2, 0, comp(1489, 2));
    if ((npc_getparam(unk11077(), 4473) == 1)) {
        IF_SETTEXT("", comp(1489, 20));
    } else {
        IF_SETTEXT(TOSTRING_LOCALISED(int3, 1), comp(1489, 20));
    };
    var int18 = ((int5 + IF_GETY(comp(1489, 16))) + IF_GETHEIGHT(comp(1489, 16)));
    IF_SETSIZE(int14, int18, 0, 0, comp(1488, 3));
    var int19 = (int4 - (int14 / 2));
    var int20 = int6;
    int19 = MAX(MIN(int19, (IF_GETWIDTH(comp(1488, 0)) - int14)), 0);
    int20 = MAX(MIN(int20, (IF_GETHEIGHT(comp(1488, 0)) - int18)), 0);
    IF_SETPOSITION(int19, int20, 0, 0, comp(1488, 3));
    IF_SETHIDE(false, comp(1489, 3));
    return;
}