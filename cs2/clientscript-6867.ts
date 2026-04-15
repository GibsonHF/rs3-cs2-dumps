//
function script6867(int0: int, int1: int): int {
    var int2 = struct_getparam(enum_getvalue(0, 73, 6570 as cs2enum, int1), 2770);
    var int3 = struct_getparam(enum_getvalue(0, 73, 6570 as cs2enum, int1), 2769);
    var string0 = struct_getparam(enum_getvalue(0, 73, 6570 as cs2enum, int1), 2760);
    var string1 = struct_getparam(enum_getvalue(0, 73, 6570 as cs2enum, int1), 2761);
    var string2 = `Level ${inttostring(int3, 10)} Prayer`;
    var string3 = "You have already helped Father Joakim with these celebrations, so you will receive no additional rewards.";
    var int4 = 0;
    var int5 = -1 as graphic;
    if ((STAT_BASE(5 as stat) >= int3)) {
        int4 = 1;
    };
    if ((int2 > 1)) {
        string2 = strconcat(string2, `<br>Level ${inttostring(int2, 10)} combat.`);
        if ((COMLEVEL_ACTIVE() < int2)) {
            int4 = 0;
        };
    };
    var int6 = struct_getparam(enum_getvalue(0, 73, 6570 as cs2enum, int1), 2771);
    var int7 = -1 as quest;
    if ((int6 != -1)) {
        int7 = enum_getvalue(0, 3, 2252 as cs2enum, int6);
        if ((int7 != -1 as quest)) {
            if ((script2156(int7) == false)) {
                int4 = 0;
            };
            string2 = strconcat(string2, `<br>${script2103(int7)}.`);
        };
    };
    var int8 = PARAHEIGHT(string0, 120, 66 as fontmetrics);
    if ((int8 < PARAHEIGHT(string1, 190, 66 as fontmetrics))) {
        int8 = PARAHEIGHT(string1, 190, 66 as fontmetrics);
    };
    if ((int8 < PARAHEIGHT(string2, 130, 66 as fontmetrics))) {
        int8 = PARAHEIGHT(string2, 130, 66 as fontmetrics);
    };
    int8 = (int8 * 12);
    if ((int0 > 0)) {
        int8 = (int8 + 4);
    };
    CC_CREATE(comp(1360, 0), 4, int0);
    CC_SETTEXTFONT(66 as fontmetrics);
    CC_SETTEXTSHADOW(true);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETMAXLINES(0);
    if ((int4 == 1)) {
        CC_SETTEXT(string0);
    } else {
        CC_SETTEXT("Unknown");
    };
    CC_SETONMOUSEOVER(callback(script6870, int0, int4));
    CC_SETONMOUSELEAVE(callback(script6872, int0, int4));
    CC_SETSIZE(120, int8, 0, 0);
    if ((int4 == 1)) {
        CC_SETCOLOUR(16777215);
    } else {
        CC_SETCOLOUR(16711680);
    };
    var int0 = (int0 + 1);
    CC_CREATE(comp(1360, 0), 4, int0);
    CC_SETTEXTFONT(66 as fontmetrics);
    CC_SETTEXTSHADOW(true);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETMAXLINES(0);
    CC_SETTEXT(string1);
    CC_SETONMOUSEOVER(callback(script6870, (int0 - 1), int4));
    CC_SETONMOUSELEAVE(callback(script6872, (int0 - 1), int4));
    CC_SETSIZE(190, int8, 0, 0);
    if ((int4 == 1)) {
        CC_SETCOLOUR(16777215);
    } else {
        CC_SETCOLOUR(16711680);
    };
    int0 = (int0 + 1);
    CC_CREATE(comp(1360, 0), 4, int0);
    CC_SETTEXTFONT(66 as fontmetrics);
    CC_SETTEXTSHADOW(true);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETMAXLINES(0);
    CC_SETTEXT(string2);
    CC_SETONMOUSEOVER(callback(script6870, (int0 - 2), int4));
    CC_SETONMOUSELEAVE(callback(script6872, (int0 - 2), int4));
    CC_SETSIZE(130, int8, 0, 0);
    if ((int4 == 1)) {
        CC_SETCOLOUR(16777215);
    } else {
        CC_SETCOLOUR(16711680);
    };
    int0 = (int0 + 1);
    CC_CREATE(comp(1360, 0), 5, int0);
    switch (((int0 / 4) + 1)) {
        case 1: {
            if ((varbitplayer_14342 == 1)) {
                int5 = 13165 as graphic;
            } else {
                string3 = "You have not yet helped Father Joakim with these celebrations.";
            };
            break;
        }
        case 2: {
            if ((varbitplayer_14343 == 1)) {
                int5 = 13165 as graphic;
            } else {
                string3 = "You have not yet helped Father Joakim with these celebrations.";
            };
            break;
        }
        case 3: {
            if ((varbitplayer_14344 == 1)) {
                int5 = 13165 as graphic;
            } else {
                string3 = "You have not yet helped Father Joakim with these celebrations.";
            };
            break;
        }
        case 4: {
            if ((varbitplayer_14345 == 1)) {
                int5 = 13165 as graphic;
            } else {
                string3 = "You have not yet helped Father Joakim with these celebrations.";
            };
            break;
        }
        case 5: {
            if ((varbitplayer_14346 == 1)) {
                int5 = 13165 as graphic;
            } else {
                string3 = "You have not yet helped Father Joakim with these celebrations.";
            };
            break;
        }
        default: {
            int5 = 13166 as graphic;
            break;
        }
    };
    if ((int5 != -1 as graphic)) {
        CC_SETGRAPHIC(int5);
        CC_SETONMOUSEREPEAT(callback(script6869, int0, int4, string3));
        CC_SETONMOUSELEAVE(callback(script6872, (int0 - 3), int4));
    } else {
        CC_SETONMOUSEOVER(callback(script6870, (int0 - 3), int4));
        CC_SETONMOUSELEAVE(callback(script6872, (int0 - 3), int4));
    };
    CC_SETSIZE(15, 15, 0, 0);
    return (int0 + 1);
}