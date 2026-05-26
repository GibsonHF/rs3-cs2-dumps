//
function script2022(): void {
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var string4 = "";
    var string5 = "";
    var int0 = 0;
    if ((script7293(varbitplayer_17132) == 0)) {
        script4542(0, 62259324, 62259329);
        script4542(0, 62259338, 62259343);
        script4542(0, 62259352, 62259357);
    } else {
        script4542(varbitplayer_17126, 62259324, 62259329);
        script4542(varbitplayer_17127, 62259338, 62259343);
        script4542(varbitplayer_17128, 62259352, 62259357);
        string0 = inttostring(varplayer_3408, 10);
        string2 = inttostring(varplayer_3409, 10);
        string4 = inttostring(varplayer_3410, 10);
        int0 = MIN(MIN(varbitplayer_17126, varbitplayer_17127), varbitplayer_17128);
    };
    if ((varplayer_3411 > 0)) {
        string1 = inttostring(varplayer_3411, 10);
    };
    if ((varplayer_3412 > 0)) {
        string3 = inttostring(varplayer_3412, 10);
    };
    if ((varplayer_3413 > 0)) {
        string5 = inttostring(varplayer_3413, 10);
    };
    IF_SETTEXT(string0, 62259318);
    IF_SETTEXT(string1, 62259330);
    IF_SETTEXT(string2, 62259332);
    IF_SETTEXT(string3, 62259344);
    IF_SETTEXT(string4, 62259346);
    IF_SETTEXT(string5, 62259358);
    var int1 = SCALE(10, 6, (int0 - 5));
    var int2 = SCALE(200, 100, int1);
    var int3 = (200 - int2);
    var int4 = 20;
    IF_SETTEXT(`${inttostring(int0, 10)}%`, 62259360);
    IF_SETCOLOUR(script693(int3, int2, int4), 62259360);
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
        if ((script1121(varbitplayer_17132) == 1)) {
            IF_SETHIDE(0, 62259395);
            IF_SETTEXT("Your captain already has four traits and cannot gain any more.", 62259395);
            IF_SETHIDE(1, 62259396);
        } else if ((int0 < 35)) {
            IF_SETHIDE(0, 62259395);
            IF_SETTEXT("Warning: Your chances of success are low. You risk harsher penalties if the voyage fails.", 62259395);
            IF_SETHIDE(1, 62259396);
        } else {
            IF_SETHIDE(1, 62259395);
            IF_SETHIDE(0, 62259396);
        };
    } else if (((int6 != -1 as struct) && (struct_getparam(int6, 2366) == 5))) {
        if ((script3730() == 0)) {
            IF_SETHIDE(0, 62259395);
            IF_SETTEXT("Warning: The Scroll you have focused on is complete. Please view your Port Management page to change the scroll.", 62259395);
            IF_SETHIDE(1, 62259396);
        } else if ((int0 < 35)) {
            IF_SETHIDE(0, 62259395);
            IF_SETTEXT("Warning: Your chances of success are low. You risk harsher penalties if the voyage fails.", 62259395);
            IF_SETHIDE(1, 62259396);
        } else {
            IF_SETHIDE(1, 62259395);
            IF_SETHIDE(0, 62259396);
        };
    } else if ((int0 < 35)) {
        IF_SETHIDE(0, 62259395);
        IF_SETTEXT("Warning: Your chances of success are low. You risk harsher penalties if the voyage fails.", 62259395);
        IF_SETHIDE(1, 62259396);
    } else {
        IF_SETHIDE(1, 62259395);
        IF_SETHIDE(0, 62259396);
    };
    return;
}