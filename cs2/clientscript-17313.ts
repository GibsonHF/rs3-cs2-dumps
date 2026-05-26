//
function script17313(int0: number): void {
    var int1 = script444();
    switch (int0) {
        case 0: {
            if ((int1 == 1)) {
                SOUND_VORBIS_VOLUME(21207, 1, 0, 200);
            };
            if ((varbitplayer_52884 == 1)) {
                if ((int1 == 1)) {
                    SOUND_VORBIS_VOLUME(6663, 1, 0, 240);
                };
                IF_SETHIDE(0, 75497496);
            } else {
                IF_SETHIDE(0, 75497495);
            };
            break;
        }
        case 1: {
            if ((int1 == 1)) {
                SOUND_VORBIS_VOLUME(6622, 1, 0, 220);
            };
            IF_SETHIDE(0, 75497497);
            break;
        }
        case 2: {
            if ((int1 == 1)) {
                SOUND_VORBIS_VOLUME(6579, 1, 0, 200);
            };
            IF_SETHIDE(0, 75497498);
            break;
        }
        case 3: {
            if ((int1 == 1)) {
                SOUND_VORBIS_VOLUME(6586, 1, 0, 180);
            };
            IF_SETHIDE(0, 75497499);
            break;
        }
        default: {
            IF_SETHIDE(1, 75497495);
            IF_SETHIDE(1, 75497497);
            IF_SETHIDE(1, 75497498);
            IF_SETHIDE(1, 75497499);
            IF_SETHIDE(1, 75497496);
            break;
        }
    };
    return;
}