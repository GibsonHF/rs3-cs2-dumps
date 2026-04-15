//
function script7861(int0: unknown_int, int1: int, int2: unknown_int): void {
    if ((int0 != 1)) {
        return;
    };
    var int3 = 7272 as cs2enum;
    switch (int2) {
        case 0: {
            varclient_1015 = int1;
            break;
        }
        case 1: {
            varclient_1016 = int1;
            break;
        }
        case 2: {
            varclient_1017 = int1;
            break;
        }
        case 3: {
            varclient_1018 = int1;
            break;
        }
        case 4: {
            varclient_1019 = int1;
            int3 = -1 as cs2enum;
            break;
        }
        case 6: {
            varclient_6881 = int1;
            break;
        }
        default: {
            return;
        }
    };
    if ((int3 != -1 as cs2enum)) {
        SOUND_VORBIS_RATE(script5925(int3), 1, 0, 100, 350);
    } else {
        SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 150);
    };
    BASECOLOUR(int2, int1);
    script7867();
    return;
}