//
function script6316(int0: int, int1: int): unknown_int {
    if (((int0 < 2) || (int0 > 15))) {
        return 0;
    };
    var int2 = (script5799(int0) + int1);
    if ((int2 < 0)) {
        int2 = 0;
        script12478(`BANK V2 : Attempt to shrink tab ${inttostring(int0, 10)} to negative value.`);
    };
    switch (int0) {
        case 2: {
            varbitplayer_45143 = int2;
            break;
        }
        case 3: {
            varbitplayer_45144 = int2;
            break;
        }
        case 4: {
            varbitplayer_45145 = int2;
            break;
        }
        case 5: {
            varbitplayer_45146 = int2;
            break;
        }
        case 6: {
            varbitplayer_45147 = int2;
            break;
        }
        case 7: {
            varbitplayer_45148 = int2;
            break;
        }
        case 8: {
            varbitplayer_45149 = int2;
            break;
        }
        case 9: {
            varbitplayer_45150 = int2;
            break;
        }
        case 10: {
            varbitplayer_45151 = int2;
            break;
        }
        case 11: {
            varbitplayer_45152 = int2;
            break;
        }
        case 12: {
            varbitplayer_45153 = int2;
            break;
        }
        case 13: {
            varbitplayer_45154 = int2;
            break;
        }
        case 14: {
            varbitplayer_45155 = int2;
            break;
        }
        case 15: {
            varbitplayer_45156 = int2;
            break;
        }
        default: {
            script12478(`Unhandled tab: ${inttostring(int0, 10)}`);
            return 0;
        }
    };
    if ((int2 > 0)) {
        return 0;
    };
    script5789(int0);
    script6749(script14374(int0), int0);
    if ((varbitplayer_45141 > 1)) {
        if ((varbitplayer_45141 == int0)) {
            varbitplayer_45141 = 1;
        } else if ((varbitplayer_45141 > int0)) {
            varbitplayer_45141 = (varbitplayer_45141 - 1);
        };
    };
    return 1;
}