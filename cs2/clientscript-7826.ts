//
function script7826(int0: unknown_int): void {
    var int1 = comp(-1, 65535);
    if ((int0 == 2)) {
        IF_SETSIZE(0, 80, 1, 1, comp(1419, 31));
        IF_SETSIZE(0, 80, 1, 0, comp(1419, 52));
        IF_SETTEXT("All Hiscores will be updated on log-in.<br>XP will only be tracked when the Illumination aura is active.", comp(1419, 57));
    } else {
        IF_SETSIZE(0, 58, 1, 1, comp(1419, 31));
        IF_SETSIZE(0, 58, 1, 0, comp(1419, 52));
        IF_SETTEXT("All Hiscores will be updated on log-in.", comp(1419, 57));
    };
    var int2 = IF_GETHEIGHT(comp(1419, 5));
    if ((int0 == 0)) {
        IF_SETHIDE(false, comp(1419, 4));
        if (((varclient_2820 + 47) < int2)) {
            while (((varclient_2820 + 47) < int2)) {
                switch (MODULO(varclient_2819, 2)) {
                    case 0: {
                        int1 = comp(1419, 41);
                        break;
                    }
                    case 1: {
                        int1 = comp(1419, 42);
                        break;
                    }
                };
                if ((MODULO((varclient_2820 / 47), 2) == 0)) {
                    script2996(int1, IF_GETNEXTSUBID(int1), 0, varclient_2820, 0, 0, 0, 47, 1, 0, 4128 as dbrow);
                } else {
                    script2996(int1, IF_GETNEXTSUBID(int1), 0, varclient_2820, 0, 0, 0, 47, 1, 0, 4127 as dbrow);
                };
                if ((varclient_2819 == 1)) {
                    varclient_2819 = 0;
                    varclient_2820 = (varclient_2820 + 48);
                } else {
                    varclient_2819 = (varclient_2819 + 1);
                };
            };
            IF_SETSCROLLSIZE(0, int2, comp(1419, 11));
        } else {
            IF_SETSCROLLSIZE(0, (varclient_2820 + 48), comp(1419, 11));
        };
        script7791(comp(1419, 4), comp(1419, 11));
    } else if ((int0 == 1)) {
        IF_SETHIDE(true, comp(1419, 4));
        int2 = IF_GETHEIGHT(comp(1419, 17));
        if (((varclient_2820 + 27) < int2)) {
            while (((varclient_2820 + 27) < int2)) {
                switch (MODULO(varclient_2819, 3)) {
                    case 0: {
                        int1 = comp(1419, 49);
                        break;
                    }
                    case 1: {
                        int1 = comp(1419, 50);
                        break;
                    }
                    case 2: {
                        int1 = comp(1419, 51);
                        break;
                    }
                };
                if ((MODULO((varclient_2820 / 26), 2) == 0)) {
                    script2996(int1, IF_GETNEXTSUBID(int1), 0, varclient_2820, 0, 0, 0, 26, 1, 0, 4128 as dbrow);
                } else {
                    script2996(int1, IF_GETNEXTSUBID(int1), 0, varclient_2820, 0, 0, 0, 26, 1, 0, 4127 as dbrow);
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
        IF_SETHIDE(false, comp(1419, 4));
        int2 = IF_GETHEIGHT(comp(1419, 75));
        if (((varclient_2820 + 27) < int2)) {
            while (((varclient_2820 + 27) < int2)) {
                switch (MODULO(varclient_2819, 2)) {
                    case 0: {
                        int1 = comp(1419, 1);
                        break;
                    }
                    case 1: {
                        int1 = comp(1419, 2);
                        break;
                    }
                };
                if ((MODULO((varclient_2820 / 26), 2) == 0)) {
                    script2996(int1, IF_GETNEXTSUBID(int1), 0, varclient_2820, 0, 0, 0, 26, 1, 0, 4128 as dbrow);
                } else {
                    script2996(int1, IF_GETNEXTSUBID(int1), 0, varclient_2820, 0, 0, 0, 26, 1, 0, 4127 as dbrow);
                };
                if ((varclient_2819 == 1)) {
                    varclient_2819 = 0;
                    varclient_2820 = (varclient_2820 + 27);
                } else {
                    varclient_2819 = (varclient_2819 + 1);
                };
            };
            IF_SETSCROLLSIZE(0, (varclient_2820 + 27), comp(1419, 12));
        } else {
            IF_SETSCROLLSIZE(0, (varclient_2820 + 27), comp(1419, 12));
        };
        script7791(comp(1419, 4), comp(1419, 12));
    };
    return;
}