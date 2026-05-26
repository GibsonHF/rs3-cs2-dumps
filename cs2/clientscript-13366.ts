//
function script13366(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = (CLIENTCLOCK() - int0);
    var int5 = script13369(int1);
    var int6 = script13369(int2);
    var int7 = -1;
    var int8 = 0;
    if (((int4 == 1) || (MODULO(int4, 25) == 1))) {
        SOUND_VORBIS_VOLUME(19101, 1, 0, 100);
    };
    if ((int3 == 1)) {
        int7 = (IF_GET2DANGLE(121765973) - 128);
    } else if ((int3 == 0)) {
        int7 = (IF_GET2DANGLE(121765973) + 128);
    };
    if ((int7 < 0)) {
        int7 = (int7 + 65536);
    } else if ((int7 > 65535)) {
        int7 = (int7 - 65536);
    };
    IF_SET2DANGLE(int7, 121765973);
    if ((int3 == 1)) {
        if ((int5 < int6)) {
            if (((IF_GET2DANGLE(121765973) <= int5) || (IF_GET2DANGLE(121765973) >= int6))) {
                int8 = 1;
            };
        } else if (((IF_GET2DANGLE(121765973) <= int5) && (IF_GET2DANGLE(121765973) >= int6))) {
            int8 = 1;
        };
    } else if ((int3 == 0)) {
        if ((int5 > int6)) {
            if (((IF_GET2DANGLE(121765973) >= int5) || (IF_GET2DANGLE(121765973) <= int6))) {
                int8 = 1;
            };
        } else if (((IF_GET2DANGLE(121765973) >= int5) && (IF_GET2DANGLE(121765973) <= int6))) {
            int8 = 1;
        };
    };
    if ((int8 == 0)) {
        script13367(int2);
        IF_SETONTIMER(callback(), 121765973);
        SOUND_VORBIS_VOLUME(19101, 1, 0, 0);
        SOUND_VORBIS_RATE(6758, 1, 0, 240, 280);
        script13368(int2);
    };
    return;
}