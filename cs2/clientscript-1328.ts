//
function script1328(int0: number): void {
    if ((((((((IF_GETHIDE(59375715) == 0) || (IF_GETHIDE(59375716) == 0)) || (IF_GETHIDE(59375717) == 0)) || (IF_GETHIDE(59375767) == 0)) || (IF_GETHIDE(59375760) == 0)) || (IF_GETHIDE(59375761) == 0)) || (IF_GETHIDE(59375762) == 0))) {
        return;
    };
    if ((IF_GETHIDE(59375765) == 0)) {
        if ((int0 == 13)) {
            script2422();
        };
        return;
    };
    var int1 = varclient_4270;
    if ((KEYHELD_CTRL() == 1)) {
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
                if ((KEYHELD_SHIFT() == 0)) {
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
                IF_TRIGGEROP(59375697, -1, 1);
                break;
            }
        };
    } else if (((int0 == 13) && (((varclient_4270 == 3) && (STRING_LENGTH(varclient_2480) == 0)) || ((varclient_4270 == 4) && (STRING_LENGTH(varclient_2479) == 0))))) {
        script1896();
    };
    return;
}