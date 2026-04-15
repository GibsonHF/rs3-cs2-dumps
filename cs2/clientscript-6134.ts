//
function script6134(int0: int): void {
    var int1 = varclient_1891;
    varclient_1891 = (varclient_1891 + int0);
    if ((varclient_1891 > 300)) {
        varclient_1891 = (varclient_1891 - 300);
    };
    var int2 = varclient_1891;
    var int3 = (300 / 2);
    if (((int1 <= int3) && (varclient_1891 >= int3))) {
        switch (int0) {
            case 4: {
                SOUND_VORBIS_VOLUME(14584 as vorbis, 1, 0, 70);
                break;
            }
            case 8: {
                SOUND_VORBIS_VOLUME(14662 as vorbis, 1, 0, 80);
                break;
            }
            case 12: {
                SOUND_VORBIS_VOLUME(14608 as vorbis, 1, 0, 90);
                break;
            }
        };
    };
    if ((int2 > int3)) {
        int2 = (300 - int2);
    };
    int2 = SCALE(int2, int3, 200);
    IF_SETTRANS(int2, comp(1270, 15));
    return;
}