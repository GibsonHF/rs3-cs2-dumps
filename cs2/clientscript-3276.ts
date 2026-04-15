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
    IF_SETTRANS(0, comp(933, 300));
    IF_SETTRANS(0, comp(933, 301));
    IF_SETTRANS(0, comp(933, 302));
    var int37 = 0;
    if ((varclient_1188 == 2)) {
        int37 = 792;
    } else if ((varclient_1188 == 3)) {
        int37 = 1583;
    };
    var int38 = SCALE(varclient_1195, 10000, 1267);
    [int3, int4, int5] = script3273();
    var int39 = int5;
    var int40 = script3274();
    var int41 = (10000 - (MIN(varbitplayer_2365, 6) * 1000));
    if (((script12953() == true) || (script14608(2899 as dbrow) == 1))) {
        int41 = 10000;
    };
    IF_SETHIDE(false, comp(933, 63));
    IF_SETHIDE(false, comp(933, 6));
    IF_SETHIDE(false, comp(933, 19));
    IF_SETHIDE(false, comp(933, 31));
    if ((varclient_1187 < varclient_1319)) {
        IF_SETTEXT(`Floor ${inttostring(varclient_1187, 10)}:`, comp(933, 31));
        IF_SETCOLOUR(10485760, comp(933, 31));
    } else {
        IF_SETTEXT(`Floor ${inttostring(varclient_1319, 10)}:`, comp(933, 31));
    };
    IF_SETHIDE(false, comp(933, 229));
    IF_SETSIZE((IF_GETWIDTH(comp(933, 230)) + 5), (IF_GETHEIGHT(comp(933, 230)) + 5), 0, 0, comp(933, 230));
    SOUND_SYNTH(27367, 1, 0);
    IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(933, 230)) + 30)), comp(933, 230));
    IF_SETHIDE(false, comp(933, 32));
    IF_SETTEXT(inttostring(SCALE(((varclient_1237 + 5) / 10), 100, int8), 10), comp(933, 32));
    IF_SETHIDE(false, comp(933, 61));
    IF_SETTRANS((255 - ((int8 * 255) / 100)), comp(933, 61));
    IF_SETHIDE(false, comp(933, 33));
    IF_SETHIDE(false, comp(933, 45));
    if ((MAP_MEMBERS() == 1)) {
        IF_SETTEXT(`Prestige ${inttostring(MIN(60, MAX(varbitplayer_2361, varbitplayer_2362)), 10)}`, comp(933, 45));
    } else {
        IF_SETTEXT(`Prestige ${inttostring(MIN(35, MAX(varbitplayer_2361, varbitplayer_2362)), 10)}`, comp(933, 45));
    };
    IF_SETHIDE(false, comp(933, 227));
    IF_SETSIZE((IF_GETWIDTH(comp(933, 228)) + 5), (IF_GETHEIGHT(comp(933, 228)) + 5), 0, 0, comp(933, 228));
    IF_SETTRANS(255, comp(933, 228));
    IF_SETHIDE(false, comp(933, 46));
    IF_SETTEXT(inttostring(SCALE(((varclient_1238 + 5) / 10), 100, int8), 10), comp(933, 46));
    IF_SETHIDE(false, comp(933, 62));
    IF_SETTRANS((255 - ((int8 * 255) / 100)), comp(933, 62));
    IF_SETHIDE(false, comp(933, 47));
    IF_SETHIDE(false, comp(933, 59));
    IF_SETHIDE(false, comp(933, 225));
    IF_SETSIZE((IF_GETWIDTH(comp(933, 226)) + 5), (IF_GETHEIGHT(comp(933, 226)) + 5), 0, 0, comp(933, 226));
    IF_SETTRANS(0, comp(933, 226));
    IF_SETHIDE(false, comp(933, 60));
    IF_SETTEXT(inttostring(SCALE(((varclient_1239 + 5) / 10), 100, int8), 10), comp(933, 60));
    IF_SETHIDE(true, comp(933, 18));
    IF_SETHIDE(false, comp(933, 208));
    IF_SETTEXT(inttostring(SCALE(((varclient_1239 + 5) / 10), 100, int8), 10), comp(933, 222));
    IF_SETTRANS(255, comp(933, 220));
    IF_SETHIDE(false, comp(933, 154));
    IF_SETHIDE(false, comp(933, 74));
    IF_SETHIDE(false, comp(933, 86));
    IF_SETHIDE(false, comp(933, 87));
    IF_SETHIDE(false, comp(933, 139));
    IF_SETHIDE(false, comp(933, 140));
    IF_SETHIDE(false, comp(933, 141));
    IF_SETHIDE(false, comp(933, 142));
    IF_SETHIDE(false, comp(933, 143));
    IF_SETHIDE(false, comp(933, 144));
    IF_SETHIDE(false, comp(933, 145));
    [int3, int4, int5] = script3273();
    if ((varclient_1188 <= 1)) {
        IF_SETTRANS(0, comp(933, 139));
        IF_SETTEXT("+0%", comp(933, 145));
    } else if ((varclient_1188 == 2)) {
        IF_SETTRANS(0, comp(933, 140));
        IF_SETTEXT(`+${inttostring((792 / 100), 10)}%`, comp(933, 145));
    } else if ((varclient_1188 > 2)) {
        IF_SETTRANS(0, comp(933, 141));
        IF_SETTEXT(`+${inttostring((1583 / 100), 10)}%`, comp(933, 145));
    };
    IF_SETHIDE(false, comp(933, 88));
    IF_SETHIDE(false, comp(933, 97));
    IF_SETHIDE(false, comp(933, 146));
    IF_SETSIZE(SCALE(SCALE(varclient_1195, 10000, 16384), 100, int8), 16384, 2, 2, comp(933, 108));
    int0 = (10000 + int37);
    int1 = ((10000 + int37) + int38);
    if ((int1 >= int0)) {
        IF_SETTEXT(`+${inttostring(((SCALE(int8, 100, (int1 - int0)) + 50) / 100), 10)}%`, comp(933, 146));
    } else {
        IF_SETTEXT(`${inttostring(((SCALE(int8, 100, (int1 - int0)) - 50) / 100), 10)}%`, comp(933, 146));
    };
    IF_SETTEXT(`${inttostring((((int0 + SCALE(int8, 100, (int1 - int0))) + 50) / 100), 10)}%`, comp(933, 204));
    IF_SETSIZE(SCALE(8192, 100, (((int0 + SCALE(int8, 100, (int1 - int0))) + 50) / 100)), 16384, 2, 2, comp(933, 187));
    IF_SETHIDE(false, comp(933, 89));
    IF_SETHIDE(false, comp(933, 90));
    IF_SETHIDE(false, comp(933, 149));
    IF_SETHIDE(false, comp(933, 151));
    IF_SETHIDE(false, comp(933, 92));
    IF_SETTRANS((255 - ((int8 * 255) / 100)), comp(933, 149));
    IF_SETTRANS((255 - ((int8 * 255) / 100)), comp(933, 151));
    [int3, int4, int5] = script3273();
    IF_SETTEXT(`${inttostring(int3, 10)} : ${inttostring(int4, 10)}`, comp(933, 90));
    int0 = ((10000 + int37) + int38);
    int1 = (((10000 + int37) + int38) + int39);
    if ((int1 >= int0)) {
        IF_SETTEXT(`+${inttostring(((SCALE(int8, 100, (int1 - int0)) + 50) / 100), 10)}%`, comp(933, 92));
    } else {
        IF_SETTEXT(`${inttostring(((SCALE(int8, 100, (int1 - int0)) - 50) / 100), 10)}%`, comp(933, 92));
    };
    IF_SETHIDE(false, comp(933, 94));
    IF_SETHIDE(false, comp(933, 147));
    int0 = (((10000 + int37) + int38) + int39);
    int1 = ((((10000 + int37) + int38) + int39) + varclient_1236);
    if ((int1 >= int0)) {
        IF_SETTEXT(`+${inttostring(((SCALE(int8, 100, (int1 - int0)) + 50) / 100), 10)}%`, comp(933, 147));
    } else {
        IF_SETTEXT(`${inttostring(((SCALE(int8, 100, (int1 - int0)) - 50) / 100), 10)}%`, comp(933, 147));
    };
    IF_SETHIDE(false, comp(933, 95));
    IF_SETHIDE(false, comp(933, 91));
    IF_SETHIDE(false, comp(933, 150));
    IF_SETHIDE(false, comp(933, 152));
    IF_SETHIDE(false, comp(933, 93));
    IF_SETTRANS((255 - ((int8 * 255) / 100)), comp(933, 150));
    IF_SETTRANS((255 - ((int8 * 255) / 100)), comp(933, 152));
    IF_SETTEXT(inttostring(SCALE(varclient_1320, 100, int8), 10), comp(933, 91));
    int0 = ((((10000 + int37) + int38) + int39) + varclient_1236);
    int1 = SCALE(((((10000 + int37) + int38) + int39) + varclient_1236), 10000, int40);
    if ((int1 >= int0)) {
        IF_SETTEXT(`+${inttostring(((SCALE(int8, 100, (int1 - int0)) + 50) / 100), 10)}%`, comp(933, 93));
    } else {
        IF_SETTEXT(`${inttostring(((SCALE(int8, 100, (int1 - int0)) - 50) / 100), 10)}%`, comp(933, 93));
    };
    IF_SETHIDE(false, comp(933, 96));
    IF_SETHIDE(false, comp(933, 148));
    int0 = SCALE(((((10000 + int37) + int38) + int39) + varclient_1236), 10000, int40);
    int1 = SCALE(SCALE(((((10000 + int37) + int38) + int39) + varclient_1236), 10000, int40), 10000, script3275());
    if ((int1 >= int0)) {
        IF_SETTEXT(`+${inttostring(((SCALE(int8, 100, (int1 - int0)) + 50) / 100), 10)}%`, comp(933, 148));
    } else {
        IF_SETTEXT(`${inttostring(((SCALE(int8, 100, (int1 - int0)) - 50) / 100), 10)}%`, comp(933, 148));
    };
    IF_SETHIDE(false, comp(933, 112));
    IF_SETHIDE(false, comp(933, 113));
    IF_SETHIDE(false, comp(933, 138));
    if ((varbitplayer_2365 != 0)) {
        switch (varbitplayer_2365) {
            case 1: {
                IF_SETHIDE(false, comp(933, 123));
                stack(2849);
                stack(61145211);
                IF_SETGRAPHIC();
                break;
            }
            case 2: {
                IF_SETHIDE(false, comp(933, 123));
                IF_SETHIDE(false, comp(933, 124));
                stack(2850);
                stack(61145211);
                IF_SETGRAPHIC();
                stack(2849);
                stack(61145212);
                IF_SETGRAPHIC();
                break;
            }
            case 3: {
                IF_SETHIDE(false, comp(933, 123));
                IF_SETHIDE(false, comp(933, 124));
                IF_SETHIDE(false, comp(933, 125));
                stack(2850);
                stack(61145212);
                IF_SETGRAPHIC();
                stack(2849);
                stack(61145213);
                IF_SETGRAPHIC();
                break;
            }
            case 4: {
                IF_SETHIDE(false, comp(933, 123));
                IF_SETHIDE(false, comp(933, 124));
                IF_SETHIDE(false, comp(933, 125));
                IF_SETHIDE(false, comp(933, 126));
                stack(2850);
                stack(61145213);
                IF_SETGRAPHIC();
                stack(2849);
                stack(61145214);
                IF_SETGRAPHIC();
                break;
            }
            case 5: {
                IF_SETHIDE(false, comp(933, 123));
                IF_SETHIDE(false, comp(933, 124));
                IF_SETHIDE(false, comp(933, 125));
                IF_SETHIDE(false, comp(933, 126));
                IF_SETHIDE(false, comp(933, 127));
                stack(2850);
                stack(61145214);
                IF_SETGRAPHIC();
                stack(2849);
                stack(61145215);
                IF_SETGRAPHIC();
                break;
            }
            case 6: {
                IF_SETHIDE(false, comp(933, 123));
                IF_SETHIDE(false, comp(933, 124));
                IF_SETHIDE(false, comp(933, 125));
                IF_SETHIDE(false, comp(933, 126));
                IF_SETHIDE(false, comp(933, 127));
                IF_SETHIDE(false, comp(933, 128));
                stack(2850);
                stack(61145215);
                IF_SETGRAPHIC();
                stack(2849);
                stack(61145216);
                IF_SETGRAPHIC();
                break;
            }
            case 7: {
                IF_SETHIDE(false, comp(933, 123));
                IF_SETHIDE(false, comp(933, 124));
                IF_SETHIDE(false, comp(933, 125));
                IF_SETHIDE(false, comp(933, 126));
                IF_SETHIDE(false, comp(933, 127));
                IF_SETHIDE(false, comp(933, 128));
                IF_SETHIDE(false, comp(933, 129));
                stack(2850);
                stack(61145216);
                IF_SETGRAPHIC();
                stack(2849);
                stack(61145217);
                IF_SETGRAPHIC();
                break;
            }
            case 8: {
                IF_SETHIDE(false, comp(933, 123));
                IF_SETHIDE(false, comp(933, 124));
                IF_SETHIDE(false, comp(933, 125));
                IF_SETHIDE(false, comp(933, 126));
                IF_SETHIDE(false, comp(933, 127));
                IF_SETHIDE(false, comp(933, 128));
                IF_SETHIDE(false, comp(933, 129));
                IF_SETHIDE(false, comp(933, 130));
                stack(2850);
                stack(61145217);
                IF_SETGRAPHIC();
                stack(2849);
                stack(61145218);
                IF_SETGRAPHIC();
                break;
            }
            case 9: {
                IF_SETHIDE(false, comp(933, 123));
                IF_SETHIDE(false, comp(933, 124));
                IF_SETHIDE(false, comp(933, 125));
                IF_SETHIDE(false, comp(933, 126));
                IF_SETHIDE(false, comp(933, 127));
                IF_SETHIDE(false, comp(933, 128));
                IF_SETHIDE(false, comp(933, 129));
                IF_SETHIDE(false, comp(933, 130));
                IF_SETHIDE(false, comp(933, 131));
                stack(2850);
                stack(61145218);
                IF_SETGRAPHIC();
                stack(2849);
                stack(61145219);
                IF_SETGRAPHIC();
                break;
            }
            case 10: {
                IF_SETHIDE(false, comp(933, 123));
                IF_SETHIDE(false, comp(933, 124));
                IF_SETHIDE(false, comp(933, 125));
                IF_SETHIDE(false, comp(933, 126));
                IF_SETHIDE(false, comp(933, 127));
                IF_SETHIDE(false, comp(933, 128));
                IF_SETHIDE(false, comp(933, 129));
                IF_SETHIDE(false, comp(933, 130));
                IF_SETHIDE(false, comp(933, 131));
                IF_SETHIDE(false, comp(933, 132));
                stack(2850);
                stack(61145219);
                IF_SETGRAPHIC();
                stack(2849);
                stack(61145220);
                IF_SETGRAPHIC();
                break;
            }
            case 11: {
                IF_SETHIDE(false, comp(933, 123));
                IF_SETHIDE(false, comp(933, 124));
                IF_SETHIDE(false, comp(933, 125));
                IF_SETHIDE(false, comp(933, 126));
                IF_SETHIDE(false, comp(933, 127));
                IF_SETHIDE(false, comp(933, 128));
                IF_SETHIDE(false, comp(933, 129));
                IF_SETHIDE(false, comp(933, 130));
                IF_SETHIDE(false, comp(933, 131));
                IF_SETHIDE(false, comp(933, 132));
                IF_SETHIDE(false, comp(933, 133));
                stack(2850);
                stack(61145220);
                IF_SETGRAPHIC();
                stack(2849);
                stack(61145221);
                IF_SETGRAPHIC();
                break;
            }
            case 12: {
                IF_SETHIDE(false, comp(933, 123));
                IF_SETHIDE(false, comp(933, 124));
                IF_SETHIDE(false, comp(933, 125));
                IF_SETHIDE(false, comp(933, 126));
                IF_SETHIDE(false, comp(933, 127));
                IF_SETHIDE(false, comp(933, 128));
                IF_SETHIDE(false, comp(933, 129));
                IF_SETHIDE(false, comp(933, 130));
                IF_SETHIDE(false, comp(933, 131));
                IF_SETHIDE(false, comp(933, 132));
                IF_SETHIDE(false, comp(933, 133));
                IF_SETHIDE(false, comp(933, 134));
                stack(2850);
                stack(61145221);
                IF_SETGRAPHIC();
                stack(2849);
                stack(61145222);
                IF_SETGRAPHIC();
                break;
            }
            case 13: {
                IF_SETHIDE(false, comp(933, 123));
                IF_SETHIDE(false, comp(933, 124));
                IF_SETHIDE(false, comp(933, 125));
                IF_SETHIDE(false, comp(933, 126));
                IF_SETHIDE(false, comp(933, 127));
                IF_SETHIDE(false, comp(933, 128));
                IF_SETHIDE(false, comp(933, 129));
                IF_SETHIDE(false, comp(933, 130));
                IF_SETHIDE(false, comp(933, 131));
                IF_SETHIDE(false, comp(933, 132));
                IF_SETHIDE(false, comp(933, 133));
                IF_SETHIDE(false, comp(933, 134));
                IF_SETHIDE(false, comp(933, 135));
                stack(2850);
                stack(61145222);
                IF_SETGRAPHIC();
                stack(2849);
                stack(61145223);
                IF_SETGRAPHIC();
                break;
            }
            case 14: {
                IF_SETHIDE(false, comp(933, 123));
                IF_SETHIDE(false, comp(933, 124));
                IF_SETHIDE(false, comp(933, 125));
                IF_SETHIDE(false, comp(933, 126));
                IF_SETHIDE(false, comp(933, 127));
                IF_SETHIDE(false, comp(933, 128));
                IF_SETHIDE(false, comp(933, 129));
                IF_SETHIDE(false, comp(933, 130));
                IF_SETHIDE(false, comp(933, 131));
                IF_SETHIDE(false, comp(933, 132));
                IF_SETHIDE(false, comp(933, 133));
                IF_SETHIDE(false, comp(933, 134));
                IF_SETHIDE(false, comp(933, 135));
                IF_SETHIDE(false, comp(933, 136));
                stack(2850);
                stack(61145223);
                IF_SETGRAPHIC();
                stack(2849);
                stack(61145224);
                IF_SETGRAPHIC();
                break;
            }
            case 15: {
                IF_SETHIDE(false, comp(933, 123));
                IF_SETHIDE(false, comp(933, 124));
                IF_SETHIDE(false, comp(933, 125));
                IF_SETHIDE(false, comp(933, 126));
                IF_SETHIDE(false, comp(933, 127));
                IF_SETHIDE(false, comp(933, 128));
                IF_SETHIDE(false, comp(933, 129));
                IF_SETHIDE(false, comp(933, 130));
                IF_SETHIDE(false, comp(933, 131));
                IF_SETHIDE(false, comp(933, 132));
                IF_SETHIDE(false, comp(933, 133));
                IF_SETHIDE(false, comp(933, 134));
                IF_SETHIDE(false, comp(933, 135));
                IF_SETHIDE(false, comp(933, 136));
                IF_SETHIDE(false, comp(933, 137));
                stack(2850);
                stack(61145224);
                IF_SETGRAPHIC();
                stack(2849);
                stack(61145225);
                IF_SETGRAPHIC();
                break;
            }
        };
    } else {
        IF_SETTEXT("n/a", comp(933, 138));
        varclient_1186 = (varclient_1186 + 2);
    };
    int0 = SCALE(SCALE(((((10000 + int37) + int38) + int39) + varclient_1236), 10000, int40), 10000, script3275());
    int1 = SCALE(SCALE(SCALE(((((10000 + int37) + int38) + int39) + varclient_1236), 10000, int40), 10000, script3275()), 10000, int41);
    if ((int1 >= int0)) {
        IF_SETTEXT(`+${inttostring(((SCALE(int8, 100, (int1 - int0)) + 50) / 100), 10)}%`, comp(933, 138));
    } else {
        IF_SETTEXT(`${inttostring(((SCALE(int8, 100, (int1 - int0)) - 50) / 100), 10)}%`, comp(933, 138));
    };
    IF_SETHIDE(true, comp(933, 86));
    if ((varclient_1321 > 0)) {
        IF_SETHIDE(false, comp(933, 165));
        IF_SETTEXT(`Unbalanced party penalty: x${inttostring((((10000 - varclient_1321) + 50) / 100), 10)}%`, comp(933, 175));
    };
    int0 = SCALE(SCALE(SCALE(((((10000 + int37) + int38) + int39) + varclient_1236), 10000, int40), 10000, script3275()), 10000, int41);
    int1 = SCALE(SCALE(SCALE(SCALE(((((10000 + int37) + int38) + int39) + varclient_1236), 10000, int40), 10000, script3275()), 10000, int41), 10000, (10000 - varclient_1321));
    IF_SETTEXT(`${inttostring((((int0 + SCALE(int8, 100, (int1 - int0))) + 50) / 100), 10)}%`, comp(933, 204));
    IF_SETSIZE(SCALE(8192, 100, (((int0 + SCALE(int8, 100, (int1 - int0))) + 50) / 100)), 16384, 2, 2, comp(933, 187));
    script949(false);
    IF_SETTEXT(inttostring(varclient_1239, 10), comp(933, 222));
    int0 = varclient_1239;
    int1 = SCALE(SCALE(SCALE(SCALE(SCALE(((((10000 + int37) + int38) + int39) + varclient_1236), 10000, int40), 10000, script3275()), 10000, int41), 10000, (10000 - varclient_1321)), 10000, varclient_1239);
    if (((MODULO(int8, 5) == 0) && (IF_GETY(comp(933, 165)) != 138))) {
        IF_SETPOSITION(IF_GETX(comp(933, 165)), (IF_GETY(comp(933, 165)) + 1), 0, 0, comp(933, 165));
    };
    IF_SETSIZE(183, SCALE(80, 100, int8), 0, 0, comp(933, 203));
    IF_SETTEXT(`${inttostring((((int0 + SCALE(int8, 100, (int1 - int0))) + 5) / 10), 10)}%`, comp(933, 222));
    int0 = varclient_1239;
    int1 = SCALE(SCALE(SCALE(SCALE(SCALE(((((10000 + int37) + int38) + int39) + varclient_1236), 10000, int40), 10000, script3275()), 10000, int41), 10000, (10000 - varclient_1321)), 10000, varclient_1239);
    var int42 = (((int0 + SCALE(int8, 100, (int1 - int0))) + 5) / 100);
    if ((varclient_6516 == true)) {
        if (((2147483647 - int42) >= 0)) {
            int42 = (int42 * 2);
        } else {
            int42 = 2147483647;
        };
    };
    if ((varplayer_1097 < 2000000000)) {
        IF_SETTEXT(`${inttostring(int42, 10)}%`, comp(933, 224));
    } else {
        IF_SETTEXT("n/a", comp(933, 224));
    };
    IF_SETHIDE(true, comp(933, 225));
    IF_SETHIDE(true, comp(933, 227));
    IF_SETHIDE(true, comp(933, 229));
    return;
}