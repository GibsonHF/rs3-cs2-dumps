//
function script20786(int0: number): void {
    var int1 = 0;
    unk11177();
    if (BRANCH_GREATER_THAN(0)) {
        switch (RANDOM(7)) {
            case 0: {
                SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59903 as vorbis, 1, 0, 135, 15, 15));
                break;
            }
            case 1: {
                SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59904 as vorbis, 1, 0, 135, 15, 15));
                break;
            }
            case 2: {
                SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59905 as vorbis, 1, 0, 135, 15, 15));
                break;
            }
            case 3: {
                SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59906 as vorbis, 1, 0, 135, 15, 15));
                break;
            }
            case 4: {
                SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59907 as vorbis, 1, 0, 135, 15, 15));
                break;
            }
            case 5: {
                SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59908 as vorbis, 1, 0, 135, 15, 15));
                break;
            }
            case 6: {
                SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59909 as vorbis, 1, 0, 135, 15, 15));
                break;
            }
        };
        if ((int0 > 0)) {
            int1 = 1;
            varbitplayer_61210 = MODULO((varbitplayer_61210 + 1), 4);
        } else if ((int0 < 0)) {
            int1 = -1;
            varbitplayer_61210 = MODULO((varbitplayer_61210 + 3), 4);
        };
        if ((varbitplayer_61207 == 1)) {
            script20714(varplayer_12909, 1);
        };
        if ((int1 != 0)) {
            stack(int1);
            unk11181();
        };
    };
    return;
}