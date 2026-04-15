//
function script8323(int0: int, int1: unknown_int): void {
    var int2 = script10405(int0);
    if ((int2 == -1 as struct)) {
        return;
    };
    switch (int2) {
        case 21300: {
            script675();
            break;
        }
        case 21301: {
            script8290(1);
            break;
        }
        case 21136: {
            script8746();
            return;
        }
        default: {
            if ((varbitplayer_38842 == 1)) {
                if ((varbitclient_38843 == (int0 + 1))) {
                    varbitclient_38843 = 0;
                };
                IF_SETHIDE(true, struct_getparam(script10405(int0), 3503));
                if (((int0 == 2) && (IF_GETHIDE(comp(276, 18)) == false))) {
                    IF_SETHIDE(true, comp(276, 18));
                };
                script2638();
                script10228();
            } else if ((varbitplayer_27169 == 0)) {
                if ((int1 == 1)) {
                    script8357(int0);
                } else {
                    script8324(int0);
                };
                script8327(int0);
            } else {
                if ((varbitclient_60445 == 1)) {
                    if ((struct_getparam(int2, 9398) == true)) {
                        if ((varbitclient_60444 == (int0 + 1))) {
                            varbitclient_60444 = 0;
                        };
                    } else if ((varbitclient_22877 == (int0 + 1))) {
                        varbitclient_22877 = 0;
                    };
                    if ((varbitclient_22877 != 0)) {
                        script10535((varbitclient_22877 - 1));
                    };
                    if ((varbitclient_60444 != 0)) {
                        script10535((varbitclient_60444 - 1));
                    };
                } else if ((varbitclient_22877 == (int0 + 1))) {
                    varbitclient_22877 = 0;
                };
                IF_SETHIDE(true, struct_getparam(script10405(int0), 3503));
            };
            script121(int0);
            script8157(int0);
            script8792();
            break;
        }
    };
    script8705(int0);
    script6739(4);
    script8731();
    script10160(int0);
    if (((struct_getparam(int2, 6643) == true) && (script6354(struct_getparam(int2, 3514)) == 1))) {
        script8268(int0, 1);
    };
    return;
}