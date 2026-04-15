//
function script7121(int0: obj, int1: int, int2: graphic): void {
    var int3 = 0;
    var int4 = -1 as vorbis;
    if (((varplayer_1170 != int0) && (varplayer_1170 != -1 as obj))) {
        varplayer_1170 = int0;
        if ((script7105(int0) == 1)) {
            varplayer_8846 = script7108(int0);
        } else {
            varplayer_8846 = 0;
        };
        script7123();
        script7143(int1, int2);
        if ((item_getparam(int0, 3379) > 0)) {
            varplayer_8847 = MIN(item_getparam(int0, 3379), varplayer_8846);
        } else {
            varplayer_8847 = varplayer_8846;
        };
        script7147();
        switch (RANDOM(3)) {
            case 0: {
                int4 = 21243 as vorbis;
                break;
            }
            case 1: {
                int4 = 21245 as vorbis;
                break;
            }
            case 2: {
                int4 = 21251 as vorbis;
                break;
            }
        };
        SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(int4, 1, 0, 80, 5, 10));
    };
    return;
}