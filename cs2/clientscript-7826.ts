//
function script7826(int0: number): void {
    var int1 = -1;
    if ((int0 == 2)) {
        IF_SETSIZE(0, 80, 1, 1, 92995615);
        IF_SETSIZE(0, 80, 1, 0, 92995636);
        IF_SETTEXT("All Hiscores will be updated on log-in.<br>XP will only be tracked when the Illumination aura is active.", 92995641);
    } else {
        IF_SETSIZE(0, 58, 1, 1, 92995615);
        IF_SETSIZE(0, 58, 1, 0, 92995636);
        IF_SETTEXT("All Hiscores will be updated on log-in.", 92995641);
    };
    var int2 = IF_GETHEIGHT(92995589);
    if ((int0 == 0)) {
        IF_SETHIDE(0, 92995588);
        if (((varclient_2820 + 47) < int2)) {
            while (((varclient_2820 + 47) < int2)) {
                switch (MODULO(varclient_2819, 2)) {
                    case 0: {
                        int1 = 92995625;
                        break;
                    }
                    case 1: {
                        int1 = 92995626;
                        break;
                    }
                };
                if ((MODULO((varclient_2820 / 47), 2) == 0)) {
                    script2996(int1, IF_GETNEXTSUBID(int1), 0, varclient_2820, 0, 0, 0, 47, 1, 0, 4128);
                } else {
                    script2996(int1, IF_GETNEXTSUBID(int1), 0, varclient_2820, 0, 0, 0, 47, 1, 0, 4127);
                };
                if ((varclient_2819 == 1)) {
                    varclient_2819 = 0;
                    varclient_2820 = (varclient_2820 + 48);
                } else {
                    varclient_2819 = (varclient_2819 + 1);
                };
            };
            IF_SETSCROLLSIZE(0, int2, 92995595);
        } else {
            IF_SETSCROLLSIZE(0, (varclient_2820 + 48), 92995595);
        };
        script7791(92995588, 92995595);
    } else if ((int0 == 1)) {
        IF_SETHIDE(1, 92995588);
        int2 = IF_GETHEIGHT(92995601);
        if (((varclient_2820 + 27) < int2)) {
            while (((varclient_2820 + 27) < int2)) {
                switch (MODULO(varclient_2819, 3)) {
                    case 0: {
                        int1 = 92995633;
                        break;
                    }
                    case 1: {
                        int1 = 92995634;
                        break;
                    }
                    case 2: {
                        int1 = 92995635;
                        break;
                    }
                };
                if ((MODULO((varclient_2820 / 26), 2) == 0)) {
                    script2996(int1, IF_GETNEXTSUBID(int1), 0, varclient_2820, 0, 0, 0, 26, 1, 0, 4128);
                } else {
                    script2996(int1, IF_GETNEXTSUBID(int1), 0, varclient_2820, 0, 0, 0, 26, 1, 0, 4127);
                };
                if ((varclient_2819 == 2)) {
                    varclient_2819 = 0;
                    varclient_2820 = (varclient_2820 + 27);
                } else {
                    varclient_2819 = (varclient_2819 + 1);
                };
            };
        };
    } else if ((int0 == 2)) {
        IF_SETHIDE(0, 92995588);
        int2 = IF_GETHEIGHT(92995659);
        if (((varclient_2820 + 27) < int2)) {
            while (((varclient_2820 + 27) < int2)) {
                switch (MODULO(varclient_2819, 2)) {
                    case 0: {
                        int1 = 92995585;
                        break;
                    }
                    case 1: {
                        int1 = 92995586;
                        break;
                    }
                };
                if ((MODULO((varclient_2820 / 26), 2) == 0)) {
                    script2996(int1, IF_GETNEXTSUBID(int1), 0, varclient_2820, 0, 0, 0, 26, 1, 0, 4128);
                } else {
                    script2996(int1, IF_GETNEXTSUBID(int1), 0, varclient_2820, 0, 0, 0, 26, 1, 0, 4127);
                };
                if ((varclient_2819 == 1)) {
                    varclient_2819 = 0;
                    varclient_2820 = (varclient_2820 + 27);
                } else {
                    varclient_2819 = (varclient_2819 + 1);
                };
            };
            IF_SETSCROLLSIZE(0, (varclient_2820 + 27), 92995596);
        } else {
            IF_SETSCROLLSIZE(0, (varclient_2820 + 27), 92995596);
        };
        script7791(92995588, 92995596);
    };
    return;
}