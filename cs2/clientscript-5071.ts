//
function script5071(int0: unknown_int, int1: unknown_int, int2: int, int3: cs2enum): void {
    if (((int0 != 1) || (int3 == -1 as cs2enum))) {
        return;
    };
    if ((int2 >= MIN(ENUM_GETOUTPUTCOUNT(int3), 256))) {
        return;
    };
    switch (int1) {
        case 1: {
            varbitplayer_7056 = int2;
            break;
        }
        case 2: {
            varbitplayer_7057 = int2;
            break;
        }
        case 3: {
            varbitplayer_7058 = int2;
            break;
        }
        default: {
            return;
        }
    };
    SOUND_VORBIS_VOLUME(6185 as vorbis, 1, 0, 200);
    script5067();
    return;
}