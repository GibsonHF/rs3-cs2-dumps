//
function script8992(): void {
    IF_SETTEXT(inttostring(varbitplayer_18708, 10), comp(1497, 55));
    IF_SETTEXT(inttostring(MAX(0, varclient_2788), 10), comp(1497, 75));
    IF_SETTEXT(inttostring(MAX(0, varclient_2789), 10), comp(1497, 156));
    if (((varbitplayer_18722 == 0) || (script1305() == 1))) {
        switch (script8983()) {
            case 1: {
                IF_SETTEXT(inttostring(varbitplayer_18710, 10), comp(1497, 73));
                IF_SETTEXT(inttostring(varbitplayer_18711, 10), comp(1497, 154));
                break;
            }
            case 3: {
                IF_SETTEXT(inttostring(varbitplayer_18712, 10), comp(1497, 73));
                IF_SETTEXT(inttostring(varbitplayer_18713, 10), comp(1497, 154));
                break;
            }
            case 5: {
                IF_SETTEXT(inttostring(varbitplayer_18714, 10), comp(1497, 73));
                IF_SETTEXT(inttostring(varbitplayer_18715, 10), comp(1497, 154));
                break;
            }
            case 7: {
                IF_SETTEXT(inttostring(varbitplayer_18716, 10), comp(1497, 73));
                IF_SETTEXT(inttostring(varbitplayer_18717, 10), comp(1497, 154));
                break;
            }
            default: {
                varbitplayer_18722 = 1;
                break;
            }
        };
        if (((script8984() != 1) && (script8984() != 3))) {
            IF_SETHIDE(true, comp(1497, 57));
        };
    } else {
        switch (script8984()) {
            case 1: {
                IF_SETTEXT(inttostring(varbitplayer_18718, 10), comp(1497, 73));
                IF_SETTEXT(inttostring(varbitplayer_18719, 10), comp(1497, 154));
                break;
            }
            case 3: {
                IF_SETTEXT(inttostring(varbitplayer_18720, 10), comp(1497, 73));
                IF_SETTEXT(inttostring(varbitplayer_18721, 10), comp(1497, 154));
                break;
            }
        };
        if (((((script8983() != 1) && (script8983() != 3)) && (script8983() != 5)) && (script8983() != 7))) {
            IF_SETHIDE(true, comp(1497, 56));
        };
    };
    var string0 = "";
    var string1 = "";
    var string2 = "";
    if (((varbitplayer_18722 == 0) || (script1305() == 1))) {
        [string1, string2, string0] = script8988();
        script8990();
    };
    if ((varbitplayer_18722 == 1)) {
        [string0, string1, string2] = script8989();
        script8991();
    };
    IF_SETTEXT(string1, comp(1497, 71));
    IF_SETTEXT(string2, comp(1497, 152));
    IF_SETTEXT(string0, comp(1497, 1));
    if ((script8984() == 0)) {
        IF_SETHIDE(true, comp(1497, 57));
    };
    return;
}