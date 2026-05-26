//
function script10373(int0: number): void {
    var int1 = varplayer_4721;
    varplayer_4721 = MAX(varplayer_4697, MIN(varplayer_4698, (varplayer_4721 + int0)));
    var int2 = -1;
    if ((int1 != varplayer_4721)) {
        script10379();
        switch (RANDOM(3)) {
            case 0: {
                int2 = 21248;
                break;
            }
            case 1: {
                int2 = 21256;
                break;
            }
            case 2: {
                int2 = 21256;
                break;
            }
        };
        SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(int2, 1, 0, 20, 5, 10));
    };
    return;
}