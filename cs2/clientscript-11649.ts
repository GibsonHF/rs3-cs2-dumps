//
function script11649(): void {
    var int0 = -1;
    var int1 = 0;
    var int2 = 22;
    if ((varbitplayer_33921 == 0)) {
        IF_SETTEXT("Bone collector<col=ff0000> - Purchased from Boni on Waiko</col>", comp(1641, 77));
        IF_SETHIDE(true, comp(1641, 135));
    } else {
        IF_SETTEXT("Bone collector", comp(1641, 77));
        IF_SETHIDE(false, comp(1641, 135));
    };
    while ((++int0 < int2)) {
        switch (int0) {
            case 0: {
                int1 = varbitplayer_28419;
                break;
            }
            case 1: {
                int1 = varbitplayer_28420;
                break;
            }
            case 2: {
                int1 = varbitplayer_28421;
                break;
            }
            case 3: {
                int1 = varbitplayer_28422;
                break;
            }
            case 4: {
                int1 = varbitplayer_28423;
                break;
            }
            case 5: {
                int1 = varbitplayer_28424;
                break;
            }
            case 6: {
                int1 = varbitplayer_28426;
                break;
            }
            case 7: {
                int1 = varbitplayer_28427;
                break;
            }
            case 8: {
                int1 = varbitplayer_28428;
                break;
            }
            case 9: {
                int1 = varbitplayer_28429;
                break;
            }
            case 10: {
                int1 = varbitplayer_44564;
                break;
            }
            case 11: {
                int1 = varbitplayer_28431;
                break;
            }
            case 12: {
                int1 = varbitplayer_28432;
                break;
            }
            case 13: {
                int1 = varbitplayer_28433;
                break;
            }
            case 14: {
                int1 = varbitplayer_28434;
                break;
            }
            case 15: {
                int1 = varbitplayer_28435;
                break;
            }
            case 16: {
                int1 = varbitplayer_28436;
                break;
            }
            case 17: {
                int1 = varbitplayer_49800;
                break;
            }
            case 18: {
                if ((varbitplayer_28425 == 63)) {
                    int1 = 1;
                } else {
                    int1 = 0;
                };
                break;
            }
            case 19: {
                if (((varbitplayer_28430 == 15) && (varbitplayer_44564 == 1))) {
                    int1 = 1;
                } else {
                    int1 = 0;
                };
                break;
            }
            case 20: {
                if ((varbitplayer_28437 == 127)) {
                    int1 = 1;
                } else {
                    int1 = 0;
                };
                break;
            }
            case 21: {
                script14139(enum_getvalue(0, 9, 6505 as cs2enum, int0), enum_getvalue(0, 9, 6506 as cs2enum, int0), "", "", "", varbitplayer_33974, script6427(varbitplayer_33921));
                return;
            }
        };
        script10416(enum_getvalue(0, 9, 6505 as cs2enum, int0), enum_getvalue(0, 9, 6506 as cs2enum, int0), "", "", "", int1);
    };
    return;
}