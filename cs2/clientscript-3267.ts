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
    IF_SETTRANS((255 - varclient_1185), comp(933, 300));
    IF_SETTRANS((255 - varclient_1185), comp(933, 301));
    IF_SETTRANS((255 - varclient_1185), comp(933, 302));
    var int38 = 0;
    if ((varclient_1188 == 2)) {
        int38 = 792;
    } else if ((varclient_1188 == 3)) {
        int38 = 1583;
    };
    var int39 = SCALE(varclient_1195, 10000, 1267);
    [int3, int4, int5] = script3273();
    var int40 = int5;
    var int41 = script3274();
    var int42 = (10000 - (MIN(varbitplayer_2365, 6) * 1000));
    var int43 = 0;
    if (((script12953() == true) || (script14608(2899 as dbrow) == 1))) {
        int42 = 10000;
    };
    if (((varclient_1185 == 0) && (varclient_1192 != 0))) {
        if ((varclient_1186 < 350)) {
            if ((IF_GETTRANS(comp(933, 18)) <= 31)) {
                varclient_1189 = 7;
            } else if ((IF_GETTRANS(comp(933, 18)) > 220)) {
                varclient_1189 = -7;
            };
            IF_SETTRANS((IF_GETTRANS(comp(933, 18)) + varclient_1189), comp(933, 18));
        } else if (((varclient_1186 >= 350) && (varclient_1186 < 400))) {
            if ((varclient_1186 == 350)) {
                IF_SETTRANS(255, comp(933, 18));
            };
            if ((IF_GETTRANS(comp(933, 220)) <= 31)) {
                varclient_1189 = 7;
            } else if ((IF_GETTRANS(comp(933, 220)) > 220)) {
                varclient_1189 = -7;
            };
            IF_SETTRANS((IF_GETTRANS(comp(933, 220)) + varclient_1189), comp(933, 220));
        } else if (((varclient_1186 >= 400) && (varclient_1186 < 1350))) {
            if ((varclient_1186 == 400)) {
                IF_SETTRANS(255, comp(933, 220));
            };
            if ((IF_GETTRANS(comp(933, 86)) <= 31)) {
                varclient_1189 = 7;
            } else if ((IF_GETTRANS(comp(933, 86)) > 220)) {
                varclient_1189 = -7;
            };
            IF_SETTRANS((IF_GETTRANS(comp(933, 86)) + varclient_1189), comp(933, 86));
        } else if (((varclient_1186 >= 1350) && (varclient_1186 < 1600))) {
            if ((varclient_1186 == 1350)) {
                IF_SETTRANS(255, comp(933, 86));
            };
            if ((IF_GETTRANS(comp(933, 220)) <= 31)) {
                varclient_1189 = 7;
            } else if ((IF_GETTRANS(comp(933, 220)) > 220)) {
                varclient_1189 = -7;
            };
            IF_SETTRANS((IF_GETTRANS(comp(933, 220)) + varclient_1189), comp(933, 220));
        };
        if ((varclient_1186 < int9)) {
            IF_SETHIDE(false, comp(933, 63));
            IF_SETHIDE(false, comp(933, 6));
            if ((varclient_1186 == 0)) {
                SOUND_SYNTH(27367, 1, 0);
            };
        } else if ((varclient_1186 < (int9 + int10))) {
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
            if ((varclient_1186 == int9)) {
                SOUND_SYNTH(27367, 1, 0);
            };
            IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(933, 230)) + 30)), comp(933, 230));
        } else if ((varclient_1186 < ((int9 + int10) + int11))) {
            int8 = SCALE(((varclient_1186 - (int9 + int10)) + 1), int11, 100);
            if ((int8 == 0)) {
                varclient_1270 = 0;
            };
            IF_SETHIDE(false, comp(933, 32));
            IF_SETTEXT(inttostring(SCALE(((varclient_1237 + 5) / 10), 100, int8), 10), comp(933, 32));
            if ((SCALE(((varclient_1237 + 5) / 10), 100, int8) != varclient_1270)) {
                SOUND_SYNTH(32188, 1, 0);
                varclient_1270 = SCALE(((varclient_1237 + 5) / 10), 100, int8);
            };
        } else if ((varclient_1186 < (((int9 + int10) + int11) + int12))) {
            IF_SETHIDE(false, comp(933, 61));
            int8 = SCALE(((varclient_1186 - ((int9 + int10) + int11)) + 1), int12, 100);
            IF_SETTRANS((255 - ((int8 * 255) / 100)), comp(933, 61));
        } else if ((varclient_1186 < ((((int9 + int10) + int11) + int12) + int13))) {
            IF_SETHIDE(false, comp(933, 33));
            IF_SETHIDE(false, comp(933, 45));
            if ((MAP_MEMBERS() == 1)) {
                IF_SETTEXT(`Prestige ${inttostring(MIN(60, MAX(varbitplayer_2361, varbitplayer_2362)), 10)}`, comp(933, 45));
            } else {
                IF_SETTEXT(`Prestige ${inttostring(MIN(35, MAX(varbitplayer_2361, varbitplayer_2362)), 10)}`, comp(933, 45));
            };
            IF_SETHIDE(false, comp(933, 227));
            IF_SETSIZE((IF_GETWIDTH(comp(933, 228)) + 5), (IF_GETHEIGHT(comp(933, 228)) + 5), 0, 0, comp(933, 228));
            if ((varclient_1186 == (((int9 + int10) + int11) + int12))) {
                SOUND_SYNTH(27367, 1, 0);
            };
            IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(933, 228)) + 30)), comp(933, 228));
        } else if ((varclient_1186 < (((((int9 + int10) + int11) + int12) + int13) + int14))) {
            int8 = SCALE(((varclient_1186 - ((((int9 + int10) + int11) + int12) + int13)) + 1), int14, 100);
            if ((int8 == 0)) {
                varclient_1270 = 0;
            };
            IF_SETHIDE(false, comp(933, 46));
            IF_SETTEXT(inttostring(SCALE(((varclient_1238 + 5) / 10), 100, int8), 10), comp(933, 46));
            if ((SCALE(((varclient_1238 + 5) / 10), 100, int8) != varclient_1270)) {
                SOUND_SYNTH(32188, 1, 0);
                varclient_1270 = SCALE(((varclient_1238 + 5) / 10), 100, int8);
            };
        } else if ((varclient_1186 < ((((((int9 + int10) + int11) + int12) + int13) + int14) + int15))) {
            IF_SETHIDE(false, comp(933, 62));
            int8 = SCALE(((varclient_1186 - (((((int9 + int10) + int11) + int12) + int13) + int14)) + 1), int15, 100);
            IF_SETTRANS((255 - ((int8 * 255) / 100)), comp(933, 62));
        } else if ((varclient_1186 < (((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16))) {
            int8 = SCALE(((varclient_1186 - ((((((int9 + int10) + int11) + int12) + int13) + int14) + int15)) + 1), int16, 100);
            IF_SETHIDE(false, comp(933, 47));
            IF_SETHIDE(false, comp(933, 59));
            IF_SETHIDE(false, comp(933, 225));
            IF_SETSIZE((IF_GETWIDTH(comp(933, 226)) + 5), (IF_GETHEIGHT(comp(933, 226)) + 5), 0, 0, comp(933, 226));
            if ((varclient_1186 == ((((((int9 + int10) + int11) + int12) + int13) + int14) + int15))) {
                SOUND_SYNTH(27367, 1, 0);
            };
            IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(933, 226)) + 30)), comp(933, 226));
        } else if ((varclient_1186 < ((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17))) {
            int8 = SCALE(((varclient_1186 - (((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16)) + 1), int17, 100);
            if ((int8 == 0)) {
                varclient_1270 = 0;
            };
            IF_SETHIDE(false, comp(933, 60));
            IF_SETTEXT(inttostring(SCALE(((varclient_1239 + 5) / 10), 100, int8), 10), comp(933, 60));
            if ((SCALE(((varclient_1239 + 5) / 10), 100, int8) != varclient_1270)) {
                SOUND_SYNTH(32188, 1, 0);
                varclient_1270 = SCALE(((varclient_1239 + 5) / 10), 100, int8);
            };
        } else if ((varclient_1186 < (((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18))) {
            IF_SETHIDE(true, comp(933, 18));
            int8 = SCALE(((varclient_1186 - ((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17)) + 1), int18, 100);
            if ((int8 == 0)) {
                varclient_1270 = 0;
            };
            IF_SETHIDE(false, comp(933, 208));
            IF_SETTEXT(inttostring(SCALE(((varclient_1239 + 5) / 10), 100, int8), 10), comp(933, 222));
            if ((SCALE(((varclient_1239 + 5) / 10), 100, int8) != varclient_1270)) {
                SOUND_SYNTH(31378, 1, 0);
                varclient_1270 = SCALE(((varclient_1239 + 5) / 10), 100, int8);
            };
        } else if ((varclient_1186 < ((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19))) {
            IF_SETTRANS(255, comp(933, 220));
            IF_SETHIDE(false, comp(933, 154));
            IF_SETHIDE(false, comp(933, 74));
            IF_SETHIDE(false, comp(933, 86));
            if ((varclient_1186 == (((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18))) {
                SOUND_SYNTH(27367, 1, 0);
            };
        } else if ((varclient_1186 < (((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20))) {
            IF_SETHIDE(false, comp(933, 87));
            if ((varclient_1186 == ((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19))) {
                SOUND_SYNTH(27367, 1, 0);
            };
        } else if ((varclient_1186 < ((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21))) {
            IF_SETHIDE(false, comp(933, 139));
            IF_SETHIDE(false, comp(933, 140));
            IF_SETHIDE(false, comp(933, 141));
            IF_SETHIDE(false, comp(933, 142));
            IF_SETHIDE(false, comp(933, 143));
            IF_SETHIDE(false, comp(933, 144));
            IF_SETHIDE(false, comp(933, 145));
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
                IF_SETTRANS(MIN(200, (255 - ((int8 * 255) / 100))), comp(933, 139));
                IF_SETTEXT("+0%", comp(933, 145));
                if ((int8 == 0)) {
                    SOUND_SYNTH(32188, 1, 0);
                };
                if ((varclient_1186 == 475)) {
                    SOUND_SYNTH(32430, 1, 0);
                };
            } else if (((varclient_1186 < ((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + ((int21 / 3) * 2))) && (varclient_1188 > 1))) {
                if (((varclient_1186 == ((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + ((int21 / 3) * 2))) && (varclient_1188 > 1))) {
                    SOUND_SYNTH(27367, 1, 0);
                };
                int0 = 10000;
                int1 = (int0 + 792);
                if ((int8 == 33)) {
                    varclient_1270 = int0;
                    SOUND_SYNTH(32430, 1, 0);
                };
                IF_SETTRANS(MIN(200, (((int8 / 2) * 255) / 100)), comp(933, 139));
                IF_SETTRANS(MIN(200, (255 - ((int8 * 255) / 100))), comp(933, 140));
                IF_SETTEXT(`+${inttostring((((SCALE(int8, 100, (int1 - 10000)) / 2) + 50) / 100), 10)}%`, comp(933, 145));
                if (((((SCALE(int8, 100, (int1 - 10000)) / 2) + 50) / 100) != varclient_1270)) {
                    SOUND_SYNTH(32188, 1, 0);
                    varclient_1270 = (((SCALE(int8, 100, (int1 - 10000)) / 2) + 50) / 100);
                };
                IF_SETTEXT(`${inttostring((((int0 + (SCALE(int8, 100, (int1 - int0)) / 2)) + 50) / 100), 10)}%`, comp(933, 204));
                IF_SETSIZE(SCALE(8192, 100, (((int0 + (SCALE(int8, 100, (int1 - int0)) / 2)) + 50) / 100)), 16384, 2, 2, comp(933, 187));
                if ((varclient_1186 == 525)) {
                    SOUND_SYNTH(32430, 1, 0);
                };
            } else if ((varclient_1188 > 2)) {
                int0 = (10000 + 792);
                int1 = (10000 + 1583);
                if ((int8 == 66)) {
                    varclient_1270 = int0;
                    SOUND_SYNTH(32430, 1, 0);
                };
                IF_SETTRANS(MIN(200, (((int8 / 3) * 255) / 100)), comp(933, 140));
                IF_SETTRANS(MIN(200, (255 - ((int8 * 255) / 100))), comp(933, 141));
                IF_SETTEXT(`+${inttostring((((SCALE(int8, 100, (int1 - 10000)) / 3) + 50) / 100), 10)}%`, comp(933, 145));
                if (((((SCALE(int8, 100, (int1 - 10000)) / 3) + 50) / 100) != varclient_1270)) {
                    SOUND_SYNTH(32188, 1, 0);
                    varclient_1270 = (((SCALE(int8, 100, (int1 - 10000)) / 3) + 50) / 100);
                };
                IF_SETTEXT(`${inttostring((((int0 + (SCALE(int8, 100, (int1 - int0)) / 3)) + 50) / 100), 10)}%`, comp(933, 204));
                IF_SETSIZE(SCALE(8192, 100, (((int0 + (SCALE(int8, 100, (int1 - int0)) / 3)) + 50) / 100)), 16384, 2, 2, comp(933, 187));
                if ((varclient_1186 == 575)) {
                    SOUND_SYNTH(32430, 1, 0);
                };
            };
        } else if ((varclient_1186 < (((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22))) {
            IF_SETHIDE(false, comp(933, 88));
            if ((varclient_1186 == ((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21))) {
                SOUND_SYNTH(27367, 1, 0);
            };
        } else if ((varclient_1186 < ((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23))) {
            int8 = SCALE(((varclient_1186 - (((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22)) + 1), int23, 100);
            IF_SETHIDE(false, comp(933, 97));
            IF_SETHIDE(false, comp(933, 146));
            IF_SETSIZE(SCALE(SCALE(varclient_1195, 10000, 16384), 100, int8), 16384, 2, 2, comp(933, 108));
            int0 = (10000 + int38);
            int1 = ((10000 + int38) + int39);
            int37 = SCALE(int8, 100, (int1 - int0));
            if ((int8 == 0)) {
                varclient_1270 = int0;
            };
            if ((int1 >= int0)) {
                IF_SETTEXT(`+${inttostring(((int37 + 50) / 100), 10)}%`, comp(933, 146));
            } else {
                IF_SETTEXT(`${inttostring(((int37 - 50) / 100), 10)}%`, comp(933, 146));
            };
            IF_SETTEXT(`${inttostring((((int0 + int37) + 50) / 100), 10)}%`, comp(933, 204));
            if (((((int0 + int37) + 50) / 100) != varclient_1270)) {
                SOUND_SYNTH(32188, 1, 0);
                varclient_1270 = (((int0 + SCALE(int8, 100, (int1 - int0))) + 50) / 100);
            };
            IF_SETSIZE(SCALE(8192, 100, (((int0 + int37) + 50) / 100)), 16384, 2, 2, comp(933, 187));
        } else if ((varclient_1186 < (((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24))) {
            IF_SETHIDE(false, comp(933, 89));
            if ((varclient_1186 == ((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23))) {
                SOUND_SYNTH(27367, 1, 0);
            };
        } else if ((varclient_1186 < ((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25))) {
            IF_SETHIDE(false, comp(933, 90));
            IF_SETHIDE(false, comp(933, 149));
            IF_SETHIDE(false, comp(933, 151));
            IF_SETHIDE(false, comp(933, 92));
            int8 = SCALE(((varclient_1186 - (((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24)) + 1), int25, 100);
            IF_SETTRANS((255 - ((int8 * 255) / 100)), comp(933, 149));
            IF_SETTRANS((255 - ((int8 * 255) / 100)), comp(933, 151));
            [int3, int4, int5] = script3273();
            IF_SETTEXT(`${inttostring(int3, 10)} : ${inttostring(int4, 10)}`, comp(933, 90));
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
                IF_SETTEXT(`+${inttostring(((int37 + 50) / 100), 10)}%`, comp(933, 92));
            } else {
                IF_SETTEXT(`${inttostring(((int37 - 50) / 100), 10)}%`, comp(933, 92));
            };
            IF_SETTEXT(`${inttostring((((int0 + int37) + 50) / 100), 10)}%`, comp(933, 204));
            if (((((int0 + int37) + 50) / 100) != varclient_1270)) {
                SOUND_SYNTH(32188, 1, 0);
                varclient_1270 = (((int0 + int37) + 50) / 100);
            };
            IF_SETSIZE(SCALE(8192, 100, (((int0 + int37) + 50) / 100)), 16384, 2, 2, comp(933, 187));
        } else if ((varclient_1186 < (((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26))) {
            IF_SETHIDE(false, comp(933, 94));
            if ((varclient_1186 == ((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25))) {
                SOUND_SYNTH(27367, 1, 0);
            };
        } else if ((varclient_1186 < ((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27))) {
            IF_SETHIDE(false, comp(933, 147));
            int8 = SCALE(((varclient_1186 - (((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26)) + 1), int27, 100);
            int0 = (((10000 + int38) + int39) + int40);
            int1 = ((((10000 + int38) + int39) + int40) + varclient_1236);
            int37 = SCALE(int8, 100, (int1 - int0));
            if ((int8 == 0)) {
                varclient_1270 = int0;
            };
            if ((int1 >= int0)) {
                IF_SETTEXT(`+${inttostring(((int37 + 50) / 100), 10)}%`, comp(933, 147));
                if ((((int37 + 50) / 100) != varclient_1270)) {
                    SOUND_SYNTH(32188, 1, 0);
                    varclient_1270 = ((int37 + 50) / 100);
                };
            } else {
                IF_SETTEXT(`${inttostring(((int37 - 50) / 100), 10)}%`, comp(933, 147));
            };
            IF_SETTEXT(`${inttostring((((int0 + int37) + 50) / 100), 10)}%`, comp(933, 204));
            if (((((int0 + int37) + 50) / 100) != varclient_1270)) {
                SOUND_SYNTH(32188, 1, 0);
                varclient_1270 = (((int0 + int37) + 50) / 100);
            };
            IF_SETSIZE(SCALE(8192, 100, (((int0 + int37) + 50) / 100)), 16384, 2, 2, comp(933, 187));
        } else if ((varclient_1186 < (((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28))) {
            IF_SETHIDE(false, comp(933, 95));
            if ((varclient_1186 == ((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27))) {
                SOUND_SYNTH(27367, 1, 0);
            };
        } else if ((varclient_1186 < ((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29))) {
            IF_SETHIDE(false, comp(933, 91));
            IF_SETHIDE(false, comp(933, 150));
            IF_SETHIDE(false, comp(933, 152));
            IF_SETHIDE(false, comp(933, 93));
            int8 = SCALE(((varclient_1186 - (((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28)) + 1), int29, 100);
            IF_SETTRANS((255 - ((int8 * 255) / 100)), comp(933, 150));
            IF_SETTRANS((255 - ((int8 * 255) / 100)), comp(933, 152));
            IF_SETTEXT(inttostring(SCALE(varclient_1320, 100, int8), 10), comp(933, 91));
            if ((SCALE(varclient_1320, 100, int8) != varclient_1270)) {
                SOUND_SYNTH(32188, 1, 0);
                varclient_1270 = SCALE(varclient_1320, 100, int8);
            };
            int0 = ((((10000 + int38) + int39) + int40) + varclient_1236);
            int1 = SCALE(((((10000 + int38) + int39) + int40) + varclient_1236), 10000, int41);
            int37 = SCALE(int8, 100, (int1 - int0));
            if ((int1 >= int0)) {
                IF_SETTEXT(`+${inttostring(((int37 + 50) / 100), 10)}%`, comp(933, 93));
            } else {
                IF_SETTEXT(`${inttostring(((int37 - 50) / 100), 10)}%`, comp(933, 93));
            };
            IF_SETTEXT(`${inttostring((((int0 + int37) + 50) / 100), 10)}%`, comp(933, 204));
            IF_SETSIZE(SCALE(8192, 100, (((int0 + int37) + 50) / 100)), 16384, 2, 2, comp(933, 187));
        } else if ((varclient_1186 < (((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30))) {
            IF_SETHIDE(false, comp(933, 96));
            if ((varclient_1186 == ((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29))) {
                SOUND_SYNTH(27367, 1, 0);
            };
        } else if ((varclient_1186 < ((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31))) {
            IF_SETHIDE(false, comp(933, 148));
            int8 = SCALE(((varclient_1186 - (((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30)) + 1), int31, 100);
            int0 = SCALE(((((10000 + int38) + int39) + int40) + varclient_1236), 10000, int41);
            int1 = SCALE(SCALE(((((10000 + int38) + int39) + int40) + varclient_1236), 10000, int41), 10000, script3275());
            int37 = SCALE(int8, 100, (int1 - int0));
            if ((int1 >= int0)) {
                IF_SETTEXT(`+${inttostring(((int37 + 50) / 100), 10)}%`, comp(933, 148));
            } else {
                IF_SETTEXT(`${inttostring(((int37 - 50) / 100), 10)}%`, comp(933, 148));
            };
            IF_SETTEXT(`${inttostring((((int0 + int37) + 50) / 100), 10)}%`, comp(933, 204));
            IF_SETSIZE(SCALE(8192, 100, (((int0 + int37) + 50) / 100)), 16384, 2, 2, comp(933, 187));
        } else if ((varclient_1186 < (((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32))) {
            IF_SETHIDE(false, comp(933, 112));
            if ((varclient_1186 == ((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31))) {
                SOUND_SYNTH(27367, 1, 0);
            };
        } else if ((varclient_1186 < ((((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32) + int33))) {
            IF_SETHIDE(false, comp(933, 113));
            IF_SETHIDE(false, comp(933, 138));
            int8 = SCALE(((varclient_1186 - (((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32)) + 1), int33, 100);
            if ((varbitplayer_2365 != 0)) {
                [int6, int7] = script3266((varclient_1186 - (((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32)));
                if ((int6 == 1)) {
                    switch (int7) {
                        case 0: {
                            IF_SETHIDE(false, comp(933, 123));
                            stack(2849);
                            stack(61145211);
                            IF_SETGRAPHIC();
                            break;
                        }
                        case 1: {
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
                        case 2: {
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
                        case 3: {
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
                        case 4: {
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
                        case 5: {
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
                        case 6: {
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
                        case 7: {
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
                        case 8: {
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
                            IF_SETHIDE(false, comp(933, 132));
                            stack(2850);
                            stack(61145219);
                            IF_SETGRAPHIC();
                            stack(2849);
                            stack(61145220);
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
                            IF_SETHIDE(false, comp(933, 133));
                            stack(2850);
                            stack(61145220);
                            IF_SETGRAPHIC();
                            stack(2849);
                            stack(61145221);
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
                            IF_SETHIDE(false, comp(933, 134));
                            stack(2850);
                            stack(61145221);
                            IF_SETGRAPHIC();
                            stack(2849);
                            stack(61145222);
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
                            IF_SETHIDE(false, comp(933, 135));
                            stack(2850);
                            stack(61145222);
                            IF_SETGRAPHIC();
                            stack(2849);
                            stack(61145223);
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
                            IF_SETHIDE(false, comp(933, 136));
                            stack(2850);
                            stack(61145223);
                            IF_SETGRAPHIC();
                            stack(2849);
                            stack(61145224);
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
                };
            } else {
                IF_SETTEXT("n/a", comp(933, 138));
                varclient_1186 = (varclient_1186 + 2);
            };
            int0 = SCALE(SCALE(((((10000 + int38) + int39) + int40) + varclient_1236), 10000, int41), 10000, script3275());
            int1 = SCALE(SCALE(SCALE(((((10000 + int38) + int39) + int40) + varclient_1236), 10000, int41), 10000, script3275()), 10000, int42);
            int37 = SCALE(int8, 100, (int1 - int0));
            if ((int8 == 0)) {
                varclient_1270 = int0;
            };
            if ((int1 >= int0)) {
                IF_SETTEXT(`+${inttostring(((int37 + 50) / 100), 10)}%`, comp(933, 138));
            } else {
                IF_SETTEXT(`${inttostring(((int37 - 50) / 100), 10)}%`, comp(933, 138));
            };
            IF_SETTEXT(`${inttostring((((int0 + int37) + 50) / 100), 10)}%`, comp(933, 204));
            if (((((int0 + int37) + 50) / 100) != varclient_1270)) {
                SOUND_SYNTH(32188, 1, 0);
                varclient_1270 = (((int0 + int37) + 50) / 100);
            };
            IF_SETSIZE(SCALE(8192, 100, (((int0 + int37) + 50) / 100)), 16384, 2, 2, comp(933, 187));
        } else if ((varclient_1186 < (((((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32) + int33) + int34))) {
            IF_SETHIDE(true, comp(933, 86));
            IF_SETHIDE(false, comp(933, 220));
            int8 = SCALE(((varclient_1186 - ((((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32) + int33)) + 1), int34, 100);
            if ((int8 == 0)) {
                varclient_1270 = 0;
            };
            if ((varclient_1321 > 0)) {
                IF_SETHIDE(false, comp(933, 165));
                if ((int8 == 1)) {
                    SOUND_SYNTH(27367, 1, 0);
                };
                IF_SETTEXT(`Unbalanced party penalty: x${inttostring((((10000 - varclient_1321) + 50) / 100), 10)}%`, comp(933, 175));
                if (((((10000 - varclient_1321) + 50) / 100) != varclient_1270)) {
                    SOUND_SYNTH(32188, 1, 0);
                    varclient_1270 = (((10000 - varclient_1321) + 50) / 100);
                };
            } else {
                varclient_1186 = (varclient_1186 + 2);
            };
            int0 = SCALE(SCALE(SCALE(((((10000 + int38) + int39) + int40) + varclient_1236), 10000, int41), 10000, script3275()), 10000, int42);
            int1 = SCALE(SCALE(SCALE(SCALE(((((10000 + int38) + int39) + int40) + varclient_1236), 10000, int41), 10000, script3275()), 10000, int42), 10000, (10000 - varclient_1321));
            IF_SETTEXT(`${inttostring((((int0 + SCALE(int8, 100, (int1 - int0))) + 50) / 100), 10)}%`, comp(933, 204));
            IF_SETSIZE(SCALE(8192, 100, (((int0 + SCALE(int8, 100, (int1 - int0))) + 50) / 100)), 16384, 2, 2, comp(933, 187));
        } else if ((varclient_1186 < ((((((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32) + int33) + int34) + int35))) {
            script949(false);
            IF_SETTEXT(inttostring(varclient_1239, 10), comp(933, 222));
            int8 = SCALE(((varclient_1186 - (((((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32) + int33) + int34)) + 1), int35, 100);
            int0 = varclient_1239;
            int1 = SCALE(SCALE(SCALE(SCALE(SCALE(((((10000 + int38) + int39) + int40) + varclient_1236), 10000, int41), 10000, script3275()), 10000, int42), 10000, (10000 - varclient_1321)), 10000, varclient_1239);
            if ((int8 == 0)) {
                varclient_1270 = int0;
            };
            if (((MODULO(int8, 5) == 0) && (IF_GETY(comp(933, 165)) != 138))) {
                IF_SETPOSITION(IF_GETX(comp(933, 165)), (IF_GETY(comp(933, 165)) + 1), 0, 0, comp(933, 165));
            };
            IF_SETSIZE(183, SCALE(80, 100, int8), 0, 0, comp(933, 203));
            IF_SETTEXT(`${inttostring((((int0 + SCALE(int8, 100, (int1 - int0))) + 5) / 10), 10)}%`, comp(933, 222));
            if (((((int0 + SCALE(int8, 100, (int1 - int0))) + 5) / 10) != varclient_1270)) {
                SOUND_SYNTH(31378, 1, 0);
                varclient_1270 = (((int0 + SCALE(int8, 100, (int1 - int0))) + 5) / 10);
            };
        } else if ((varclient_1186 < (((((((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32) + int33) + int34) + int35) + int36))) {
            int8 = SCALE(((varclient_1186 - ((((((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32) + int33) + int34) + int35)) + 1), int36, 100);
            int0 = varclient_1239;
            int1 = SCALE(SCALE(SCALE(SCALE(SCALE(((((10000 + int38) + int39) + int40) + varclient_1236), 10000, int41), 10000, script3275()), 10000, int42), 10000, (10000 - varclient_1321)), 10000, varclient_1239);
            int43 = (((int0 + SCALE(int8, 100, (int1 - int0))) + 5) / 100);
            if ((varclient_6516 == true)) {
                if (((2147483647 - int43) >= 0)) {
                    int43 = (int43 * 2);
                } else {
                    int43 = 2147483647;
                };
            };
            if ((int8 == 0)) {
                varclient_1270 = int0;
            };
            if ((varplayer_1097 < 2000000000)) {
                IF_SETTEXT(`${inttostring(int43, 10)}%`, comp(933, 224));
                if (((((int0 + SCALE(int8, 100, (int1 - int0))) + 5) / 100) != varclient_1270)) {
                    SOUND_SYNTH(26960, 1, 0);
                    varclient_1270 = (((int0 + SCALE(int8, 100, (int1 - int0))) + 5) / 100);
                };
            } else {
                IF_SETTEXT("n/a", comp(933, 224));
            };
        };
        varclient_1186 = MIN((script3265() + (((((((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32) + int33) + int34) + int35) + int36)), (varclient_1186 + 1));
    };
    script3268();
    return;
}