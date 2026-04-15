//
function script9127(int0: unknown_int): void {
    if ((varplayer_3905 == 0)) {
        return;
    };
    var int1 = varplayer_3908;
    switch (int0) {
        case 0: {
            if ((varplayer_3908 != varplayer_3905)) {
                SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 255);
            } else {
                SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 255);
            };
            varplayer_3908 = MIN(varplayer_3905, (varplayer_3908 + 1));
            break;
        }
        case 1: {
            if ((varplayer_3908 != 1)) {
                SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 255);
            } else {
                SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 255);
            };
            varplayer_3908 = MAX(1, (varplayer_3908 - 1));
            break;
        }
    };
    if ((int1 != varplayer_3908)) {
        script9126();
        script8860();
    };
    return;
}