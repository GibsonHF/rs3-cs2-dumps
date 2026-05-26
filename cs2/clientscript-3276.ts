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
    IF_SETTRANS(varclient_1185, 61145089);
    IF_SETTRANS(0, 61145261);
    IF_SETTRANS(0, 61145262);
    IF_SETTRANS(0, 61145263);
    var int37 = 0;
    switch (varclient_1188) {
        case 3: {
            int37 = 50000;
            break;
        }
        case 2: {
            int37 = 25000;
            break;
        }
        default: {
            int37 = 0;
            break;
        }
    };
    var int38 = 0;
    switch (varclient_1188) {
        case 3: {
            int38 = SCALE(varclient_1195, 10000, 36000);
            break;
        }
        case 2: {
            int38 = SCALE(varclient_1195, 10000, 11000);
            break;
        }
        default: {
            int38 = SCALE(varclient_1195, 10000, 6000);
            break;
        }
    };
    [int3, int4, int5] = script3273();
    var int39 = int5;
    var int40 = script3274();
    var int41 = 600;
    var int42 = (10000 - (MIN(varbitplayer_2365, 4) * int41));
    if ((varbitplayer_24882 > 0)) {
        int42 = MIN(10000, (int42 + ((varbitplayer_24882 * 1) * 100)));
    };
    if (((script12953() == 1) || (script14608(2899) == 1))) {
        int42 = 10000;
    };
    IF_SETHIDE(0, 61145116);
    IF_SETHIDE(0, 61145094);
    IF_SETHIDE(0, 61145108);
    IF_SETHIDE(0, 61145299);
    IF_SETTEXT(`Floor ${inttostring(varclient_1319, 10)}:`, 61145299);
    IF_SETHIDE(0, 61145190);
    IF_SETSIZE((IF_GETWIDTH(61145191) + 5), (IF_GETHEIGHT(61145191) + 5), 0, 0, 61145191);
    SOUND_SYNTH(27367, 1, 0);
    IF_SETTRANS(MIN(255, (IF_GETTRANS(61145191) + 30)), 61145191);
    IF_SETHIDE(0, 61145300);
    IF_SETTEXT(inttostring(SCALE(((varclient_1237 + 5) / 10), 100, int8), 10), 61145300);
    IF_SETHIDE(0, 61145114);
    IF_SETTRANS((255 - ((int8 * 255) / 100)), 61145114);
    IF_SETHIDE(0, 61145110);
    IF_SETHIDE(0, 61145311);
    IF_SETTEXT(`Level ${inttostring(varclient_8412, 10)}:`, 61145311);
    IF_SETHIDE(0, 61145188);
    IF_SETSIZE((IF_GETWIDTH(61145189) + 5), (IF_GETHEIGHT(61145189) + 5), 0, 0, 61145189);
    IF_SETTRANS(255, 61145189);
    IF_SETHIDE(0, 61145312);
    IF_SETTEXT(inttostring(SCALE(((varclient_8411 + 5) / 10), 100, int8), 10), 61145312);
    IF_SETHIDE(0, 61145115);
    IF_SETTRANS((255 - ((int8 * 255) / 100)), 61145115);
    IF_SETHIDE(0, 61145112);
    IF_SETHIDE(0, 61145323);
    IF_SETHIDE(0, 61145186);
    IF_SETSIZE((IF_GETWIDTH(61145187) + 5), (IF_GETHEIGHT(61145187) + 5), 0, 0, 61145187);
    IF_SETTRANS(0, 61145187);
    IF_SETHIDE(0, 61145324);
    IF_SETTEXT(inttostring(SCALE(((varclient_1239 + 5) / 10), 100, int8), 10), 61145324);
    IF_SETHIDE(1, 61145107);
    IF_SETHIDE(0, 61145184);
    IF_SETTEXT(TOSTRING_LOCALISED(SCALE(((varclient_1239 + 5) / 10), 100, int8), 1), 61145396);
    IF_SETTRANS(255, 61145394);
    IF_SETHIDE(0, 61145174);
    IF_SETHIDE(0, 61145127);
    IF_SETHIDE(0, 61145130);
    IF_SETHIDE(0, 61145131);
    IF_SETHIDE(0, 61145132);
    IF_SETHIDE(0, 61145133);
    IF_SETHIDE(0, 61145134);
    IF_SETHIDE(0, 61145135);
    IF_SETHIDE(0, 61145136);
    IF_SETHIDE(0, 61145137);
    IF_SETHIDE(0, 61145139);
    [int3, int4, int5] = script3273();
    if ((varclient_1188 == 1)) {
        IF_SETTRANS(0, 61145132);
        IF_SETTEXT(`+${inttostring((0 / 100), 10)}%`, 61145139);
    } else if ((varclient_1188 == 2)) {
        IF_SETTRANS(0, 61145133);
        IF_SETTEXT(`+${inttostring((25000 / 100), 10)}%`, 61145139);
    } else if ((varclient_1188 == 3)) {
        IF_SETTRANS(0, 61145134);
        IF_SETTEXT(`+${inttostring((50000 / 100), 10)}%`, 61145139);
    };
    IF_SETHIDE(0, 61145140);
    IF_SETHIDE(0, 61145141);
    IF_SETHIDE(0, 61145143);
    IF_SETSIZE(SCALE(SCALE(varclient_1195, 10000, 16384), 100, int8), 16384, 2, 2, 61145344);
    int0 = (10000 + int37);
    int1 = ((10000 + int37) + int38);
    if ((int1 >= int0)) {
        IF_SETTEXT(`+${inttostring(((SCALE(int8, 100, (int1 - int0)) + 50) / 100), 10)}%`, 61145143);
    } else {
        IF_SETTEXT(`${inttostring(((SCALE(int8, 100, (int1 - int0)) - 50) / 100), 10)}%`, 61145143);
    };
    IF_SETTEXT(`${inttostring((((int0 + SCALE(int8, 100, (int1 - int0))) + 50) / 100), 10)}%`, 61145183);
    IF_SETHIDE(0, 61145144);
    IF_SETHIDE(0, 61145145);
    IF_SETHIDE(0, 61145146);
    IF_SETHIDE(0, 61145147);
    IF_SETHIDE(0, 61145148);
    IF_SETTRANS((255 - ((int8 * 255) / 100)), 61145146);
    IF_SETTRANS((255 - ((int8 * 255) / 100)), 61145147);
    [int3, int4, int5] = script3273();
    IF_SETTEXT(`${inttostring(int3, 10)} : ${inttostring(int4, 10)}`, 61145145);
    int0 = ((10000 + int37) + int38);
    int1 = (((10000 + int37) + int38) + int39);
    if ((int1 >= int0)) {
        IF_SETTEXT(`+${inttostring(((SCALE(int8, 100, (int1 - int0)) + 50) / 100), 10)}%`, 61145148);
    } else {
        IF_SETTEXT(`${inttostring(((SCALE(int8, 100, (int1 - int0)) - 50) / 100), 10)}%`, 61145148);
    };
    IF_SETHIDE(0, 61145149);
    IF_SETHIDE(0, 61145150);
    int0 = (((10000 + int37) + int38) + int39);
    int1 = ((((10000 + int37) + int38) + int39) + varclient_1236);
    if ((int1 >= int0)) {
        IF_SETTEXT(`+${inttostring(((SCALE(int8, 100, (int1 - int0)) + 50) / 100), 10)}%`, 61145150);
    } else {
        IF_SETTEXT(`${inttostring(((SCALE(int8, 100, (int1 - int0)) - 50) / 100), 10)}%`, 61145150);
    };
    IF_SETHIDE(0, 61145156);
    IF_SETHIDE(0, 61145157);
    var int43 = ((varbitplayer_24886 * 10) * 100);
    int0 = ((((10000 + int37) + int38) + int39) + varclient_1236);
    int1 = (((((10000 + int37) + int38) + int39) + varclient_1236) + int43);
    IF_SETTEXT(`+${inttostring((varbitplayer_24886 * 10), 10)}%`, 61145157);
    IF_SETHIDE(0, 61145151);
    IF_SETHIDE(0, 61145152);
    IF_SETHIDE(0, 61145153);
    IF_SETHIDE(0, 61145154);
    IF_SETHIDE(0, 61145155);
    IF_SETTRANS((255 - ((int8 * 255) / 100)), 61145153);
    IF_SETTRANS((255 - ((int8 * 255) / 100)), 61145154);
    if ((varclient_1320 == 2)) {
        IF_SETTEXT("High", 61145152);
    } else {
        IF_SETTEXT("Low", 61145152);
    };
    int0 = (((((10000 + int37) + int38) + int39) + varclient_1236) + int43);
    int1 = SCALE((((((10000 + int37) + int38) + int39) + varclient_1236) + int43), 10000, int40);
    if ((int1 >= int0)) {
        IF_SETTEXT(`+${inttostring(((SCALE(int8, 100, (int1 - int0)) + 50) / 100), 10)}%`, 61145155);
    } else {
        IF_SETTEXT(`${inttostring(((int40 - 10000) / 100), 10)}%`, 61145155);
    };
    IF_SETHIDE(0, 61145158);
    IF_SETHIDE(0, 61145159);
    IF_SETHIDE(0, 61145173);
    if ((varbitplayer_2365 != 0)) {
        switch (varbitplayer_2365) {
            case 1: {
                IF_SETHIDE(0, 61145169);
                IF_SETGRAPHIC(2849, 61145169);
                break;
            }
            case 2: {
                IF_SETHIDE(0, 61145169);
                IF_SETHIDE(0, 61145170);
                IF_SETGRAPHIC(2850, 61145169);
                IF_SETGRAPHIC(2849, 61145170);
                break;
            }
            case 3: {
                IF_SETHIDE(0, 61145169);
                IF_SETHIDE(0, 61145170);
                IF_SETHIDE(0, 61145171);
                IF_SETGRAPHIC(2850, 61145170);
                IF_SETGRAPHIC(2849, 61145171);
                break;
            }
            case 4: {
                IF_SETHIDE(0, 61145169);
                IF_SETHIDE(0, 61145170);
                IF_SETHIDE(0, 61145171);
                IF_SETHIDE(0, 61145172);
                IF_SETGRAPHIC(2850, 61145171);
                IF_SETGRAPHIC(2849, 61145172);
                break;
            }
            case 5: {
                IF_SETHIDE(0, 61145169);
                IF_SETHIDE(0, 61145170);
                IF_SETHIDE(0, 61145171);
                IF_SETHIDE(0, 61145172);
                IF_SETGRAPHIC(2850, 61145172);
                break;
            }
        };
    } else {
        IF_SETTEXT("No deaths.", 61145173);
        varclient_1186 = (varclient_1186 + 2);
    };
    int0 = SCALE((((((10000 + int37) + int38) + int39) + varclient_1236) + int43), 10000, int40);
    int1 = SCALE(SCALE((((((10000 + int37) + int38) + int39) + varclient_1236) + int43), 10000, int40), 10000, int42);
    if ((int1 >= int0)) {
        IF_SETTEXT(`+${inttostring(((SCALE(int8, 100, (int1 - int0)) + 50) / 100), 10)}%`, 61145173);
    } else {
        IF_SETTEXT(`${inttostring(((int42 - 10000) / 100), 10)}%`, 61145173);
    };
    IF_SETHIDE(1, 61145130);
    if ((varclient_1321 > 0)) {
        IF_SETHIDE(0, 61145176);
        IF_SETTEXT(`Unbalanced party penalty: x${inttostring((((10000 - varclient_1321) + 50) / 100), 10)}%`, 61145356);
    };
    int0 = SCALE(SCALE((((((10000 + int37) + int38) + int39) + varclient_1236) + int43), 10000, int40), 10000, int42);
    int1 = SCALE(SCALE(SCALE((((((10000 + int37) + int38) + int39) + varclient_1236) + int43), 10000, int40), 10000, int42), 10000, (10000 - varclient_1321));
    IF_SETTEXT(`${inttostring((((int0 + SCALE(int8, 100, (int1 - int0))) + 50) / 100), 10)}%`, 61145183);
    var int44 = (8192 + (((int1 - 10000) * 8192) / 60000));
    int44 = (8192 - (((int44 - 8192) * (83 - int8)) / 83));
    IF_SETSIZE(int44, 16384, 2, 2, 61145364);
    script949(0);
    IF_SETTEXT(TOSTRING_LOCALISED(varclient_1239, 1), 61145396);
    int0 = varclient_1239;
    int1 = SCALE(SCALE(SCALE(SCALE((((((10000 + int37) + int38) + int39) + varclient_1236) + int43), 10000, int40), 10000, int42), 10000, (10000 - varclient_1321)), 10000, varclient_1239);
    if (((MODULO(int8, 5) == 0) && (IF_GETY(61145176) != 138))) {
        IF_SETPOSITION(IF_GETX(61145176), (IF_GETY(61145176) + 1), 0, 0, 61145176);
    };
    IF_SETSIZE(183, SCALE(80, 100, int8), 0, 0, 61145382);
    IF_SETTEXT(`${TOSTRING_LOCALISED((((int0 + SCALE(int8, 100, (int1 - int0))) + 5) / 10), 1)}%`, 61145396);
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
        IF_SETTEXT(`${TOSTRING_LOCALISED(int45, 1)}%`, 61145398);
    } else {
        IF_SETTEXT("Max tokens", 61145398);
    };
    IF_SETHIDE(1, 61145186);
    IF_SETHIDE(1, 61145188);
    IF_SETHIDE(1, 61145190);
    return;
}