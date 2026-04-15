//
function script17313(int0: unknown_int): void {
    var int1 = script444();
    switch (int0) {
        case 0: {
            if ((int1 == 1)) {
                SOUND_VORBIS_VOLUME(21207 as vorbis, 1, 0, 200);
            };
            if ((varbitplayer_52884 == 1)) {
                if ((int1 == 1)) {
                    SOUND_VORBIS_VOLUME(6663 as vorbis, 1, 0, 240);
                };
                IF_SETHIDE(false, comp(1152, 24));
            } else {
                IF_SETHIDE(false, comp(1152, 23));
            };
            break;
        }
        case 1: {
            if ((int1 == 1)) {
                SOUND_VORBIS_VOLUME(6622 as vorbis, 1, 0, 220);
            };
            IF_SETHIDE(false, comp(1152, 25));
            break;
        }
        case 2: {
            if ((int1 == 1)) {
                SOUND_VORBIS_VOLUME(6579 as vorbis, 1, 0, 200);
            };
            IF_SETHIDE(false, comp(1152, 26));
            break;
        }
        case 3: {
            if ((int1 == 1)) {
                SOUND_VORBIS_VOLUME(6586 as vorbis, 1, 0, 180);
            };
            IF_SETHIDE(false, comp(1152, 27));
            break;
        }
        default: {
            IF_SETHIDE(true, comp(1152, 23));
            IF_SETHIDE(true, comp(1152, 25));
            IF_SETHIDE(true, comp(1152, 26));
            IF_SETHIDE(true, comp(1152, 27));
            IF_SETHIDE(true, comp(1152, 24));
            break;
        }
    };
    return;
}