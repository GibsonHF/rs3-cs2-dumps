//
function script5532(int0: unknown_int, int1: int): void {
    var int2 = IF_GETSCROLLX(comp(1179, 8));
    IF_SETSCROLLPOS((IF_GETSCROLLX(comp(1179, 8)) + int1), 0, comp(1179, 8));
    script5533();
    var int3 = -1 as vorbis;
    if ((MODULO(CLIENTCLOCK(), 5) == 0)) {
        switch (RANDOM(3)) {
            case 0: {
                int3 = 21248 as vorbis;
                break;
            }
            case 1: {
                int3 = 21256 as vorbis;
                break;
            }
            case 2: {
                int3 = 21256 as vorbis;
                break;
            }
        };
        SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(int3, 1, 0, 20, 5, 10));
    };
    return;
}