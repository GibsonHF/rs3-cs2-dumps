//
function script13077(int0: int): void {
    if ((varbitplayer_35026 >= 80)) {
        return;
    };
    varclient_5923 = (int0 + 1);
    var int1 = 0;
    while ((int1 < IF_GETNEXTSUBID(comp(1829, 6)))) {
        if ((CC_FIND(comp(1829, 6), int1) == 1)) {
            if ((int1 != int0)) {
                CC_SETOUTLINE(0);
            } else {
                CC_SETOUTLINE(2);
            };
        };
        int1 = (int1 + 1);
    };
    switch (RANDOM(2)) {
        case 0: {
            SOUND_VORBIS_VOLUME(22041 as vorbis, 1, 0, 225);
            break;
        }
        case 1: {
            SOUND_VORBIS_VOLUME(22042 as vorbis, 1, 0, 225);
            break;
        }
    };
    return;
}