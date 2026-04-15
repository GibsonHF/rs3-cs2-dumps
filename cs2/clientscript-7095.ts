//
function script7095(): void {
    if (((varplayer_1175 == -1 as obj) || (varplayer_1175 == 0 as obj))) {
        return;
    };
    if ((varclient_2229 < 0)) {
        script7098();
        return;
    };
    if ((varclient_2228 == 0)) {
        script7098();
        return;
    };
    var int0 = -1 as vorbis;
    if ((varclient_2229 > -1)) {
        switch (RANDOM(4)) {
            case 0: {
                int0 = 21232 as vorbis;
                break;
            }
            case 1: {
                int0 = 21249 as vorbis;
                break;
            }
            case 2: {
                int0 = 21257 as vorbis;
                break;
            }
            case 3: {
                int0 = 21229 as vorbis;
                break;
            }
        };
    };
    SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(int0, 1, 0, 30, 5, 10));
    var string0 = "";
    script4542((((varclient_2228 - varclient_2229) * 100) / varclient_2228), comp(1251, 23), comp(-1, 65535));
    string0 = `${inttostring((varclient_2228 - varclient_2229), 10)}/${inttostring(varclient_2228, 10)}`;
    script4212(comp(1251, 27), string0, 26 as fontmetrics, 16777215, 0);
    switch (item_getparam(varplayer_1175, 2676)) {
        case 33784:
        case 33785:
        case 33786:
        case 33787: {
            IF_SETTEXT("-", comp(1251, 10));
            IF_SETONTIMER(callback(), comp(1251, 11));
            IF_SETONTIMER(callback(), 81985539);
            return;
        }
    };
    var int1 = (((varclient_5831 + varclient_2227) * 30) * varclient_2229);
    var int2 = MODULO(int1, 50);
    if ((int2 == 0)) {
        int2 = 50;
    };
    int1 = (int1 / 50);
    if ((varclient_2229 > 0)) {
        string0 = `${inttostring(MAX(1, int1), 10)}s`;
    } else {
        script7098();
        return;
    };
    IF_SETTEXT(string0, comp(1251, 10));
    IF_SETONTIMER(callback(script7099, 81985546, (int1 - 1), (CLIENTCLOCK() + int2)), 81985547);
    var int3 = (CLIENTCLOCK() + (((varclient_5831 + varclient_2227) * 30) * 2));
    IF_SETONTIMER(callback(script7097, int3), 81985539);
    return;
}