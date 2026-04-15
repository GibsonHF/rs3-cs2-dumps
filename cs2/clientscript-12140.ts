//
function script12140(int0: int, int1: unknown_int): void {
    if ((varbitplayer_30250 != 1)) {
        return;
    };
    var int2 = 0;
    var int3 = 0;
    switch (int0) {
        case 0: {
            int2 = varbitclient_30259;
            break;
        }
        case 1: {
            int2 = varbitclient_30260;
            break;
        }
        case 2: {
            int2 = varbitclient_30261;
            break;
        }
        case 3: {
            int2 = varbitclient_30262;
            break;
        }
        case 4: {
            int2 = varbitclient_30263;
            break;
        }
    };
    switch (int1) {
        case 0: {
            int3 = varbitclient_30259;
            varbitclient_30259 = int2;
            break;
        }
        case 1: {
            int3 = varbitclient_30260;
            varbitclient_30260 = int2;
            break;
        }
        case 2: {
            int3 = varbitclient_30261;
            varbitclient_30261 = int2;
            break;
        }
        case 3: {
            int3 = varbitclient_30262;
            varbitclient_30262 = int2;
            break;
        }
        case 4: {
            int3 = varbitclient_30263;
            varbitclient_30263 = int2;
            break;
        }
    };
    switch (int0) {
        case 0: {
            varbitclient_30259 = int3;
            break;
        }
        case 1: {
            varbitclient_30260 = int3;
            break;
        }
        case 2: {
            varbitclient_30261 = int3;
            break;
        }
        case 3: {
            varbitclient_30262 = int3;
            break;
        }
        case 4: {
            varbitclient_30263 = int3;
            break;
        }
    };
    SOUND_VORBIS_RATE(40090 as vorbis, 1, 0, 120, 350);
    return;
}