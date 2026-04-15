//
function script1328(int0: unknown_int): void {
    if ((((((((IF_GETHIDE(comp(906, 99)) == false) || (IF_GETHIDE(comp(906, 100)) == false)) || (IF_GETHIDE(comp(906, 101)) == false)) || (IF_GETHIDE(comp(906, 151)) == false)) || (IF_GETHIDE(comp(906, 144)) == false)) || (IF_GETHIDE(comp(906, 145)) == false)) || (IF_GETHIDE(comp(906, 146)) == false))) {
        return;
    };
    if ((IF_GETHIDE(comp(906, 149)) == false)) {
        if ((int0 == 13)) {
            script2422();
        };
        return;
    };
    var int1 = varclient_4270;
    if ((KEYHELD_CTRL() == true)) {
        switch (int0) {
            case 16:
            case 103: {
                int1 = 0;
                break;
            }
            case 17:
            case 99: {
                int1 = 1;
                break;
            }
            case 18:
            case 105: {
                int1 = 2;
                break;
            }
            case 19:
            case 96: {
                int1 = 3;
                break;
            }
            case 20:
            case 91: {
                int1 = 4;
                break;
            }
            case 21:
            case 97: {
                int1 = 5;
                break;
            }
            case 80: {
                if ((KEYHELD_SHIFT() == false)) {
                    int1 = MODULO((varclient_4270 + 1), 6);
                } else {
                    int1 = (varclient_4270 - 1);
                    if ((int1 < 0)) {
                        int1 = 5;
                    };
                };
                break;
            }
            default: {
                return;
            }
        };
        if ((int1 != varclient_4270)) {
            script3060(int1);
        };
        return;
    };
    if (((varclient_4270 != 3) && (varclient_4270 != 4))) {
        switch (int0) {
            case 16:
            case 103: {
                script15608(1);
                break;
            }
            case 17:
            case 99: {
                script15608(2);
                break;
            }
            case 18:
            case 105: {
                script15608(3);
                break;
            }
            case 13: {
                script1896();
                break;
            }
            case 84:
            case 80: {
                script15616();
                break;
            }
            case 83: {
                IF_TRIGGEROP(comp(906, 81), -1, 1);
                break;
            }
        };
    } else if (((int0 == 13) && (((varclient_4270 == 3) && (STRING_LENGTH(varclient_2480) == 0)) || ((varclient_4270 == 4) && (STRING_LENGTH(varclient_2479) == 0))))) {
        script1896();
    };
    return;
}