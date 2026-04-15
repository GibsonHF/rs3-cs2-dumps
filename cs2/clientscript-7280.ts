//
function script7280(): void {
    script4542(varbitplayer_17126, comp(916, 50), comp(916, 55));
    var string0 = `${inttostring(varplayer_3408, 10)} / ${inttostring(varplayer_3411, 10)}`;
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), 60031021);
    script4542(varbitplayer_17127, 60031038, 60031043);
    var string1 = `${inttostring(varplayer_3409, 10)} / ${inttostring(varplayer_3412, 10)}`;
    IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -1), 60031033);
    script4542(varbitplayer_17128, 60031050, 60031055);
    var string2 = `${inttostring(varplayer_3410, 10)} / ${inttostring(varplayer_3413, 10)}`;
    IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -1), 60031045);
    var int0 = MIN(MIN(varbitplayer_17126, varbitplayer_17127), varbitplayer_17128);
    var int1 = SCALE(10, 6, (int0 - 5));
    var int2 = SCALE(200, 100, int1);
    var int3 = (200 - int2);
    var int4 = 20;
    IF_SETTEXT(`${inttostring(int0, 10)}%`, 60031057);
    IF_SETCOLOUR(script693(int3, int2, int4), 60031057);
    var int5 = 0;
    if ((varbitplayer_17129 == 1)) {
        switch (varbitplayer_17130) {
            case 1: {
                int5 = varbitplayer_17118;
                break;
            }
            case 2: {
                int5 = varbitplayer_17119;
                break;
            }
            case 3: {
                int5 = varbitplayer_17120;
                break;
            }
        };
    } else {
        switch (varbitplayer_17130) {
            case 1: {
                int5 = varbitplayer_17115;
                break;
            }
            case 2: {
                int5 = varbitplayer_17116;
                break;
            }
            case 3: {
                int5 = varbitplayer_17117;
                break;
            }
        };
    };
    var int6 = enum_getvalue(0, 73, 1022 as cs2enum, int5);
    if (((int6 != -1 as struct) && (struct_getparam(int6, 2366) == 7))) {
        if ((script1121(varplayer_3390) == 1)) {
            IF_SETHIDE(false, comp(916, 339));
            IF_SETTEXT("Your captain already has four traits and cannot gain any more.", comp(916, 339));
            IF_SETHIDE(true, comp(916, 340));
        } else if ((int0 < 35)) {
            IF_SETHIDE(false, comp(916, 339));
            IF_SETTEXT("Warning: Your chances of success are low. You risk harsher penalties if the voyage fails.", comp(950, 195));
            IF_SETHIDE(true, comp(916, 340));
        } else {
            IF_SETHIDE(true, comp(916, 339));
            IF_SETHIDE(false, comp(916, 340));
        };
    } else if (((int6 != -1 as struct) && (struct_getparam(int6, 2366) == 5))) {
        if ((script3730() == 0)) {
            IF_SETHIDE(false, comp(916, 339));
            IF_SETTEXT("Warning: The Scroll you have focused on is complete. Please view your Port Management page to change the scroll.", comp(916, 339));
            IF_SETHIDE(true, comp(916, 340));
        } else if ((int0 < 35)) {
            IF_SETHIDE(false, comp(916, 339));
            IF_SETTEXT("Warning: Your chances of success are low. You risk harsher penalties if the voyage fails.", comp(916, 339));
            IF_SETHIDE(true, comp(916, 340));
        } else {
            IF_SETHIDE(true, comp(916, 339));
            IF_SETHIDE(false, comp(916, 340));
        };
    } else if ((int0 < 35)) {
        IF_SETHIDE(false, comp(916, 339));
        IF_SETTEXT("Warning: Your chances of success are low. You risk harsher penalties if the voyage fails.", comp(950, 195));
        IF_SETHIDE(true, comp(916, 340));
    } else {
        IF_SETHIDE(true, comp(916, 339));
        IF_SETHIDE(false, comp(916, 340));
    };
    if ((script7294(varplayer_3390) == -1)) {
        IF_SETHIDE(true, comp(916, 84));
        IF_SETHIDE(false, comp(916, 85));
    } else {
        IF_SETHIDE(false, comp(916, 84));
        IF_SETHIDE(true, comp(916, 85));
    };
    script7282();
    return;
}