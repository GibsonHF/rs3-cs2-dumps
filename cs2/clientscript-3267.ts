//
function script3267(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
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
    var int37 = 0;
    varclient_1185 = MAX((varclient_1185 - 2), 0);
    IF_SETTRANS(varclient_1185, 61145089);
    IF_SETTRANS((255 - varclient_1185), 61145261);
    IF_SETTRANS((255 - varclient_1185), 61145262);
    IF_SETTRANS((255 - varclient_1185), 61145263);
    var int38 = 0;
    switch (varclient_1188) {
        case 3: {
            int38 = 50000;
            break;
        }
        case 2: {
            int38 = 25000;
            break;
        }
        default: {
            int38 = 0;
            break;
        }
    };
    var int39 = 0;
    switch (varclient_1188) {
        case 3: {
            int39 = SCALE(varclient_1195, 10000, 36000);
            break;
        }
        case 2: {
            int39 = SCALE(varclient_1195, 10000, 11000);
            break;
        }
        default: {
            int39 = SCALE(varclient_1195, 10000, 6000);
            break;
        }
    };
    [int3, int4, int5] = script3273();
    var int40 = int5;
    var int41 = script3274();
    var int42 = ((varbitplayer_24886 * 10) * 100);
    var int43 = 600;
    var int44 = (10000 - (MIN(varbitplayer_2365, 4) * int43));
    if ((varbitplayer_24882 > 0)) {
        int44 = MIN(10000, (int44 + ((varbitplayer_24882 * 1) * 100)));
    };
    if (((script12953() == 1) || (script14608(2899) == 1))) {
        int44 = 10000;
    };
    var int45 = 0;
    var int46 = 0;
    if (((varclient_1185 == 0) && (varclient_1192 != 0))) {
        if ((varclient_1186 < 350)) {
            if ((IF_GETTRANS(61145107) <= 31)) {
                varclient_1189 = 7;
            } else if ((IF_GETTRANS(61145107) > 220)) {
                varclient_1189 = -7;
            };
            IF_SETTRANS((IF_GETTRANS(61145107) + varclient_1189), 61145107);
        } else if (((varclient_1186 >= 350) && (varclient_1186 < 400))) {
            if ((varclient_1186 == 350)) {
                IF_SETTRANS(255, 61145107);
            };
            if ((IF_GETTRANS(61145394) <= 31)) {
                varclient_1189 = 7;
            } else if ((IF_GETTRANS(61145394) > 220)) {
                varclient_1189 = -7;
            };
            IF_SETTRANS((IF_GETTRANS(61145394) + varclient_1189), 61145394);
        } else if (((varclient_1186 >= 400) && (varclient_1186 < 1350))) {
            if ((varclient_1186 == 400)) {
                IF_SETTRANS(255, 61145394);
            };
            if ((IF_GETTRANS(61145130) <= 31)) {
                varclient_1189 = 7;
            } else if ((IF_GETTRANS(61145130) > 220)) {
                varclient_1189 = -7;
            };
            IF_SETTRANS((IF_GETTRANS(61145130) + varclient_1189), 61145130);
        } else if (((varclient_1186 >= 1350) && (varclient_1186 < 1600))) {
            if ((varclient_1186 == 1350)) {
                IF_SETTRANS(255, 61145130);
            };
            if ((IF_GETTRANS(61145394) <= 31)) {
                varclient_1189 = 7;
            } else if ((IF_GETTRANS(61145394) > 220)) {
                varclient_1189 = -7;
            };
            IF_SETTRANS((IF_GETTRANS(61145394) + varclient_1189), 61145394);
        };
        if ((varclient_1186 < int9)) {
            IF_SETHIDE(0, 61145116);
            IF_SETHIDE(0, 61145094);
            if ((varclient_1186 == 0)) {
                SOUND_SYNTH(27367, 1, 0);
            };
        } else if ((varclient_1186 < (int9 + int10))) {
            IF_SETHIDE(0, 61145108);
            IF_SETHIDE(0, 61145299);
            IF_SETTEXT(`Floor ${inttostring(varclient_1319, 10)}:`, 61145299);
            IF_SETHIDE(0, 61145190);
            IF_SETSIZE((IF_GETWIDTH(61145191) + 5), (IF_GETHEIGHT(61145191) + 5), 0, 0, 61145191);
            if ((varclient_1186 == int9)) {
                SOUND_SYNTH(27367, 1, 0);
            };
            IF_SETTRANS(MIN(255, (IF_GETTRANS(61145191) + 30)), 61145191);
        } else if ((varclient_1186 < ((int9 + int10) + int11))) {
            int8 = SCALE(((varclient_1186 - (int9 + int10)) + 1), int11, 100);
            if ((int8 == 0)) {
                varclient_1270 = 0;
            };
            IF_SETHIDE(0, 61145300);
            IF_SETTEXT(inttostring(SCALE(((varclient_1237 + 5) / 10), 100, int8), 10), 61145300);
            if ((SCALE(((varclient_1237 + 5) / 10), 100, int8) != varclient_1270)) {
                SOUND_SYNTH(32188, 1, 0);
                varclient_1270 = SCALE(((varclient_1237 + 5) / 10), 100, int8);
            };
        } else if ((varclient_1186 < (((int9 + int10) + int11) + int12))) {
            IF_SETHIDE(0, 61145114);
            int8 = SCALE(((varclient_1186 - ((int9 + int10) + int11)) + 1), int12, 100);
            IF_SETTRANS((255 - ((int8 * 255) / 100)), 61145114);
        } else if ((varclient_1186 < ((((int9 + int10) + int11) + int12) + int13))) {
            IF_SETHIDE(0, 61145110);
            IF_SETHIDE(0, 61145311);
            IF_SETTEXT(`Level ${inttostring(varclient_8412, 10)}:`, 61145311);
            IF_SETHIDE(0, 61145188);
            IF_SETSIZE((IF_GETWIDTH(61145189) + 5), (IF_GETHEIGHT(61145189) + 5), 0, 0, 61145189);
            if ((varclient_1186 == (((int9 + int10) + int11) + int12))) {
                SOUND_SYNTH(27367, 1, 0);
            };
            IF_SETTRANS(MIN(255, (IF_GETTRANS(61145189) + 30)), 61145189);
        } else if ((varclient_1186 < (((((int9 + int10) + int11) + int12) + int13) + int14))) {
            int8 = SCALE(((varclient_1186 - ((((int9 + int10) + int11) + int12) + int13)) + 1), int14, 100);
            if ((int8 == 0)) {
                varclient_1270 = 0;
            };
            IF_SETHIDE(0, 61145312);
            IF_SETTEXT(inttostring(SCALE(((varclient_8411 + 5) / 10), 100, int8), 10), 61145312);
            if ((SCALE(((varclient_8411 + 5) / 10), 100, int8) != varclient_1270)) {
                SOUND_SYNTH(32188, 1, 0);
                varclient_1270 = SCALE(((varclient_8411 + 5) / 10), 100, int8);
            };
        } else if ((varclient_1186 < ((((((int9 + int10) + int11) + int12) + int13) + int14) + int15))) {
            IF_SETHIDE(0, 61145115);
            int8 = SCALE(((varclient_1186 - (((((int9 + int10) + int11) + int12) + int13) + int14)) + 1), int15, 100);
            IF_SETTRANS((255 - ((int8 * 255) / 100)), 61145115);
        } else if ((varclient_1186 < (((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16))) {
            int8 = SCALE(((varclient_1186 - ((((((int9 + int10) + int11) + int12) + int13) + int14) + int15)) + 1), int16, 100);
            IF_SETHIDE(0, 61145112);
            IF_SETHIDE(0, 61145323);
            IF_SETHIDE(0, 61145186);
            IF_SETSIZE((IF_GETWIDTH(61145187) + 5), (IF_GETHEIGHT(61145187) + 5), 0, 0, 61145187);
            if ((varclient_1186 == ((((((int9 + int10) + int11) + int12) + int13) + int14) + int15))) {
                SOUND_SYNTH(27367, 1, 0);
            };
            IF_SETTRANS(MIN(255, (IF_GETTRANS(61145187) + 30)), 61145187);
        } else if ((varclient_1186 < ((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17))) {
            int8 = SCALE(((varclient_1186 - (((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16)) + 1), int17, 100);
            if ((int8 == 0)) {
                varclient_1270 = 0;
            };
            IF_SETHIDE(0, 61145324);
            IF_SETTEXT(inttostring(SCALE(((varclient_1239 + 5) / 10), 100, int8), 10), 61145324);
            if ((SCALE(((varclient_1239 + 5) / 10), 100, int8) != varclient_1270)) {
                SOUND_SYNTH(32188, 1, 0);
                varclient_1270 = SCALE(((varclient_1239 + 5) / 10), 100, int8);
            };
        } else if ((varclient_1186 < (((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18))) {
            IF_SETHIDE(1, 61145107);
            int8 = SCALE(((varclient_1186 - ((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17)) + 1), int18, 100);
            if ((int8 == 0)) {
                varclient_1270 = 0;
            };
            IF_SETHIDE(0, 61145184);
            IF_SETTEXT(TOSTRING_LOCALISED(SCALE(((varclient_1239 + 5) / 10), 100, int8), 1), 61145396);
            if ((SCALE(((varclient_1239 + 5) / 10), 100, int8) != varclient_1270)) {
                SOUND_SYNTH(31378, 1, 0);
                varclient_1270 = SCALE(((varclient_1239 + 5) / 10), 100, int8);
            };
        } else if ((varclient_1186 < ((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19))) {
            IF_SETTRANS(255, 61145394);
            IF_SETHIDE(0, 61145174);
            IF_SETHIDE(0, 61145127);
            IF_SETHIDE(0, 61145130);
            if ((varclient_1186 == (((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18))) {
                SOUND_SYNTH(27367, 1, 0);
            };
        } else if ((varclient_1186 < (((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20))) {
            IF_SETHIDE(0, 61145131);
            if ((varclient_1186 == ((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19))) {
                SOUND_SYNTH(27367, 1, 0);
            };
        } else if ((varclient_1186 < ((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21))) {
            IF_SETHIDE(0, 61145132);
            IF_SETHIDE(0, 61145133);
            IF_SETHIDE(0, 61145134);
            IF_SETHIDE(0, 61145135);
            IF_SETHIDE(0, 61145136);
            IF_SETHIDE(0, 61145137);
            IF_SETHIDE(0, 61145139);
            if ((varclient_1186 == (((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20))) {
                SOUND_SYNTH(32188, 1, 0);
            };
            if ((varclient_1186 == ((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21))) {
                SOUND_SYNTH(27367, 1, 0);
            };
            [int3, int4, int5] = script3273();
            int8 = SCALE(((varclient_1186 - (((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20)) + 1), (int21 / 3), 100);
            if ((varclient_1186 < ((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + (int21 / 3)))) {
                if ((varclient_1186 == ((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + (int21 / 3)))) {
                    SOUND_SYNTH(27367, 1, 0);
                };
                int0 = 10000;
                int1 = (10000 + 0);
                if ((int8 == 33)) {
                    varclient_1270 = int0;
                    SOUND_SYNTH(32430, 1, 0);
                };
                IF_SETTRANS(MIN(200, (255 - ((int8 * 255) / 100))), 61145132);
                IF_SETTEXT(`+${inttostring((((SCALE(int8, 100, (int1 - 10000)) / 1) + 50) / 100), 10)}%`, 61145139);
                if (((((SCALE(int8, 100, (int1 - 10000)) / 1) + 50) / 100) != varclient_1270)) {
                    SOUND_SYNTH(32188, 1, 0);
                    varclient_1270 = (((SCALE(int8, 100, (int1 - 10000)) / 1) + 50) / 100);
                };
                IF_SETTEXT(`${inttostring((((int0 + (SCALE(int8, 100, (int1 - int0)) / 1)) + 50) / 100), 10)}%`, 61145183);
                int46 = (8192 + (((int1 - 10000) * 8192) / 60000));
                int46 = (8192 - (((int46 - 8192) * (83 - int8)) / 83));
                IF_SETSIZE(int46, 16384, 2, 2, 61145364);
                if ((varclient_1186 == 475)) {
                    SOUND_SYNTH(32430, 1, 0);
                };
            } else if (((varclient_1186 < ((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + ((int21 / 3) * 2))) && (varclient_1188 > 1))) {
                if (((varclient_1186 == ((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + ((int21 / 3) * 2))) && (varclient_1188 > 1))) {
                    SOUND_SYNTH(27367, 1, 0);
                };
                int0 = (10000 + 0);
                int1 = (10000 + 25000);
                if ((int8 == 33)) {
                    varclient_1270 = int0;
                    SOUND_SYNTH(32430, 1, 0);
                };
                IF_SETTRANS(MIN(200, (((int8 / 2) * 255) / 100)), 61145132);
                IF_SETTRANS(MIN(200, (255 - ((int8 * 255) / 100))), 61145133);
                IF_SETTEXT(`+${inttostring((((SCALE(int8, 100, (int1 - 10000)) / 2) + 50) / 100), 10)}%`, 61145139);
                if (((((SCALE(int8, 100, (int1 - 10000)) / 2) + 50) / 100) != varclient_1270)) {
                    SOUND_SYNTH(32188, 1, 0);
                    varclient_1270 = (((SCALE(int8, 100, (int1 - 10000)) / 2) + 50) / 100);
                };
                IF_SETTEXT(`${inttostring((((int0 + (SCALE(int8, 100, (int1 - int0)) / 2)) + 50) / 100), 10)}%`, 61145183);
                int46 = (8192 + (((int1 - 10000) * 8192) / 60000));
                int46 = (8192 - (((int46 - 8192) * (83 - int8)) / 83));
                IF_SETSIZE(int46, 16384, 2, 2, 61145364);
                if ((varclient_1186 == 525)) {
                    SOUND_SYNTH(32430, 1, 0);
                };
            } else if ((varclient_1188 > 2)) {
                int0 = (10000 + 25000);
                int1 = (10000 + 50000);
                if ((int8 == 66)) {
                    varclient_1270 = int0;
                    SOUND_SYNTH(32430, 1, 0);
                };
                IF_SETTRANS(MIN(200, (((int8 / 3) * 255) / 100)), 61145133);
                IF_SETTRANS(MIN(200, (255 - ((int8 * 255) / 100))), 61145134);
                IF_SETTEXT(`+${inttostring((((SCALE(int8, 100, (int1 - 10000)) / 3) + 50) / 100), 10)}%`, 61145139);
                if (((((SCALE(int8, 100, (int1 - 10000)) / 3) + 50) / 100) != varclient_1270)) {
                    SOUND_SYNTH(32188, 1, 0);
                    varclient_1270 = (((SCALE(int8, 100, (int1 - 10000)) / 3) + 50) / 100);
                };
                IF_SETTEXT(`${inttostring((((int0 + (SCALE(int8, 100, (int1 - int0)) / 3)) + 50) / 100), 10)}%`, 61145183);
                int46 = (8192 + (((int1 - 10000) * 8192) / 60000));
                int46 = (8192 - (((int46 - 8192) * (83 - int8)) / 83));
                IF_SETSIZE(int46, 16384, 2, 2, 61145364);
                if ((varclient_1186 == 575)) {
                    SOUND_SYNTH(32430, 1, 0);
                };
            };
        } else if ((varclient_1186 < (((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22))) {
            IF_SETHIDE(0, 61145140);
            if ((varclient_1186 == ((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21))) {
                SOUND_SYNTH(27367, 1, 0);
            };
        } else if ((varclient_1186 < ((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23))) {
            int8 = SCALE(((varclient_1186 - (((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22)) + 1), int23, 100);
            IF_SETHIDE(0, 61145141);
            IF_SETHIDE(0, 61145143);
            IF_SETSIZE(SCALE(SCALE(varclient_1195, 10000, 16384), 100, int8), 16384, 2, 2, 61145344);
            int0 = (10000 + int38);
            int1 = ((10000 + int38) + int39);
            int37 = SCALE(int8, 100, (int1 - int0));
            if ((int8 == 0)) {
                varclient_1270 = int0;
            };
            if ((int1 >= int0)) {
                IF_SETTEXT(`+${inttostring(((int37 + 50) / 100), 10)}%`, 61145143);
            } else {
                IF_SETTEXT(`${inttostring(((int37 - 50) / 100), 10)}%`, 61145143);
            };
            IF_SETTEXT(`${inttostring((((int0 + int37) + 50) / 100), 10)}%`, 61145183);
            if (((((int0 + int37) + 50) / 100) != varclient_1270)) {
                SOUND_SYNTH(32188, 1, 0);
                varclient_1270 = (((int0 + SCALE(int8, 100, (int1 - int0))) + 50) / 100);
            };
            int46 = (8192 + (((int0 - 10000) * 8192) / 60000));
            int46 = (int46 + (((((int1 - int0) * 8192) / 60000) * int8) / 83));
            IF_SETSIZE(int46, 16384, 2, 2, 61145364);
        } else if ((varclient_1186 < (((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24))) {
            IF_SETHIDE(0, 61145144);
            if ((varclient_1186 == ((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23))) {
                SOUND_SYNTH(27367, 1, 0);
            };
        } else if ((varclient_1186 < ((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25))) {
            IF_SETHIDE(0, 61145145);
            IF_SETHIDE(0, 61145146);
            IF_SETHIDE(0, 61145147);
            IF_SETHIDE(0, 61145148);
            int8 = SCALE(((varclient_1186 - (((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24)) + 1), int25, 100);
            IF_SETTRANS((255 - ((int8 * 255) / 100)), 61145146);
            IF_SETTRANS((255 - ((int8 * 255) / 100)), 61145147);
            [int3, int4, int5] = script3273();
            IF_SETTEXT(`${inttostring(int3, 10)} : ${inttostring(int4, 10)}`, 61145145);
            if ((varclient_1186 == (((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24))) {
                SOUND_SYNTH(32188, 1, 0);
            };
            int0 = ((10000 + int38) + int39);
            int1 = (((10000 + int38) + int39) + int40);
            int37 = SCALE(int8, 100, (int1 - int0));
            if ((int8 == 0)) {
                varclient_1270 = int0;
            };
            if ((int1 >= int0)) {
                IF_SETTEXT(`+${inttostring(((int37 + 50) / 100), 10)}%`, 61145148);
            } else {
                IF_SETTEXT(`${inttostring(((int37 - 50) / 100), 10)}%`, 61145148);
            };
            IF_SETTEXT(`${inttostring((((int0 + int37) + 50) / 100), 10)}%`, 61145183);
            if (((((int0 + int37) + 50) / 100) != varclient_1270)) {
                SOUND_SYNTH(32188, 1, 0);
                varclient_1270 = (((int0 + int37) + 50) / 100);
            };
            int46 = (8192 + (((int0 - 10000) * 8192) / 60000));
            int46 = (int46 - (((((int1 - int0) * 8192) * (83 - int8)) / 60000) / 83));
            IF_SETSIZE(int46, 16384, 2, 2, 61145364);
        } else if ((varclient_1186 < (((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26))) {
            IF_SETHIDE(0, 61145149);
            if ((varclient_1186 == ((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25))) {
                SOUND_SYNTH(27367, 1, 0);
            };
        } else if ((varclient_1186 < ((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27))) {
            IF_SETHIDE(0, 61145150);
            int8 = SCALE(((varclient_1186 - (((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26)) + 1), int27, 100);
            int0 = (((10000 + int38) + int39) + int40);
            int1 = ((((10000 + int38) + int39) + int40) + varclient_1236);
            int37 = SCALE(int8, 100, (int1 - int0));
            if ((int8 == 0)) {
                varclient_1270 = int0;
            };
            if ((int1 >= int0)) {
                IF_SETTEXT(`+${inttostring(((int37 + 50) / 100), 10)}%`, 61145150);
                if ((((int37 + 50) / 100) != varclient_1270)) {
                    SOUND_SYNTH(32188, 1, 0);
                    varclient_1270 = ((int37 + 50) / 100);
                };
            } else {
                IF_SETTEXT(`${inttostring(((int37 - 50) / 100), 10)}%`, 61145150);
            };
            IF_SETTEXT(`${inttostring((((int0 + int37) + 50) / 100), 10)}%`, 61145183);
            if (((((int0 + int37) + 50) / 100) != varclient_1270)) {
                SOUND_SYNTH(32188, 1, 0);
                varclient_1270 = (((int0 + int37) + 50) / 100);
            };
            int46 = (8192 + (((int0 - 10000) * 8192) / 60000));
            int46 = (int46 - (((((int1 - int0) * 8192) * (83 - int8)) / 60000) / 83));
            IF_SETSIZE(int46, 16384, 2, 2, 61145364);
        } else if ((varclient_1186 < (((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28))) {
            IF_SETHIDE(0, 61145151);
            if ((varclient_1186 == ((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27))) {
                SOUND_SYNTH(27367, 1, 0);
            };
        } else if ((varclient_1186 < ((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29))) {
            IF_SETHIDE(0, 61145152);
            IF_SETHIDE(0, 61145153);
            IF_SETHIDE(0, 61145154);
            IF_SETHIDE(0, 61145155);
            int8 = SCALE(((varclient_1186 - (((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28)) + 1), int29, 100);
            IF_SETTRANS((255 - ((int8 * 255) / 100)), 61145153);
            IF_SETTRANS((255 - ((int8 * 255) / 100)), 61145154);
            if ((varclient_1320 == 2)) {
                IF_SETTEXT("High", 61145152);
            } else {
                IF_SETTEXT("Low", 61145152);
            };
            if ((SCALE(varclient_1320, 100, int8) != varclient_1270)) {
                SOUND_SYNTH(32188, 1, 0);
                varclient_1270 = SCALE(varclient_1320, 100, int8);
            };
            int0 = ((((10000 + int38) + int39) + int40) + varclient_1236);
            int1 = SCALE(((((10000 + int38) + int39) + int40) + varclient_1236), 10000, int41);
            int37 = SCALE(int8, 100, (int41 - 10000));
            if ((int1 >= int0)) {
                IF_SETTEXT(`+${inttostring(((int37 + 50) / 100), 10)}%`, 61145155);
            } else {
                IF_SETTEXT(`${inttostring(((int37 - 50) / 100), 10)}%`, 61145155);
            };
            IF_SETTEXT(`${inttostring((((int0 + int37) + 50) / 100), 10)}%`, 61145183);
            int46 = (8192 + (((int0 - 10000) * 8192) / 60000));
            int46 = (int46 - (((((int1 - int0) * 8192) * (83 - int8)) / 60000) / 83));
            IF_SETSIZE(int46, 16384, 2, 2, 61145364);
        } else if ((varclient_1186 < (((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30))) {
            IF_SETHIDE(0, 61145156);
            if ((varclient_1186 == ((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29))) {
                SOUND_SYNTH(27367, 1, 0);
            };
        } else if ((varclient_1186 < ((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31))) {
            IF_SETHIDE(0, 61145157);
            int8 = SCALE(((varclient_1186 - (((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30)) + 1), int31, 100);
            int0 = SCALE(((((10000 + int38) + int39) + int40) + varclient_1236), 10000, int41);
            int1 = SCALE((((((10000 + int38) + int39) + int40) + varclient_1236) + int42), 10000, int41);
            int37 = SCALE(int8, 100, int42);
            if ((int1 >= int0)) {
                IF_SETTEXT(`+${inttostring(((int37 + 50) / 100), 10)}%`, 61145157);
                if ((((int37 + 50) / 100) != varclient_1270)) {
                    SOUND_SYNTH(32188, 1, 0);
                    varclient_1270 = ((int37 + 50) / 100);
                };
            } else {
                IF_SETTEXT(`${inttostring(((int37 - 50) / 100), 10)}%`, 61145157);
            };
            IF_SETTEXT(`${inttostring((((int0 + SCALE(int8, 100, (int1 - int0))) + 50) / 100), 10)}%`, 61145183);
            if (((((int0 + int37) + 50) / 100) != varclient_1270)) {
                SOUND_SYNTH(32188, 1, 0);
                varclient_1270 = (((SCALE(int8, 100, (int1 - 10000)) / 3) + 50) / 100);
            };
            int46 = (8192 + (((int0 - 10000) * 8192) / 60000));
            int46 = (int46 - (((((int1 - int0) * 8192) * (83 - int8)) / 60000) / 83));
            IF_SETSIZE(int46, 16384, 2, 2, 61145364);
        } else if ((varclient_1186 < (((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32))) {
            IF_SETHIDE(0, 61145158);
            if ((varclient_1186 == ((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31))) {
                SOUND_SYNTH(27367, 1, 0);
            };
        } else if ((varclient_1186 < ((((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32) + int33))) {
            IF_SETHIDE(0, 61145159);
            IF_SETHIDE(0, 61145173);
            int8 = SCALE(((varclient_1186 - (((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32)) + 1), int33, 100);
            if ((varbitplayer_2365 != 0)) {
                [int6, int7] = script3266((varclient_1186 - (((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32)));
                if ((int6 == 1)) {
                    switch (int7) {
                        case 0: {
                            IF_SETHIDE(0, 61145169);
                            IF_SETGRAPHIC(2849, 61145169);
                            break;
                        }
                        case 1: {
                            IF_SETHIDE(0, 61145169);
                            IF_SETHIDE(0, 61145170);
                            IF_SETGRAPHIC(2850, 61145169);
                            IF_SETGRAPHIC(2849, 61145170);
                            break;
                        }
                        case 2: {
                            IF_SETHIDE(0, 61145169);
                            IF_SETHIDE(0, 61145170);
                            IF_SETHIDE(0, 61145171);
                            IF_SETGRAPHIC(2850, 61145170);
                            IF_SETGRAPHIC(2849, 61145171);
                            break;
                        }
                        case 3: {
                            IF_SETHIDE(0, 61145169);
                            IF_SETHIDE(0, 61145170);
                            IF_SETHIDE(0, 61145171);
                            IF_SETHIDE(0, 61145172);
                            IF_SETGRAPHIC(2850, 61145171);
                            IF_SETGRAPHIC(2849, 61145172);
                            break;
                        }
                        case 4: {
                            IF_SETHIDE(0, 61145169);
                            IF_SETHIDE(0, 61145170);
                            IF_SETHIDE(0, 61145171);
                            IF_SETHIDE(0, 61145172);
                            IF_SETGRAPHIC(2850, 61145172);
                            break;
                        }
                    };
                };
            } else {
                IF_SETTEXT("No deaths.", 61145173);
                varclient_1186 = (varclient_1186 + 2);
            };
            int0 = SCALE((((((10000 + int38) + int39) + int40) + varclient_1236) + int42), 10000, int41);
            int1 = SCALE(SCALE((((((10000 + int38) + int39) + int40) + varclient_1236) + int42), 10000, int41), 10000, int44);
            int37 = SCALE(int8, 100, (int44 - 10000));
            if ((int8 == 0)) {
                varclient_1270 = int0;
            };
            if ((int1 >= int0)) {
                IF_SETTEXT(`+${inttostring(((int37 + 50) / 100), 10)}%`, 61145173);
            } else {
                IF_SETTEXT(`${inttostring(((int37 - 50) / 100), 10)}%`, 61145173);
            };
            IF_SETTEXT(`${inttostring((((int0 + int37) + 50) / 100), 10)}%`, 61145183);
            if (((((int0 + int37) + 50) / 100) != varclient_1270)) {
                SOUND_SYNTH(32188, 1, 0);
                varclient_1270 = (((int0 + int37) + 50) / 100);
            };
            int46 = (8192 + (((int0 - 10000) * 8192) / 60000));
            int46 = (int46 - (((((int1 - int0) * 8192) * (83 - int8)) / 60000) / 83));
            IF_SETSIZE(int46, 16384, 2, 2, 61145364);
        } else if ((varclient_1186 < (((((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32) + int33) + int34))) {
            IF_SETHIDE(1, 61145130);
            IF_SETHIDE(0, 61145394);
            int8 = SCALE(((varclient_1186 - ((((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32) + int33)) + 1), int34, 100);
            if ((int8 == 0)) {
                varclient_1270 = 0;
            };
            if ((varclient_1321 > 0)) {
                IF_SETHIDE(0, 61145176);
                if ((int8 == 1)) {
                    SOUND_SYNTH(27367, 1, 0);
                };
                IF_SETTEXT(`Unbalanced party penalty: x${inttostring((((10000 - varclient_1321) + 50) / 100), 10)}%`, 61145356);
                if (((((10000 - varclient_1321) + 50) / 100) != varclient_1270)) {
                    SOUND_SYNTH(32188, 1, 0);
                    varclient_1270 = (((10000 - varclient_1321) + 50) / 100);
                };
            } else {
                varclient_1186 = (varclient_1186 + 2);
            };
            int0 = SCALE(SCALE((((((10000 + int38) + int39) + int40) + varclient_1236) + int42), 10000, int41), 10000, int44);
            int1 = SCALE(SCALE(SCALE((((((10000 + int38) + int39) + int40) + varclient_1236) + int42), 10000, int41), 10000, int44), 10000, (10000 - varclient_1321));
            IF_SETTEXT(`${inttostring((((int0 + SCALE(int8, 100, (int1 - int0))) + 50) / 100), 10)}%`, 61145183);
            int46 = (8192 + (((int0 - 10000) * 8192) / 60000));
            int46 = (int46 - (((((int1 - int0) * 8192) * (83 - int8)) / 60000) / 83));
            IF_SETSIZE(int46, 16384, 2, 2, 61145364);
        } else if ((varclient_1186 < ((((((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32) + int33) + int34) + int35))) {
            script949(0);
            IF_SETTEXT(TOSTRING_LOCALISED(varclient_1239, 1), 61145396);
            int8 = SCALE(((varclient_1186 - (((((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32) + int33) + int34)) + 1), int35, 100);
            int0 = varclient_1239;
            int1 = SCALE(SCALE(SCALE(SCALE((((((10000 + int38) + int39) + int40) + varclient_1236) + int42), 10000, int41), 10000, int44), 10000, (10000 - varclient_1321)), 10000, varclient_1239);
            if ((int8 == 0)) {
                varclient_1270 = int0;
            };
            if (((MODULO(int8, 5) == 0) && (IF_GETY(61145176) != 138))) {
                IF_SETPOSITION(IF_GETX(61145176), (IF_GETY(61145176) + 1), 0, 0, 61145176);
            };
            IF_SETSIZE(183, SCALE(80, 100, int8), 0, 0, 61145382);
            IF_SETTEXT(`${TOSTRING_LOCALISED((((int0 + SCALE(int8, 100, (int1 - int0))) + 5) / 10), 1)}%`, 61145396);
            if (((((int0 + SCALE(int8, 100, (int1 - int0))) + 5) / 10) != varclient_1270)) {
                SOUND_SYNTH(31378, 1, 0);
                varclient_1270 = (((int0 + SCALE(int8, 100, (int1 - int0))) + 5) / 10);
            };
        } else if ((varclient_1186 < (((((((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32) + int33) + int34) + int35) + int36))) {
            int8 = SCALE(((varclient_1186 - ((((((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32) + int33) + int34) + int35)) + 1), int36, 100);
            int0 = varclient_1239;
            int1 = SCALE(SCALE(SCALE(SCALE((((((10000 + int38) + int39) + int40) + varclient_1236) + int42), 10000, int41), 10000, int44), 10000, (10000 - varclient_1321)), 10000, varclient_1239);
            int45 = ((((int0 + SCALE(int8, 100, (int1 - int0))) + 5) / 100) * 2);
            if ((varclient_6516 == true)) {
                if (((2147483647 - int45) >= 0)) {
                    int45 = (int45 * 2);
                } else {
                    int45 = 2147483647;
                };
            };
            if ((int8 == 0)) {
                varclient_1270 = int0;
            };
            if ((varplayer_1097 < 2000000000)) {
                IF_SETTEXT(`${TOSTRING_LOCALISED(int45, 1)}%`, 61145398);
                if (((((int0 + SCALE(int8, 100, (int1 - int0))) + 5) / 100) != varclient_1270)) {
                    SOUND_SYNTH(26960, 1, 0);
                    varclient_1270 = (((int0 + SCALE(int8, 100, (int1 - int0))) + 5) / 100);
                };
            } else {
                IF_SETTEXT("Max tokens", 61145398);
            };
        };
        varclient_1186 = MIN((script3265() + (((((((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32) + int33) + int34) + int35) + int36)), (varclient_1186 + 1));
    };
    script3268();
    return;
}