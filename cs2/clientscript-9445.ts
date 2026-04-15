//
function script9445(int0: int): void {
    if ((varplayer_3982 == 0)) {
        return;
    };
    var int1 = varplayer_3973;
    var int2 = varplayer_3973;
    int1 = (int0 + int1);
    if ((int1 < 1)) {
        int1 = 1;
    };
    if ((int1 >= varplayer_3982)) {
        int1 = varplayer_3982;
    };
    var int3 = -1 as vorbis;
    if ((int2 != int1)) {
        varplayer_3973 = int1;
        if ((varplayer_3982 > 150)) {
            int1 = SCALE(int1, varplayer_3982, 100);
        };
        script9448(int1);
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