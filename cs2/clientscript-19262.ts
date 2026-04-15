//
function script19262(int0: component): void {
    IF_SETMODELANIM(36317 as seq, int0);
    switch (RANDOM(5)) {
        case 0: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(52109 as vorbis, 1, 0, 100, 20, 20));
            break;
        }
        case 1: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(52110 as vorbis, 1, 0, 100, 20, 20));
            break;
        }
        case 2: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(52111 as vorbis, 1, 0, 100, 20, 20));
            break;
        }
        case 3: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(52112 as vorbis, 1, 0, 100, 20, 20));
            break;
        }
        case 4: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(52113 as vorbis, 1, 0, 100, 20, 20));
            break;
        }
    };
    return;
}