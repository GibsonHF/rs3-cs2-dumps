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
    IF_SETTRANS(varclient_1185, comp(933, 1));
    IF_SETTRANS((255 - varclient_1185), comp(933, 173));
    IF_SETTRANS((255 - varclient_1185), comp(933, 174));
    IF_SETTRANS((255 - varclient_1185), comp(933, 175));
    var int38 = 0;
    if ((varclient_1188 == 1)) {
        int38 = 5000;
    } else if ((varclient_1188 == 2)) {
        int38 = 35000;
    } else if ((varclient_1188 == 3)) {
        int38 = 85000;
    };
    var int39 = SCALE(varclient_1195, 10000, 1000);
    [int3, int4, int5] = script3273();
    var int40 = int5;
    var int41 = script3274();
    var int42 = ((varbitplayer_24886 * 10) * 100);
    var int43 = 600;
    switch (varclient_1188) {
        case 3: {
            int43 = 600;
            break;
        }
        case 2: {
            int43 = 600;
            break;
        }
        default: {
            int43 = 600;
            break;
        }
    };
    var int44 = (10000 - (MIN(varbitplayer_2365, 4) * int43));
    if ((varbitplayer_24882 > 0)) {
        int44 = MIN(10000, (int44 + ((varbitplayer_24882 * 1) * 100)));
    };
    if (((script12953() == true) || (script14608(2899 as dbrow) == 1))) {
        int44 = 10000;
    };
    var int45 = 0;
    var int46 = 0;
    if (((varclient_1185 == 0) && (varclient_1192 != 0))) {
        if ((varclient_1186 < 350)) {
            if ((IF_GETTRANS(comp(933, 19)) <= 31)) {
                varclient_1189 = 7;
            } else if ((IF_GETTRANS(comp(933, 19)) > 220)) {
                varclient_1189 = -7;
            };
            IF_SETTRANS((IF_GETTRANS(comp(933, 19)) + varclient_1189), comp(933, 19));
        } else if (((varclient_1186 >= 350) && (varclient_1186 < 400))) {
            if ((varclient_1186 == 350)) {
                IF_SETTRANS(255, comp(933, 19));
            };
            if ((IF_GETTRANS(comp(933, 306)) <= 31)) {
                varclient_1189 = 7;
            } else if ((IF_GETTRANS(comp(933, 306)) > 220)) {
                varclient_1189 = -7;
            };
            IF_SETTRANS((IF_GETTRANS(comp(933, 306)) + varclient_1189), comp(933, 306));
        } else if (((varclient_1186 >= 400) && (varclient_1186 < 1350))) {
            if ((varclient_1186 == 400)) {
                IF_SETTRANS(255, comp(933, 306));
            };
            if ((IF_GETTRANS(comp(933, 42)) <= 31)) {
                varclient_1189 = 7;
            } else if ((IF_GETTRANS(comp(933, 42)) > 220)) {
                varclient_1189 = -7;
            };
            IF_SETTRANS((IF_GETTRANS(comp(933, 42)) + varclient_1189), comp(933, 42));
        } else if (((varclient_1186 >= 1350) && (varclient_1186 < 1600))) {
            if ((varclient_1186 == 1350)) {
                IF_SETTRANS(255, comp(933, 42));
            };
            if ((IF_GETTRANS(comp(933, 306)) <= 31)) {
                varclient_1189 = 7;
            } else if ((IF_GETTRANS(comp(933, 306)) > 220)) {
                varclient_1189 = -7;
            };
            IF_SETTRANS((IF_GETTRANS(comp(933, 306)) + varclient_1189), comp(933, 306));
        };
        if ((varclient_1186 < int9)) {
            IF_SETHIDE(false, comp(933, 28));
            IF_SETHIDE(false, comp(933, 6));
            if ((varclient_1186 == 0)) {
                SOUND_SYNTH(27367, 1, 0);
            };
        } else if ((varclient_1186 < (int9 + int10))) {
            IF_SETHIDE(false, comp(933, 20));
            IF_SETHIDE(false, comp(933, 211));
            IF_SETTEXT(`Floor ${inttostring(varclient_1319, 10)}:`, comp(933, 211));
            IF_SETHIDE(false, comp(933, 102));
            IF_SETSIZE((IF_GETWIDTH(comp(933, 103)) + 5), (IF_GETHEIGHT(comp(933, 103)) + 5), 0, 0, comp(933, 103));
            if ((varclient_1186 == int9)) {
                SOUND_SYNTH(27367, 1, 0);
            };
            IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(933, 103)) + 30)), comp(933, 103));
        } else if ((varclient_1186 < ((int9 + int10) + int11))) {
            int8 = SCALE(((varclient_1186 - (int9 + int10)) + 1), int11, 100);
            if ((int8 == 0)) {
                varclient_1270 = 0;
            };
            IF_SETHIDE(false, comp(933, 212));
            IF_SETTEXT(inttostring(SCALE(((varclient_1237 + 5) / 10), 100, int8), 10), comp(933, 212));
            if ((SCALE(((varclient_1237 + 5) / 10), 100, int8) != varclient_1270)) {
                SOUND_SYNTH(32188, 1, 0);
                varclient_1270 = SCALE(((varclient_1237 + 5) / 10), 100, int8);
            };
        } else if ((varclient_1186 < (((int9 + int10) + int11) + int12))) {
            IF_SETHIDE(false, comp(933, 26));
            int8 = SCALE(((varclient_1186 - ((int9 + int10) + int11)) + 1), int12, 100);
            IF_SETTRANS((255 - ((int8 * 255) / 100)), comp(933, 26));
        } else if ((varclient_1186 < ((((int9 + int10) + int11) + int12) + int13))) {
            IF_SETHIDE(false, comp(933, 22));
            IF_SETHIDE(false, comp(933, 223));
            IF_SETTEXT(`Level ${inttostring(varclient_8412, 10)}:`, comp(933, 223));
            IF_SETHIDE(false, comp(933, 100));
            IF_SETSIZE((IF_GETWIDTH(comp(933, 101)) + 5), (IF_GETHEIGHT(comp(933, 101)) + 5), 0, 0, comp(933, 101));
            if ((varclient_1186 == (((int9 + int10) + int11) + int12))) {
                SOUND_SYNTH(27367, 1, 0);
            };
            IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(933, 101)) + 30)), comp(933, 101));
        } else if ((varclient_1186 < (((((int9 + int10) + int11) + int12) + int13) + int14))) {
            int8 = SCALE(((varclient_1186 - ((((int9 + int10) + int11) + int12) + int13)) + 1), int14, 100);
            if ((int8 == 0)) {
                varclient_1270 = 0;
            };
            IF_SETHIDE(false, comp(933, 224));
            IF_SETTEXT(inttostring(SCALE(((varclient_8411 + 5) / 10), 100, int8), 10), comp(933, 224));
            if ((SCALE(((varclient_8411 + 5) / 10), 100, int8) != varclient_1270)) {
                SOUND_SYNTH(32188, 1, 0);
                varclient_1270 = SCALE(((varclient_8411 + 5) / 10), 100, int8);
            };
        } else if ((varclient_1186 < ((((((int9 + int10) + int11) + int12) + int13) + int14) + int15))) {
            IF_SETHIDE(false, comp(933, 27));
            int8 = SCALE(((varclient_1186 - (((((int9 + int10) + int11) + int12) + int13) + int14)) + 1), int15, 100);
            IF_SETTRANS((255 - ((int8 * 255) / 100)), comp(933, 27));
        } else if ((varclient_1186 < (((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16))) {
            int8 = SCALE(((varclient_1186 - ((((((int9 + int10) + int11) + int12) + int13) + int14) + int15)) + 1), int16, 100);
            IF_SETHIDE(false, comp(933, 24));
            IF_SETHIDE(false, comp(933, 235));
            IF_SETHIDE(false, comp(933, 98));
            IF_SETSIZE((IF_GETWIDTH(comp(933, 99)) + 5), (IF_GETHEIGHT(comp(933, 99)) + 5), 0, 0, comp(933, 99));
            if ((varclient_1186 == ((((((int9 + int10) + int11) + int12) + int13) + int14) + int15))) {
                SOUND_SYNTH(27367, 1, 0);
            };
            IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(933, 99)) + 30)), comp(933, 99));
        } else if ((varclient_1186 < ((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17))) {
            int8 = SCALE(((varclient_1186 - (((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16)) + 1), int17, 100);
            if ((int8 == 0)) {
                varclient_1270 = 0;
            };
            IF_SETHIDE(false, comp(933, 236));
            IF_SETTEXT(inttostring(SCALE(((varclient_1239 + 5) / 10), 100, int8), 10), comp(933, 236));
            if ((SCALE(((varclient_1239 + 5) / 10), 100, int8) != varclient_1270)) {
                SOUND_SYNTH(32188, 1, 0);
                varclient_1270 = SCALE(((varclient_1239 + 5) / 10), 100, int8);
            };
        } else if ((varclient_1186 < (((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18))) {
            IF_SETHIDE(true, comp(933, 19));
            int8 = SCALE(((varclient_1186 - ((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17)) + 1), int18, 100);
            if ((int8 == 0)) {
                varclient_1270 = 0;
            };
            IF_SETHIDE(false, comp(933, 96));
            IF_SETTEXT(TOSTRING_LOCALISED(SCALE(((varclient_1239 + 5) / 10), 100, int8), 1), comp(933, 308));
            if ((SCALE(((varclient_1239 + 5) / 10), 100, int8) != varclient_1270)) {
                SOUND_SYNTH(31378, 1, 0);
                varclient_1270 = SCALE(((varclient_1239 + 5) / 10), 100, int8);
            };
        } else if ((varclient_1186 < ((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19))) {
            IF_SETTRANS(255, comp(933, 306));
            IF_SETHIDE(false, comp(933, 86));
            IF_SETHIDE(false, comp(933, 39));
            IF_SETHIDE(false, comp(933, 42));
            if ((varclient_1186 == (((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18))) {
                SOUND_SYNTH(27367, 1, 0);
            };
        } else if ((varclient_1186 < (((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20))) {
            IF_SETHIDE(false, comp(933, 43));
            if ((varclient_1186 == ((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19))) {
                SOUND_SYNTH(27367, 1, 0);
            };
        } else if ((varclient_1186 < ((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21))) {
            IF_SETHIDE(false, comp(933, 44));
            IF_SETHIDE(false, comp(933, 45));
            IF_SETHIDE(false, comp(933, 46));
            IF_SETHIDE(false, comp(933, 47));
            IF_SETHIDE(false, comp(933, 48));
            IF_SETHIDE(false, comp(933, 49));
            IF_SETHIDE(false, comp(933, 51));
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
                int1 = (10000 + 5000);
                if ((int8 == 33)) {
                    varclient_1270 = int0;
                    SOUND_SYNTH(32430, 1, 0);
                };
                IF_SETTRANS(MIN(200, (255 - ((int8 * 255) / 100))), comp(933, 44));
                IF_SETTEXT(`+${inttostring((((SCALE(int8, 100, (int1 - 10000)) / 1) + 50) / 100), 10)}%`, comp(933, 51));
                if (((((SCALE(int8, 100, (int1 - 10000)) / 1) + 50) / 100) != varclient_1270)) {
                    SOUND_SYNTH(32188, 1, 0);
                    varclient_1270 = (((SCALE(int8, 100, (int1 - 10000)) / 1) + 50) / 100);
                };
                IF_SETTEXT(`${inttostring((((int0 + (SCALE(int8, 100, (int1 - int0)) / 1)) + 50) / 100), 10)}%`, comp(933, 95));
                int46 = (8192 + (((int1 - 10000) * 8192) / 60000));
                int46 = (8192 - (((int46 - 8192) * (83 - int8)) / 83));
                IF_SETSIZE(int46, 16384, 2, 2, comp(933, 276));
                if ((varclient_1186 == 475)) {
                    SOUND_SYNTH(32430, 1, 0);
                };
            } else if (((varclient_1186 < ((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + ((int21 / 3) * 2))) && (varclient_1188 > 1))) {
                if (((varclient_1186 == ((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + ((int21 / 3) * 2))) && (varclient_1188 > 1))) {
                    SOUND_SYNTH(27367, 1, 0);
                };
                int0 = (10000 + 5000);
                int1 = (10000 + 35000);
                if ((int8 == 33)) {
                    varclient_1270 = int0;
                    SOUND_SYNTH(32430, 1, 0);
                };
                IF_SETTRANS(MIN(200, (((int8 / 2) * 255) / 100)), comp(933, 44));
                IF_SETTRANS(MIN(200, (255 - ((int8 * 255) / 100))), comp(933, 45));
                IF_SETTEXT(`+${inttostring((((SCALE(int8, 100, (int1 - 10000)) / 2) + 50) / 100), 10)}%`, comp(933, 51));
                if (((((SCALE(int8, 100, (int1 - 10000)) / 2) + 50) / 100) != varclient_1270)) {
                    SOUND_SYNTH(32188, 1, 0);
                    varclient_1270 = (((SCALE(int8, 100, (int1 - 10000)) / 2) + 50) / 100);
                };
                IF_SETTEXT(`${inttostring((((int0 + (SCALE(int8, 100, (int1 - int0)) / 2)) + 50) / 100), 10)}%`, comp(933, 95));
                int46 = (8192 + (((int1 - 10000) * 8192) / 60000));
                int46 = (8192 - (((int46 - 8192) * (83 - int8)) / 83));
                IF_SETSIZE(int46, 16384, 2, 2, comp(933, 276));
                if ((varclient_1186 == 525)) {
                    SOUND_SYNTH(32430, 1, 0);
                };
            } else if ((varclient_1188 > 2)) {
                int0 = (10000 + 35000);
                int1 = (10000 + 85000);
                if ((int8 == 66)) {
                    varclient_1270 = int0;
                    SOUND_SYNTH(32430, 1, 0);
                };
                IF_SETTRANS(MIN(200, (((int8 / 3) * 255) / 100)), comp(933, 45));
                IF_SETTRANS(MIN(200, (255 - ((int8 * 255) / 100))), comp(933, 46));
                IF_SETTEXT(`+${inttostring((((SCALE(int8, 100, (int1 - 10000)) / 3) + 50) / 100), 10)}%`, comp(933, 51));
                if (((((SCALE(int8, 100, (int1 - 10000)) / 3) + 50) / 100) != varclient_1270)) {
                    SOUND_SYNTH(32188, 1, 0);
                    varclient_1270 = (((SCALE(int8, 100, (int1 - 10000)) / 3) + 50) / 100);
                };
                IF_SETTEXT(`${inttostring((((int0 + (SCALE(int8, 100, (int1 - int0)) / 3)) + 50) / 100), 10)}%`, comp(933, 95));
                int46 = (8192 + (((int1 - 10000) * 8192) / 60000));
                int46 = (8192 - (((int46 - 8192) * (83 - int8)) / 83));
                IF_SETSIZE(int46, 16384, 2, 2, comp(933, 276));
                if ((varclient_1186 == 575)) {
                    SOUND_SYNTH(32430, 1, 0);
                };
            };
        } else if ((varclient_1186 < (((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22))) {
            IF_SETHIDE(false, comp(933, 52));
            if ((varclient_1186 == ((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21))) {
                SOUND_SYNTH(27367, 1, 0);
            };
        } else if ((varclient_1186 < ((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23))) {
            int8 = SCALE(((varclient_1186 - (((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22)) + 1), int23, 100);
            IF_SETHIDE(false, comp(933, 53));
            IF_SETHIDE(false, comp(933, 55));
            IF_SETSIZE(SCALE(SCALE(varclient_1195, 10000, 16384), 100, int8), 16384, 2, 2, comp(933, 256));
            int0 = (10000 + int38);
            int1 = ((10000 + int38) + int39);
            int37 = SCALE(int8, 100, (int1 - int0));
            if ((int8 == 0)) {
                varclient_1270 = int0;
            };
            if ((int1 >= int0)) {
                IF_SETTEXT(`+${inttostring(((int37 + 50) / 100), 10)}%`, comp(933, 55));
            } else {
                IF_SETTEXT(`${inttostring(((int37 - 50) / 100), 10)}%`, comp(933, 55));
            };
            IF_SETTEXT(`${inttostring((((int0 + int37) + 50) / 100), 10)}%`, comp(933, 95));
            if (((((int0 + int37) + 50) / 100) != varclient_1270)) {
                SOUND_SYNTH(32188, 1, 0);
                varclient_1270 = (((int0 + SCALE(int8, 100, (int1 - int0))) + 50) / 100);
            };
            int46 = (8192 + (((int0 - 10000) * 8192) / 60000));
            int46 = (int46 + (((((int1 - int0) * 8192) / 60000) * int8) / 83));
            IF_SETSIZE(int46, 16384, 2, 2, comp(933, 276));
        } else if ((varclient_1186 < (((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24))) {
            IF_SETHIDE(false, comp(933, 56));
            if ((varclient_1186 == ((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23))) {
                SOUND_SYNTH(27367, 1, 0);
            };
        } else if ((varclient_1186 < ((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25))) {
            IF_SETHIDE(false, comp(933, 57));
            IF_SETHIDE(false, comp(933, 58));
            IF_SETHIDE(false, comp(933, 59));
            IF_SETHIDE(false, comp(933, 60));
            int8 = SCALE(((varclient_1186 - (((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24)) + 1), int25, 100);
            IF_SETTRANS((255 - ((int8 * 255) / 100)), comp(933, 58));
            IF_SETTRANS((255 - ((int8 * 255) / 100)), comp(933, 59));
            [int3, int4, int5] = script3273();
            IF_SETTEXT(`${inttostring(int3, 10)} : ${inttostring(int4, 10)}`, comp(933, 57));
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
                IF_SETTEXT(`+${inttostring(((int37 + 50) / 100), 10)}%`, comp(933, 60));
            } else {
                IF_SETTEXT(`${inttostring(((int37 - 50) / 100), 10)}%`, comp(933, 60));
            };
            IF_SETTEXT(`${inttostring((((int0 + int37) + 50) / 100), 10)}%`, comp(933, 95));
            if (((((int0 + int37) + 50) / 100) != varclient_1270)) {
                SOUND_SYNTH(32188, 1, 0);
                varclient_1270 = (((int0 + int37) + 50) / 100);
            };
            int46 = (8192 + (((int0 - 10000) * 8192) / 60000));
            int46 = (int46 - (((((int1 - int0) * 8192) * (83 - int8)) / 60000) / 83));
            IF_SETSIZE(int46, 16384, 2, 2, comp(933, 276));
        } else if ((varclient_1186 < (((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26))) {
            IF_SETHIDE(false, comp(933, 61));
            if ((varclient_1186 == ((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25))) {
                SOUND_SYNTH(27367, 1, 0);
            };
        } else if ((varclient_1186 < ((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27))) {
            IF_SETHIDE(false, comp(933, 62));
            int8 = SCALE(((varclient_1186 - (((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26)) + 1), int27, 100);
            int0 = (((10000 + int38) + int39) + int40);
            int1 = ((((10000 + int38) + int39) + int40) + varclient_1236);
            int37 = SCALE(int8, 100, (int1 - int0));
            if ((int8 == 0)) {
                varclient_1270 = int0;
            };
            if ((int1 >= int0)) {
                IF_SETTEXT(`+${inttostring(((int37 + 50) / 100), 10)}%`, comp(933, 62));
                if ((((int37 + 50) / 100) != varclient_1270)) {
                    SOUND_SYNTH(32188, 1, 0);
                    varclient_1270 = ((int37 + 50) / 100);
                };
            } else {
                IF_SETTEXT(`${inttostring(((int37 - 50) / 100), 10)}%`, comp(933, 62));
            };
            IF_SETTEXT(`${inttostring((((int0 + int37) + 50) / 100), 10)}%`, comp(933, 95));
            if (((((int0 + int37) + 50) / 100) != varclient_1270)) {
                SOUND_SYNTH(32188, 1, 0);
                varclient_1270 = (((int0 + int37) + 50) / 100);
            };
            int46 = (8192 + (((int0 - 10000) * 8192) / 60000));
            int46 = (int46 - (((((int1 - int0) * 8192) * (83 - int8)) / 60000) / 83));
            IF_SETSIZE(int46, 16384, 2, 2, comp(933, 276));
        } else if ((varclient_1186 < (((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28))) {
            IF_SETHIDE(false, comp(933, 63));
            if ((varclient_1186 == ((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27))) {
                SOUND_SYNTH(27367, 1, 0);
            };
        } else if ((varclient_1186 < ((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29))) {
            IF_SETHIDE(false, comp(933, 64));
            IF_SETHIDE(false, comp(933, 65));
            IF_SETHIDE(false, comp(933, 66));
            IF_SETHIDE(false, comp(933, 67));
            int8 = SCALE(((varclient_1186 - (((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28)) + 1), int29, 100);
            IF_SETTRANS((255 - ((int8 * 255) / 100)), comp(933, 65));
            IF_SETTRANS((255 - ((int8 * 255) / 100)), comp(933, 66));
            if ((varclient_1320 == 2)) {
                IF_SETTEXT("High", comp(933, 64));
            } else {
                IF_SETTEXT("Low", comp(933, 64));
            };
            if ((SCALE(varclient_1320, 100, int8) != varclient_1270)) {
                SOUND_SYNTH(32188, 1, 0);
                varclient_1270 = SCALE(varclient_1320, 100, int8);
            };
            int0 = ((((10000 + int38) + int39) + int40) + varclient_1236);
            int1 = SCALE(((((10000 + int38) + int39) + int40) + varclient_1236), 10000, int41);
            int37 = SCALE(int8, 100, (int41 - 10000));
            if ((int1 >= int0)) {
                IF_SETTEXT(`+${inttostring(((int37 + 50) / 100), 10)}%`, comp(933, 67));
            } else {
                IF_SETTEXT(`${inttostring(((int37 - 50) / 100), 10)}%`, comp(933, 67));
            };
            IF_SETTEXT(`${inttostring((((int0 + int37) + 50) / 100), 10)}%`, comp(933, 95));
            int46 = (8192 + (((int0 - 10000) * 8192) / 60000));
            int46 = (int46 - (((((int1 - int0) * 8192) * (83 - int8)) / 60000) / 83));
            IF_SETSIZE(int46, 16384, 2, 2, comp(933, 276));
        } else if ((varclient_1186 < (((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30))) {
            IF_SETHIDE(false, comp(933, 68));
            if ((varclient_1186 == ((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29))) {
                SOUND_SYNTH(27367, 1, 0);
            };
        } else if ((varclient_1186 < ((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31))) {
            IF_SETHIDE(false, comp(933, 69));
            int8 = SCALE(((varclient_1186 - (((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30)) + 1), int31, 100);
            int0 = SCALE(((((10000 + int38) + int39) + int40) + varclient_1236), 10000, int41);
            int1 = SCALE((((((10000 + int38) + int39) + int40) + varclient_1236) + int42), 10000, int41);
            int37 = SCALE(int8, 100, int42);
            if ((int1 >= int0)) {
                IF_SETTEXT(`+${inttostring(((int37 + 50) / 100), 10)}%`, comp(933, 69));
                if ((((int37 + 50) / 100) != varclient_1270)) {
                    SOUND_SYNTH(32188, 1, 0);
                    varclient_1270 = ((int37 + 50) / 100);
                };
            } else {
                IF_SETTEXT(`${inttostring(((int37 - 50) / 100), 10)}%`, comp(933, 69));
            };
            IF_SETTEXT(`${inttostring((((int0 + SCALE(int8, 100, (int1 - int0))) + 50) / 100), 10)}%`, comp(933, 95));
            if (((((int0 + int37) + 50) / 100) != varclient_1270)) {
                SOUND_SYNTH(32188, 1, 0);
                varclient_1270 = (((SCALE(int8, 100, (int1 - 10000)) / 3) + 50) / 100);
            };
            int46 = (8192 + (((int0 - 10000) * 8192) / 60000));
            int46 = (int46 - (((((int1 - int0) * 8192) * (83 - int8)) / 60000) / 83));
            IF_SETSIZE(int46, 16384, 2, 2, comp(933, 276));
        } else if ((varclient_1186 < (((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32))) {
            IF_SETHIDE(false, comp(933, 70));
            if ((varclient_1186 == ((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31))) {
                SOUND_SYNTH(27367, 1, 0);
            };
        } else if ((varclient_1186 < ((((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32) + int33))) {
            IF_SETHIDE(false, comp(933, 71));
            IF_SETHIDE(false, comp(933, 85));
            int8 = SCALE(((varclient_1186 - (((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32)) + 1), int33, 100);
            if ((varbitplayer_2365 != 0)) {
                [int6, int7] = script3266((varclient_1186 - (((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32)));
                if ((int6 == 1)) {
                    switch (int7) {
                        case 0: {
                            IF_SETHIDE(false, comp(933, 81));
                            stack(2849);
                            stack(61145169);
                            IF_SETGRAPHIC();
                            break;
                        }
                        case 1: {
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
                        case 2: {
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
                        case 3: {
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
                        case 4: {
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
                };
            } else {
                IF_SETTEXT("No deaths.", comp(933, 85));
                varclient_1186 = (varclient_1186 + 2);
            };
            int0 = SCALE((((((10000 + int38) + int39) + int40) + varclient_1236) + int42), 10000, int41);
            int1 = SCALE(SCALE((((((10000 + int38) + int39) + int40) + varclient_1236) + int42), 10000, int41), 10000, int44);
            int37 = SCALE(int8, 100, (int44 - 10000));
            if ((int8 == 0)) {
                varclient_1270 = int0;
            };
            if ((int1 >= int0)) {
                IF_SETTEXT(`+${inttostring(((int37 + 50) / 100), 10)}%`, comp(933, 85));
            } else {
                IF_SETTEXT(`${inttostring(((int37 - 50) / 100), 10)}%`, comp(933, 85));
            };
            IF_SETTEXT(`${inttostring((((int0 + int37) + 50) / 100), 10)}%`, comp(933, 95));
            if (((((int0 + int37) + 50) / 100) != varclient_1270)) {
                SOUND_SYNTH(32188, 1, 0);
                varclient_1270 = (((int0 + int37) + 50) / 100);
            };
            int46 = (8192 + (((int0 - 10000) * 8192) / 60000));
            int46 = (int46 - (((((int1 - int0) * 8192) * (83 - int8)) / 60000) / 83));
            IF_SETSIZE(int46, 16384, 2, 2, comp(933, 276));
        } else if ((varclient_1186 < (((((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32) + int33) + int34))) {
            IF_SETHIDE(true, comp(933, 42));
            IF_SETHIDE(false, comp(933, 306));
            int8 = SCALE(((varclient_1186 - ((((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32) + int33)) + 1), int34, 100);
            if ((int8 == 0)) {
                varclient_1270 = 0;
            };
            if ((varclient_1321 > 0)) {
                IF_SETHIDE(false, comp(933, 88));
                if ((int8 == 1)) {
                    SOUND_SYNTH(27367, 1, 0);
                };
                IF_SETTEXT(`Unbalanced party penalty: x${inttostring((((10000 - varclient_1321) + 50) / 100), 10)}%`, comp(933, 268));
                if (((((10000 - varclient_1321) + 50) / 100) != varclient_1270)) {
                    SOUND_SYNTH(32188, 1, 0);
                    varclient_1270 = (((10000 - varclient_1321) + 50) / 100);
                };
            } else {
                varclient_1186 = (varclient_1186 + 2);
            };
            int0 = SCALE(SCALE((((((10000 + int38) + int39) + int40) + varclient_1236) + int42), 10000, int41), 10000, int44);
            int1 = SCALE(SCALE(SCALE((((((10000 + int38) + int39) + int40) + varclient_1236) + int42), 10000, int41), 10000, int44), 10000, (10000 - varclient_1321));
            IF_SETTEXT(`${inttostring((((int0 + SCALE(int8, 100, (int1 - int0))) + 50) / 100), 10)}%`, comp(933, 95));
            int46 = (8192 + (((int0 - 10000) * 8192) / 60000));
            int46 = (int46 - (((((int1 - int0) * 8192) * (83 - int8)) / 60000) / 83));
            IF_SETSIZE(int46, 16384, 2, 2, comp(933, 276));
        } else if ((varclient_1186 < ((((((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32) + int33) + int34) + int35))) {
            script949(false);
            IF_SETTEXT(TOSTRING_LOCALISED(varclient_1239, 1), comp(933, 308));
            int8 = SCALE(((varclient_1186 - (((((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32) + int33) + int34)) + 1), int35, 100);
            int0 = varclient_1239;
            int1 = SCALE(SCALE(SCALE(SCALE((((((10000 + int38) + int39) + int40) + varclient_1236) + int42), 10000, int41), 10000, int44), 10000, (10000 - varclient_1321)), 10000, varclient_1239);
            if ((int8 == 0)) {
                varclient_1270 = int0;
            };
            if (((MODULO(int8, 5) == 0) && (IF_GETY(comp(933, 88)) != 138))) {
                IF_SETPOSITION(IF_GETX(comp(933, 88)), (IF_GETY(comp(933, 88)) + 1), 0, 0, comp(933, 88));
            };
            IF_SETSIZE(183, SCALE(80, 100, int8), 0, 0, comp(933, 294));
            IF_SETTEXT(`${TOSTRING_LOCALISED((((int0 + SCALE(int8, 100, (int1 - int0))) + 5) / 10), 1)}%`, comp(933, 308));
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
                IF_SETTEXT(`${TOSTRING_LOCALISED(int45, 1)}%`, comp(933, 310));
                if (((((int0 + SCALE(int8, 100, (int1 - int0))) + 5) / 100) != varclient_1270)) {
                    SOUND_SYNTH(26960, 1, 0);
                    varclient_1270 = (((int0 + SCALE(int8, 100, (int1 - int0))) + 5) / 100);
                };
            } else {
                IF_SETTEXT("Max tokens", comp(933, 310));
            };
        };
        varclient_1186 = MIN((script3265() + (((((((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32) + int33) + int34) + int35) + int36)), (varclient_1186 + 1));
    };
    script3268();
    return;
}