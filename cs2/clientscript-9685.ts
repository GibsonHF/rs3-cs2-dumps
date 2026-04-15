//
function script9685(int0: component): void {
    IF_SETMODELANIM(22644 as seq, int0);
    switch (RANDOM(5)) {
        case 0: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(43547 as vorbis, 1, 0, 80, 20, 20));
            break;
        }
        case 1: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(43559 as vorbis, 1, 0, 80, 20, 20));
            break;
        }
        case 2: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(43544 as vorbis, 1, 0, 80, 20, 20));
            break;
        }
        case 3: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(43557 as vorbis, 1, 0, 80, 20, 20));
            break;
        }
        case 4: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(43546 as vorbis, 1, 0, 80, 20, 20));
            break;
        }
    };
    return;
}