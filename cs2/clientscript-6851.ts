//
function script6851(int0: int, int1: unknown_int, int2: unknown_int, int3: unknown_int): void {
    var int4 = (CLIENTCLOCK() - int0);
    var int5 = script6854(int1);
    var int6 = script6854(int2);
    var int7 = -1;
    var int8 = 0;
    if (((int4 == 1) || (MODULO(int4, 25) == 1))) {
        SOUND_VORBIS_VOLUME(19101 as vorbis, 1, 0, 100);
    };
    if ((int3 == 1)) {
        int7 = (IF_GET2DANGLE(comp(1354, 35)) - 128);
    } else if ((int3 == 0)) {
        int7 = (IF_GET2DANGLE(comp(1354, 35)) + 128);
    };
    if ((int7 < 0)) {
        int7 = (int7 + 65536);
    } else if ((int7 > 65535)) {
        int7 = (int7 - 65536);
    };
    IF_SET2DANGLE(int7, comp(1354, 35));
    if ((int3 == 1)) {
        if ((int5 < int6)) {
            if (((IF_GET2DANGLE(comp(1354, 35)) <= int5) || (IF_GET2DANGLE(comp(1354, 35)) >= int6))) {
                int8 = 1;
            };
        } else if (((IF_GET2DANGLE(comp(1354, 35)) <= int5) && (IF_GET2DANGLE(comp(1354, 35)) >= int6))) {
            int8 = 1;
        };
    } else if ((int3 == 0)) {
        if ((int5 > int6)) {
            if (((IF_GET2DANGLE(comp(1354, 35)) >= int5) || (IF_GET2DANGLE(comp(1354, 35)) <= int6))) {
                int8 = 1;
            };
        } else if (((IF_GET2DANGLE(comp(1354, 35)) >= int5) && (IF_GET2DANGLE(comp(1354, 35)) <= int6))) {
            int8 = 1;
        };
    };
    if ((int8 == 0)) {
        script6852(int2);
        IF_SETONTIMER(callback(), comp(1354, 35));
        SOUND_VORBIS_VOLUME(19101, 1, 0, 0);
        SOUND_VORBIS_RATE(6758, 1, 0, 240, 280);
        script6853(int2);
    };
    return;
}