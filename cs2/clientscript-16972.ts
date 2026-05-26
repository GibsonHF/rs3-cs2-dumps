//
function script16972(): void {
    IF_SETMODELANIM(35057, 69992472);
    switch (RANDOM(5)) {
        case 0: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(35948, 1, 0, 80, 20, 20));
            break;
        }
        case 1: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(35954, 1, 0, 80, 20, 20));
            break;
        }
        case 2: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(35943, 1, 0, 50, 20, 20));
            break;
        }
        case 3: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(35954, 1, 0, 80, 20, 20));
            break;
        }
        case 4: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(35948, 1, 0, 30, 20, 20));
            break;
        }
    };
    return;
}