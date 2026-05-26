//
function script17553(): void {
    var int0 = comp(1181, 18);
    var int1 = -1;
    switch (varplayer_10946) {
        case 45037: {
            switch (varplayer_10950) {
                case 1: {
                    IF_SETTEXT("Solo", int0);
                    break;
                }
                case 2: {
                    IF_SETTEXT("Duo", int0);
                    break;
                }
                case 3: {
                    IF_SETTEXT("Trio", int0);
                    break;
                }
            };
            break;
        }
        case 32142:
        case 32143: {
            IF_SETTEXT(`Enrage: ${inttostring(varplayer_10950, 10)}%`, int0);
            break;
        }
        case 45585: {
            switch (varplayer_10950) {
                case 0: {
                    IF_SETTEXT("Normal", int0);
                    break;
                }
                case 1: {
                    IF_SETTEXT(`Enrage: ${inttostring(varbitplayer_50177, 10)}%`, int0);
                    break;
                }
            };
            break;
        }
        case 46256: {
            switch (varplayer_10950) {
                case 0: {
                    IF_SETTEXT("Normal", int0);
                    break;
                }
                case 1: {
                    IF_SETTEXT("Story", int0);
                    break;
                }
                default: {
                    IF_SETTEXT(`Enrage:<br> ${inttostring(varplayer_10950, 10)}%`, int0);
                    break;
                }
            };
            break;
        }
        case 47804:
        case 47805: {
            switch (varplayer_10950) {
                case 1: {
                    IF_SETTEXT("Normal", int0);
                    break;
                }
                default: {
                    IF_SETTEXT(`${inttostring(varplayer_10950, 10)} player`, int0);
                    break;
                }
            };
            break;
        }
        case 49995:
        case 49996:
        case 49997: {
            switch (varplayer_10950) {
                case 0: {
                    IF_SETTEXT("Normal", int0);
                    break;
                }
                case 1: {
                    IF_SETTEXT("Hard", int0);
                    break;
                }
            };
            break;
        }
        case 50215: {
            IF_SETTEXT(`Barrier strength:<br> ${inttostring(varplayer_10950, 10)}%`, int0);
            break;
        }
        case 51839: {
            switch (varplayer_10950) {
                case 0: {
                    IF_SETTEXT("Normal", int0);
                    break;
                }
                default: {
                    IF_SETTEXT(`Enrage:<br> ${inttostring(varplayer_10950, 10)}%`, int0);
                    break;
                }
            };
            break;
        }
        default: {
            switch (varplayer_10950) {
                case 1: {
                    IF_SETTEXT("Normal", int0);
                    break;
                }
                case 2: {
                    IF_SETTEXT("Hard", int0);
                    break;
                }
                case 3: {
                    IF_SETTEXT("Challenge", int0);
                    break;
                }
            };
            break;
        }
    };
    if ((varplayer_10950 == -1)) {
        IF_SETTEXT("Story", int0);
    };
    return;
}