//
function script3276(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 100;
    var int9 = 25;
    var int10 = 25;
    var int11 = 50;
    var int12 = 25;
    var int13 = 25;
    var int14 = 50;
    var int15 = 25;
    var int16 = 25;
    var int17 = 50;
    var int18 = 100;
    var int19 = 50;
    var int20 = 25;
    var int21 = 150;
    var int22 = 25;
    var int23 = 100;
    var int24 = 25;
    var int25 = 100;
    var int26 = 25;
    var int27 = 50;
    var int28 = 25;
    var int29 = 50;
    var int30 = 25;
    var int31 = 25;
    var int32 = 25;
    var int33 = 150;
    var int34 = 100;
    var int35 = 200;
    var int36 = 100;
    varclient_1186 = 2000;
    varclient_1185 = MAX((varclient_1185 - 2), 0);
    IF_SETTRANS(varclient_1185, comp(933, 1));
    IF_SETTRANS(0, comp(933, 173));
    IF_SETTRANS(0, comp(933, 174));
    IF_SETTRANS(0, comp(933, 175));
    var int37 = 0;
    if ((varclient_1188 == 1)) {
        int37 = 5000;
    } else if ((varclient_1188 == 2)) {
        int37 = 35000;
    } else if ((varclient_1188 == 3)) {
        int37 = 85000;
    };
    var int38 = SCALE(varclient_1195, 10000, 1000);
    [int3, int4, int5] = script3273();
    var int39 = int5;
    var int40 = script3274();
    var int41 = 600;
    switch (varclient_1188) {
        case 3: {
            int41 = 600;
            break;
        }
        case 2: {
            int41 = 600;
            break;
        }
        default: {
            int41 = 600;
            break;
        }
    };
    var int42 = (10000 - (MIN(varbitplayer_2365, 4) * int41));
    if ((varbitplayer_24882 > 0)) {
        int42 = MIN(10000, (int42 + ((varbitplayer_24882 * 1) * 100)));
    };
    if (((script12953() == true) || (script14608(2899 as dbrow) == 1))) {
        int42 = 10000;
    };
    IF_SETHIDE(false, comp(933, 28));
    IF_SETHIDE(false, comp(933, 6));
    IF_SETHIDE(false, comp(933, 20));
    IF_SETHIDE(false, comp(933, 211));
    IF_SETTEXT(`Floor ${inttostring(varclient_1319, 10)}:`, comp(933, 211));
    IF_SETHIDE(false, comp(933, 102));
    IF_SETSIZE((IF_GETWIDTH(comp(933, 103)) + 5), (IF_GETHEIGHT(comp(933, 103)) + 5), 0, 0, comp(933, 103));
    SOUND_SYNTH(27367, 1, 0);
    IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(933, 103)) + 30)), comp(933, 103));
    IF_SETHIDE(false, comp(933, 212));
    IF_SETTEXT(inttostring(SCALE(((varclient_1237 + 5) / 10), 100, int8), 10), comp(933, 212));
    IF_SETHIDE(false, comp(933, 26));
    IF_SETTRANS((255 - ((int8 * 255) / 100)), comp(933, 26));
    IF_SETHIDE(false, comp(933, 22));
    IF_SETHIDE(false, comp(933, 223));
    IF_SETTEXT(`Level ${inttostring(varclient_8412, 10)}:`, comp(933, 223));
    IF_SETHIDE(false, comp(933, 100));
    IF_SETSIZE((IF_GETWIDTH(comp(933, 101)) + 5), (IF_GETHEIGHT(comp(933, 101)) + 5), 0, 0, comp(933, 101));
    IF_SETTRANS(255, comp(933, 101));
    IF_SETHIDE(false, comp(933, 224));
    IF_SETTEXT(inttostring(SCALE(((varclient_8411 + 5) / 10), 100, int8), 10), comp(933, 224));
    IF_SETHIDE(false, comp(933, 27));
    IF_SETTRANS((255 - ((int8 * 255) / 100)), comp(933, 27));
    IF_SETHIDE(false, comp(933, 24));
    IF_SETHIDE(false, comp(933, 235));
    IF_SETHIDE(false, comp(933, 98));
    IF_SETSIZE((IF_GETWIDTH(comp(933, 99)) + 5), (IF_GETHEIGHT(comp(933, 99)) + 5), 0, 0, comp(933, 99));
    IF_SETTRANS(0, comp(933, 99));
    IF_SETHIDE(false, comp(933, 236));
    IF_SETTEXT(inttostring(SCALE(((varclient_1239 + 5) / 10), 100, int8), 10), comp(933, 236));
    IF_SETHIDE(true, comp(933, 19));
    IF_SETHIDE(false, comp(933, 96));
    IF_SETTEXT(TOSTRING_LOCALISED(SCALE(((varclient_1239 + 5) / 10), 100, int8), 1), comp(933, 308));
    IF_SETTRANS(255, comp(933, 306));
    IF_SETHIDE(false, comp(933, 86));
    IF_SETHIDE(false, comp(933, 39));
    IF_SETHIDE(false, comp(933, 42));
    IF_SETHIDE(false, comp(933, 43));
    IF_SETHIDE(false, comp(933, 44));
    IF_SETHIDE(false, comp(933, 45));
    IF_SETHIDE(false, comp(933, 46));
    IF_SETHIDE(false, comp(933, 47));
    IF_SETHIDE(false, comp(933, 48));
    IF_SETHIDE(false, comp(933, 49));
    IF_SETHIDE(false, comp(933, 51));
    [int3, int4, int5] = script3273();
    if ((varclient_1188 == 1)) {
        IF_SETTRANS(0, comp(933, 44));
        IF_SETTEXT(`+${inttostring((5000 / 100), 10)}%`, comp(933, 51));
    } else if ((varclient_1188 == 2)) {
        IF_SETTRANS(0, comp(933, 45));
        IF_SETTEXT(`+${inttostring((35000 / 100), 10)}%`, comp(933, 51));
    } else if ((varclient_1188 == 3)) {
        IF_SETTRANS(0, comp(933, 46));
        IF_SETTEXT(`+${inttostring((85000 / 100), 10)}%`, comp(933, 51));
    };
    IF_SETHIDE(false, comp(933, 52));
    IF_SETHIDE(false, comp(933, 53));
    IF_SETHIDE(false, comp(933, 55));
    IF_SETSIZE(SCALE(SCALE(varclient_1195, 10000, 16384), 100, int8), 16384, 2, 2, comp(933, 256));
    int0 = (10000 + int37);
    int1 = ((10000 + int37) + int38);
    if ((int1 >= int0)) {
        IF_SETTEXT(`+${inttostring(((SCALE(int8, 100, (int1 - int0)) + 50) / 100), 10)}%`, comp(933, 55));
    } else {
        IF_SETTEXT(`${inttostring(((SCALE(int8, 100, (int1 - int0)) - 50) / 100), 10)}%`, comp(933, 55));
    };
    IF_SETTEXT(`${inttostring((((int0 + SCALE(int8, 100, (int1 - int0))) + 50) / 100), 10)}%`, comp(933, 95));
    IF_SETHIDE(false, comp(933, 56));
    IF_SETHIDE(false, comp(933, 57));
    IF_SETHIDE(false, comp(933, 58));
    IF_SETHIDE(false, comp(933, 59));
    IF_SETHIDE(false, comp(933, 60));
    IF_SETTRANS((255 - ((int8 * 255) / 100)), comp(933, 58));
    IF_SETTRANS((255 - ((int8 * 255) / 100)), comp(933, 59));
    [int3, int4, int5] = script3273();
    IF_SETTEXT(`${inttostring(int3, 10)} : ${inttostring(int4, 10)}`, comp(933, 57));
    int0 = ((10000 + int37) + int38);
    int1 = (((10000 + int37) + int38) + int39);
    if ((int1 >= int0)) {
        IF_SETTEXT(`+${inttostring(((SCALE(int8, 100, (int1 - int0)) + 50) / 100), 10)}%`, comp(933, 60));
    } else {
        IF_SETTEXT(`${inttostring(((SCALE(int8, 100, (int1 - int0)) - 50) / 100), 10)}%`, comp(933, 60));
    };
    IF_SETHIDE(false, comp(933, 61));
    IF_SETHIDE(false, comp(933, 62));
    int0 = (((10000 + int37) + int38) + int39);
    int1 = ((((10000 + int37) + int38) + int39) + varclient_1236);
    if ((int1 >= int0)) {
        IF_SETTEXT(`+${inttostring(((SCALE(int8, 100, (int1 - int0)) + 50) / 100), 10)}%`, comp(933, 62));
    } else {
        IF_SETTEXT(`${inttostring(((SCALE(int8, 100, (int1 - int0)) - 50) / 100), 10)}%`, comp(933, 62));
    };
    IF_SETHIDE(false, comp(933, 68));
    IF_SETHIDE(false, comp(933, 69));
    var int43 = ((varbitplayer_24886 * 10) * 100);
    int0 = ((((10000 + int37) + int38) + int39) + varclient_1236);
    int1 = (((((10000 + int37) + int38) + int39) + varclient_1236) + int43);
    IF_SETTEXT(`+${inttostring((varbitplayer_24886 * 10), 10)}%`, comp(933, 69));
    IF_SETHIDE(false, comp(933, 63));
    IF_SETHIDE(false, comp(933, 64));
    IF_SETHIDE(false, comp(933, 65));
    IF_SETHIDE(false, comp(933, 66));
    IF_SETHIDE(false, comp(933, 67));
    IF_SETTRANS((255 - ((int8 * 255) / 100)), comp(933, 65));
    IF_SETTRANS((255 - ((int8 * 255) / 100)), comp(933, 66));
    if ((varclient_1320 == 2)) {
        IF_SETTEXT("High", comp(933, 64));
    } else {
        IF_SETTEXT("Low", comp(933, 64));
    };
    int0 = (((((10000 + int37) + int38) + int39) + varclient_1236) + int43);
    int1 = SCALE((((((10000 + int37) + int38) + int39) + varclient_1236) + int43), 10000, int40);
    if ((int1 >= int0)) {
        IF_SETTEXT(`+${inttostring(((SCALE(int8, 100, (int1 - int0)) + 50) / 100), 10)}%`, comp(933, 67));
    } else {
        IF_SETTEXT(`${inttostring(((int40 - 10000) / 100), 10)}%`, comp(933, 67));
    };
    IF_SETHIDE(false, comp(933, 70));
    IF_SETHIDE(false, comp(933, 71));
    IF_SETHIDE(false, comp(933, 85));
    if ((varbitplayer_2365 != 0)) {
        switch (varbitplayer_2365) {
            case 1: {
                IF_SETHIDE(false, comp(933, 81));
                stack(2849);
                stack(61145169);
                IF_SETGRAPHIC();
                break;
            }
            case 2: {
                IF_SETHIDE(false, comp(933, 81));
                IF_SETHIDE(false, comp(933, 82));
                stack(2850);
                stack(61145169);
                IF_SETGRAPHIC();
                stack(2849);
                stack(61145170);
                IF_SETGRAPHIC();
                break;
            }
            case 3: {
                IF_SETHIDE(false, comp(933, 81));
                IF_SETHIDE(false, comp(933, 82));
                IF_SETHIDE(false, comp(933, 83));
                stack(2850);
                stack(61145170);
                IF_SETGRAPHIC();
                stack(2849);
                stack(61145171);
                IF_SETGRAPHIC();
                break;
            }
            case 4: {
                IF_SETHIDE(false, comp(933, 81));
                IF_SETHIDE(false, comp(933, 82));
                IF_SETHIDE(false, comp(933, 83));
                IF_SETHIDE(false, comp(933, 84));
                stack(2850);
                stack(61145171);
                IF_SETGRAPHIC();
                stack(2849);
                stack(61145172);
                IF_SETGRAPHIC();
                break;
            }
            case 5: {
                IF_SETHIDE(false, comp(933, 81));
                IF_SETHIDE(false, comp(933, 82));
                IF_SETHIDE(false, comp(933, 83));
                IF_SETHIDE(false, comp(933, 84));
                stack(2850);
                stack(61145172);
                IF_SETGRAPHIC();
                break;
            }
        };
    } else {
        IF_SETTEXT("No deaths.", comp(933, 85));
        varclient_1186 = (varclient_1186 + 2);
    };
    int0 = SCALE((((((10000 + int37) + int38) + int39) + varclient_1236) + int43), 10000, int40);
    int1 = SCALE(SCALE((((((10000 + int37) + int38) + int39) + varclient_1236) + int43), 10000, int40), 10000, int42);
    if ((int1 >= int0)) {
        IF_SETTEXT(`+${inttostring(((SCALE(int8, 100, (int1 - int0)) + 50) / 100), 10)}%`, comp(933, 85));
    } else {
        IF_SETTEXT(`${inttostring(((int42 - 10000) / 100), 10)}%`, comp(933, 85));
    };
    IF_SETHIDE(true, comp(933, 42));
    if ((varclient_1321 > 0)) {
        IF_SETHIDE(false, comp(933, 88));
        IF_SETTEXT(`Unbalanced party penalty: x${inttostring((((10000 - varclient_1321) + 50) / 100), 10)}%`, comp(933, 268));
    };
    int0 = SCALE(SCALE((((((10000 + int37) + int38) + int39) + varclient_1236) + int43), 10000, int40), 10000, int42);
    int1 = SCALE(SCALE(SCALE((((((10000 + int37) + int38) + int39) + varclient_1236) + int43), 10000, int40), 10000, int42), 10000, (10000 - varclient_1321));
    IF_SETTEXT(`${inttostring((((int0 + SCALE(int8, 100, (int1 - int0))) + 50) / 100), 10)}%`, comp(933, 95));
    var int44 = (8192 + (((int1 - 10000) * 8192) / 60000));
    int44 = (8192 - (((int44 - 8192) * (83 - int8)) / 83));
    IF_SETSIZE(int44, 16384, 2, 2, comp(933, 276));
    script949(false);
    IF_SETTEXT(TOSTRING_LOCALISED(varclient_1239, 1), comp(933, 308));
    int0 = varclient_1239;
    int1 = SCALE(SCALE(SCALE(SCALE((((((10000 + int37) + int38) + int39) + varclient_1236) + int43), 10000, int40), 10000, int42), 10000, (10000 - varclient_1321)), 10000, varclient_1239);
    if (((MODULO(int8, 5) == 0) && (IF_GETY(comp(933, 88)) != 138))) {
        IF_SETPOSITION(IF_GETX(comp(933, 88)), (IF_GETY(comp(933, 88)) + 1), 0, 0, comp(933, 88));
    };
    IF_SETSIZE(183, SCALE(80, 100, int8), 0, 0, comp(933, 294));
    IF_SETTEXT(`${TOSTRING_LOCALISED((((int0 + SCALE(int8, 100, (int1 - int0))) + 5) / 10), 1)}%`, comp(933, 308));
    int0 = varclient_1239;
    int1 = SCALE(SCALE(SCALE(SCALE((((((10000 + int37) + int38) + int39) + varclient_1236) + int43), 10000, int40), 10000, int42), 10000, (10000 - varclient_1321)), 10000, varclient_1239);
    var int45 = ((((int0 + SCALE(int8, 100, (int1 - int0))) + 5) / 100) * 2);
    if ((varclient_6516 == true)) {
        if (((2147483647 - int45) >= 0)) {
            int45 = (int45 * 2);
        } else {
            int45 = 2147483647;
        };
    };
    if ((varplayer_1097 < 2000000000)) {
        IF_SETTEXT(`${TOSTRING_LOCALISED(int45, 1)}%`, comp(933, 310));
    } else {
        IF_SETTEXT("Max tokens", comp(933, 310));
    };
    IF_SETHIDE(true, comp(933, 98));
    IF_SETHIDE(true, comp(933, 100));
    IF_SETHIDE(true, comp(933, 102));
    return;
}